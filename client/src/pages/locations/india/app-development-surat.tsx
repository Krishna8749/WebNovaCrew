import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Gem, Heart, ShoppingCart, Home, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentSurat() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Surat's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Gujarat's diamond and textile industries. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions across the city.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Gujarati Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Surat's growing iPhone user base, especially among diamond traders and business owners in Vesu and Athwa. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Surat businesses looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Surat's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Diamond & Textile B2B Apps", 
      desc: "Specialized B2B applications for Surat's world-famous diamond and textile industries. We build inventory management systems, trading platforms, certification verification apps, and CRM solutions that understand the unique workflows of diamond trading and fabric manufacturing. Our apps connect manufacturers with buyers globally.",
      icon: <Gem className="w-6 h-6" />,
      features: ["Inventory Management", "Trading Platform", "Certification Verify", "B2B Marketplace", "Wholesale Pricing", "Global Connect"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Full-featured e-commerce applications for Surat's thriving retail sector. We build online shopping apps, B2B marketplaces, and wholesale distribution platforms. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync with existing systems.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "Wholesale Features"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Surat's innovation-driven companies. We integrate GPT-4 for conversational AI, computer vision for diamond grading and fabric quality inspection, and predictive analytics for inventory management and demand forecasting.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Computer Vision", "Quality Inspection", "Demand Forecasting", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Surat's large corporations and trading houses. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Tally. Our enterprise apps include comprehensive admin panels and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Tally Integration", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Diamond & Jewelry", desc: "Inventory management, certification verification, trading platforms, and B2B marketplaces for Surat's world-famous diamond industry. Apps connecting 90% of world's diamond cutting with global buyers.", icon: <Gem className="w-5 h-5" /> },
    { name: "Textile & Garments", desc: "B2B marketplaces, fabric inventory, order tracking, and manufacturing management for Surat's textile industry. Apps for saree, dress material, and fabric trading.", icon: <Factory className="w-5 h-5" /> },
    { name: "Chemical Industry", desc: "Inventory management, compliance tracking, and distribution apps for Surat's chemical and dye manufacturing sector.", icon: <Factory className="w-5 h-5" /> },
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Surat's growing IT sector in Vesu and Ring Road areas.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Surat's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Surat's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Logistics & Transport", desc: "Fleet management, delivery tracking, and logistics apps for Surat's transport and distribution sector.", icon: <Truck className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Surat's healthcare sector. Patient management and appointment booking.", icon: <Heart className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Vesu", type: "Premium Business Hub", desc: "Upscale business and residential area with corporate offices, tech companies, and premium commercial spaces." },
    { name: "Adajan", type: "Commercial Center", desc: "Major commercial and residential area with retail, restaurants, and business establishments." },
    { name: "Athwa", type: "Business District", desc: "Established business district with corporate offices, banks, and professional services." },
    { name: "Ring Road", type: "IT Corridor", desc: "Growing IT and commercial corridor with software companies and modern office spaces." },
    { name: "Varachha", type: "Diamond Hub", desc: "Heart of Surat's diamond industry with trading offices, cutting units, and B2B businesses." },
    { name: "Katargam", type: "Textile Zone", desc: "Major textile manufacturing and trading area with fabric markets and wholesale businesses." },
    { name: "Udhna", type: "Industrial Area", desc: "Industrial zone with manufacturing units, warehouses, and logistics facilities." },
    { name: "Dumas Road", type: "Tourism Area", desc: "Coastal area with hospitality, tourism, and entertainment businesses." },
    { name: "Piplod", type: "Commercial Hub", desc: "Growing commercial area with retail, restaurants, and business offices." },
    { name: "City Light", type: "Premium Area", desc: "Premium residential and commercial area with upscale businesses and retail." },
    { name: "Pal", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces and residential complexes." },
    { name: "Althan", type: "Residential Hub", desc: "Growing residential and commercial area with new developments and retail establishments." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Surat Industry Expertise", 
      desc: "We understand Surat's unique position as the world's diamond cutting capital and a major textile hub. Our team has built B2B apps for diamond traders, textile manufacturers, and trading houses. We know the industry workflows, certification requirements, and global trading patterns.",
      icon: <Gem className="w-5 h-5" />,
      stats: "35+ Surat Apps"
    },
    { 
      title: "B2B App Specialists", 
      desc: "Surat's economy is driven by B2B trading. We specialize in building trading platforms, wholesale marketplaces, inventory management systems, and CRM solutions that connect manufacturers with buyers globally. Our B2B apps handle complex pricing, bulk orders, and multi-currency transactions.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "15+ B2B Platforms"
    },
    { 
      title: "Most Affordable Pricing", 
      desc: "We offer the most competitive pricing for Surat businesses while maintaining premium quality. Our efficient processes and experienced team mean you get excellent value. We understand the budget constraints of small traders and startups in Gujarat.",
      icon: <Star className="w-5 h-5" />,
      stats: "45% Cost Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Surat's fast-paced trading environment demands quick turnaround, and we deliver.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Gujarati & Hindi Support", 
      desc: "We build fully localized apps with Gujarati and Hindi language support, including local UI, content management, and push notifications. This is especially important for apps targeting local traders and consumers in Gujarat.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Gujarati Support"
    },
    { 
      title: "Quality Focus", 
      desc: "We maintain enterprise-grade quality standards for all projects. Our QA processes include automated testing, performance optimization, security audits, and device compatibility testing. B2B apps undergo additional testing for complex workflows.",
      icon: <Award className="w-5 h-5" />,
      stats: "99.9% Uptime"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹30,000 - ₹90,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹90,000 - ₹2,25,000", 
      ideal: "Growing businesses & B2B apps",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,25,000 - ₹5,50,000+", 
      ideal: "Large corporations & trading platforms",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Diamond Trading Platform",
      client: "Surat Diamond Consortium",
      description: "Built a comprehensive B2B diamond trading platform with inventory management, certification verification, real-time pricing, and global buyer connections. The app connects 500+ diamond traders with international buyers.",
      results: ["500+ Traders", "₹100Cr+ GMV", "Global Reach", "Certification API"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Blockchain"]
    },
    {
      title: "Textile B2B Marketplace",
      client: "Surat Textile Association",
      description: "Developed a B2B marketplace for fabric trading with product catalogs, sample requests, order management, and payment processing. The app connects textile manufacturers with buyers across India.",
      results: ["300+ Manufacturers", "₹50Cr+ GMV", "Pan-India Reach", "B2B Trading"],
      tech: ["React Native", "Python", "MongoDB", "Razorpay", "AWS"]
    },
    {
      title: "Logistics Management App",
      client: "Surat Transport Company",
      description: "Created a fleet management and logistics app with real-time tracking, route optimization, delivery management, and driver apps. The app manages 200+ vehicles across Gujarat.",
      results: ["200+ Vehicles", "30% Cost Reduction", "Real-time Tracking", "Route Optimization"],
      tech: ["Kotlin", "Swift", "Java Spring", "Google Maps", "Firebase"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Surat?",
      answer: "App development in Surat costs ₹30,000 to ₹5,50,000+ depending on complexity. Startup apps with basic features cost ₹30,000-₹90,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹90,000-₹2,25,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,25,000-₹5,50,000+. We offer the most affordable pricing in Gujarat while delivering premium quality."
    },
    {
      question: "Do you build diamond and textile industry apps?",
      answer: "Yes! We specialize in B2B apps for Surat's diamond and textile industries. We've built inventory management systems, trading platforms, certification verification apps, B2B marketplaces, and CRM solutions. We understand the unique workflows of diamond trading, fabric manufacturing, and global B2B commerce."
    },
    {
      question: "Can you build apps with diamond certification verification?",
      answer: "Absolutely! We integrate with major diamond certification bodies like GIA, IGI, and HRD. Our apps can verify certificates, display grading reports, and provide authenticity verification. We also build custom certification management systems for diamond trading houses."
    },
    {
      question: "How long does app development take in Surat?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent B2B projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Surat?",
      answer: "Yes! We regularly visit Surat for client meetings, workshops, and project kickoffs. We can meet at your office in Vesu, Adajan, Varachha, Ring Road, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Do you provide Gujarati language support in apps?",
      answer: "Yes! We build fully localized apps with Gujarati language support, including Gujarati UI, Gujarati fonts, Gujarati content management, and Gujarati push notifications. We handle Gujarati script properly. This is especially important for apps targeting local traders and consumers."
    },
    {
      question: "What technologies do you use for Surat app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For B2B: We integrate with Tally, SAP, and custom ERPs. For cloud: AWS, Azure, Google Cloud."
    },
    {
      question: "Can you build apps for the textile industry?",
      answer: "Yes! Surat is India's textile capital. We've built B2B marketplaces, inventory management systems, order tracking apps, and supplier management solutions for textile businesses. We understand the unique workflows of fabric trading, saree manufacturing, and garment production."
    },
    {
      question: "Do you build apps with multi-currency support?",
      answer: "Yes! Surat's diamond and textile industries trade globally. We build apps with multi-currency support, international payment gateways, currency conversion, and compliance with international trade regulations. Our apps support USD, EUR, AED, and other major currencies."
    },
    {
      question: "What about app security for trading apps?",
      answer: "Security is paramount for trading applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging for all transactions."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. B2B apps get priority support during trading hours."
    },
    {
      question: "Can you integrate with Tally and other accounting software?",
      answer: "Yes, we specialize in Tally integration which is widely used by Surat businesses. We can sync orders, inventory, invoices, and financial data between your app and Tally. We also integrate with other accounting software, ERPs, and business systems."
    },
    {
      question: "Do you sign NDAs for Surat projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels."
    },
    {
      question: "Can you scale apps for large trading volumes?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built trading platforms that handle thousands of transactions daily and can scale during peak trading periods."
    },
    {
      question: "What makes you different from other Surat app development companies?",
      answer: "Three key differentiators: 1) Industry Expertise: Deep specialization in diamond and textile B2B apps with understanding of trading workflows. 2) Global B2B: Experience building apps that connect Surat traders with international buyers. 3) Affordable Quality: Most competitive pricing in Gujarat while delivering premium quality."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Surat business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider B2B workflows, Gujarati language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. B2B apps undergo additional testing for complex trading workflows." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with priority support during trading hours." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "B2B & Trading", technologies: ["Multi-currency", "Payment Gateways", "Certification APIs", "Inventory Sync", "ERP Integration", "Audit Logging"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "Oracle", "ERP Connect", "SSO/LDAP", "Blockchain"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Surat | Mobile App Developers Gujarat | Web Nova Crew" description="Top app development company in Surat. Android, iOS, Flutter apps for diamond, textile industries. ₹30,000 onwards." keywords="app development Surat, mobile app developers Surat, diamond app Surat, textile app Gujarat" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Surat", url: "https://webnovacrew.com/locations/app-development-surat" }]} />
      <ServiceSchema serviceName="App Development in Surat" serviceDescription="Professional mobile app development for Surat businesses." serviceUrl="https://webnovacrew.com/locations/app-development-surat" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Surat, Gujarat • Diamond City • 7M+ Population</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">App Development Company in Surat</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-blue-400 font-semibold">Surat's</span> trusted app partner for diamond, textile & business apps.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Vesu, Adajan, Ring Road & across Surat.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400">30+</div><div className="text-sm text-slate-400">Surat Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-cyan-400">₹30K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-cyan-400">45%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Surat</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Gujarat's diamond city. From B2B trading platforms to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Surat's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/50 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">World's Diamond Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Surat cuts and polishes 90% of the world's diamonds. We've built B2B trading platforms, inventory management systems, and certification verification apps that connect Surat's diamond traders with international buyers in Dubai, Antwerp, and New York.</p>
              <p className="text-slate-300 leading-relaxed">Our diamond industry apps handle complex workflows including stone grading, certification, pricing, and global logistics.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-950/30 to-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Textile Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Surat is India's largest man-made fabric producer and a major saree manufacturing center. We've built B2B marketplaces, fabric inventory systems, and order management apps for textile manufacturers and traders.</p>
              <p className="text-slate-300 leading-relaxed">Our textile apps connect manufacturers with buyers across India and handle complex fabric specifications, sampling, and bulk ordering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Surat</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Surat Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-blue-500/10 rounded-lg px-3 py-2 text-center"><span className="text-blue-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Surat Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-blue-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-blue-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Surat Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">{item.icon}</div>
                  <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Surat App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Most affordable pricing in Gujarat with premium quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-blue-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Surat App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Surat App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 35+ Surat businesses who trusted us with their digital transformation</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Surat Meeting</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
