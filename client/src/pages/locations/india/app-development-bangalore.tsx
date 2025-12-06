import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, 
  MessageSquare, Cpu, Globe, Database, Briefcase, Lightbulb,
  Target, Layers, Settings, BarChart3, GraduationCap, Heart,
  ShoppingCart, Gamepad2, Leaf, Microscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentBangalore() {
  // Detailed Services with comprehensive descriptions
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Bangalore's tech-savvy Android user base. Our Android development team creates high-performance apps optimized for the latest devices used by Bangalore's young, tech-forward population. We implement Material Design 3, Jetpack Compose for modern UIs, and ensure compatibility across the diverse range of Android devices from budget to flagship. Our apps are optimized for Bangalore's varying network conditions from high-speed fiber in tech parks to mobile networks in outer areas.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Jetpack Compose", "Material Design 3", "Offline-First", "Firebase Integration", "Google Pay/UPI", "Play Store Optimization"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Bangalore's affluent iPhone user base concentrated in areas like Koramangala, Indiranagar, and Whitefield. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, WidgetKit, and App Intents. Our iOS apps are designed for the premium experience that Bangalore's tech professionals and startup founders expect, with seamless integration with Apple's ecosystem.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "CloudKit Sync", "TestFlight Beta"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Bangalore startups looking to launch quickly on both platforms while optimizing development costs and time-to-market. Our Flutter apps achieve 60fps animations, feel indistinguishable from native apps, and are ideal for MVPs that need to impress investors. We use Flutter's latest features including Material 3, Impeller rendering, and platform-specific adaptations.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Bangalore's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications, integrate with existing React codebases, and enable rapid development cycles. Perfect for enterprises looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing with Web", "Native Modules", "Expo Support", "OTA Updates", "Hermes Engine"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development specifically designed for Bangalore's startup ecosystem. We understand what VCs and angel investors look for - clean code, scalable architecture, and impressive demos. Our MVP process is optimized for speed without sacrificing quality, helping you validate your idea quickly and iterate based on user feedback. We've helped 50+ Bangalore startups build MVPs that secured funding from top VCs.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-6 Week Delivery", "Investor-Ready", "Scalable Architecture", "Analytics Built-in", "Pitch Deck Support", "Technical Due Diligence Ready"]
    },
    { 
      title: "SaaS App Development", 
      desc: "Cloud-native SaaS product development for Bangalore's thriving B2B software ecosystem. We build multi-tenant SaaS applications with subscription management, user analytics, API-first architecture, and enterprise-grade security. Our SaaS apps are designed for global scale from day one, with infrastructure on AWS/GCP that can handle growth from 100 to 100,000 users seamlessly.",
      icon: <Database className="w-6 h-6" />,
      features: ["Multi-tenant Architecture", "Subscription Billing", "API-First Design", "SSO/SAML", "Usage Analytics", "White-labeling"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Bangalore's innovation-driven companies. We integrate GPT-4 and Claude for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for image/video analysis, and recommendation engines for personalization. Our AI apps leverage Bangalore's deep tech ecosystem and can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4/Claude Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Recommendation Engines", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Bangalore's large IT companies and MNCs. We build apps that integrate with existing enterprise systems (SAP, Oracle, Salesforce), comply with corporate security policies, and handle the scale requirements of large organizations. Our enterprise apps include comprehensive admin panels, role-based access control, audit logging, and enterprise SSO integration.",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Compliance Ready", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries with descriptions
  const industries = [
    { name: "IT & Software Companies", desc: "Internal tools, employee apps, and client-facing products for Bangalore's 10,000+ IT companies. We've built apps for companies ranging from startups to Fortune 500 MNCs in Electronic City and Whitefield.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Startups & SaaS", desc: "MVPs, growth-stage products, and enterprise SaaS for Bangalore's 4,000+ startups. From seed-stage MVPs to Series B products, we understand the startup journey.", icon: <Rocket className="w-5 h-5" /> },
    { name: "E-commerce & D2C", desc: "Online shopping apps, D2C brand apps, and marketplace platforms for Bangalore's retail revolution. We've built apps handling lakhs of orders monthly.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "Digital banking, payment apps, lending platforms, and wealth management for Bangalore's fintech hub. RBI-compliant apps with bank-grade security.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "HealthTech & Biotech", desc: "Telemedicine apps, health tracking, hospital management, and biotech research apps for Bangalore's healthcare innovation cluster.", icon: <Heart className="w-5 h-5" /> },
    { name: "EdTech & E-learning", desc: "Learning platforms, course apps, assessment tools, and virtual classroom solutions for Bangalore's EdTech unicorns and startups.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "AgriTech & CleanTech", desc: "Farm management apps, supply chain solutions, and sustainability platforms for Bangalore's growing AgriTech and CleanTech ecosystem.", icon: <Leaf className="w-5 h-5" /> },
    { name: "Gaming & Entertainment", desc: "Mobile games, streaming apps, and entertainment platforms for Bangalore's gaming studios and content creators.", icon: <Gamepad2 className="w-5 h-5" /> }
  ];

  // Detailed Areas with descriptions
  const areas = [
    { name: "Koramangala", type: "Startup Hub", desc: "India's startup capital with 1,500+ startups, VCs, and accelerators. Home to Flipkart's early office and countless unicorn origin stories." },
    { name: "Indiranagar", type: "Premium Tech", desc: "Upscale neighborhood with tech executives, premium startups, and creative agencies. High concentration of iOS users and premium app consumers." },
    { name: "Whitefield", type: "IT Corridor", desc: "Major IT hub with ITPL, Prestige Tech Park, and offices of Google, Microsoft, SAP. Enterprise app development center." },
    { name: "Electronic City", type: "Tech Park", desc: "India's first IT park with Infosys, Wipro, and 200+ tech companies. Large-scale enterprise and B2B app development." },
    { name: "HSR Layout", type: "Startup Cluster", desc: "Emerging startup hub with affordable co-working spaces, young founders, and early-stage companies. MVP and seed-stage app development." },
    { name: "Marathahalli", type: "IT Hub", desc: "Dense IT corridor with mid-size tech companies, BPOs, and growing startup scene. Cost-effective app development zone." },
    { name: "Bellandur", type: "Tech Corridor", desc: "Outer Ring Road tech corridor with RMZ Ecoworld, Embassy Tech Village. Mix of startups and enterprises." },
    { name: "Sarjapur Road", type: "Growing Hub", desc: "Rapidly developing tech corridor with new IT parks, startups, and residential tech community." },
    { name: "Hebbal", type: "North Bangalore", desc: "Manyata Tech Park area with major IT companies and growing startup ecosystem in North Bangalore." },
    { name: "Manyata Tech Park", type: "Tech Campus", desc: "One of India's largest tech parks with 50,000+ tech professionals. Enterprise and B2B app development." },
    { name: "Outer Ring Road", type: "Tech Belt", desc: "Bangalore's tech belt connecting major IT hubs. High concentration of tech companies and startups." },
    { name: "JP Nagar", type: "South Bangalore", desc: "Established residential area with growing tech presence, freelancers, and small tech companies." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Startup Ecosystem Expert", 
      desc: "We've been part of Bangalore's startup ecosystem for years. We understand the pressure of runway, the importance of quick iterations, and what VCs look for in technical due diligence. Our team has worked with startups from idea stage to Series C, and we know how to build apps that scale with your growth. We speak the language of startups - MVPs, pivots, product-market fit, and growth metrics.",
      icon: <Lightbulb className="w-5 h-5" />,
      stats: "50+ Startups Served"
    },
    { 
      title: "Tech-First Approach", 
      desc: "Bangalore expects technical excellence, and we deliver. Our stack includes Flutter, React Native, Kotlin, Swift, Node.js, Python, and cloud-native AWS/GCP infrastructure. We follow industry best practices - clean architecture, comprehensive testing, CI/CD pipelines, and infrastructure as code. Our code passes technical due diligence from the most demanding VCs and acquirers.",
      icon: <Code2 className="w-5 h-5" />,
      stats: "Modern Tech Stack"
    },
    { 
      title: "Investor-Ready Apps", 
      desc: "We've helped startups raise over ₹100Cr collectively with apps we've built. We understand what makes an app investor-ready: clean codebase, scalable architecture, impressive UI/UX, and solid metrics infrastructure. We can also support you during technical due diligence, explaining architecture decisions and demonstrating code quality to potential investors.",
      icon: <TrendingUp className="w-5 h-5" />,
      stats: "₹100Cr+ Raised by Clients"
    },
    { 
      title: "Competitive Pricing", 
      desc: "Bangalore agencies in Koramangala and Indiranagar charge premium rates. We offer the same quality at 30-40% lower costs through efficient processes and an experienced team. For bootstrapped startups, this means more runway. For funded startups, this means better unit economics. We're transparent about pricing with no hidden costs or scope creep surprises.",
      icon: <Star className="w-5 h-5" />,
      stats: "30-40% Cost Savings"
    },
    { 
      title: "Agile Development", 
      desc: "Bangalore moves fast, and so do we. Our agile process with 2-week sprints means you see working features every two weeks. We can pivot quickly based on user feedback or market changes. For urgent projects, we've delivered MVPs in as little as 2-3 weeks. Our project managers understand startup timelines and ensure we meet your demo days and launch dates.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "2-Week Sprint Cycles"
    },
    { 
      title: "Scale-Ready Architecture", 
      desc: "We build apps designed to scale from day one. Our architecture handles growth from 100 to 1 million users without major rewrites. We use cloud-native approaches with auto-scaling, load balancing, and CDN distribution. When your startup takes off, your app will be ready. We've built apps that handle millions of daily active users and process crores in transactions.",
      icon: <Database className="w-5 h-5" />,
      stats: "Built for 1M+ Users"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup MVP", 
      price: "₹50,000 - ₹1,50,000", 
      ideal: "Pre-seed & seed stage startups",
      features: [
        "Single platform (Android OR iOS)",
        "Up to 12 screens",
        "Core features only",
        "Basic UI/UX design",
        "User authentication",
        "Analytics integration",
        "3-4 weeks delivery",
        "30 days support",
        "Source code ownership"
      ],
      popular: false
    },
    { 
      tier: "Growth App", 
      price: "₹1,50,000 - ₹3,50,000", 
      ideal: "Funded startups & growing companies",
      features: [
        "Android + iOS apps",
        "Up to 25 screens",
        "Full feature set",
        "Premium UI/UX design",
        "Payment integration",
        "Admin dashboard",
        "Push notifications",
        "6-8 weeks delivery",
        "90 days support",
        "Documentation included"
      ],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹3,50,000 - ₹8,00,000+", 
      ideal: "Series A+ startups & enterprises",
      features: [
        "Android + iOS + Web",
        "Unlimited screens",
        "Complex features",
        "AI/ML integration",
        "Custom backend",
        "Third-party integrations",
        "Enterprise security",
        "10-14 weeks delivery",
        "1 year support",
        "Dedicated team"
      ],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "HealthTech Telemedicine Platform",
      client: "Bangalore HealthTech Startup (Series A)",
      description: "Built a comprehensive telemedicine platform with video consultations, prescription management, pharmacy integration, and health records. The app scaled to 100,000+ monthly consultations and helped the startup raise Series A funding.",
      results: ["100K+ Monthly Consultations", "₹25Cr Series A Raised", "4.7 App Store Rating", "50+ Doctor Partners"],
      tech: ["Flutter", "Node.js", "WebRTC", "AWS", "PostgreSQL"]
    },
    {
      title: "EdTech Learning Platform",
      client: "Bangalore EdTech Company",
      description: "Developed a gamified learning platform for K-12 students with interactive lessons, assessments, progress tracking, and parent dashboards. The app achieved 500,000+ downloads and 40% daily active user rate.",
      results: ["500K+ Downloads", "40% DAU Rate", "4.5 Play Store Rating", "200+ Schools Onboarded"],
      tech: ["React Native", "Python", "Firebase", "AWS Lambda", "MongoDB"]
    },
    {
      title: "B2B SaaS Sales Platform",
      client: "Koramangala SaaS Startup",
      description: "Created a mobile-first B2B sales enablement platform with CRM integration, proposal generation, e-signatures, and sales analytics. The app is used by 10,000+ sales professionals across 200+ companies.",
      results: ["10,000+ Active Users", "200+ Enterprise Clients", "30% Sales Productivity Increase", "₹15Cr ARR"],
      tech: ["Kotlin", "Swift", "Node.js", "Salesforce API", "AWS"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "Why should Bangalore startups choose Web Nova Crew for app development?",
      answer: "We understand Bangalore's startup culture deeply - the pressure of runway, the importance of quick iterations, and what VCs look for in technical due diligence. We've worked with 50+ startups from pre-seed to Series C, helping them build MVPs that secured funding from top VCs like Sequoia, Accel, and Matrix. Our pricing is 30-40% lower than typical Koramangala and Indiranagar agencies while maintaining Silicon Valley quality. We speak startup language and can support you through fundraising, pivots, and scale-up phases."
    },
    {
      question: "How much does app development cost in Bangalore?",
      answer: "App development in Bangalore costs ₹50,000 to ₹8,00,000+ depending on complexity. Startup MVPs with core features cost ₹50,000-₹1,50,000 and take 3-4 weeks. Growth apps with full features for both platforms cost ₹1,50,000-₹3,50,000. Enterprise apps with AI, complex backends, and integrations cost ₹3,50,000-₹8,00,000+. We offer competitive pricing compared to agencies in Whitefield, Electronic City, and Koramangala while delivering premium quality."
    },
    {
      question: "Do you work with Bangalore VCs and accelerators?",
      answer: "Yes! We've built apps for startups in Y Combinator, Sequoia Surge, Accel Atoms, Matrix Partners portfolio, and NASSCOM 10K Startups. We understand what investors look for during technical due diligence - clean code, scalable architecture, proper documentation, and security best practices. We can help you prepare for investor demos and support you during the due diligence process."
    },
    {
      question: "How fast can you build an MVP for my Bangalore startup?",
      answer: "We can build a functional MVP in 3-6 weeks depending on complexity. For pitch-ready demos needed for investor meetings, we can deliver in 2-3 weeks with focused scope. Our agile process with 2-week sprints ensures you see progress quickly and can provide feedback throughout. We've helped startups meet Demo Day deadlines for accelerators like Y Combinator and Sequoia Surge."
    },
    {
      question: "Can you meet in person in Bangalore for project discussions?",
      answer: "Absolutely! We regularly visit Bangalore for client meetings, workshops, and project kickoffs. We can meet at your office in Koramangala, Indiranagar, Whitefield, HSR Layout, Electronic City, or any convenient location. We also do working sessions at co-working spaces like WeWork, 91springboard, and Awfis. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Do you provide fractional CTO services for non-technical founders?",
      answer: "Yes! For non-technical founders, we offer fractional CTO services including: technical strategy and roadmap planning, architecture decisions and technology selection, hiring guidance for building your tech team, investor pitch support and technical due diligence preparation, vendor evaluation and management, and ongoing technical advisory. This is especially valuable for first-time founders navigating Bangalore's tech ecosystem."
    },
    {
      question: "What technologies do you use for Bangalore startup apps?",
      answer: "We use modern, investor-approved technologies. For mobile: Flutter for cross-platform MVPs, Kotlin for Android, Swift for iOS, React Native for teams with JavaScript expertise. For backend: Node.js for real-time apps, Python for AI/ML, Go for high-performance systems. For cloud: AWS and GCP with serverless architectures for cost optimization. For databases: PostgreSQL, MongoDB, Redis, Firebase. We choose technologies based on your specific needs and long-term scalability."
    },
    {
      question: "Can you help with App Store Optimization for the Bangalore market?",
      answer: "Yes, we provide comprehensive ASO services. This includes keyword research for Indian app stores, localized descriptions in English and regional languages, screenshot and video optimization, review management strategies, and A/B testing for store listings. We understand what works in the Indian market and can help you rank higher in Play Store and App Store searches."
    },
    {
      question: "Do you build apps for Bangalore's IT companies and enterprises?",
      answer: "Yes, we work with IT companies and enterprises across Whitefield, Electronic City, and Manyata Tech Park. We build internal tools, employee apps, client-facing products, and B2B solutions. Our enterprise apps integrate with existing systems (SAP, Oracle, Salesforce), comply with corporate security policies, and include features like SSO, audit logging, and role-based access control."
    },
    {
      question: "What about app security for fintech and healthcare startups?",
      answer: "Security is paramount for regulated industries. We implement bank-grade security for fintech apps: 256-bit encryption, secure authentication, certificate pinning, code obfuscation, and compliance with RBI guidelines. For healthcare apps, we ensure HIPAA-equivalent security, encrypted health records, and secure telemedicine features. We can also arrange third-party security audits and penetration testing."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates for new Android/iOS versions, security patches, minor feature enhancements, server monitoring and uptime management, and analytics review with optimization recommendations. We offer flexible plans from basic support to dedicated team arrangements for high-growth startups."
    },
    {
      question: "Can you scale apps for millions of users?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, CDN distribution, and database optimization. We've built apps that handle millions of daily active users, including consumer apps with viral growth and B2B platforms with enterprise clients. We use technologies like Redis for caching, message queues for async processing, and microservices for independent scaling."
    },
    {
      question: "Do you sign NDAs for Bangalore startup projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. We understand that startup ideas are valuable and treat confidentiality seriously. Many of our clients are in stealth mode before launch."
    },
    {
      question: "What is your development process for Bangalore projects?",
      answer: "Our process is optimized for Bangalore's startup pace: 1) Discovery (1 week): Requirements, user research, technical planning. 2) Design (1-2 weeks): Wireframes, UI/UX design, prototyping. 3) Development (3-10 weeks): Agile sprints with bi-weekly demos. 4) Testing (1 week): QA, performance, security testing. 5) Launch: Store submission, deployment, monitoring. 6) Iterate: Ongoing improvements based on user feedback. You're involved at every stage with daily Slack updates and weekly calls."
    },
    {
      question: "What makes you different from other Bangalore app development companies?",
      answer: "Three key differentiators: 1) Startup DNA: We're not just developers; we understand startup metrics, investor expectations, and growth challenges. We've been part of the Bangalore ecosystem and know what it takes to succeed. 2) Quality at Startup Prices: We deliver Koramangala-quality work at 30-40% lower costs through efficient processes. 3) Long-term Partnership: We're not just building an app; we're helping build your company. Many clients have worked with us across multiple funding rounds and products."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery Sprint", duration: "1 Week", desc: "Intensive discovery to understand your startup, users, and goals. We analyze competitors, define MVP scope, plan technical architecture, and create a detailed roadmap. You get a clear project plan and cost estimate." },
    { step: "2", title: "Design Sprint", duration: "1-2 Weeks", desc: "Rapid UI/UX design with wireframes and high-fidelity mockups. We create investor-ready designs that impress users and VCs. Interactive prototypes let you test the experience before development." },
    { step: "3", title: "Development Sprints", duration: "3-10 Weeks", desc: "Agile development in 2-week sprints with demos after each sprint. You see working features regularly and can pivot based on feedback. We use CI/CD for continuous integration and deployment." },
    { step: "4", title: "Testing & QA", duration: "1 Week", desc: "Comprehensive testing including functional testing, performance testing, security testing, and device testing. We ensure your app works flawlessly across devices and scenarios." },
    { step: "5", title: "Launch & Scale", duration: "Ongoing", desc: "We handle App Store and Play Store submission, ensure approval, and monitor the launch. Post-launch, we provide support, implement user feedback, and help you scale as you grow." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "Serverless"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Elasticsearch", "DynamoDB"] },
    { category: "Cloud", technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
    { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "LangChain", "Hugging Face", "Computer Vision"] },
    { category: "Analytics", technologies: ["Mixpanel", "Amplitude", "Firebase Analytics", "CleverTap", "Segment", "Metabase"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Bangalore | Startup App Developers | Web Nova Crew"
        description="Top app development company in Bangalore for startups & enterprises. Android, iOS, Flutter apps in Koramangala, Whitefield, Electronic City. 50+ startups served. ₹50,000 onwards. Investor-ready MVPs."
        keywords="app development company Bangalore, mobile app developers Bangalore, startup app development Bangalore, Koramangala app developers, Whitefield app development, Flutter developers Bangalore, MVP development Bangalore"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Bangalore", url: "https://webnovacrew.com/locations/app-development-bangalore" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Bangalore"
        serviceDescription="Professional mobile app development for Bangalore startups and enterprises. Android, iOS, Flutter, React Native apps with AI integration."
        serviceUrl="https://webnovacrew.com/locations/app-development-bangalore"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Bangalore, Karnataka • Silicon Valley of India • 12M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              App Development Company in Bangalore
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              India's <span className="text-purple-400 font-semibold">Silicon Valley</span> deserves world-class apps. We build <span className="text-pink-400 font-semibold">investor-ready MVPs</span> and <span className="text-purple-400 font-semibold">scalable products</span> for Bangalore's ambitious startups.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving startups in Koramangala, Whitefield, Electronic City, Indiranagar, HSR Layout & across Bangalore.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-sm text-slate-400">Bangalore Startups</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">₹50K</div>
                <div className="text-sm text-slate-400">MVP Starting</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-1">3-6</div>
                <div className="text-sm text-slate-400">Weeks MVP</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">₹10Cr+</div>
                <div className="text-sm text-slate-400">Funding Raised</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              App Development Services in Bangalore
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-stack mobile development for Bangalore's tech ecosystem. From startup MVPs to enterprise solutions, we build apps that scale with your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Understanding Bangalore's Startup Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Local insights that help us build better apps for Bangalore startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-950/30 to-slate-900/50 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Startup Culture & VC Expectations</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Bangalore's startup ecosystem is unique - fast-paced, technically sophisticated, and globally ambitious. VCs here expect clean code, scalable architecture, and impressive metrics from day one. We've worked with startups across funding stages and understand what it takes to impress investors during technical due diligence.
              </p>
              <p className="text-slate-300 leading-relaxed">
                From Y Combinator to Sequoia Surge, we've helped startups prepare for and pass technical evaluations. Our code quality and architecture decisions are designed to withstand scrutiny from the most demanding investors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-950/30 to-slate-900/50 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Talent & Innovation Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Bangalore attracts India's best tech talent, and users here have high expectations. They're early adopters who appreciate well-designed, performant apps. Our apps are built to impress this discerning audience with smooth animations, intuitive UX, and cutting-edge features.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The city's tech-forward culture means users expect apps to work flawlessly across devices and network conditions. We optimize for everything from high-speed fiber in tech parks to mobile networks in outer areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Industries We Serve in Bangalore
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain expertise across Bangalore's thriving tech sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bangalore Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results from apps we've built for Bangalore startups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="text-purple-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-purple-500/10 rounded-lg px-3 py-2 text-center">
                      <span className="text-purple-300 text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Serving All Bangalore Tech Hubs
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From Koramangala's startup scene to Whitefield's IT corridor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">{area.name}</h3>
                    <span className="text-purple-400 text-sm">{area.type}</span>
                    <p className="text-slate-400 text-sm mt-1">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Optimized for Bangalore's fast-paced startup environment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-purple-400 text-sm mb-3">{phase.duration}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern, investor-approved technologies for Bangalore startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-purple-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, i) => (
                    <span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Bangalore Startups Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We've built our capabilities specifically for Bangalore's startup ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                    {item.stats}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bangalore App Development Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent pricing designed for startups. 30-40% lower than typical Koramangala agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700 hover:border-purple-500/50'}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Need a custom quote for your Bangalore startup?</p>
            <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Request Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bangalore App Development FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-950/50 to-pink-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Bangalore Startup App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 50+ Bangalore startups who trusted us with their product development
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Bangalore Meeting
              </Link>
            </Button>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
                <Phone className="w-5 h-5 mr-2" />
                +91 98723 64476
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
