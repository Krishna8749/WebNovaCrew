export const AD_CONSENT_COOKIE = "wnc_ad_consent";
export const AD_PERSONALIZATION_COOKIE = "wnc_ad_personalization";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getAdConsent(): "granted" | "denied" | "unset" {
  if (typeof document === "undefined") return "unset";
  const match = document.cookie.match(new RegExp(`(?:^|; )${AD_CONSENT_COOKIE}=([^;]*)`));
  if (!match) return "unset";
  return match[1] === "1" ? "granted" : "denied";
}

export function setAdConsentCookies(granted: boolean): void {
  const value = granted ? "1" : "0";
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${AD_CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
  document.cookie = `${AD_PERSONALIZATION_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
  try {
    localStorage.setItem(AD_CONSENT_COOKIE, value);
  } catch {
    /* private browsing */
  }
}

export function applyGoogleConsent(granted: boolean): void {
  const status = granted ? "granted" : "denied";
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
    });
  }
}
