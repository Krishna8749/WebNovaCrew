import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

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

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
}

export function PersonSchema({ name, jobTitle, description, url }: PersonSchemaProps) {
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": jobTitle,
      "description": description,
      "url": url,
      "worksFor": {
        "@type": "Organization",
        "name": "Web Nova Crew",
        "url": "https://webnovacrew.com"
      },
      "nationality": {
        "@type": "Country",
        "name": "India"
      },
      "birthPlace": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "knowsAbout": [
        "Web Development",
        "App Development",
        "Entrepreneurship",
        "AI Technology",
        "Real Estate Technology",
        "Fashion Business"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/sateeshkumarrawat",
        "https://twitter.com/sateeshrawat"
      ]
    };

    let script = document.querySelector('#person-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'person-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(personSchema);

    return () => {
      const existingScript = document.querySelector('#person-schema');
      if (existingScript) existingScript.remove();
    };
  }, [name, jobTitle, description, url]);

  return null;
}

// Visual Breadcrumb Component
interface BreadcrumbProps {
  items: { name: string; url: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link href="/">
              <a className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url}>
                  <a className="text-slate-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  imageUrl: string;
  keywords?: string[];
}

export function ArticleSchema({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified, 
  authorName, 
  imageUrl,
  keywords = []
}: ArticleSchemaProps) {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": "https://webnovacrew.com/team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Web Nova Crew",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnovacrew.com/logo.png"
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "keywords": keywords.join(", ")
    };

    let script = document.querySelector('#article-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'article-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(articleSchema);

    return () => {
      const existingScript = document.querySelector('#article-schema');
      if (existingScript) existingScript.remove();
    };
  }, [title, description, url, datePublished, dateModified, authorName, imageUrl, keywords]);

  return null;
}

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  imageUrl: string;
  wordCount?: number;
  keywords?: string[];
}

export function BlogPostingSchema({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified, 
  authorName, 
  imageUrl,
  wordCount,
  keywords = []
}: BlogPostingSchemaProps) {
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": "https://webnovacrew.com/team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Web Nova Crew",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnovacrew.com/logo.png"
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "wordCount": wordCount,
      "keywords": keywords.join(", "),
      "articleSection": "Technology",
      "inLanguage": "en-US"
    };

    let script = document.querySelector('#blog-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'blog-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(blogSchema);

    return () => {
      const existingScript = document.querySelector('#blog-schema');
      if (existingScript) existingScript.remove();
    };
  }, [title, description, url, datePublished, dateModified, authorName, imageUrl, wordCount, keywords]);

  return null;
}
