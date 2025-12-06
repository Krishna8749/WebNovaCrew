import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  page?: string;
}

export function LocalBusinessSchema({ page }: LocalBusinessSchemaProps) {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://webnovacrew.com/#organization",
      "name": "Web Nova Crew",
      "alternateName": "WebNovaCrew",
      "url": "https://webnovacrew.com",
      "logo": "https://webnovacrew.com/logo.png",
      "image": "https://webnovacrew.com/og-image.jpg",
      "description": "Web Nova Crew is India's #1 custom web development and mobile app development company. We specialize in React, Next.js, Flutter, SEO, and e-commerce solutions.",
      "telephone": "+91-98723-64476",
      "email": "info@webnovacrew.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Shree Plaza Complex, Vikas Nagar, Ring Road",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226022",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8467",
        "longitude": "80.9462"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Canada" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web & App Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description": "Professional website development using React, Next.js, and modern technologies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description": "iOS and Android app development using Flutter and React Native"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Development",
              "description": "Online store development with Shopify, WooCommerce, and custom solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services",
              "description": "Search engine optimization to rank #1 on Google"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/webnovacrew",
        "https://twitter.com/webnovacrew",
        "https://www.linkedin.com/company/webnovacrew",
        "https://www.instagram.com/webnovacrew",
        "https://github.com/webnovacrew"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    let script = document.querySelector('#local-business-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-business-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(localBusinessSchema);

    return () => {
      const existingScript = document.querySelector('#local-business-schema');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return null;
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  useEffect(() => {
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Web Nova Crew",
        "url": "https://webnovacrew.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Web Nova Crew",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnovacrew.com/logo.png"
        }
      }
    };

    let script = document.querySelector('#webpage-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'webpage-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(webPageSchema);

    return () => {
      const existingScript = document.querySelector('#webpage-schema');
      if (existingScript) existingScript.remove();
    };
  }, [title, description, url]);

  return null;
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let script = document.querySelector('#faq-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'faq-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.querySelector('#faq-schema');
      if (existingScript) existingScript.remove();
    };
  }, [faqs]);

  return null;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}

export function ServiceSchema({ serviceName, serviceDescription, serviceUrl }: ServiceSchemaProps) {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceName,
      "provider": {
        "@type": "Organization",
        "name": "Web Nova Crew",
        "url": "https://webnovacrew.com"
      },
      "description": serviceDescription,
      "url": serviceUrl,
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    };

    let script = document.querySelector('#service-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'service-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(serviceSchema);

    return () => {
      const existingScript = document.querySelector('#service-schema');
      if (existingScript) existingScript.remove();
    };
  }, [serviceName, serviceDescription, serviceUrl]);

  return null;
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    let script = document.querySelector('#breadcrumb-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const existingScript = document.querySelector('#breadcrumb-schema');
      if (existingScript) existingScript.remove();
    };
  }, [items]);

  return null;
}
