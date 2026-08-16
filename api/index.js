// api/index.ts
import express from "express";

// server/contact-email.ts
import { z } from "zod";

// server/storage.ts
import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
var MemStorage = class {
  users;
  leads;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.leads = /* @__PURE__ */ new Map();
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createLead(insertLead) {
    const id = randomUUID();
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const lead = { ...insertLead, id, createdAt };
    this.leads.set(id, lead);
    try {
      const dataDir = path.resolve(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "leads.json");
      let currentLeads = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        currentLeads = JSON.parse(fileContent);
      } catch {
      }
      currentLeads.push(lead);
      await fs.writeFile(filePath, JSON.stringify(currentLeads, null, 2), "utf-8");
      console.log(`[Storage] Saved lead to local file backup: ${filePath}`);
    } catch (err) {
      console.error("[Storage] Failed to save lead to local file backup:", err);
    }
    return lead;
  }
};
var storage = new MemStorage();

// server/contact-email.ts
var contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional().nullable(),
  service: z.string().trim().min(1).max(100),
  budget: z.string().trim().max(100).optional().nullable(),
  message: z.string().trim().min(1).max(1e4),
  subject: z.string().trim().max(300).optional().nullable()
});
var CONTACT_TO = [
  "info@webnovacrew.com",
  "webnovacrewtechnologies@gmail.com"
];
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function buildHtml(data) {
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
    <p>\xA9 2026 Web Nova Crew. All rights reserved.</p>
  </div>
</body>
</html>`;
}
function smtpAuthMethodFromEnv() {
  const m = process.env.SMTP_AUTH_METHOD?.trim().toUpperCase();
  return m === "PLAIN" ? "PLAIN" : "LOGIN";
}
async function sendViaSmtp(data) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) {
    return Promise.reject(new Error("SMTP credentials missing"));
  }
  let nodemailer;
  try {
    nodemailer = await import("nodemailer").then((m) => m.default || m);
  } catch {
    return Promise.reject(
      new Error(
        "Install nodemailer: npm install nodemailer (required for SMTP_USER/SMTP_PASS)"
      )
    );
  }
  const from = process.env.CONTACT_FROM?.trim() ?? user;
  const mailSubject = data.subject || `New Lead: ${data.service}`;
  const mailText = `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Service: ${data.service}
Budget: ${data.budget || "N/A"}

${data.message}`;
  const mail = {
    from,
    to: [...CONTACT_TO],
    replyTo: data.email,
    subject: mailSubject,
    html: buildHtml(data),
    text: mailText
  };
  const primaryAuth = smtpAuthMethodFromEnv();
  const customHost = process.env.SMTP_HOST?.trim();
  const customPort = process.env.SMTP_PORT?.trim();
  const customSecure = process.env.SMTP_SECURE?.trim();
  const allowFallback = process.env.SMTP_NO_FALLBACK !== "1";
  function secureForPrimary(port) {
    if (customSecure === "true") return true;
    if (customSecure === "false") return false;
    return port === 465;
  }
  const attempts = [];
  const host0 = customHost ?? "smtp.zoho.com";
  const port0 = customPort ? parseInt(customPort, 10) : 587;
  attempts.push({
    host: host0,
    port: port0,
    secure: secureForPrimary(port0),
    authMethod: primaryAuth,
    label: "primary"
  });
  if (allowFallback && !customHost) {
    if (host0 !== "smtp.zoho.in" || port0 !== 587) {
      attempts.push({
        host: "smtp.zoho.in",
        port: 587,
        secure: false,
        authMethod: primaryAuth,
        label: "zoho.in:587"
      });
    }
    if (host0 !== "smtp.zoho.com" || port0 !== 465) {
      attempts.push({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        authMethod: primaryAuth,
        label: "zoho.com:465"
      });
    }
  }
  if (primaryAuth === "LOGIN" && allowFallback) {
    attempts.push({
      host: host0,
      port: port0,
      secure: secureForPrimary(port0),
      authMethod: "PLAIN",
      label: "primary+PLAIN"
    });
  }
  const seen = /* @__PURE__ */ new Set();
  let lastErr;
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
      tls: { minVersion: "TLSv1.2" }
    });
    try {
      await transporter.sendMail(mail);
      return;
    } catch (e) {
      lastErr = e;
      const code = e && typeof e === "object" && "code" in e ? String(e.code) : "";
      if (code !== "EAUTH") throw e;
      console.warn(`[contact] SMTP auth failed (${a.label} ${a.host}:${a.port} ${a.authMethod}), trying next\u2026`);
    }
  }
  throw lastErr ?? new Error("SMTP send failed");
}
async function sendViaResend(data) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY missing");
  const from = process.env.CONTACT_FROM ?? "Web Nova Crew <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [...CONTACT_TO],
      reply_to: data.email,
      subject: data.subject || `New Lead: ${data.service}`,
      html: buildHtml(data)
    })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Resend ${res.status}: ${t}`);
  }
}
async function handleContactPost(req, res) {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Please check your form fields." });
    return;
  }
  const data = parsed.data;
  try {
    await storage.createLead({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      budget: data.budget || null,
      message: data.message
    });
  } catch (err) {
    console.error("[contact-email] Error saving lead to storage:", err);
  }
  const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  if (!hasSmtp && !hasResend) {
    res.status(503).json({
      message: "Contact form is not configured. Set SMTP_USER and SMTP_PASS for Zoho Mail (defaults: smtp.zoho.com, port 587), or set RESEND_API_KEY."
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
    const code = e && typeof e === "object" && "code" in e ? String(e.code) : "";
    const isAuth = code === "EAUTH";
    res.status(500).json({
      message: isAuth ? "Email sign-in failed (535). Use the exact Zoho mailbox address as SMTP_USER, the app password with no spaces as SMTP_PASS, and if it still fails try SMTP_HOST=smtp.zoho.in (India) or SMTP_PORT=465 with SMTP_SECURE=true." : "Could not send your message. Please try again or email us directly."
    });
  }
}

// server/careers-email.ts
import { z as z2 } from "zod";
var applySchema = z2.object({
  name: z2.string().trim().min(1).max(200),
  email: z2.string().trim().email().max(320),
  phone: z2.string().trim().max(50).optional().nullable(),
  jobTitle: z2.string().trim().min(1).max(200),
  jobSlug: z2.string().trim().max(200).optional().nullable(),
  linkedin: z2.string().trim().max(500).optional().nullable(),
  portfolio: z2.string().trim().max(500).optional().nullable(),
  coverLetter: z2.string().trim().max(1e4).optional().nullable()
});
var CAREERS_TO = [
  "info@webnovacrew.com"
];
var CAREERS_CC = "webnovacrewtechnologies@gmail.com";
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function notifyHtml(d) {
  const li = d.linkedin ? `<a href="${esc(d.linkedin)}">${esc(d.linkedin)}</a>` : "Not provided";
  const po = d.portfolio ? `<a href="${esc(d.portfolio)}">${esc(d.portfolio)}</a>` : "Not provided";
  const cl = d.coverLetter ? `<h3 style="margin:16px 0 8px;color:#1e293b">Cover Letter:</h3>
       <div style="background:#f8fafc;border-left:4px solid #2983DB;padding:16px;white-space:pre-wrap;color:#334155">${esc(d.coverLetter)}</div>` : "";
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
  <div style="text-align:center;font-size:12px;color:#94a3b8;margin-top:24px"><p>\xA9 2026 Web Nova Crew</p></div>
  </body></html>`;
}
function replyHtml(name, jobTitle) {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:20px">
  <div style="background:linear-gradient(135deg,#2983DB,#1A6BB5);color:white;padding:32px;border-radius:12px 12px 0 0;text-align:center">
    <h1 style="margin:0;font-size:24px">Application Received! \u{1F389}</h1>
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
    <p>\xA9 2026 Web Nova Crew &bull; <a href="https://webnovacrew.com" style="color:#94a3b8">webnovacrew.com</a></p>
  </div>
  </body></html>`;
}
async function smtpSend(to, cc, subject, html, replyTo) {
  const user = process.env.SMTP_USER?.trim() || "info@webnovacrew.com";
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) throw new Error("SMTP credentials missing");
  const nm = await import("nodemailer").then((m) => m.default || m);
  const from = process.env.CONTACT_FROM?.trim() ?? `Web Nova Crew <${user}>`;
  const primaryHost = process.env.SMTP_HOST?.trim() || "smtp.zoho.in";
  const attempts = [
    { host: primaryHost, port: 587, secure: false },
    { host: "smtp.zoho.in", port: 587, secure: false },
    { host: "smtp.zoho.in", port: 465, secure: true },
    { host: "smtp.zoho.com", port: 587, secure: false }
  ];
  let lastErr;
  for (const a of attempts) {
    const t = nm.createTransport({
      host: a.host,
      port: a.port,
      secure: a.secure,
      requireTLS: !a.secure && a.port === 587,
      auth: { user, pass, method: "LOGIN" },
      tls: { minVersion: "TLSv1.2" }
    });
    try {
      await t.sendMail({ from, to, cc, replyTo, subject, html });
      return;
    } catch (e) {
      lastErr = e;
      const code = e && typeof e === "object" && "code" in e ? String(e.code) : "";
      if (code !== "EAUTH") throw e;
    }
  }
  throw lastErr ?? new Error("SMTP failed");
}
async function handleJobApply(req, res) {
  const parsed = applySchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    res.status(400).json({ message: "Please fill in all required fields." });
    return;
  }
  const data = parsed.data;
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[careers/apply] SMTP not configured \xE2\u20AC\u201D application logged only");
    res.json({ ok: true, note: "Application logged. Email not configured on server." });
    return;
  }
  try {
    await smtpSend(
      [...CAREERS_TO],
      CAREERS_CC,
      `[Job Apply] ${data.jobTitle} \u2014 ${data.name}`,
      notifyHtml(data),
      data.email
    );
    await smtpSend(
      [data.email],
      void 0,
      `Application received \u2014 ${data.jobTitle} | Web Nova Crew`,
      replyHtml(data.name, data.jobTitle),
      "careers@webnovacrew.com"
    );
    res.json({ ok: true });
  } catch (e) {
    console.error("[careers/apply]", e);
    res.status(500).json({ message: "Could not submit. Please email careers@webnovacrew.com directly." });
  }
}

// server/terabox.ts
import { Readable } from "stream";
import { z as z3 } from "zod";

// server/terabox-sessions.ts
import { randomBytes } from "crypto";
var SESSION_TTL_MS = 2 * 60 * 60 * 1e3;
var MAX_SESSIONS = 3e3;
var sessions = /* @__PURE__ */ new Map();
function purgeSessions() {
  const now = Date.now();
  sessions.forEach((s, id) => {
    if (s.expiresAt <= now) sessions.delete(id);
  });
  if (sessions.size <= MAX_SESSIONS) return;
  const sorted = Array.from(sessions.entries()).sort((a, b) => a[1].createdAt - b[1].createdAt);
  for (const [id] of sorted.slice(0, sessions.size - MAX_SESSIONS)) sessions.delete(id);
}
function newSessionId() {
  return randomBytes(18).toString("base64url");
}
function createPlaybackSession(input) {
  purgeSessions();
  let id = newSessionId();
  while (sessions.has(id)) id = newSessionId();
  const now = Date.now();
  sessions.set(id, {
    id,
    uk: input.uk,
    shareid: input.shareid,
    fs_id: input.fs_id,
    fileName: input.fileName,
    quality: input.quality || "360",
    size: input.size,
    duration: input.duration,
    thumbnail: input.thumbnail ?? null,
    width: input.width,
    height: input.height,
    dlink: input.dlink ?? null,
    shareUrl: input.shareUrl ?? null,
    upstreamHeaders: input.upstreamHeaders ?? null,
    mimeType: input.mimeType ?? null,
    createdAt: now,
    expiresAt: now + SESSION_TTL_MS
  });
  return id;
}
function getPlaybackSession(id) {
  purgeSessions();
  const session = sessions.get(id);
  if (!session || session.expiresAt <= Date.now()) return null;
  return session;
}
var PLAYBACK_QUALITY_OPTIONS = ["360", "480", "720", "1080", "1440", "2160"];
function buildProtectedPlaybackPayload(sessionId, extra) {
  const session = getPlaybackSession(sessionId);
  const hasDlink = Boolean(session?.dlink);
  return {
    playbackId: sessionId,
    fileName: session?.fileName ?? "Video",
    quality: session?.quality ?? "360",
    qualityOptions: [...PLAYBACK_QUALITY_OPTIONS],
    thumbnail: session?.thumbnail ?? null,
    /** Full file direct CDN dlink available via Toofani backend. */
    fullFile: hasDlink,
    /** Direct CDN streaming mode */
    playbackMode: hasDlink ? "progressive" : "hls",
    mimeType: session?.mimeType ?? "video/mp4",
    /** Direct CDN stream via Cloudflare / streaming proxy */
    streamUrl: hasDlink ? `/api/terabox/file/${sessionId}` : null,
    needsRemux: false,
    ...extra
  };
}

// server/terabox.ts
var HMAC_KEY = "iuuPc64E4Fhn0rTXEzrnbLph0o5qyEEa";
var WORKER_BASE = "https://novacrew-terabox-proxy.teraboxhigh.workers.dev";
function getVideoBackendBase() {
  return process.env.VIDEO_BACKEND_URL?.trim().replace(/\/+$/, "") || "https://toofani-app.vercel.app";
}
function getTeraboxNdus() {
  const raw = (process.env.TERABOX_NDUS ?? "").trim();
  if (!raw) return null;
  return raw.startsWith("ndus=") ? raw.slice(5) : raw;
}
function teraboxCookieHeader() {
  const ndus = getTeraboxNdus();
  return ndus ? `ndus=${ndus}` : void 0;
}
async function resolveViaVideoBackend(shareUrl) {
  const base = getVideoBackendBase();
  try {
    const resp = await fetch(`${base}/api/link-info`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ url: shareUrl }),
      signal: AbortSignal.timeout(45e3)
    });
    if (!resp.ok) {
      console.warn("[terabox:video-backend] link-info HTTP", resp.status);
      return null;
    }
    const data = await resp.json();
    const directUrl = data.data?.directUrl?.trim();
    if (!data.success || !directUrl?.startsWith("http")) {
      console.warn("[terabox:video-backend] no directUrl", data.error ?? "");
      return null;
    }
    const headers = {};
    const src = data.data?.headers ?? {};
    for (const key of ["User-Agent", "Referer", "Origin", "Accept", "Accept-Language", "Cookie"]) {
      const val = src[key];
      if (typeof val === "string" && val) headers[key] = val;
    }
    return {
      title: data.data?.title || "Video",
      size: data.data?.size,
      sizeHuman: data.data?.sizeHuman,
      thumbnail: data.data?.thumbnail ?? null,
      mimeType: data.data?.mimeType,
      directUrl,
      headers
    };
  } catch (e) {
    console.warn("[terabox:video-backend]", e instanceof Error ? e.message : e);
    return null;
  }
}
function idsFromDirectUrl(directUrl) {
  try {
    const fid = new URL(directUrl).searchParams.get("fid") || "";
    const parts = fid.split("-");
    if (parts.length >= 3) {
      return { uk: parts[0], fs_id: parts[parts.length - 1] };
    }
  } catch {
  }
  return {};
}
var resolveSchema = z3.object({
  url: z3.string().trim().max(2048),
  quality: z3.enum(["360", "480", "720", "1080", "1440", "2160"]).optional().default("360")
});
var TERABOX_HOSTS = [
  "terabox.com",
  "1024terabox.com",
  "teraboxapp.com",
  "terabox.app",
  "4funbox.com",
  "mirrobox.com",
  "nephobox.com",
  "freeterabox.com",
  "terasharelink.com",
  "tibibox.com",
  "momerybox.com",
  "terabox.fun",
  "1024tera.com",
  "teraboxlink.com",
  "terasharefile.com"
];
var TERABOX_REDIRECT_HOSTS = ["terasharefile.com"];
var DISKWALA_HOSTS = [
  "diskwala.com",
  "disk-wala.com",
  "diskwala.app",
  "disk-wala.app",
  "diskwala.me",
  "disk-wala.me",
  "diskwala.net"
];
function hostMatches(host, hosts) {
  return hosts.some((h) => host === h || host.endsWith(`.${h}`));
}
function isTeraboxUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return hostMatches(host, TERABOX_HOSTS);
  } catch {
    return false;
  }
}
function isDiskwalaUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return hostMatches(host, DISKWALA_HOSTS);
  } catch {
    return false;
  }
}
function extractDiskwalaCode(input) {
  const bare = input.trim();
  const m = bare.match(/([a-f0-9]{24})/i);
  return m?.[1] ?? null;
}
async function resolveDiskwalaViaBackend(shareUrl) {
  const base = getVideoBackendBase();
  const code = extractDiskwalaCode(shareUrl);
  const canonicalUrl = code ? `https://diskwala.com/app/${code}` : shareUrl;
  const candidateUrls = [
    `${base}/api/dw/info?url=${encodeURIComponent(canonicalUrl)}`,
    `${base}/api/dw/info?url=${encodeURIComponent(shareUrl)}`
  ];
  for (const fetchUrl of candidateUrls) {
    try {
      const resp = await fetch(fetchUrl, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(2e4)
      });
      if (!resp.ok) continue;
      const data = await resp.json();
      if (!data.success || !data.data) continue;
      const d = data.data;
      const directUrl = d.streamUrl || d.downloadUrl || d.directUrl;
      if (!directUrl?.startsWith("http")) continue;
      return {
        title: d.title || "DiskWala Video",
        size: d.sizeBytes ? Number(d.sizeBytes) : void 0,
        sizeHuman: d.size,
        thumbnail: d.thumbnail ?? null,
        mimeType: d.mimeType || "video/mp4",
        directUrl,
        headers: d.headers || {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Referer: "https://www.diskwala.com/",
          Accept: "*/*"
        }
      };
    } catch {
    }
  }
  try {
    const resp = await fetch(`${base}/api/link-info`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ url: canonicalUrl }),
      signal: AbortSignal.timeout(2e4)
    });
    if (resp.ok) {
      const data = await resp.json();
      const directUrl = data.data?.directUrl?.trim();
      if (data.success && directUrl?.startsWith("http")) {
        return {
          title: data.data?.title || "DiskWala Video",
          size: data.data?.size,
          sizeHuman: data.data?.sizeHuman,
          thumbnail: data.data?.thumbnail ?? null,
          mimeType: data.data?.mimeType || "video/mp4",
          directUrl,
          headers: data.data?.headers || {
            "User-Agent": BROWSER_HEADERS["User-Agent"],
            Referer: "https://www.diskwala.com/",
            Accept: "*/*"
          }
        };
      }
    }
  } catch (e) {
    console.warn("[terabox:diskwala]", e instanceof Error ? e.message : e);
  }
  return null;
}
function extractSurlVariants(input) {
  const bare = input.replace(/\s+/g, "");
  const raw = /* @__PURE__ */ new Set();
  if (/^[A-Za-z0-9_-]+$/.test(bare) && bare.length >= 8) raw.add(bare);
  try {
    const u = new URL(bare.startsWith("http") ? bare : `https://${bare}`);
    const s = u.searchParams.get("surl");
    if (s) raw.add(s);
  } catch {
  }
  const m = bare.match(/\/s\/([A-Za-z0-9_-]+)/);
  if (m?.[1]) raw.add(m[1]);
  const stripped = [];
  const withOne = [];
  for (const code of Array.from(raw)) {
    if (!code) continue;
    if (code.startsWith("1") && code.length > 10) {
      withOne.push(code);
      stripped.push(code.slice(1));
    } else {
      stripped.push(code);
      withOne.push(`1${code}`);
    }
  }
  return Array.from(/* @__PURE__ */ new Set([...stripped, ...withOne]));
}
function normalizeShareUrl(input) {
  let bare = input.trim().replace(/[\u200B-\u200D\uFEFF]/g, "");
  if (!/^https?:\/\//i.test(bare)) bare = `https://${bare}`;
  return bare;
}
async function resolveRedirectUrl(url) {
  try {
    const resp = await fetch(url, {
      redirect: "manual",
      headers: { "User-Agent": BROWSER_HEADERS["User-Agent"], Accept: "*/*" },
      signal: AbortSignal.timeout(15e3)
    });
    const loc = resp.headers.get("location");
    if (resp.status >= 300 && resp.status < 400 && loc) {
      return new URL(loc, url).toString();
    }
    if (resp.ok) return url;
    return null;
  } catch (e) {
    console.warn("[terabox:redirect]", e instanceof Error ? e.message : e);
    return null;
  }
}
function surlFromReferer(referer) {
  try {
    const s = new URL(referer).searchParams.get("surl");
    return s ? s.replace(/^1/, "") : null;
  } catch {
    return null;
  }
}
function teraboxErrnoMessage(errno) {
  const code = Number(errno);
  if (Number.isNaN(code)) return null;
  if (code === 400141 || code === 4001412) {
    return "This TeraBox link is password-protected. Use a public link without an extraction code.";
  }
  if (code === 105 || code === 404) {
    return "Share not found. Check the link is correct, public, and not expired.";
  }
  if (code === 130) {
    return "Video is still processing on TeraBox. Wait a few minutes and try again.";
  }
  if (code === 9100 || code === 9101) {
    return "TeraBox rate-limited this request. Wait 1\u20132 minutes and try again.";
  }
  return null;
}
function extractJsTokenFromHtml(html) {
  const patterns = [
    /decodeURIComponent\(`([^`]+)`\)/,
    /decodeURIComponent\('([^']+)'\)/,
    /decodeURIComponent\("([^"]+)"\)/
  ];
  for (const pattern of patterns) {
    const encoded = html.match(pattern);
    if (encoded?.[1]) {
      try {
        const decoded = decodeURIComponent(encoded[1]);
        const fromEval = decoded.match(/fn\("([^"]+)"/);
        if (fromEval?.[1]) return fromEval[1];
      } catch {
      }
    }
  }
  const direct = html.match(/fn\("([A-F0-9]{40,})"/i);
  if (direct?.[1]) return direct[1];
  const assign = html.match(/jsToken["']?\s*[:=]\s*["']([A-F0-9]{40,})["']/i);
  return assign?.[1] ?? null;
}
function detectSharePageIssue(html) {
  if (/id=["']pwd["']|name=["']pwd["']|please enter the extraction code|input the extraction code/i.test(
    html
  )) {
    return "This TeraBox link is password-protected. Use a public link without an extraction code.";
  }
  if (/verify you are human|access denied|unusual traffic/i.test(html) && html.length < 4e3) {
    return "TeraBox temporarily blocked the server. Wait 1\u20132 minutes and try again.";
  }
  return null;
}
function buildSharePageCandidates(shareUrl, surlVariants) {
  const normalized = normalizeShareUrl(shareUrl);
  const candidates = [normalized];
  try {
    const u = new URL(normalized);
    if (!u.hostname.startsWith("www.")) {
      u.hostname = `www.${u.hostname}`;
      candidates.push(u.toString());
    }
  } catch {
  }
  const primary = surlVariants.find((s) => !s.startsWith("1") || s.length <= 10) ?? surlVariants[0];
  if (primary) {
    for (const domain of ["www.1024tera.com", "www.terabox.app", "www.1024terabox.com"]) {
      candidates.push(`https://${domain}/sharing/link?surl=${encodeURIComponent(primary)}`);
    }
  }
  return Array.from(new Set(candidates));
}
var BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
};
async function fetchHtmlDirect(url) {
  try {
    const resp = await fetch(url, {
      headers: BROWSER_HEADERS,
      redirect: "follow",
      signal: AbortSignal.timeout(2e4)
    });
    if (!resp.ok) return null;
    return { html: await resp.text(), finalUrl: resp.url };
  } catch {
    return null;
  }
}
async function fetchHtmlViaWorker(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const resp = await fetch(`${WORKER_BASE}/proxy?url=${encodeURIComponent(url)}`, {
        headers: { Accept: "text/html", "User-Agent": BROWSER_HEADERS["User-Agent"] },
        signal: AbortSignal.timeout(25e3)
      });
      if (!resp.ok) continue;
      const html = await resp.text();
      if (!html || html.length < 2e3) {
        if (attempt === 0) await new Promise((r) => setTimeout(r, 400));
        continue;
      }
      return { html, finalUrl: url };
    } catch {
    }
  }
  return null;
}
async function fetchSharePage(shareUrl, surlVariants) {
  const candidates = buildSharePageCandidates(shareUrl, surlVariants);
  let fallback = null;
  for (const url of candidates) {
    for (const fetchHtml of [fetchHtmlViaWorker, fetchHtmlDirect]) {
      const result = await fetchHtml(url);
      if (!result) continue;
      const finalHost = hostFromShareUrl(result.finalUrl) ?? hostFromShareUrl(url) ?? "www.terabox.app";
      const domain = finalHost.startsWith("www.") ? finalHost : `www.${finalHost}`;
      const jsToken = extractJsTokenFromHtml(result.html);
      const issue = detectSharePageIssue(result.html) ?? void 0;
      const refererSurl = surlFromReferer(result.finalUrl) ?? surlVariants.find((s) => !s.startsWith("1") || s.length <= 10) ?? surlVariants[0];
      const referer = refererSurl ? `https://${domain}/sharing/link?surl=${encodeURIComponent(refererSurl)}` : result.finalUrl;
      if (jsToken) {
        return { html: result.html, referer, domain, jsToken, issue };
      }
      if (!fallback || result.html.length > fallback.html.length) {
        fallback = { html: result.html, referer, domain, issue };
      }
    }
  }
  if (fallback) {
    return { ...fallback, jsToken: null };
  }
  return null;
}
function hostFromShareUrl(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
function pickThumbnail(raw) {
  const direct = raw.thumbnail ?? raw.thumb ?? raw.poster ?? raw.thumburl ?? raw.thumbUrl;
  if (typeof direct === "string" && direct.startsWith("http")) return direct;
  const thumbs = raw.thumbs;
  if (thumbs) {
    for (const key of ["url3", "url2", "url1", "icon"]) {
      if (thumbs[key]?.startsWith("http")) return thumbs[key];
    }
  }
  return null;
}
function isDirEntry(file) {
  return file.isdir === 1 || file.isdir === "1" || file.is_dir === 1;
}
function pickPlayableFile(list) {
  const files = list.filter((f) => !isDirEntry(f));
  const video = files.find(
    (f) => /\.(mp4|mkv|webm|mov|m4v|avi|ts|flv)$/i.test(String(f.server_filename ?? ""))
  );
  return video ?? files[0] ?? null;
}
function mapListResponse(data) {
  const list = data.list;
  if (data.errno !== 0 || !list?.length) return null;
  const file = pickPlayableFile(list);
  if (!file) return null;
  return {
    uk: String(data.uk),
    share_id: String(data.share_id),
    list: [
      {
        fs_id: String(file.fs_id),
        server_filename: String(file.server_filename ?? "Video"),
        size: file.size ? String(file.size) : void 0,
        duration: typeof file.duration === "number" ? file.duration : void 0,
        thumbnail: pickThumbnail(file),
        width: typeof file.width === "number" ? file.width : void 0,
        height: typeof file.height === "number" ? file.height : void 0
      }
    ]
  };
}
async function hmacSha1(data) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(HMAC_KEY),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function fetchShareList(domain, surl, jsToken, opts) {
  const referer = `https://${domain}/sharing/link?surl=${encodeURIComponent(surl)}`;
  const root = opts?.root ?? 1;
  const dirParam = opts?.dir ? `&dir=${encodeURIComponent(opts.dir)}` : "";
  let lastErrno;
  for (const ct of [0, 5]) {
    const apiUrl = `https://${domain}/share/list?app_id=250528&web=1&channel=dubox&clienttype=${ct}&page=1&num=100&shorturl=${encodeURIComponent(surl)}&root=${root}${dirParam}&jsToken=${encodeURIComponent(jsToken)}`;
    try {
      const resp = await fetch(apiUrl, {
        headers: {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: referer
        },
        signal: AbortSignal.timeout(15e3)
      });
      if (!resp.ok) continue;
      const data = await resp.json();
      if (data.errno === 0) return { data };
      if (typeof data.errno === "number") lastErrno = data.errno;
    } catch {
    }
  }
  return { data: null, errno: lastErrno };
}
async function fetchMetadataWithJsToken(domain, surl, jsToken) {
  const root = await fetchShareList(domain, surl, jsToken, { root: 1 });
  if (root.data) {
    const mapped = mapListResponse(root.data);
    if (mapped) return { meta: mapped };
    const list = root.data.list ?? [];
    const folder = list.find((f) => isDirEntry(f));
    if (folder) {
      const path3 = String(folder.path ?? `/${folder.server_filename ?? ""}`);
      const child = await fetchShareList(domain, surl, jsToken, { root: 0, dir: path3 });
      if (child.data) {
        const mappedChild = mapListResponse(child.data);
        if (mappedChild) return { meta: mappedChild };
      }
      if (child.errno !== void 0) return { meta: null, errno: child.errno };
    }
  }
  return { meta: null, errno: root.errno };
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function fetchMetadata(surl) {
  const domains = ["www.1024terabox.com", "www.terabox.app", "dm.1024terabox.com"];
  const clienttypes = [5, 0, 3];
  for (const domain of domains) {
    for (const ct of clienttypes) {
      const url = `https://${domain}/share/list?app_id=250528&web=1&channel=dubox&clienttype=${ct}&page=1&num=20&shorturl=${surl}&root=1&jsToken=0`;
      try {
        const resp = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 14; RMX3491) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Referer": `https://${domain}/`,
            "Accept-Language": "en-US,en;q=0.9"
          },
          redirect: "manual",
          signal: AbortSignal.timeout(1e4)
        });
        if (resp.status !== 200) continue;
        const data = await resp.json();
        if (data.errno === 0 && data.list?.length) return data;
        if (data.errno === 140) {
          await sleep(500);
          continue;
        }
        if (data.errno === 400141) {
          await sleep(1e3);
          continue;
        }
      } catch {
        await sleep(300);
      }
    }
  }
  for (const domain of domains) {
    for (const ct of clienttypes) {
      const url = `https://${domain}/share/list?app_id=250528&web=1&channel=dubox&clienttype=${ct}&page=1&num=20&shorturl=${surl}&root=1&jsToken=0`;
      try {
        const resp = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Referer": `https://${domain}/`,
            "Accept-Language": "en-US,en;q=0.9"
          },
          redirect: "manual",
          signal: AbortSignal.timeout(1e4)
        });
        if (resp.status !== 200) continue;
        const data = await resp.json();
        if (data.errno === 0 && data.list?.length) return data;
      } catch {
      }
    }
  }
  return null;
}
async function resolveShareMetadata(shareUrl, surlVariants) {
  const page = await fetchSharePage(shareUrl, surlVariants);
  const jsToken = page?.jsToken ?? null;
  const refererSurl = page ? surlFromReferer(page.referer) : null;
  const variants = Array.from(
    /* @__PURE__ */ new Set([
      ...surlVariants,
      ...refererSurl ? extractSurlVariants(refererSurl) : [],
      ...refererSurl ? [refererSurl] : []
    ])
  );
  let lastErrno;
  if (page && jsToken) {
    const hostHint = hostFromShareUrl(shareUrl)?.replace(/^www\./, "") ?? "";
    const preferredDomain = hostHint.includes("1024tera") && !hostHint.includes("terabox") ? "www.1024tera.com" : hostHint.includes("1024terabox") ? "www.1024terabox.com" : page.domain;
    const domains = Array.from(
      /* @__PURE__ */ new Set([
        preferredDomain,
        "www.1024tera.com",
        "www.terabox.app",
        "www.1024terabox.com",
        page.domain
      ])
    );
    for (const surl of variants) {
      for (const domain of domains) {
        const attempt = await fetchMetadataWithJsToken(domain, surl, jsToken);
        if (attempt.meta) return { meta: attempt.meta };
        if (attempt.errno !== void 0) lastErrno = attempt.errno;
      }
    }
  }
  for (const surl of variants) {
    const meta = await fetchMetadata(surl) ?? await resolveViaWorker(shareUrl);
    if (meta) return { meta };
  }
  if (page?.issue) {
    return { meta: null, reason: page.issue };
  }
  const specific = teraboxErrnoMessage(lastErrno);
  if (!page) {
    return {
      meta: null,
      reason: "Could not reach TeraBox. Check the link and try again."
    };
  }
  if (!jsToken) {
    return {
      meta: null,
      reason: "TeraBox blocked the request. Wait a minute and try again."
    };
  }
  if (lastErrno === 400141 || lastErrno === 4001412) {
    return {
      meta: null,
      reason: "This TeraBox link needs a password (extraction code), or TeraBox is verifying the request. Use a public link."
    };
  }
  return {
    meta: null,
    reason: specific ?? `Could not fetch file metadata${lastErrno != null ? ` (code ${lastErrno})` : ""}. Link may be private, expired, or Terabox is rate-limiting.`
  };
}
async function resolveViaWorker(shareUrl) {
  const workerUrl = `${WORKER_BASE}/resolve?url=${encodeURIComponent(shareUrl)}`;
  try {
    const resp = await fetch(workerUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "application/json"
      },
      signal: AbortSignal.timeout(3e4)
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    if (!data.success || !data.uk || !data.shareid || !data.fs_id) return null;
    const thumbnail = pickThumbnail(data);
    return {
      uk: String(data.uk),
      share_id: String(data.shareid),
      list: [
        {
          fs_id: String(data.fs_id),
          server_filename: data.filename ?? "Video",
          size: data.size_mb ? String(Math.round(data.size_mb * 1024 * 1024)) : void 0,
          duration: data.duration_s,
          thumbnail,
          width: data.width,
          height: data.height
        }
      ]
    };
  } catch {
    return null;
  }
}
async function fetchShareDlink(uk, shareid, fid) {
  const cookie = teraboxCookieHeader();
  if (!cookie) return null;
  const ts = Math.floor(Date.now() / 1e3);
  const sign = await hmacSha1("0dubox" + ts);
  const domains = ["www.terabox.app", "www.terabox.com", "www.1024terabox.com"];
  for (const domain of domains) {
    const params = new URLSearchParams({
      app_id: "250528",
      web: "1",
      channel: "dubox",
      clienttype: "0",
      uk,
      primaryid: shareid,
      product: "share",
      fid_list: `[${fid}]`,
      sign,
      timestamp: String(ts)
    });
    const url = `https://${domain}/share/download?${params.toString()}`;
    try {
      const resp = await fetch(url, {
        headers: {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: `https://${domain}/`,
          Cookie: cookie
        },
        signal: AbortSignal.timeout(2e4)
      });
      if (!resp.ok) continue;
      const data = await resp.json();
      const dlink = data.list?.[0]?.dlink;
      if (data.errno === 0 && typeof dlink === "string" && dlink.startsWith("http")) {
        return dlink.includes("origin=") ? dlink : `${dlink}&origin=dlna`;
      }
    } catch {
    }
  }
  return null;
}
function formatSize(bytes) {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
function buildStreamingUrl(uk, shareid, fid, quality, sign, ts, host = "dm.terabox.app") {
  const q = quality || "360";
  const params = new URLSearchParams({
    uk,
    shareid,
    type: `M3U8_AUTO_${q}`,
    fid,
    sign,
    timestamp: String(ts),
    jsToken: "",
    esl: "1",
    isplayer: "1",
    ehps: "1",
    clienttype: "0",
    app_id: "250528",
    web: "1",
    channel: "dubox"
  });
  return `https://${host}/share/streaming?${params.toString()}`;
}
function rewritePlaylistForBrowser(m3u8, segmentProxyBase) {
  const workerBase = process.env.CLOUDFLARE_WORKER_URL?.trim().replace(/\/$/, "");
  const base = workerBase || segmentProxyBase.replace(/\/$/, "");
  return m3u8.split("\n").map((line) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith("http")) return line;
    if (trimmed.includes("/api/terabox/ts?") || trimmed.includes("/proxy?url=")) return line;
    if (workerBase) {
      return `${base}/proxy?url=${encodeURIComponent(trimmed)}`;
    }
    return `${base}/api/terabox/ts?url=${encodeURIComponent(trimmed)}`;
  }).join("\n");
}
function publicOriginFromReq(req) {
  const xfProto = String(req.headers["x-forwarded-proto"] ?? "").split(",")[0]?.trim();
  const proto = xfProto || req.protocol || "https";
  const host = String(req.headers["x-forwarded-host"] ?? "").split(",")[0]?.trim() || req.get("host") || "webnovacrew.com";
  return `${proto}://${host}`;
}
async function fetchPlaylistText(url, referer) {
  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": BROWSER_HEADERS["User-Agent"],
        Accept: "*/*",
        Referer: referer
      },
      signal: AbortSignal.timeout(3e4)
    });
    if (!resp.ok) return null;
    const text = await resp.text();
    if (!text.includes("#EXTM3U")) return null;
    return text;
  } catch {
    return null;
  }
}
async function getM3U8(uk, shareid, fid, quality, segmentProxyBase) {
  const q = quality || "360";
  const ts = Math.floor(Date.now() / 1e3);
  const sign = await hmacSha1("0dubox" + ts);
  const finalize = (body) => segmentProxyBase ? rewritePlaylistForBrowser(body, segmentProxyBase) : body;
  const hosts = ["dm.terabox.app", "dm.terabox.com", "www.terabox.app"];
  for (const host of hosts) {
    const streamUrl = buildStreamingUrl(uk, shareid, fid, q, sign, ts, host);
    const direct = await fetchPlaylistText(streamUrl, `https://${host}/`);
    if (direct) return finalize(direct);
  }
  try {
    const workerUrl = `${WORKER_BASE}/m3u8?uk=${uk}&shareid=${shareid}&fid=${fid}&quality=${q}&sign=${sign}&timestamp=${ts}`;
    const resp = await fetch(workerUrl, { signal: AbortSignal.timeout(3e4) });
    if (resp.ok) {
      const text = await resp.text();
      if (text.includes("#EXTM3U")) return finalize(text);
    }
  } catch {
  }
  return null;
}
async function handleTeraboxResolve(req, res) {
  const parsed = resolveSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Paste a valid TeraBox share link." });
    return;
  }
  const { url: rawUrl, quality } = parsed.data;
  let url = normalizeShareUrl(rawUrl);
  if (isDiskwalaUrl(url)) {
    await handleDiskwalaResolve(url, quality, res);
    return;
  }
  if (hostMatches(new URL(url).hostname.toLowerCase(), TERABOX_REDIRECT_HOSTS)) {
    const target = await resolveRedirectUrl(url);
    if (target && isTeraboxUrl(target)) {
      url = target;
    } else {
      res.status(502).json({ message: "Could not follow the mirror link to TeraBox. Try the original TeraBox link." });
      return;
    }
  }
  if (!isTeraboxUrl(url)) {
    res.status(400).json({ message: "URL must be a TeraBox share link (include terabox.com or 1024terabox.com)." });
    return;
  }
  const surlVariants = extractSurlVariants(url);
  if (!surlVariants.length) {
    res.status(400).json({ message: "Could not extract share code from URL." });
    return;
  }
  try {
    const [vb, resolved] = await Promise.all([
      resolveViaVideoBackend(url).catch((e) => {
        console.warn("[terabox:resolve] video-backend failed:", e instanceof Error ? e.message : e);
        return null;
      }),
      resolveShareMetadata(url, surlVariants).catch((e) => {
        console.warn("[terabox:resolve] metadata failed:", e instanceof Error ? e.message : e);
        return { meta: null, reason: "Metadata fetch failed" };
      })
    ]);
    if (!vb && !resolved.meta?.list?.length) {
      console.error("[terabox:resolve] failed", {
        surlVariants,
        url: url.slice(0, 80),
        reason: resolved.reason,
        videoBackend: Boolean(vb)
      });
      res.status(502).json({
        message: resolved.reason ?? "Could not fetch file metadata. Link may be private, expired, or Terabox is rate-limiting."
      });
      return;
    }
    const file = resolved.meta?.list?.[0];
    const fromDlink = vb?.directUrl ? idsFromDirectUrl(vb.directUrl) : {};
    const uk = String(resolved.meta?.uk || fromDlink.uk || "");
    const shareid = String(resolved.meta?.share_id || "");
    const fid = String(file?.fs_id || fromDlink.fs_id || "");
    let dlink = vb?.directUrl || null;
    let upstreamHeaders = vb?.headers || null;
    if (!dlink && uk && shareid && fid) {
      dlink = await fetchShareDlink(uk, shareid, fid);
      if (dlink) {
        const cookie = teraboxCookieHeader();
        upstreamHeaders = {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Referer: "https://www.terabox.com/",
          Accept: "*/*",
          ...cookie ? { Cookie: cookie } : {}
        };
      }
    }
    const fileName = vb?.title || file?.server_filename || "Video";
    const sizeLabel = vb?.sizeHuman || (vb?.size ? formatSize(vb.size) : void 0) || (file?.size ? formatSize(parseInt(file.size, 10)) : void 0);
    console.log("[terabox:resolve] ok", {
      fileName: fileName.slice(0, 60),
      via: vb ? "video-backend" : "legacy",
      hasDlink: Boolean(dlink),
      hasHls: Boolean(uk && shareid && fid),
      surl: surlVariants[0]?.slice(0, 12)
    });
    const playbackId = createPlaybackSession({
      uk,
      shareid,
      fs_id: fid,
      fileName,
      quality,
      size: sizeLabel,
      duration: file?.duration ? Math.round(file.duration) : void 0,
      thumbnail: vb?.thumbnail ?? file?.thumbnail ?? null,
      width: file?.width,
      height: file?.height,
      dlink,
      shareUrl: url,
      upstreamHeaders,
      mimeType: vb?.mimeType ?? null
    });
    res.json({
      ok: true,
      ...buildProtectedPlaybackPayload(playbackId, {
        size: sizeLabel,
        duration: file?.duration ? Math.round(file.duration) : void 0
      })
    });
  } catch (e) {
    console.error("[terabox]", e);
    res.status(500).json({ message: "Failed to resolve link. Please try again." });
  }
}
async function handleDiskwalaResolve(url, quality, res) {
  const code = extractDiskwalaCode(url);
  if (!code) {
    res.status(400).json({ message: "Could not extract DiskWala share code from URL." });
    return;
  }
  try {
    const dw = await resolveDiskwalaViaBackend(url);
    if (!dw?.directUrl) {
      console.error("[terabox:diskwala:resolve] failed", { url: url.slice(0, 80) });
      res.status(502).json({
        message: "Could not fetch DiskWala file. Link may be private, expired, or DiskWala is rate-limiting."
      });
      return;
    }
    console.log("[terabox:diskwala:resolve] ok", {
      fileName: (dw.title ?? "Video").slice(0, 60),
      hasStream: Boolean(dw.directUrl)
    });
    const playbackId = createPlaybackSession({
      uk: "",
      shareid: "",
      fs_id: "",
      fileName: dw.title ?? "Video",
      quality,
      size: dw.sizeHuman ?? (dw.size ? formatSize(dw.size) : void 0),
      thumbnail: dw.thumbnail ?? null,
      dlink: dw.directUrl,
      shareUrl: url,
      upstreamHeaders: dw.headers ?? null,
      mimeType: dw.mimeType ?? "video/mp4"
    });
    res.json({
      ok: true,
      ...buildProtectedPlaybackPayload(playbackId, {
        size: dw.sizeHuman ?? (dw.size ? formatSize(dw.size) : void 0)
      })
    });
  } catch (e) {
    console.error("[terabox:diskwala]", e);
    res.status(500).json({ message: "Failed to resolve DiskWala link. Please try again." });
  }
}
async function handleTeraboxPlay(req, res) {
  const playbackId = String(req.params.playbackId ?? "").trim();
  const q = String(req.query.quality ?? "360");
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Reload the video." });
    return;
  }
  try {
    if (session.dlink && (!session.uk || !session.shareid || !session.fs_id)) {
      res.redirect(302, `/api/terabox/file/${encodeURIComponent(playbackId)}`);
      return;
    }
    const origin = publicOriginFromReq(req);
    let m3u8 = await getM3U8(session.uk, session.shareid, session.fs_id, q, origin);
    if (!m3u8) {
      await new Promise((r) => setTimeout(r, 600));
      m3u8 = await getM3U8(session.uk, session.shareid, session.fs_id, q, origin);
    }
    if (!m3u8) {
      if (session.dlink) {
        res.redirect(302, `/api/terabox/file/${encodeURIComponent(playbackId)}`);
        return;
      }
      res.status(502).json({ message: "Could not start playback. The HLS stream is unavailable for this video." });
      return;
    }
    res.set({
      "Content-Type": "application/vnd.apple.mpegurl",
      "Cache-Control": "no-store, private",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
      "Access-Control-Allow-Origin": "*"
    });
    res.send(m3u8);
  } catch (e) {
    console.error("[terabox:play]", e);
    res.status(503).json({ message: "Stream fetch failed. Please try again." });
  }
}
async function handleTeraboxStream(req, res) {
  res.status(410).json({
    message: "Direct stream URLs are disabled. Use the site player."
  });
}
async function handleTeraboxFile(req, res) {
  const playbackId = String(req.params.playbackId ?? "").trim();
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Reload the video." });
    return;
  }
  let dlink = session.dlink;
  if (!dlink && session.shareUrl) {
    if (isDiskwalaUrl(session.shareUrl)) {
      const dw = await resolveDiskwalaViaBackend(session.shareUrl);
      if (dw?.directUrl) {
        dlink = dw.directUrl;
        session.dlink = dlink;
        session.upstreamHeaders = dw.headers ?? null;
        if (dw.mimeType) session.mimeType = dw.mimeType;
      }
    } else {
      const vb = await resolveViaVideoBackend(session.shareUrl);
      if (vb?.directUrl) {
        dlink = vb.directUrl;
        session.dlink = dlink;
        session.upstreamHeaders = vb.headers ?? null;
        if (vb.mimeType) session.mimeType = vb.mimeType;
      }
    }
  }
  if (!dlink && session.uk && session.shareid && session.fs_id) {
    dlink = await fetchShareDlink(session.uk, session.shareid, session.fs_id);
    if (dlink) session.dlink = dlink;
  }
  if (!dlink) {
    res.status(502).json({
      message: "Full file link unavailable. Video backend did not return a direct URL."
    });
    return;
  }
  if (req.method === "HEAD") {
    res.status(200);
    res.set({
      "Content-Type": session.mimeType || "video/mp4",
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "noindex, nofollow"
    });
    res.end();
    return;
  }
  let upstreamHeaders = {
    "User-Agent": BROWSER_HEADERS["User-Agent"],
    Referer: "https://dm.1024terabox.com/",
    Accept: "*/*",
    ...session.upstreamHeaders || {}
  };
  if (!upstreamHeaders.Cookie) {
    const cookie = teraboxCookieHeader();
    if (cookie) upstreamHeaders.Cookie = cookie;
  }
  try {
    const range = req.headers.range;
    if (typeof range === "string" && range) upstreamHeaders.Range = range;
    let upstream = await fetch(dlink, {
      headers: upstreamHeaders,
      redirect: "follow",
      // Long-lived stream — do not abort mid-transfer.
      signal: AbortSignal.timeout(30 * 60 * 1e3)
    });
    if (!upstream.ok && upstream.status !== 206 && session.shareUrl && isDiskwalaUrl(session.shareUrl)) {
      console.warn("[terabox:diskwala:file] dlink expired, re-resolving");
      const dw = await resolveDiskwalaViaBackend(session.shareUrl);
      if (dw?.directUrl) {
        session.dlink = dw.directUrl;
        session.upstreamHeaders = dw.headers ?? null;
        const retry = await fetch(dw.directUrl, {
          headers: { ...upstreamHeaders, ...dw.headers ?? {} },
          redirect: "follow",
          signal: AbortSignal.timeout(30 * 60 * 1e3)
        });
        if (retry.ok || retry.status === 206) {
          dlink = dw.directUrl;
          upstreamHeaders = { ...upstreamHeaders, ...dw.headers ?? {} };
          upstream = retry;
        }
      }
    }
    if (!upstream.ok && upstream.status !== 206) {
      res.status(502).json({ message: `Upstream file ${upstream.status}` });
      return;
    }
    const out = {
      "Content-Type": upstream.headers.get("content-type") || session.mimeType || "application/octet-stream",
      "Cache-Control": "private, no-store",
      "Accept-Ranges": "bytes",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Disposition": `inline; filename="${(session.fileName || "video").replace(/"/g, "")}"`
    };
    const len = upstream.headers.get("content-length");
    if (len) out["Content-Length"] = len;
    const cr = upstream.headers.get("content-range");
    if (cr) out["Content-Range"] = cr;
    res.status(upstream.status === 206 ? 206 : 200);
    res.set(out);
    if (!upstream.body) {
      res.end();
      return;
    }
    const nodeStream = Readable.fromWeb(upstream.body);
    nodeStream.on("error", (err) => {
      console.error("[terabox:file:pipe]", err);
      if (!res.headersSent) res.status(502).end();
      else res.destroy(err);
    });
    req.on("close", () => {
      nodeStream.destroy();
    });
    nodeStream.pipe(res);
  } catch (e) {
    console.error("[terabox:file]", e);
    if (!res.headersSent) res.status(502).json({ message: "Full file fetch failed." });
  }
}
async function handleTeraboxDownload(req, res) {
  const playbackId = String(req.query.playbackId ?? req.body?.playbackId ?? "").trim();
  const q = String(req.query.quality ?? req.body?.quality ?? "360");
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Play the video again." });
    return;
  }
  let dlink = session.dlink;
  if (!dlink && session.shareUrl) {
    if (isDiskwalaUrl(session.shareUrl)) {
      const dw = await resolveDiskwalaViaBackend(session.shareUrl);
      if (dw?.directUrl) {
        dlink = dw.directUrl;
        session.dlink = dlink;
        session.upstreamHeaders = dw.headers ?? null;
      }
    } else {
      const vb = await resolveViaVideoBackend(session.shareUrl);
      if (vb?.directUrl) {
        dlink = vb.directUrl;
        session.dlink = dlink;
        session.upstreamHeaders = vb.headers ?? null;
      }
    }
  }
  if (!dlink && session.uk && session.shareid && session.fs_id) {
    dlink = await fetchShareDlink(session.uk, session.shareid, session.fs_id);
  }
  if (dlink) {
    session.dlink = dlink;
    if (process.env.CLOUDFLARE_WORKER_URL) {
      const workerUrl = `${process.env.CLOUDFLARE_WORKER_URL.replace(/\/$/, "")}/proxy?url=${encodeURIComponent(dlink)}&filename=${encodeURIComponent(session.fileName || "video")}`;
      res.redirect(workerUrl);
      return;
    }
    try {
      const headers = {
        "User-Agent": BROWSER_HEADERS["User-Agent"],
        Referer: "https://dm.1024terabox.com/",
        Accept: "*/*",
        ...session.upstreamHeaders || {}
      };
      if (!headers.Cookie) {
        const cookie = teraboxCookieHeader();
        if (cookie) headers.Cookie = cookie;
      }
      const upstream = await fetch(dlink, {
        headers,
        redirect: "follow",
        signal: AbortSignal.timeout(12e4)
      });
      if (!upstream.ok) {
        res.status(502).json({ message: "Could not prepare download." });
        return;
      }
      const fileName2 = session.fileName.replace(/[^\w.\-() ]+/g, "_") || "video.bin";
      res.set({
        "Content-Type": upstream.headers.get("content-type") || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName2}"`,
        "Cache-Control": "no-store, private",
        "X-Robots-Tag": "noindex, nofollow"
      });
      const len = upstream.headers.get("content-length");
      if (len) res.set("Content-Length", len);
      const buf = Buffer.from(await upstream.arrayBuffer());
      res.end(buf);
      return;
    } catch (e) {
      console.error("[terabox:download:dlink]", e);
    }
  }
  const m3u8Content = await getM3U8(session.uk, session.shareid, session.fs_id, q);
  if (!m3u8Content || !m3u8Content.includes("#EXTM3U")) {
    res.status(502).json({ message: "Could not prepare download." });
    return;
  }
  const segmentUrls = [];
  for (const line of m3u8Content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    if (trimmed.startsWith("http")) {
      segmentUrls.push(trimmed);
    }
  }
  if (!segmentUrls.length) {
    res.status(400).json({ message: "No video segments found in M3U8." });
    return;
  }
  console.log(`[terabox:download] Starting ${segmentUrls.length} segments at ${q}p`);
  const fileName = session.fileName.replace(/[^\w.\-() ]+/g, "_") || "video.ts";
  res.set({
    "Content-Type": "video/mp2t",
    "Content-Disposition": `attachment; filename="${fileName}"`,
    "Transfer-Encoding": "chunked",
    "Cache-Control": "no-store, private",
    "X-Robots-Tag": "noindex, nofollow"
  });
  let downloaded = 0;
  let failed = 0;
  for (let i = 0; i < segmentUrls.length; i++) {
    try {
      const segResp = await fetch(segmentUrls[i], {
        headers: {
          "Referer": "https://dm.terabox.app/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        signal: AbortSignal.timeout(3e4)
      });
      if (!segResp.ok) {
        failed++;
        continue;
      }
      if (segResp.body) {
        const reader = segResp.body.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
          downloaded += value.byteLength;
        }
      }
    } catch {
      failed++;
    }
  }
  console.log(`[terabox:download] Done: ${(downloaded / 1024 / 1024).toFixed(1)} MB, ${failed} failed`);
  res.end();
}
async function handleTeraboxTs(req, res) {
  const tsUrl = String(req.query.url ?? "");
  if (!tsUrl || !/^https?:\/\//i.test(tsUrl)) {
    res.status(400).end();
    return;
  }
  try {
    const host = new URL(tsUrl).hostname.toLowerCase();
    const allowed = host.includes("terabox") || host.includes("freeterabox") || host.includes("dubox") || host.includes("4funbox") || /^v\d+-/.test(host);
    if (!allowed) {
      res.status(400).end();
      return;
    }
  } catch {
    res.status(400).end();
    return;
  }
  try {
    const headers = {
      Referer: "https://dm.terabox.app/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "*/*",
      "Accept-Encoding": "identity"
    };
    const range = req.headers.range;
    if (typeof range === "string" && range) headers.Range = range;
    const resp = await fetch(tsUrl, {
      headers,
      redirect: "follow",
      signal: AbortSignal.timeout(45e3)
    });
    if (!resp.ok && resp.status !== 206) {
      if (resp.status >= 500 || resp.status === 429) {
        await new Promise((r) => setTimeout(r, 400));
        const retry = await fetch(tsUrl, { headers, redirect: "follow", signal: AbortSignal.timeout(45e3) });
        if (retry.ok || retry.status === 206) {
          const outH = {
            "Content-Type": retry.headers.get("content-type") || "video/mp2t",
            "Cache-Control": "private, max-age=300",
            "Access-Control-Allow-Origin": "*"
          };
          const rLen = retry.headers.get("content-length");
          if (rLen) outH["Content-Length"] = rLen;
          res.status(retry.status === 206 ? 206 : 200).set(outH);
          if (retry.body) {
            Readable.fromWeb(retry.body).pipe(res);
          } else {
            res.end();
          }
          return;
        }
      }
      res.status(502).end();
      return;
    }
    const outHeaders = {
      "Content-Type": resp.headers.get("content-type") || "video/mp2t",
      "Cache-Control": "private, max-age=300",
      "X-Robots-Tag": "noindex, nofollow",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
      "Accept-Ranges": "bytes"
    };
    const len = resp.headers.get("content-length");
    if (len) outHeaders["Content-Length"] = len;
    const cr = resp.headers.get("content-range");
    if (cr) outHeaders["Content-Range"] = cr;
    res.status(resp.status === 206 ? 206 : 200);
    res.set(outHeaders);
    if (!resp.body) {
      res.end();
      return;
    }
    const nodeStream = Readable.fromWeb(resp.body);
    nodeStream.on("error", (err) => {
      console.error("[terabox:ts:pipe]", err);
      if (!res.headersSent) res.status(502).end();
      else res.destroy(err);
    });
    req.on("close", () => nodeStream.destroy());
    nodeStream.pipe(res);
  } catch (e) {
    console.error("[terabox:ts]", e);
    if (!res.headersSent) res.status(502).end();
  }
}

// server/terabox-shares.ts
import { randomBytes as randomBytes2 } from "crypto";
import fs2 from "fs";
import path2 from "path";
import { z as z4 } from "zod";

// server/ad-cleaner.ts
var lowCpcReplacements = {
  free: "premium",
  cheap: "affordable",
  download: "cloud stream",
  downloader: "cloud player",
  "video app": "media portal",
  "video player": "media player",
  "short video": "clips",
  "viral video": "featured content",
  reels: "media streams",
  "scratch card": "rewards tier",
  "spin wheel": "loyalty portal",
  "daily reward": "exclusive benefit",
  "coin reward": "member benefit",
  "earn coin": "acquire points",
  "free coin": "member credits",
  "earn money online fast": "financial consulting services"
};
function cleanLowCpcKeywords(text) {
  if (!text) return text;
  let cleaned = text;
  for (const [badWord, replacement] of Object.entries(lowCpcReplacements)) {
    const regex = new RegExp(`\\b${badWord}\\b`, "gi");
    cleaned = cleaned.replace(regex, (match) => {
      if (match === match.toUpperCase()) return replacement.toUpperCase();
      if (match[0] === match[0].toUpperCase()) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  return cleaned;
}

// server/terabox-shares.ts
var SHARE_TTL_MS = 30 * 24 * 60 * 60 * 1e3;
var MAX_SHARES = 5e3;
var SHORT_ID_LEN = 6;
var SHARE_FILE = path2.join(process.cwd(), "data", "terabox-shares.json");
var shares = /* @__PURE__ */ new Map();
function loadShareStore() {
  try {
    if (!fs2.existsSync(SHARE_FILE)) return;
    const raw = fs2.readFileSync(SHARE_FILE, "utf8");
    const data = JSON.parse(raw);
    const now = Date.now();
    for (const [id, record] of Object.entries(data)) {
      if (record.expiresAt > now) shares.set(id, record);
    }
  } catch {
  }
}
function persistShareStore() {
  try {
    const dir = path2.dirname(SHARE_FILE);
    if (!fs2.existsSync(dir)) fs2.mkdirSync(dir, { recursive: true });
    const data = {};
    shares.forEach((record, id) => {
      data[id] = record;
    });
    fs2.writeFileSync(SHARE_FILE, JSON.stringify(data), "utf8");
  } catch {
  }
}
loadShareStore();
function getShareLinkBase() {
  return (process.env.SHARE_LINK_BASE ?? process.env.VITE_SHARE_LINK_BASE ?? "").trim().replace(/\/$/, "");
}
function buildShareUrl(sharePath, req) {
  const configured = getShareLinkBase();
  if (configured) return `${configured}${sharePath}`;
  if (req) {
    const proto = String(req.headers["x-forwarded-proto"] ?? req.protocol ?? "https");
    const host = String(req.headers["x-forwarded-host"] ?? req.get("host") ?? "localhost");
    return `${proto}://${host}${sharePath}`;
  }
  return sharePath;
}
function encodeShareToken(record) {
  const payload = JSON.stringify({
    u: record.uk,
    s: record.shareid,
    f: record.fs_id,
    q: record.quality || "360",
    n: record.fileName.slice(0, 80),
    z: record.size,
    t: record.thumbnail,
    d: record.duration,
    w: record.width,
    h: record.height,
    l: record.url,
    e: record.expiresAt
  });
  return Buffer.from(payload, "utf8").toString("base64url");
}
function decodeShareToken(token) {
  try {
    const json = Buffer.from(token, "base64url").toString("utf8");
    const data = JSON.parse(json);
    if (!data.u || !data.s || !data.f) return null;
    const now = Date.now();
    const expiresAt = data.e && data.e > now ? data.e : now + SHARE_TTL_MS;
    if (expiresAt <= now) return null;
    return {
      id: token,
      uk: data.u,
      shareid: data.s,
      fs_id: data.f,
      fileName: data.n || "Video",
      quality: data.q || "360",
      size: data.z,
      thumbnail: data.t ?? null,
      duration: data.d,
      width: data.w,
      height: data.h,
      url: data.l,
      createdAt: now,
      expiresAt
    };
  } catch {
    return null;
  }
}
function resolveShareRecord(id, backupToken) {
  purgeExpiredShares();
  const trimmed = id.trim();
  if (!trimmed && !backupToken) return null;
  if (backupToken) {
    const fromBackup = decodeShareToken(backupToken.trim());
    if (fromBackup) return fromBackup;
  }
  if (trimmed.length > SHORT_ID_LEN + 2) {
    const decoded = decodeShareToken(trimmed);
    if (decoded) return decoded;
  }
  if (trimmed.length <= SHORT_ID_LEN + 2) {
    const stored = shares.get(trimmed);
    if (stored && stored.expiresAt > Date.now()) return stored;
  }
  return null;
}
function statelessShareToken(record) {
  return encodeShareToken(record);
}
function buildShortSharePath(record) {
  return `/r/${record.id}`;
}
function purgeExpiredShares() {
  const now = Date.now();
  let changed = false;
  shares.forEach((record, id) => {
    if (record.expiresAt <= now) {
      shares.delete(id);
      changed = true;
    }
  });
  if (shares.size <= MAX_SHARES) {
    if (changed) persistShareStore();
    return;
  }
  const sorted = Array.from(shares.entries()).sort((a, b) => a[1].createdAt - b[1].createdAt);
  const remove = sorted.slice(0, shares.size - MAX_SHARES);
  for (const [id] of remove) shares.delete(id);
  persistShareStore();
}
function generateShortId() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = randomBytes2(SHORT_ID_LEN);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}
async function toPublicPayload(record, req) {
  const q = record.quality || "360";
  const publicPath = buildShortSharePath(record);
  let dlink = null;
  let upstreamHeaders = null;
  let thumbnail = record.thumbnail ?? null;
  let size = record.size;
  if (record.url) {
    try {
      if (isDiskwalaUrl(record.url)) {
        const dw = await resolveDiskwalaViaBackend(record.url);
        if (dw?.directUrl) {
          dlink = dw.directUrl;
          upstreamHeaders = dw.headers ?? null;
        }
        if (dw?.thumbnail) thumbnail = dw.thumbnail;
        if (dw?.sizeHuman) size = dw.sizeHuman;
      } else {
        const vb = await resolveViaVideoBackend(record.url);
        if (vb?.directUrl) {
          dlink = vb.directUrl;
          upstreamHeaders = vb.headers ?? null;
        }
        if (vb?.thumbnail) thumbnail = vb.thumbnail;
        if (vb?.sizeHuman) size = vb.sizeHuman;
      }
    } catch {
    }
  }
  const cleanedFileName = cleanLowCpcKeywords(record.fileName);
  const playbackId = createPlaybackSession({
    uk: record.uk,
    shareid: record.shareid,
    fs_id: record.fs_id,
    fileName: cleanedFileName,
    quality: q,
    size,
    duration: record.duration,
    thumbnail,
    width: record.width,
    height: record.height,
    dlink,
    shareUrl: record.url,
    upstreamHeaders
  });
  const shareUrl = buildShareUrl(publicPath, req);
  return {
    ...buildProtectedPlaybackPayload(playbackId, {
      id: record.id,
      path: publicPath,
      shareUrl,
      shortUrl: shareUrl,
      permanentUrl: shareUrl,
      size,
      thumbnail,
      duration: record.duration ? Math.round(record.duration) : void 0,
      backupToken: statelessShareToken(record),
      expiresAt: record.expiresAt
    })
  };
}
var createShareSchema = z4.object({
  playbackId: z4.string().min(8).max(256).optional(),
  uk: z4.string().min(1).optional(),
  shareid: z4.string().min(1).optional(),
  fs_id: z4.string().min(1).optional(),
  fileName: z4.string().min(1).max(512).optional(),
  size: z4.string().optional(),
  sizeBytes: z4.number().optional(),
  thumbnail: z4.string().nullable().optional(),
  url: z4.string().optional(),
  duration: z4.number().optional(),
  width: z4.number().optional(),
  height: z4.number().optional(),
  quality: z4.enum(["360", "480", "720", "1080", "1440", "2160"]).optional().default("360")
}).refine(
  (d) => Boolean(d.playbackId) || Boolean(d.uk) && Boolean(d.shareid) && Boolean(d.fs_id) && Boolean(d.fileName),
  { message: "Invalid share data." }
);
async function handleTeraboxShareCreate(req, res) {
  const parsed = createShareSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid share data." });
    return;
  }
  purgeExpiredShares();
  const now = Date.now();
  const expiresAt = now + SHARE_TTL_MS;
  let source;
  if (parsed.data.playbackId) {
    const session = getPlaybackSession(parsed.data.playbackId);
    if (!session) {
      res.status(400).json({ message: "Playback expired. Play the video again before sharing." });
      return;
    }
    source = {
      uk: session.uk,
      shareid: session.shareid,
      fs_id: session.fs_id,
      fileName: session.fileName,
      size: session.size,
      duration: session.duration,
      thumbnail: session.thumbnail ?? null,
      width: session.width,
      height: session.height,
      url: session.shareUrl ?? void 0,
      quality: parsed.data.quality ?? session.quality
    };
  } else {
    source = {
      uk: parsed.data.uk,
      shareid: parsed.data.shareid,
      fs_id: parsed.data.fs_id,
      fileName: parsed.data.fileName,
      size: parsed.data.size,
      sizeBytes: parsed.data.sizeBytes,
      thumbnail: parsed.data.thumbnail ?? null,
      url: parsed.data.url,
      quality: parsed.data.quality ?? "360"
    };
  }
  const base = { ...source, createdAt: now, expiresAt };
  let shortId = generateShortId();
  while (shares.has(shortId)) shortId = generateShortId();
  const record = { id: shortId, ...base };
  shares.set(shortId, record);
  persistShareStore();
  const mainUrl = buildShareUrl(buildShortSharePath(record), req);
  res.status(201).json({
    ...await toPublicPayload(record, req),
    shareUrl: mainUrl,
    mainUrl,
    permanentUrl: mainUrl
  });
}
async function handleTeraboxShareGet(req, res) {
  const id = String(req.params.id ?? "").trim();
  const backup = typeof req.query.d === "string" ? req.query.d.trim() : "";
  if (id && !/^[a-zA-Z0-9_-]{4,2048}$/.test(id)) {
    res.status(400).json({ message: "Invalid share link." });
    return;
  }
  if (!id && !backup) {
    res.status(400).json({ message: "Invalid share link." });
    return;
  }
  const record = resolveShareRecord(id, backup || null);
  if (!record) {
    res.status(404).json({ message: "This share link expired or does not exist." });
    return;
  }
  res.json(await toPublicPayload(record, req));
}
async function handleTeraboxShareConfig(_req, res) {
  res.json({ shareOrigin: getShareLinkBase() || null });
}

// server/terabox-guard.ts
function allowedHosts() {
  const hosts = /* @__PURE__ */ new Set(["localhost:5000", "127.0.0.1:5000", "localhost:5173"]);
  const site = (process.env.SITE_HOST ?? "webnovacrew.com").trim();
  if (site) {
    hosts.add(site);
    hosts.add(`www.${site.replace(/^www\./, "")}`);
  }
  const shareBase = getShareLinkBase();
  if (shareBase) {
    try {
      hosts.add(new URL(shareBase).host);
    } catch {
    }
  }
  return Array.from(hosts);
}
function hostFromUrl(value) {
  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}
function requireTeraboxSameOrigin(req, res, next) {
  const allowed = allowedHosts();
  const reqHost = String(req.headers.host ?? "");
  const originHost = req.headers.origin ? hostFromUrl(String(req.headers.origin)) : null;
  const refererHost = req.headers.referer ? hostFromUrl(String(req.headers.referer)) : null;
  const matchesHost = allowed.some((h) => reqHost === h || reqHost.split(":")[0] === h.split(":")[0]);
  const originOk = !originHost || allowed.some(
    (h) => originHost === h || originHost === h.split(":")[0] || originHost.endsWith(`.${h.replace(/^www\./, "").split(":")[0]}`)
  );
  const refererOk = !refererHost || allowed.some(
    (h) => refererHost === h || refererHost === h.split(":")[0] || refererHost.endsWith(`.${h.replace(/^www\./, "").split(":")[0]}`)
  );
  const ok = matchesHost && originOk && refererOk;
  if (!ok && true) {
    res.status(403).json({ message: "Forbidden." });
    return;
  }
  next();
}

// server/routes.ts
var teraboxGuard = requireTeraboxSameOrigin;
async function registerRoutes(httpServer2, app2) {
  app2.post("/api/contact", (req, res, next) => {
    void handleContactPost(req, res).catch(next);
  });
  app2.post("/api/careers/apply", (req, res, next) => {
    void handleJobApply(req, res).catch(next);
  });
  app2.post("/api/terabox/resolve", teraboxGuard, (req, res, next) => {
    void handleTeraboxResolve(req, res).catch(next);
  });
  app2.get("/api/terabox/play/:playbackId", teraboxGuard, (req, res, next) => {
    void handleTeraboxPlay(req, res).catch(next);
  });
  app2.get("/api/terabox/file/:playbackId", teraboxGuard, (req, res, next) => {
    void handleTeraboxFile(req, res).catch(next);
  });
  app2.options("/api/terabox/file/:playbackId", (_req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type, Accept, Origin",
      "Access-Control-Max-Age": "86400"
    });
    res.status(204).end();
  });
  app2.get("/api/terabox/stream", teraboxGuard, (req, res, next) => {
    void handleTeraboxStream(req, res).catch(next);
  });
  app2.get("/api/terabox/ts", teraboxGuard, (req, res, next) => {
    void handleTeraboxTs(req, res).catch(next);
  });
  app2.options("/api/terabox/ts", (_req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type, Accept, Origin",
      "Access-Control-Max-Age": "86400"
    });
    res.status(204).end();
  });
  app2.post("/api/terabox/download", teraboxGuard, (req, res, next) => {
    void handleTeraboxDownload(req, res).catch(next);
  });
  app2.post("/api/terabox/share", teraboxGuard, (req, res, next) => {
    void handleTeraboxShareCreate(req, res).catch(next);
  });
  app2.get("/api/terabox/share/:id", (req, res, next) => {
    void handleTeraboxShareGet(req, res).catch(next);
  });
  app2.get("/api/terabox/share-config", (req, res, next) => {
    void handleTeraboxShareConfig(req, res).catch(next);
  });
  return httpServer2;
}

// api/index.ts
import { createServer } from "http";
var app = express();
var httpServer = createServer(app);
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    }
  })
);
app.use(express.urlencoded({ extended: false }));
var initPromise = null;
async function ensureRoutes() {
  if (!initPromise) {
    initPromise = registerRoutes(httpServer, app).then(() => {
      app.use((err, _req, res, _next) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
      });
    });
  }
  return initPromise;
}
async function handler(req, res) {
  try {
    await ensureRoutes();
    return app(req, res);
  } catch (err) {
    console.error("[Vercel API Handler Error]", err);
    res.status(500).json({ message: "Internal server error", error: String(err?.message || err) });
  }
}
export {
  handler as default
};
