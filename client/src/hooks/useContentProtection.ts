import { useEffect } from "react";

/**
 * Advanced DRM-style content protection for video player pages.
 *
 * Protections:
 * - Right-click / context menu blocked
 * - Keyboard: PrintScreen, F12, Ctrl+U/S/P/A/C/X, Ctrl+Shift+I/J/C/K/U
 * - Copy / Cut events blocked
 * - Drag of video/image/canvas blocked
 * - navigator.mediaDevices.getDisplayMedia (screen-capture API) overridden
 * - DevTools detection via debugger timing attack → black overlay
 * - PiP and remote-playback disabled on <video> elements
 * - Print dialog blanks the page
 */
export function useContentProtection(active = true) {
  useEffect(() => {
    if (!active) return;

    // 1. Context menu
    const blockContext = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 2. Keyboard shortcuts
    const blockKeys = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const key = e.key?.toLowerCase();

      if (e.key === "PrintScreen" || e.code === "PrintScreen") {
        e.preventDefault();
        document.body.style.visibility = "hidden";
        setTimeout(() => { document.body.style.visibility = "visible"; }, 400);
        return;
      }
      if (e.key === "F12") { e.preventDefault(); return; }
      if (ctrl && shift && ["i","j","c","k"].includes(key)) { e.preventDefault(); return; }
      if (ctrl && key === "u") { e.preventDefault(); return; }
      if (ctrl && key === "s") { e.preventDefault(); return; }
      if (ctrl && key === "p") { e.preventDefault(); return; }
      if (ctrl && key === "a") { e.preventDefault(); return; }
      if (ctrl && (key === "c" || key === "x")) { e.preventDefault(); return; }
      if (ctrl && shift && key === "u") { e.preventDefault(); return; }
    };

    // 3. Clipboard
    const blockClipboard = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // 4. Drag
    const blockDrag = (e: DragEvent) => {
      const t = e.target as HTMLElement;
      if (["VIDEO","IMG","CANVAS"].includes(t.tagName)) e.preventDefault();
    };

    // 5. Screen capture API
    let origGetDisplayMedia: typeof navigator.mediaDevices.getDisplayMedia | null = null;
    try {
      if (navigator.mediaDevices?.getDisplayMedia) {
        origGetDisplayMedia = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getDisplayMedia = () =>
          Promise.reject(new DOMException("Screen capture disabled on this page.", "NotAllowedError"));
      }
    } catch { /* ignore */ }

    // 6. DevTools detection overlay
    const overlay = document.createElement("div");
    overlay.id = "__drm_devtools_overlay";
    overlay.style.cssText = [
      "display:none",
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "background:#0a0a0a",
      "color:#fff",
      "font-size:1.25rem",
      "font-family:system-ui,sans-serif",
      "align-items:center",
      "justify-content:center",
      "text-align:center",
      "padding:2rem",
    ].join(";");
    overlay.innerHTML = `<div><div style="font-size:3rem;margin-bottom:1rem">🔒</div><div>Content protected.</div><div style="font-size:0.9rem;margin-top:0.5rem;opacity:0.6">Developer tools are not permitted on this page.</div></div>`;
    document.body.appendChild(overlay);

    const dtInterval = setInterval(() => {
      const t0 = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      if (performance.now() - t0 > 100) {
        overlay.style.display = "flex";
      } else {
        overlay.style.display = "none";
      }
    }, 1500);

    // 7. Lock video elements (PiP, remote-playback, right-click)
    const lockVideos = () => {
      document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
        v.disablePictureInPicture = true;
        v.addEventListener("contextmenu", blockContext as EventListener, true);
        try {
          // @ts-ignore
          if (v.remote) v.remote.prompt = () => Promise.reject(new Error("Disabled"));
        } catch { /* ignore */ }
      });
    };
    const videoObserver = new MutationObserver(lockVideos);
    videoObserver.observe(document.body, { childList: true, subtree: true });
    lockVideos();

    // 8. Print blank
    const onBeforePrint = () => { document.body.style.display = "none"; };
    const onAfterPrint  = () => { document.body.style.display = ""; };

    // Attach
    document.addEventListener("contextmenu", blockContext, true);
    document.addEventListener("keydown", blockKeys, true);
    document.addEventListener("copy", blockClipboard, true);
    document.addEventListener("cut", blockClipboard, true);
    document.addEventListener("dragstart", blockDrag, true);
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      document.removeEventListener("contextmenu", blockContext, true);
      document.removeEventListener("keydown", blockKeys, true);
      document.removeEventListener("copy", blockClipboard, true);
      document.removeEventListener("cut", blockClipboard, true);
      document.removeEventListener("dragstart", blockDrag, true);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
      clearInterval(dtInterval);
      overlay.remove();
      videoObserver.disconnect();
      try {
        if (origGetDisplayMedia && navigator.mediaDevices)
          navigator.mediaDevices.getDisplayMedia = origGetDisplayMedia;
      } catch { /* ignore */ }
    };
  }, [active]);
}
