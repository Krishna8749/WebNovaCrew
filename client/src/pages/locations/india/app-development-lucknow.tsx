import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, Home, GraduationCap, Landmark, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentLucknow() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Lucknow's diverse Android user base. As our headquarters, we deliver the fastest turnaround for Android development. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions across Uttar Pradesh.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Lucknow's growing iPhone user base in upscale areas like Gomti Nagar and Hazratganj. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Lucknow startups looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Lucknow's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Lucknow's emerging startup ecosystem. As our headquarters, we offer the fastest turnaround and most competitive pricing for MVPs. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["2-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
    { 
      title: "E-commerce & Retail Apps", 
      desc: "Full-featured e-commerce applications for Lucknow's growing retail sector. We build online shopping apps, marketplace platforms, and retail solutions. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Lucknow's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Government & PSU Apps", 
      desc: "Specialized applications for UP government departments and public sector undertakings. We understand public sector requirements, compliance standards, and accessibility guidelines. Our government apps include citizen services, internal tools, and public information systems.",
      icon: <Landmark className="w-6 h-6" />,
      features: ["Govt Compliance", "Accessibility", "Multi-language", "Secure Auth", "Audit Logging", "NIC Integration"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Lucknow's growing IT sector in IT City and Gomti Nagar. Apps for software companies and tech startups.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for UP government departments and public sector undertakings. Compliance-ready solutions.", icon: <Landmark className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Lucknow's education sector. Apps for schools, colleges, and competitive exam preparation.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Lucknow's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Lucknow's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Lucknow's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "FMCG & Distribution", desc: "Distribution management, sales force automation, and inventory apps for FMCG companies and distributors in UP.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Fintech apps, banking solutions, and financial services apps for banks and NBFCs operating in Lucknow.", icon: <Building2 className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Gomti Nagar", type: "IT & Business Hub", desc: "Lucknow's premier IT and business hub with corporate offices, tech companies, malls, and modern commercial spaces." },
    { name: "Hazratganj", type: "Central Business", desc: "Historic commercial heart of Lucknow with retail, restaurants, banks, and professional services." },
    { name: "Aliganj", type: "Commercial Center", desc: "Major commercial and residential area with retail, restaurants, and business establishments." },
    { name: "Indira Nagar", type: "Residential Hub", desc: "Upscale residential and commercial area with growing business presence and retail establishments." },
    { name: "Mahanagar", type: "Business District", desc: "Established business district with corporate offices, banks, and professional services." },
    { name: "Alambagh", type: "Commercial Zone", desc: "Commercial hub with retail, wholesale markets, and business offices near the railway station." },
    { name: "Chinhat", type: "Industrial Area", desc: "Industrial zone with manufacturing units, warehouses, and growing commercial presence." },
    { name: "Vikas Nagar", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces and residential complexes." },
    { name: "Aashiana", type: "Residential Area", desc: "Growing residential and commercial area with new developments and retail establishments." },
    { name: "Jankipuram", type: "Residential Hub", desc: "Large residential area with growing commercial presence and retail establishments." },
    { name: "Rajajipuram", type: "Commercial Area", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "IT City", type: "Tech Park", desc: "Lucknow's IT park with software companies, tech startups, and modern office spaces." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Our Headquarters", 
      desc: "Lucknow is our headquarters! This means you get the fastest response times, in-person meetings whenever you need them, and the most competitive pricing. Our core team is based here, ensuring direct communication and quick turnaround on all projects.",
      icon: <Award className="w-5 h-5" />,
      stats: "150+ Apps Built"
    },
    { 
      title: "Government Experience", 
      desc: "We have extensive experience with UP government projects and understand public sector requirements, compliance standards, and accessibility guidelines. We've built citizen services apps, internal tools, and public information systems for various departments.",
      icon: <Landmark className="w-5 h-5" />,
      stats: "15+ Govt Projects"
    },
    { 
      title: "Most Affordable in North India", 
      desc: "Being headquartered in Lucknow allows us to offer the most competitive pricing in North India while maintaining premium quality. Our efficient processes and local team mean you get excellent value without compromising on quality.",
      icon: <Star className="w-5 h-5" />,
      stats: "50% Cost Savings"
    },
    { 
      title: "Fastest Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 2 weeks for urgent projects. Being local means no timezone issues and immediate response to your needs.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 3-Week MVP"
    },
    { 
      title: "Hindi & Regional Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is especially important for apps targeting local consumers and government services in Uttar Pradesh.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Hindi Support"
    },
    { 
      title: "In-Person Collaboration", 
      desc: "Unlike remote agencies, we offer face-to-face meetings, workshops, and project reviews at our Lucknow office or your location. This personal touch ensures better communication and faster problem resolution.",
      icon: <Award className="w-5 h-5" />,
      stats: "Local Team"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹25,000 - ₹75,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "2-4 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹75,000 - ₹2,00,000", 
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "5-8 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,00,000 - ₹5,00,000+", 
      ideal: "Large corporations & government",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "8-14 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Government Citizen Services App",
      client: "UP Government Department",
      description: "Built a comprehensive citizen services app for a UP government department with online applications, status tracking, document upload, and payment processing. The app serves 500,000+ citizens across the state.",
      results: ["500K+ Users", "50+ Services", "Hindi Support", "NIC Compliant"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "NIC APIs"]
    },
    {
      title: "EdTech Learning Platform",
      client: "Lucknow Coaching Institute",
      description: "Developed an e-learning platform for competitive exam preparation with live classes, recorded courses, assessments, and progress tracking. The app serves 30,000+ students across Uttar Pradesh.",
      results: ["30K+ Students", "500+ Courses", "Live Classes", "4.8 Rating"],
      tech: ["React Native", "Python", "PostgreSQL", "AWS", "WebRTC"]
    },
    {
      title: "Real Estate Marketplace",
      client: "Lucknow Property Developer",
      description: "Created a property listing and marketplace app with virtual tours, lead management, and CRM integration. The app lists 5,000+ properties across Lucknow and NCR.",
      results: ["5K+ Properties", "10K+ Users", "Virtual Tours", "Lead Management"],
      tech: ["Kotlin", "Swift", "Java Spring", "MongoDB", "Google Maps"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Lucknow?",
      answer: "App development in Lucknow costs ₹25,000 to ₹5,00,000+ depending on complexity. Startup apps with basic features cost ₹25,000-₹75,000 and take 2-4 weeks. Business apps with full features for both platforms cost ₹75,000-₹2,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,00,000-₹5,00,000+. As our headquarters, Lucknow offers the best rates in North India."
    },
    {
      question: "Is Web Nova Crew based in Lucknow?",
      answer: "Yes! Lucknow is our headquarters. Our core team is based here, which means you get the fastest response times, in-person meetings whenever you need them, and the most competitive pricing. We can meet at our office in Gomti Nagar or at your location anywhere in Lucknow."
    },
    {
      question: "Do you work on government projects?",
      answer: "Yes! We have extensive experience with UP government projects and understand public sector requirements, compliance standards, and accessibility guidelines. We've built citizen services apps, internal tools, and public information systems. We're familiar with NIC integration and government security requirements."
    },
    {
      question: "How long does app development take in Lucknow?",
      answer: "Timeline depends on complexity. Startup MVPs take 2-4 weeks, business apps require 5-8 weeks, and enterprise apps take 8-14 weeks. Being our headquarters, we can deliver faster than any other location. For urgent projects, we've delivered MVPs in as little as 2 weeks."
    },
    {
      question: "Can I visit your Lucknow office?",
      answer: "Absolutely! We welcome clients to visit our Lucknow office for meetings, workshops, and project reviews. We're located in Gomti Nagar and can also meet at your office or any convenient location in Lucknow. In-person collaboration is one of our key advantages."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi fonts, Hindi content management, and Hindi push notifications. We handle Devanagari script properly. This is especially important for government apps and apps targeting local consumers in UP."
    },
    {
      question: "What technologies do you use for Lucknow app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For cloud: AWS, Azure, Google Cloud. For government: We integrate with NIC and other government systems."
    },
    {
      question: "Can you build apps for the education sector?",
      answer: "Yes! Lucknow has a strong education and coaching sector. We build LMS platforms, coaching apps, competitive exam preparation apps, and EdTech solutions. Our education apps support video content, live classes, assessments, progress tracking, and gamification."
    },
    {
      question: "Do you build apps for real estate?",
      answer: "Yes! Lucknow's real estate market is booming. We've built property listing apps, virtual tour platforms, lead management systems, and CRM solutions for real estate developers and agents. Our apps include 3D tours, location-based search, and broker management."
    },
    {
      question: "What about app security for government apps?",
      answer: "Security is paramount for government applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. We follow NIC security guidelines."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. Being local, we can provide immediate support when needed."
    },
    {
      question: "Can you integrate with government systems?",
      answer: "Yes, we have experience integrating with NIC systems, Aadhaar, DigiLocker, and other government platforms. We understand the technical requirements and compliance standards for government integrations. We can also integrate with state-specific systems."
    },
    {
      question: "Do you sign NDAs for Lucknow projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels."
    },
    {
      question: "Can you scale apps for large user bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built government apps that serve 500,000+ users and can handle high traffic loads during peak times."
    },
    {
      question: "What makes you different from other Lucknow app development companies?",
      answer: "Three key differentiators: 1) Headquarters Advantage: Fastest response, in-person meetings, and best pricing as our core team is here. 2) Government Experience: Extensive experience with UP government projects and compliance. 3) Full-Stack Expertise: End-to-end development from design to deployment with ongoing support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at our Lucknow office or yours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi language support if needed and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "3-10 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Government apps undergo additional compliance testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local support advantage." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Government", technologies: ["NIC Integration", "Aadhaar APIs", "DigiLocker", "eSign", "Compliance", "Accessibility"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "Oracle", "ERP Connect", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Lucknow | Mobile App Developers UP | Web Nova Crew" description="Top app development company in Lucknow - Our HQ. Android, iOS, Flutter apps for businesses, government in Gomti Nagar, Hazratganj. ₹25,000 onwards." keywords="app development Lucknow, mobile app developers Lucknow, Gomti Nagar app development, UP app developers" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Lucknow", url: "https://webnovacrew.com/locations/app-development-lucknow" }]} />
      <ServiceSchema serviceName="App Development in Lucknow" serviceDescription="Professional mobile app development - Our headquarters in Lucknow." serviceUrl="https://webnovacrew.com/locations/app-development-lucknow" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Lucknow, Uttar Pradesh • Our Headquarters • City of Nawabs</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">App Development Company in Lucknow</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-emerald-400 font-semibold">Our Headquarters!</span> Best rates & fastest delivery in North India.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Gomti Nagar, Hazratganj, Indira Nagar & across Lucknow.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">150+</div><div className="text-sm text-slate-400">Apps Built</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400">₹25K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">2-8</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400">50%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Lucknow</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development from our headquarters. Fastest delivery and best pricing in North India.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Lucknow is Our Headquarters</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">City of Nawabs & Growing IT Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Lucknow is the capital of India's most populous state and a rapidly growing IT hub. With IT City, Gomti Nagar's tech corridor, and increasing government digitization, Lucknow offers tremendous opportunities for app development.</p>
              <p className="text-slate-300 leading-relaxed">Being headquartered here allows us to offer the fastest response times and most competitive pricing while serving clients across India.</p>
            </div>
            <div className="bg-gradient-to-br from-green-950/30 to-slate-900/50 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Government & Enterprise Focus</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">As the state capital, Lucknow is home to numerous government departments and PSUs. We've built citizen services apps, internal tools, and public information systems that serve millions of UP residents.</p>
              <p className="text-slate-300 leading-relaxed">Our government experience includes NIC integration, Aadhaar APIs, and compliance with public sector security standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Lucknow</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lucknow Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="text-emerald-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-emerald-500/10 rounded-lg px-3 py-2 text-center"><span className="text-emerald-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Lucknow Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-emerald-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-emerald-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Lucknow Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">{item.icon}</div>
                  <div className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lucknow App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Best rates in North India from our headquarters.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-700 hover:border-emerald-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-emerald-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-emerald-600 to-green-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lucknow App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-green-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Visit Our Lucknow Office!</h2>
          <p className="text-xl text-slate-300 mb-8">Meet us in person for a free consultation at our headquarters</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Meeting</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
