import type { Request, Response, NextFunction } from "express";
import { getShareLinkBase } from "./terabox-shares";

function allowedHosts(): string[] {
  const hosts = new Set<string>(["localhost:5000", "127.0.0.1:5000", "localhost:5173"]);
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
      /* ignore */
    }
  }
  return Array.from(hosts);
}

function hostFromUrl(value: string): string | null {
  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}

/** Block third-party sites from calling TeraBox playback APIs directly. */
export function requireTeraboxSameOrigin(req: Request, res: Response, next: NextFunction): void {
  const allowed = allowedHosts();
  const reqHost = String(req.headers.host ?? "");
  const originHost = req.headers.origin ? hostFromUrl(String(req.headers.origin)) : null;
  const refererHost = req.headers.referer ? hostFromUrl(String(req.headers.referer)) : null;

  const matchesHost = allowed.some((h) => reqHost === h || reqHost.split(":")[0] === h.split(":")[0]);
  const originOk =
    !originHost ||
    allowed.some(
      (h) =>
        originHost === h ||
        originHost === h.split(":")[0] ||
        originHost.endsWith(`.${h.replace(/^www\./, "").split(":")[0]}`),
    );
  const refererOk =
    !refererHost ||
    allowed.some(
      (h) =>
        refererHost === h ||
        refererHost === h.split(":")[0] ||
        refererHost.endsWith(`.${h.replace(/^www\./, "").split(":")[0]}`),
    );
  const ok = matchesHost && originOk && refererOk;

  if (!ok && process.env.NODE_ENV === "production") {
    res.status(403).json({ message: "Forbidden." });
    return;
  }
  next();
}
