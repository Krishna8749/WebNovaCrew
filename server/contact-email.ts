import type { Request, Response } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(1).max(300),
  message: z.string().trim().min(1).max(10000),
});

const CONTACT_TO = [
  "info@webnovacrew.com",
  "webnovacrewtechnologies@gmail.com",
] as const;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(data: z.infer<typeof contactSchema>): string {
  const { name, email, subject, message } = data;
  return `<!DOCTYPE html>
<html><body style="font-family:system-ui,sans-serif;line-height:1.5;">
  <p><strong>New contact form message</strong> (webnovacrew.com)</p>
  <p><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
  <p><strong>Message:</strong></p>
  <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
</body></html>`;
}

type SmtpAuthMethod = "LOGIN" | "PLAIN";

function smtpAuthMethodFromEnv(): SmtpAuthMethod {
  const m = process.env.SMTP_AUTH_METHOD?.trim().toUpperCase();
  return m === "PLAIN" ? "PLAIN" : "LOGIN";
}

type MailPayload = {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
  text: string;
};

async function sendViaSmtp(data: z.infer<typeof contactSchema>): Promise<void> {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) {
    return Promise.reject(new Error("SMTP credentials missing"));
  }
  let nodemailer: typeof import("nodemailer");
  try {
    nodemailer = await import("nodemailer").then(m => m.default || m);
  } catch {
    return Promise.reject(
      new Error(
        'Install nodemailer: npm install nodemailer (required for SMTP_USER/SMTP_PASS)',
      ),
    );
  }

  const from = process.env.CONTACT_FROM?.trim() ?? user;
  const mail: MailPayload = {
    from,
    to: [...CONTACT_TO],
    replyTo: data.email,
    subject: `Contact: ${data.subject}`,
    html: buildHtml(data),
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
  };

  const primaryAuth = smtpAuthMethodFromEnv();
  const customHost = process.env.SMTP_HOST?.trim();
  const customPort = process.env.SMTP_PORT?.trim();
  const customSecure = process.env.SMTP_SECURE?.trim();
  const allowFallback = process.env.SMTP_NO_FALLBACK !== "1";

  function secureForPrimary(port: number): boolean {
    if (customSecure === "true") return true;
    if (customSecure === "false") return false;
    return port === 465;
  }

  type Attempt = {
    host: string;
    port: number;
    secure: boolean;
    authMethod: SmtpAuthMethod;
    label: string;
  };

  const attempts: Attempt[] = [];

  const host0 = customHost ?? "smtp.zoho.com";
  const port0 = customPort ? parseInt(customPort, 10) : 587;
  attempts.push({
    host: host0,
    port: port0,
    secure: secureForPrimary(port0),
    authMethod: primaryAuth,
    label: "primary",
  });

  if (allowFallback && !customHost) {
    if (host0 !== "smtp.zoho.in" || port0 !== 587) {
      attempts.push({
        host: "smtp.zoho.in",
        port: 587,
        secure: false,
        authMethod: primaryAuth,
        label: "zoho.in:587",
      });
    }
    if (host0 !== "smtp.zoho.com" || port0 !== 465) {
      attempts.push({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        authMethod: primaryAuth,
        label: "zoho.com:465",
      });
    }
  }

  if (primaryAuth === "LOGIN" && allowFallback) {
    attempts.push({
      host: host0,
      port: port0,
      secure: secureForPrimary(port0),
      authMethod: "PLAIN",
      label: "primary+PLAIN",
    });
  }

  const seen = new Set<string>();
  let lastErr: unknown;

  for (const a of attempts) {
    const key = `${a.host}:${a.port}:${a.secure}:${a.authMethod}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const transporter = nodemailer.createTransport({
      host: a.host,
      port: a.port,
      secure: a.secure,
      requireTLS: !a.secure && a.port === 587,
      auth: { user, pass, method: a.authMethod },
      authMethod: a.authMethod,
      tls: { minVersion: "TLSv1.2" as const },
    });

    try {
      await transporter.sendMail(mail);
      return;
    } catch (e) {
      lastErr = e;
      const code =
        e && typeof e === "object" && "code" in e
          ? String((e as { code?: unknown }).code)
          : "";
      if (code !== "EAUTH") throw e;
      console.warn(`[contact] SMTP auth failed (${a.label} ${a.host}:${a.port} ${a.authMethod}), trying next…`);
    }
  }

  throw lastErr ?? new Error("SMTP send failed");
}

async function sendViaResend(data: z.infer<typeof contactSchema>): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY missing");
  const from =
    process.env.CONTACT_FROM ?? "Web Nova Crew <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [...CONTACT_TO],
      reply_to: data.email,
      subject: `Contact: ${data.subject}`,
      html: buildHtml(data),
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Resend ${res.status}: ${t}`);
  }
}

export async function handleContactPost(req: Request, res: Response): Promise<void> {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Please check your form fields." });
    return;
  }
  const data = parsed.data;

  const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  if (!hasSmtp && !hasResend) {
    res.status(503).json({
      message:
        "Contact form is not configured. Set SMTP_USER and SMTP_PASS for Zoho Mail (defaults: smtp.zoho.com, port 587), or set RESEND_API_KEY.",
    });
    return;
  }

  try {
    if (hasSmtp) {
      await sendViaSmtp(data);
    } else {
      await sendViaResend(data);
    }
    res.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    const code =
      e && typeof e === "object" && "code" in e
        ? String((e as { code?: unknown }).code)
        : "";
    const isAuth = code === "EAUTH";
    res.status(500).json({
      message: isAuth
        ? "Email sign-in failed (535). Use the exact Zoho mailbox address as SMTP_USER, the app password with no spaces as SMTP_PASS, and if it still fails try SMTP_HOST=smtp.zoho.in (India) or SMTP_PORT=465 with SMTP_SECURE=true."
        : "Could not send your message. Please try again or email us directly.",
    });
  }
}
