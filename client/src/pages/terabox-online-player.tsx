import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { useRoute } from "wouter";
import {
  Play,
  Download,
  Link2,
  ClipboardPaste,
  Loader2,
  Shield,
  Zap,
  HelpCircle,
  Smartphone,
  Monitor,
  Cloud,
  FileVideo,
  Share2,
  CheckCircle2,
  Menu,
  X,
  Tablet,
  Gauge,
  Server,
  Wifi,
  Lock,
  Sparkles,
  Clock,
  Globe,
  ChevronRight,
  BookOpen,
  LockKeyhole,
  Film,
  Copy,
  SkipBack,
  SkipForward,
  Settings2,
} from "lucide-react";
import { SEO } from "@/components/seo/Head";
import { VIDEO_PROTECTED_ROBOTS, SHARE_PREVIEW_ROBOTS } from "@/lib/video-protected-routes";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { VectorCardIllustration } from "@/components/illustrations/VectorCardIllustration";
import { AdUnit } from "@/components/ads/AdSense";

const ASSETS = {
  logo: "/terabox/logo.svg",
  playCircle: "/terabox/play-circle.svg",
  cloudDownload: "/terabox/cloud-download.svg",
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=960&q=85&auto=format&fit=crop",
  preview: "https://images.unsplash.com/photo-1594909127802-5734570421ad?w=960&q=85&auto=format&fit=crop",
  streaming: "https://images.unsplash.com/photo-1574375927938-d5a98e8d7390?w=960&q=85&auto=format&fit=crop",
  phone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=85&auto=format&fit=crop",
  tablet: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=640&q=85&auto=format&fit=crop",
  desktop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=85&auto=format&fit=crop",
  stepCopy: "https://images.unsplash.com/photo-1556656793-08539006f9f8?w=480&q=85&auto=format&fit=crop",
  stepPaste: "https://images.unsplash.com/photo-1587614383346-74d79d3635ca?w=480&q=85&auto=format&fit=crop",
  stepDownload: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&q=85&auto=format&fit=crop",
  guideCopy: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=480&q=85&auto=format&fit=crop",
  guideIphone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=480&q=85&auto=format&fit=crop",
  guideWifi: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=480&q=85&auto=format&fit=crop",
};

function normalizeTeraboxUrl(input: string): string {
  let bare = input.trim().replace(/[\u200B-\u200D\uFEFF]/g, "");
  if (!/^https?:\/\//i.test(bare)) bare = `https://${bare}`;
  return bare;
}

const BROWSERS = [
  { name: "Chrome", icon: "https://cdn.simpleicons.org/googlechrome/4285F4" },
  { name: "Safari", icon: "https://cdn.simpleicons.org/safari/0FB5EE" },
  { name: "Firefox", icon: "https://cdn.simpleicons.org/firefox/FF7139" },
  { name: "Edge", icon: "https://cdn.simpleicons.org/microsoftedge/0078D4" },
];

type HlsInstance = {
  destroy: () => void;
  loadSource: (url: string) => void;
  attachMedia: (video: HTMLVideoElement) => void;
  on: (event: string, cb: (...args: unknown[]) => void) => void;
  startLoad: () => void;
  recoverMediaError: () => void;
};

type HlsConstructor = {
  isSupported: () => boolean;
  new (config?: {
    enableWorker?: boolean;
    lowLatencyMode?: boolean;
    maxBufferLength?: number;
    maxMaxBufferLength?: number;
    maxBufferSize?: number;
    maxBufferHole?: number;
    startLevel?: number;
    autoStartLoad?: boolean;
    fragLoadingTimeOut?: number;
    manifestLoadingTimeOut?: number;
    levelLoadingTimeOut?: number;
    fragLoadingMaxRetry?: number;
    manifestLoadingMaxRetry?: number;
    levelLoadingMaxRetry?: number;
    xhrSetup?: (xhr: XMLHttpRequest) => void;
    [key: string]: unknown;
  }): HlsInstance;
  Events: { MANIFEST_PARSED: string; ERROR: string };
  ErrorTypes: { NETWORK_ERROR: string; MEDIA_ERROR: string };
};

declare global {
  interface Window {
    Hls?: HlsConstructor;
  }
}

let hlsScriptPromise: Promise<HlsConstructor | null> | null = null;

function loadHlsFromCdn(): Promise<HlsConstructor | null> {
  if (window.Hls) return Promise.resolve(window.Hls);
  if (!hlsScriptPromise) {
    hlsScriptPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.6.16/dist/hls.min.js";
      script.async = true;
      script.onload = () => resolve(window.Hls ?? null);
      script.onerror = () => resolve(null);
      document.head.appendChild(script);
    });
  }
  return hlsScriptPromise;
}

type ResolveResult = {
  playbackId: string;
  fileName: string;
  size?: string;
  duration?: number;
  quality?: string;
  qualityOptions?: string[];
  fullFile?: boolean;
  playbackMode?: "progressive" | "hls";
  mimeType?: string | null;
  streamUrl?: string | null;
  needsRemux?: boolean;
  thumbnail?: string | null;
};

/** Full quality ladder supported by both TeraBox and DiskWala: lowest → 4K. */
const DEFAULT_QUALITY_OPTIONS = ["360", "480", "720", "1080", "1440", "2160"];
const QUALITY_LABELS: Record<string, string> = {
  "2160": "4K",
  "1440": "2K",
  "1080": "1080p",
  "720": "720p",
  "480": "480p",
  "360": "360p",
};
function qualityLabel(q: string): string {
  return QUALITY_LABELS[q] ?? `${q}p`;
}

type SharePayload = Partial<ResolveResult> & {
  id?: string;
  path?: string;
  shareUrl?: string;
  mainUrl?: string;
  redirectUrl?: string | null;
  permanentUrl?: string;
  shortUrl?: string;
  message?: string;
  expiresAt?: number;
};

function payloadToResult(data: SharePayload, quality = "360"): ResolveResult {
  if (!data.playbackId) {
    throw new Error("Playback unavailable");
  }
  return {
    playbackId: data.playbackId,
    fileName: data.fileName ?? "Video",
    size: data.size,
    duration: data.duration,
    quality: data.quality ?? quality,
    qualityOptions: data.qualityOptions ?? DEFAULT_QUALITY_OPTIONS,
    fullFile: data.fullFile,
    playbackMode: data.playbackMode,
    mimeType: data.mimeType,
    streamUrl: data.streamUrl,
    needsRemux: data.needsRemux,
    thumbnail: data.thumbnail,
  };
}

const STEPS = [
  {
    step: 1,
    icon: Share2,
    title: "Find & Copy",
    desc: "Open TeraBox, find your video or file, and copy the share link from the address bar or share button.",
    illustration: "stepCopy",
  },
  {
    step: 2,
    icon: ClipboardPaste,
    title: "Paste & Play",
    desc: "Paste the link below and click Play - your video loads instantly in the browser player.",
    illustration: "stepPaste",
  },
  {
    step: 3,
    icon: Download,
    title: "Stream or Download",
    desc: "Watch online in HD or use the download button to save the file to your device.",
    illustration: "stepDownload",
  },
];

const WHY_CHOOSE = [
  {
    icon: Film,
    color: "text-blue-400 bg-blue-400/10",
    title: "TeraBox Online Player",
    desc: "Stream any public TeraBox link directly in your browser — no app install required.",
  },
  {
    icon: Smartphone,
    color: "text-violet-400 bg-violet-400/10",
    title: "Works Everywhere",
    desc: "Phone, tablet, laptop, or desktop — the same smooth experience on every device.",
  },
  {
    icon: Zap,
    color: "text-amber-400 bg-amber-400/10",
    title: "Super Fast",
    desc: "Links are processed in seconds. No long waits or confusing extra steps.",
  },
  {
    icon: LockKeyhole,
    color: "text-emerald-400 bg-emerald-400/10",
    title: "Free Downloader",
    desc: "Completely free TeraBox downloader. No credit card, no subscription, no sign-up.",
  },
];

const TECH_FEATURES = [
  {
    icon: Link2,
    color: "text-cyan-400 bg-cyan-400/10",
    title: "Smart Link Processing",
    desc: "Automatically detects and resolves TeraBox share URLs from multiple domains.",
  },
  {
    icon: Server,
    color: "text-blue-400 bg-blue-400/10",
    title: "Multi-Server Tech",
    desc: "Fallback routing helps keep streams stable even when one path is slow.",
  },
  {
    icon: Wifi,
    color: "text-violet-400 bg-violet-400/10",
    title: "Adaptive Playback",
    desc: "Browser-native video controls adjust quality based on your connection speed.",
  },
  {
    icon: Gauge,
    color: "text-emerald-400 bg-emerald-400/10",
    title: "Smooth Streaming",
    desc: "Direct links mean less buffering and a cleaner watch experience.",
  },
];

const DEVICES = [
  {
    icon: Smartphone,
    title: "On Your Phone",
    desc: "Perfect for watching on the go. Large tap targets, paste support, and mobile-optimized controls.",
    image: IMAGES.phone,
  },
  {
    icon: Tablet,
    title: "On Tablets",
    desc: "Great for couch or bed viewing. The player scales beautifully on medium screens.",
    image: IMAGES.tablet,
  },
  {
    icon: Monitor,
    title: "On Computers",
    desc: "Full desktop power — keyboard shortcuts, fullscreen mode, and fast download speeds.",
    image: IMAGES.desktop,
  },
];

const STATS = [
  { icon: Zap, label: "Processing speed", value: "3×", sub: "Faster link handling" },
  { icon: Server, label: "Uptime", value: "99.9%", sub: "Reliable access" },
  { icon: Shield, label: "Privacy", value: "100%", sub: "No account required" },
];

const SUPPORTED_DOMAINS = [
  "terabox.com",
  "www.terabox.com",
  "1024terabox.com",
  "teraboxapp.com",
  "4funbox.com",
  "mirrobox.com",
  "momerybox.com",
  "teraboxlink.com",
  "terasharefile.com",
  // DiskWala (same video infrastructure)
  "diskwala.com",
  "disk-wala.com",
  "diskwala.app",
  "diskwala.me",
];

const GUIDES = [
  {
    icon: Copy,
    title: "How to copy a TeraBox share link",
    desc: "Open the file in TeraBox → tap Share → copy the public link. Paste it here to play.",
    readTime: "2 min read",
    illustration: "guideCopy",
  },
  {
    icon: Smartphone,
    title: "Play TeraBox videos on iPhone without an app",
    desc: "Use Safari, paste your link, and tap Play. Works with iOS 14+ and no App Store download.",
    readTime: "3 min read",
    illustration: "guideIphone",
  },
  {
    icon: Wifi,
    title: "Download large TeraBox files on mobile data",
    desc: "Stream first to preview, then download when on Wi‑Fi for the best experience.",
    readTime: "4 min read",
    illustration: "guideWifi",
  },
];

const FAQS = [
  {
    q: "Is it legal to download videos from TeraBox?",
    a: "Only download content you own or have explicit permission to access. This tool processes public share links — you are responsible for complying with copyright and TeraBox terms of service.",
  },
  {
    q: "Do I need to install any software?",
    a: "No. This is a browser-based TeraBox online player. It works in Chrome, Safari, Firefox, Edge, and most modern mobile browsers without any app.",
  },
  {
    q: "Is there a limit on video size or duration?",
    a: "There is no artificial limit on our side. Very large files may take longer to load depending on TeraBox servers and your internet speed.",
  },
  {
    q: "Why is my video not playing or downloading?",
    a: "Common causes: the link is private or expired, the file was removed, or TeraBox changed their link format. Try a fresh public share URL.",
  },
  {
    q: "Is my data safe?",
    a: "We do not require login. Links you paste are used only to fetch the stream URL for playback. We do not store your watch history or personal data.",
  },
  {
    q: "How does the TeraBox player work on different devices?",
    a: "The same paste-and-play flow works everywhere. Mobile users get touch-friendly controls; desktop users get fullscreen and keyboard support.",
  },
  {
    q: "Is the TeraBox downloader free to use?",
    a: "Yes — 100% free. Paste a link, play online, or download without paying or creating an account.",
  },
  {
    q: "Which TeraBox domains are supported?",
    a: `Our player supports public links from terabox.com, 1024terabox.com, teraboxapp.com, and related TeraBox mirror domains. DiskWala links (diskwala.com, diskwala.app, diskwala.me) are also fully supported.`,
  },
  {
    q: "Can I play DiskWala (diskwala.com) videos?",
    a: "Yes! DiskWala is fully supported. Paste your DiskWala share link exactly as you would a TeraBox link — the player detects it automatically and streams the video.",
  },
  {
    q: "Can I use this as a TeraBox link opener?",
    a: "Yes. Paste any supported TeraBox share URL and the tool opens the direct stream link in your browser instantly.",
  },
];

const LOVE_IT = [
  { icon: Zap, text: "Actually fast — links processed in seconds" },
  { icon: FileVideo, text: "Stream or download — your choice, instant access" },
  { icon: Sparkles, text: "Clean interface — no popups or forced redirects" },
  { icon: Lock, text: "Private — no account, no tracking of what you watch" },
];

function BrandMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim =
    size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-10 w-10 sm:h-11 sm:w-11";
  return (
    <img
      src={ASSETS.logo}
      alt=""
      className={`${dim} shrink-0 rounded-xl shadow-lg shadow-blue-900/30`}
      width={44}
      height={44}
      aria-hidden
    />
  );
}

function IconBadge({
  icon: Icon,
  color,
  size = "md",
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const iconDim = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-7 w-7" : "h-5 w-5";
  return (
    <span className={`inline-flex ${dim} items-center justify-center rounded-xl ${color}`}>
      <Icon className={iconDim} strokeWidth={2} aria-hidden />
    </span>
  );
}

async function parseJsonResponse<T>(res: Response, fallbackError: string): Promise<T> {
  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    // Non-JSON response (plain text, HTML, etc.)
    if (!res.ok) {
      // Try to extract a meaningful message from the text
      const shortText = text?.slice(0, 200).trim();
      if (res.status >= 500) {
        throw new Error(
          "Backend server is temporarily busy or rate-limited. Please try again in a moment.",
        );
      }
      throw new Error(shortText || fallbackError);
    }
    // OK response but not JSON — treat as success with empty data
    return {} as T;
  }
  if (!res.ok) {
    throw new Error(data?.message || data?.error || fallbackError);
  }
  return data as T;
}

export default function TeraboxOnlinePlayer() {
  const { toast } = useToast();
  const [, shareParamsR] = useRoute("/r/:shareId");
  const [, shareParamsS] = useRoute("/s/:shareId");
  const [, shareParamsV] = useRoute("/v/:shareId");
  const shareId = shareParamsR?.shareId ?? shareParamsS?.shareId ?? shareParamsV?.shareId;
  const isShareView = Boolean(shareId);

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResolveResult | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadAfterResolve, setDownloadAfterResolve] = useState(false);
  const [quality, setQuality] = useState("360");
  const [videoStatus, setVideoStatus] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [mainShareUrl, setMainShareUrl] = useState("");
  const [permanentShareUrl, setPermanentShareUrl] = useState("");
  const [shareLoading, setShareLoading] = useState(false);
  const [loadingShare, setLoadingShare] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<HlsInstance | null>(null);
  const m3u8Ref = useRef<string>("");

  const destroyHls = useCallback(() => {
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => destroyHls();
  }, [destroyHls]);

  useEffect(() => {
    if (!shareId) return;
    let cancelled = false;
    (async () => {
      setLoadingShare(true);
      try {
        const backup = new URLSearchParams(window.location.search).get("d");
        const apiPath = backup
          ? `/api/terabox/share/${encodeURIComponent(shareId)}?d=${encodeURIComponent(backup)}`
          : `/api/terabox/share/${encodeURIComponent(shareId)}`;
        const res = await fetch(apiPath);
        const data = await parseJsonResponse<SharePayload>(res, "Share link not found");
        if (cancelled) return;
        const q = data.quality ?? "360";
        setQuality(q);
        setResult(payloadToResult(data, q));
        setShareUrl(
          data.shareUrl ??
            data.permanentUrl ??
            data.shortUrl ??
            `${window.location.origin}${data.path ?? `/s/${shareId}`}`,
        );
        setTimeout(() => {
          document.getElementById("player")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      } catch (err) {
        if (!cancelled) {
          toast({
            title: "Share link unavailable",
            description: err instanceof Error ? err.message : "Link expired or invalid.",
            variant: "destructive",
          });
        }
      } finally {
        if (!cancelled) setLoadingShare(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [shareId, toast]);

  const createShareLink = useCallback(async () => {
    if (!result?.playbackId) return;
    setShareLoading(true);
    try {
      const res = await fetch("/api/terabox/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playbackId: result.playbackId,
          quality,
        }),
      });
      const data = await parseJsonResponse<SharePayload & { message?: string }>(
        res,
        "Could not create share link",
      );
      const path = data.path ?? `/r/${data.id ?? ""}`;
      const main =
        data.mainUrl ?? data.permanentUrl ?? data.shareUrl ?? `${window.location.origin}${path}`;
      setMainShareUrl(main);
      setPermanentShareUrl(main);
      setShareUrl(main);
      try {
        await navigator.clipboard.writeText(main);
        toast({
          title: "Share link copied",
          description: "Send this link — it opens your video directly on Web Nova Crew.",
        });
      } catch {
        toast({
          title: "Share link ready",
          description: "Copy the link below and send it to friends.",
        });
      }
    } catch (err) {
      toast({
        title: "Share failed",
        description: err instanceof Error ? err.message : "Try again.",
        variant: "destructive",
      });
    } finally {
      setShareLoading(false);
    }
  }, [result, quality, toast]);

  const copyShareLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied" });
    } catch {
      toast({ title: "Copy the link manually", description: shareUrl });
    }
  };

  const playStream = useCallback(
    async (q: string) => {
      const meta = result;
      if (!meta) return;

      destroyHls();
      setVideoStatus("Loading stream...");

      const video = videoRef.current;
      if (!video) return;

      const playHls = async (targetQ: string) => {
        // Use the stream URL directly — avoids blob URL overhead and supports redirects
        const streamUrl = `/api/terabox/play/${encodeURIComponent(meta.playbackId)}?quality=${targetQ}`;

        try {
          const Hls = await loadHlsFromCdn();
          if (Hls?.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: false,
              // Aggressive buffering for smooth non-stop playback
              maxBufferLength: 120,
              maxMaxBufferLength: 600,
              maxBufferSize: 256 * 1024 * 1024, // 256 MB
              maxBufferHole: 0.5,
              // Start at lowest quality for fastest initial load
              startLevel: 0,
              autoStartLoad: true,
              fragLoadingTimeOut: 60000,
              manifestLoadingTimeOut: 30000,
              levelLoadingTimeOut: 30000,
              fragLoadingMaxRetry: 6,
              manifestLoadingMaxRetry: 4,
              levelLoadingMaxRetry: 4,
              xhrSetup: (xhr: XMLHttpRequest) => {
                xhr.withCredentials = false;
              },
            });
            hlsRef.current = hls;

            hls.on(Hls.Events.MANIFEST_PARSED, (...args: unknown[]) => {
              const data = args[1] as { levels?: unknown[] };
              const levels = data.levels ?? [];
              setVideoStatus(
                `▶ Streaming • ${levels.length} quality level${levels.length !== 1 ? "s" : ""} • ${targetQ}p`,
              );
              video.play().catch(() => {
                setVideoStatus("Tap ▶ to play");
              });
            });

            let networkErrorCount = 0;
            let mediaErrorCount = 0;
            hls.on(Hls.Events.ERROR, (...args: unknown[]) => {
              const data = args[1] as { fatal?: boolean; type?: string; details?: string };
              if (!data.fatal) return;
              if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                networkErrorCount++;
                if (networkErrorCount <= 3) {
                  setVideoStatus(`Network hiccup — retrying (${networkErrorCount}/3)…`);
                  setTimeout(() => hls.startLoad(), 1000 * networkErrorCount);
                } else {
                  setVideoStatus("Stream lost — try refreshing or use Download");
                }
              } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                mediaErrorCount++;
                if (mediaErrorCount <= 2) {
                  setVideoStatus("Media error — recovering…");
                  hls.recoverMediaError();
                } else {
                  setVideoStatus(`Playback error${data.details ? `: ${data.details}` : ""}`);
                }
              } else {
                setVideoStatus(`Playback error${data.details ? `: ${data.details}` : ""}`);
              }
            });

            hls.loadSource(streamUrl);
            hls.attachMedia(video);
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            // Native HLS (Safari / iOS) — point directly at the stream URL
            video.src = streamUrl;
            video.preload = "auto";
            video.load();
            setVideoStatus("Starting native HLS playback…");
            video.play().catch(() => setVideoStatus("Tap ▶ to play"));
          } else {
            setVideoStatus("HLS not supported in this browser — try Download");
          }
        } catch (err: any) {
          if (err.name === "AbortError") {
            setVideoStatus("Stream timed out — try again");
          } else {
            setVideoStatus("Stream failed — please try again");
          }
        }
      };

      // Direct CDN streaming via progressive file proxy (same as mobile app)
      if (meta.fullFile && meta.playbackMode === "progressive") {
        const fileUrl =
          meta.streamUrl ??
          `/api/terabox/file/${encodeURIComponent(meta.playbackId)}`;

        video.removeAttribute("src");
        video.load();

        const onCanPlay = () => {
          setVideoStatus("▶ Playing full file (direct CDN stream)");
        };
        const onWaiting = () => setVideoStatus("Buffering…");
        const onPlaying = () => setVideoStatus("▶ Playing");
        const onError = () => {
          console.warn("[player] progressive playback failed, trying HLS fallback");
          video.removeEventListener("waiting", onWaiting);
          video.removeEventListener("playing", onPlaying);
          setVideoStatus("Direct stream unavailable — falling back to HLS stream...");
          void playHls(q);
        };

        video.addEventListener("canplay", onCanPlay, { once: true });
        video.addEventListener("waiting", onWaiting);
        video.addEventListener("playing", onPlaying);
        video.addEventListener("error", onError, { once: true });

        video.preload = "auto";
        video.src = fileUrl;
        video.load();
        setVideoStatus("Starting full file stream…");
        await video.play().catch(() => {
          setVideoStatus("Tap ▶ to play — full file is loading");
        });
        return;
      }

      await playHls(q);
    },
    [result, destroyHls],
  );

  useEffect(() => {
    if (result?.playbackId) playStream(quality);
  }, [result?.playbackId, playStream, quality]);

  const resolveLink = useCallback(
    async (forDownload = false) => {
      const trimmed = normalizeTeraboxUrl(url);
      if (!trimmed) {
        toast({
          title: "Paste a link first",
          description: "Enter a TeraBox share URL in the box above.",
          variant: "destructive",
        });
        return;
      }

      setLoading(true);
      if (!forDownload) setResult(null);
      destroyHls();
      try {
        let data: (ResolveResult & { message?: string; playbackId?: string }) | null = null;
        try {
          const res = await fetch("/api/terabox/resolve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: trimmed }),
          });
          if (res.ok) {
            data = await res.json();
          }
        } catch {
          // Local endpoint failed, will attempt direct upstream fallback below
        }

        // Resilient fallback: Query upstream backend directly if local endpoint is unavailable or fails
        if (!data?.playbackId) {
          const fbRes = await fetch("https://toofani-app.vercel.app/api/link-info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: trimmed }),
          });
          const fbData = await fbRes.json();
          if (fbData?.success && fbData?.data) {
            data = {
              playbackId: `upstream_${Date.now()}`,
              fileName: fbData.data.title || "Video",
              size: fbData.data.sizeHuman || undefined,
              thumbnail: fbData.data.thumbnail || null,
              fullFile: true,
              playbackMode: "progressive",
              mimeType: fbData.data.mimeType || "video/mp4",
              streamUrl: `https://toofani-app.vercel.app/api/stream?url=${encodeURIComponent(trimmed)}`,
              needsRemux: false,
              quality: quality,
              qualityOptions: DEFAULT_QUALITY_OPTIONS,
            };
          } else {
            throw new Error(fbData?.error || data?.message || "Could not resolve link. Verify the link is public and active.");
          }
        }

        if (!data?.playbackId) {
          throw new Error(data?.message ?? "Could not resolve link");
        }
        const resolved: ResolveResult = {
          playbackId: data.playbackId!,
          fileName: data.fileName ?? "Video",
          size: data.size,
          duration: data.duration,
          quality: data.quality ?? quality,
          qualityOptions: data.qualityOptions ?? DEFAULT_QUALITY_OPTIONS,
          fullFile: data.fullFile,
          playbackMode: data.playbackMode,
          mimeType: data.mimeType,
          streamUrl: data.streamUrl,
          needsRemux: data.needsRemux,
          thumbnail: data.thumbnail,
        };
        setResult(resolved);
        if (forDownload) {
          void downloadInPage(resolved);
        }
      } catch (err) {
        toast({
          title: forDownload ? "Download failed" : "Could not play",
          description:
            err instanceof Error ? err.message : "Try another public link.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
        setDownloadAfterResolve(false);
      }
    },
    [url, quality, toast, destroyHls],
  );

  const downloadInPage = useCallback((customResult?: ResolveResult | null) => {
    const target = customResult ?? result;
    if (!target) return;
    if (target.streamUrl && target.streamUrl.startsWith("http")) {
      const dl = target.streamUrl.replace("/api/stream", "/api/download");
      window.location.href = dl;
      return;
    }
    if (target.playbackId) {
      window.location.href = `/api/terabox/download?playbackId=${target.playbackId}&quality=${quality}`;
    }
  }, [result, quality]);

  const skipVideo = useCallback((seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + seconds));
  }, []);

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setUrl(text.trim());
    } catch {
      toast({
        title: "Paste manually",
        description: "Long-press the field and paste your link.",
      });
    }
  };

  const navLinks = [
    { href: "#player", label: "Player", icon: Play },
    { href: "#how-to", label: "How To", icon: HelpCircle },
    { href: "#features", label: "Features", icon: Sparkles },
    { href: "#faq", label: "FAQ", icon: Globe },
  ];

  const hideVideoMetadata = !isShareView && Boolean(result?.playbackId);
  const sharePreviewTitle = result?.fileName ?? "Watch Video Online";
  const sharePreviewDescription = result?.fileName
    ? `Watch ${result.fileName} online in HD${result.size ? ` — ${result.size}` : ""}.`
    : "Watch this video online in HD — free streaming player.";

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 font-sans overflow-x-hidden">
      <SEO
        canonicalUrl={shareUrl || undefined}
        brandless={isShareView || hideVideoMetadata}
        stripImages={hideVideoMetadata}
        robots={isShareView ? SHARE_PREVIEW_ROBOTS : hideVideoMetadata ? VIDEO_PROTECTED_ROBOTS : undefined}
        ogImage={result?.thumbnail || (isShareView ? "https://webnovacrew.com/og-image.jpg" : undefined)}
        title={
          isShareView
            ? sharePreviewTitle
            : hideVideoMetadata
              ? "Watch Video Online — Free HD Player"
              : "TeraBox Video Player & Downloader Online — Free HD Stream"
        }
        description={
          isShareView
            ? sharePreviewDescription
            : hideVideoMetadata
              ? "Watch this video online in HD. Free streaming player with fast playback on mobile and desktop."
              : "Best free TeraBox online player and downloader. Paste your share link to stream or download videos instantly on mobile and desktop — no app, no login."
        }
      />
      <BreadcrumbSchema
        items={[
          {
            name: isShareView ? "Watch Video" : "TeraBox Player",
            url: isShareView
              ? shareUrl || "https://webnovacrew.com/terabox-online-player"
              : "https://webnovacrew.com/terabox-online-player",
          },
        ]}
      />
      {!isShareView && <FAQSchema faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0a0e17]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5" aria-label="TeraBox video player">
            <BrandMark />
            <span className="font-bold text-base sm:text-lg">
              TeraBox<span className="text-blue-400">Play</span>
            </span>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors min-h-[44px] flex items-center gap-1.5"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-slate-800 px-4 py-3 space-y-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 rounded-lg px-4 py-3.5 text-sm min-h-[48px] hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="h-4 w-4 text-blue-400" />
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero + Player — iteraplay-style, player first */}
        <section className="relative border-b border-slate-800/60 bg-gradient-to-b from-blue-950/30 via-[#0a0e17] to-transparent">
          <div className="relative mx-auto max-w-3xl px-4 py-8 sm:py-12 sm:px-6 text-center">

            {!isShareView && (
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs sm:text-sm text-blue-300 mb-4">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Free · No registration · Unlimited plays
            </p>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
              {isShareView && result?.fileName ? (
                <span className="line-clamp-2" data-nosnippet translate="no">
                  {result.fileName}
                </span>
              ) : (
                <>
                  TeraBox Video Player &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Downloader Online
                  </span>
                </>
              )}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              {isShareView
                ? "Stream in HD below — works on phone, tablet, and desktop."
                : "Paste your TeraBox share link below to stream in HD or download instantly — works on mobile, tablet, and desktop."}
            </p>

            {!isShareView && (
            <>
            <div
              id="paste-box"
              className="scroll-mt-24 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur p-4 sm:p-6 shadow-2xl shadow-black/40 text-left"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800/80">
                <img
                  src={ASSETS.playCircle}
                  alt=""
                  className="h-10 w-10 shrink-0"
                  width={40}
                  height={40}
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-sm sm:text-base">TeraBox Link Player</p>
                  <p className="text-slate-500 text-xs">Paste · Play · Download</p>
                </div>
              </div>
              <label htmlFor="terabox-url" className="sr-only">
                TeraBox share link
              </label>
              <div className="relative mb-3">
                <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                <Input
                  id="terabox-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste TeraBox link here — https://www.terabox.com/s/..."
                  className="pl-11 h-12 sm:h-14 text-base bg-slate-950 border-slate-600 text-white placeholder:text-slate-500"
                  onKeyDown={(e) => e.key === "Enter" && void resolveLink()}
                  autoComplete="off"
                  inputMode="url"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 sm:h-14 border-slate-600 bg-slate-800/50 hover:bg-slate-800 text-xs sm:text-sm font-medium"
                  onClick={() => void pasteFromClipboard()}
                >
                  <ClipboardPaste className="h-4 w-4 sm:mr-1.5 shrink-0" />
                  <span className="hidden xs:inline sm:inline">Paste</span>
                </Button>
                <Button
                  type="button"
                  className="h-12 sm:h-14 bg-blue-600 hover:bg-blue-500 font-semibold text-xs sm:text-sm"
                  disabled={loading}
                  onClick={() => void resolveLink(false)}
                >
                  {loading && !downloadAfterResolve ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Play className="h-4 w-4 sm:mr-1.5 fill-current shrink-0" />
                      Play
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  className="h-12 sm:h-14 bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs sm:text-sm"
                  disabled={loading}
                  onClick={() => {
                    setDownloadAfterResolve(true);
                    void resolveLink(true);
                  }}
                >
                  {loading && downloadAfterResolve ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Download className="h-4 w-4 sm:mr-1.5 shrink-0" />
                      Download
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-3 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-emerald-500" />
                  Public links only
                </span>
                <span className="hidden sm:inline text-slate-700">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-blue-400" />
                  Works in all browsers
                </span>
              </p>
            </div>

            {/* Browser compatibility */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="text-xs text-slate-500 w-full sm:w-auto text-center">Supported browsers:</span>
              {BROWSERS.map((browser) => (
                <span
                  key={browser.name}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                >
                  <img
                    src={browser.icon}
                    alt=""
                    className="h-4 w-4"
                    width={16}
                    height={16}
                    loading="lazy"
                    aria-hidden
                  />
                  {browser.name}
                </span>
              ))}
            </div>
            </>
            )}

            {loadingShare && (
              <div className="flex flex-col items-center justify-center gap-3 py-10">
                <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
                <p className="text-slate-400 text-sm">Loading shared video...</p>
              </div>
            )}
          </div>
        </section>

        {/* Video preview */}
        <section id="player" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">

          {result ? (
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl"
              data-nosnippet
              translate="no"
            >
              {/*googleoff: all*/}
              <div
                className="relative aspect-video w-full bg-black group select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <video
                  ref={videoRef}
                  key={result.playbackId}
                  controls
                  playsInline
                  preload="auto"
                  poster={result.thumbnail || undefined}
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  className="h-full w-full max-h-[75vh] object-contain pointer-events-auto"
                  aria-label="Video player"
                >
                  Your browser does not support video playback.
                </video>
                <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    onClick={() => skipVideo(-10)}
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
                    aria-label="Skip back 10 seconds"
                  >
                    <SkipBack className="h-5 w-5" />
                    <span className="absolute text-[10px] font-bold mt-0.5">10</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => skipVideo(10)}
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
                    aria-label="Skip forward 10 seconds"
                  >
                    <SkipForward className="h-5 w-5" />
                    <span className="absolute text-[10px] font-bold mt-0.5">10</span>
                  </button>
                </div>

              </div>

              {/* Quality selector — directly below the video */}
              {result.qualityOptions && result.qualityOptions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 px-4 py-3 sm:px-5 border-t border-slate-800 bg-slate-900/80">
                  <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1.5">
                    <Settings2 className="h-3.5 w-3.5" />
                    Quality:
                  </span>
                  {result.qualityOptions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuality(q)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        quality === q
                          ? "bg-blue-600 text-white shadow"
                          : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {qualityLabel(q)}
                    </button>
                  ))}
                  <span className="ml-auto text-[11px] text-slate-500">
                    Plays at original upload quality
                  </span>
                </div>
              )}

              <div className="p-4 sm:p-5 border-t border-slate-800" data-nosnippet translate="no">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="min-w-0 flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                      <FileVideo className="h-5 w-5 text-emerald-400" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm sm:text-base break-words">
                        {result.fileName}
                      </p>
                      <div className="flex items-center gap-3 text-slate-500 text-sm mt-0.5 flex-wrap">
                        {result.size && <span>{result.size}</span>}
                        {result.duration && <span>{Math.round(result.duration / 60)} min</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-10 px-4 border-slate-600 bg-slate-800/50 hover:bg-slate-800 font-semibold text-sm"
                      disabled={shareLoading}
                      onClick={() => void createShareLink()}
                    >
                      {shareLoading ? (
                        <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
                      ) : (
                        <Share2 className="h-4 w-4 mr-1.5" />
                      )}
                      Share
                    </Button>
                    <Button
                      className="h-10 px-4 bg-emerald-600 hover:bg-emerald-500 font-semibold text-sm"
                      onClick={downloadInPage}
                    >
                      <Download className="h-4 w-4 mr-1.5" />
                      Download
                    </Button>
                  </div>
                </div>

                {shareUrl && (
                  <div className="mb-4 rounded-xl border border-blue-500/30 bg-blue-950/20 p-3 sm:p-4 space-y-3">
                    <div>
                      <p className="text-xs text-blue-300 font-medium mb-2 flex items-center gap-1.5">
                        <Share2 className="h-3.5 w-3.5" />
                        {mainShareUrl && shareUrl !== mainShareUrl
                          ? "Short redirect link (send this)"
                          : "Share link"}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          readOnly
                          value={shareUrl}
                          className="h-10 bg-slate-950 border-slate-700 text-slate-200 text-sm font-mono"
                          aria-label="Share link"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="h-10 shrink-0 border-slate-600"
                          onClick={() => void copyShareLink()}
                        >
                          <Copy className="h-4 w-4 mr-1.5" />
                          Copy
                        </Button>
                      </div>
                      {mainShareUrl && shareUrl !== mainShareUrl && (
                        <p className="text-[11px] text-slate-500 mt-2 break-all">
                          Main video URL (redirect target): {mainShareUrl}
                        </p>
                      )}
                      <p className="text-[11px] text-slate-500 mt-2">
                        Tiny link redirects directly to your video page with title and preview on WhatsApp/Telegram.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/*googleon: all*/}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 overflow-hidden">
              <div className="relative aspect-video max-h-[320px] sm:max-h-[400px]">
                <VectorCardIllustration
                  type="preview"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/90 via-[#0a0e17]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <img
                    src={ASSETS.cloudDownload}
                    alt=""
                    className="h-14 w-14 mb-4 opacity-90"
                    width={56}
                    height={56}
                    aria-hidden
                  />
                  <p className="text-slate-300 text-sm sm:text-base max-w-sm font-medium">
                    Video preview loads here
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mt-1">
                    Paste a link above and tap <strong className="text-white">Play</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>



        {!isShareView ? (
        <>
        {/* How to use */}
        <section
          id="how-to"
          className="scroll-mt-24 border-y border-slate-800/60 bg-slate-900/20 py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              How to Use the TeraBox Player
            </h2>
            <p className="text-slate-400 text-sm sm:text-base text-center max-w-2xl mx-auto mb-4 leading-relaxed">
              Tired of complicated apps? This TeraBox link downloader is built to
              make things simple — paste your link and start watching instantly.
            </p>
            <p className="text-slate-500 text-sm text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              No software to install. Use this TeraBox online video player in any
              browser. Our TeraBox link opener handles the rest.
            </p>

            <h3 className="text-lg font-semibold text-center mb-6 text-blue-300">
              Here&apos;s How It Works
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {STEPS.map(({ step, icon: Icon, title, desc, illustration }) => (
                <article
                  key={step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden hover:border-blue-500/30 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <VectorCardIllustration
                      type={illustration as any}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
                      {step}
                    </span>
                    <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 backdrop-blur border border-slate-700">
                      <Icon className="h-5 w-5 text-blue-400" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 text-center sm:text-left">
                    <h4 className="font-semibold text-lg mb-2">{title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section id="features" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Why Choose Our TeraBox Player?
            </h2>
            <p className="text-slate-500 text-center text-sm sm:text-base mb-10">
              The most reliable TeraBox link opener experience — free and fast.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 hover:bg-slate-900/60 transition-colors"
                >
                  <IconBadge icon={item.icon} color={item.color} size="lg" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1.5">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why built + love it */}
        <section className="border-y border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-blue-950/20 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Why This Player Exists
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                  Most TeraBox tools force ads, redirects, or fake download buttons.
                  This TeraBox online player is different — paste a link and play.
                  No popups, no forced registration.
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  Use it as a TeraBox video player for streaming, or as a TeraBox
                  link downloader to save files for offline viewing. Simple, fast,
                  and built for real users.
                </p>
                <h3 className="font-semibold text-blue-300 mb-4">Why You&apos;ll Love It</h3>
                <ul className="space-y-3">
                  {LOVE_IT.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/20">
                        <Icon className="h-4 w-4 text-blue-400" />
                      </span>
                      <span className="text-slate-300 pt-1">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <VectorCardIllustration
                  type="streaming"
                  className="w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-700 p-3">
                  <BrandMark size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">Now playing</p>
                    <p className="text-xs text-slate-500">TeraBox direct stream</p>
                  </div>
                  <img
                    src={ASSETS.playCircle}
                    alt=""
                    className="h-8 w-8 ml-auto shrink-0"
                    width={32}
                    height={32}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works on everything */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Works On Everything
            </h2>
            <p className="text-slate-500 text-center text-sm sm:text-base mb-10 max-w-xl mx-auto">
              TeraBox online player on mobile, reliable TeraBox downloader on PC —
              one tool, every screen.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {DEVICES.map(({ icon: Icon, title, desc, image }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/30 hover:border-slate-700 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15 mb-3">
                      <Icon className="h-5 w-5 text-blue-400" strokeWidth={2} />
                    </span>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced tech + stats */}
        <section className="border-y border-slate-800/60 bg-slate-900/20 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Advanced Player Technology
            </h2>
            <p className="text-slate-500 text-center text-sm sm:text-base mb-10 max-w-2xl mx-auto">
              Smart TeraBox player engine for seamless streaming and the fastest
              link processing available.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {TECH_FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/50 p-5 text-center sm:text-left"
                >
                  <div className="flex justify-center sm:justify-start mb-3">
                    <IconBadge icon={item.icon} color={item.color} />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-center mb-6 text-slate-300">
              Why We Stand Out
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <IconBadge
                      icon={stat.icon}
                      color="text-blue-400 bg-blue-400/10"
                      size="md"
                    />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="font-medium text-sm sm:text-base">{stat.label}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported domains */}
        <section className="py-10 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Cloud className="h-6 w-6 text-blue-400" />
              Supported TeraBox Domains
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SUPPORTED_DOMAINS.map((domain) => (
                <span
                  key={domain}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs sm:text-sm text-slate-400 font-mono"
                >
                  <Globe className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-slate-800/60 bg-slate-900/20 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Common Questions
            </h2>
            <p className="text-slate-500 text-center text-sm mb-8">
              Quick answers to help you get started.
            </p>
            <div className="space-y-3">
              {FAQS.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-800 bg-slate-950/50 open:border-blue-500/40 open:bg-slate-900/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 sm:p-5 font-medium text-sm sm:text-base">
                    <span className="flex items-start gap-2.5 text-left">
                      <HelpCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      {item.q}
                    </span>
                    <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 pl-11 text-slate-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Guides / latest posts style */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-blue-400" />
                Helpful Guides
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {GUIDES.map((guide) => (
                <article
                  key={guide.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-slate-700 transition-colors"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <VectorCardIllustration
                      type={guide.illustration as any}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/90 border border-slate-700">
                      <guide.icon className="h-4 w-4 text-blue-400" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs text-blue-400 font-medium mb-2 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </p>
                    <h3 className="font-semibold text-base mb-2 leading-snug">{guide.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{guide.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA back to player */}
        <section className="border-t border-slate-800 bg-gradient-to-r from-blue-950/40 to-cyan-950/20 py-10 sm:py-12">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to watch?</h2>
            <p className="text-slate-400 text-sm sm:text-base mb-6">
              Paste your TeraBox link and start streaming in seconds.
            </p>
            <a href="#player">
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-500 font-semibold text-base">
                <Play className="h-5 w-5 mr-2 fill-current" />
                Go to Player
              </Button>
            </a>
          </div>
        </section>
        </>
        ) : (
          <>
            <section className="border-t border-slate-800 bg-slate-900/20 py-10 sm:py-12">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">More free tools</h2>
                <p className="text-slate-400 text-sm sm:text-base mb-6">
                  Paste any TeraBox link on our player page to stream or download instantly.
                </p>
                <a href="/terabox-online-player">
                  <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-500 font-semibold text-base">
                    <Play className="h-5 w-5 mr-2 fill-current" />
                    Open TeraBox Player
                  </Button>
                </a>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-slate-800 py-8 px-4 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-semibold">TeraBox Video Player &amp; Downloader</p>
                <p className="text-slate-500 text-xs sm:text-sm">Free online streaming tool</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-500">
              <a href="/terabox-online-player" className="hover:text-white transition-colors">
                Player
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="/services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <p className="mt-6 text-center text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Not affiliated with TeraBox or FlexTech Inc. This is an independent tool
            for opening public share links. Only use content you have legal permission
            to access.
          </p>
        </div>
      </footer>
    </div>
  );
}
