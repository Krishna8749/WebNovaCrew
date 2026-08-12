import { HIGH_CPC_KEYWORD_TEXT } from "@/data/adsense-high-cpc-keywords";

/** In-page AdSense context — auto ads read page text for matching. No manual ad slots. */
export function AdSenseKeywordContext() {
  return (
    <div
      id="adsense-page-context"
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
      data-adsense-context="true"
    >
      {HIGH_CPC_KEYWORD_TEXT}
    </div>
  );
}
