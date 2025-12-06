import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Briefcase, Heart, ShoppingCart, Car, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentGurgaon() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Gurgaon's corporate user base. Our Android development team creates high-performance apps optimized for enterprise devices. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for corporate security requirements.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Enterprise Security", "MDM Integration", "Hindi Language", "Offline Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Gurgaon's affluent iPhone user base. Gurgaon has the highest iPhone penetration in India, especially in corporate sectors. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Gurgaon startups and enterprises looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Gurgaon's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Fortune 500 companies and MNCs in Cyber City. We build ERP integrations, CRM systems, workflow automation, and custom business process apps that integrate with existing enterprise infrastructure like SAP, Salesforce, and Oracle.",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["ERP Integration", "CRM Systems", "SAP Connect", "Salesforce API", "SSO/LDAP", "Enterprise Security"]
    },
    { 
      title: "Fintech & Banking Apps", 
      desc: "RBI-compliant banking, payment, and trading applications for Gurgaon's thriving fintech sector. We build apps with UPI integration, wallet management, stock trading, and lending platforms. Our fintech apps meet all regulatory requirements.",
      icon: <Building2 className="w-6 h-6" />,
      features: ["RBI Compliant", "UPI Integration", "Stock Trading", "Lending Platform", "KYC/AML", "PCI DSS"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Gurgaon's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "SaaS Product Development", 
      desc: "Cloud-native SaaS applications for Gurgaon's B2B software companies. We build multi-tenant architectures, subscription management, and scalable backends that can handle enterprise-grade workloads for global clients.",
      icon: <Database className="w-6 h-6" />,
      features: ["Multi-tenant", "Subscription Billing", "API-first", "Microservices", "Auto-scaling", "Enterprise Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & MNCs", desc: "Enterprise apps, internal tools, and client products for Fortune 500 companies and MNCs in Cyber City and Golf Course Road.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "RBI-compliant banking apps, payment solutions, trading platforms, and lending apps for Gurgaon's fintech hub.", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Gurgaon's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Consulting & Services", desc: "Client management apps, project tracking, and business intelligence for consulting firms in Gurgaon.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Gurgaon's premium healthcare sector.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & PropTech", desc: "Property listing apps, virtual tour platforms, and PropTech solutions for Gurgaon's real estate market.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Startups & SaaS", desc: "MVP development, SaaS products, and innovative solutions for Gurgaon's thriving startup ecosystem.", icon: <Rocket className="w-5 h-5" /> },
    { name: "Automobile & EV", desc: "Connected car apps, EV charging platforms, and automotive solutions for Gurgaon's automobile industry.", icon: <Car className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Cyber City", type: "IT Hub", desc: "Gurgaon's premier IT hub with major MNCs, tech companies, and corporate offices." },
    { name: "Cyber Hub", type: "Business District", desc: "Premium business and entertainment district with restaurants, offices, and corporate events." },
    { name: "Golf Course Road", type: "Corporate Corridor", desc: "Premium corporate corridor with high-rise offices, luxury hotels, and business centers." },
    { name: "MG Road", type: "Commercial Hub", desc: "Major commercial hub with malls, restaurants, and business offices." },
    { name: "Sohna Road", type: "Emerging Hub", desc: "Rapidly developing area with new corporate offices and commercial spaces." },
    { name: "Udyog Vihar", type: "Industrial Zone", desc: "Industrial and manufacturing hub with factories and business establishments." },
    { name: "DLF Phase 1-5", type: "Mixed Use", desc: "Planned townships with residential, commercial, and retail spaces." },
    { name: "Sector 29", type: "Entertainment Hub", desc: "Entertainment and dining hub with restaurants, bars, and event venues." },
    { name: "Sector 44", type: "Commercial Zone", desc: "Commercial hub with corporate offices and professional services." },
    { name: "Sector 56", type: "Residential Hub", desc: "Residential area with growing commercial presence." },
    { name: "Manesar", type: "Industrial Hub", desc: "Major industrial hub with manufacturing units and warehouses." },
    { name: "IMT Manesar", type: "Manufacturing Zone", desc: "Industrial Model Township with automobile and manufacturing companies." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Gurgaon Corporate Expertise", 
      desc: "Gurgaon is India's corporate capital with Fortune 500 companies and MNCs. We have deep experience building enterprise apps for large corporations. Our team understands corporate requirements, compliance needs, and enterprise security standards.",
      icon: <Briefcase className="w-5 h-5" />,
      stats: "80+ Corporate Apps"
    },
    { 
      title: "Fintech Specialists", 
      desc: "Gurgaon is India's fintech hub. We specialize in RBI-compliant banking apps, payment solutions, trading platforms, and lending apps. Our fintech apps meet all regulatory requirements including PCI DSS, KYC/AML, and data localization.",
      icon: <TrendingUp className="w-5 h-5" />,
      stats: "25+ Fintech Apps"
    },
    { 
      title: "Competitive Pricing", 
      desc: "We offer 30-40% lower rates than Cyber City agencies while maintaining the same quality standards. Based in Lucknow with NCR presence, we provide metro-quality development at competitive pricing.",
      icon: <Star className="w-5 h-5" />,
      stats: "35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Enterprise Security", 
      desc: "We follow SOC2 compliant development practices. Our apps undergo rigorous security audits, penetration testing, and code reviews. We implement enterprise-grade security including encryption, secure authentication, and audit logging.",
      icon: <Shield className="w-5 h-5" />,
      stats: "SOC2 Compliant"
    },
    { 
      title: "24/7 Support & NCR Presence", 
      desc: "We provide round-the-clock support and have regular presence in NCR. Whether you're in Cyber City, Golf Course Road, or anywhere in Gurgaon, we can meet at your office for project discussions.",
      icon: <Award className="w-5 h-5" />,
      stats: "24/7 Support"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹50,000 - ₹1,50,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹1,50,000 - ₹4,00,000", 
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹4,00,000 - ₹10,00,000+", 
      ideal: "Large corporations & MNCs",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "SAP/Salesforce integration", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Enterprise CRM for MNC",
      client: "Fortune 500 Company",
      description: "Built a comprehensive enterprise CRM app for a Fortune 500 company with Salesforce integration, lead management, and analytics. The app serves 5,000+ sales representatives across India.",
      results: ["5K+ Users", "Salesforce Integration", "Real-time Analytics", "Offline Mode"],
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Salesforce API"]
    },
    {
      title: "Fintech Trading Platform",
      client: "Gurgaon Fintech Startup",
      description: "Created a comprehensive stock trading platform with real-time market data, portfolio management, and secure transactions. The app processes 100,000+ trades monthly.",
      results: ["100K+ Trades", "Real-time Data", "RBI Compliant", "PCI DSS"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "NSE/BSE APIs"]
    },
    {
      title: "E-commerce Marketplace",
      client: "Gurgaon Retail Company",
      description: "Developed a B2B e-commerce marketplace with vendor management, order processing, and logistics integration. The platform serves 10,000+ retailers.",
      results: ["10K+ Retailers", "Vendor Portal", "Logistics API", "Payment Gateway"],
      tech: ["Flutter", "Python", "MongoDB", "AWS", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Gurgaon?",
      answer: "App development in Gurgaon costs ₹50,000 to ₹10,00,000+ depending on complexity. Startup apps with basic features cost ₹50,000-₹1,50,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,50,000-₹4,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹4,00,000-₹10,00,000+. We're 35% cheaper than Cyber City agencies."
    },
    {
      question: "Do you work with Gurgaon MNCs?",
      answer: "Yes! We partner with Fortune 500 companies and MNCs in Cyber City, Golf Course Road, and across Gurgaon. We understand enterprise requirements, compliance needs, and can integrate with systems like SAP, Salesforce, and Oracle."
    },
    {
      question: "Do you build fintech apps?",
      answer: "Yes! Gurgaon is India's fintech hub. We specialize in RBI-compliant banking apps, payment solutions, trading platforms, and lending apps. Our fintech apps meet all regulatory requirements including PCI DSS, KYC/AML, and data localization."
    },
    {
      question: "How long does app development take in Gurgaon?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Gurgaon?",
      answer: "Yes! We have regular presence in NCR and can meet at Cyber City, Golf Course Road, DLF, or your office location. We visit NCR weekly for project discussions, workshops, and reviews."
    },
    {
      question: "Can you integrate with enterprise systems like SAP?",
      answer: "Yes! We have experience integrating with SAP, Salesforce, Oracle, Microsoft Dynamics, and other enterprise systems. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "What technologies do you use for Gurgaon app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For enterprise: We integrate with SAP, Salesforce, and other enterprise systems."
    },
    {
      question: "Do you build apps for automobile companies?",
      answer: "Yes! Gurgaon has a strong automobile industry. We build connected car apps, EV charging platforms, dealer management systems, and automotive solutions for automobile companies in Manesar and IMT."
    },
    {
      question: "What about app security for enterprise apps?",
      answer: "Security is paramount for enterprise applications. We follow SOC2 compliant development practices. Our apps undergo rigorous security audits, penetration testing, and code reviews. We implement enterprise-grade security including encryption, secure authentication, and audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer 24/7 support for enterprise clients."
    },
    {
      question: "Can you build apps with real-time features?",
      answer: "Yes! We build apps with real-time features including live chat, real-time notifications, live tracking, and real-time data sync. Our apps use WebSocket, Firebase, and other real-time technologies."
    },
    {
      question: "Do you sign NDAs for Gurgaon projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve 100,000+ users and can handle high traffic loads."
    },
    {
      question: "Do you work with Gurgaon startups?",
      answer: "Yes! We've worked with 40+ NCR startups. We specialize in MVP development, helping founders validate ideas quickly. We offer flexible engagement models and can help you scale as you grow."
    },
    {
      question: "What makes you different from other Gurgaon app development companies?",
      answer: "Three key differentiators: 1) Corporate Expertise: Deep experience with Fortune 500 companies and MNCs. 2) Fintech Focus: Specialized experience in RBI-compliant fintech apps. 3) Value Pricing: 35% lower than Cyber City agencies with same quality and NCR presence."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Gurgaon office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider enterprise design standards and corporate branding guidelines." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Enterprise apps undergo additional security and penetration testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with 24/7 support for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Enterprise", technologies: ["SAP Integration", "Salesforce API", "Oracle Connect", "SSO/LDAP", "Audit Logging", "Compliance"] },
    { category: "Fintech", technologies: ["UPI APIs", "NSE/BSE APIs", "KYC/AML", "PCI DSS", "Payment Gateway", "Trading APIs"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Gurgaon | Mobile App Developers Gurugram | Web Nova Crew" description="Top app development company in Gurgaon. Android, iOS, Flutter apps for MNCs, fintech in Cyber City, Golf Course Road. ₹50,000 onwards." keywords="app development Gurgaon, mobile app developers Gurugram, Cyber City app development, fintech app Gurgaon" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Gurgaon", url: "https://webnovacrew.com/locations/app-development-gurgaon" }]} />
      <ServiceSchema serviceName="App Development in Gurgaon" serviceDescription="Professional mobile app development for Gurgaon businesses and MNCs." serviceUrl="https://webnovacrew.com/locations/app-development-gurgaon" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-sky-400" /><span className="text-sm text-sky-300">Gurgaon (Gurugram), Haryana • Millennium City • 3M+ Population</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-100 to-blue-100 bg-clip-text text-transparent">App Development Company in Gurgaon</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-sky-400 font-semibold">Gurgaon's</span> trusted app partner for MNCs, fintech & enterprises.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Cyber City, Golf Course Road, DLF & across Gurugram.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-sky-400">80+</div><div className="text-sm text-slate-400">Gurgaon Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-blue-400">₹50K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-sky-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-blue-400">35%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Gurgaon</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for India's corporate capital. From MNC solutions to fintech apps.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-sky-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gurgaon: India's Corporate Capital</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-950/30 to-slate-900/50 border border-sky-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 & MNC Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Gurgaon is India's corporate capital with Cyber City and Golf Course Road hosting Fortune 500 companies and MNCs. The city has the highest concentration of corporate offices in India.</p>
              <p className="text-slate-300 leading-relaxed">We have deep experience building enterprise apps for large corporations. Our team understands corporate requirements, compliance needs, and enterprise security standards.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/50 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Hub of India</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Gurgaon is India's fintech hub with major banks, NBFCs, and fintech startups. The city leads in digital payments, lending, and wealth management innovation.</p>
              <p className="text-slate-300 leading-relaxed">We specialize in RBI-compliant fintech apps. Our apps meet all regulatory requirements including PCI DSS, KYC/AML, and data localization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Gurgaon</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-sky-500/50 transition-all">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gurgaon Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-sky-500/50 transition-all">
                <div className="text-sky-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-sky-500/10 rounded-lg px-3 py-2 text-center"><span className="text-sky-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Gurgaon Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-sky-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-sky-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-sky-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-sky-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-sky-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Gurgaon Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-sky-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400">{item.icon}</div>
                  <div className="text-sm font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gurgaon App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">35% savings compared to Cyber City agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-sky-500 ring-2 ring-sky-500/20' : 'border-slate-700 hover:border-sky-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-sky-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-sky-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-sky-600 to-blue-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gurgaon App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-sky-950/50 to-blue-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Gurgaon App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your enterprise, fintech, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
