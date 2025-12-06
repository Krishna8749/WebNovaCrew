import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Ship, Heart, ShoppingCart, GraduationCap, Anchor, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentKochi() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Kochi's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Kerala. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and provide Malayalam language support.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Malayalam Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Kochi's affluent iPhone user base. Kerala has high NRI population with significant iPhone penetration. We build apps leveraging iOS 17 features for premium experiences targeting both local and NRI users.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Kochi startups and IT companies looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Infopark IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Tourism & Travel Apps", 
      desc: "Specialized applications for Kerala's thriving tourism industry. We build travel booking apps, houseboat booking platforms, resort apps, backwater tour apps, and destination guides. Our tourism apps include offline maps, multi-language support, and booking systems.",
      icon: <Ship className="w-6 h-6" />,
      features: ["Booking System", "Offline Maps", "Houseboat Booking", "Resort Integration", "Multi-language", "Payment Gateway"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Online shopping and marketplace applications for Kochi's retail and spice trade businesses. We build B2C and B2B e-commerce apps with product catalogs, payment integration, and logistics management.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Logistics API", "Vendor Portal", "Inventory"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Kochi's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Kochi's growing startup ecosystem. Infopark and Kerala Startup Mission have numerous startups. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Infopark and Technopark IT companies.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Tourism & Hospitality", desc: "Travel booking apps, houseboat platforms, resort apps, and destination guides for Kerala tourism.", icon: <Ship className="w-5 h-5" /> },
    { name: "Shipping & Logistics", desc: "Port management, cargo tracking, and logistics apps for Kochi's shipping industry.", icon: <Anchor className="w-5 h-5" /> },
    { name: "Healthcare & Ayurveda", desc: "Telemedicine, hospital apps, and Ayurveda wellness solutions for Kerala's healthcare sector.", icon: <Heart className="w-5 h-5" /> },
    { name: "Education & EdTech", desc: "LMS platforms, coaching apps, and EdTech solutions for Kerala's education sector.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Real Estate & PropTech", desc: "Property listing apps, virtual tour platforms, and PropTech solutions for Kochi's real estate market.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Spice Trade & Agriculture", desc: "Spice marketplace, farm management, and agritech apps for Kerala's spice trade.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Banking apps, payment solutions, and financial services for Kerala's banking sector.", icon: <Briefcase className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Infopark", type: "IT Hub", desc: "Kochi's premier IT hub with major software companies, tech startups, and IT services firms." },
    { name: "Kakkanad", type: "Tech Zone", desc: "Major tech zone with IT companies, corporate offices, and commercial spaces." },
    { name: "Marine Drive", type: "Commercial Hub", desc: "Premium commercial and entertainment hub with restaurants, hotels, and business offices." },
    { name: "MG Road", type: "Business District", desc: "Major business district with retail, restaurants, and professional services." },
    { name: "Edappally", type: "Commercial Zone", desc: "Commercial hub with malls, restaurants, and business offices." },
    { name: "Vytilla", type: "Transport Hub", desc: "Major transport hub with commercial establishments and business offices." },
    { name: "Palarivattom", type: "Commercial Area", desc: "Commercial area with retail, restaurants, and business offices." },
    { name: "Kaloor", type: "Business Hub", desc: "Business hub with corporate offices and commercial spaces." },
    { name: "Ernakulam", type: "City Center", desc: "City center with retail, restaurants, and professional services." },
    { name: "Fort Kochi", type: "Tourism Zone", desc: "Historic tourism zone with heritage sites, hotels, and restaurants." },
    { name: "Tripunithura", type: "Heritage Area", desc: "Heritage area with cultural sites and residential neighborhoods." },
    { name: "Aluva", type: "Industrial Hub", desc: "Industrial hub with manufacturing units and business establishments." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Kerala IT Expertise", 
      desc: "Kochi is Kerala's IT hub with Infopark hosting major software companies. We have deep understanding of Kerala's IT ecosystem and have built 25+ apps for IT companies, startups, and enterprises in the region.",
      icon: <Award className="w-5 h-5" />,
      stats: "25+ Kerala Apps"
    },
    { 
      title: "Tourism App Specialists", 
      desc: "Kerala is God's Own Country with thriving tourism. We specialize in tourism apps including travel booking, houseboat platforms, resort apps, and destination guides. Our apps serve lakhs of tourists annually.",
      icon: <Ship className="w-5 h-5" />,
      stats: "10+ Tourism Apps"
    },
    { 
      title: "Competitive Kerala Pricing", 
      desc: "We offer competitive rates for Kerala businesses. Our pricing is 35-40% lower than Bangalore agencies while maintaining the same quality standards. Perfect for Kerala startups and SMEs.",
      icon: <Star className="w-5 h-5" />,
      stats: "40% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Malayalam Language Support", 
      desc: "We build fully localized apps with Malayalam language support, including Malayalam UI, Malayalam content management, and Malayalam push notifications. Essential for apps targeting local Kerala consumers.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Malayalam Ready"
    },
    { 
      title: "Enterprise-Grade Quality", 
      desc: "We maintain the same quality standards as our metro projects. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "100% Quality Focus"
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
      ideal: "Growing businesses & tourism",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,25,000 - ₹5,50,000+", 
      ideal: "Large enterprises & resorts",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Houseboat Booking Platform",
      client: "Kerala Tourism Company",
      description: "Built a comprehensive houseboat booking platform with real-time availability, booking management, and payment integration. The app serves 50,000+ tourists annually and lists 500+ houseboats.",
      results: ["50K+ Bookings", "500+ Houseboats", "Real-time Availability", "Payment Gateway"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Razorpay"]
    },
    {
      title: "Spice Trade Marketplace",
      client: "Kochi Spice Exporter",
      description: "Created a B2B spice marketplace with vendor management, order processing, and international shipping integration. The platform serves 200+ spice traders globally.",
      results: ["200+ Traders", "Global Shipping", "B2B Portal", "Inventory Mgmt"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Stripe"]
    },
    {
      title: "Ayurveda Wellness App",
      client: "Kerala Ayurveda Resort",
      description: "Developed an Ayurveda wellness app with treatment booking, practitioner management, and wellness tracking. The app serves 10,000+ guests annually.",
      results: ["10K+ Guests", "Treatment Booking", "Wellness Tracking", "Multi-language"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Firebase"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Kochi?",
      answer: "App development in Kochi costs ₹30,000 to ₹5,50,000+ depending on complexity. Startup apps with basic features cost ₹30,000-₹90,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹90,000-₹2,25,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,25,000-₹5,50,000+. We're 40% cheaper than Bangalore agencies."
    },
    {
      question: "Do you build tourism apps for Kerala?",
      answer: "Yes! Kerala is God's Own Country with thriving tourism. We specialize in tourism apps including travel booking, houseboat platforms, resort apps, backwater tour apps, and destination guides. Our apps include offline maps, multi-language support, and booking systems."
    },
    {
      question: "Do you work with Infopark companies?",
      answer: "Yes! We partner with IT companies in Infopark and Technopark for internal apps, client projects, and white-label solutions. We understand the IT ecosystem and can integrate with existing enterprise systems."
    },
    {
      question: "Do you provide Malayalam language support?",
      answer: "Yes! We build fully localized apps with Malayalam language support, including Malayalam UI, Malayalam content management, and Malayalam push notifications. This is essential for apps targeting local Kerala consumers."
    },
    {
      question: "How long does app development take in Kochi?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent tourism projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Can you build apps for Ayurveda and wellness?",
      answer: "Yes! Kerala is famous for Ayurveda. We build Ayurveda wellness apps, treatment booking platforms, practitioner management, and wellness tracking apps. Our apps serve resorts, clinics, and wellness centers."
    },
    {
      question: "What technologies do you use for Kochi app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For tourism: We integrate with booking systems, maps, and payment gateways."
    },
    {
      question: "Can you build apps for shipping and logistics?",
      answer: "Yes! Kochi has a major port. We build port management apps, cargo tracking, logistics management, and shipping solutions. Our apps integrate with shipping APIs and provide real-time tracking."
    },
    {
      question: "Do you build apps with offline functionality?",
      answer: "Yes! Given Kerala's tourist areas with variable connectivity, we build apps with robust offline functionality. Our apps can work offline and sync when connectivity is restored, essential for tourism and travel apps."
    },
    {
      question: "What about app security for banking apps?",
      answer: "Security is paramount for banking applications. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review."
    },
    {
      question: "Can you integrate with hotel booking systems?",
      answer: "Yes, we have experience integrating with hotel booking systems, OTAs, and property management systems. We can connect your app with existing systems for seamless booking and inventory management."
    },
    {
      question: "Do you sign NDAs for Kochi projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for tourist seasons?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built tourism apps that handle peak season traffic without issues."
    },
    {
      question: "What makes you different from other Kochi app development companies?",
      answer: "Three key differentiators: 1) Tourism Expertise: Specialized experience in tourism and hospitality apps for Kerala. 2) Malayalam Support: Full Malayalam language support for local apps. 3) Value Pricing: 40% lower than Bangalore agencies with same quality."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Kochi office or remotely. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Malayalam language support and tourism-specific design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Tourism apps undergo additional offline and booking flow testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Tourism", technologies: ["Google Maps", "Booking APIs", "Payment Gateway", "Multi-language", "Offline Maps", "Push Notifications"] },
    { category: "Localization", technologies: ["Malayalam", "English", "Hindi", "i18n", "RTL Support", "Content Management"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Kochi | Mobile App Developers Kerala | Web Nova Crew" description="Top app development company in Kochi. Android, iOS, Flutter apps for Infopark, tourism in Kakkanad, Marine Drive. ₹30,000 onwards." keywords="app development Kochi, mobile app developers Kerala, Infopark app development, tourism app Kochi" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kochi", url: "https://webnovacrew.com/locations/app-development-kochi" }]} />
      <ServiceSchema serviceName="App Development in Kochi" serviceDescription="Professional mobile app development for Kochi businesses." serviceUrl="https://webnovacrew.com/locations/app-development-kochi" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-lime-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-lime-400" /><span className="text-sm text-lime-300">Kochi, Kerala • Queen of Arabian Sea • Gateway to Kerala</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-lime-100 to-green-100 bg-clip-text text-transparent">App Development Company in Kochi</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-lime-400 font-semibold">Kerala's</span> trusted app partner for IT & tourism businesses.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Infopark, Kakkanad, Marine Drive & across Kochi.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-lime-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-lime-500/20"><div className="text-3xl font-bold text-lime-400">25+</div><div className="text-sm text-slate-400">Kerala Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-lime-500/20"><div className="text-3xl font-bold text-green-400">₹30K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-lime-500/20"><div className="text-3xl font-bold text-lime-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-lime-500/20"><div className="text-3xl font-bold text-green-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Kochi</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Kerala. From tourism apps to IT solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-lime-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-lime-500/10 text-lime-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kochi: Queen of Arabian Sea</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-lime-950/30 to-slate-900/50 border border-lime-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Kerala's IT Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Kochi is Kerala's IT hub with Infopark hosting major software companies, tech startups, and IT services firms. The city has a thriving tech ecosystem with Kerala Startup Mission supporting innovation.</p>
              <p className="text-slate-300 leading-relaxed">We have deep understanding of Kerala's IT ecosystem and have built 25+ apps for IT companies, startups, and enterprises in the region.</p>
            </div>
            <div className="bg-gradient-to-br from-green-950/30 to-slate-900/50 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">God's Own Country Tourism</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Kerala is God's Own Country with thriving tourism. Kochi serves as the gateway to Kerala's backwaters, houseboats, and Ayurveda resorts. The city attracts millions of tourists annually.</p>
              <p className="text-slate-300 leading-relaxed">We specialize in tourism apps including travel booking, houseboat platforms, resort apps, and destination guides with offline maps and multi-language support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Kochi</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-lime-500/50 transition-all">
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kochi Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-lime-500/50 transition-all">
                <div className="text-lime-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-lime-500/10 rounded-lg px-3 py-2 text-center"><span className="text-lime-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Kochi Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-lime-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-lime-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-lime-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-lime-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-lime-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Kochi Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-lime-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-400">{item.icon}</div>
                  <div className="text-sm font-bold text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kochi App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">40% savings compared to Bangalore agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-lime-500 ring-2 ring-lime-500/20' : 'border-slate-700 hover:border-lime-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-lime-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-lime-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-lime-600 to-green-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kochi App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-lime-950/50 to-green-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Kochi App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your tourism, IT, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-lime-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-lime-500/50 text-lime-400 hover:bg-lime-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
