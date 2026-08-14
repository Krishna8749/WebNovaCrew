import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, Home, GraduationCap, Landmark, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentBhopal() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Bhopal's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Madhya Pradesh. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Bhopal's growing iPhone user base in upscale areas like Arera Colony and MP Nagar. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Bhopal startups and government departments looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Bhopal's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Government & PSU Apps", 
      desc: "Specialized applications for MP government departments and public sector undertakings. As the state capital, Bhopal has numerous government offices. We understand public sector requirements, compliance standards, and accessibility guidelines for citizen services and internal tools.",
      icon: <Landmark className="w-6 h-6" />,
      features: ["Govt Compliance", "Accessibility", "Multi-language", "Secure Auth", "Audit Logging", "NIC Integration"]
    },
    { 
      title: "E-commerce & Retail Apps", 
      desc: "Full-featured e-commerce applications for Bhopal's growing retail sector. We build online shopping apps, marketplace platforms, and retail solutions. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Bhopal's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Bhopal's emerging startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for MP government departments and public sector undertakings. Compliance-ready solutions.", icon: <Landmark className="w-5 h-5" /> },
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Bhopal's growing IT sector. Apps for software companies and tech startups.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Bhopal's education sector. Apps for schools, colleges, and competitive exam preparation.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Bhopal's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Bhopal's growing real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Bhopal's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Manufacturing & Industry", desc: "Production management, quality control, and industrial IoT apps for Bhopal's manufacturing sector.", icon: <Factory className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Fintech apps, banking solutions, and financial services apps for banks and NBFCs operating in Bhopal.", icon: <Building2 className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "MP Nagar", type: "Commercial Hub", desc: "Bhopal's premier commercial and business hub with corporate offices, IT companies, malls, and modern commercial spaces." },
    { name: "Arera Colony", type: "Upscale Residential", desc: "Upscale residential and commercial area with premium retail, restaurants, and professional services." },
    { name: "New Market", type: "Central Business", desc: "Historic commercial heart of Bhopal with retail, restaurants, banks, and professional services." },
    { name: "TT Nagar", type: "Business District", desc: "Established business district with corporate offices, banks, and professional services." },
    { name: "Habibganj", type: "Commercial Zone", desc: "Commercial hub with retail, restaurants, and business offices near the railway station." },
    { name: "Kolar Road", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces, IT companies, and residential complexes." },
    { name: "Hoshangabad Road", type: "Industrial Area", desc: "Industrial zone with manufacturing units, warehouses, and growing commercial presence." },
    { name: "Ayodhya Bypass", type: "Developing Area", desc: "Rapidly developing area with new commercial and residential projects." },
    { name: "Bairagarh", type: "Industrial Hub", desc: "Industrial area with manufacturing units and growing commercial presence." },
    { name: "Misrod", type: "Residential Area", desc: "Residential area with growing commercial presence and retail establishments." },
    { name: "Govindpura", type: "Industrial Zone", desc: "Industrial zone with manufacturing units and business establishments." },
    { name: "Shahpura", type: "Commercial Area", desc: "Commercial hub with retail, restaurants, and business offices." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "MP Capital Expertise", 
      desc: "Bhopal is the capital of Madhya Pradesh with numerous government departments and PSUs. We have extensive experience with government projects and understand public sector requirements, compliance standards, and accessibility guidelines.",
      icon: <Landmark className="w-5 h-5" />,
      stats: "15+ Govt Projects"
    },
    { 
      title: "Affordable Central India Pricing", 
      desc: "Bhopal offers excellent value compared to metros. Our competitive pricing allows MP businesses to get premium app development at rates 45-50% lower than Delhi or Mumbai without compromising on quality.",
      icon: <Star className="w-5 h-5" />,
      stats: "45-50% Savings"
    },
    { 
      title: "Fast Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Hindi & Regional Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is essential for government apps and apps targeting local consumers in MP.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Hindi Support"
    },
    { 
      title: "Enterprise-Grade Quality", 
      desc: "We maintain the same quality standards as our metro projects. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "100% Quality Focus"
    },
    { 
      title: "Local Support & Meetings", 
      desc: "We provide on-site meetings and support in Bhopal. Whether you're in MP Nagar, Arera Colony, or TT Nagar, we can meet at your office or a convenient location for project discussions and reviews.",
      icon: <Award className="w-5 h-5" />,
      stats: "On-Site Available"
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
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,00,000 - ₹5,00,000+", 
      ideal: "Large corporations & government",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Government Citizen Services App",
      client: "MP Government Department",
      description: "Built a comprehensive citizen services app for an MP government department with online applications, status tracking, document upload, and payment processing. The app serves 300,000+ citizens across the state.",
      results: ["300K+ Users", "40+ Services", "Hindi Support", "NIC Compliant"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "NIC APIs"]
    },
    {
      title: "Real Estate Marketplace",
      client: "Bhopal Property Developer",
      description: "Created a property listing and marketplace app with virtual tours, lead management, and CRM integration. The app lists 3,000+ properties across Bhopal and nearby cities.",
      results: ["3K+ Properties", "8K+ Users", "Virtual Tours", "Lead Management"],
      tech: ["React Native", "Python", "MongoDB", "Google Maps", "Razorpay"]
    },
    {
      title: "Healthcare Booking App",
      client: "Bhopal Hospital Chain",
      description: "Developed a healthcare booking app for a Bhopal hospital chain with appointment booking, telemedicine, lab reports, and prescription management. The app serves 15,000+ patients.",
      results: ["15K+ Patients", "Telemedicine", "Lab Reports", "Prescriptions"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "AWS"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Bhopal?",
      answer: "App development in Bhopal costs ₹25,000 to ₹5,00,000+ depending on complexity. Startup apps with basic features cost ₹25,000-₹80,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹80,000-₹2,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,00,000-₹5,00,000+. Bhopal offers 45-50% savings compared to Delhi."
    },
    {
      question: "Do you work on government projects?",
      answer: "Yes! Bhopal is the MP capital with numerous government departments and PSUs. We have extensive experience with government projects and understand public sector requirements, compliance standards, and accessibility guidelines. We've built citizen services apps, internal tools, and public information systems."
    },
    {
      question: "How long does app development take in Bhopal?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent government projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Bhopal?",
      answer: "Yes! We provide on-site meetings and support in Bhopal. Whether you're in MP Nagar, Arera Colony, TT Nagar, or any other area, we can meet at your office or a convenient location for project discussions, workshops, and reviews."
    },
    {
      question: "Can you integrate with government systems?",
      answer: "Yes! We have experience integrating with NIC systems, state government portals, and other government platforms. We understand the technical requirements and compliance standards for government integrations."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi fonts, Hindi content management, and Hindi push notifications. This is essential for government apps and apps targeting local consumers in MP."
    },
    {
      question: "What technologies do you use for Bhopal app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For government: We integrate with NIC and other government systems."
    },
    {
      question: "Can you build apps for the education sector?",
      answer: "Yes! Bhopal has a strong education sector. We build LMS platforms, coaching apps, competitive exam preparation apps, and EdTech solutions. Our education apps support video content, live classes, assessments, and progress tracking."
    },
    {
      question: "Do you build apps for real estate?",
      answer: "Yes! Bhopal's real estate market is growing. We've built property listing apps, virtual tour platforms, lead management systems, and CRM solutions for real estate developers and agents."
    },
    {
      question: "What about app security for government apps?",
      answer: "Security is paramount for government applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer on-site support in Bhopal."
    },
    {
      question: "Can you build apps for manufacturing companies?",
      answer: "Yes! Bhopal has a growing manufacturing sector. We build production management apps, quality control systems, industrial IoT apps, and inventory management solutions for manufacturing companies."
    },
    {
      question: "Do you sign NDAs for Bhopal projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built government apps that serve 300,000+ users and can handle high traffic loads."
    },
    {
      question: "What makes you different from other Bhopal app development companies?",
      answer: "Three key differentiators: 1) Government Expertise: Extensive experience with MP government projects and compliance. 2) Central India Focus: Deep understanding of MP's business landscape and local needs. 3) Quality at Value: Metro-quality development at Bhopal pricing with local support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Bhopal office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi language support if needed and government-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Government apps undergo additional compliance testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local Bhopal support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Government", technologies: ["NIC Integration", "State APIs", "eSign", "Compliance", "Accessibility", "Audit Logging"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "ERP Connect", "SSO/LDAP", "Analytics", "Reporting"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Bhopal | Mobile App Developers MP | Web Nova Crew" description="Top app development company in Bhopal. Android, iOS, Flutter apps for government, businesses in MP Nagar, Arera Colony. ₹25,000 onwards." keywords="app development Bhopal, mobile app developers Bhopal, MP app development, government app Bhopal" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Bhopal", url: "https://webnovacrew.com/locations/app-development-bhopal" }]} />
      <ServiceSchema serviceName="App Development in Bhopal" serviceDescription="Professional mobile app development for Bhopal businesses." serviceUrl="https://webnovacrew.com/locations/app-development-bhopal" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-fuchsia-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-fuchsia-400" /><span className="text-sm text-fuchsia-300">Bhopal, Madhya Pradesh • City of Lakes • State Capital</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-fuchsia-100 to-pink-100 bg-clip-text text-transparent">App Development Company in Bhopal</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-fuchsia-400 font-semibold">MP Capital's</span> trusted app partner for government & businesses.</p>
            <p className="text-lg text-slate-400 mb-8">Serving MP Nagar, Arera Colony, TT Nagar & across Bhopal.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-fuchsia-400">20+</div><div className="text-sm text-slate-400">Bhopal Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-pink-400">₹25K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-fuchsia-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-pink-400">50%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Bhopal</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for MP's capital. From government apps to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-fuchsia-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-fuchsia-500/10 text-fuchsia-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Bhopal: City of Lakes & MP Capital</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-fuchsia-950/30 to-slate-900/50 border border-fuchsia-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">State Capital & Government Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Bhopal is the capital of Madhya Pradesh with numerous government departments, PSUs, and administrative offices. We have extensive experience building citizen services apps, internal tools, and public information systems.</p>
              <p className="text-slate-300 leading-relaxed">Our government expertise includes NIC integration, compliance with public sector standards, and accessibility guidelines.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-950/30 to-slate-900/50 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Growing IT & Business Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Bhopal is emerging as a major IT and business hub in Central India. With IT parks, growing startup ecosystem, and excellent infrastructure, Bhopal offers tremendous opportunities for app development.</p>
              <p className="text-slate-300 leading-relaxed">We offer 45-50% cost savings compared to metros while maintaining premium quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Bhopal</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-fuchsia-500/50 transition-all">
                <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Bhopal Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-fuchsia-500/50 transition-all">
                <div className="text-fuchsia-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-fuchsia-500/10 rounded-lg px-3 py-2 text-center"><span className="text-fuchsia-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Bhopal Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-fuchsia-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-fuchsia-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-fuchsia-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-fuchsia-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Bhopal Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-fuchsia-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400">{item.icon}</div>
                  <div className="text-sm font-bold text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Bhopal App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">45-50% savings compared to Delhi with metro-quality development.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/20' : 'border-slate-700 hover:border-fuchsia-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-fuchsia-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Bhopal App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-fuchsia-950/50 to-pink-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Bhopal App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your government, enterprise, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
