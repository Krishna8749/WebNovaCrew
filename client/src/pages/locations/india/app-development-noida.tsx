import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, GraduationCap, Briefcase, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentNoida() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Noida's tech-savvy user base. Our Android development team creates high-performance apps optimized for devices used across NCR. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Noida's affluent iPhone user base. NCR has high iPhone penetration especially in corporate sectors. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Noida startups and IT companies looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Noida's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Noida's thriving startup ecosystem. Sector 62, 63 and Greater Noida have numerous startups. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users and presented to investors.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for large Noida corporations and IT companies. We build ERP integrations, CRM systems, workflow automation, and custom business process apps that integrate with existing enterprise infrastructure.",
      icon: <Building2 className="w-6 h-6" />,
      features: ["ERP Integration", "CRM Systems", "Workflow Automation", "Analytics Dashboard", "SSO/LDAP", "Enterprise Security"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Noida's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "SaaS Product Development", 
      desc: "Cloud-native SaaS applications for Noida's B2B software companies. We build multi-tenant architectures, subscription management, and scalable backends that can handle enterprise-grade workloads.",
      icon: <Database className="w-6 h-6" />,
      features: ["Multi-tenant", "Subscription Billing", "API-first", "Microservices", "Auto-scaling", "Enterprise Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Noida's IT companies in Sector 62, 63, and Greater Noida.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Startups & SaaS", desc: "MVP development, SaaS products, and innovative solutions for Noida's thriving startup ecosystem.", icon: <Rocket className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Noida's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "Fintech apps, banking solutions, and financial services apps for banks and NBFCs operating in Noida.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "EdTech & Education", desc: "LMS platforms, coaching apps, and EdTech solutions for Noida's education sector and online learning companies.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Noida's healthcare sector.", icon: <Heart className="w-5 h-5" /> },
    { name: "Media & Entertainment", desc: "Streaming apps, content platforms, and media solutions for Film City and media companies.", icon: <Film className="w-5 h-5" /> },
    { name: "Real Estate & PropTech", desc: "Property listing apps, virtual tour platforms, and PropTech solutions for Noida's real estate market.", icon: <Building2 className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Sector 62", type: "IT Hub", desc: "Noida's premier IT hub with major software companies, tech startups, and IT services firms." },
    { name: "Sector 63", type: "Tech Park", desc: "Major tech park area with IT companies, BPOs, and corporate offices." },
    { name: "Sector 18", type: "Commercial Hub", desc: "Commercial and entertainment hub with malls, restaurants, and business offices." },
    { name: "Sector 125", type: "Corporate Zone", desc: "Corporate zone with large enterprises, IT companies, and business parks." },
    { name: "Sector 132", type: "Business District", desc: "Emerging business district with corporate offices and commercial spaces." },
    { name: "Sector 16", type: "Industrial Area", desc: "Industrial area with manufacturing units and business establishments." },
    { name: "Film City", type: "Media Hub", desc: "Media and entertainment hub with production houses and studios." },
    { name: "Greater Noida", type: "Tech Township", desc: "Planned township with IT companies, universities, and commercial spaces." },
    { name: "Noida Expressway", type: "Corporate Corridor", desc: "Corporate corridor with high-rise offices and commercial complexes." },
    { name: "Sector 15", type: "Commercial Zone", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "Sector 44", type: "Business Area", desc: "Business area with corporate offices and professional services." },
    { name: "Knowledge Park", type: "Education Hub", desc: "Education hub with universities, colleges, and EdTech companies." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Noida IT Expertise", 
      desc: "Noida is NCR's IT hub with Sector 62, 63 hosting major tech companies. We have deep understanding of Noida's IT ecosystem and have built 60+ apps for IT companies, startups, and enterprises in the region.",
      icon: <Award className="w-5 h-5" />,
      stats: "60+ Noida Apps"
    },
    { 
      title: "Startup Specialists", 
      desc: "Noida has a thriving startup ecosystem. We specialize in MVP development for startups, helping founders validate ideas quickly with lean, functional prototypes. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "30+ Startup MVPs"
    },
    { 
      title: "Competitive NCR Pricing", 
      desc: "We offer 30% lower rates than Sector 62 agencies while maintaining the same quality standards. Based in Lucknow with NCR presence, we provide metro-quality development at competitive pricing.",
      icon: <Star className="w-5 h-5" />,
      stats: "30% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Enterprise Ready", 
      desc: "We build enterprise-grade applications that can scale to millions of users. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "Enterprise Grade"
    },
    { 
      title: "24/7 Support & NCR Presence", 
      desc: "We provide round-the-clock support and have regular presence in NCR. Whether you're in Sector 62, 63, Greater Noida, or anywhere in NCR, we can meet at your office for project discussions.",
      icon: <Shield className="w-5 h-5" />,
      stats: "24/7 Support"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹40,000 - ₹1,25,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹1,25,000 - ₹3,00,000", 
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹3,00,000 - ₹7,00,000+", 
      ideal: "Large corporations & IT companies",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "SaaS Product for IT Company",
      client: "Sector 62 IT Company",
      description: "Built a comprehensive SaaS product for an IT company with multi-tenant architecture, subscription management, and enterprise features. The platform serves 500+ enterprise clients.",
      results: ["500+ Clients", "Multi-tenant", "99.9% Uptime", "Enterprise Ready"],
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Stripe"]
    },
    {
      title: "EdTech Learning Platform",
      client: "Noida EdTech Startup",
      description: "Created a comprehensive learning platform with live classes, video content, assessments, and progress tracking. The app serves 100,000+ students across India.",
      results: ["100K+ Students", "Live Classes", "Video Content", "Assessments"],
      tech: ["Flutter", "Python", "MongoDB", "AWS", "Agora"]
    },
    {
      title: "Fintech Payment App",
      client: "NCR Fintech Startup",
      description: "Developed a fintech payment app with UPI integration, wallet management, and bill payments. The app processes 50,000+ transactions monthly.",
      results: ["50K+ Transactions", "UPI Integration", "Wallet", "Bill Payments"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Noida?",
      answer: "App development in Noida costs ₹40,000 to ₹7,00,000+ depending on complexity. Startup apps with basic features cost ₹40,000-₹1,25,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,25,000-₹3,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹3,00,000-₹7,00,000+. We're 30% cheaper than Sector 62 agencies."
    },
    {
      question: "Do you work with Noida IT companies?",
      answer: "Yes! We partner with IT companies in Sector 62, 63, and Greater Noida for internal apps, client projects, and white-label solutions. We understand the IT ecosystem and can integrate with existing enterprise systems."
    },
    {
      question: "How long does app development take in Noida?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Noida?",
      answer: "Yes! We have regular presence in NCR and can meet at Sector 62, 63, 18, Greater Noida, or your office location. We visit NCR weekly for project discussions, workshops, and reviews."
    },
    {
      question: "Do you work with Noida startups?",
      answer: "Yes! We've worked with 30+ NCR startups. We specialize in MVP development, helping founders validate ideas quickly. We offer flexible engagement models and can help you scale as you grow."
    },
    {
      question: "Can you build SaaS products?",
      answer: "Yes! We build cloud-native SaaS applications with multi-tenant architectures, subscription management, and scalable backends. Our SaaS products serve enterprise clients with 99.9% uptime."
    },
    {
      question: "What technologies do you use for Noida app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For enterprise: We integrate with ERP, CRM, and other enterprise systems."
    },
    {
      question: "Can you build apps for EdTech companies?",
      answer: "Yes! Noida has a strong EdTech ecosystem. We build LMS platforms, live class apps, video content platforms, and assessment systems. Our EdTech apps serve 100,000+ students."
    },
    {
      question: "Do you build fintech apps?",
      answer: "Yes! We've built fintech apps with UPI integration, wallet management, and payment processing. We understand RBI compliance and security requirements for financial applications."
    },
    {
      question: "What about app security for enterprise apps?",
      answer: "Security is paramount for enterprise applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer 24/7 support for enterprise clients."
    },
    {
      question: "Can you integrate with existing enterprise systems?",
      answer: "Yes, we have experience integrating with ERP systems, CRM platforms, HR software, and other enterprise applications. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "Do you sign NDAs for Noida projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve 100,000+ users and can handle high traffic loads."
    },
    {
      question: "What makes you different from other Noida app development companies?",
      answer: "Three key differentiators: 1) IT Ecosystem Expertise: Deep understanding of Noida's IT companies and startup ecosystem. 2) Enterprise Focus: Experience building enterprise-grade applications for large corporations. 3) Value Pricing: 30% lower than Sector 62 agencies with same quality and NCR presence."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Noida office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider enterprise design standards and industry-specific patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Enterprise apps undergo additional security and integration testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with 24/7 support for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Enterprise", technologies: ["ERP Integration", "CRM APIs", "SAP Connect", "SSO/LDAP", "Audit Logging", "Compliance"] },
    { category: "DevOps", technologies: ["CI/CD", "GitHub Actions", "Jenkins", "Monitoring", "Analytics", "APM Tools"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Noida | Mobile App Developers NCR | Web Nova Crew" description="Top app development company in Noida. Android, iOS, Flutter apps for IT companies, startups in Sector 62, 63. ₹40,000 onwards." keywords="app development Noida, mobile app developers Noida, Sector 62 app development, NCR app developers" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Noida", url: "https://webnovacrew.com/locations/app-development-noida" }]} />
      <ServiceSchema serviceName="App Development in Noida" serviceDescription="Professional mobile app development for Noida businesses." serviceUrl="https://webnovacrew.com/locations/app-development-noida" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-violet-400" /><span className="text-sm text-violet-300">Noida, Uttar Pradesh • IT Hub of NCR • 6M+ Population</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">App Development Company in Noida</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-violet-400 font-semibold">Noida's</span> trusted app partner for IT companies & startups.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Sector 62, 63, Greater Noida & across NCR.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400">60+</div><div className="text-sm text-slate-400">Noida Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400">₹40K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400">30%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Noida</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for NCR's IT hub. From startup MVPs to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Noida: NCR's IT & Startup Hub</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-950/30 to-slate-900/50 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">IT & Software Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Noida is NCR's premier IT hub with Sector 62, 63 hosting major software companies, tech startups, and IT services firms. Greater Noida adds to the tech ecosystem with Knowledge Park and IT townships.</p>
              <p className="text-slate-300 leading-relaxed">We have deep understanding of Noida's IT ecosystem and have built 60+ apps for IT companies, startups, and enterprises in the region.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-950/30 to-slate-900/50 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Startup Ecosystem</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Noida has a thriving startup ecosystem with numerous incubators, accelerators, and co-working spaces. From fintech to EdTech, Noida startups are disrupting industries.</p>
              <p className="text-slate-300 leading-relaxed">We offer 30% lower rates than Sector 62 agencies while maintaining the same quality standards. Our MVPs are designed to be scalable and investor-ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Noida</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-violet-500/50 transition-all">
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Noida Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
                <div className="text-violet-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-violet-500/10 rounded-lg px-3 py-2 text-center"><span className="text-violet-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Noida Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-violet-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-violet-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-violet-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-violet-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-violet-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Noida Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400">{item.icon}</div>
                  <div className="text-sm font-bold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Noida App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">30% savings compared to Sector 62 agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-violet-500 ring-2 ring-violet-500/20' : 'border-slate-700 hover:border-violet-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-violet-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-violet-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Noida App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Noida App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your IT, startup, or enterprise app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
