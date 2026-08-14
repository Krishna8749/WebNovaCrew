import type { Request, Response } from "express";
import { z } from "zod";
import { storage } from "./storage";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional().nullable(),
  service: z.string().trim().min(1).max(100),
  budget: z.string().trim().max(100).optional().nullable(),
  message: z.string().trim().min(1).max(10000),
  subject: z.string().trim().max(300).optional().nullable(),
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
  const { name, email, phone, service, budget, message, subject } = data;
  return `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: #ffffff; padding: 24px; border-radius: 12px 12px 0 0; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #a3e635; }
    .header p { margin: 8px 0 0; font-size: 14px; color: #93c5fd; }
    .content { background-color: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; padding: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px; border-bottom: 1px solid #f1f5f9; }
    .table td.label { font-weight: 600; color: #475569; width: 140px; }
    .table td.value { color: #0f172a; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; font-family: inherit; white-space: pre-wrap; color: #334155; margin-top: 8px; }
    .footer { text-align: center; font-size: 12px; color: #94a3b8; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Lead Enquiry</h1>
    <p>Received from Web Nova Crew website</p>
  </div>
  <div class="content">
    <table class="table">
      <tr>
        <td class="label">Name</td>
        <td class="value">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td class="label">Email</td>
        <td class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      <tr>
        <td class="label">Phone</td>
        <td class="value">${phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : "Not provided"}</td>
      </tr>
      <tr>
        <td class="label">Service</td>
        <td class="value"><strong>${escapeHtml(service)}</strong></td>
      </tr>
      <tr>
        <td class="label">Budget</td>
        <td class="value">${budget ? escapeHtml(budget) : "Not provided"}</td>
      </tr>
      <tr>
        <td class="label">Subject</td>
        <td class="value">${subject ? escapeHtml(subject) : "Lead Enquiry"}</td>
      </tr>
    </table>
    <h3 style="margin: 0 0 8px; color: #1e293b; font-size: 16px;">Project Description:</h3>
    <div class="message-box">${escapeHtml(message)}</div>
  </div>
  <div class="footer">
    <p>© 2026 Web Nova Crew. All rights reserved.</p>
  </div>
</body>
</html>`;
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
  const mailSubject = data.subject || `New Lead: ${data.service}`;
  const mailText = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nService: ${data.service}\nBudget: ${data.budget || "N/A"}\n\n${data.message}`;

  const mail: MailPayload = {
    from,
    to: [...CONTACT_TO],
    replyTo: data.email,
    subject: mailSubject,
    html: buildHtml(data),
    text: mailText,
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
      subject: data.subject || `New Lead: ${data.service}`,
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

  // 1. Save lead to storage (database/file fallback) first
  try {
    await storage.createLead({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      budget: data.budget || null,
      message: data.message,
    });
  } catch (err) {
    console.error("[contact-email] Error saving lead to storage:", err);
  }

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
