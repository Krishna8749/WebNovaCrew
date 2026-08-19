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
import { 
  INSURANCE_KEYWORDS_DIRECTORY, 
  HEALTH_KEYWORDS, 
  LIFE_KEYWORDS, 
  CAR_KEYWORDS, 
  BIKE_KEYWORDS, 
  TRAVEL_KEYWORDS, 
  HOME_KEYWORDS, 
  BUSINESS_KEYWORDS 
} from "@/lib/insurance-keywords";
import { AdUnit } from "@/components/ads/AdSense";

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
    q: "What is the difference between family floater health insurance and individual health insurance plans?",
    a: "An individual health insurance plan covers a single person with a dedicated sum insured, whereas a family floater health insurance plan covers multiple family members (including spouse, children, and parents) under a single shared sum insured. Family plans are typically more cost-effective for families, but if one member exhausts the limit, other members have reduced coverage unless a restoration benefit is included.",
  },
  {
    q: "How can I calculate my health insurance premium and compare plans online?",
    a: "You can use an online health insurance premium calculator to estimate costs by inputting age, family members, location, and pre-existing medical conditions. The best health insurance online portals allow health insurance comparison, helping you evaluate premiums, deductibles, room rent limits, and no-claim bonuses (NCB) before buying cashless health insurance policies.",
  },
  {
    q: "What are the tax benefits of health insurance under Section 80D in India?",
    a: "Under Section 80D of the Income Tax Act, you can claim a deduction of up to ₹25,000 per year for health insurance premiums paid for yourself, spouse, and children. An additional deduction of up to ₹25,000 is available for parents' health insurance. If your parents are senior citizens (above 60 years), the limit increases to ₹50,000, allowing a total maximum deduction of up to ₹75,000 or ₹100,000 depending on age eligibility.",
  },
  {
    q: "How does a cashless health insurance claim process work at network hospitals?",
    a: "Cashless health insurance allows you to receive medical treatment at network hospitals without paying the bill upfront. The hospital third-party administrator (TPA) coordinates with the insurance company for pre-authorization. Once approved, the insurer settles the hospitalization costs directly, excluding non-medical consumables, deductibles, or copays.",
  },
  {
    q: "What is a 1 Crore term insurance plan and how do I choose the best term plan?",
    a: "A 1 Crore term insurance plan is a popular high-coverage term life insurance policy that provides a financial shield of ₹1 Crore to your nominee/beneficiary in the event of your death. To choose the best term plan, use a term insurance calculator to compare quotes, check the insurer's claim settlement ratio (CSR), and opt for riders like critical illness insurance or waiver of premium.",
  },
  {
    q: "How does zero cost term insurance with return of premium (ROP) work?",
    a: "A regular term plan provides only a death benefit. A term insurance with return of premium (ROP) returns all paid premiums if you survive the policy term. A zero cost term plan is a newer option that allows you to exit the policy at specific intervals (like age 60 or 65) and receive a full refund of premiums paid, minus taxes, without paying extra charges.",
  },
  {
    q: "What is the difference between comprehensive car insurance and third party car insurance?",
    a: "Third party car insurance is legally mandatory in India and only covers damage or injury caused to other people or property in an accident. Comprehensive car insurance covers both third-party liability and own damage (OD) to your vehicle due to accidents, theft, fire, or natural calamities. It can be enhanced with add-on covers like zero depreciation.",
  },
  {
    q: "What is zero depreciation (zero dep) bumper-to-bumper car insurance?",
    a: "Zero depreciation car insurance (also called zero dep or bumper-to-bumper cover) is an add-on that ensures the insurance company pays the full cost of replacing damaged parts (like plastic, rubber, or glass) without deducting depreciation during a claim. It is highly recommended for new cars and luxury cars up to 5 years old.",
  },
  {
    q: "Why is international travel insurance necessary for Schengen visa, USA, or Canada trips?",
    a: "Many countries, including the Schengen zone in Europe, make international travel insurance mandatory for visa approvals. A robust travel medical insurance policy covers emergency medical evacuation, baggage loss, trip/flight cancellation, and repatriation, protecting you from massive out-of-pocket expenses when traveling to expensive countries like the USA or Canada.",
  },
  {
    q: "What does a home insurance policy cover in India?",
    a: "A comprehensive home insurance policy protects your house against losses from fire, theft, floods, earthquakes, and vandalism. It is split into structure insurance (covering the building's physical walls and ceilings) and home contents insurance (covering expensive items inside like furniture, electronics, appliances, and jewelry).",
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
  const [searchQuery, setSearchQuery] = useState("");
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
    { href: "#player", label: "Verification", icon: Play },
    { href: "#health-insurance", label: "Health Insurance", icon: ShieldCheck },
    { href: "#term-life", label: "Term Life Plan", icon: ShieldAlert },
    { href: "#car-insurance", label: "Car & Bike Cover", icon: Car },
    { href: "#travel-insurance", label: "Travel & Home", icon: Globe },
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
            : "Complete Guide to Insurance: Health, Life, Car & Travel Policies (2026)"
        }
        description={
          isShareView
            ? sharePreviewDescription
            : "Compare and choose the best health insurance plans, term life policies, car/bike coverage, and travel plans. Calculate premiums and claims online."
        }
      />
      <BreadcrumbSchema
        items={[
          {
            name: isShareView ? "Watch Video" : "Complete Insurance Guide 2026",
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
                Nova<span className="text-blue-400">Shield</span> &amp; Player
              </span>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                Health, Life, &amp; Car Insurance Verification Portal 2026
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
                Accident Claims Portal · High Value Consultation Verification
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
              {isShareView && result?.fileName ? (
                <span className="line-clamp-2" data-nosnippet translate="no">
                  {result.fileName}
                </span>
              ) : (
                <>
                  Car Accident Claims &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Personal Injury Portal
                  </span>
                </>
              )}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              {isShareView
                ? "Retrieve verified statement case files and accident injury records below."
                : "Verify case resource files, insurance claim evaluations, and attorney consultation files below."}
            </p>

            {!isShareView && (
              <>
                <div
                  id="paste-box"
                  className="scroll-mt-24 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur p-4 sm:p-6 shadow-2xl shadow-black/40 text-left"
                >
                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/80 shadow-2xl">
                    <img
                      src="/legal/claims_portal_guide.jpg"
                      alt="Visual Step-by-Step Guide: Paste link, retrieve statement records, verify files."
                      className="w-full object-cover aspect-[21/9]"
                      loading="lazy"
                    />
                  </div>
                  <label htmlFor="terabox-url" className="sr-only">
                    Claims case link
                  </label>
                  <div className="relative mb-3">
                    <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                    <Input
                      id="terabox-url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Paste case record or verification link here..."
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
                      Secure SSL encrypted portal
                    </span>
                    <span className="hidden sm:inline text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-blue-400" />
                      Insurance policy verification supported
                    </span>
                  </p>
                </div>

                {/* Browser badges */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xs text-slate-500 w-full sm:w-auto text-center">Access claims via:</span>
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
                    <Scale className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      Accident Injury Case File Verification
                    </h3>
                    <p className="text-xs text-slate-400">
                      Verify statement records, insurance policy estimates, and legal attorney consult files.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Shield className="h-3.5 w-3.5 text-emerald-400" />
                  HIPAA Compliant · Legal Shield Protected
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE LEGAL & ACCIDENT INJURY CLAIMS GUIDE (SINGLE PAGE)          */}
        {/* ========================================================================= */}
        <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          
          <div className="mb-8">
            <AdUnit slot="7605569950" format="auto" fullWidthResponsive={true} />
          </div>
          
          {/* Main Title & Scope Header */}
          <header className="border-b border-slate-800 pb-8 mb-10 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-300 font-medium mb-4">
              <Scale className="h-3.5 w-3.5 text-blue-400" />
              National Health, Life, &amp; Auto Insurance Portal (2026 Edition)
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              The Complete Guide to Insurance: Health, Life, Car &amp; Travel Policies
            </h1>

            {/* Intro */}
            <div className="rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/20 p-6 sm:p-8 backdrop-blur text-slate-300 text-base sm:text-lg leading-relaxed shadow-xl">
              <p className="mb-4">
                Navigating the complex landscape of insurance policies is one of the most critical steps in securing your family&apos;s financial future and medical safety. In 2026, comparing the best health insurance, finding an affordable term life insurance plan, calculating zero depreciation car insurance premium rates, and purchasing international travel insurance are essential processes that can be executed easily online.
              </p>
              <p className="mb-4">
                This comprehensive single-page guide serves as your complete insurance compendium. Whether you need to evaluate individual health insurance versus family floater health insurance plans, calculate a 1 Crore term insurance monthly premium, verify own damage car insurance coverage, or find a cashless health insurance policy for senior citizen parents, we provide detailed statutory and practical guides for all major insurance categories.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-400" /> Comprehensive 30-Min Read</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-emerald-400" /> Complete Coverage Matrix</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> Fully Updated for 2026 Guidelines</span>
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
              Click any section below to jump directly to detailed policy comparisons, premium calculations, tax benefits, and claim settlement processes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a href="#health-insurance" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">1</span>
                  Health Insurance &amp; Mediclaim Plans
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#term-life" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">2</span>
                  Term Life &amp; Financial Protection
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#car-insurance" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">3</span>
                  Comprehensive Car &amp; Bike Insurance
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#travel-insurance" className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">4</span>
                  Travel, Home &amp; Business Coverages
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a href="#faq" className="group col-span-1 sm:col-span-2 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white transition-all">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 text-xs font-bold text-cyan-400">?</span>
                  Frequently Asked Questions (10 Detailed Insurance Q&amp;As)
                </span>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </nav>

          {/* ======================================================================= */}
          {/* SECTION 1: Health Insurance & Mediclaim Plans                          */}
          {/* ======================================================================= */}
          <section id="health-insurance" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 1</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-blue-400" />
                Section 1 — Comprehensive Health Insurance &amp; Mediclaim Policies
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/prepaid_legal_shield.jpg"
                alt="Health Insurance cashless shield cover"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Individual vs. Family Health Insurance Floater Plans
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Choosing the right <strong>health insurance plan</strong> or <strong>medical insurance policy</strong> is a foundational element of financial planning. An <em>individual health insurance</em> plan secures a single policyholder with a dedicated sum insured. In contrast, a <strong>family health insurance plan</strong> (or family floater policy) covers multiple family members—including your spouse, children, and parents—under a single shared sum insured pool. Family floaters generally offer a much lower premium cost per member, making them the best option for young households.
                </p>
                <p>
                  To find the optimal fit, policyholders should use a <strong>health insurance calculator</strong> online to compare different plans, evaluate premium structures, and check the network hospital list. Opting for a <strong>cashless health insurance policy</strong> ensures that hospitalization costs are directly settled by the insurer, eliminating the need to pay out of pocket during emergencies.
                </p>
              </div>
            </div>

            <div className="my-8">
              <AdUnit slot="5063300546" layout="in-article" format="fluid" style={{ display: "block", textAlign: "center" }} />
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Senior Citizen Health Insurance &amp; Pre-Existing Diseases
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Securing parents&apos; health insurance becomes critical as they age. A dedicated <strong>senior citizen health insurance</strong> policy is designed for retired, elderly parents above 60, 65, or 70 years old. These specialized policies feature tailored benefits such as restoration benefits (replenishing the sum insured if exhausted) and zero copay options, although they may carry waiting periods for pre-existing medical conditions.
                </p>
                <p>
                  Many senior parents live with chronic illnesses such as diabetes, hypertension, asthma, thyroid disorders, or heart and kidney conditions. Finding specialized <em>health insurance for diabetic patients</em> or <em>pre-existing disease health cover</em> is vital. While these plans might carry higher premiums, they provide a essential safety net, protecting senior parents after major surgeries or hospitalization.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Maternity Cover, OPD Benefits, and Policy Riders
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Modern health insurance plans offer multiple micro-coverages and riders that expand basic hospitalization benefits:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>Maternity Health Insurance &amp; Newborn Cover:</strong> Covers pregnancy-related expenses and newborn baby care, usually subject to a 2-to-4-year waiting period.
                  </li>
                  <li>
                    <strong>OPD Health Insurance:</strong> Covers outpatient doctor consultations, pharmacy bills, and diagnostic tests without requiring 24-hour hospitalization.
                  </li>
                  <li>
                    <strong>Dental &amp; Mental Health Coverage:</strong> Includes expenses for dental treatments and psychiatric counseling, which are increasingly bundled under premium cashless policies.
                  </li>
                  <li>
                    <strong>No Claim Bonus (NCB) &amp; Restoration:</strong> Boosts your sum insured by 10% to 50% for every claim-free year, or restores coverage limits if fully exhausted during active treatment.
                  </li>
                </ul>
                <p>
                  Additionally, tax benefits under <strong>Section 80D</strong> of the Income Tax Act allow policyholders to claim deductions of up to ₹25,000 for self/family, and up to ₹50,000 for senior citizen parents, making health insurance renewal an excellent tax-saving tool.
                </p>

                {/* Health Section Keywords Reference */}
                <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-blue-400" />
                    Covered Health Insurance &amp; Mediclaim Reference Queries
                  </h4>
                  <div className="max-h-[120px] overflow-y-auto pr-1 text-[11px] text-slate-400 font-mono scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/20">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                      {HEALTH_KEYWORDS.map((kw, i) => (
                        <div 
                          key={i} 
                          className="p-1.5 rounded bg-slate-900/60 border border-slate-800/40 hover:border-blue-500/25 hover:text-slate-200 transition-colors cursor-pointer truncate"
                          onClick={() => {
                            setUrl(kw);
                            const playerEl = document.getElementById("player");
                            if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                          }}
                          title={kw}
                        >
                          # {kw}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-8">
            <AdUnit slot="1009844198" format="fluid" layoutKey="-6t+ed+2i-1n-4w" />
          </div>

          {/* ======================================================================= */}
          {/* SECTION 2: Term Life & Financial Protection                            */}
          {/* ======================================================================= */}
          <section id="term-life" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 2</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <ShieldAlert className="h-7 w-7 text-blue-400" />
                Section 2 — Term Life Insurance &amp; 1 Crore Financial Protection
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/wrongful_death_memorial.jpg"
                alt="Term life insurance security family protection"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Term Life Plans vs. Investment Policies
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  A <strong>term insurance plan</strong> (or term life insurance) is the purest form of financial protection. Unlike endowment, savings, or ULIP (Unit Linked Insurance Plans) which mix insurance with investment returns, a term policy focuses 100% on providing a high death benefit payout to your nominee if you pass away during the policy term.
                </p>
                <p>
                  For young adults, a <strong>1 Crore term insurance</strong> policy is highly affordable, offering massive coverage for a low monthly or annual premium. To optimize plans, use a <strong>term insurance calculator</strong> to compute the required sum insured based on your current debts, liabilities, and family expenses. Zero cost term plans and return of premium (ROP) options are also popular, refunding all paid premiums if you survive the policy term.
                </p>
              </div>
            </div>

            <div className="my-8">
              <AdUnit slot="5063300546" layout="in-article" format="fluid" style={{ display: "block", textAlign: "center" }} />
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Key Term Riders &amp; Claim Settlement Ratios (CSR)
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  When comparing the <em>best term insurance policies in India</em>, checking the insurer&apos;s <strong>claim settlement ratio (CSR)</strong> is paramount. A high CSR (ideally above 98%) indicates the company has a strong record of settling death claims.
                </p>
                <p>
                  Policyholders can customize their basic term coverage using key policy riders:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>Critical Illness Rider:</strong> Provides a lump-sum payout if diagnosed with life-threatening illnesses such as cancer or heart attacks.
                  </li>
                  <li>
                    <strong>Accidental Death Benefit:</strong> Pays out an additional sum insured if the death occurs due to an accident.
                  </li>
                  <li>
                    <strong>Waiver of Premium Rider:</strong> Waives all future premiums if the policyholder suffers a permanent disability, keeping the term plan active.
                  </li>
                </ul>
                <p>
                  All term insurance premiums enjoy tax deductions under <strong>Section 80C</strong>, and the final maturity or death claim payout is fully tax-exempt under <strong>Section 10(10D)</strong>, providing dual-benefit financial security.
                </p>
              </div>

              {/* Term Life Section Keywords Reference */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-400" />
                  Covered Term Life Policy &amp; Investment Reference Queries
                </h4>
                <div className="max-h-[120px] overflow-y-auto pr-1 text-[11px] text-slate-400 font-mono scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/20">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                    {LIFE_KEYWORDS.map((kw, i) => (
                      <div 
                        key={i} 
                        className="p-1.5 rounded bg-slate-900/60 border border-slate-800/40 hover:border-blue-500/25 hover:text-slate-200 transition-colors cursor-pointer truncate"
                        onClick={() => {
                          setUrl(kw);
                          const playerEl = document.getElementById("player");
                          if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        title={kw}
                      >
                        # {kw}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-8">
            <AdUnit slot="7605569950" format="auto" fullWidthResponsive={true} />
          </div>

          {/* ======================================================================= */}
          {/* SECTION 3: Comprehensive Car & Bike Insurance                          */}
          {/* ======================================================================= */}
          <section id="car-insurance" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 3</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Car className="h-7 w-7 text-blue-400" />
                Section 3 — Comprehensive Car &amp; Bike Insurance
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/accident_scene.jpg"
                alt="Car accident damage claim insurance inspection"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Third-Party Liability vs. Comprehensive Car Insurance
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Motor vehicle insurance is a legal mandate. <strong>Third-party car insurance</strong> covers bodily injury, death, or property damage caused to a third party in an accident. However, it does not cover damages to your own vehicle.
                </p>
                <p>
                  To secure your own vehicle, a <strong>comprehensive car insurance</strong> policy is highly recommended. It covers own damage (OD) resulting from collisions, theft, fire, floods, and natural calamities, along with third-party liability. When choosing a plan, use an online <strong>car insurance premium calculator</strong> to evaluate the vehicle&apos;s <strong>Insured Declared Value (IDV)</strong> and verify nearby cashless network garages.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Zero Depreciation (Zero Dep) and Motor Add-Ons
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Standard comprehensive policies deduct depreciation costs when replacing damaged car parts. By adding a <strong>zero depreciation car insurance</strong> rider (also known as zero dep or bumper-to-bumper cover), the insurer pays the complete replacement value of plastic, fiber, and glass parts without depreciation cuts.
                </p>
                <p>
                  Other essential car insurance add-on covers include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li><strong>Return to Invoice:</strong> Pays the full original on-road purchase price (invoice value) if the car is stolen or suffers a total loss.</li>
                  <li><strong>Engine Protection:</strong> Covers mechanical and electrical repair bills of the engine due to water logging or hydrostatic lock.</li>
                  <li><strong>Roadside Assistance (RSA):</strong> Provides flat tyre changes, towing, and emergency fuel delivery.</li>
                  <li><strong>No Claim Bonus (NCB) Protect:</strong> Preserves your earned NCB discount (up to 50%) even if you file a claim during the policy year.</li>
                </ul>
                <p>
                  Similarly, **two wheeler insurance** and scooter insurance online quotes follow the same rules, allowing riders to renew their policies instantly online.
                </p>
              </div>

              {/* Auto Section Keywords Reference */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-400" />
                  Covered Car, Bike, &amp; Auto Insurance Reference Queries
                </h4>
                <div className="max-h-[120px] overflow-y-auto pr-1 text-[11px] text-slate-400 font-mono scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/20">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                    {CAR_KEYWORDS.concat(BIKE_KEYWORDS).map((kw, i) => (
                      <div 
                        key={i} 
                        className="p-1.5 rounded bg-slate-900/60 border border-slate-800/40 hover:border-blue-500/25 hover:text-slate-200 transition-colors cursor-pointer truncate"
                        onClick={() => {
                          setUrl(kw);
                          const playerEl = document.getElementById("player");
                          if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        title={kw}
                      >
                        # {kw}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-8">
            <AdUnit slot="1009844198" format="fluid" layoutKey="-6t+ed+2i-1n-4w" />
          </div>

          {/* ======================================================================= */}
          {/* SECTION 4: Travel, Home & Business Coverages                            */}
          {/* ======================================================================= */}
          <section id="travel-insurance" className="scroll-mt-24 mb-16 space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Section 4</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 flex items-center gap-3">
                <Globe className="h-7 w-7 text-blue-400" />
                Section 4 — Travel, Home &amp; Business Coverages
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/legal/lawyer_consultation.jpg"
                alt="Travel and home insurance policies consultation"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                International Travel Insurance Requirements
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  When traveling abroad, buying <strong>travel insurance online</strong> is a vital step. Many countries, including European nations in the Schengen zone, require mandatory <em>Schengen travel insurance</em> coverage (minimum €30,000 medical cover) for visa approval.
                </p>
                <p>
                  Travel policies protect against expensive emergency medical treatment, trip cancellations, lost baggage, flight delays, and repatriation. Dedicated student travel insurance is available for young adults studying in the USA, UK, Canada, or Australia, securing their health and academic stays.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                Home &amp; Business Liability Insurances
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-3">
                <p>
                  Your physical assets require robust security against disasters:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <strong>Home Insurance:</strong> Covers the building structure against fire, earthquakes, and floods (structure insurance), along with protection for jewelry, furniture, and appliances (home contents insurance).
                  </li>
                  <li>
                    <strong>Small Business &amp; Shopkeeper Insurance:</strong> Protects retail shops, warehouses, and offices from business interruption, theft, and physical damage.
                  </li>
                  <li>
                    <strong>Professional Liability &amp; Cyber Insurance:</strong> Essential for freelancers and doctors to protect against errors, omissions, and client data breaches.
                  </li>
                </ul>
              </div>

              {/* Travel Section Keywords Reference */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-400" />
                  Covered Travel, Home, &amp; Business Insurance Reference Queries
                </h4>
                <div className="max-h-[120px] overflow-y-auto pr-1 text-[11px] text-slate-400 font-mono scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/20">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                    {TRAVEL_KEYWORDS.concat(HOME_KEYWORDS, BUSINESS_KEYWORDS).map((kw, i) => (
                      <div 
                        key={i} 
                        className="p-1.5 rounded bg-slate-900/60 border border-slate-800/40 hover:border-blue-500/25 hover:text-slate-200 transition-colors cursor-pointer truncate"
                        onClick={() => {
                          setUrl(kw);
                          const playerEl = document.getElementById("player");
                          if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        title={kw}
                      >
                        # {kw}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-8">
            <AdUnit slot="1026156067" format="autorelaxed" />
          </div>

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

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Find quick answers to vital questions regarding health floater premiums, Section 80D tax deductions, cashless network authorization, 1 Crore term life insurance calculations, and zero depreciation car insurance policies.
            </p>

            <div className="space-y-4">
              {LEGAL_GUIDE_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 transition-colors hover:border-slate-700/80"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-400">Q</span>
                    {faq.q}
                  </h3>
                  <div className="mt-2.5 pl-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-slate-850">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================================= */}
          {/* BOTTOM LINE                                                             */}
          {/* ======================================================================= */}
          <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-6 sm:p-8 shadow-2xl text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-blue-400" />
              Bottom Line — Protecting Your Health &amp; Assets
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In the complex, fast-moving landscape of insurance coverage, time is your most critical asset. Whether you are renewing a cashless health insurance policy, comparing term life insurance plans under Section 80D and Section 80C, or filing a comprehensive car insurance claim after an accident, keeping accurate documentation and choosing premium network hospitals is paramount.
              </p>
              <p>
                By prioritizing comparative policy audits, calculating coverage needs using term premium calculators, and selecting zero depreciation add-on plans, you protect your family and business. You do not have to navigate the insurance sector alone—our independent portal provides the necessary reference indices to compare guidelines, premiums, and cashless hospital settlements.
              </p>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-normal mt-4">
                <p className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-blue-400" />
                  General Disclaimer:
                </p>
                The information provided within this comprehensive insurance policy guide is published for informational and educational purposes only and does not constitute formal legal, financial, or tax advice. Policy premiums, exclusions, network garages, and cashless terms vary by individual insurance provider and location.
              </div>
            </div>
          </section>

          {/* ======================================================================= */}
          {/* SEARCHABLE POLICY DIRECTORY (2000 KEYWORDS)                            */}
          {/* ======================================================================= */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 sm:p-6 mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              Comprehensive Insurance Directory Index (2026)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              Search and filter our verified database of 2,000+ insurance policies, premium calculators, and cashless medical claim terms. Click any query to load and verify.
            </p>
            
            {/* Search Input */}
            <div className="flex flex-col gap-2 mb-5">
              <Input
                type="text"
                placeholder="Type to filter 2,000+ queries (e.g. family, cashless, parents, senior)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-950 border-slate-800 text-slate-200 text-sm h-11 focus:border-blue-500"
              />
            </div>

            {/* Keyword Grid scrollable */}
            <div className="max-h-[350px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/20 text-xs text-slate-400 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {INSURANCE_KEYWORDS_DIRECTORY.filter(kw => 
                  kw.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((kw, i) => (
                  <div 
                    key={i} 
                    className="p-2 rounded bg-slate-950/60 border border-slate-800/40 hover:border-blue-500/20 hover:text-slate-200 transition-colors cursor-pointer truncate flex items-center gap-1.5"
                    onClick={() => {
                      setUrl(kw);
                      const playerEl = document.getElementById("player");
                      if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    title={kw}
                  >
                    <span className="text-blue-500/60">#</span>
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
              {INSURANCE_KEYWORDS_DIRECTORY.filter(kw => 
                kw.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0 && (
                <p className="text-slate-500 text-center py-10">No matching policy queries found.</p>
              )}
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
                <p className="font-bold text-slate-100">Web Nova Crew Shields &amp; Tools</p>
                <p className="text-slate-500 text-xs sm:text-sm">Health, Term Life, &amp; Auto Insurance Portal (2026)</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-400">
              <a href="#player" className="hover:text-white transition-colors">
                Verification Portal
              </a>
              <a href="#health-insurance" className="hover:text-white transition-colors">
                Health Cover
              </a>
              <a href="#term-life" className="hover:text-white transition-colors">
                Term Life
              </a>
              <a href="#car-insurance" className="hover:text-white transition-colors">
                Car Insurance
              </a>
              <a href="#travel-insurance" className="hover:text-white transition-colors">
                Travel Insurance
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
