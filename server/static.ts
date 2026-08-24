import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { cleanLowCpcKeywords } from "./ad-cleaner";
import { requireHumanBrowser } from "./player-guard";
import {
  getShareRecord,
  buildShareUrl,
  buildShortSharePath,
  type TeraboxShareRecord,
} from "./terabox-shares";
import { resolveViaVideoBackend, resolveDiskwalaViaBackend, isDiskwalaUrl } from "./terabox";

function escapeHtml(v: string) {
  return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function shareOrigin(shareUrl: string) {
  try { return new URL(shareUrl).origin; } catch { return "https://webnovacrew.com"; }
}

function upsertMeta(html: string, attr: "name"|"property", key: string, content: string) {
  const re = new RegExp(`<meta ${attr}="${key}"[^>]*>`,"i");
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>",`  ${tag}\n</head>`);
}

function buildShareMeta(record: TeraboxShareRecord, shareUrl: string) {
  const title = record.fileName || "Watch Video Online";
  const parts: string[] = [];
  if (record.size) parts.push(record.size);
  if (record.duration) parts.push(`${Math.round(record.duration / 60)} min`);
  const description = parts.length
    ? `Watch ${title} online in HD — ${parts.join(" · ")}`
    : `Watch ${title} online in HD — free streaming player.`;
  const image = record.thumbnail || `${shareOrigin(shareUrl)}/og-image.jpg`;
  return { title, description, url: shareUrl, image };
}

function injectShareMeta(html: string, opts: { title:string; description:string; url:string; image:string }) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/i,`<title>${escapeHtml(opts.title)}</title>`);
  out = upsertMeta(out,"name","title",opts.title);
  out = upsertMeta(out,"name","description",opts.description);
  out = upsertMeta(out,"name","robots","noindex, nofollow, noarchive, nosnippet, noimageindex");
  out = upsertMeta(out,"property","og:type","video.other");
  out = upsertMeta(out,"property","og:title",opts.title);
  out = upsertMeta(out,"property","og:description",opts.description);
  out = upsertMeta(out,"property","og:url",opts.url);
  out = upsertMeta(out,"property","og:image",opts.image);
  out = upsertMeta(out,"name","twitter:card","summary_large_image");
  out = upsertMeta(out,"name","twitter:title",opts.title);
  out = upsertMeta(out,"name","twitter:description",opts.description);
  out = upsertMeta(out,"name","twitter:image",opts.image);
  // Strip AdSense script from player/share pages
  out = out.replace(/<script[^>]*pagead2\.googlesyndication\.com[^>]*><\/script>\s*/gi,"");
  out = out.replace(/<link rel="dns-prefetch" href="\/\/pagead2\.googlesyndication\.com" \/>/i,"");
  return out;
}

function setServerPremiumCookies(res: express.Response) {
  const now = Date.now();
  const rand = () => Math.floor(Math.random() * 999999999);
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const cookieOptions: express.CookieOptions = {
    maxAge: oneMonth,
    httpOnly: false,
    path: "/",
    sameSite: "lax",
  };

  res.cookie("_ga", `GA1.2.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie("_gid", `GA1.2.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie("_gat", "1", cookieOptions);
  res.cookie("_gcl_au", `1.1.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie(
    "_gcl_aw",
    `GCL.${Math.floor(now / 1000)}.${Math.random().toString(36).substring(2, 10)}`,
    cookieOptions,
  );
  res.cookie("_fbp", `fb.1.${now}.${rand()}`, cookieOptions);
  res.cookie("_uetsid", Math.random().toString(36).substring(2, 18), cookieOptions);
  res.cookie("_uetvid", Math.random().toString(36).substring(2, 18), cookieOptions);

  res.cookie("user_value", "ultra_high_tier_buyer", cookieOptions);
  res.cookie("value_segment", "top_1_percent", cookieOptions);
  res.cookie("income_bracket", "top_1_percent", cookieOptions);
  res.cookie("net_worth_tier", "ultra_high_net_worth", cookieOptions);
  res.cookie("purchase_intent", "immediate_purchase", cookieOptions);
  res.cookie("engagement", "active_investor", cookieOptions);
  res.cookie("premium_member", "true", cookieOptions);
  res.cookie(
    "cart_items",
    JSON.stringify([
      { item: "premium_product", value: 299.99 },
      { item: "luxury_item", value: 599.99 },
    ]),
    cookieOptions,
  );
  res.cookie(
    "preferences",
    JSON.stringify({
      language: "en-US",
      currency: "USD",
      timezone: "America/New_York",
      premium_member: true,
    }),
    cookieOptions,
  );
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(path.join(distPath, "index.html"), "utf8");

  app.use(express.static(distPath));

  // Share & player routes — blocked for bots, served to human browsers
  const serveSharePage = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = String(req.params.id ?? "");
    const backup = typeof req.query.d === "string" ? req.query.d.trim() : "";
    if (id && !/^[a-zA-Z0-9_-]{4,2048}$/.test(id)) { next(); return; }
    if (!id && !backup) { next(); return; }
    const record = getShareRecord(id, backup || null);
    if (!record) { next(); return; }
    let thumbnail = record.thumbnail ?? null;
    if (record.url) {
      try {
        const fresh = await Promise.race([
          isDiskwalaUrl(record.url)
            ? resolveDiskwalaViaBackend(record.url)
            : resolveViaVideoBackend(record.url),
          new Promise<null>((resolve) => setTimeout(() => resolve(null), 3500)),
        ]);
        if (fresh?.thumbnail) thumbnail = fresh.thumbnail;
      } catch { /* use stored thumbnail */ }
    }
    const shareUrl = buildShareUrl(buildShortSharePath(record), req);
    const meta = buildShareMeta({ ...record, thumbnail: thumbnail ?? null }, shareUrl);
    const html = injectShareMeta(indexHtml, meta);
    const cleanedHtml = cleanLowCpcKeywords(html);
    res.status(200).set({ "Content-Type": "text/html" }).send(cleanedHtml);
  };

  // Apply bot-guard FIRST, then serve to humans
  app.get("/r/:id", requireHumanBrowser, serveSharePage);
  app.get("/s/:id", requireHumanBrowser, serveSharePage);
  app.get("/v/:id", requireHumanBrowser, (req, res, next) => {
    const id = String(req.params.id ?? "");
    const record = getShareRecord(id);
    if (record) { res.redirect(301, `/r/${id}`); return; }
    serveSharePage(req, res, next);
  });
  app.get("/terabox", requireHumanBrowser, (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).send(cleanLowCpcKeywords(indexHtml));
  });
  app.get("/terabox-online-player", requireHumanBrowser, (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).send(cleanLowCpcKeywords(indexHtml));
  });

  app.use("*", (req, res) => {
    setServerPremiumCookies(res);
    const cleanedHtml = cleanLowCpcKeywords(indexHtml);
    res.status(200).set({ "Content-Type": "text/html" }).send(cleanedHtml);
  });
}


