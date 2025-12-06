import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Briefcase, Clock, TrendingUp, Zap, Target,
  Layers, Settings, BarChart3, Heart, ShoppingCart, Truck, GraduationCap,
  Banknote, Film, Stethoscope, Factory, Home, Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentMumbai() {
  // Detailed Services with comprehensive descriptions
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built specifically for Mumbai's diverse Android user base. Our Android development team creates high-performance apps optimized for the wide range of devices used across Mumbai, from budget smartphones in suburban areas to flagship devices in South Mumbai. We implement Material Design 3 guidelines, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions across the city.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Push Notifications", "Google Pay Integration", "Multi-language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Mumbai's affluent iPhone user base concentrated in areas like South Mumbai, BKC, and Powai. We build apps that leverage the latest iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are optimized for the App Store with proper ASO to rank well in the Indian market.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "App Clips"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Ideal for Mumbai startups looking to launch quickly on both platforms while managing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, making them perfect for consumer-facing applications in Mumbai's competitive market.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Dart Backend"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Mumbai enterprises with existing web development teams. We leverage React Native's mature ecosystem to build apps that integrate seamlessly with existing React web applications, share business logic, and reduce time-to-market for Mumbai's fast-moving business environment.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Web Compatibility"]
    },
    { 
      title: "Fintech & Banking Apps", 
      desc: "RBI-compliant fintech applications for Mumbai's financial hub. We build digital banking apps, stock trading platforms, payment gateways, lending apps, insurance platforms, and wealth management solutions. Our fintech apps implement bank-grade security with 256-bit encryption, two-factor authentication, biometric login, and comply with PCI-DSS, RBI guidelines, and SEBI regulations for trading apps.",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["RBI Compliant", "PCI-DSS Security", "UPI Integration", "Stock Trading", "Mutual Funds", "Insurance APIs"]
    },
    { 
      title: "Entertainment & Media Apps", 
      desc: "Streaming platforms, content apps, and entertainment solutions for Mumbai's Bollywood and media industry. We build OTT platforms with adaptive bitrate streaming, celebrity fan engagement apps, music streaming services, podcast platforms, and digital magazine apps. Our entertainment apps handle millions of concurrent users and integrate with CDNs for smooth content delivery across India.",
      icon: <Film className="w-6 h-6" />,
      features: ["Video Streaming", "DRM Protection", "Offline Downloads", "Live Streaming", "Social Features", "Content Monetization"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Full-featured e-commerce applications for Mumbai's retail businesses. From single-vendor stores to multi-vendor marketplaces, we build apps with product catalogs, inventory management, payment processing, order tracking, and delivery integration. Our e-commerce apps integrate with popular Indian payment gateways, logistics providers, and support COD which is still preferred by many Mumbai consumers.",
      icon: <Database className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Inventory Sync", "Order Management", "Delivery Tracking", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by artificial intelligence and machine learning for Mumbai's innovative businesses. We integrate GPT-4 for conversational AI, computer vision for image recognition, recommendation engines for personalization, predictive analytics for business intelligence, and natural language processing for multilingual support including Hindi and Marathi.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Computer Vision", "Recommendation Engine", "Predictive Analytics", "NLP/Chatbots", "Voice AI"]
    },
  ];

  // Detailed Industries with descriptions
  const industries = [
    { name: "Finance & Banking", desc: "Digital banking, neo-banks, payment apps, and financial services for Mumbai's banking hub. We've built apps for NBFCs, cooperative banks, and fintech startups in the BKC financial district.", icon: <Banknote className="w-5 h-5" /> },
    { name: "Bollywood & Entertainment", desc: "OTT platforms, celebrity apps, music streaming, and content distribution for Mumbai's entertainment capital. Our apps serve millions of users consuming Bollywood content.", icon: <Film className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Mumbai's thriving retail sector from Crawford Market to Phoenix Mills.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Real Estate & PropTech", desc: "Property listing apps, virtual tour platforms, and real estate CRM for Mumbai's booming property market across locations from Colaba to Thane.", icon: <Home className="w-5 h-5" /> },
    { name: "Healthcare & Pharma", desc: "Telemedicine apps, pharmacy delivery, hospital management, and health-tech solutions for Mumbai's healthcare ecosystem including major hospital chains.", icon: <Stethoscope className="w-5 h-5" /> },
    { name: "Logistics & Shipping", desc: "Fleet management, last-mile delivery, port logistics, and supply chain apps for Mumbai's massive logistics network centered around JNPT and Mumbai Port.", icon: <Truck className="w-5 h-5" /> },
    { name: "Media & Advertising", desc: "Ad-tech platforms, media buying apps, content management, and digital marketing tools for Mumbai's advertising agencies and media houses.", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Stock Trading & Wealth", desc: "Trading platforms, mutual fund apps, portfolio management, and robo-advisory solutions for Mumbai's stock market ecosystem centered around Dalal Street.", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  // Detailed Areas with descriptions
  const areas = [
    { name: "Bandra-Kurla Complex (BKC)", type: "Financial Hub", desc: "Mumbai's premier business district housing major banks, corporates, and the diamond bourse" },
    { name: "Nariman Point", type: "Corporate Hub", desc: "South Mumbai's iconic business district with multinational headquarters and financial institutions" },
    { name: "Lower Parel", type: "Startup Hub", desc: "Transformed mill district now home to WeWork, startups, and modern corporate offices" },
    { name: "Andheri", type: "IT & Media", desc: "Major IT hub with MIDC, film studios, and thousands of tech companies" },
    { name: "Powai", type: "Tech Hub", desc: "Home to IIT Bombay, Hiranandani, and numerous tech startups and IT parks" },
    { name: "Goregaon", type: "Media City", desc: "Film City, TV studios, and growing IT sector in NESCO and Mindspace" },
    { name: "Malad", type: "Commercial", desc: "Mindspace IT Park and growing commercial hub in Western suburbs" },
    { name: "Thane", type: "Extended Mumbai", desc: "Rapidly growing IT and business hub with lower costs than Mumbai proper" },
    { name: "Navi Mumbai", type: "Planned City", desc: "SEEPZ, Reliance Corporate Park, and emerging tech ecosystem" },
    { name: "Worli", type: "Premium Business", desc: "Worli-BKC Sea Link connected premium business and residential area" },
    { name: "Fort", type: "Heritage Business", desc: "Historic business district with BSE, banks, and traditional trading houses" },
    { name: "Churchgate", type: "South Mumbai", desc: "Prime South Mumbai location with corporate offices and financial services" }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Deep Mumbai Market Expertise", 
      desc: "We understand Mumbai's unique business culture - the fast pace, the deal-making mentality, and the expectation of premium quality. Our team has worked with businesses across Mumbai's diverse sectors from Dalal Street traders to Bollywood production houses. We know what Mumbai users expect from apps and how to build products that resonate with the local market while being globally competitive.",
      icon: <Award className="w-5 h-5" />,
      stats: "100+ Mumbai Apps Delivered"
    },
    { 
      title: "Fintech & Banking Specialists", 
      desc: "Mumbai is India's financial capital, and we've built our expertise accordingly. We understand RBI regulations, SEBI compliance for trading apps, PCI-DSS requirements for payment processing, and the specific needs of NBFCs and cooperative banks. Our fintech apps handle millions in transactions daily with bank-grade security and 99.99% uptime.",
      icon: <Briefcase className="w-5 h-5" />,
      stats: "₹500Cr+ Transactions Processed"
    },
    { 
      title: "Enterprise-Grade Solutions", 
      desc: "Mumbai's large corporations demand enterprise-grade reliability. We build apps that scale to millions of users, integrate with legacy systems, comply with corporate IT policies, and provide the security and audit trails that enterprise clients require. Our apps are deployed in some of Mumbai's largest banks and corporations.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "50+ Enterprise Clients"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by Mumbai businesses, we offer significant cost savings compared to agencies based in BKC or Lower Parel. Our efficient processes, experienced team, and optimized workflows mean you get premium quality at competitive prices. We're transparent about pricing with no hidden costs.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Mumbai-Speed Delivery", 
      desc: "Mumbai doesn't wait, and neither do we. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Mumbai's business timelines and ensure we meet your go-to-market deadlines.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 6-Week MVP"
    },
    { 
      title: "24/7 Mumbai Time Support", 
      desc: "Mumbai businesses operate around the clock, and so does our support. Whether it's a trading app that needs to be ready for market opening or an e-commerce platform during a flash sale, we provide round-the-clock support. Our team is available for emergency fixes, performance monitoring, and immediate response.",
      icon: <Shield className="w-5 h-5" />,
      stats: "< 1 Hour Response Time"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup MVP", 
      price: "₹50,000 - ₹1,50,000", 
      ideal: "Early-stage startups & MVPs",
      features: [
        "Single platform (Android OR iOS)",
        "Up to 15 screens",
        "Basic UI/UX design",
        "User authentication",
        "Push notifications",
        "Basic analytics",
        "4-6 weeks delivery",
        "30 days post-launch support",
        "Source code ownership"
      ],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹1,50,000 - ₹4,00,000", 
      ideal: "Growing businesses & funded startups",
      features: [
        "Android + iOS apps",
        "Up to 30 screens",
        "Premium UI/UX design",
        "Payment gateway integration",
        "Admin panel/dashboard",
        "API development",
        "Advanced analytics",
        "8-12 weeks delivery",
        "90 days post-launch support",
        "Source code + documentation"
      ],
      popular: true
    },
    { 
      tier: "Enterprise Solution", 
      price: "₹4,00,000 - ₹10,00,000+", 
      ideal: "Large corporations & complex apps",
      features: [
        "Android + iOS + Web apps",
        "Unlimited screens",
        "Custom UI/UX with branding",
        "AI/ML integration",
        "Complex backend systems",
        "Third-party integrations",
        "Enterprise security",
        "12-20 weeks delivery",
        "1 year support & maintenance",
        "Dedicated project manager"
      ],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Fintech Trading Platform",
      client: "Mumbai-based Stock Broking Firm",
      description: "Built a real-time stock trading app with live market data, portfolio management, and instant order execution. The app handles 50,000+ daily active traders and processes ₹100Cr+ in daily transactions.",
      results: ["50,000+ DAU", "₹100Cr+ Daily Volume", "99.99% Uptime", "< 100ms Order Execution"],
      tech: ["React Native", "Node.js", "Redis", "PostgreSQL", "AWS"]
    },
    {
      title: "OTT Streaming Platform",
      client: "Bollywood Production House",
      description: "Developed a video streaming platform for exclusive Bollywood content with adaptive bitrate streaming, offline downloads, and subscription management. The app serves 2M+ subscribers across India.",
      results: ["2M+ Subscribers", "4.6 App Store Rating", "40% User Retention", "50TB+ Content Delivered"],
      tech: ["Flutter", "AWS MediaConvert", "CloudFront CDN", "Stripe", "Firebase"]
    },
    {
      title: "Hyperlocal Delivery App",
      client: "Mumbai Grocery Chain",
      description: "Created a hyperlocal grocery delivery app covering Mumbai and MMR region with real-time inventory, route optimization, and 30-minute delivery promise. The app processes 10,000+ orders daily.",
      results: ["10,000+ Daily Orders", "28 Min Avg Delivery", "4.5 Rating", "85% Repeat Customers"],
      tech: ["Kotlin", "Swift", "Google Maps", "Firebase", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Mumbai?",
      answer: "App development in Mumbai typically costs ₹50,000 to ₹10,00,000+ depending on complexity. Startup MVPs with basic features cost ₹50,000-₹1,50,000 and take 4-6 weeks. Business apps with payment integration, admin panels, and both platforms cost ₹1,50,000-₹4,00,000. Enterprise apps with AI, complex backends, and custom integrations cost ₹4,00,000-₹10,00,000+. We offer 30-40% lower pricing than typical BKC and Lower Parel agencies while maintaining premium quality. Our transparent pricing includes design, development, testing, deployment, and post-launch support."
    },
    {
      question: "Do you build fintech and banking apps compliant with RBI regulations?",
      answer: "Yes, we specialize in RBI-compliant fintech applications. We've built digital banking apps for NBFCs, stock trading platforms compliant with SEBI regulations, payment gateways following PCI-DSS standards, lending apps with proper KYC/AML integration, and insurance platforms. Our fintech apps implement bank-grade security including 256-bit encryption, hardware security modules, biometric authentication, and comprehensive audit logging. We understand the regulatory landscape and can guide you through compliance requirements."
    },
    {
      question: "Can you develop entertainment and OTT streaming apps for Bollywood?",
      answer: "Absolutely! Being close to Mumbai's entertainment industry, we've built multiple OTT platforms, celebrity fan engagement apps, music streaming services, and content distribution apps. Our streaming apps support adaptive bitrate streaming (HLS/DASH), DRM protection for premium content, offline downloads, multi-device sync, and can handle millions of concurrent viewers. We integrate with CDNs like CloudFront and Akamai for smooth content delivery across India and implement monetization through subscriptions, ads, and pay-per-view."
    },
    {
      question: "How long does app development take for Mumbai businesses?",
      answer: "Timeline depends on app complexity. Startup MVPs take 4-6 weeks, business apps require 8-12 weeks, and enterprise apps take 12-20 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team. We understand Mumbai's fast-paced business environment and structure our processes to meet aggressive timelines without compromising quality."
    },
    {
      question: "Do you provide on-site meetings and support in Mumbai?",
      answer: "Yes! We regularly visit Mumbai for client meetings, workshops, and project kickoffs. We can meet at your office in BKC, Nariman Point, Lower Parel, Andheri, Powai, or any location convenient for you. For ongoing projects, we offer weekly video calls, daily standups on Slack, and monthly in-person reviews. Our project managers are available during Mumbai business hours and can visit for important milestones, demos, and launches."
    },
    {
      question: "What technologies do you use for Mumbai app development?",
      answer: "We use modern, industry-standard technologies. For mobile: Kotlin/Java for Android, Swift/SwiftUI for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Python, Go, with databases like PostgreSQL, MongoDB, Redis. For cloud: AWS, Google Cloud, Azure with services like Lambda, S3, CloudFront. For fintech: We integrate with payment gateways (Razorpay, PayU, Paytm), banking APIs, and stock market feeds. We choose technologies based on your specific requirements and long-term maintainability."
    },
    {
      question: "Can you help with app marketing and user acquisition in Mumbai?",
      answer: "Yes, we provide comprehensive app marketing support. This includes App Store Optimization (ASO) to rank higher in Play Store and App Store searches, integration with analytics tools (Firebase, Mixpanel, CleverTap), setting up attribution for paid campaigns, and implementing referral systems. We understand Mumbai's user behavior and can advise on user acquisition strategies, retention tactics, and monetization approaches specific to the local market."
    },
    {
      question: "Do you build apps for specific Mumbai industries like real estate or logistics?",
      answer: "Yes, we have deep expertise in Mumbai's key industries. For real estate: property listing apps, virtual tour platforms, broker management systems, and PropTech solutions for developers across Mumbai's property market. For logistics: fleet management for transport companies, last-mile delivery apps, port logistics solutions for JNPT operations, and warehouse management systems. We understand the specific workflows and challenges of each industry."
    },
    {
      question: "What about app security for financial and enterprise apps?",
      answer: "Security is paramount, especially for Mumbai's financial sector. We implement multiple security layers: SSL/TLS encryption for data in transit, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning to prevent MITM attacks, code obfuscation and anti-tampering measures, secure API design with rate limiting and input validation, and comprehensive logging for audit trails. We can also arrange third-party security audits and penetration testing."
    },
    {
      question: "How do you handle app maintenance and updates after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates for new Android/iOS versions, security patches and vulnerability fixes, minor feature enhancements, server monitoring and uptime management, and analytics review with optimization recommendations. We offer flexible maintenance plans from basic support to dedicated team arrangements for enterprise clients."
    },
    {
      question: "Can you integrate with existing systems used by Mumbai businesses?",
      answer: "Yes, we specialize in enterprise integrations. We've integrated apps with SAP, Oracle, Salesforce, Tally, and custom ERPs used by Mumbai corporations. For fintech, we integrate with core banking systems, payment switches, and market data feeds. For e-commerce, we connect with inventory systems, logistics APIs, and accounting software. We can work with your IT team to understand existing systems and build seamless integrations."
    },
    {
      question: "Do you sign NDAs and ensure confidentiality for Mumbai clients?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. For sensitive projects, we can work with your security team to meet specific compliance requirements. Many of our Mumbai clients are in regulated industries where confidentiality is critical."
    },
    {
      question: "What is your development process for Mumbai projects?",
      answer: "Our process is designed for Mumbai's business pace: 1) Discovery (1-2 weeks): Requirements gathering, user research, technical planning. 2) Design (2-3 weeks): Wireframes, UI/UX design, prototyping with your feedback. 3) Development (4-12 weeks): Agile sprints with bi-weekly demos, continuous integration. 4) Testing (1-2 weeks): QA testing, performance testing, security testing. 5) Launch: App store submission, deployment, monitoring. 6) Support: Ongoing maintenance and optimization. You're involved at every stage with regular updates."
    },
    {
      question: "Can you scale apps for millions of Mumbai users?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that handle millions of users, including trading apps during market hours and streaming apps during peak entertainment times. We use technologies like Redis for caching, message queues for async processing, and database optimization for high-throughput scenarios. We also implement monitoring and alerting to proactively handle scale issues."
    },
    {
      question: "What makes you different from other Mumbai app development companies?",
      answer: "Three key differentiators: 1) Domain Expertise: We specialize in Mumbai's key industries - fintech, entertainment, e-commerce, and logistics - with deep understanding of local regulations and user behavior. 2) Quality at Better Prices: We deliver BKC-quality work at 30-40% lower costs through efficient processes and experienced teams. 3) Reliability: We've delivered 100+ apps for Mumbai businesses with a track record of on-time delivery and long-term client relationships. Many clients have worked with us on multiple projects over years."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "We start with in-depth discussions to understand your Mumbai business, target users, and goals. This includes market research, competitor analysis, feature prioritization, and technical architecture planning. We deliver a detailed project roadmap and cost estimate." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Our designers create wireframes and high-fidelity mockups tailored for Mumbai users. We consider local preferences, language support (Hindi/Marathi), and cultural nuances. You review and approve designs before development begins." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development happens in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. We use CI/CD for continuous integration and maintain code quality through reviews and testing." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional testing, performance testing, security testing, and device testing across popular devices used in Mumbai. We fix all issues before launch." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "We handle App Store and Play Store submission, ensure approval, and monitor the launch. Post-launch, we provide support, fix any issues, and help you iterate based on user feedback." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Go", "Java Spring", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Elasticsearch", "DynamoDB"] },
    { category: "Cloud", technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"] },
    { category: "Fintech", technologies: ["Razorpay", "PayU", "UPI", "NSDL APIs", "BSE/NSE Feeds", "KYC APIs"] },
    { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "AWS SageMaker", "Google Vision", "NLP"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Mumbai | Mobile App Developers Mumbai | Web Nova Crew"
        description="Top app development company in Mumbai. We build Android, iOS, Flutter apps for startups & enterprises in BKC, Nariman Point, Lower Parel, Andheri. Fintech, e-commerce, entertainment apps. ₹50,000 onwards."
        keywords="app development company Mumbai, mobile app developers Mumbai, Android app Mumbai, iOS app Mumbai, Flutter developers Mumbai, fintech app development Mumbai, e-commerce app Mumbai, BKC app developers"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Mumbai", url: "https://webnovacrew.com/locations/app-development-mumbai" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Mumbai"
        serviceDescription="Professional mobile app development for Mumbai businesses. Android, iOS, Flutter apps for fintech, e-commerce, entertainment, and enterprise sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-mumbai"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Mumbai, Maharashtra • Financial Capital of India • 20M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
              App Development Company in Mumbai
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              India's <span className="text-orange-400 font-semibold">financial capital</span> deserves world-class apps. We build <span className="text-red-400 font-semibold">fintech, e-commerce, and entertainment apps</span> for Mumbai's ambitious businesses and startups.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in BKC, Nariman Point, Lower Parel, Andheri, Powai & across Mumbai.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
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
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-1">100+</div>
                <div className="text-sm text-slate-400">Mumbai Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20">
                <div className="text-3xl font-bold text-red-400 mb-1">₹50K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-1">4-12</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20">
                <div className="text-3xl font-bold text-red-400 mb-1">30%</div>
                <div className="text-sm text-slate-400">Cost Savings</div>
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
              App Development Services in Mumbai
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-stack mobile development for Mumbai's diverse business ecosystem. From fintech apps for Dalal Street to entertainment platforms for Bollywood, we build apps that power Mumbai's economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mumbai Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Understanding Mumbai's App Market
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Local insights that help us build better apps for Mumbai businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-900/50 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai User Behavior</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Mumbai users are among India's most sophisticated app users. With high smartphone penetration in areas like South Mumbai and BKC, users expect premium experiences. However, network conditions vary significantly - from 5G in Worli to congested networks in crowded areas like Dadar. Our apps are optimized for all conditions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Payment preferences also vary: UPI dominates, but credit card usage is higher in affluent areas. COD remains important for e-commerce. We build apps that support all payment modes preferred by Mumbai consumers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-950/30 to-slate-900/50 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Business Environment</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Mumbai's business culture is fast-paced and results-oriented. Decisions are made quickly, and execution is expected to match. We've adapted our processes to this environment - quick turnarounds, responsive communication, and flexible engagement models.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The city's diverse economy means we work across sectors: fintech in BKC, entertainment in Andheri, logistics in Navi Mumbai, and retail across the city. This cross-industry experience helps us bring best practices from one sector to another.
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
              Industries We Serve in Mumbai
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain expertise across Mumbai's key business sectors. We understand the unique challenges, regulations, and user expectations in each industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">
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
              Mumbai Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results from apps we've built for Mumbai businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="text-orange-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-orange-500/10 rounded-lg px-3 py-2 text-center">
                      <span className="text-orange-300 text-sm font-medium">{result}</span>
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
              Serving All Mumbai Business Districts
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From the corporate towers of Nariman Point to the tech parks of Powai, we serve businesses across Mumbai Metropolitan Region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">{area.name}</h3>
                    <span className="text-orange-400 text-sm">{area.type}</span>
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
              A proven process designed for Mumbai's fast-paced business environment
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-orange-400 text-sm mb-3">{phase.duration}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-500/50"></div>
                )}
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
              Modern, battle-tested technologies for Mumbai's demanding applications
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
                <h3 className="text-lg font-semibold text-orange-400 mb-4">{stack.category}</h3>
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
              Why Mumbai Businesses Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We've built our capabilities specifically for Mumbai's demanding business environment. Here's why 100+ Mumbai businesses trust us with their app development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
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
              Mumbai App Development Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. We offer 30-40% savings compared to typical BKC and Lower Parel agencies while delivering premium quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-700 hover:border-orange-500/50'}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Need a custom quote for your Mumbai project?</p>
            <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
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
              Mumbai App Development FAQs
            </h2>
            <p className="text-xl text-slate-400">
              Common questions from Mumbai businesses
            </p>
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
      <section className="py-20 bg-gradient-to-br from-orange-950/50 to-red-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Mumbai App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 100+ Mumbai businesses who trusted us with their app development
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Mumbai Meeting
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
