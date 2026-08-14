import type { Request, Response } from "express";
import { spawn } from "child_process";
import path from "path";
import { Readable } from "stream";
import { createRequire } from "module";
import { z } from "zod";
import {
  createPlaybackSession,
  getPlaybackSession,
  buildProtectedPlaybackPayload,
} from "./terabox-sessions";

/** Resolve ffmpeg binary path (works in tsx ESM and bundled CJS on Render). */
function resolveFfmpegPath(): string | null {
  try {
    // Do NOT use import.meta.url — esbuild CJS output leaves it empty.
    const req = createRequire(path.join(process.cwd(), "package.json"));
    const p = req("ffmpeg-static") as string | null | undefined;
    return p || null;
  } catch {
    return null;
  }
}

const HMAC_KEY = "iuuPc64E4Fhn0rTXEzrnbLph0o5qyEEa";
const WORKER_BASE = "https://terabox-proxy.teraboxhigh.workers.dev";

/** Same backend the Flutter app uses (`F:\Latest Video\video-backend`). */
function getVideoBackendBase(): string {
  return (
    process.env.VIDEO_BACKEND_URL?.trim().replace(/\/+$/, "") ||
    "https://toofani-app.vercel.app"
  );
}

/** Same session cookie the official TeraBox app/web uses when logged in. */
function getTeraboxNdus(): string | null {
  const raw = (process.env.TERABOX_NDUS ?? "").trim();
  if (!raw) return null;
  return raw.startsWith("ndus=") ? raw.slice(5) : raw;
}

function teraboxCookieHeader(): string | undefined {
  const ndus = getTeraboxNdus();
  return ndus ? `ndus=${ndus}` : undefined;
}

type VideoBackendLinkInfo = {
  title: string;
  size?: number;
  sizeHuman?: string;
  thumbnail?: string | null;
  mimeType?: string;
  directUrl: string;
  headers?: Record<string, string>;
};

/**
 * Call the same API the mobile app uses:
 * POST {VIDEO_BACKEND_URL}/api/link-info  → directUrl + CDN headers
 */
export async function resolveViaVideoBackend(shareUrl: string): Promise<VideoBackendLinkInfo | null> {
  const base = getVideoBackendBase();
  try {
    const resp = await fetch(`${base}/api/link-info`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ url: shareUrl }),
      signal: AbortSignal.timeout(45000),
    });
    if (!resp.ok) {
      console.warn("[terabox:video-backend] link-info HTTP", resp.status);
      return null;
    }
    const data = (await resp.json()) as {
      success?: boolean;
      data?: {
        title?: string;
        size?: number;
        sizeHuman?: string;
        thumbnail?: string | null;
        mimeType?: string;
        directUrl?: string;
        headers?: Record<string, string>;
      };
      error?: string;
    };
    const directUrl = data.data?.directUrl?.trim();
    if (!data.success || !directUrl?.startsWith("http")) {
      console.warn("[terabox:video-backend] no directUrl", data.error ?? "");
      return null;
    }
    // Never forward Cookie headers to the browser — keep server-side only.
    const headers: Record<string, string> = {};
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
      headers,
    };
  } catch (e) {
    console.warn("[terabox:video-backend]", e instanceof Error ? e.message : e);
    return null;
  }
}

/** Parse uk / fs_id from Terabox CDN fid=uk-appid-fsid when present. */
function idsFromDirectUrl(directUrl: string): { uk?: string; fs_id?: string } {
  try {
    const fid = new URL(directUrl).searchParams.get("fid") || "";
    const parts = fid.split("-");
    if (parts.length >= 3) {
      return { uk: parts[0], fs_id: parts[parts.length - 1] };
    }
  } catch {
    /* ignore */
  }
  return {};
}

const resolveSchema = z.object({
  url: z.string().trim().max(2048),
  quality: z.enum(["360", "480", "720", "1080", "1440", "2160"]).optional().default("360"),
});

const TERABOX_HOSTS = [
  "terabox.com", "1024terabox.com", "teraboxapp.com", "terabox.app",
  "4funbox.com", "mirrobox.com", "nephobox.com", "freeterabox.com",
  "terasharelink.com", "tibibox.com", "momerybox.com", "terabox.fun",
  "1024tera.com", "teraboxlink.com", "terasharefile.com",
];

/** Terabox mirror domains that 302-redirect to the canonical terabox share URL. */
const TERABOX_REDIRECT_HOSTS = ["terasharefile.com"];

const DISKWALA_HOSTS = [
  "diskwala.com", "disk-wala.com", "diskwala.app", "disk-wala.app",
  "diskwala.me", "disk-wala.me", "diskwala.net",
];

function hostMatches(host: string, hosts: string[]): boolean {
  return hosts.some((h) => host === h || host.endsWith(`.${h}`));
}

function isTeraboxUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return hostMatches(host, TERABOX_HOSTS);
  } catch {
    return false;
  }
}

export function isDiskwalaUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return hostMatches(host, DISKWALA_HOSTS);
  } catch {
    return false;
  }
}

/**
 * Extract the 24-hex share code from a DiskWala URL (or accept a bare id).
 * Supports /app/<id> and /s/<id> path forms on all mirror domains.
 */
function extractDiskwalaCode(input: string): string | null {
  const bare = input.trim();
  const m = bare.match(/([a-f0-9]{24})/i);
  return m?.[1] ?? null;
}

/**
 * Resolve a DiskWala share through the same backend the app uses.
 * `{VIDEO_BACKEND_URL}/api/dw/info` mints fresh signed CDN URLs (stream/dl/thumb).
 */
export async function resolveDiskwalaViaBackend(shareUrl: string): Promise<VideoBackendLinkInfo | null> {
  const base = getVideoBackendBase();
  try {
    const resp = await fetch(`${base}/api/dw/info?url=${encodeURIComponent(shareUrl)}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(45000),
    });
    if (!resp.ok) {
      console.warn("[terabox:diskwala] dw/info HTTP", resp.status);
      return null;
    }
    const data = (await resp.json()) as {
      success?: boolean;
      data?: {
        title?: string;
        sizeBytes?: number | null;
        size?: string;
        thumbnail?: string | null;
        mimeType?: string | null;
        streamUrl?: string;
        downloadUrl?: string;
      };
      error?: string;
    };
    if (!data.success || !data.data) {
      console.warn("[terabox:diskwala] no data", data.error ?? "");
      return null;
    }
    const d = data.data;
    const directUrl = d.streamUrl || d.downloadUrl;
    if (!directUrl?.startsWith("http")) return null;
    return {
      title: d.title || "DiskWala Video",
      size: d.sizeBytes ? Number(d.sizeBytes) : undefined,
      sizeHuman: d.size,
      thumbnail: d.thumbnail ?? null,
      mimeType: d.mimeType || "video/mp4",
      directUrl,
      headers: {
        "User-Agent": BROWSER_HEADERS["User-Agent"],
        Referer: "https://www.diskwala.com/",
        Accept: "*/*",
      },
    };
  } catch (e) {
    console.warn("[terabox:diskwala]", e instanceof Error ? e.message : e);
    return null;
  }
}

/** Prefer API surl without the leading "1" used in /s/ path codes. */
function extractSurlVariants(input: string): string[] {
  const bare = input.replace(/\s+/g, "");
  const raw = new Set<string>();

  if (/^[A-Za-z0-9_-]+$/.test(bare) && bare.length >= 8) raw.add(bare);

  try {
    const u = new URL(bare.startsWith("http") ? bare : `https://${bare}`);
    const s = u.searchParams.get("surl");
    if (s) raw.add(s);
  } catch {}

  const m = bare.match(/\/s\/([A-Za-z0-9_-]+)/);
  if (m?.[1]) raw.add(m[1]);

  const stripped: string[] = [];
  const withOne: string[] = [];
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
  // API shorturl almost always wants the form without leading 1
  return Array.from(new Set([...stripped, ...withOne]));
}

function normalizeShareUrl(input: string): string {
  let bare = input.trim().replace(/[\u200B-\u200D\uFEFF]/g, "");
  if (!/^https?:\/\//i.test(bare)) bare = `https://${bare}`;
  return bare;
}

/**
 * Follow a TeraBox mirror 302 (e.g. terasharefile.com/s/<code> → terabox.app/sharing/link?surl=...)
 * to the canonical share URL the existing resolver understands.
 */
async function resolveRedirectUrl(url: string): Promise<string | null> {
  try {
    const resp = await fetch(url, {
      redirect: "manual",
      headers: { "User-Agent": BROWSER_HEADERS["User-Agent"], Accept: "*/*" },
      signal: AbortSignal.timeout(15000),
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

function surlFromReferer(referer: string): string | null {
  try {
    const s = new URL(referer).searchParams.get("surl");
    return s ? s.replace(/^1/, "") : null;
  } catch {
    return null;
  }
}

function teraboxErrnoMessage(errno: unknown): string | null {
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
    return "TeraBox rate-limited this request. Wait 1–2 minutes and try again.";
  }
  return null;
}

function extractJsTokenFromHtml(html: string): string | null {
  const patterns = [
    /decodeURIComponent\(`([^`]+)`\)/,
    /decodeURIComponent\('([^']+)'\)/,
    /decodeURIComponent\("([^"]+)"\)/,
  ];
  for (const pattern of patterns) {
    const encoded = html.match(pattern);
    if (encoded?.[1]) {
      try {
        const decoded = decodeURIComponent(encoded[1]);
        const fromEval = decoded.match(/fn\("([^"]+)"/);
        if (fromEval?.[1]) return fromEval[1];
      } catch {
        /* ignore */
      }
    }
  }
  const direct = html.match(/fn\("([A-F0-9]{40,})"/i);
  if (direct?.[1]) return direct[1];
  const assign = html.match(/jsToken["']?\s*[:=]\s*["']([A-F0-9]{40,})["']/i);
  return assign?.[1] ?? null;
}

function detectSharePageIssue(html: string): string | null {
  // Avoid false positives from generic page chrome; require password UI signals.
  if (
    /id=["']pwd["']|name=["']pwd["']|please enter the extraction code|input the extraction code/i.test(
      html,
    )
  ) {
    return "This TeraBox link is password-protected. Use a public link without an extraction code.";
  }
  if (/verify you are human|access denied|unusual traffic/i.test(html) && html.length < 4000) {
    return "TeraBox temporarily blocked the server. Wait 1–2 minutes and try again.";
  }
  return null;
}

function buildSharePageCandidates(shareUrl: string, surlVariants: string[]): string[] {
  const normalized = normalizeShareUrl(shareUrl);
  const candidates: string[] = [normalized];
  try {
    const u = new URL(normalized);
    if (!u.hostname.startsWith("www.")) {
      u.hostname = `www.${u.hostname}`;
      candidates.push(u.toString());
    }
  } catch {}
  // Prefer stripped surl + primary domains only (keep list small for Render timeouts)
  const primary = surlVariants.find((s) => !s.startsWith("1") || s.length <= 10) ?? surlVariants[0];
  if (primary) {
    for (const domain of ["www.1024tera.com", "www.terabox.app", "www.1024terabox.com"]) {
      candidates.push(`https://${domain}/sharing/link?surl=${encodeURIComponent(primary)}`);
    }
  }
  return Array.from(new Set(candidates));
}

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

async function fetchHtmlDirect(url: string): Promise<{ html: string; finalUrl: string } | null> {
  try {
    const resp = await fetch(url, {
      headers: BROWSER_HEADERS,
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!resp.ok) return null;
    return { html: await resp.text(), finalUrl: resp.url };
  } catch {
    return null;
  }
}

async function fetchHtmlViaWorker(url: string): Promise<{ html: string; finalUrl: string } | null> {
  // Worker occasionally returns a tiny block page (~100 bytes); retry once.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const resp = await fetch(`${WORKER_BASE}/proxy?url=${encodeURIComponent(url)}`, {
        headers: { Accept: "text/html", "User-Agent": BROWSER_HEADERS["User-Agent"] },
        signal: AbortSignal.timeout(25000),
      });
      if (!resp.ok) continue;
      const html = await resp.text();
      if (!html || html.length < 2000) {
        if (attempt === 0) await new Promise((r) => setTimeout(r, 400));
        continue;
      }
      return { html, finalUrl: url };
    } catch {
      /* retry */
    }
  }
  return null;
}

async function fetchSharePage(
  shareUrl: string,
  surlVariants: string[],
): Promise<{ html: string; referer: string; domain: string; jsToken: string | null; issue?: string } | null> {
  const candidates = buildSharePageCandidates(shareUrl, surlVariants);
  let fallback: { html: string; referer: string; domain: string; issue?: string } | null = null;

  // Worker first (Render IPs are often blocked by TeraBox), then direct.
  for (const url of candidates) {
    for (const fetchHtml of [fetchHtmlViaWorker, fetchHtmlDirect]) {
      const result = await fetchHtml(url);
      if (!result) continue;

      const finalHost = hostFromShareUrl(result.finalUrl) ?? hostFromShareUrl(url) ?? "www.terabox.app";
      const domain = finalHost.startsWith("www.") ? finalHost : `www.${finalHost}`;
      const jsToken = extractJsTokenFromHtml(result.html);
      const issue = detectSharePageIssue(result.html) ?? undefined;
      const refererSurl =
        surlFromReferer(result.finalUrl) ??
        surlVariants.find((s) => !s.startsWith("1") || s.length <= 10) ??
        surlVariants[0];
      const referer = refererSurl
        ? `https://${domain}/sharing/link?surl=${encodeURIComponent(refererSurl)}`
        : result.finalUrl;

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

function hostFromShareUrl(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

type TeraboxMeta = {
  uk: string;
  share_id: string;
  list: Array<{
    fs_id: string;
    server_filename?: string;
    size?: string;
    duration?: number;
    thumbnail?: string | null;
    width?: number;
    height?: number;
  }>;
};

function pickThumbnail(raw: Record<string, unknown>): string | null {
  const direct =
    raw.thumbnail ?? raw.thumb ?? raw.poster ?? raw.thumburl ?? raw.thumbUrl;
  if (typeof direct === "string" && direct.startsWith("http")) return direct;
  const thumbs = raw.thumbs as Record<string, string> | undefined;
  if (thumbs) {
    for (const key of ["url3", "url2", "url1", "icon"]) {
      if (thumbs[key]?.startsWith("http")) return thumbs[key];
    }
  }
  return null;
}

function isDirEntry(file: Record<string, unknown>): boolean {
  return file.isdir === 1 || file.isdir === "1" || file.is_dir === 1;
}

function pickPlayableFile(list: Array<Record<string, unknown>>): Record<string, unknown> | null {
  const files = list.filter((f) => !isDirEntry(f));
  const video = files.find((f) =>
    /\.(mp4|mkv|webm|mov|m4v|avi|ts|flv)$/i.test(String(f.server_filename ?? "")),
  );
  return video ?? files[0] ?? null;
}

function mapListResponse(data: Record<string, unknown>): TeraboxMeta | null {
  const list = data.list as Array<Record<string, unknown>> | undefined;
  if (data.errno !== 0 || !list?.length) return null;
  const file = pickPlayableFile(list);
  if (!file) return null; // folder-only share; caller may recurse
  return {
    uk: String(data.uk),
    share_id: String(data.share_id),
    list: [
      {
        fs_id: String(file.fs_id),
        server_filename: String(file.server_filename ?? "Video"),
        size: file.size ? String(file.size) : undefined,
        duration: typeof file.duration === "number" ? file.duration : undefined,
        thumbnail: pickThumbnail(file),
        width: typeof file.width === "number" ? file.width : undefined,
        height: typeof file.height === "number" ? file.height : undefined,
      },
    ],
  };
}

async function hmacSha1(data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(HMAC_KEY),
    { name: "HMAC", hash: "SHA-1" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function fetchShareList(
  domain: string,
  surl: string,
  jsToken: string,
  opts?: { dir?: string; root?: 0 | 1 },
): Promise<{ data: Record<string, unknown> | null; errno?: number }> {
  const referer = `https://${domain}/sharing/link?surl=${encodeURIComponent(surl)}`;
  const root = opts?.root ?? 1;
  const dirParam = opts?.dir ? `&dir=${encodeURIComponent(opts.dir)}` : "";
  let lastErrno: number | undefined;

  for (const ct of [0, 5]) {
    const apiUrl =
      `https://${domain}/share/list?app_id=250528&web=1&channel=dubox&clienttype=${ct}` +
      `&page=1&num=100&shorturl=${encodeURIComponent(surl)}&root=${root}${dirParam}` +
      `&jsToken=${encodeURIComponent(jsToken)}`;
    try {
      const resp = await fetch(apiUrl, {
        headers: {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: referer,
        },
        signal: AbortSignal.timeout(15000),
      });
      if (!resp.ok) continue;
      const data = (await resp.json()) as Record<string, unknown>;
      if (data.errno === 0) return { data };
      if (typeof data.errno === "number") lastErrno = data.errno;
    } catch {
      /* try next clienttype */
    }
  }
  return { data: null, errno: lastErrno };
}

async function fetchMetadataWithJsToken(
  domain: string,
  surl: string,
  jsToken: string,
): Promise<{ meta: TeraboxMeta | null; errno?: number }> {
  const root = await fetchShareList(domain, surl, jsToken, { root: 1 });
  if (root.data) {
    const mapped = mapListResponse(root.data);
    if (mapped) return { meta: mapped };

    // Folder share: open first directory and pick a video inside
    const list = (root.data.list as Array<Record<string, unknown>> | undefined) ?? [];
    const folder = list.find((f) => isDirEntry(f));
    if (folder) {
      const path = String(folder.path ?? `/${folder.server_filename ?? ""}`);
      const child = await fetchShareList(domain, surl, jsToken, { root: 0, dir: path });
      if (child.data) {
        const mappedChild = mapListResponse(child.data);
        if (mappedChild) return { meta: mappedChild };
      }
      if (child.errno !== undefined) return { meta: null, errno: child.errno };
    }
  }
  return { meta: null, errno: root.errno };
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchMetadata(surl: string) {
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
            "Accept-Language": "en-US,en;q=0.9",
          },
          redirect: "manual",
          signal: AbortSignal.timeout(10000),
        });
        if (resp.status !== 200) continue;
        const data = await resp.json();
        if (data.errno === 0 && data.list?.length) return data;
        if (data.errno === 140) {
          await sleep(500);
          continue;
        }
        if (data.errno === 400141) {
          await sleep(1000);
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
            "Accept-Language": "en-US,en;q=0.9",
          },
          redirect: "manual",
          signal: AbortSignal.timeout(10000),
        });
        if (resp.status !== 200) continue;
        const data = await resp.json();
        if (data.errno === 0 && data.list?.length) return data;
      } catch {}
    }
  }

  return null;
}

async function resolveShareMetadata(
  shareUrl: string,
  surlVariants: string[],
): Promise<{ meta: TeraboxMeta | null; reason?: string }> {
  const page = await fetchSharePage(shareUrl, surlVariants);
  const jsToken = page?.jsToken ?? null;
  const refererSurl = page ? surlFromReferer(page.referer) : null;
  const variants = Array.from(
    new Set([
      ...surlVariants,
      ...(refererSurl ? extractSurlVariants(refererSurl) : []),
      ...(refererSurl ? [refererSurl] : []),
    ]),
  );

  let lastErrno: number | undefined;

  if (page && jsToken) {
    const hostHint = hostFromShareUrl(shareUrl)?.replace(/^www\./, "") ?? "";
    const preferredDomain =
      hostHint.includes("1024tera") && !hostHint.includes("terabox")
        ? "www.1024tera.com"
        : hostHint.includes("1024terabox")
          ? "www.1024terabox.com"
          : page.domain;
    const domains = Array.from(
      new Set([
        preferredDomain,
        "www.1024tera.com",
        "www.terabox.app",
        "www.1024terabox.com",
        page.domain,
      ]),
    );

    for (const surl of variants) {
      for (const domain of domains) {
        const attempt = await fetchMetadataWithJsToken(domain, surl, jsToken);
        if (attempt.meta) return { meta: attempt.meta };
        if (attempt.errno !== undefined) lastErrno = attempt.errno;
        // 105 = not found for this surl/domain combo; keep trying others
        // 400141 on one domain often still works on another — continue
      }
    }
  }

  for (const surl of variants) {
    const meta = (await fetchMetadata(surl)) ?? (await resolveViaWorker(shareUrl));
    if (meta) return { meta };
  }

  if (page?.issue) {
    return { meta: null, reason: page.issue };
  }

  const specific = teraboxErrnoMessage(lastErrno);
  if (!page) {
    return {
      meta: null,
      reason: "Could not reach TeraBox. Check the link and try again.",
    };
  }
  if (!jsToken) {
    return {
      meta: null,
      reason: "TeraBox blocked the request. Wait a minute and try again.",
    };
  }
  if (lastErrno === 400141 || lastErrno === 4001412) {
    return {
      meta: null,
      reason:
        "This TeraBox link needs a password (extraction code), or TeraBox is verifying the request. Use a public link.",
    };
  }
  return {
    meta: null,
    reason:
      specific ??
      `Could not fetch file metadata${lastErrno != null ? ` (code ${lastErrno})` : ""}. Link may be private, expired, or Terabox is rate-limiting.`,
  };
}

/** Legacy worker resolve — often unavailable; kept as fallback only. */
async function resolveViaWorker(shareUrl: string): Promise<TeraboxMeta | null> {
  const workerUrl = `${WORKER_BASE}/resolve?url=${encodeURIComponent(shareUrl)}`;
  try {
    const resp = await fetch(workerUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(30000),
    });
    if (!resp.ok) return null;
    const data = (await resp.json()) as {
      success?: boolean;
      uk?: string | number;
      shareid?: string | number;
      fs_id?: string | number;
      filename?: string;
      size_mb?: number;
      duration_s?: number;
      width?: number;
      height?: number;
      thumbnail?: string;
      thumb?: string;
      poster?: string;
    };
    if (!data.success || !data.uk || !data.shareid || !data.fs_id) return null;
    const thumbnail = pickThumbnail(data as Record<string, unknown>);
    return {
      uk: String(data.uk),
      share_id: String(data.shareid),
      list: [
        {
          fs_id: String(data.fs_id),
          server_filename: data.filename ?? "Video",
          size: data.size_mb ? String(Math.round(data.size_mb * 1024 * 1024)) : undefined,
          duration: data.duration_s,
          thumbnail,
          width: data.width,
          height: data.height,
        },
      ],
    };
  } catch {
    return null;
  }
}

/**
 * App-style full-file direct link (dlink) — same family of APIs the mobile app uses.
 * Requires a logged-in TERABOX_NDUS cookie on the server.
 */
async function fetchShareDlink(
  uk: string,
  shareid: string,
  fid: string,
): Promise<string | null> {
  const cookie = teraboxCookieHeader();
  if (!cookie) return null;

  const ts = Math.floor(Date.now() / 1000);
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
      timestamp: String(ts),
    });
    const url = `https://${domain}/share/download?${params.toString()}`;
    try {
      const resp = await fetch(url, {
        headers: {
          "User-Agent": BROWSER_HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: `https://${domain}/`,
          Cookie: cookie,
        },
        signal: AbortSignal.timeout(20000),
      });
      if (!resp.ok) continue;
      const data = (await resp.json()) as {
        errno?: number;
        list?: Array<{ dlink?: string }>;
      };
      const dlink = data.list?.[0]?.dlink;
      if (data.errno === 0 && typeof dlink === "string" && dlink.startsWith("http")) {
        return dlink.includes("origin=") ? dlink : `${dlink}&origin=dlna`;
      }
    } catch {
      /* try next domain */
    }
  }
  return null;
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function buildStreamingUrl(
  uk: string,
  shareid: string,
  fid: string,
  quality: string,
  sign: string,
  ts: number,
  host = "dm.terabox.app",
): string {
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
    channel: "dubox",
  });
  return `https://${host}/share/streaming?${params.toString()}`;
}

/**
 * Rewrite media segment URLs through our binary-safe proxy.
 * Do NOT use terabox-proxy.teraboxhigh.workers.dev/proxy — it corrupts TS bytes
 * (UTF-8 replacement characters) and breaks playback.
 */
function rewritePlaylistForBrowser(m3u8: string, segmentProxyBase: string): string {
  const base = segmentProxyBase.replace(/\/$/, "");
  return m3u8
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith("http")) return line;
      // Already proxied
      if (trimmed.includes("/api/terabox/ts?") || trimmed.includes("/proxy?url=")) return line;
      return `${base}/api/terabox/ts?url=${encodeURIComponent(trimmed)}`;
    })
    .join("\n");
}

function publicOriginFromReq(req: Request): string {
  const xfProto = String(req.headers["x-forwarded-proto"] ?? "")
    .split(",")[0]
    ?.trim();
  const proto = xfProto || req.protocol || "https";
  const host =
    String(req.headers["x-forwarded-host"] ?? "")
      .split(",")[0]
      ?.trim() || req.get("host") || "webnovacrew.com";
  return `${proto}://${host}`;
}

async function fetchPlaylistText(url: string, referer: string): Promise<string | null> {
  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": BROWSER_HEADERS["User-Agent"],
        Accept: "*/*",
        Referer: referer,
      },
      signal: AbortSignal.timeout(30000),
    });
    if (!resp.ok) return null;
    const text = await resp.text();
    if (!text.includes("#EXTM3U")) return null;
    return text;
  } catch {
    return null;
  }
}

/**
 * Fetch HLS playlist for playback.
 * Prefer direct Terabox streaming (HMAC) — CF worker /m3u8 is often blocked with errno 400141.
 * Segment URLs are rewritten to our binary-safe /api/terabox/ts proxy (same-origin CORS).
 */
async function getM3U8(
  uk: string,
  shareid: string,
  fid: string,
  quality: string,
  segmentProxyBase?: string,
): Promise<string | null> {
  const q = quality || "360";
  const ts = Math.floor(Date.now() / 1000);
  const sign = await hmacSha1("0dubox" + ts);
  const finalize = (body: string) =>
    segmentProxyBase ? rewritePlaylistForBrowser(body, segmentProxyBase) : body;

  const hosts = ["dm.terabox.app", "dm.terabox.com", "www.terabox.app"];
  for (const host of hosts) {
    const streamUrl = buildStreamingUrl(uk, shareid, fid, q, sign, ts, host);
    const direct = await fetchPlaylistText(streamUrl, `https://${host}/`);
    if (direct) return finalize(direct);
  }

  // Legacy Cloudflare worker playlist (may fail with 400141 / need verify).
  try {
    const workerUrl = `${WORKER_BASE}/m3u8?uk=${uk}&shareid=${shareid}&fid=${fid}&quality=${q}&sign=${sign}&timestamp=${ts}`;
    const resp = await fetch(workerUrl, { signal: AbortSignal.timeout(30000) });
    if (resp.ok) {
      const text = await resp.text();
      if (text.includes("#EXTM3U")) return finalize(text);
    }
  } catch {
    /* continue */
  }

  return null;
}

export async function handleTeraboxResolve(req: Request, res: Response): Promise<void> {
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

  // Mirror domains (e.g. terasharefile.com) redirect to the canonical terabox share URL.
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
    // 1) Same path as Flutter app → toofani / video-backend link-info (full dlink).
    const vb = await resolveViaVideoBackend(url);
    // 2) Keep legacy metadata for HLS fallback (uk/shareid/fs_id).
    const resolved = await resolveShareMetadata(url, surlVariants);

    if (!vb && !resolved.meta?.list?.length) {
      console.error("[terabox:resolve] failed", {
        surlVariants,
        url: url.slice(0, 80),
        reason: resolved.reason,
        videoBackend: Boolean(vb),
      });
      res.status(502).json({
        message:
          resolved.reason ??
          "Could not fetch file metadata. Link may be private, expired, or Terabox is rate-limiting.",
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
          ...(cookie ? { Cookie: cookie } : {}),
        };
      }
    }

    const fileName = vb?.title || file?.server_filename || "Video";
    const sizeLabel =
      vb?.sizeHuman ||
      (vb?.size ? formatSize(vb.size) : undefined) ||
      (file?.size ? formatSize(parseInt(file.size, 10)) : undefined);

    console.log("[terabox:resolve] ok", {
      fileName: fileName.slice(0, 60),
      via: vb ? "video-backend" : "legacy",
      hasDlink: Boolean(dlink),
      surl: surlVariants[0]?.slice(0, 12),
    });

    const playbackId = createPlaybackSession({
      uk,
      shareid,
      fs_id: fid,
      fileName,
      quality,
      size: sizeLabel,
      duration: file?.duration ? Math.round(file.duration) : undefined,
      thumbnail: vb?.thumbnail ?? file?.thumbnail ?? null,
      width: file?.width,
      height: file?.height,
      dlink,
      shareUrl: url,
      upstreamHeaders,
      mimeType: vb?.mimeType ?? null,
    });

    res.json({
      ok: true,
      ...buildProtectedPlaybackPayload(playbackId, {
        size: sizeLabel,
        duration: file?.duration ? Math.round(file.duration) : undefined,
      }),
    });
  } catch (e) {
    console.error("[terabox]", e);
    res.status(500).json({ message: "Failed to resolve link. Please try again." });
  }
}

/**
 * Resolve a DiskWala share link → fresh signed CDN URL → playback session.
 * Uses the app backend's /api/dw/info (mirrors web.diskwala.net resolver).
 */
async function handleDiskwalaResolve(
  url: string,
  quality: string,
  res: Response,
): Promise<void> {
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
        message:
          "Could not fetch DiskWala file. Link may be private, expired, or DiskWala is rate-limiting.",
      });
      return;
    }

    console.log("[terabox:diskwala:resolve] ok", {
      fileName: (dw.title ?? "Video").slice(0, 60),
      hasStream: Boolean(dw.directUrl),
    });

    const playbackId = createPlaybackSession({
      uk: "",
      shareid: "",
      fs_id: "",
      fileName: dw.title ?? "Video",
      quality,
      size: dw.sizeHuman ?? (dw.size ? formatSize(dw.size) : undefined),
      thumbnail: dw.thumbnail ?? null,
      dlink: dw.directUrl,
      shareUrl: url,
      upstreamHeaders: dw.headers ?? null,
      mimeType: dw.mimeType ?? "video/mp4",
    });

    res.json({
      ok: true,
      ...buildProtectedPlaybackPayload(playbackId, {
        size: dw.sizeHuman ?? (dw.size ? formatSize(dw.size) : undefined),
      }),
    });
  } catch (e) {
    console.error("[terabox:diskwala]", e);
    res.status(500).json({ message: "Failed to resolve DiskWala link. Please try again." });
  }
}

export async function handleTeraboxPlay(req: Request, res: Response): Promise<void> {
  const playbackId = String(req.params.playbackId ?? "").trim();
  const q = String(req.query.quality ?? "360");
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Reload the video." });
    return;
  }

  try {
    const origin = publicOriginFromReq(req);
    const m3u8 = await getM3U8(session.uk, session.shareid, session.fs_id, q, origin);
    if (!m3u8) {
      res.status(502).json({ message: "Could not start playback." });
      return;
    }

    res.set({
      "Content-Type": "application/vnd.apple.mpegurl",
      "Cache-Control": "no-store, private",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
      "Access-Control-Allow-Origin": "*",
    });
    res.send(m3u8);
  } catch (e) {
    console.error("[terabox:play]", e);
    res.status(503).json({ message: "Stream fetch failed." });
  }
}

export async function handleTeraboxStream(req: Request, res: Response): Promise<void> {
  res.status(410).json({
    message: "Direct stream URLs are disabled. Use the site player.",
  });
}

/**
 * App-style progressive file proxy (Range-aware) using the official dlink.
 * For MKV/AVI/etc (not playable in Chrome), remux on the fly to fragmented MP4
 * with ffmpeg (-c copy) so the browser can play the FULL file like the app.
 */
export async function handleTeraboxFile(req: Request, res: Response): Promise<void> {
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
      message: "Full file link unavailable. Video backend did not return a direct URL.",
    });
    return;
  }

  const wantPlay = String(req.query.play ?? "1") !== "0";
  const remux = wantPlay && needsBrowserRemux(session);

  // HEAD: advertise playable type without starting ffmpeg/upstream body.
  if (req.method === "HEAD") {
    res.status(200);
    res.set({
      "Content-Type": remux ? "video/mp4" : session.mimeType || "application/octet-stream",
      "Accept-Ranges": remux ? "none" : "bytes",
      "Cache-Control": "private, no-store",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "noindex, nofollow",
    });
    res.end();
    return;
  }

  let upstreamHeaders: Record<string, string> = {
    "User-Agent": BROWSER_HEADERS["User-Agent"],
    Referer: "https://dm.1024terabox.com/",
    Accept: "*/*",
    ...(session.upstreamHeaders || {}),
  };
  if (!upstreamHeaders.Cookie) {
    const cookie = teraboxCookieHeader();
    if (cookie) upstreamHeaders.Cookie = cookie;
  }

  try {
    if (remux) {
      await streamRemuxedMp4(dlink, upstreamHeaders, session, res);
      return;
    }

    const range = req.headers.range;
    if (typeof range === "string" && range) upstreamHeaders.Range = range;

    let upstream = await fetch(dlink, {
      headers: upstreamHeaders,
      redirect: "follow",
      // Long-lived stream — do not abort mid-transfer.
      signal: AbortSignal.timeout(30 * 60 * 1000),
    });

    // DiskWala signed URLs expire (~10 min). Re-resolve once and retry.
    if (!upstream.ok && upstream.status !== 206 && session.shareUrl && isDiskwalaUrl(session.shareUrl)) {
      console.warn("[terabox:diskwala:file] dlink expired, re-resolving");
      const dw = await resolveDiskwalaViaBackend(session.shareUrl);
      if (dw?.directUrl) {
        session.dlink = dw.directUrl;
        session.upstreamHeaders = dw.headers ?? null;
        const retry = await fetch(dw.directUrl, {
          headers: { ...upstreamHeaders, ...(dw.headers ?? {}) },
          redirect: "follow",
          signal: AbortSignal.timeout(30 * 60 * 1000),
        });
        if (retry.ok || retry.status === 206) {
          dlink = dw.directUrl;
          upstreamHeaders = { ...upstreamHeaders, ...(dw.headers ?? {}) };
          upstream = retry;
        }
      }
    }

    if (!upstream.ok && upstream.status !== 206) {
      res.status(502).json({ message: `Upstream file ${upstream.status}` });
      return;
    }

    const out: Record<string, string> = {
      "Content-Type":
        upstream.headers.get("content-type") || session.mimeType || "application/octet-stream",
      "Cache-Control": "private, no-store",
      "Accept-Ranges": "bytes",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Disposition": `inline; filename="${(session.fileName || "video").replace(/"/g, "")}"`,
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
    const nodeStream = Readable.fromWeb(upstream.body as import("stream/web").ReadableStream);
    nodeStream.on("error", (err) => {
      console.error("[terabox:file:pipe]", err);
      if (!res.headersSent) res.status(502).end();
      else res.destroy(err as Error);
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

function needsBrowserRemux(session: {
  fileName?: string;
  mimeType?: string | null;
}): boolean {
  const name = (session.fileName || "").toLowerCase();
  const mime = (session.mimeType || "").toLowerCase();
  if (/\.(mp4|m4v|webm|ogg|ogv)(\?|$)/i.test(name)) return false;
  if (mime.includes("mp4") || mime.includes("webm") || mime.includes("ogg")) return false;
  if (/\.(mkv|avi|wmv|flv|ts|m2ts|mpg|mpeg)(\?|$)/i.test(name)) return true;
  if (
    mime.includes("matroska") ||
    mime.includes("x-msvideo") ||
    mime.includes("x-ms-wmv") ||
    mime.includes("x-flv") ||
    mime.includes("mp2t")
  ) {
    return true;
  }
  return false;
}

async function streamRemuxedMp4(
  dlink: string,
  upstreamHeaders: Record<string, string>,
  session: { fileName?: string },
  res: Response,
): Promise<void> {
  const ffmpegPath = resolveFfmpegPath();
  if (!ffmpegPath) {
    res.status(503).json({
      message: "Browser remux unavailable (ffmpeg-static missing). Download the original file instead.",
    });
    return;
  }

  // Node fetches the CDN (works on Render). ffmpeg -headers with long cookies fails on Linux.
  const upstream = await fetch(dlink, {
    headers: upstreamHeaders,
    redirect: "follow",
    signal: AbortSignal.timeout(30 * 60 * 1000),
  });
  if (!upstream.ok && upstream.status !== 206) {
    res.status(502).json({ message: `Upstream file ${upstream.status}` });
    return;
  }
  if (!upstream.body) {
    res.status(502).json({ message: "Upstream returned empty body." });
    return;
  }

  const args = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-probesize",
    "32M",
    "-analyzeduration",
    "32M",
    "-i",
    "pipe:0",
    "-c",
    "copy",
    "-sn",
    "-f",
    "mp4",
    "-movflags",
    "frag_keyframe+empty_moov+default_base_moof",
    "pipe:1",
  ];

  const ff = spawn(ffmpegPath, args, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: true,
  });

  let stderr = "";
  ff.stderr?.on("data", (chunk: Buffer) => {
    stderr += chunk.toString("utf8");
    if (stderr.length > 4000) stderr = stderr.slice(-2000);
  });

  let headersSent = false;
  const sendHeaders = () => {
    if (headersSent || res.headersSent) return;
    headersSent = true;
    res.status(200);
    res.set({
      "Content-Type": "video/mp4",
      "Cache-Control": "private, no-store",
      "Accept-Ranges": "none",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Disposition": `inline; filename="${((session.fileName || "video").replace(/\.[^.]+$/, "") || "video").replace(/"/g, "")}.mp4"`,
    });
  };

  const upstreamStream = Readable.fromWeb(upstream.body as import("stream/web").ReadableStream);
  upstreamStream.on("error", (err) => {
    console.error("[terabox:remux:upstream]", err);
    if (!ff.killed) ff.kill("SIGKILL");
  });
  upstreamStream.pipe(ff.stdin!);
  ff.stdin?.on("error", (err) => {
    // EPIPE when ffmpeg exits early — expected on client abort.
    if ((err as NodeJS.ErrnoException).code !== "EPIPE") {
      console.error("[terabox:remux:stdin]", err);
    }
  });

  ff.stdout?.once("data", (chunk: Buffer) => {
    sendHeaders();
    if (!res.write(chunk)) {
      ff.stdout?.pause();
      res.once("drain", () => ff.stdout?.resume());
    }
    ff.stdout?.pipe(res);
  });

  ff.stdout?.on("error", (err) => {
    console.error("[terabox:remux:stdout]", err);
  });

  ff.on("error", (err) => {
    console.error("[terabox:remux:spawn]", err);
    upstreamStream.destroy();
    if (!headersSent && !res.headersSent) {
      res.status(502).json({ message: "Could not start video remux." });
    } else {
      res.destroy(err);
    }
  });

  ff.on("close", (code) => {
    upstreamStream.destroy();
    if (code !== 0 && !headersSent) {
      console.error("[terabox:remux] ffmpeg exit", code, stderr.slice(0, 500));
      if (!res.headersSent) {
        res.status(502).json({
          message: "Could not remux video for browser playback. Try Download.",
        });
      }
    }
  });

  res.on("close", () => {
    upstreamStream.destroy();
    if (!ff.killed) ff.kill("SIGKILL");
  });
}

export async function handleTeraboxDownload(req: Request, res: Response): Promise<void> {
  const playbackId = String(req.query.playbackId ?? req.body?.playbackId ?? "").trim();
  const q = String(req.query.quality ?? req.body?.quality ?? "360");
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Play the video again." });
    return;
  }

  // Prefer same full dlink path the Flutter app uses.
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
    try {
      const headers: Record<string, string> = {
        "User-Agent": BROWSER_HEADERS["User-Agent"],
        Referer: "https://dm.1024terabox.com/",
        Accept: "*/*",
        ...(session.upstreamHeaders || {}),
      };
      if (!headers.Cookie) {
        const cookie = teraboxCookieHeader();
        if (cookie) headers.Cookie = cookie;
      }
      const upstream = await fetch(dlink, {
        headers,
        redirect: "follow",
        signal: AbortSignal.timeout(120000),
      });
      if (!upstream.ok) {
        res.status(502).json({ message: "Could not prepare download." });
        return;
      }
      const fileName = session.fileName.replace(/[^\w.\-() ]+/g, "_") || "video.bin";
      res.set({
        "Content-Type": upstream.headers.get("content-type") || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-store, private",
        "X-Robots-Tag": "noindex, nofollow",
      });
      const len = upstream.headers.get("content-length");
      if (len) res.set("Content-Length", len);
      const buf = Buffer.from(await upstream.arrayBuffer());
      res.end(buf);
      return;
    } catch (e) {
      console.error("[terabox:download:dlink]", e);
      // fall through to HLS segment stitch
    }
  }

  const m3u8Content = await getM3U8(session.uk, session.shareid, session.fs_id, q);
  if (!m3u8Content || !m3u8Content.includes("#EXTM3U")) {
    res.status(502).json({ message: "Could not prepare download." });
    return;
  }

  const segmentUrls: string[] = [];
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
    "X-Robots-Tag": "noindex, nofollow",
  });

  let downloaded = 0;
  let failed = 0;
  for (let i = 0; i < segmentUrls.length; i++) {
    try {
      const segResp = await fetch(segmentUrls[i], {
        headers: {
          "Referer": "https://dm.terabox.app/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        signal: AbortSignal.timeout(30000),
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

export async function handleTeraboxTs(req: Request, res: Response): Promise<void> {
  const tsUrl = String(req.query.url ?? "");
  if (!tsUrl || !/^https?:\/\//i.test(tsUrl)) {
    res.status(400).json({ message: "Invalid segment request." });
    return;
  }

  // Only allow Terabox CDN hosts (open-proxy guard)
  try {
    const host = new URL(tsUrl).hostname.toLowerCase();
    const allowed =
      host.includes("terabox") ||
      host.includes("freeterabox") ||
      host.includes("dubox") ||
      host.includes("4funbox") ||
      /^v\d+-/.test(host);
    if (!allowed) {
      res.status(400).json({ message: "Host not allowed." });
      return;
    }
  } catch {
    res.status(400).json({ message: "Invalid segment URL." });
    return;
  }

  try {
    const headers: Record<string, string> = {
      Referer: "https://dm.terabox.app/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "*/*",
    };
    const range = req.headers.range;
    if (typeof range === "string" && range) headers.Range = range;

    const resp = await fetch(tsUrl, {
      headers,
      signal: AbortSignal.timeout(45000),
    });

    if (!resp.ok && resp.status !== 206) {
      res.status(502).json({ message: `Segment upstream ${resp.status}` });
      return;
    }

    const outHeaders: Record<string, string> = {
      "Content-Type": "video/mp2t",
      "Cache-Control": "private, max-age=120",
      "X-Robots-Tag": "noindex, nofollow",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
      "Accept-Ranges": "bytes",
    };
    const len = resp.headers.get("content-length");
    if (len) outHeaders["Content-Length"] = len;
    const cr = resp.headers.get("content-range");
    if (cr) outHeaders["Content-Range"] = cr;
    res.status(resp.status === 206 ? 206 : 200);
    res.set(outHeaders);

    const buf = Buffer.from(await resp.arrayBuffer());
    res.end(buf);
  } catch (e) {
    console.error("[terabox:ts]", e);
    if (!res.headersSent) res.status(502).json({ message: "TS segment fetch failed." });
  }
}
