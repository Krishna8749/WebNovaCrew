/** Shared watch links (/r/, /s/, /v/) — used for SEO/robots on share pages. */
export function isShareWatchRoute(path: string): boolean {
  return path.startsWith("/s/") || path.startsWith("/r/") || path.startsWith("/v/");
}

/** No routes block AdSense — ads run on player and shared video pages. */
export function isVideoProtectedRoute(_path: string): boolean {
  return false;
}

export const VIDEO_PROTECTED_ROBOTS =
  "noimageindex, max-video-preview:0, max-snippet:0, nosnippet";

/** Allow rich link previews when sharing video pages on WhatsApp, Telegram, etc. */
export const SHARE_PREVIEW_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:large";
