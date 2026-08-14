import type { Request, Response } from "express";
import { z } from "zod";

const applySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional().nullable(),
  jobTitle: z.string().trim().min(1).max(200),
  jobSlug: z.string().trim().max(200).optional().nullable(),
  linkedin: z.string().trim().max(500).optional().nullable(),
  portfolio: z.string().trim().max(500).optional().nullable(),
  coverLetter: z.string().trim().max(10000).optional().nullable(),
});

const CAREERS_TO = [
  "info@webnovacrew.com",
] as const;
const CAREERS_CC = "webnovacrewtechnologies@gmail.com";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notifyHtml(d: z.infer<typeof applySchema>): string {
  const li = d.linkedin
    ? `<a href="${esc(d.linkedin)}">${esc(d.linkedin)}</a>`
    : "Not provided";
  const po = d.portfolio
    ? `<a href="${esc(d.portfolio)}">${esc(d.portfolio)}</a>`
    : "Not provided";
  const cl = d.coverLetter
    ? `<h3 style="margin:16px 0 8px;color:#1e293b">Cover Letter:</h3>
       <div style="background:#f8fafc;border-left:4px solid #2983DB;padding:16px;white-space:pre-wrap;color:#334155">${esc(d.coverLetter)}</div>`
    : "";

  return `<!DOCTYPE html><html><head><style>
    body{font-family:system-ui,sans-serif;line-height:1.6;color:#334155;max-width:600px;margin:0 auto;padding:20px}
    td{padding:12px;border-bottom:1px solid #f1f5f9}
  </style></head><body>
  <div style="background:linear-gradient(135deg,#2983DB,#1A6BB5);color:white;padding:24px;border-radius:12px 12px 0 0;text-align:center">
    <h1 style="margin:0;color:#B1F51F">New Job Application</h1>
    <p style="margin:8px 0 0;opacity:.85">Position: ${esc(d.jobTitle)}${d.jobSlug ? ` &mdash; webnovacrew.com/careers/${esc(d.jobSlug)}` : ""}</p>
  </div>
  <div style="background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="font-weight:600;color:#475569;width:140px">Applicant</td><td><strong>${esc(d.name)}</strong></td></tr>
      <tr><td style="font-weight:600;color:#475569">Email</td><td><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></td></tr>
      <tr><td style="font-weight:600;color:#475569">Phone</td><td>${d.phone ? esc(d.phone) : "Not provided"}</td></tr>
      <tr><td style="font-weight:600;color:#475569">LinkedIn</td><td>${li}</td></tr>
      <tr><td style="font-weight:600;color:#475569">Portfolio</td><td>${po}</td></tr>
    </table>
    ${cl}
  </div>
  <div style="text-align:center;font-size:12px;color:#94a3b8;margin-top:24px"><p>© 2026 Web Nova Crew</p></div>
  </body></html>`;
}

function replyHtml(name: string, jobTitle: string): string {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:20px">
  <div style="background:linear-gradient(135deg,#2983DB,#1A6BB5);color:white;padding:32px;border-radius:12px 12px 0 0;text-align:center">
    <h1 style="margin:0;font-size:24px">Application Received! 🎉</h1>
    <p style="margin:8px 0 0;opacity:.8">Web Nova Crew</p>
  </div>
  <div style="background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:32px">
    <p>Hi <strong>${esc(name)}</strong>,</p>
    <p>Thank you for applying for <strong>${esc(jobTitle)}</strong> at Web Nova Crew!</p>
    <p>Our HR team will review your profile carefully and respond within <strong>3&ndash;5 business days</strong>.</p>
    <p>In the meantime, explore more about us:</p>
    <ul>
      <li><a href="https://webnovacrew.com/portfolio" style="color:#2983DB">Our Portfolio</a></li>
      <li><a href="https://webnovacrew.com/blog" style="color:#2983DB">Our Blog</a></li>
    </ul>
    <p>Best regards,<br><strong>Web Nova Crew &mdash; HR Team</strong></p>
    <a href="https://webnovacrew.com/careers"
       style="display:inline-block;background:#B1F51F;color:#0D1B2E;padding:12px 28px;border-radius:50px;font-weight:700;text-decoration:none;margin-top:16px">
      View All Openings
    </a>
  </div>
  <div style="text-align:center;font-size:12px;color:#94a3b8;margin-top:24px">
    <p>© 2026 Web Nova Crew &bull; <a href="https://webnovacrew.com" style="color:#94a3b8">webnovacrew.com</a></p>
  </div>
  </body></html>`;
}

async function smtpSend(
  to: string[],
  cc: string | undefined,
  subject: string,
  html: string,
  replyTo: string,
): Promise<void> {
  const user = process.env.SMTP_USER?.trim() || "info@webnovacrew.com";
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) throw new Error("SMTP credentials missing");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nm: any = await import("nodemailer").then((m: any) => m.default || m);
  const from = process.env.CONTACT_FROM?.trim() ?? `Web Nova Crew <${user}>`;
  const primaryHost = process.env.SMTP_HOST?.trim() || "smtp.zoho.in";

  const attempts = [
    { host: primaryHost, port: 587, secure: false },
    { host: "smtp.zoho.in", port: 587, secure: false },
    { host: "smtp.zoho.in", port: 465, secure: true },
    { host: "smtp.zoho.com", port: 587, secure: false },
  ];

  let lastErr: unknown;
  for (const a of attempts) {
    const t = nm.createTransport({
      host: a.host, port: a.port, secure: a.secure,
      requireTLS: !a.secure && a.port === 587,
      auth: { user, pass, method: "LOGIN" },
      tls: { minVersion: "TLSv1.2" },
    });
    try {
      await t.sendMail({ from, to, cc, replyTo, subject, html });
      return;
    } catch (e) {
      lastErr = e;
      const code =
        e && typeof e === "object" && "code" in e
          ? String((e as { code?: unknown }).code)
          : "";
      if (code !== "EAUTH") throw e;
    }
  }
  throw lastErr ?? new Error("SMTP failed");
}

export async function handleJobApply(req: Request, res: Response): Promise<void> {
  const parsed = applySchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    res.status(400).json({ message: "Please fill in all required fields." });
    return;
  }
  const data = parsed.data;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[careers/apply] SMTP not configured â€” application logged only");
    res.json({ ok: true, note: "Application logged. Email not configured on server." });
    return;
  }

  try {
    // 1. Notify team
    await smtpSend(
      [...CAREERS_TO],
      CAREERS_CC,
      `[Job Apply] ${data.jobTitle} \u2014 ${data.name}`,
      notifyHtml(data),
      data.email,
    );
    // 2. Auto-reply to applicant
    await smtpSend(
      [data.email],
      undefined,
      `Application received \u2014 ${data.jobTitle} | Web Nova Crew`,
      replyHtml(data.name, data.jobTitle),
      "careers@webnovacrew.com",
    );
    res.json({ ok: true });
  } catch (e) {
    console.error("[careers/apply]", e);
    res
      .status(500)
      .json({ message: "Could not submit. Please email careers@webnovacrew.com directly." });
  }
}

