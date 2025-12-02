import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export function SEO({ title, description, keywords, canonicalUrl }: SEOProps) {
  const siteTitle = `${title} | Web Nova Crew - India's No.1 Web & App Development Agency`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  useEffect(() => {
    // Update Title
    document.title = siteTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // OG
    updateMeta('og:title', siteTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', currentUrl, 'property');
    
    // Twitter
    updateMeta('twitter:title', siteTitle);
    updateMeta('twitter:description', description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', currentUrl);

    // JSON-LD Schema
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

  }, [siteTitle, description, keywords, currentUrl]);

  return null; // This component doesn't render anything visible
}
