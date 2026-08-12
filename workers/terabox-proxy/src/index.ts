/**
 * Binary-safe Terabox CDN proxy Worker.
 *
 * Replaces terabox-proxy.teraboxhigh.workers.dev/proxy which corrupts MPEG-TS
 * by decoding responses as text (UTF-8 replacement bytes break playback).
 *
 * Deploy:
 *   cd workers/terabox-proxy
 *   npx wrangler deploy
 */
export interface Env {
  // Optional: override allowed host suffixes via wrangler vars later
}

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range, Content-Type, Accept, Origin",
  "Access-Control-Expose-Headers":
    "Content-Length, Content-Range, Accept-Ranges, Content-Type",
  "Access-Control-Max-Age": "86400",
};

function isAllowedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return (
    h.includes("terabox") ||
    h.includes("freeterabox") ||
    h.includes("dubox") ||
    h.includes("4funbox") ||
    h.includes("mirrobox") ||
    h.includes("nephobox") ||
    /^v\d+-/.test(h)
  );
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

async function proxyBinary(target: URL, request: Request): Promise<Response> {
  if (!isAllowedHost(target.hostname)) {
    return json({ error: "Host not allowed" }, 400);
  }

  const headers = new Headers();
  headers.set(
    "User-Agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  );
  headers.set("Referer", "https://dm.terabox.app/");
  headers.set("Accept", "*/*");
  const range = request.headers.get("Range");
  if (range) headers.set("Range", range);

  const upstream = await fetch(target.toString(), {
    method: "GET",
    headers,
    redirect: "follow",
  });

  // IMPORTANT: stream the body as-is — never Response.text() on media.
  const out = new Headers(CORS);
  out.set(
    "Content-Type",
    upstream.headers.get("Content-Type") || "application/octet-stream",
  );
  out.set("Cache-Control", "public, max-age=120");
  out.set("Accept-Ranges", "bytes");
  const len = upstream.headers.get("Content-Length");
  if (len) out.set("Content-Length", len);
  const cr = upstream.headers.get("Content-Range");
  if (cr) out.set("Content-Range", cr);

  return new Response(upstream.body, {
    status: upstream.status,
    headers: out,
  });
}

export default {
  async fetch(request: Request, _env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/health") {
      return json({
        ok: true,
        service: "terabox-proxy",
        binarySafe: true,
        endpoints: ["/proxy?url=", "/health"],
      });
    }

    if (url.pathname === "/proxy") {
      const raw = url.searchParams.get("url");
      if (!raw) return json({ error: "Missing url" }, 400);
      let target: URL;
      try {
        target = new URL(raw);
      } catch {
        return json({ error: "Invalid url" }, 400);
      }
      try {
        return await proxyBinary(target, request);
      } catch (e) {
        return json(
          { error: "Proxy fetch failed", detail: e instanceof Error ? e.message : String(e) },
          502,
        );
      }
    }

    return json({ error: "Not found" }, 404);
  },
};
