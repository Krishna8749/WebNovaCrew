import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, Home, GraduationCap, Factory, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentChandigarh() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Chandigarh's tech-savvy user base. Our Android development team creates high-performance apps optimized for devices used across the tricity region. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Punjabi/Hindi", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Chandigarh's affluent iPhone user base. The City Beautiful has high iPhone penetration. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Chandigarh IT Park companies and startups looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Chandigarh's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Chandigarh's thriving startup ecosystem. The tricity has a growing startup culture with incubators and accelerators. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
    { 
      title: "E-commerce & Retail Apps", 
      desc: "Full-featured e-commerce applications for Chandigarh's growing retail sector. We build online shopping apps, marketplace platforms, and retail solutions. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Chandigarh's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for large Chandigarh corporations and IT Park companies. We build ERP integrations, CRM systems, workflow automation, and custom business process apps that integrate with existing enterprise infrastructure.",
      icon: <Database className="w-6 h-6" />,
      features: ["ERP Integration", "CRM Systems", "Workflow Automation", "Analytics Dashboard", "SSO/LDAP", "Enterprise Security"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Chandigarh IT Park companies. Apps for software companies and tech startups in the tricity.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Education & EdTech", desc: "LMS platforms, coaching apps, and EdTech solutions for Chandigarh's education sector. Apps for schools, colleges, and competitive exam preparation.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Chandigarh's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Chandigarh's growing real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Chandigarh's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Manufacturing & Industry", desc: "Production management, quality control, and industrial IoT apps for manufacturing units in Industrial Area and Mohali.", icon: <Factory className="w-5 h-5" /> },
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for UT administration and government departments.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Startups & Fintech", desc: "MVP development, fintech apps, and innovative solutions for Chandigarh's growing startup ecosystem.", icon: <Briefcase className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Sector 17", type: "Central Business", desc: "Chandigarh's commercial heart with retail, restaurants, banks, and professional services." },
    { name: "IT Park (Mohali)", type: "Tech Hub", desc: "Punjab's premier IT hub with software companies, tech startups, and IT services firms." },
    { name: "Industrial Area", type: "Manufacturing Zone", desc: "Industrial zone with manufacturing units, warehouses, and business establishments." },
    { name: "Mohali", type: "IT & Residential", desc: "Growing IT hub with tech companies, residential areas, and commercial establishments." },
    { name: "Panchkula", type: "Haryana Side", desc: "Part of tricity with residential areas, commercial establishments, and IT companies." },
    { name: "Zirakpur", type: "Commercial Hub", desc: "Rapidly growing commercial hub with retail, restaurants, and business offices." },
    { name: "Sector 34", type: "Business District", desc: "Established business district with corporate offices, banks, and professional services." },
    { name: "Sector 35", type: "Commercial Zone", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "Sector 22", type: "Market Area", desc: "Major market area with retail, restaurants, and commercial establishments." },
    { name: "Elante Mall Area", type: "Premium Commercial", desc: "Premium commercial area with malls, corporate offices, and retail establishments." },
    { name: "Manimajra", type: "Growing Hub", desc: "Rapidly developing area with new commercial and residential projects." },
    { name: "Kharar", type: "Satellite Town", desc: "Growing satellite town with residential and commercial developments." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Tricity Expertise", 
      desc: "We serve the entire Chandigarh tricity - Chandigarh, Mohali, and Panchkula. Our deep understanding of the local market, IT ecosystem, and business culture helps us build apps that truly serve tricity businesses.",
      icon: <Award className="w-5 h-5" />,
      stats: "30+ Tricity Apps"
    },
    { 
      title: "IT Park Experience", 
      desc: "We've worked with numerous IT Park companies in Mohali and understand the tech ecosystem. Our experience includes building apps for software companies, startups, and enterprise clients in the IT Park.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "15+ IT Park Clients"
    },
    { 
      title: "Competitive Tricity Pricing", 
      desc: "Chandigarh offers excellent value compared to Delhi NCR. Our competitive pricing allows tricity businesses to get premium app development at rates 35-40% lower than Delhi without compromising on quality.",
      icon: <Star className="w-5 h-5" />,
      stats: "35-40% Savings"
    },
    { 
      title: "Fast Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Enterprise-Grade Quality", 
      desc: "We maintain the same quality standards as our metro projects. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Shield className="w-5 h-5" />,
      stats: "100% Quality Focus"
    },
    { 
      title: "Local Support & Meetings", 
      desc: "We provide on-site meetings and support across the tricity. Whether you're in Sector 17, IT Park, Mohali, or Panchkula, we can meet at your office or a convenient location for project discussions.",
      icon: <Award className="w-5 h-5" />,
      stats: "On-Site Available"
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
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,25,000 - ₹5,50,000+", 
      ideal: "Large corporations & IT companies",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "IT Services Company App",
      client: "Mohali IT Park Company",
      description: "Built a comprehensive employee management and project tracking app for an IT services company in Mohali IT Park. The app includes timesheet management, project tracking, leave management, and team collaboration features.",
      results: ["500+ Employees", "Project Tracking", "Timesheet Mgmt", "4.7 Rating"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Real Estate Marketplace",
      client: "Chandigarh Property Developer",
      description: "Created a property listing and marketplace app with virtual tours, lead management, and CRM integration. The app lists 4,000+ properties across the tricity region.",
      results: ["4K+ Properties", "12K+ Users", "Virtual Tours", "Lead Management"],
      tech: ["React Native", "Python", "MongoDB", "Google Maps", "Razorpay"]
    },
    {
      title: "Healthcare Booking App",
      client: "Tricity Hospital Chain",
      description: "Developed a healthcare booking app for a tricity hospital chain with appointment booking, telemedicine, lab reports, and prescription management. The app serves 20,000+ patients.",
      results: ["20K+ Patients", "Telemedicine", "Lab Reports", "Prescriptions"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "AWS"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Chandigarh?",
      answer: "App development in Chandigarh costs ₹30,000 to ₹5,50,000+ depending on complexity. Startup apps with basic features cost ₹30,000-₹90,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹90,000-₹2,25,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,25,000-₹5,50,000+. Chandigarh offers 35-40% savings compared to Delhi."
    },
    {
      question: "Do you serve Mohali and Panchkula?",
      answer: "Yes! We serve the entire tricity - Chandigarh, Mohali, and Panchkula. We have extensive experience with IT Park companies in Mohali and businesses across the tricity. We can meet at any location in the tricity for project discussions."
    },
    {
      question: "How long does app development take in Chandigarh?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in the tricity?",
      answer: "Yes! We provide on-site meetings and support across the tricity. Whether you're in Sector 17, IT Park Mohali, Panchkula, or any other area, we can meet at your office or a convenient location for project discussions, workshops, and reviews."
    },
    {
      question: "Do you work with IT Park companies?",
      answer: "Yes! We have extensive experience with IT Park companies in Mohali. We've built employee apps, client products, and internal tools for software companies. We understand the IT ecosystem and can integrate with existing enterprise systems."
    },
    {
      question: "Do you provide Punjabi and Hindi language support?",
      answer: "Yes! We build fully localized apps with Punjabi and Hindi language support, including local UI, content management, and push notifications. This is important for apps targeting local consumers in the tricity."
    },
    {
      question: "What technologies do you use for Chandigarh app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For enterprise: We integrate with ERP, CRM, and other enterprise systems."
    },
    {
      question: "Can you build apps for startups?",
      answer: "Yes! Chandigarh has a growing startup ecosystem. We specialize in MVP development for startups, helping founders validate ideas quickly with lean, functional prototypes. Our MVPs are designed to be scalable and investor-ready."
    },
    {
      question: "Do you build apps for real estate?",
      answer: "Yes! The tricity real estate market is growing. We've built property listing apps, virtual tour platforms, lead management systems, and CRM solutions for real estate developers and agents across Chandigarh, Mohali, and Panchkula."
    },
    {
      question: "What about app security for enterprise apps?",
      answer: "Security is paramount for enterprise applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer on-site support in the tricity."
    },
    {
      question: "Can you integrate with existing enterprise systems?",
      answer: "Yes, we have experience integrating with ERP systems, CRM platforms, HR software, and other enterprise applications. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "Do you sign NDAs for Chandigarh projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve 20,000+ users and can handle high traffic loads."
    },
    {
      question: "What makes you different from other Chandigarh app development companies?",
      answer: "Three key differentiators: 1) Tricity Expertise: Deep understanding of Chandigarh, Mohali, and Panchkula's business ecosystem. 2) IT Park Experience: Extensive experience with IT Park companies and enterprise clients. 3) Quality at Value: Metro-quality development at tricity pricing with local support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your tricity office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Punjabi/Hindi language support if needed and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Enterprise apps undergo additional security and integration testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local tricity support." }
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
      <SEO title="App Development Company in Chandigarh | Mobile App Developers Tricity | Web Nova Crew" description="Top app development company in Chandigarh. Android, iOS, Flutter apps for IT Park, Mohali, Panchkula. ₹30,000 onwards." keywords="app development Chandigarh, mobile app developers Chandigarh, Mohali app development, tricity app developers" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Chandigarh", url: "https://webnovacrew.com/locations/app-development-chandigarh" }]} />
      <ServiceSchema serviceName="App Development in Chandigarh" serviceDescription="Professional mobile app development for Chandigarh tricity." serviceUrl="https://webnovacrew.com/locations/app-development-chandigarh" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-teal-400" /><span className="text-sm text-teal-300">Chandigarh • The City Beautiful • Tricity Hub</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent">App Development Company in Chandigarh</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-teal-400 font-semibold">Tricity's</span> trusted app partner for IT companies & startups.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Chandigarh, Mohali, Panchkula & IT Park.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-teal-400">30+</div><div className="text-sm text-slate-400">Tricity Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-cyan-400">₹30K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-teal-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-cyan-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Chandigarh</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for the tricity. From IT Park solutions to startup MVPs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chandigarh: The City Beautiful & IT Hub</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-950/30 to-slate-900/50 border border-teal-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Tricity IT Ecosystem</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Chandigarh tricity (Chandigarh, Mohali, Panchkula) is a major IT hub in North India. With IT Park Mohali, numerous software companies, and a growing startup ecosystem, the tricity offers tremendous opportunities.</p>
              <p className="text-slate-300 leading-relaxed">We have extensive experience with IT Park companies and understand the tech ecosystem's unique requirements.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-950/30 to-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quality of Life & Business</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Chandigarh consistently ranks among India's best cities for quality of life. This attracts top talent and businesses. The city offers 35-40% cost savings compared to Delhi NCR while maintaining premium quality standards.</p>
              <p className="text-slate-300 leading-relaxed">Our deep understanding of the tricity market helps us build apps that truly serve local business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Chandigarh</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chandigarh Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="text-teal-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-teal-500/10 rounded-lg px-3 py-2 text-center"><span className="text-teal-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Tricity Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-teal-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-teal-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-teal-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-teal-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Tricity Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400">{item.icon}</div>
                  <div className="text-sm font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chandigarh App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">35-40% savings compared to Delhi NCR with metro-quality development.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-slate-700 hover:border-teal-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-teal-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-teal-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-600 to-cyan-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chandigarh App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-teal-950/50 to-cyan-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Chandigarh App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your IT, enterprise, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
