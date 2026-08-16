import { randomBytes } from "crypto";

const SESSION_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours
const MAX_SESSIONS = 3000;

export type PlaybackSession = {
  id: string;
  uk: string;
  shareid: string;
  fs_id: string;
  fileName: string;
  quality: string;
  size?: string;
  duration?: number;
  thumbnail?: string | null;
  width?: number;
  height?: number;
  /** Official app-style direct file URL (from video-backend / TERABOX_NDUS). */
  dlink?: string | null;
  /** Original share URL (for video-backend re-resolve). */
  shareUrl?: string | null;
  /** Upstream headers required to fetch dlink (Cookie/Referer) — server-only. */
  upstreamHeaders?: Record<string, string> | null;
  mimeType?: string | null;
  createdAt: number;
  expiresAt: number;
};

const sessions = new Map<string, PlaybackSession>();

function purgeSessions(): void {
  const now = Date.now();
  sessions.forEach((s, id) => {
    if (s.expiresAt <= now) sessions.delete(id);
  });
  if (sessions.size <= MAX_SESSIONS) return;
  const sorted = Array.from(sessions.entries()).sort((a, b) => a[1].createdAt - b[1].createdAt);
  for (const [id] of sorted.slice(0, sessions.size - MAX_SESSIONS)) sessions.delete(id);
}

function newSessionId(): string {
  return randomBytes(18).toString("base64url");
}

export function createPlaybackSession(input: {
  uk: string;
  shareid: string;
  fs_id: string;
  fileName: string;
  quality?: string;
  size?: string;
  duration?: number;
  thumbnail?: string | null;
  width?: number;
  height?: number;
  dlink?: string | null;
  shareUrl?: string | null;
  upstreamHeaders?: Record<string, string> | null;
  mimeType?: string | null;
}): string {
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
    expiresAt: now + SESSION_TTL_MS,
  });
  return id;
}

export function getPlaybackSession(id: string): PlaybackSession | null {
  purgeSessions();
  const session = sessions.get(id);
  if (!session || session.expiresAt <= Date.now()) return null;
  return session;
}

export const PLAYBACK_QUALITY_OPTIONS = ["360", "480", "720", "1080", "1440", "2160"] as const;

export function buildProtectedPlaybackPayload(sessionId: string, extra?: Record<string, unknown>) {
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
    ...extra,
  };
}
