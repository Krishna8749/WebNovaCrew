import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Gem,
  Heart, ShoppingCart, Home, Briefcase, Factory, Beaker
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentAhmedabad() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Ahmedabad's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Gujarat's trading and manufacturing ecosystem. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions. Our apps integrate with business systems used by Ahmedabad's textile, diamond, and pharma industries.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "B2B Integration", "Offline Support", "Google Pay/UPI", "Gujarati Language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Ahmedabad's growing iPhone user base in areas like SG Highway, Prahlad Nagar, and Satellite. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Gujarat's business executives and entrepreneurs expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Ahmedabad businesses looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for B2B marketplaces and consumer-facing applications.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Ahmedabad's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Textile & Diamond Industry Apps", 
      desc: "Specialized B2B applications for Ahmedabad's core industries - textile and diamond trading. We build B2B marketplaces, inventory management systems, order tracking, supplier management, quality grading, and CRM solutions. Our apps understand the unique workflows of fabric trading, diamond certification, and wholesale distribution.",
      icon: <Gem className="w-6 h-6" />,
      features: ["B2B Marketplace", "Inventory Management", "Order Tracking", "Quality Grading", "Supplier CRM", "Wholesale Pricing"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Full-featured e-commerce applications for Ahmedabad's thriving retail sector. We build online shopping apps, B2B marketplaces, multi-vendor platforms, and wholesale distribution apps. Our e-commerce apps include product catalogs, cart management, payment integration, order tracking, and inventory management for Gujarat's trading community.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Inventory Sync", "Multi-vendor", "Wholesale Features"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Ahmedabad's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for quality inspection, and predictive analytics for business intelligence. Our AI apps can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "Quality Inspection", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Ahmedabad's large corporations and manufacturing companies. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Tally. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Tally Integration", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Textile & Garments", desc: "B2B marketplaces, inventory management, and order tracking for Ahmedabad's textile hub. Apps for fabric trading, garment manufacturing, and wholesale distribution.", icon: <Gem className="w-5 h-5" /> },
    { name: "Diamond & Jewelry", desc: "Diamond certification apps, inventory management, B2B trading platforms, and CRM for Ahmedabad's diamond industry. Quality grading and supplier management.", icon: <Gem className="w-5 h-5" /> },
    { name: "Pharmaceuticals", desc: "Pharma distribution apps, inventory tracking, compliance management, and sales force automation for Gujarat's pharmaceutical sector.", icon: <Beaker className="w-5 h-5" /> },
    { name: "Chemical Industry", desc: "Supply chain apps, safety compliance, inventory management, and B2B platforms for Ahmedabad's chemical manufacturing sector.", icon: <Factory className="w-5 h-5" /> },
    { name: "FMCG & Consumer Goods", desc: "Distribution management, sales force automation, and retail apps for Gujarat's FMCG companies. Order booking and route optimization.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, construction management, and PropTech solutions for Ahmedabad's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Ahmedabad's growing e-commerce ecosystem. B2B and B2C platforms.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Ahmedabad's IT companies on SG Highway and in GIFT City.", icon: <Code2 className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "SG Highway", type: "IT Corridor", desc: "Ahmedabad's premier IT and business corridor with corporate offices, tech parks, and modern commercial spaces." },
    { name: "Prahlad Nagar", type: "Business Hub", desc: "Major business hub with corporate offices, retail, and growing tech presence. Home to many startups and SMEs." },
    { name: "Satellite", type: "Commercial Center", desc: "Established commercial area with corporate offices, banks, and professional services." },
    { name: "Navrangpura", type: "Central Business", desc: "Central Ahmedabad's business hub with traditional businesses, educational institutions, and professional services." },
    { name: "Ashram Road", type: "Commercial Strip", desc: "Historic commercial strip with textile markets, trading offices, and traditional businesses." },
    { name: "CG Road", type: "Retail Hub", desc: "Famous retail and commercial hub with shopping, restaurants, and business offices." },
    { name: "Vastrapur", type: "Modern Hub", desc: "Modern commercial and residential area with corporate offices, malls, and tech companies." },
    { name: "Bodakdev", type: "Premium Area", desc: "Premium residential and commercial area with upscale offices and professional services." },
    { name: "Thaltej", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces, tech companies, and residential complexes." },
    { name: "Gandhinagar", type: "State Capital", desc: "Gujarat's capital with government offices, GIFT City, and growing IT presence." },
    { name: "GIFT City", type: "Fintech Hub", desc: "India's first operational smart city and international financial services center. Fintech and banking hub." },
    { name: "Sanand", type: "Industrial Zone", desc: "Industrial hub with manufacturing units, automobile plants, and growing commercial presence." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Gujarat Business Expertise", 
      desc: "We understand Ahmedabad's unique business culture - the trading mindset, the manufacturing ecosystem, and the entrepreneurial spirit. Our team has worked with businesses across Gujarat and knows what it takes to succeed in this market. We speak the language of Ahmedabad's business community and understand local practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "50+ Gujarat Apps"
    },
    { 
      title: "Textile & Diamond Specialists", 
      desc: "Ahmedabad is India's textile capital and a major diamond trading hub. We've built our B2B expertise to serve these industries with marketplace apps, inventory management, order tracking, and CRM solutions. We understand the unique workflows of fabric trading, diamond certification, and wholesale distribution.",
      icon: <Gem className="w-5 h-5" />,
      stats: "15+ Industry Apps"
    },
    { 
      title: "Enterprise-Grade Solutions", 
      desc: "Gujarat's large corporations and manufacturing companies demand enterprise-grade reliability. We build apps that scale to millions of users, integrate with legacy systems including Tally, comply with corporate IT policies, and provide the security and audit trails that enterprise clients require.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "25+ Enterprise Clients"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by SG Highway companies, we offer significant cost savings compared to agencies based in the IT corridor. Our efficient processes and experienced team mean you get premium quality at competitive prices with complete transparency.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Gujarat's business culture values speed and efficiency. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Ahmedabad's fast-paced business environment.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 5-Week MVP"
    },
    { 
      title: "Gujarati Language Support", 
      desc: "We build fully localized apps with Gujarati language support, including Gujarati UI, Gujarati content management, and Gujarati push notifications. This is especially important for apps targeting local consumers, B2B platforms, and businesses serving Gujarat's diverse population.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Gujarati Support"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹35,000 - ₹1,00,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹1,00,000 - ₹2,50,000", 
      ideal: "Growing businesses & B2B platforms",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,50,000 - ₹6,00,000+", 
      ideal: "Large corporations & complex apps",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Textile B2B Marketplace",
      client: "Ahmedabad Textile Association",
      description: "Built a comprehensive B2B marketplace for fabric trading with product catalogs, sample requests, order management, and payment processing. The app connects 500+ textile manufacturers with 2,000+ buyers across India.",
      results: ["500+ Manufacturers", "2,000+ Buyers", "₹50Cr+ GMV", "Multi-language"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Razorpay"]
    },
    {
      title: "Diamond Inventory System",
      client: "Ahmedabad Diamond Merchant",
      description: "Developed a diamond inventory and certification app with quality grading, image capture, pricing, and B2B trading features. The app manages 100,000+ diamond records with real-time sync.",
      results: ["100K+ Diamonds", "Quality Grading", "Real-time Sync", "B2B Trading"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Stripe"]
    },
    {
      title: "Pharma Distribution App",
      client: "Gujarat Pharma Distributor",
      description: "Created a pharma distribution app with order booking, inventory tracking, route optimization, and compliance management. The app is used by 300+ sales representatives across Gujarat.",
      results: ["300+ Sales Reps", "40% Efficiency Gain", "Compliance Ready", "Tally Integration"],
      tech: ["Kotlin", "Swift", "Java Spring", "Oracle", "Firebase"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Ahmedabad?",
      answer: "App development in Ahmedabad costs ₹35,000 to ₹6,00,000+ depending on complexity. Startup apps with basic features cost ₹35,000-₹1,00,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,00,000-₹2,50,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,50,000-₹6,00,000+. We offer 30-40% lower pricing than typical SG Highway agencies while delivering premium quality."
    },
    {
      question: "Do you build apps for the textile and diamond industry?",
      answer: "Yes! Ahmedabad is India's textile capital and a major diamond trading hub. We specialize in B2B apps for these industries including marketplace platforms, inventory management, order tracking, quality grading, supplier CRM, and wholesale distribution apps. We understand the unique workflows of fabric trading and diamond certification."
    },
    {
      question: "Can you work with GIFT City fintech companies?",
      answer: "Absolutely! We work with GIFT City fintech companies and can build compliant financial apps, trading platforms, banking solutions, and investment apps. We understand IFSC regulations and can build apps that meet the compliance requirements of India's international financial services center."
    },
    {
      question: "Do you provide Gujarati language support in apps?",
      answer: "Yes! We build fully localized apps with Gujarati language support, including Gujarati UI, Gujarati fonts, Gujarati content management, and Gujarati push notifications. We handle Unicode properly for Gujarati text rendering. This is especially important for B2B platforms and apps targeting local consumers."
    },
    {
      question: "How long does app development take in Ahmedabad?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team."
    },
    {
      question: "Do you provide on-site meetings in Ahmedabad?",
      answer: "Yes! We regularly visit Ahmedabad for client meetings, workshops, and project kickoffs. We can meet at your office on SG Highway, Prahlad Nagar, CG Road, Ashram Road, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Can you integrate with Tally and other accounting software?",
      answer: "Yes, we specialize in Tally integration which is widely used by Ahmedabad businesses. We can sync orders, inventory, invoices, and financial data between your app and Tally. We also integrate with other accounting software, ERPs, and business systems used by Gujarat companies."
    },
    {
      question: "What technologies do you use for Ahmedabad app development?",
      answer: "We use modern, enterprise-approved technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For cloud: AWS, Azure, Google Cloud. For enterprise: We integrate with Tally, SAP, Oracle, and custom ERPs."
    },
    {
      question: "Do you build B2B marketplace apps?",
      answer: "Yes! We specialize in B2B marketplace apps for Ahmedabad's trading community. We've built platforms for textile trading, diamond trading, pharma distribution, and wholesale commerce. Our B2B apps include product catalogs, sample requests, bulk ordering, credit management, and wholesale pricing features."
    },
    {
      question: "Can you build apps for the pharmaceutical industry?",
      answer: "Yes! Gujarat is a major pharmaceutical hub, and we've built apps for pharma distribution, sales force automation, inventory tracking, compliance management, and order booking. We understand the regulatory requirements and can build apps that meet pharma industry standards."
    },
    {
      question: "What about app security for enterprise and financial apps?",
      answer: "Security is paramount, especially for Ahmedabad's enterprise and financial sectors. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. For fintech, we ensure regulatory compliance."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements for enterprise clients with SLA guarantees."
    },
    {
      question: "Can you build apps for manufacturing companies?",
      answer: "Yes! Ahmedabad has a strong manufacturing base, and we've built apps for factory management, supply chain tracking, quality control, inventory management, and IoT integration. We understand the needs of manufacturing companies in textiles, chemicals, and other industries."
    },
    {
      question: "Do you sign NDAs for Ahmedabad projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. Many of our Ahmedabad clients are in competitive industries where confidentiality is critical."
    },
    {
      question: "What makes you different from other Ahmedabad app development companies?",
      answer: "Three key differentiators: 1) Industry Expertise: We specialize in Ahmedabad's key industries - textile, diamond, pharma, and B2B trading - with deep understanding of local requirements. 2) Quality at Better Prices: We deliver SG Highway-quality work at 30-40% lower costs through efficient processes. 3) Reliability: We've delivered 50+ apps for Gujarat businesses with a track record of on-time delivery."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Ahmedabad business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Gujarati language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. B2B apps undergo additional integration and workflow testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "B2B & Commerce", technologies: ["Razorpay", "PayU", "Inventory APIs", "Catalog Management", "Order Systems", "Wholesale Pricing"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "Oracle", "ERP Connect", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Ahmedabad | Mobile App Developers Gujarat | Web Nova Crew"
        description="Top app development company in Ahmedabad. Android, iOS, Flutter apps for textile, diamond, pharma industries in SG Highway, Prahlad Nagar. ₹35,000 onwards."
        keywords="app development company Ahmedabad, mobile app developers Ahmedabad, SG Highway app development, Gujarat app developers, Flutter developers Ahmedabad, textile app development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Ahmedabad", url: "https://webnovacrew.com/locations/app-development-ahmedabad" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Ahmedabad"
        serviceDescription="Professional mobile app development for Ahmedabad businesses. Android, iOS, Flutter apps for textile, diamond, pharma sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-ahmedabad"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">Ahmedabad, Gujarat • Commercial Capital of Gujarat • 8M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent">
              App Development Company in Ahmedabad
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-amber-400 font-semibold">Gujarat's</span> trusted app development partner. We build <span className="text-orange-400 font-semibold">industry-specific apps</span> for textile, diamond, pharma & enterprises.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in SG Highway, Prahlad Nagar, GIFT City & across Ahmedabad.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">40+</div>
                <div className="text-sm text-slate-400">Gujarat Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-1">₹35K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">3-10</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-1">40%</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Ahmedabad</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Gujarat's diverse business ecosystem. From B2B textile marketplaces to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Ahmedabad's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Textile & Diamond Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Ahmedabad is India's textile capital and a major diamond trading hub. We've built our B2B expertise to serve these industries with marketplace apps, inventory management, order tracking, and CRM solutions that understand the unique workflows of fabric trading and diamond certification.</p>
              <p className="text-slate-300 leading-relaxed">Our apps connect manufacturers with buyers, manage wholesale pricing, and handle the complex logistics of B2B trading.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-900/50 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">GIFT City & Fintech Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">GIFT City is India's first operational smart city and international financial services center. We work with GIFT City fintech companies to build compliant financial apps, trading platforms, and banking solutions that meet IFSC regulations.</p>
              <p className="text-slate-300 leading-relaxed">Combined with Gujarat's entrepreneurial spirit, Ahmedabad offers a unique blend of traditional trading and modern fintech innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Ahmedabad</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ahmedabad Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="text-amber-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-amber-500/10 rounded-lg px-3 py-2 text-center"><span className="text-amber-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Ahmedabad Business Hubs</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-amber-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-amber-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-amber-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Ahmedabad Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">{item.icon}</div>
                  <div className="text-sm font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ahmedabad App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Transparent pricing. 30-40% lower than typical SG Highway agencies.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-700 hover:border-amber-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-amber-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-amber-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ahmedabad App Development FAQs</h2></div>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-950/50 to-orange-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Ahmedabad App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 40+ Gujarat businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Ahmedabad Meeting</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
