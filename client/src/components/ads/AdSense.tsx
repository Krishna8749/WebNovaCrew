import { useEffect, useRef } from "react";

export const ADSENSE_CLIENT = "ca-pub-6543551957793188";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/** Load AdSense script once — pass "skip" to avoid loading on protected routes. */
export function useAdSenseScript(mode: "load" | "skip" = "load") {
  useEffect(() => {
    if (mode === "skip") return;
    if (document.querySelector('script[data-adsense-client="true"]')) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = "anonymous";
    script.dataset.adsenseClient = "true";
    document.head.appendChild(script);
  }, [mode]);
}

type AdUnitProps = {
  slot?: string;
  format?: string;
  layoutKey?: string;
  layout?: string;
  className?: string;
  label?: string;
  style?: React.CSSProperties;
  fullWidthResponsive?: boolean;
};

export function AdUnit({
  slot,
  format = "auto",
  layoutKey,
  layout,
  className = "",
  label,
  style = { display: "block" },
  fullWidthResponsive,
}: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ad blockers */
    }
  }, [slot]);

  if (!slot) {
    return (
      <div
        className={`flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-600 bg-slate-900/50 text-xs text-slate-500 ${className}`}
        aria-hidden
      >
        {label ?? "Ad space — slot ID not provided"}
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={style}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout-key={layoutKey || undefined}
      data-ad-layout={layout || undefined}
      data-full-width-responsive={fullWidthResponsive !== undefined ? String(fullWidthResponsive) : (format === "auto" ? "true" : undefined)}
    />
  );
}

