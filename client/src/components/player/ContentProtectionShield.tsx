import { type ReactNode, useEffect } from "react";
import { useContentProtection } from "@/hooks/useContentProtection";

/**
 * Wraps any content (thumbnail, video player, title) with layered CSS-level
 * DRM protections:
 *
 * CSS applied globally while mounted:
 *   - user-select: none     → text/image selection disabled
 *   - -webkit-touch-callout → iOS long-press menu disabled
 *   - pointer-events on img → drag disabled at CSS level
 *
 * A transparent overlay div sits on top of all img / canvas elements
 * to intercept right-click / long-press / drag.
 */

const PROTECTION_STYLE_ID = "__drm_protection_css";

const protectionCss = `
  /* Disable text and media selection site-wide on player pages */
  [data-drm-protected] *,
  [data-drm-protected] {
    user-select: none !important;
    -webkit-user-select: none !important;
    -webkit-touch-callout: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
  }

  /* Block image drag */
  [data-drm-protected] img,
  [data-drm-protected] video,
  [data-drm-protected] canvas {
    pointer-events: none !important;
    -webkit-user-drag: none !important;
    user-drag: none !important;
  }

  /* Transparent overlay intercepts events on thumbnails/images */
  [data-drm-protected] .drm-overlay {
    pointer-events: all !important;
  }

  /* Disable CSS printing */
  @media print {
    [data-drm-protected] {
      display: none !important;
      visibility: hidden !important;
    }
    body::after {
      content: "Printing is not allowed on this page.";
      display: block;
      font-size: 2rem;
      text-align: center;
      margin-top: 20vh;
    }
  }
`;

interface Props {
  children: ReactNode;
  className?: string;
}

export function ContentProtectionShield({ children, className = "" }: Props) {
  // Activate JS-level protections
  useContentProtection(true);

  // Inject CSS once globally
  useEffect(() => {
    if (document.getElementById(PROTECTION_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = PROTECTION_STYLE_ID;
    style.textContent = protectionCss;
    document.head.appendChild(style);
    return () => {
      // Keep the style even after unmount to prevent flash;
      // It only applies inside [data-drm-protected] so no bleed.
    };
  }, []);

  return (
    <div
      data-drm-protected="true"
      className={className}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
}

/**
 * Wraps a thumbnail/poster image with a transparent capture-blocking overlay
 * so right-click / long-press save is blocked.
 */
export function ProtectedImage({
  src,
  alt,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ position: "relative", display: "inline-block", ...style }}>
      {/* Actual image — pointer-events: none via CSS */}
      <img
        src={src}
        alt={alt}
        className={className}
        draggable={false}
        style={{ display: "block", userSelect: "none", WebkitUserSelect: "none" }}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* Transparent overlay — intercepts all pointer events */}
      <div
        className="drm-overlay"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          cursor: "default",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />
    </div>
  );
}
