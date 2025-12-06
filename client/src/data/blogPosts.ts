export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogCategories = [
  { name: "All", slug: "all" },
  { name: "Web Development", slug: "web-development" },
  { name: "Mobile Apps", slug: "mobile-apps" },
  { name: "SEO & Marketing", slug: "seo-marketing" },
  { name: "UI/UX Design", slug: "ui-ux-design" },
  { name: "E-Commerce", slug: "e-commerce" },
  { name: "Technology", slug: "technology" },
  { name: "Business", slug: "business" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-nextjs-best-framework-2024",
    title: "Why Next.js is the Best Framework for Web Development in 2024",
    excerpt: "Discover why Next.js has become the go-to framework for modern web development, offering superior performance, SEO benefits, and developer experience.",
    content: `
## Introduction

Next.js has revolutionized the way we build web applications. As India's leading web development company, we've seen firsthand how this React framework transforms projects from good to exceptional.

## Key Benefits of Next.js

### 1. Server-Side Rendering (SSR)
Next.js provides built-in SSR, which means your pages are rendered on the server before being sent to the client. This results in:
- Faster initial page loads
- Better SEO rankings
- Improved user experience

### 2. Static Site Generation (SSG)
For content that doesn't change frequently, SSG pre-renders pages at build time, delivering lightning-fast performance.

### 3. API Routes
Build your backend API directly within your Next.js application, eliminating the need for a separate server.

### 4. Image Optimization
The built-in Image component automatically optimizes images for different screen sizes and formats.

## Why We Choose Next.js at Web Nova Crew

At Web Nova Crew, we've delivered 50+ projects using Next.js. Our clients consistently see:
- 40% faster load times
- 60% improvement in Core Web Vitals
- 3x better SEO rankings

## Conclusion

If you're planning a new web project in 2024, Next.js should be your first choice. Contact us to discuss how we can build your next project with Next.js.
    `,
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "JavaScript", "SEO"],
    author: {
      name: "Rahul Sharma",
      role: "Lead Developer",
    },
    publishedAt: "2024-12-01",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000",
    featured: true,
  },
  {
    id: "2",
    slug: "flutter-vs-react-native-2024",
    title: "Flutter vs React Native: Which is Better for Mobile App Development in 2024?",
    excerpt: "A comprehensive comparison of Flutter and React Native to help you choose the right framework for your next mobile app project.",
    content: `
## The Mobile App Development Dilemma

Choosing between Flutter and React Native is one of the most common questions we get from clients. Both are excellent cross-platform frameworks, but they have distinct advantages.

## Flutter: Google's UI Toolkit

### Pros:
- Single codebase for iOS, Android, Web, and Desktop
- Beautiful, customizable widgets
- Hot reload for faster development
- Strong performance with Dart compilation

### Cons:
- Larger app size
- Smaller community than React Native
- Learning Dart required

## React Native: Facebook's Framework

### Pros:
- JavaScript-based (familiar to web developers)
- Huge community and ecosystem
- Native modules for platform-specific features
- Smaller app size

### Cons:
- Bridge architecture can cause performance issues
- UI may not feel as native as Flutter

## Our Recommendation

At Web Nova Crew, we primarily use **Flutter** for new projects because:
1. Better performance for complex UIs
2. Consistent look across platforms
3. Growing ecosystem and Google's backing

However, React Native is still excellent for:
- Teams with strong JavaScript expertise
- Apps requiring many native modules
- Brownfield projects

## Conclusion

Both frameworks are production-ready. The choice depends on your team's expertise and project requirements. Contact us for a free consultation to determine the best approach for your app.
    `,
    category: "Mobile Apps",
    tags: ["Flutter", "React Native", "Mobile Development", "iOS", "Android"],
    author: {
      name: "Priya Patel",
      role: "Mobile Lead",
    },
    publishedAt: "2024-11-28",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    featured: true,
  },
  {
    id: "3",
    slug: "seo-strategies-rank-google-2024",
    title: "10 Proven SEO Strategies to Rank #1 on Google in 2024",
    excerpt: "Learn the latest SEO techniques that actually work in 2024. From technical SEO to content optimization, we cover everything you need to dominate search rankings.",
    content: `
## SEO in 2024: What's Changed?

Google's algorithms are smarter than ever. Here are the strategies that actually work in 2024.

## 1. Core Web Vitals Optimization
Google now heavily weighs page experience. Ensure your site scores 90+ on:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## 2. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
Google wants to see:
- Author bios with credentials
- Citations and references
- Real business information
- Customer reviews

## 3. Long-Form, Comprehensive Content
Articles with 2,000+ words rank better because they:
- Cover topics thoroughly
- Include more keywords naturally
- Earn more backlinks

## 4. Featured Snippet Optimization
Structure your content to win featured snippets:
- Use clear headings
- Include numbered lists
- Answer questions directly

## 5. Mobile-First Indexing
Your mobile site IS your site. Ensure:
- Responsive design
- Fast mobile load times
- Easy navigation on small screens

## 6. Schema Markup
Implement structured data for:
- Local business
- FAQ pages
- Products
- Reviews

## 7. Internal Linking Strategy
Create topic clusters with:
- Pillar pages
- Supporting content
- Strategic anchor text

## 8. Quality Backlinks
Focus on earning links from:
- Industry publications
- Guest posts
- HARO responses
- Original research

## 9. User Intent Matching
Understand what users want:
- Informational queries
- Transactional queries
- Navigational queries

## 10. Regular Content Updates
Keep content fresh by:
- Updating statistics
- Adding new sections
- Improving readability

## Need Help with SEO?

Web Nova Crew has helped 50+ businesses achieve page 1 rankings. Contact us for a free SEO audit.
    `,
    category: "SEO & Marketing",
    tags: ["SEO", "Google", "Digital Marketing", "Content Strategy", "Rankings"],
    author: {
      name: "Amit Kumar",
      role: "SEO Specialist",
    },
    publishedAt: "2024-11-25",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
    featured: true,
  },
  {
    id: "4",
    slug: "ecommerce-website-cost-india-2024",
    title: "How Much Does an E-Commerce Website Cost in India in 2024?",
    excerpt: "A detailed breakdown of e-commerce website development costs in India, from basic Shopify stores to custom enterprise solutions.",
    content: `
## E-Commerce Website Pricing Guide

Planning to launch an online store? Here's what you can expect to pay in India.

## Basic E-Commerce Store (₹50,000 - ₹1,50,000)

**Best for:** Small businesses, startups, limited product catalog

**Includes:**
- Shopify or WooCommerce setup
- Up to 50 products
- Basic theme customization
- Payment gateway integration
- Mobile responsive design

## Mid-Range E-Commerce (₹1,50,000 - ₹5,00,000)

**Best for:** Growing businesses, 100-500 products

**Includes:**
- Custom theme design
- Advanced product filtering
- Multiple payment options
- Inventory management
- Basic SEO optimization
- Admin dashboard

## Enterprise E-Commerce (₹5,00,000 - ₹25,00,000+)

**Best for:** Large businesses, marketplaces, complex requirements

**Includes:**
- Custom development (React/Next.js)
- Unlimited products
- Multi-vendor support
- Advanced analytics
- ERP/CRM integration
- Custom checkout flow
- Performance optimization

## Ongoing Costs to Consider

- Hosting: ₹5,000 - ₹50,000/month
- Maintenance: ₹10,000 - ₹50,000/month
- Marketing: ₹25,000 - ₹2,00,000/month
- Payment gateway fees: 2-3% per transaction

## Why Choose Web Nova Crew?

We've built 20+ successful e-commerce stores with:
- Average 250% increase in conversions
- 99.9% uptime guarantee
- Ongoing support and maintenance

Get a free quote for your e-commerce project today!
    `,
    category: "E-Commerce",
    tags: ["E-Commerce", "Shopify", "WooCommerce", "Online Store", "Pricing"],
    author: {
      name: "Vikram Singh",
      role: "E-Commerce Specialist",
    },
    publishedAt: "2024-11-20",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "5",
    slug: "ui-ux-design-trends-2024",
    title: "Top 10 UI/UX Design Trends Dominating 2024",
    excerpt: "Stay ahead of the curve with these cutting-edge UI/UX design trends that are shaping digital experiences in 2024.",
    content: `
## The Evolution of Digital Design

UI/UX design continues to evolve rapidly. Here are the trends defining 2024.

## 1. AI-Powered Personalization
Interfaces that adapt to user behavior in real-time, showing personalized content and layouts.

## 2. Micro-Interactions
Subtle animations that provide feedback and delight users:
- Button hover effects
- Loading animations
- Success confirmations

## 3. Dark Mode as Standard
Not just an option anymore—dark mode is expected. Design for both light and dark themes.

## 4. 3D Elements and Illustrations
Depth and dimension add visual interest without overwhelming users.

## 5. Glassmorphism
Frosted glass effects create depth and hierarchy in interfaces.

## 6. Voice User Interfaces (VUI)
Designing for voice interactions alongside traditional UI.

## 7. Accessibility-First Design
WCAG compliance is no longer optional:
- Color contrast
- Screen reader support
- Keyboard navigation

## 8. Minimalist Navigation
Simplified menus and clear information architecture.

## 9. Scroll-Triggered Animations
Content that animates as users scroll, creating engaging experiences.

## 10. Data Visualization
Beautiful, interactive charts and graphs that tell stories.

## How We Apply These Trends

At Web Nova Crew, our design team stays current with industry trends while focusing on what matters most: user experience that drives conversions.

Contact us for a UI/UX audit of your existing product.
    `,
    category: "UI/UX Design",
    tags: ["UI Design", "UX Design", "Design Trends", "Web Design", "User Experience"],
    author: {
      name: "Neha Gupta",
      role: "Design Lead",
    },
    publishedAt: "2024-11-15",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "6",
    slug: "how-to-choose-web-development-company-india",
    title: "How to Choose the Right Web Development Company in India: Complete Guide",
    excerpt: "A comprehensive checklist for selecting the best web development partner in India. Avoid common mistakes and find your ideal tech partner.",
    content: `
## Finding Your Perfect Development Partner

With thousands of web development companies in India, choosing the right one can be overwhelming. Here's your complete guide.

## Key Factors to Evaluate

### 1. Portfolio & Experience
Look for:
- Projects similar to yours
- Diverse industry experience
- Recent work (last 2 years)
- Live websites you can test

### 2. Technical Expertise
Ensure they're proficient in:
- Modern frameworks (React, Next.js, Vue)
- Mobile development (Flutter, React Native)
- Backend technologies (Node.js, Python)
- Cloud platforms (AWS, Google Cloud)

### 3. Client Reviews & Testimonials
Check:
- Google Reviews
- Clutch.co ratings
- LinkedIn recommendations
- Case studies with metrics

### 4. Communication & Process
Evaluate:
- Response time
- Project management tools
- Regular updates
- English proficiency

### 5. Pricing & Transparency
Beware of:
- Prices too good to be true
- Hidden costs
- Unclear scope
- No written contracts

## Red Flags to Avoid

❌ No portfolio or fake projects
❌ Unwilling to sign NDA
❌ No dedicated project manager
❌ Offshore-only team with no accountability
❌ Pushy sales tactics

## Questions to Ask

1. Who will work on my project?
2. What's your development process?
3. How do you handle changes in scope?
4. What happens after launch?
5. Can I speak with past clients?

## Why Companies Choose Web Nova Crew

✅ 50+ successful projects
✅ 100% client satisfaction
✅ Transparent pricing
✅ Dedicated project managers
✅ Post-launch support

Ready to start your project? Contact us for a free consultation.
    `,
    category: "Business",
    tags: ["Web Development", "Outsourcing", "India", "Business", "Guide"],
    author: {
      name: "Rahul Sharma",
      role: "Lead Developer",
    },
    publishedAt: "2024-11-10",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "7",
    slug: "website-speed-optimization-guide",
    title: "Complete Website Speed Optimization Guide: Achieve 90+ PageSpeed Score",
    excerpt: "Learn how to dramatically improve your website's loading speed with our comprehensive optimization techniques used on 50+ client projects.",
    content: `
## Why Speed Matters

- 53% of users abandon sites that take over 3 seconds to load
- Google uses page speed as a ranking factor
- Every 1-second delay reduces conversions by 7%

## Quick Wins (Do These First)

### 1. Optimize Images
- Use WebP format
- Implement lazy loading
- Serve responsive images
- Compress without quality loss

### 2. Enable Compression
- GZIP or Brotli compression
- Minify CSS and JavaScript
- Remove unused code

### 3. Leverage Browser Caching
Set appropriate cache headers for:
- Static assets (1 year)
- HTML (no-cache or short)
- API responses (varies)

## Advanced Optimizations

### 4. Use a CDN
Cloudflare, AWS CloudFront, or similar for:
- Global distribution
- DDoS protection
- Edge caching

### 5. Optimize Critical Rendering Path
- Inline critical CSS
- Defer non-critical JavaScript
- Preload important resources

### 6. Database Optimization
- Index frequently queried columns
- Use query caching
- Optimize slow queries

### 7. Server-Side Improvements
- Use HTTP/2 or HTTP/3
- Enable keep-alive connections
- Optimize server response time

## Tools We Use

- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

## Results We've Achieved

For our clients, we've improved:
- Average load time: 6s → 1.5s
- PageSpeed score: 35 → 95
- Bounce rate: -40%
- Conversions: +25%

Need help optimizing your website? Contact Web Nova Crew for a free performance audit.
    `,
    category: "Technology",
    tags: ["Performance", "Speed", "Optimization", "Core Web Vitals", "SEO"],
    author: {
      name: "Amit Kumar",
      role: "SEO Specialist",
    },
    publishedAt: "2024-11-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "8",
    slug: "startup-mvp-development-guide",
    title: "MVP Development for Startups: Build, Launch, and Iterate in 8 Weeks",
    excerpt: "A practical guide to building your Minimum Viable Product quickly and cost-effectively. Learn from our experience launching 20+ startup MVPs.",
    content: `
## What is an MVP?

A Minimum Viable Product is the simplest version of your product that delivers core value to users while allowing you to learn and iterate.

## Why Build an MVP?

- Validate your idea before full investment
- Get to market faster
- Reduce development costs
- Gather real user feedback
- Attract investors with traction

## Our 8-Week MVP Process

### Week 1-2: Discovery & Planning
- Define core features (must-have vs nice-to-have)
- User story mapping
- Technical architecture
- Design wireframes

### Week 3-4: Design
- UI/UX design
- Prototype creation
- User testing
- Design refinement

### Week 5-7: Development
- Sprint-based development
- Daily standups
- Continuous integration
- Regular demos

### Week 8: Launch
- QA testing
- Performance optimization
- Deployment
- Launch support

## MVP Cost Breakdown

| Component | Cost Range |
|-----------|------------|
| Discovery | ₹50,000 - ₹1,00,000 |
| Design | ₹75,000 - ₹1,50,000 |
| Development | ₹2,00,000 - ₹5,00,000 |
| Testing & Launch | ₹50,000 - ₹1,00,000 |
| **Total** | **₹3,75,000 - ₹8,50,000** |

## Common MVP Mistakes

❌ Building too many features
❌ Perfectionism over progress
❌ Ignoring user feedback
❌ No analytics from day one
❌ Choosing wrong tech stack

## Success Stories

We've helped startups like:
- HealthTech app: 10,000 users in 3 months
- EdTech platform: ₹50L funding after MVP
- FinTech solution: Acquired within 18 months

Ready to build your MVP? Let's talk!
    `,
    category: "Business",
    tags: ["Startup", "MVP", "Product Development", "Entrepreneurship", "Lean"],
    author: {
      name: "Vikram Singh",
      role: "E-Commerce Specialist",
    },
    publishedAt: "2024-10-30",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000",
  },
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getPostsByCategory = (category: string) => 
  category === "all" ? blogPosts : blogPosts.filter(post => post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === category);
