import type { Request, Response } from "express";
import { randomBytes } from "crypto";
import fs from "fs";
import path from "path";
import { z } from "zod";
import {
  createPlaybackSession,
  buildProtectedPlaybackPayload,
  getPlaybackSession,
} from "./terabox-sessions";

const SHARE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const MAX_SHARES = 5000;
const SHORT_ID_LEN = 6;
const SHARE_FILE = path.join(process.cwd(), "data", "terabox-shares.json");

export type TeraboxShareRecord = {
  id: string;
  uk: string;
  shareid: string;
  fs_id: string;
  fileName: string;
  size?: string;
  sizeBytes?: number;
  thumbnail?: string | null;
  duration?: number;
  width?: number;
  height?: number;
  quality: string;
  createdAt: number;
  expiresAt: number;
};

type ShareStoreFile = Record<string, TeraboxShareRecord>;

const shares = new Map<string, TeraboxShareRecord>();

function loadShareStore(): void {
  try {
    if (!fs.existsSync(SHARE_FILE)) return;
    const raw = fs.readFileSync(SHARE_FILE, "utf8");
    const data = JSON.parse(raw) as ShareStoreFile;
    const now = Date.now();
    for (const [id, record] of Object.entries(data)) {
      if (record.expiresAt > now) shares.set(id, record);
    }
  } catch {
    /* ignore corrupt store */
  }
}

function persistShareStore(): void {
  try {
    const dir = path.dirname(SHARE_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const data: ShareStoreFile = {};
    shares.forEach((record, id) => {
      data[id] = record;
    });
    fs.writeFileSync(SHARE_FILE, JSON.stringify(data), "utf8");
  } catch {
    /* disk may be read-only in some environments */
  }
}

loadShareStore();

export function getShareLinkBase(): string {
  return (process.env.SHARE_LINK_BASE ?? process.env.VITE_SHARE_LINK_BASE ?? "")
    .trim()
    .replace(/\/$/, "");
}

export function buildShareUrl(
  sharePath: string,
  req?: { protocol: string; get: (h: string) => string | undefined; headers: Record<string, unknown> },
): string {
  const configured = getShareLinkBase();
  if (configured) return `${configured}${sharePath}`;
  if (req) {
    const proto = String(req.headers["x-forwarded-proto"] ?? req.protocol ?? "https");
    const host = String(req.headers["x-forwarded-host"] ?? req.get("host") ?? "localhost");
    return `${proto}://${host}${sharePath}`;
  }
  return sharePath;
}

function encodeShareToken(record: Omit<TeraboxShareRecord, "id" | "createdAt" | "expiresAt"> & { expiresAt?: number }): string {
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
    e: record.expiresAt,
  });
  return Buffer.from(payload, "utf8").toString("base64url");
}

function decodeShareToken(token: string): TeraboxShareRecord | null {
  try {
    const json = Buffer.from(token, "base64url").toString("utf8");
    const data = JSON.parse(json) as {
      u?: string;
      s?: string;
      f?: string;
      q?: string;
      n?: string;
      z?: string;
      t?: string | null;
      d?: number;
      w?: number;
      h?: number;
      e?: number;
    };
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
      createdAt: now,
      expiresAt,
    };
  } catch {
    return null;
  }
}

export function resolveShareRecord(id: string, backupToken?: string | null): TeraboxShareRecord | null {
  purgeExpiredShares();
  const trimmed = id.trim();
  if (!trimmed && !backupToken) return null;

  // ?d= token survives redeploys when disk store is wiped (Render, etc.)
  if (backupToken) {
    const fromBackup = decodeShareToken(backupToken.trim());
    if (fromBackup) return fromBackup;
  }

  // Stateless token embedded in /r/{token} — no server storage required
  if (trimmed.length > SHORT_ID_LEN + 2) {
    const decoded = decodeShareToken(trimmed);
    if (decoded) return decoded;
  }

  // Legacy short ids (optional local cache — may be empty after deploy)
  if (trimmed.length <= SHORT_ID_LEN + 2) {
    const stored = shares.get(trimmed);
    if (stored && stored.expiresAt > Date.now()) return stored;
  }

  return null;
}

function statelessShareToken(record: TeraboxShareRecord): string {
  return encodeShareToken(record);
}

/** Player route — same stateless token as /r/ for backwards compatibility. */
export function buildSharePagePath(record: TeraboxShareRecord): string {
  return `/s/${statelessShareToken(record)}`;
}

/** Public share URL — stateless token survives redeploys without disk storage. */
export function buildShortSharePath(record: TeraboxShareRecord): string {
  return `/r/${statelessShareToken(record)}`;
}

export function getShareRecord(id: string, backupToken?: string | null): TeraboxShareRecord | null {
  return resolveShareRecord(id, backupToken);
}

function purgeExpiredShares(): void {
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

function generateShortId(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = randomBytes(SHORT_ID_LEN);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

function toPublicPayload(
  record: TeraboxShareRecord,
  req?: { protocol: string; get: (h: string) => string | undefined; headers: Record<string, unknown> },
) {
  const q = record.quality || "360";
  const sharePath = buildSharePagePath(record);
  const publicPath = buildShortSharePath(record);
  const playbackId = createPlaybackSession({
    uk: record.uk,
    shareid: record.shareid,
    fs_id: record.fs_id,
    fileName: record.fileName,
    quality: q,
  });
  const shareUrl = buildShareUrl(publicPath, req);
  return {
    ...buildProtectedPlaybackPayload(playbackId, {
      id: statelessShareToken(record),
      path: publicPath,
      shareUrl,
      shortUrl: shareUrl,
      permanentUrl: shareUrl,
      size: record.size,
      duration: record.duration ? Math.round(record.duration) : undefined,
      expiresAt: record.expiresAt,
    }),
  };
}

const createShareSchema = z
  .object({
    playbackId: z.string().min(8).max(256).optional(),
    uk: z.string().min(1).optional(),
    shareid: z.string().min(1).optional(),
    fs_id: z.string().min(1).optional(),
    fileName: z.string().min(1).max(512).optional(),
    size: z.string().optional(),
    sizeBytes: z.number().optional(),
    thumbnail: z.string().nullable().optional(),
    duration: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    quality: z.enum(["360", "480", "720"]).optional().default("360"),
  })
  .refine(
    (d) =>
      Boolean(d.playbackId) ||
      (Boolean(d.uk) && Boolean(d.shareid) && Boolean(d.fs_id) && Boolean(d.fileName)),
    { message: "Invalid share data." },
  );

export async function handleTeraboxShareCreate(req: Request, res: Response): Promise<void> {
  const parsed = createShareSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid share data." });
    return;
  }

  purgeExpiredShares();

  const now = Date.now();
  const expiresAt = now + SHARE_TTL_MS;

  let source: Omit<TeraboxShareRecord, "id" | "createdAt" | "expiresAt">;
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
      quality: parsed.data.quality ?? session.quality,
    };
  } else {
    source = {
      uk: parsed.data.uk!,
      shareid: parsed.data.shareid!,
      fs_id: parsed.data.fs_id!,
      fileName: parsed.data.fileName!,
      size: parsed.data.size,
      sizeBytes: parsed.data.sizeBytes,
      quality: parsed.data.quality ?? "360",
    };
  }

  const base = { ...source, createdAt: now, expiresAt };

  // Optional local cache for analytics; primary URL is stateless and needs no disk.
  let shortId = generateShortId();
  while (shares.has(shortId)) shortId = generateShortId();

  const record: TeraboxShareRecord = { id: shortId, ...base };
  shares.set(shortId, record);
  persistShareStore();

  const mainUrl = buildShareUrl(buildShortSharePath(record), req);

  res.status(201).json({
    ...toPublicPayload(record, req),
    shareUrl: mainUrl,
    mainUrl,
    permanentUrl: mainUrl,
  });
}

export async function handleTeraboxShareGet(req: Request, res: Response): Promise<void> {
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

  res.json(toPublicPayload(record, req));
}

export async function handleTeraboxShareConfig(_req: Request, res: Response): Promise<void> {
  res.json({ shareOrigin: getShareLinkBase() || null });
}
