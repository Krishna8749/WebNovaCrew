export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  services: string[];
  technologies: string[];
  heroImage: string;
  logo?: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  gallery?: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "fintech-dashboard-pro",
    title: "FinTech Dashboard Pro: Real-Time Analytics Platform",
    client: "FinanceHub Technologies",
    industry: "FinTech",
    duration: "4 months",
    services: ["Web Development", "UI/UX Design", "Backend Development", "Cloud Infrastructure"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js", "AWS", "Redis"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    challenge: `FinanceHub Technologies needed a comprehensive financial analytics dashboard that could handle real-time data from multiple sources, serve 50,000+ concurrent users, and provide instant insights for traders and financial analysts.

Their existing system was slow, couldn't scale, and lacked the visualization capabilities needed for complex financial data. They needed a complete rebuild with modern technology.

Key challenges included:
- Processing millions of data points in real-time
- Creating intuitive visualizations for complex financial data
- Ensuring 99.99% uptime for critical trading decisions
- Meeting strict financial industry compliance requirements`,
    solution: `We built a cutting-edge analytics platform using React and TypeScript for the frontend, with D3.js powering advanced data visualizations. The backend was architected with Node.js microservices, PostgreSQL for persistent storage, and Redis for real-time caching.

Our approach included:
- **Microservices Architecture**: Scalable, independent services for different data streams
- **Real-Time Processing**: WebSocket connections for instant data updates
- **Advanced Caching**: Redis cluster for sub-millisecond response times
- **Custom Visualizations**: Interactive charts, heatmaps, and trend analysis tools
- **Role-Based Access**: Granular permissions for different user types
- **Compliance Features**: Audit logs, data encryption, and regulatory reporting`,
    results: [
      { metric: "Active Users", value: "50,000+", description: "Concurrent users supported without performance degradation" },
      { metric: "Load Time", value: "< 1.5s", description: "Average page load time, down from 8 seconds" },
      { metric: "Uptime", value: "99.99%", description: "System availability over 12 months" },
      { metric: "Data Processing", value: "1M+", description: "Events processed per minute in real-time" },
    ],
    testimonial: {
      quote: "Web Nova Crew delivered beyond our expectations. The platform handles our massive data volumes effortlessly, and our users love the intuitive interface. This has become a competitive advantage for us.",
      author: "Michael Chen",
      role: "CTO",
      company: "FinanceHub Technologies",
    },
    featured: true,
  },
  {
    id: "2",
    slug: "luxe-estate-real-estate-platform",
    title: "Luxe Estate: Premium Real Estate Marketplace",
    client: "Luxe Estate Properties",
    industry: "Real Estate",
    duration: "3 months",
    services: ["Web Development", "Mobile App", "SEO", "UI/UX Design"],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Mapbox", "AWS", "Elasticsearch"],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600",
    challenge: `Luxe Estate Properties, a premium real estate company, was struggling with an outdated website that couldn't showcase their luxury properties effectively. Their lead generation was poor, and they were losing potential buyers to competitors with better digital presence.

They needed:
- A stunning platform that matched their premium brand
- Virtual tour integration for remote property viewing
- Advanced search with map-based property discovery
- Lead management system for their sales team
- Mobile app for on-the-go property browsing`,
    solution: `We created a comprehensive real estate platform with Next.js for SEO-optimized web presence and React Native for cross-platform mobile apps.

Key features delivered:
- **Immersive Property Listings**: High-resolution galleries, 360° virtual tours, and video walkthroughs
- **Smart Search**: AI-powered recommendations based on user preferences
- **Map Integration**: Mapbox-powered property discovery with neighborhood insights
- **Lead Management**: CRM integration with automated follow-ups
- **Agent Portal**: Dashboard for property management and client communication
- **SEO Optimization**: Schema markup, optimized content, and fast load times`,
    results: [
      { metric: "Lead Generation", value: "400%", description: "Increase in qualified leads within 6 months" },
      { metric: "Organic Traffic", value: "350%", description: "Growth in organic search traffic" },
      { metric: "Time on Site", value: "5.2 min", description: "Average session duration, up from 1.8 minutes" },
      { metric: "Mobile Users", value: "60%", description: "Traffic from mobile app and responsive web" },
    ],
    testimonial: {
      quote: "The platform has transformed how we do business. Our agents close deals faster, and clients love the virtual tour feature. We've seen a 400% increase in leads since launch.",
      author: "Vikram Singh",
      role: "Managing Director",
      company: "Luxe Estate Properties",
    },
    featured: true,
  },
  {
    id: "3",
    slug: "healthcare-connect-telemedicine-app",
    title: "HealthCare Connect: Telemedicine & Patient Management",
    client: "HealthFirst Clinics",
    industry: "Healthcare",
    duration: "5 months",
    services: ["Mobile App Development", "Web Development", "Backend Development", "HIPAA Compliance"],
    technologies: ["Flutter", "Node.js", "PostgreSQL", "WebRTC", "Firebase", "AWS", "Twilio"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    challenge: `HealthFirst Clinics, a network of 50+ healthcare facilities, needed a comprehensive telemedicine solution during the pandemic. Their existing appointment system was manual, and they had no way to conduct remote consultations.

Requirements included:
- HIPAA-compliant video consultations
- Electronic health records integration
- Prescription management
- Appointment scheduling and reminders
- Payment processing
- Multi-language support for diverse patient base`,
    solution: `We developed a complete healthcare ecosystem with Flutter for cross-platform mobile apps and a robust Node.js backend.

Platform features:
- **Secure Video Consultations**: WebRTC-powered, end-to-end encrypted video calls
- **EHR Integration**: Seamless connection with existing health record systems
- **Smart Scheduling**: AI-powered appointment optimization
- **E-Prescriptions**: Digital prescriptions with pharmacy integration
- **Payment Gateway**: Secure payment processing with insurance claim support
- **Patient Portal**: Health history, reports, and medication tracking
- **Doctor Dashboard**: Patient management, schedule, and analytics`,
    results: [
      { metric: "App Downloads", value: "100,000+", description: "Downloads across iOS and Android" },
      { metric: "Consultations", value: "50,000+", description: "Successful telemedicine consultations" },
      { metric: "Patient Satisfaction", value: "4.8/5", description: "Average app store rating" },
      { metric: "No-Show Rate", value: "-60%", description: "Reduction in missed appointments" },
    ],
    testimonial: {
      quote: "This app has revolutionized our practice. We can now serve patients across India, and our doctors are more efficient than ever. The HIPAA compliance gave us peace of mind.",
      author: "Dr. Amit Patel",
      role: "Chief Medical Officer",
      company: "HealthFirst Clinics",
    },
    featured: true,
  },
  {
    id: "4",
    slug: "ecoshop-sustainable-marketplace",
    title: "EcoShop: Sustainable Products Marketplace",
    client: "EcoShop India",
    industry: "E-Commerce",
    duration: "3 months",
    services: ["E-Commerce Development", "UI/UX Design", "SEO", "Performance Optimization"],
    technologies: ["Shopify Plus", "React", "Node.js", "Stripe", "Algolia", "Klaviyo"],
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600",
    challenge: `EcoShop India wanted to create India's leading sustainable products marketplace. Their existing Shopify store was basic, slow, and couldn't handle their growing catalog of 5,000+ eco-friendly products.

They needed:
- Custom design reflecting their eco-friendly brand
- Advanced filtering for sustainability certifications
- Subscription boxes for recurring revenue
- Carbon footprint calculator for products
- Integration with multiple vendors`,
    solution: `We built a custom Shopify Plus solution with React-powered frontend components for enhanced interactivity.

Key implementations:
- **Custom Theme**: Unique design with sustainability-focused UX
- **Smart Filters**: Filter by certification, material, carbon footprint
- **Subscription System**: Recurring eco-boxes with flexible scheduling
- **Vendor Portal**: Multi-vendor management with commission tracking
- **Carbon Calculator**: Real-time carbon footprint display per product
- **Algolia Search**: Lightning-fast search with typo tolerance`,
    results: [
      { metric: "Conversion Rate", value: "250%", description: "Increase in checkout completion" },
      { metric: "Average Order Value", value: "+45%", description: "Growth in cart value" },
      { metric: "Page Speed", value: "95/100", description: "Google PageSpeed score" },
      { metric: "Subscription Revenue", value: "₹15L/month", description: "Recurring revenue from eco-boxes" },
    ],
    testimonial: {
      quote: "Our new store perfectly represents our brand values. The subscription feature alone has added ₹15 lakhs in monthly recurring revenue. Web Nova Crew understood our vision completely.",
      author: "Priya Sharma",
      role: "Founder",
      company: "EcoShop India",
    },
  },
  {
    id: "5",
    slug: "edulearn-lms-platform",
    title: "EduLearn: Interactive Learning Management System",
    client: "EduLearn Technologies",
    industry: "EdTech",
    duration: "4 months",
    services: ["Web Development", "Mobile App", "Video Streaming", "Analytics"],
    technologies: ["React", "React Native", "Django", "PostgreSQL", "AWS", "WebSocket", "FFmpeg"],
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600",
    challenge: `EduLearn Technologies needed a comprehensive LMS platform to serve 200+ schools across India. Their requirements included live classes, recorded content, assignments, and detailed analytics for teachers and parents.

Challenges:
- Supporting 100,000+ concurrent students during peak hours
- Low-bandwidth optimization for rural areas
- Multi-language content delivery
- Gamification to improve engagement
- Parent-teacher communication portal`,
    solution: `We developed a scalable LMS with React web app and React Native mobile apps, powered by Django backend.

Features delivered:
- **Live Classes**: WebRTC-based live streaming with chat and Q&A
- **Adaptive Streaming**: Multiple quality levels for varying bandwidths
- **Gamification**: Points, badges, leaderboards, and rewards
- **Assignment System**: Auto-grading, plagiarism detection, feedback
- **Analytics Dashboard**: Student progress, engagement metrics, predictions
- **Parent Portal**: Real-time updates, report cards, communication`,
    results: [
      { metric: "Schools Onboarded", value: "200+", description: "Educational institutions using the platform" },
      { metric: "Student Engagement", value: "+85%", description: "Increase in course completion rates" },
      { metric: "Concurrent Users", value: "100,000+", description: "Peak simultaneous users supported" },
      { metric: "Content Hours", value: "10,000+", description: "Hours of educational content delivered" },
    ],
    testimonial: {
      quote: "EduLearn has transformed education delivery for our partner schools. The platform handles massive scale effortlessly, and students love the gamification features.",
      author: "Rajesh Kumar",
      role: "CEO",
      company: "EduLearn Technologies",
    },
  },
  {
    id: "6",
    slug: "travelgo-booking-platform",
    title: "TravelGo: Flight & Hotel Booking Engine",
    client: "TravelGo India",
    industry: "Travel",
    duration: "5 months",
    services: ["Web Development", "API Integration", "Performance Optimization", "SEO"],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Elasticsearch", "AWS", "Amadeus API"],
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600",
    challenge: `TravelGo India wanted to compete with major OTAs like MakeMyTrip and Goibibo. They needed a fast, reliable booking platform that could aggregate flights and hotels from multiple sources and provide competitive pricing.

Requirements:
- Real-time inventory from multiple GDS systems
- Price comparison across suppliers
- Complex search with flexible dates
- Loyalty program integration
- B2B portal for travel agents`,
    solution: `We built a high-performance booking engine with React frontend and Node.js microservices backend.

Key features:
- **Multi-GDS Integration**: Amadeus, Sabre, and direct airline APIs
- **Smart Caching**: Redis-powered caching for instant search results
- **Price Alerts**: Automated notifications for price drops
- **Flexible Search**: Calendar view, nearby airports, alternative dates
- **B2B Portal**: White-label solution for travel agents
- **Loyalty System**: Points earning and redemption`,
    results: [
      { metric: "Monthly Bookings", value: "₹2Cr+", description: "Gross booking value per month" },
      { metric: "Search Speed", value: "< 2s", description: "Average search response time" },
      { metric: "Conversion Rate", value: "4.5%", description: "Search to booking conversion" },
      { metric: "B2B Partners", value: "500+", description: "Travel agents using the platform" },
    ],
    testimonial: {
      quote: "Web Nova Crew built us a platform that rivals the big players. Our search is faster than competitors, and the B2B portal has become a significant revenue stream.",
      author: "Ankit Mehta",
      role: "Founder",
      company: "TravelGo India",
    },
  },
];

export const getFeaturedCaseStudies = () => caseStudies.filter(cs => cs.featured);
export const getCaseStudyBySlug = (slug: string) => caseStudies.find(cs => cs.slug === slug);
export const getCaseStudiesByIndustry = (industry: string) => 
  caseStudies.filter(cs => cs.industry.toLowerCase() === industry.toLowerCase());
