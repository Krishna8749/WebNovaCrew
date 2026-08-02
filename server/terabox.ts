import type { Request, Response } from "express";
import { z } from "zod";
import {
  createPlaybackSession,
  getPlaybackSession,
  buildProtectedPlaybackPayload,
} from "./terabox-sessions";

const HMAC_KEY = "iuuPc64E4Fhn0rTXEzrnbLph0o5qyEEa";
const WORKER_BASE = "https://terabox-proxy.teraboxhigh.workers.dev";

const resolveSchema = z.object({
  url: z.string().trim().max(2048),
  quality: z.enum(["360", "480", "720"]).optional().default("360"),
});

const TERABOX_HOSTS = [
  "terabox.com", "1024terabox.com", "teraboxapp.com", "terabox.app",
  "4funbox.com", "mirrobox.com", "nephobox.com", "freeterabox.com",
  "terasharelink.com", "tibibox.com", "momerybox.com", "terabox.fun",
  "1024tera.com", "teraboxlink.com",
];

function isTeraboxUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return TERABOX_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
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

/** Rewrite media segment URLs through the CF worker CORS proxy (CDN allows CF; playlist API does not). */
function rewritePlaylistThroughWorker(m3u8: string): string {
  return m3u8
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith("http")) return line;
      return `${WORKER_BASE}/proxy?url=${encodeURIComponent(trimmed)}`;
    })
    .join("\n");
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
 * Fall back to worker /m3u8, then rewrite segment URLs via worker /proxy for browser CORS.
 */
async function getM3U8(uk: string, shareid: string, fid: string, quality: string): Promise<string | null> {
  const q = quality || "360";
  const ts = Math.floor(Date.now() / 1000);
  const sign = await hmacSha1("0dubox" + ts);

  const hosts = ["dm.terabox.app", "dm.terabox.com", "www.terabox.app"];
  for (const host of hosts) {
    const streamUrl = buildStreamingUrl(uk, shareid, fid, q, sign, ts, host);
    const direct = await fetchPlaylistText(streamUrl, `https://${host}/`);
    if (direct) return rewritePlaylistThroughWorker(direct);
  }

  // Legacy Cloudflare worker playlist (may fail with 400141 / need verify).
  try {
    const workerUrl = `${WORKER_BASE}/m3u8?uk=${uk}&shareid=${shareid}&fid=${fid}&quality=${q}&sign=${sign}&timestamp=${ts}`;
    const resp = await fetch(workerUrl, { signal: AbortSignal.timeout(30000) });
    if (resp.ok) {
      const text = await resp.text();
      if (text.includes("#EXTM3U")) return rewritePlaylistThroughWorker(text);
    }
  } catch {
    /* continue */
  }

  // Last resort: worker CORS proxy of the direct streaming URL.
  for (const host of hosts) {
    const streamUrl = buildStreamingUrl(uk, shareid, fid, q, sign, ts, host);
    const proxied = await fetchPlaylistText(
      `${WORKER_BASE}/proxy?url=${encodeURIComponent(streamUrl)}`,
      `https://${host}/`,
    );
    if (proxied) return rewritePlaylistThroughWorker(proxied);
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
  const url = normalizeShareUrl(rawUrl);
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
    const resolved = await resolveShareMetadata(url, surlVariants);
    if (!resolved.meta) {
      console.error("[terabox:resolve] failed", { surlVariants, url: url.slice(0, 80), reason: resolved.reason });
      res.status(502).json({
        message:
          resolved.reason ??
          "Could not fetch file metadata. Link may be private, expired, or Terabox is rate-limiting.",
      });
      return;
    }
    const meta = resolved.meta;
    if (!meta.list?.length) {
      res.status(502).json({ message: "No files found in this share." });
      return;
    }

    const file = meta.list[0];
    const uk = String(meta.uk);
    const shareid = String(meta.share_id);
    const fid = String(file.fs_id);

    console.log("[terabox:resolve] ok", { fileName: file.server_filename, surl: surlVariants[0]?.slice(0, 12) });

    const playbackId = createPlaybackSession({
      uk,
      shareid,
      fs_id: fid,
      fileName: file.server_filename ?? "Video",
      quality,
      size: file.size ? formatSize(parseInt(file.size, 10)) : undefined,
      duration: file.duration ? Math.round(file.duration) : undefined,
      thumbnail: file.thumbnail ?? null,
      width: file.width,
      height: file.height,
    });

    res.json({
      ok: true,
      ...buildProtectedPlaybackPayload(playbackId, {
        size: file.size ? formatSize(parseInt(file.size)) : undefined,
        duration: file.duration ? Math.round(file.duration) : undefined,
      }),
    });
  } catch (e) {
    console.error("[terabox]", e);
    res.status(500).json({ message: "Failed to resolve link. Please try again." });
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
    const m3u8 = await getM3U8(session.uk, session.shareid, session.fs_id, q);
    if (!m3u8) {
      res.status(502).json({ message: "Could not start playback." });
      return;
    }

    res.set({
      "Content-Type": "application/vnd.apple.mpegurl",
      "Cache-Control": "no-store, private",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
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

export async function handleTeraboxDownload(req: Request, res: Response): Promise<void> {
  const playbackId = String(req.body?.playbackId ?? "").trim();
  const q = String(req.query.quality ?? req.body?.quality ?? "360");
  const session = getPlaybackSession(playbackId);
  if (!session) {
    res.status(404).json({ message: "Playback session expired. Play the video again." });
    return;
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
  const tsUrl = req.query.url as string;
  if (!tsUrl || !/^https?:\/\//i.test(tsUrl)) {
    res.status(400).json({ message: "Invalid segment request." });
    return;
  }

  try {
    const resp = await fetch(tsUrl, {
      headers: {
        "Referer": "https://dm.terabox.app/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      signal: AbortSignal.timeout(30000),
    });

    res.set({
      "Content-Type": resp.headers.get("content-type") || "video/MP2T",
      "Content-Length": resp.headers.get("content-length") || "",
      "Cache-Control": "private, max-age=300",
      "X-Robots-Tag": "noindex, nofollow",
    });
    if (resp.body) {
      const reader = resp.body.getReader();
      const pump = async (): Promise<void> => {
        const { done, value } = await reader.read();
        if (done) return;
        res.write(value);
        return pump();
      };
      await pump();
    }
    res.end();
  } catch (e) {
    console.error("[terabox:ts]", e);
    res.status(502).json({ message: "TS segment fetch failed." });
  }
}
