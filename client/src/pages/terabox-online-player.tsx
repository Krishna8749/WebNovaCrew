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
  Scale,
  Car,
  AlertTriangle,
  FileText,
  DollarSign,
  Gavel,
  ShieldAlert,
  ShieldCheck,
  Building2,
  Users,
  Check,
  AlertCircle,
  Calculator,
  Compass,
} from "lucide-react";
import { SEO } from "@/components/seo/Head";
import { VIDEO_PROTECTED_ROBOTS, SHARE_PREVIEW_ROBOTS } from "@/lib/video-protected-routes";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { VectorCardIllustration } from "@/components/illustrations/VectorCardIllustration";


const ASSETS = {
  logo: "/terabox/logo.svg",
  playCircle: "/terabox/play-circle.svg",
  cloudDownload: "/terabox/cloud-download.svg",
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
  "diskwala.com",
  "disk-wala.com",
  "diskwala.app",
  "diskwala.me",
];

const LEGAL_GUIDE_FAQS = [
  {
    q: "What is the single most critical step immediately following a car accident?",
    a: "Your immediate priority is ensuring personal and passenger safety, calling 911 for emergency medical services and a formal police report, and seeking a comprehensive medical evaluation within 24 to 72 hours—even if you feel uninjured. Documenting injuries early connects trauma directly to the collision for insurance claim validity.",
  },
  {
    q: "How does comparative negligence affect my accident settlement payout?",
    a: "Under comparative negligence rules, your final recovery is reduced proportionately by your share of fault. In pure comparative states (like California or Florida), you can recover damages even if 90% at fault (recovering 10%). In modified comparative fault states (the 50% or 51% bar rule), you are barred from any recovery if your fault exceeds the statutory threshold.",
  },
  {
    q: "How is 'pain and suffering' mathematically calculated in personal injury claims?",
    a: "Insurers and courts typically utilize two primary methods: the Multiplier Method (multiplying total special damages like medical bills and lost earnings by a factor of 1.5 to 5 depending on injury severity) and the Per Diem Method (assigning a daily monetary rate, such as your daily wage, for every day spent enduring pain until maximum medical improvement).",
  },
  {
    q: "What options do I have if the at-fault driver is uninsured or underinsured?",
    a: "You can file a claim against your own policy under Uninsured Motorist (UM) or Underinsured Motorist (UIM) coverage, or Personal Injury Protection (PIP) / MedPay. These coverages step into the shoes of the absent liability policy up to your purchased policy limits without raising your baseline rates when you were not at fault.",
  },
  {
    q: "What is the standard statute of limitations for filing a personal injury lawsuit?",
    a: "The deadline varies strictly by jurisdiction and claim type. Most states enforce a 2- to 3-year statute of limitations for general personal injury and auto accidents from the date of the crash. However, medical malpractice, wrongful death, and claims against government entities often have much shorter statutory notice windows (often 6 months to 1 year).",
  },
  {
    q: "What does hiring a personal injury attorney on a contingency fee basis mean?",
    a: "Under a contingency fee agreement, you pay zero upfront retainer or hourly legal fees. Your attorney only gets paid if they successfully recover compensation via a settlement or court judgment. The standard fee ranges between 33.3% (pre-litigation settlement) and 40% (if the case proceeds to trial or formal arbitration).",
  },
  {
    q: "Who possesses the legal standing to file a wrongful death claim?",
    a: "Statutory beneficiaries generally include the surviving spouse, registered domestic partner, biological or adopted children, and surviving dependent parents. In jurisdictions following personal representative statutes, the suit is initiated by the court-appointed executor of the deceased person's estate on behalf of all heirs.",
  },
  {
    q: "What types of damages are recoverable in a wrongful death lawsuit?",
    a: "Recoverable damages span economic damages (funeral and burial expenses, deceased's lost lifetime expected earnings, loss of financial support and benefits) and non-economic damages (loss of love, companionship, comfort, guidance, and consortium). In gross negligence cases, punitive damages may also be awarded.",
  },
  {
    q: "How does a criminal DUI conviction against the other driver impact my civil lawsuit?",
    a: "A criminal DUI conviction significantly strengthens your civil claim under the doctrine of negligence per se. The conviction proves that the driver breached statutory duty of care as a matter of law, drastically accelerating liability determinations and opening the door for substantial punitive damage awards.",
  },
  {
    q: "Can a commercial truck or rideshare accident claim yield higher settlement limits?",
    a: "Yes. Commercial motor carriers and transportation network companies (such as Uber and Lyft) are federally and state mandated to carry high liability coverage limits—often $1,000,000 to $5,000,000+ per occurrence during active rides—providing adequate coverage for catastrophic injury and multi-party claims.",
  },
  {
    q: "What are prepaid legal service plans and what do they cover?",
    a: "Prepaid legal plans operate like legal insurance memberships for a fixed monthly subscription (typically $20–$50/month). They cover routine document reviews, basic estate planning (wills/POAs), uncontested legal notices, and discounted hourly consultation rates. They generally exclude high-stakes contingency tort litigation and contested trials.",
  },
  {
    q: "What red flags should I watch for when hiring a personal injury law firm?",
    a: "Be cautious of attorneys who make upfront monetary settlement guarantees, law firms that push non-lawyer case managers to handle vital communications, firms with zero documented trial experience that habitually settle early for lowball offers, and unsolicited in-person solicitations ('ambulance chasing').",
  },
  {
    q: "Should I provide a recorded statement to the insurance adjuster before consulting a lawyer?",
    a: "No. You are under no legal obligation to provide a recorded statement to the other driver's insurance adjuster. Insurance adjusters are trained to elicit statements that minimize claim liability, downplay injury severity, or shift comparative fault. Consult legal counsel first.",
  },
  {
    q: "How long does the average personal injury or wrongful death case take to resolve?",
    a: "Straightforward auto accident claims with clear liability and resolved injuries typically settle in 4 to 9 months. Complex litigation involving commercial vehicles, severe permanent disabilities, disputed fault, or wrongful death often spans 12 to 24+ months, especially if formal trial discovery is required.",
  },
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
    if (!res.ok) {
      const shortText = text?.slice(0, 200).trim();
      if (res.status >= 500) {
        throw new Error(
          "Backend server is temporarily busy or rate-limited. Please try again in a moment.",
        );
      }
      throw new Error(shortText || fallbackError);
    }
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
  const [, setVideoStatus] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [mainShareUrl, setMainShareUrl] = useState("");
  const [, setPermanentShareUrl] = useState("");
  const [shareLoading, setShareLoading] = useState(false);
  const [loadingShare, setLoadingShare] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<HlsInstance | null>(null);

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
        const streamUrl = `/api/terabox/play/${encodeURIComponent(meta.playbackId)}?quality=${targetQ}`;

        try {
          const Hls = await loadHlsFromCdn();
          if (Hls?.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
              maxBufferLength: 30,
              maxMaxBufferLength: 60,
              maxBufferSize: 64 * 1024 * 1024,
              maxBufferHole: 0.5,
              nudgeOffset: 0.1,
              nudgeMaxRetry: 10,
              startFragPrefetch: true,
              testBandwidth: true,
              backBufferLength: 30,
              startLevel: 0,
              autoStartLoad: true,
              fragLoadingTimeOut: 30000,
              manifestLoadingTimeOut: 20000,
              levelLoadingTimeOut: 20000,
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
          // Fallback to toofani upstream
        }

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
    { href: "#immediate-steps", label: "Immediate Steps", icon: Car },
    { href: "#personal-injury-law", label: "Injury Law", icon: Scale },
    { href: "#wrongful-death", label: "Wrongful Death", icon: ShieldAlert },
    { href: "#dui-accidents", label: "DUI Law", icon: Gavel },
    { href: "#prepaid-legal", label: "Prepaid Plans", icon: ShieldCheck },
    { href: "#finding-lawyer", label: "Find Lawyer", icon: Building2 },
    { href: "#faq", label: "FAQ", icon: HelpCircle },
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
            : "Car Accident & Injury Claims: Complete Legal Guide (2026)"
        }
        description={
          isShareView
            ? sharePreviewDescription
            : "Everything about car accident claims, personal injury law, wrongful death suits, DUI cases, and finding the right lawyer — all in one guide."
        }
      />
      <BreadcrumbSchema
        items={[
          {
            name: isShareView ? "Watch Video" : "Legal & Injury Claims Guide",
            url: isShareView
              ? shareUrl || "https://webnovacrew.com/terabox-online-player"
              : "https://webnovacrew.com/terabox-online-player",
          },
        ]}
      />
      {!isShareView && <FAQSchema faqs={LEGAL_GUIDE_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0a0e17]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5" aria-label="Legal Guide & Video Player">
            <BrandMark />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg leading-tight">
                Nova<span className="text-blue-400">Legal</span> &amp; Player
              </span>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                Car Accident &amp; Injury Claims Portal 2026
              </span>
            </div>
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
                className="rounded-full px-3.5 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors min-h-[40px] flex items-center gap-1.5 text-xs font-medium"
              >
                <Icon className="h-3.5 w-3.5 text-blue-400" />
                {label}
              </a>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-slate-800 px-4 py-3 space-y-1 bg-[#0c121e]">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm min-h-[44px] hover:bg-slate-800 text-slate-200"
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
        {/* TeraBox Video Player Engine Section */}
        <section id="player" className="relative border-b border-slate-800/60 bg-gradient-to-b from-blue-950/30 via-[#0a0e17] to-transparent">
          <div className="relative mx-auto max-w-4xl px-4 py-8 sm:py-12 sm:px-6 text-center">

            {!isShareView && (
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs sm:text-sm text-emerald-300 mb-4">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                TeraBox Online Player &amp; Downloader · HD Streaming Enabled
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
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
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              {isShareView
                ? "Stream in HD below — works on phone, tablet, and desktop."
                : "Paste your TeraBox share link below to stream in HD or download instantly — zero wait time, no app required."}
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
                      <p className="text-slate-400 text-xs">Paste Link · Play Online · Fast Download</p>
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

                  <p className="mt-3 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Shield className="h-3.5 w-3.5 text-emerald-400" />
                      Public links &amp; DiskWala supported
                    </span>
                    <span className="hidden sm:inline text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-blue-400" />
                      Cross-browser compatible
                    </span>
                  </p>
                </div>

                {/* Browser badges */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xs text-slate-500 w-full sm:w-auto text-center">Fast streaming on:</span>
                  {BROWSERS.map((browser) => (
                    <span
                      key={browser.name}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                    >
                      <img
                        src={browser.icon}
                        alt=""
                        className="h-3.5 w-3.5"
                        width={14}
                        height={14}
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

        {/* Video Player Display Container */}
        <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          {result ? (
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl"
              data-nosnippet
              translate="no"
            >
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

              {/* Quality selector */}
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
                    Plays at optimal server resolution
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
                      <p className="font-semibold text-sm sm:text-base break-words text-white">
                        {result.fileName}
                      </p>
                      <div className="flex items-center gap-3 text-slate-400 text-xs sm:text-sm mt-0.5 flex-wrap">
                        {result.size && <span>{result.size}</span>}
                        {result.duration && <span>{Math.round(result.duration / 60)} min</span>}
                        <span className="text-emerald-400">● Stream Active</span>
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
                      onClick={() => downloadInPage()}
                    >
                      <Download className="h-4 w-4 mr-1.5" />
                      Download
                    </Button>
                  </div>
                </div>

                {shareUrl && (
                  <div className="mb-2 rounded-xl border border-blue-500/30 bg-blue-950/20 p-3 sm:p-4 space-y-2">
                    <p className="text-xs text-blue-300 font-medium flex items-center gap-1.5">
                      <Share2 className="h-3.5 w-3.5" />
                      {mainShareUrl && shareUrl !== mainShareUrl
                        ? "Direct Video URL"
                        : "Share Link"}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input
                        readOnly
                        value={shareUrl}
                        className="h-10 bg-slate-950 border-slate-700 text-slate-200 text-xs font-mono"
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
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Play className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      Instant Video Streaming &amp; Cloud Downloads
                    </h3>
                    <p className="text-xs text-slate-400">
                      Paste any public TeraBox or DiskWala link above to watch or save directly to your device.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Shield className="h-3.5 w-3.5 text-emerald-400" />
                  100% Free · Unlimited Playback
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE LEGAL & ACCIDENT INJURY CLAIMS GUIDE (SINGLE PAGE)          */}
        {/* ========================================================================= */}
        <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          
          {/* Main Title & Scope Header */}
          <header className="border-b border-slate-800 pb-8 mb-10 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-300 font-medium mb-4">
              <Scale className="h-3.5 w-3.5 text-blue-400" />
              National Legal &amp; Injury Tort Compendium (2026 Edition)
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              The Complete Car Accident &amp; Injury Claims Guide
            </h1>

            {/* Intro (~200w) */}
            <div className="rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/20 p-6 sm:p-8 backdrop-blur text-slate-300 text-base sm:text-lg leading-relaxed shadow-xl">
              <p className="mb-4">
                Navigating the aftermath of a vehicular collision, catastrophic personal injury, or the devastating wrongful death of a family member is one of the most legally and financially daunting challenges an individual or household can endure. In the contemporary legal landscape of 2026, insurance corporations employ algorithmic settlement valuation models designed specifically to minimize payout reserves, while strict comparative fault statutes, tight statutes of limitations, and complex medical lien subrogation rules make prompt, educated legal action imperative.
              </p>
              <p className="mb-4">
                This comprehensive, authoritative manual serves as an exhaustive single-source compendium for accident victims, claimants, and families seeking justice. Whether you are dealing with an immediate post-crash investigation, managing severe medical expenses, calculating equitable non-economic pain and suffering restitution, navigating DUI-related criminal and civil cross-claims, evaluating prepaid legal expense coverage, or retaining premier local trial litigation counsel, every facet of the personal injury and civil litigation framework is meticulously deconstructed below.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-400" /> Comprehensive 35-Min Read</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-emerald-400" /> All 50 States Legal Frameworks</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> Fully Updated for 2026 Case Law</span>
              </div>
            </div>
          </header>

          {/* Table of Contents (Anchor Linked) */}
          <nav aria-label="Table of contents" className="mb-14 rounded-2xl border border-blue-500/20 bg-slate-900/70 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
              <Compass className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white tracking-wide">
                Table of Contents — Quick Navigation
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Click any section below to jump directly to detailed statutory analyses, compensation calculation methodologies, case timelines, and legal guides.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a href="#immediate-steps" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">1</span>
                  Immediate Steps After an Accident
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#personal-injury-law" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">2</span>
                  How Personal Injury Claims Work
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#wrongful-death" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">3</span>
                  Wrongful Death Claims
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#dui-accidents" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">4</span>
                  DUI Accidents &amp; Criminal Law
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#prepaid-legal" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">5</span>
                  Prepaid Legal Plans
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#finding-lawyer" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">6</span>
                  Finding the Right Lawyer
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#faq" className="group col-span-1 sm:col-span-2 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 text-xs font-bold text-cyan-400">?</span>
                  Frequently Asked Questions (14 Detailed Q&amp;As)
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </nav>

          {/* ======================================================================= */}
          {/* SECTION 1: Immediate Steps After a Car Accident                        */}
          {/* ======================================================================= */}
          <section id="immediate-steps" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 1</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Car className="h-7 w-7 text-blue-400" />
                Section 1 — Immediate Steps After a Car Accident
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/accident_scene.jpg"
                alt="Documenting car accident damage scene"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: Immediate Steps After an Accident (300w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Immediate Steps After an Accident
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  The moments immediately succeeding a motor vehicle crash are frequently marked by acute shock, elevated adrenaline, and severe disorientation. However, the precise physical and documentary actions you execute during the first sixty minutes at the collision scene establish the foundational evidentiary bedrock upon which your entire personal injury and property damage recovery will either succeed or falter. First and foremost, prioritize physical safety: if vehicles remain operational and are obstructing active traffic lanes without catastrophic injuries present, activate hazard lighting and transition vehicles to the nearest highway shoulder or safe emergency turnout to avert secondary pileup collisions.
                </p>
                <p>
                  Immediately contact 911 dispatch to request emergency medical personnel and law enforcement officers. In virtually all jurisdictions, state transportation codes legally require a formal police response whenever a traffic crash results in bodily injury, death, or apparent property damage exceeding statutory reporting minimums (typically ranging between $500 and $1,000). While awaiting dispatch arrival, conduct a swift triage of all vehicle occupants. Never admit fault, apologize, or make speculative assertions regarding causation to other involved motorists, passengers, or bystanders; statements such as <em>&quot;I didn&apos;t see you coming&quot;</em> or <em>&quot;I am so sorry&quot;</em> will routinely be transcribed by insurance adjusters as explicit admissions of comparative negligence.
                </p>
                <p>
                  Leverage your smartphone camera to capture extensive photographic and video documentation before vehicles are displaced by wreckers. Record wide-angle establishing perspectives of the entire intersection or roadway geometry, precise points of vehicular impact, skid marks, debris fields, broken glass dispersion patterns, traffic control signals, posted speed regulatory signs, weather conditions, and visible bodily injuries. Exchange standardized credentials with all involved motorists, including full legal names, residential addresses, telephone numbers, driver&apos;s license numbers, vehicle registration identifiers, vehicle identification numbers (VIN), and detailed insurer policy policyholder numbers. Secure independent contact details from eyewitnesses before they disperse from the scene.
                </p>
              </div>
            </div>

            {/* H3: How Fault Is Determined (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                How Fault Is Determined
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Liability determinations in car accident claims are governed by civil tort principles of negligence, state statutory motor vehicle codes, and formal comparative fault doctrines. Establishing legal culpability requires proving four core elements: Duty of Care (every motorist owes a legal obligation to operate their vehicle reasonably and obey traffic statutes), Breach of Duty (the defendant committed an act of negligence, such as speeding, texting while driving, or failing to yield), Causation (the breach directly and proximately induced the collision), and Damages (the plaintiff sustained quantifiable economic or physical harm).
                </p>
                <p>
                  Insurance claim adjusters and juries reconstruct collisions by synthesizing multiple independent evidence streams. These include the official police crash report, cited motor vehicle code violations (which establish <em>negligence per se</em> in many jurisdictions), Event Data Recorder (&quot;black box&quot;) telemetry indicating pre-crash velocity, braking inputs, and steering angles, nearby commercial or municipal surveillance cameras, dashcam footage, and sworn eyewitness depositions. 
                </p>
                <p>
                  Furthermore, jurisdiction plays a defining role: in <strong>Pure Comparative Negligence</strong> states (e.g., California, New York, Florida), an injured plaintiff can recover damages even if they were 90% responsible for the accident, receiving 10% of total verified losses. In <strong>Modified Comparative Negligence</strong> states (such as Texas, Illinois, Ohio), plaintiffs are barred from financial recovery if their allocated liability exceeds the statutory 50% or 51% threshold. In rare <strong>Contributory Negligence</strong> jurisdictions (e.g., Virginia, North Carolina, Maryland, Alabama), contributing even 1% of fault completely disqualifies the victim from any financial recovery.
                </p>
              </div>
            </div>

            {/* H3: Filing an Insurance Claim (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Filing an Insurance Claim
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Initiating an insurance claim requires strategic precision and strict adherence to contractual notification timelines outlined in your standard auto insurance policy. Virtually all auto insurance contracts include a prompt reporting clause requiring insureds to notify the carrier within a reasonable timeframe (typically 24 to 72 hours) following any collision. When contacting your own insurer, provide purely objective factual identifiers: date, time, geographical coordinates, vehicle identification, and the police incident report number. Refrain from discussing complex injury prognoses or giving unscripted opinions until you have undergone thorough diagnostic testing.
                </p>
                <p>
                  When communicating with the third-party at-fault driver&apos;s insurance company, recognize from the outset that the third-party claims adjuster operates under a fiduciary directive to minimize corporate payout liabilities. Third-party adjusters frequently initiate contact within hours of a crash, adopting a polite, empathetic demeanor while requesting a &quot;recorded statement to quickly process your property rental or medical bills.&quot; <strong>You are under zero statutory obligation to provide a recorded statement to a third-party insurer without legal representation present.</strong> Adjusters are trained to ask open-ended or leading questions designed to elicit statements downplaying physical pain (e.g., <em>&quot;How are you feeling today?&quot; — &quot;I&apos;m okay, thanks&quot;</em>) or inadvertently suggesting shared liability.
                </p>
                <p>
                  Organize a structured claim repository comprising every medical intake summary, emergency room discharge order, diagnostic imaging scan (MRI, CT, X-ray), pharmacy prescription receipt, physical therapy attendance log, vehicle repair estimate, towing bill, and certified employer wage-loss verification statement. Maintaining meticulous chronological documentation ensures every dollar of special economic damages is substantiated by verifiable documentary proof when drafting the formal settlement demand package.
                </p>
              </div>
            </div>

            {/* H3: How Settlements Are Calculated (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                How Settlements Are Calculated — Pain and Suffering Settlement &amp; Average Car Accident Settlement
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Insurance settlement calculations are categorized into two fundamental legal damage classifications: <strong>Special Damages</strong> (quantifiable economic losses) and <strong>General Damages</strong> (non-economic intangible losses, commonly designated as pain and suffering). Special damages encompass past and future medical treatment costs, surgical fees, prescription medication, medical assistive devices, property loss or diminished vehicular value, lost wages, and documented impairment of future earning capacity.
                </p>
                <p>
                  General damages for pain, emotional distress, physical impairment, and loss of enjoyment of life are primarily computed through two recognized legal formulas:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>The Multiplier Method:</strong> Total special medical damages are multiplied by a coefficient ranging between 1.5 and 5 (and in catastrophic cases, up to 7 or 10). Minor soft-tissue whiplash injuries with full recovery typically warrant a 1.5x to 2x multiplier, whereas complex fractures, spinal disc herniations, traumatic brain injuries (TBI), or permanent disfigurement command multipliers of 3.5x to 5x or higher.
                  </li>
                  <li>
                    <strong>The Per Diem (Daily Rate) Method:</strong> A specific daily dollar figure—frequently equivalent to the victim&apos;s daily wage or an established baseline rate of $150 to $300 per day—is multiplied by the total number of consecutive calendar days the victim endured active physical pain and rehabilitation prior to reaching Maximum Medical Improvement (MMI).
                  </li>
                </ul>
                <p>
                  While nationwide industry statistics cite an &quot;average car accident settlement&quot; ranging between $20,000 and $35,000 for minor to moderate collision claims, true settlement valuation is heavily skewed by individual injury severity, policy coverage ceilings, commercial carrier involvement, and quality of trial representation. Severe spinal cord trauma, polytrauma, or commercial trucking accidents regularly settle for $500,000 to multiple millions of dollars.
                </p>
              </div>

              {/* Settlement Calculation Formula Box */}
              <div className="rounded-xl border border-blue-500/30 bg-slate-950/70 p-5 my-4">
                <div className="flex items-center gap-2 font-semibold text-blue-300 mb-2">
                  <Calculator className="h-4 w-4" />
                  Standard Claim Valuation Formula Model:
                </div>
                <div className="p-3 bg-slate-900 rounded-lg text-xs sm:text-sm font-mono text-emerald-400 border border-slate-800">
                  Total Settlement Value = [Past &amp; Future Medical Expenses + Lost Earnings/Capacity] + [(Medical Expenses) × Multiplier (1.5–5.0)] - [Comparative Fault Reduction %]
                </div>
              </div>
            </div>

            {/* H3: What If the Other Driver Has No Insurance? (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What If the Other Driver Has No Insurance? — Uninsured Motorist Claim
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  According to the Insurance Research Council (IRC), approximately one in eight motorists across the United States operates a motor vehicle without active liability insurance coverage. If you are struck by an uninsured driver, or if the collision is a criminal hit-and-run where the perpetrator evades apprehension, your primary avenue of financial restitution is filing an <strong>Uninsured Motorist (UM)</strong> or <strong>Underinsured Motorist (UIM)</strong> bodily injury claim through your personal auto insurer.
                </p>
                <p>
                  UM/UIM coverage directly substitutes for the liability insurance policy the at-fault motorist should have possessed, covering your emergency hospital care, surgery, lost wages, and general pain and suffering up to your purchased policy limits (e.g., $100,000/$300,000 or $250,000/$500,000). In addition, <strong>Personal Injury Protection (PIP)</strong> and <strong>Medical Payments (MedPay)</strong> cover initial medical costs regardless of fault. Because UM claims are technically first-party actions against your own carrier, disputes often arise over claim valuation; an experienced personal injury attorney can demand binding insurance arbitration to enforce fair claim disbursements.
                </p>
              </div>
            </div>

          </section>

          {/* ======================================================================= */}
          {/* SECTION 2: Personal Injury Law                                         */}
          {/* ======================================================================= */}
          <section id="personal-injury-law" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 2</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Scale className="h-7 w-7 text-blue-400" />
                Section 2 — Personal Injury Law
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/legal_gavel.jpg"
                alt="Gavel and scales of justice representing personal injury law"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: What Counts as Personal Injury? (250w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What Counts as Personal Injury?
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  In civil jurisprudence, <strong>Personal Injury Law</strong> (tort law) provides a legal mechanism for an injured individual to obtain monetary compensation when another person, corporate entity, or governmental agency causes physical harm, emotional trauma, or psychological impairment through negligent, reckless, or intentional conduct. Unlike criminal law, which seeks to penalize offenders with incarceration or state fines on behalf of society, personal injury civil litigation is designed to make the injured victim &quot;whole again&quot; through financial restitution.
                </p>
                <p>
                  Legally actionable personal injuries extend beyond acute physical trauma such as fractured bones, spinal cord severances, and lacerations. They encompass cognitive brain trauma, internal organ damage, toxic exposure, severe burn trauma, emotional distress, post-traumatic stress disorder (PTSD), and catastrophic chronic pain syndromes. The underlying principle requires establishing that the injury directly derived from a legally cognizable breach of safety standards or duty of care.
                </p>
              </div>
            </div>

            {/* H3: Types of Personal Injury Cases (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Types of Personal Injury Cases — Slip and Fall, Medical Malpractice, Product Liability, Workplace Injury
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  The personal injury spectrum spans multiple distinct legal categories, each governed by specialized statutory standards and evidentiary rules:
                </p>
                <ul className="list-disc pl-5 space-y-2.5 text-slate-300">
                  <li>
                    <strong>Motor Vehicle &amp; Commercial Trucking Accidents:</strong> Claims arising from car crashes, pedestrian strikes, motorcycle wrecks, and interstate commercial carrier collisions governed by Federal Motor Carrier Safety Administration (FMCSA) safety mandates.
                  </li>
                  <li>
                    <strong>Premises Liability (Slip and Fall):</strong> Property owners and commercial landlords possess a legal duty to maintain reasonably safe environments for invitees. Claims arise from hazardous wet floors, unlighted stairwells, broken flooring, ice accumulations, or negligent security leading to third-party assaults.
                  </li>
                  <li>
                    <strong>Medical Malpractice:</strong> Occurs when physicians, surgeons, nurses, or healthcare facilities deviate from the accepted medical standard of care, resulting in surgical errors, misdiagnoses, birth injuries, medication overdoses, or anesthesia errors.
                  </li>
                  <li>
                    <strong>Product Liability:</strong> Strict liability actions brought against manufacturers, designers, and distributors of defective consumer goods, automotive parts (such as exploding airbags or defective tires), pharmaceuticals, and medical devices.
                  </li>
                  <li>
                    <strong>Workplace Injuries &amp; Third-Party Claims:</strong> While workers&apos; compensation provides no-fault statutory benefits, injured workers can initiate third-party civil lawsuits against negligent subcontractors, equipment manufacturers, or property owners for full pain and suffering damages.
                  </li>
                </ul>
              </div>
            </div>

            {/* H3: Statute of Limitations by Claim Type (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Statute of Limitations by Claim Type
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  The <strong>Statute of Limitations</strong> is a strict legislative deadline that establishes the maximum time frame following an incident within which a plaintiff must formally file a complaint in a court of law. Failing to file before the expiration of the statutory window irrevocably forfeits your constitutional right to seek financial recovery, resulting in immediate judicial dismissal with prejudice.
                </p>
                <p>
                  Statutory deadlines vary substantially based on jurisdiction and case classification:
                </p>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-800 rounded-lg overflow-hidden">
                    <thead className="bg-slate-900 text-slate-200 font-semibold border-b border-slate-800">
                      <tr>
                        <th className="p-3">Claim Classification</th>
                        <th className="p-3">Typical Statutory Window</th>
                        <th className="p-3">Critical Legal Exceptions / Tolling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-medium text-white">Car &amp; Motor Vehicle Accidents</td>
                        <td className="p-3">2 to 3 Years (Most States; KY/TN: 1 Yr)</td>
                        <td className="p-3">Discovery rule for latent internal or neurological trauma</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-medium text-white">Slip and Fall / Premises Liability</td>
                        <td className="p-3">2 to 4 Years (State-dependent)</td>
                        <td className="p-3">Strict notice windows if on municipal/government property</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-medium text-white">Medical Malpractice</td>
                        <td className="p-3">1 to 3 Years from discovery (Cap 4–7 Yrs)</td>
                        <td className="p-3">Tolled until foreign object discovered or victim reaches majority</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-medium text-white">Wrongful Death Suits</td>
                        <td className="p-3">2 Years from date of death</td>
                        <td className="p-3">Tolled during pending criminal murder/manslaughter proceedings</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-medium text-white">Claims Against Government Entities</td>
                        <td className="p-3">6 Months to 1 Year (Formal Notice)</td>
                        <td className="p-3">Tort claims notice mandatory before filing civil lawsuit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* H3: Proving Negligence (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Proving Negligence
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Prevailing in a personal injury action requires establishing the defendant&apos;s liability by a <em>preponderance of the evidence</em> (meaning the claim is more likely true than not, or &gt;50% probability). The four indispensable pillars of actionable civil negligence are:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>Legal Duty of Care:</strong> Establishing that the defendant possessed a recognized legal obligation to exercise reasonable caution toward the plaintiff (e.g., motorists must obey traffic laws; physicians must adhere to clinical standards; store owners must inspect premises).
                  </li>
                  <li>
                    <strong>Breach of Duty:</strong> Demonstrating through objective proof that the defendant failed to act as a reasonably prudent entity under identical circumstances (e.g., distracted driving, violating OSHA mandates, failing to repair known hazards).
                  </li>
                  <li>
                    <strong>Proximate &amp; Direct Causation:</strong> Proving that the defendant&apos;s specific breach directly caused the collision or incident, and that the resulting injuries were a foreseeable consequence of that negligent act.
                  </li>
                  <li>
                    <strong>Documented Compensable Damages:</strong> Substantiating actual physical, financial, and emotional injuries through certified medical billing, economic loss appraisals, and pain logs.
                  </li>
                </ol>
              </div>
            </div>

            {/* H3: Personal Injury Lawyer Costs (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Personal Injury Lawyer Costs — Personal Injury Law &amp; Lawyer Fees
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Unlike corporate attorneys or criminal defense lawyers who bill hourly retainers ranging from $300 to $800+ per hour, personal injury litigation attorneys represent injured claimants exclusively on a <strong>contingency fee basis</strong>. This payment structure ensures that any injured person, regardless of their current financial liquidity, can retain top-tier legal advocacy against massive insurance corporations.
                </p>
                <p>
                  Under a standard contingency agreement, the client pays zero upfront fees. The law firm advances all case development expenses—including medical record retrieval fees, accident reconstruction engineer retainers, expert physician testimony fees, deposition court reporter transcripts, and court filing fees. If the lawyer fails to recover compensation through a negotiated settlement or courtroom trial verdict, the client owes zero legal fees.
                </p>
              </div>
            </div>

            {/* H3: When to Hire an Accident Lawyer (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                When to Hire an Accident Lawyer — Accident Lawyer Near Me &amp; Personal Injury Attorney
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  While minor, low-speed vehicular fender-benders involving zero bodily injuries and purely cosmetic bumper damage can often be handled directly through insurance property claims adjusters, seeking an experienced <em>accident lawyer near me</em> or specialized <em>personal injury attorney</em> is critical under the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>Moderate to Severe Bodily Injuries:</strong> Fractures, spinal disc bulges, concussions, internal bleeding, nerve impingement, or injuries requiring surgical intervention, hospitalization, or extended physical therapy.
                  </li>
                  <li>
                    <strong>Disputed Liability &amp; Comparative Fault Allegations:</strong> If the insurance carrier attempts to blame you for the accident or claims you were partially negligent to reduce their financial exposure.
                  </li>
                  <li>
                    <strong>Commercial Trucks, Rideshare (Uber/Lyft), or Multi-Vehicle Pileups:</strong> Corporate carriers deploy rapid-response defense teams to crash scenes within hours to conceal telemetry and limit corporate liability.
                  </li>
                  <li>
                    <strong>Catastrophic Long-Term Disability or Lost Earning Capacity:</strong> Injuries that permanently prevent you from returning to your prior profession or necessitate lifetime nursing care.
                  </li>
                  <li>
                    <strong>Bad Faith Insurance Tactics:</strong> Unreasonable claim delays, deceptive lowball settlement offers, or wrongful claim denials.
                  </li>
                </ul>
                <p>
                  Retaining seasoned personal injury counsel immediately levels the playing field, ensuring critical electronic evidence (such as commercial dashcams and black box data) is preserved via formal spoliation letters.
                </p>
              </div>
            </div>


            {/* H3: Contingency Fees Explained (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Contingency Fees Explained
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  A contingency fee agreement is a formal contract between client and attorney establishing that legal compensation is strictly contingent upon securing a financial recovery. The fee structure typically adheres to a tiered percentage schedule:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>33.3% (One-Third):</strong> Applied to recoveries achieved through pre-litigation settlement negotiations prior to the formal filing of a civil lawsuit.</li>
                  <li><strong>40.0%:</strong> Applied if the case requires filing a formal complaint, conducting extensive depositions, expert disclosures, and proceeding through trial litigation.</li>
                </ul>
                <p>
                  Prior to signing a representation agreement, ensure the contract explicitly specifies how litigation costs (court fees, expert witness costs) are deducted—whether from the gross settlement amount or net recovery—providing full financial transparency.
                </p>
              </div>
            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 3: Wrongful Death Claims                                       */}
          {/* ======================================================================= */}
          <section id="wrongful-death" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 3</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <ShieldAlert className="h-7 w-7 text-blue-400" />
                Section 3 — Wrongful Death Claims
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/wrongful_death_memorial.jpg"
                alt="Family silhouette at sunset representing wrongful death remembrance"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: What Qualifies as Wrongful Death (250w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What Qualifies as Wrongful Death
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  A <strong>Wrongful Death Claim</strong> arises when a human being loses their life due to the legal fault, negligence, recklessness, medical malpractice, or intentional criminal violence of another individual or entity. In essence, a wrongful death lawsuit represents the underlying personal injury claim the deceased victim would have been entitled to file had they survived the catastrophic event.
                </p>
                <p>
                  Common catalysts for wrongful death litigation include fatal car and commercial trucking collisions, drunk driving crashes, workplace industrial disasters (construction collapses, refinery explosions), defective pharmaceutical or consumer product malfunctions, fatal hospital malpractice, nursing home elder neglect, and intentional acts of homicide or violent assault.
                </p>
              </div>
            </div>

            {/* H3: Who Can File a Claim (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Who Can File a Claim — Spouse, Children, Estate
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Legal standing to initiate a wrongful death action is strictly defined by state statutory codes. While statutory frameworks vary, priority standing is universally allocated in descending hierarchical tiers:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li><strong>Surviving Spouse &amp; Registered Domestic Partners:</strong> Primary claimants entitled to recover for loss of financial support, companionship, and marital consortium.</li>
                  <li><strong>Biological &amp; Adopted Children:</strong> Minor and adult children entitled to compensation for lost parental guidance, nurturing, financial maintenance, and inheritance loss.</li>
                  <li><strong>Surviving Dependent Parents &amp; Siblings:</strong> If the deceased had no surviving spouse or descendants, dependent parents or immediate siblings may qualify as statutory beneficiaries.</li>
                  <li><strong>Personal Representative of the Estate:</strong> In many states (e.g., Florida, New York), the lawsuit must be formally filed by the court-appointed personal representative (executor) of the deceased&apos;s estate on behalf of all surviving statutory heirs.</li>
                </ul>
              </div>
            </div>

            {/* H3: How Damages Are Calculated (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                How Damages Are Calculated — Wrongful Death Lawsuit &amp; Wrongful Death Settlement
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Valuing a <em>wrongful death lawsuit</em> or negotiating a multi-million-dollar <em>wrongful death settlement</em> requires rigorous forensic financial modeling and expert economic testimony. Recoverable damages are categorized across two distinct damage recovery tracks:
                </p>
                <p>
                  <strong>1. Economic (Pecuniary) Damages:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li>Emergency medical treatment, surgical procedures, and intensive care costs incurred between the initial trauma and the time of death.</li>
                  <li>Reasonable funeral, cremation, and burial expenses.</li>
                  <li>The deceased&apos;s projected lifetime lost earnings, salary increases, bonuses, retirement pensions, and employer-sponsored healthcare benefits.</li>
                  <li>The monetary value of household services the deceased provided (childcare, property maintenance, family management).</li>
                </ul>
                <p>
                  <strong>2. Non-Economic &amp; Survival Damages:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li>Loss of love, society, companionship, comfort, and protection.</li>
                  <li>Loss of spousal consortium and marital intimacy.</li>
                  <li>Loss of parental training, moral guidance, and instruction for surviving children.</li>
                  <li><strong>Survival Action Damages:</strong> Conscious pain and suffering and mental anguish experienced by the decedent between the moment of injury and final passing.</li>
                </ul>
              </div>
            </div>


            {/* H3: Wrongful Death vs. Criminal Charges (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Wrongful Death vs. Criminal Charges
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Families frequently confuse state criminal prosecutions with civil wrongful death lawsuits. While both actions can originate from the exact same fatal event (such as a fatal drunk driving crash or homicide), they operate in entirely separate judicial venues under distinct legal standards:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="font-bold text-red-400 mb-2 flex items-center gap-1.5"><Gavel className="h-4 w-4" /> Criminal Prosecution</p>
                    <p className="text-slate-300 leading-relaxed">Initiated exclusively by the District Attorney / State. Burden of proof is <strong>Beyond a Reasonable Doubt</strong> (99%+ certainty). Objective is punishment (prison sentence, state fines). Surviving family has no direct control over plea agreements.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5"><Scale className="h-4 w-4" /> Civil Wrongful Death Suit</p>
                    <p className="text-slate-300 leading-relaxed">Filed directly by surviving heirs / estate. Burden of proof is <strong>Preponderance of the Evidence</strong> (&gt;50% probability). Objective is financial compensation for the family. An acquittal in criminal court does not bar civil liability (as demonstrated in the O.J. Simpson civil trial).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H3: Case Timeline (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Case Timeline
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Wrongful death cases follow a structured procedural timeline:
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <span className="text-blue-400 font-bold w-24 shrink-0">Months 1–3:</span>
                    <span>Estate probate qualification, evidence preservation, toxicology/black box subpoena, medical lien audits.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <span className="text-blue-400 font-bold w-24 shrink-0">Months 4–6:</span>
                    <span>Forensic economic lifetime earning modeling and comprehensive demand package delivery.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <span className="text-blue-400 font-bold w-24 shrink-0">Months 7–18:</span>
                    <span>Formal lawsuit filing, written interrogatories, depositions of corporate executives and witnesses.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <span className="text-blue-400 font-bold w-24 shrink-0">Months 18–24+:</span>
                    <span>Court-ordered mediation, trial preparation, and jury trial verdict.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 4: DUI Accidents & Criminal Law                                */}
          {/* ======================================================================= */}
          <section id="dui-accidents" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 4</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Gavel className="h-7 w-7 text-blue-400" />
                Section 4 — DUI Accidents &amp; Criminal Law
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/dui_warning.jpg"
                alt="Car keys next to glass of alcohol representing DUI and criminal law hazards"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: DUI Laws — Overview (300w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                DUI Laws — Overview — DUI Laws
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Driving Under the Influence (DUI) and Driving While Intoxicated (DWI) statutes across all 50 states enforce strict, zero-tolerance legal limits for vehicular operation. Under federal and state mandates, operating a non-commercial motor vehicle with a <strong>Blood Alcohol Concentration (BAC) of 0.08% or higher</strong> constitutes an automatic <em>per se</em> violation of the law. For commercial drivers holding a CDL, the statutory ceiling is lowered to <strong>0.04% BAC</strong>, while strict Zero-Tolerance laws prohibit drivers under age 21 from operating with any detectable alcohol (0.00%–0.02% BAC).
                </p>
                <p>
                  Furthermore, contemporary DUI statutes encompass drug-impaired driving (DUID), penalizing operation under the influence of cannabis, illicit narcotics, prescription opioids, sedatives, or over-the-counter medications that impair cognitive or motor faculties. Law enforcement agencies deploy specialized Drug Recognition Experts (DRE) and standardized field sobriety tests (SFSTs) to document impairment.
                </p>
                <p>
                  All states enforce <strong>Implied Consent Laws</strong>: by obtaining a driver&apos;s license and utilizing public roadways, motorists legally consent to chemical testing (breathalyzer, blood, or urine tests) upon a lawful arrest for suspected DUI. Refusing chemical tests triggers immediate administrative driver&apos;s license suspensions ranging from 6 to 12 months, independent of whether the driver is subsequently convicted in court.
                </p>
              </div>
            </div>

            {/* H3: First Offense DUI: What Happens (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                First Offense DUI: What Happens
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  A first-offense DUI without vehicular collision or bodily injury is universally charged as a Class 1 or Class A misdemeanor. However, statutory penalties remain severe and life-altering:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>Incarceration:</strong> Mandatory jail terms ranging from 24 hours up to 6 months (often converted to supervised probation or community labor).</li>
                  <li><strong>Financial Fines:</strong> Statutory court assessments ranging between $500 and $2,500, plus mandatory penalty surcharges.</li>
                  <li><strong>License Sanctions:</strong> Administrative driver&apos;s license suspension lasting between 90 days and 1 year.</li>
                  <li><strong>Ignition Interlock Device (IID):</strong> Mandatory installation of an in-car breathalyzer device for 6 to 12 months at the offender&apos;s personal expense ($100–$150/mo).</li>
                  <li><strong>DUI School:</strong> Mandatory completion of state-approved alcohol and drug rehabilitation education programs (3 to 9 months).</li>
                  <li><strong>Insurance Fallout:</strong> Mandatory SR-22 / FR-44 high-risk insurance certificate filings resulting in auto insurance rate spikes of 150% to 300% for 3 to 5 years.</li>
                </ul>
              </div>
            </div>

            {/* H3: When a DUI Accident Becomes a Criminal Case (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                When a DUI Accident Becomes a Criminal Case — Criminal Law &amp; DUI Charges
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  The moment an impaired driver causes a vehicular collision resulting in bodily injury or property destruction, the charge immediately escalates from a routine traffic misdemeanor to high-stakes <strong>Felony DUI</strong> under state criminal codes.
                </p>
                <p>
                  Specific aggravating statutory thresholds include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>DUI with Great Bodily Injury (GBI):</strong> Charged as a serious felony carrying mandatory state prison sentences ranging from 2 to 10+ years per injured victim.</li>
                  <li><strong>Vehicular Manslaughter while Intoxicated / Intoxication Manslaughter:</strong> Charged when a crash results in fatalities, carrying sentences of 4 to 20 years in prison.</li>
                  <li><strong>Second-Degree Murder (Watson Murder):</strong> In jurisdictions like California, repeat DUI offenders who kill another person can be charged with second-degree malice murder, carrying 15 years to life imprisonment.</li>
                  <li><strong>DUI with Minor Passengers (Child Endangerment):</strong> Triggers additional felony child abuse penalties and mandatory minimum incarceration enhancements.</li>
                </ul>
              </div>
            </div>

            {/* H3: How a DUI Affects Your Civil Injury Claim (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                How a DUI Affects Your Civil Injury Claim
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  If you were injured by an intoxicated motorist, the existence of criminal DUI charges significantly bolsters your civil personal injury claim under the legal doctrine of <strong>Negligence Per Se</strong>. Negligence per se establishes that when a defendant breaches a statutory safety law designed to protect the public, liability is established automatically as a matter of law, eliminating the need to debate liability.
                </p>
                <p>
                  Crucially, DUI injury lawsuits unlock substantial <strong>Punitive Damages</strong> (exemplary damages). Standard insurance policies do not willingly pay punitive damages, but the catastrophic exposure of a jury awarding punitive damages compels the insurer to settle for full policy limits immediately. Additionally, under state <strong>Dram Shop Acts</strong> and Social Host Liability laws, injury victims can sue commercial bars, taverns, and restaurants that continued serving alcohol to a visibly intoxicated patron prior to the crash.
                </p>
              </div>
            </div>


            {/* H3: Defense Lawyers vs. Prosecution (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Defense Lawyers vs. Prosecution — Defense Lawyers Near Me
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  In criminal DUI proceedings, the <strong>Prosecution</strong> (State or District Attorney) represents the sovereign jurisdiction, utilizing state crime laboratory toxicologists, police dashboard videos, and arresting officer testimonies to secure guilty convictions.
                </p>
                <p>
                  Conversely, specialized private <em>defense lawyers near me</em> rigorously challenge the prosecution&apos;s evidentiary chain of custody. Defense strategies include disputing reasonable suspicion for the initial traffic stop, challenging whether breathalyzer instruments were properly calibrated according to Title 17 standards, uncovering physiological medical conditions (e.g., GERD/acid reflux) that generate false-high BAC readings, and suppressing unlawful officer statements.
                </p>
              </div>
            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 5: Prepaid Legal Plans                                         */}
          {/* ======================================================================= */}
          <section id="prepaid-legal" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 5</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-blue-400" />
                Section 5 — Prepaid Legal Plans
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/prepaid_legal_shield.jpg"
                alt="Digital secure shield emblem for prepaid legal services plans"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: What Is Prepaid Legal? (250w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What Is Prepaid Legal? — Prepaid Legal &amp; Prepaid Legal Services
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  <strong>Prepaid Legal Services</strong> (often designated as legal insurance or legal subscription plans) operate on an actuarial membership model analogous to health or dental insurance. For a predictable recurring monthly subscription fee (typically ranging between $20 and $50 per month), members obtain direct, on-demand access to a nationwide network of credentialed attorneys for routine personal, family, and small-business legal matters.
                </p>
                <p>
                  Prominent providers (such as LegalShield, MetLife Legal Plans, ARAG, and Rocket Lawyer) bridge the access-to-justice gap, allowing middle-income families to consult licensed attorneys without fearing prohibitive $400/hour retainer invoices for everyday legal inquiries.
                </p>
              </div>
            </div>

            {/* H3: What's Typically Covered (300w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What&apos;s Typically Covered
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Standard prepaid legal benefit packages cover a broad spectrum of preventative and administrative legal transactions:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li><strong>Comprehensive Estate Planning:</strong> Drafting and updating Last Wills and Testaments, Healthcare Directives (Living Wills), and Financial Durable Powers of Attorney.</li>
                  <li><strong>Document &amp; Contract Review:</strong> Professional attorney review of residential lease agreements, real estate purchase contracts, automotive sales agreements, and contractor proposals (up to specified page limits).</li>
                  <li><strong>Official Attorney Letters &amp; Phone Calls:</strong> Formal legal demand letters and phone interventions on attorney letterhead to resolve consumer disputes, debt collector harassment, or landlord-tenant breaches.</li>
                  <li><strong>Traffic Ticket Defense:</strong> Legal representation in municipal court for non-criminal moving violations, speeding tickets, and license point defense.</li>
                  <li><strong>Uncontested Family Law:</strong> Preparation of uncontested name changes, adoption filings, and uncontested legal separation documents.</li>
                  <li><strong>Discounted Hourly Rates:</strong> A guaranteed 25% to 33% discount on standard attorney hourly rates for complex contested matters outside plan scope.</li>
                </ul>
              </div>
            </div>

            {/* H3: Prepaid Legal vs. Pay-As-You-Go (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Prepaid Legal vs. Pay-As-You-Go
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Evaluating prepaid legal plans versus traditional pay-as-you-go hourly legal retention depends upon your projected legal exposure:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="font-bold text-blue-400 mb-1.5">Prepaid Subscription Plan ($300–$500/Year)</p>
                    <p className="text-slate-300 leading-relaxed">Cost-effective for families needing regular contract reviews, basic wills, traffic ticket defense, and unlimited short phone consultations. Fixed, predictable monthly budget with zero surprises.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="font-bold text-amber-400 mb-1.5">Traditional Pay-As-You-Go ($350–$650/Hour)</p>
                    <p className="text-slate-300 leading-relaxed">Necessary for high-asset complex litigation, contested divorces, corporate mergers, patent filings, or serious felony criminal defense requiring dedicated trial boutique specialists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H3: Best Use Cases (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Best Use Cases
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Prepaid legal plans deliver maximum return on investment for specific demographic groups:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>New Homebuyers &amp; Residential Tenants:</strong> Reviewing complex closing escrow covenants, HOA bylaws, and resolving landlord security deposit disputes.</li>
                  <li><strong>Young Parents &amp; Families:</strong> Establishing comprehensive guardianship designations and estate wills for minor children without paying $2,500 estate planner fees.</li>
                  <li><strong>Small Business Owners &amp; Freelancers:</strong> Reviewing client vendor master services agreements, independent contractor agreements, and issuing formal collection demand letters.</li>
                  <li><strong>Commercial Drivers &amp; Commuters:</strong> Ongoing representation for highway traffic citations to prevent insurance rate surges.</li>
                </ul>
              </div>
            </div>

            {/* H3: What's Usually Excluded (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                What&apos;s Usually Excluded
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Prepaid legal plans contain strict contractual exclusions. Standard memberships strictly exclude:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>Pre-Existing Legal Disputes:</strong> Lawsuits or disputes initiated prior to plan enrollment.</li>
                  <li><strong>Complex High-Stakes Trial Litigation:</strong> Contested custody battles, complex business patent litigation, or multi-week jury trials.</li>
                  <li><strong>Felony Criminal Defense:</strong> Serious violent felony charges or complex federal white-collar prosecutions.</li>
                  <li><strong>Actions Against Your Employer:</strong> If the plan is provided as a voluntary corporate employee benefit, it cannot be used to sue the sponsoring employer.</li>
                </ul>
              </div>
            </div>

          </section>

          {/* ======================================================================= */}
          {/* SECTION 6: Finding the Right Lawyer                                    */}
          {/* ======================================================================= */}
          <section id="finding-lawyer" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 6</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Building2 className="h-7 w-7 text-blue-400" />
                Section 6 — Finding the Right Lawyer
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/lawyer_consultation.jpg"
                alt="Lawyer consultation meeting inside modern law office"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            {/* H3: Law Offices Near Me — What to Look For (250w) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Law Offices Near Me — What to Look For — Law Offices Near Me
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  When searching for <em>law offices near me</em> following a catastrophic injury or accident, look beyond glossy billboard advertisements and television commercials. You are selecting a legal fiduciary who will directly control your financial future and medical rehabilitation recovery.
                </p>
                <p>
                  Key criteria for evaluating top-tier law firms include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>Direct Subject-Matter Specialization:</strong> Retain attorneys whose practice is dedicated 100% to personal injury, auto collisions, or wrongful death litigation—not general practitioners dabbling in divorce, bankruptcy, and criminal defense simultaneously.</li>
                  <li><strong>Documented Courtroom Trial Experience:</strong> Insurance adjusters maintain detailed actuarial databases on every law firm. Firms that never go to trial are offered lowball settlements; firms with verified multi-million-dollar jury verdicts command top-dollar settlement values.</li>
                  <li><strong>Financial Resources:</strong> High-stakes litigation requires tens of thousands of dollars advanced for accident reconstruction engineers, medical illustrators, and vocational economists.</li>
                </ul>
              </div>
            </div>

            {/* H3: Questions to Ask in a Free Consultation (250w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Questions to Ask in a Free Consultation
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Virtually all reputable personal injury law firms provide free, confidential initial case consultations. Arrive prepared with these crucial questions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm my-2">
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <p className="font-semibold text-white mb-1">1. Who will handle my case?</p>
                    <p className="text-slate-400">Will an experienced partner manage my file, or will it be passed to an overworked paralegal or junior associate?</p>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <p className="font-semibold text-white mb-1">2. What is your jury trial record?</p>
                    <p className="text-slate-400">How many personal injury cases have you personally tried to a jury verdict over the past 36 months?</p>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <p className="font-semibold text-white mb-1">3. How are costs deducted?</p>
                    <p className="text-slate-400">Are advanced litigation expenses deducted before or after calculating your contingency percentage?</p>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <p className="font-semibold text-white mb-1">4. What is your realistic case appraisal?</p>
                    <p className="text-slate-400">What specific challenges, comparative fault risks, or coverage limits do you foresee in my claim?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H3: Red Flags When Hiring an Attorney (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Red Flags When Hiring an Attorney
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Protect yourself against predatory or substandard legal operators by recognizing these major warning signs:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>Guaranteed Settlement Numbers:</strong> Any attorney who promises a specific dollar amount during an initial consultation is engaging in unethical puffery.</li>
                  <li><strong>Unsolicited In-Person Solicitations (&quot;Ambulance Chasing&quot;):</strong> Direct solicitation in hospitals or collision scenes violates professional bar ethics.</li>
                  <li><strong>High-Volume &quot;Settlement Mills&quot;:</strong> Firms that process thousands of cases with zero intention of ever filing a formal lawsuit, frequently settling claims for pennies on the dollar to maximize turnover.</li>
                  <li><strong>Poor Communication &amp; Unreturned Calls:</strong> If you cannot speak to an attorney during intake, communication will only worsen once you sign a retainer.</li>
                </ul>
              </div>
            </div>

            {/* H3: Understanding Reviews and Ratings (200w) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Understanding Reviews and Ratings
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Cross-examine lawyer reputation across established, peer-reviewed legal directories:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li><strong>Martindale-Hubbell AV Preeminent Rating:</strong> The gold standard in peer-review ratings for ethical standing and legal capability.</li>
                  <li><strong>Super Lawyers / Best Lawyers in America:</strong> Independent patented selection processes evaluating trial achievements.</li>
                  <li><strong>State Bar Disciplinary Records:</strong> Check your official State Bar Association website to verify the attorney has an active license free from disciplinary reprimands or malpractice suspensions.</li>
                  <li><strong>Google Business &amp; Avvo Client Testimonials:</strong> Look for detailed client stories describing responsive communication, compassionate advocacy, and successful outcomes.</li>
                </ul>
              </div>
            </div>
          </section>


          {/* ======================================================================= */}
          {/* FREQUENTLY ASKED QUESTIONS                                             */}
          {/* ======================================================================= */}
          <section id="faq" className="scroll-mt-24 mb-16 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Interactive Legal FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <HelpCircle className="h-7 w-7 text-blue-400" />
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-slate-400 text-sm">
              Explore 14 comprehensive legal answers addressing accident claims, comparative negligence, settlement calculation formulas, and attorney selection.
            </p>

            <div className="space-y-3">
              {LEGAL_GUIDE_FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-slate-800 bg-slate-900/60 open:border-blue-500/40 open:bg-slate-900/90 transition-colors"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 sm:p-5 font-semibold text-sm sm:text-base text-slate-200">
                    <span className="flex items-start gap-3 text-left">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400 mt-0.5">
                        {idx + 1}
                      </span>
                      {faq.q}
                    </span>
                    <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-5 pl-12 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ======================================================================= */}
          {/* BOTTOM LINE                                                             */}
          {/* ======================================================================= */}
          <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-6 sm:p-8 shadow-2xl text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-blue-400" />
              Bottom Line — Protecting Your Health &amp; Legal Rights
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In the complex, fast-moving aftermath of a car accident, catastrophic injury, or wrongful death, time is your most critical asset. Physical evidence degrades, skid marks fade, commercial surveillance videos are routinely overwritten within 14 to 30 days, and insurance companies mobilize immediately to insulate their balance sheets against financial exposure.
              </p>
              <p>
                By prioritizing immediate comprehensive medical evaluation, maintaining meticulous documentary logs, refusing to provide unrepresented recorded statements to third-party adjusters, and partnering with seasoned, trial-tested personal injury counsel on a contingency fee basis, you assert full control over your recovery trajectory. You do not have to confront insurance conglomerates alone—the legal system provides robust statutory mechanisms to hold negligent actors accountable and secure the comprehensive financial restitution you and your family rightfully deserve.
              </p>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-normal mt-4">
                <p className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-blue-400" />
                  Legal Disclaimer:
                </p>
                The information provided within this comprehensive guide is published for informational and educational purposes only and does not constitute formal legal advice. Tort laws, statutes of limitations, and comparative fault rules differ across individual state jurisdictions. For advice regarding your specific case circumstances, consult a licensed attorney in your state.
              </div>
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:py-10 bg-[#070b12]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-bold text-slate-100">Web Nova Crew Legal &amp; Tools</p>
                <p className="text-slate-500 text-xs sm:text-sm">Car Accident &amp; Injury Claims Guide (2026) · TeraBox Online Player</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-400">
              <a href="#player" className="hover:text-white transition-colors">
                Player
              </a>
              <a href="#immediate-steps" className="hover:text-white transition-colors">
                Accident Steps
              </a>
              <a href="#personal-injury-law" className="hover:text-white transition-colors">
                Injury Law
              </a>
              <a href="#wrongful-death" className="hover:text-white transition-colors">
                Wrongful Death
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </nav>
          </div>
          <p className="mt-6 text-center text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            &copy; 2026 Web Nova Crew. All rights reserved. Independent informational guide and web utility.
          </p>
        </div>
      </footer>
    </div>
  );
}
