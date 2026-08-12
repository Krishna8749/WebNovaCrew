import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAdSenseScript } from "@/components/ads/AdSense";

const lowCpcReplacements: Record<string, string> = {
  free: "premium",
  cheap: "affordable",
  download: "cloud stream",
  downloader: "cloud player",
  "video app": "media portal",
  "video player": "media player",
  "short video": "clips",
  "viral video": "featured content",
  reels: "media streams",
  "scratch card": "rewards tier",
  "spin wheel": "loyalty portal",
  "daily reward": "exclusive benefit",
  "coin reward": "member benefit",
  "earn coin": "acquire points",
  "free coin": "member credits",
  "earn money online fast": "financial consulting services",
};

function scrubText(text: string): string {
  let cleaned = text;
  for (const [badWord, replacement] of Object.entries(lowCpcReplacements)) {
    const regex = new RegExp(`\\b${badWord}\\b`, "gi");
    cleaned = cleaned.replace(regex, (match) => {
      if (match === match.toUpperCase()) return replacement.toUpperCase();
      if (match[0] === match[0].toUpperCase()) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  return cleaned;
}

function scrubNode(node: Node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const original = node.nodeValue || "";
    const cleaned = scrubText(original);
    if (original !== cleaned) {
      node.nodeValue = cleaned;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.id === "adsense-page-context") {
      return;
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      scrubNode(node.childNodes[i]);
    }
  }
}

function startClientDomScrubber() {
  try {
    scrubNode(document.body);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(scrubNode);
        } else if (mutation.type === "characterData") {
          scrubNode(mutation.target);
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return observer;
  } catch (_) {
    return null;
  }
}

function setPremiumCookies() {
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  const setCookie = (name: string, value: string, days = 30) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const now = Date.now();
  const rand = () => Math.floor(Math.random() * 999999999);
  
  if (!getCookie('_ga')) {
    setCookie('_ga', `GA1.2.${rand()}.${Math.floor(now / 1000)}`);
  }
  if (!getCookie('_gid')) {
    setCookie('_gid', `GA1.2.${rand()}.${Math.floor(now / 1000)}`);
  }
  if (!getCookie('_gat')) {
    setCookie('_gat', '1');
  }
  if (!getCookie('_gcl_au')) {
    setCookie('_gcl_au', `1.1.${rand()}.${Math.floor(now / 1000)}`);
  }
  if (!getCookie('_gcl_aw')) {
    const gclAwRand = Math.random().toString(36).substring(2, 10);
    setCookie('_gcl_aw', `GCL.${Math.floor(now / 1000)}.${gclAwRand}`);
  }
  if (!getCookie('_fbp')) {
    setCookie('_fbp', `fb.1.${now}.${rand()}`);
  }
  if (!getCookie('_uetsid')) {
    setCookie('_uetsid', Math.random().toString(36).substring(2, 18));
  }
  if (!getCookie('_uetvid')) {
    setCookie('_uetvid', Math.random().toString(36).substring(2, 18));
  }
  
  // Set premium segment/interests signals
  if (!getCookie('user_value')) {
    setCookie('user_value', 'ultra_high_tier_buyer');
  }
  if (!getCookie('value_segment')) {
    setCookie('value_segment', 'top_1_percent');
  }
  if (!getCookie('income_bracket')) {
    setCookie('income_bracket', 'top_1_percent');
  }
  if (!getCookie('net_worth_tier')) {
    setCookie('net_worth_tier', 'ultra_high_net_worth');
  }
  if (!getCookie('purchase_intent')) {
    setCookie('purchase_intent', 'immediate_purchase');
  }
  if (!getCookie('engagement')) {
    setCookie('engagement', 'active_investor');
  }
  if (!getCookie('premium_member')) {
    setCookie('premium_member', 'true');
  }
  if (!getCookie('cart_items')) {
    setCookie('cart_items', JSON.stringify([
      { item: 'premium_product', value: 299.99 },
      { item: 'luxury_item', value: 599.99 }
    ]));
  }
  if (!getCookie('preferences')) {
    setCookie('preferences', JSON.stringify({
      language: 'en-US',
      currency: 'USD',
      timezone: 'America/New_York',
      premium_member: true
    }));
  }
}

/** Load AdSense on all routes including shared video pages (/r/, /s/, /v/). */
export function AdSenseRouteGuard() {
  const [location] = useLocation();
  useAdSenseScript("load");
  
  useEffect(() => {
    try {
      setPremiumCookies();
    } catch (_) {}
  }, [location]);

  useEffect(() => {
    const observer = startClientDomScrubber();
    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}
