import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import {
  getShareRecord,
  buildShareUrl,
  buildShortSharePath,
  type TeraboxShareRecord,
} from "./terabox-shares";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shareOriginFromUrl(shareUrl: string): string {
  try {
    return new URL(shareUrl).origin;
  } catch {
    return "https://webnovacrew.com";
  }
}

function defaultShareImage(shareUrl: string): string {
  return `${shareOriginFromUrl(shareUrl)}/og-image.jpg`;
}

function buildSharePreview(record: TeraboxShareRecord, shareUrl: string) {
  const title = record.fileName || "Watch Video Online";
  const detailParts: string[] = [];
  if (record.size) detailParts.push(record.size);
  if (record.duration) detailParts.push(`${Math.round(record.duration / 60)} min`);
  const description =
    detailParts.length > 0
      ? `Watch ${title} online in HD — ${detailParts.join(" · ")}`
      : `Watch ${title} online in HD — free streaming player.`;
  const image = record.thumbnail || defaultShareImage(shareUrl);
  return { title, description, url: shareUrl, image };
}

function upsertMeta(html: string, attr: "name" | "property", key: string, content: string): string {
  const re = new RegExp(`<meta ${attr}="${key}"[^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function injectShareMeta(html: string, opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  stripAds?: boolean;
}): string {
  const title = escapeHtml(opts.title);
  const description = escapeHtml(opts.description);
  const url = escapeHtml(opts.url);
  const image = escapeHtml(opts.image);

  let out = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = upsertMeta(out, "name", "title", title);
  out = upsertMeta(out, "name", "description", description);
  out = upsertMeta(out, "name", "author", "Video Player");
  out = upsertMeta(
    out,
    "name",
    "robots",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:large",
  );
  out = upsertMeta(out, "name", "twitter:card", "summary_large_image");

  out = out.replace(
    /<link rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${url}" />`,
  );

  out = upsertMeta(out, "property", "og:type", "video.other");
  out = upsertMeta(out, "property", "og:title", title);
  out = upsertMeta(out, "property", "og:description", description);
  out = upsertMeta(out, "property", "og:url", url);
  out = upsertMeta(out, "property", "og:site_name", "Video Player");
  out = upsertMeta(out, "property", "og:image", image);
  out = upsertMeta(out, "name", "twitter:title", title);
  out = upsertMeta(out, "name", "twitter:description", description);
  out = upsertMeta(out, "name", "twitter:image", image);

  if (opts.stripAds) {
    out = out.replace(
      /<script[^>]*pagead2\.googlesyndication\.com[^>]*><\/script>\s*/gi,
      "",
    );
    out = out.replace(/<link rel="dns-prefetch" href="\/\/pagead2\.googlesyndication\.com" \/>/i, "");
  }
  return out;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(path.join(distPath, "index.html"), "utf8");

  app.use(express.static(distPath));

  const serveSharePage = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = String(req.params.id ?? "");
    const backup = typeof req.query.d === "string" ? req.query.d.trim() : "";
    if (id && !/^[a-zA-Z0-9_-]{4,2048}$/.test(id)) {
      next();
      return;
    }
    if (!id && !backup) {
      next();
      return;
    }
    const record = getShareRecord(id, backup || null);
    if (!record) {
      next();
      return;
    }
    const shareUrl = buildShareUrl(buildShortSharePath(record), req);
    const preview = buildSharePreview(record, shareUrl);
    const html = injectShareMeta(indexHtml, {
      ...preview,
      stripAds: true,
    });
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  };

  app.get("/r/:id", serveSharePage);
  app.get("/s/:id", serveSharePage);
  app.get("/v/:id", (req, res, next) => {
    const id = String(req.params.id ?? "");
    const record = getShareRecord(id);
    if (record) {
      res.redirect(301, `/r/${id}`);
      return;
    }
    serveSharePage(req, res, next);
  });

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
