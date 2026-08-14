import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  hreflangUrls?: { lang: string; url: string }[];
  /** No Web Nova Crew suffix, org schema, or site branding in meta */
  brandless?: boolean;
  ogImage?: string | null;
  extraMeta?: { name: string; content: string }[];
  /** Override robots meta (e.g. noimageindex on video pages) */
  robots?: string;
  /** Remove og/twitter image tags from the document */
  stripImages?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  hreflangUrls,
  brandless = false,
  ogImage,
  extraMeta,
  robots,
  stripImages = false,
}: SEOProps) {
  const siteTitle = brandless ? title : `${title} | Web Nova Crew - India's No.1 Web & App Development Agency`;
  const currentUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "");

  useEffect(() => {
    document.title = siteTitle;

    const updateMeta = (name: string, content: string, attribute: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    if (robots) updateMeta("robots", robots);
    extraMeta?.forEach(({ name, content }) => updateMeta(name, content));

    updateMeta("og:title", siteTitle, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:url", currentUrl, "property");
    updateMeta("og:site_name", brandless ? "Video Player" : "Web Nova Crew", "property");
    if (ogImage) updateMeta("og:image", ogImage, "property");
    else if (stripImages) {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }

    updateMeta("twitter:title", siteTitle);
    updateMeta("twitter:description", description);
    if (ogImage) updateMeta("twitter:image", ogImage);
    else if (stripImages) document.querySelector('meta[name="twitter:image"]')?.remove();

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", currentUrl);

    if (hreflangUrls && hreflangUrls.length > 0) {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
      hreflangUrls.forEach(({ lang, url }) => {
        const hreflangLink = document.createElement("link");
        hreflangLink.setAttribute("rel", "alternate");
        hreflangLink.setAttribute("hreflang", lang);
        hreflangLink.setAttribute("href", url);
        document.head.appendChild(hreflangLink);
      });
    }

    if (brandless) {
      document.querySelector("#org-schema")?.remove();
      return;
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Web Nova Crew",
      "url": "https://webnovacrew.com",
      "logo": "https://webnovacrew.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      "sameAs": [
        "https://www.facebook.com/webnovacrew",
        "https://twitter.com/webnovacrew",
        "https://www.linkedin.com/company/webnovacrew",
        "https://www.instagram.com/webnovacrew"
      ]
    };

    let script = document.querySelector('#org-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'org-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

  }, [siteTitle, description, keywords, currentUrl, hreflangUrls, brandless, ogImage, extraMeta, robots, stripImages]);

  return null; // This component doesn't render anything visible
}
