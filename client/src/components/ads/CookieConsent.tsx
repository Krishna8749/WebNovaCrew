import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  applyGoogleConsent,
  getAdConsent,
  setAdConsentCookies,
} from "@/lib/ad-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = getAdConsent();
    if (status === "granted") {
      applyGoogleConsent(true);
      return;
    }
    if (status === "unset") setVisible(true);
  }, []);

  const accept = () => {
    setAdConsentCookies(true);
    applyGoogleConsent(true);
    setVisible(false);
  };

  const decline = () => {
    setAdConsentCookies(false);
    applyGoogleConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] p-3 sm:p-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-violet-700 bg-violet-950/95 p-4 sm:p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 text-sm text-slate-300 leading-relaxed">
          <p className="font-semibold text-white mb-1">We use cookies</p>
          <p>
            Cookies help show personalized ads and improve your experience. Accepting
            enables higher-relevance ads on this site.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-10 border-violet-700/50 text-slate-300"
            onClick={decline}
          >
            Decline
          </Button>
          <Button type="button" className="h-10 bg-violet-600 hover:bg-violet-500" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
