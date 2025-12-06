import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database,
  Heart, ShoppingCart, Home, GraduationCap, Factory, Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentIndore() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Indore's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Madhya Pradesh's commercial capital. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions. Our apps are designed for Indore's growing tech-savvy population.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language Support", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Indore's growing iPhone user base in upscale areas like Vijay Nagar and Palasia. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Indore's young professionals and entrepreneurs expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Indore startups looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for MVPs and consumer-facing applications.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Indore's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Indore's vibrant startup ecosystem - India's cleanest city is also becoming a startup hub. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our startup-friendly approach includes flexible engagement models and a focus on speed-to-market without compromising quality.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
    { 
      title: "E-commerce & Food Apps", 
      desc: "Full-featured e-commerce and food delivery applications for Indore's thriving retail and food sector. Indore is famous for its street food culture, and we build apps for restaurants, cloud kitchens, and food delivery. Our e-commerce apps include product catalogs, cart management, payment integration, and order tracking.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Restaurant Apps", "Food Delivery", "Inventory Sync"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Indore's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for product recognition, and predictive analytics for business intelligence. Our AI apps can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Indore's growing corporate sector and IT companies. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Tally. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Tally Integration", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Indore's growing IT sector. Apps for software companies, BPOs, and tech startups in Vijay Nagar and Scheme 78.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Textile & Garments", desc: "B2B marketplaces, inventory management, and order tracking for Indore's textile industry. Apps for fabric trading and garment manufacturing.", icon: <Factory className="w-5 h-5" /> },
    { name: "Pharmaceuticals", desc: "Pharma distribution apps, inventory tracking, compliance management, and sales force automation for MP's pharmaceutical sector.", icon: <Heart className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Indore's education sector. Apps for competitive exam preparation and skill development.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Indore's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Indore's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Food & FMCG", desc: "Restaurant apps, food delivery platforms, and FMCG distribution apps. Indore is famous for its food culture - we build apps that celebrate it.", icon: <Utensils className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Indore's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Vijay Nagar", type: "IT & Commercial Hub", desc: "Indore's premier IT and commercial hub with tech companies, startups, malls, and modern commercial spaces." },
    { name: "Palasia", type: "Business District", desc: "Major business district with corporate offices, banks, and professional services. Growing tech presence." },
    { name: "Sapna Sangeeta", type: "Commercial Center", desc: "Established commercial area with retail, restaurants, and business establishments." },
    { name: "MG Road", type: "Central Business", desc: "Central Indore's business hub with traditional businesses, banks, and professional services." },
    { name: "Rau", type: "Industrial Zone", desc: "Industrial area with manufacturing units, warehouses, and growing commercial presence." },
    { name: "Nipania", type: "Residential Hub", desc: "Growing residential and commercial area with new developments and retail establishments." },
    { name: "Bhawarkuan", type: "Commercial Area", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "Rajwada", type: "Heritage Area", desc: "Historic heart of Indore with traditional businesses, markets, and cultural establishments." },
    { name: "Scheme 78", type: "IT Park", desc: "IT park area with software companies, tech startups, and modern office spaces." },
    { name: "AB Road", type: "Commercial Corridor", desc: "Major commercial corridor with retail, hospitality, and business establishments." },
    { name: "Ring Road", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces and residential complexes." },
    { name: "Treasure Island", type: "Retail Hub", desc: "Major retail and entertainment hub with malls, restaurants, and commercial spaces." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Indore IT Expertise", 
      desc: "We understand Indore's unique position as Madhya Pradesh's commercial capital and India's cleanest city. Our team has worked with businesses across Indore and knows what it takes to succeed in this market. We understand the local business culture and the growing tech ecosystem in areas like Vijay Nagar and Scheme 78.",
      icon: <Award className="w-5 h-5" />,
      stats: "30+ Indore Apps"
    },
    { 
      title: "Startup-Friendly Partner", 
      desc: "Indore has a vibrant startup ecosystem, and we've worked with 25+ local startups, helping them build MVPs and scale their products. We understand the startup mindset and offer flexible engagement models including milestone-based payments and a focus on speed-to-market.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "25+ Startups Served"
    },
    { 
      title: "Most Affordable Pricing", 
      desc: "We offer the most competitive pricing for Indore businesses while maintaining premium quality. Our efficient processes and experienced team mean you get excellent value. We understand the budget constraints of small businesses and startups in Madhya Pradesh.",
      icon: <Star className="w-5 h-5" />,
      stats: "50% Cost Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Indore's fast-paced business environment and deliver on time.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Hindi & Regional Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is especially important for apps targeting local consumers in Madhya Pradesh.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Hindi Support"
    },
    { 
      title: "Quality Focus", 
      desc: "We maintain enterprise-grade quality standards for all projects. Our QA processes include automated testing, performance optimization, security audits, and device compatibility testing across 50+ devices.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "99.9% Uptime"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹25,000 - ₹80,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹80,000 - ₹2,00,000", 
      ideal: "Growing businesses & food apps",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,00,000 - ₹5,00,000+", 
      ideal: "Large corporations & complex apps",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Food Delivery Platform",
      client: "Indore Food Startup",
      description: "Built a comprehensive food delivery app celebrating Indore's famous street food culture. The app connects 200+ local restaurants and street food vendors with customers, featuring real-time tracking and multiple payment options.",
      results: ["200+ Restaurants", "50K+ Orders", "4.7 App Rating", "15-min Delivery"],
      tech: ["Flutter", "Node.js", "MongoDB", "Firebase", "Razorpay"]
    },
    {
      title: "EdTech Learning App",
      client: "Indore Coaching Institute",
      description: "Developed an e-learning platform for competitive exam preparation with live classes, recorded courses, assessments, and progress tracking. The app serves 25,000+ students across Madhya Pradesh.",
      results: ["25K+ Students", "500+ Courses", "Live Classes", "4.8 Rating"],
      tech: ["React Native", "Python", "PostgreSQL", "AWS", "WebRTC"]
    },
    {
      title: "Textile B2B Marketplace",
      client: "Indore Textile Association",
      description: "Created a B2B marketplace for fabric trading with product catalogs, sample requests, order management, and payment processing. The app connects textile manufacturers with buyers across India.",
      results: ["150+ Manufacturers", "₹10Cr+ GMV", "Pan-India Reach", "B2B Trading"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Stripe"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Indore?",
      answer: "App development in Indore costs ₹25,000 to ₹5,00,000+ depending on complexity. Startup apps with basic features cost ₹25,000-₹80,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹80,000-₹2,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,00,000-₹5,00,000+. We offer the most affordable pricing in Madhya Pradesh while delivering premium quality."
    },
    {
      question: "Do you work with Indore startups?",
      answer: "Yes! Indore has a vibrant startup ecosystem, and we've worked with 25+ local startups, helping them build MVPs and scale their products. We understand the startup mindset and offer flexible engagement models including milestone-based payments, equity options for select startups, and a focus on speed-to-market."
    },
    {
      question: "Can you build food delivery and restaurant apps?",
      answer: "Absolutely! Indore is famous for its food culture, and we specialize in food-related apps. We've built food delivery platforms, restaurant ordering apps, cloud kitchen management systems, and food marketplace apps. Our apps feature real-time tracking, multiple payment options, and restaurant management dashboards."
    },
    {
      question: "How long does app development take in Indore?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Indore?",
      answer: "Yes! We regularly visit Indore for client meetings, workshops, and project kickoffs. We can meet at your office in Vijay Nagar, Palasia, Sapna Sangeeta, Scheme 78, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi fonts, Hindi content management, and Hindi push notifications. We handle Devanagari script properly. This is especially important for apps targeting local consumers in Madhya Pradesh."
    },
    {
      question: "What technologies do you use for Indore app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For cloud: AWS, Azure, Google Cloud. For enterprise: We integrate with Tally, SAP, and custom ERPs."
    },
    {
      question: "Can you build apps for the education sector?",
      answer: "Yes! Indore has a strong education and coaching sector. We build LMS platforms, coaching apps, competitive exam preparation apps, and EdTech solutions. Our education apps support video content, live classes, assessments, progress tracking, and gamification."
    },
    {
      question: "Do you build apps for the textile industry?",
      answer: "Yes! Indore has a significant textile industry. We've built B2B marketplaces, inventory management systems, order tracking apps, and supplier management solutions for textile businesses. We understand the unique workflows of fabric trading and garment manufacturing."
    },
    {
      question: "What about app security for enterprise apps?",
      answer: "Security is paramount for enterprise applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements."
    },
    {
      question: "Can you integrate with Tally and other accounting software?",
      answer: "Yes, we specialize in Tally integration which is widely used by Indore businesses. We can sync orders, inventory, invoices, and financial data between your app and Tally. We also integrate with other accounting software, ERPs, and business systems."
    },
    {
      question: "Do you sign NDAs for Indore projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve 50,000+ users and can handle high traffic loads during peak times."
    },
    {
      question: "What makes you different from other Indore app development companies?",
      answer: "Three key differentiators: 1) Local Expertise: Deep understanding of Indore's business ecosystem, food culture, and startup scene. 2) Most Affordable: We offer 50% lower costs than typical agencies while delivering premium quality. 3) Startup DNA: We understand the startup mindset and offer flexible engagement models."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Indore business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Hindi language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Food apps undergo additional location and payment testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Food & Delivery", technologies: ["Real-time Tracking", "Maps APIs", "Payment Gateways", "Push Notifications", "Order Management", "Restaurant Dashboard"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "Oracle", "ERP Connect", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Indore | Mobile App Developers MP | Web Nova Crew" description="Top app development company in Indore. Android, iOS, Flutter apps for startups, IT in Vijay Nagar, Palasia. ₹25,000 onwards." keywords="app development company Indore, mobile app developers Indore, MP app development, Flutter developers Indore" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Indore", url: "https://webnovacrew.com/locations/app-development-indore" }]} />
      <ServiceSchema serviceName="App Development in Indore" serviceDescription="Professional mobile app development for Indore businesses." serviceUrl="https://webnovacrew.com/locations/app-development-indore" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-green-400" /><span className="text-sm text-green-300">Indore, Madhya Pradesh • Cleanest City • 3M+ Population</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">App Development Company in Indore</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4"><span className="text-green-400 font-semibold">Indore's</span> trusted app development partner for startups & enterprises.</p>
            <p className="text-lg text-slate-400 mb-8">Serving businesses in Vijay Nagar, Palasia, Sapna Sangeeta & across Indore.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-green-400 mb-1">25+</div><div className="text-sm text-slate-400">Indore Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">₹25K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-green-400 mb-1">3-10</div><div className="text-sm text-slate-400">Weeks Delivery</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">50%</div><div className="text-sm text-slate-400">Cost Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Indore</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for MP's commercial capital. From food delivery apps to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-green-500/10 text-green-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Indore's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-950/30 to-slate-900/50 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Cleanest City & Startup Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Indore has won India's cleanest city award multiple times and is rapidly emerging as a startup hub. The city's growing IT ecosystem in Vijay Nagar and Scheme 78 is attracting tech talent and investment. We understand this dynamic environment and build apps that help businesses thrive.</p>
              <p className="text-slate-300 leading-relaxed">Our startup-friendly approach has helped 25+ Indore startups build MVPs and scale their products successfully.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Famous Food Culture</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Indore is renowned for its street food culture - from Sarafa Bazaar to Chappan Dukan. We've built food delivery platforms, restaurant apps, and cloud kitchen management systems that celebrate this culinary heritage.</p>
              <p className="text-slate-300 leading-relaxed">Our food apps connect local restaurants and street food vendors with customers, featuring real-time tracking and multiple payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Indore</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Indore Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="text-green-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-green-500/10 rounded-lg px-3 py-2 text-center"><span className="text-green-300 text-sm font-medium">{result}</span></div>))}
                </div>
                <div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Indore Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-green-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Development Process</h2></div>
          <div className="grid md:grid-cols-5 gap-6">
            {developmentProcess.map((phase, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-green-400 text-sm mb-3">{phase.duration}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technology Stack</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Indore Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">{item.icon}</div>
                  <div className="text-sm font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Indore App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Most affordable pricing in Madhya Pradesh with premium quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-700 hover:border-green-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-green-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Indore App Development FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Indore App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 30+ Indore businesses who trusted us with their digital transformation</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Indore Meeting</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
