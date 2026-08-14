import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Mountain, Heart, ShoppingCart, Home, GraduationCap, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentDehradun() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Dehradun's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Uttarakhand. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions in hilly terrain.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Dehradun's affluent iPhone user base. With many boarding schools and upscale residents, Dehradun has significant iPhone penetration. We build apps leveraging iOS 17 features for premium experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Dehradun tourism businesses and startups looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Dehradun's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Tourism & Adventure Apps", 
      desc: "Specialized applications for Uttarakhand's thriving tourism industry. We build travel booking apps, adventure activity platforms, hotel and resort apps, trek planning apps, and destination guides. Our tourism apps include offline maps, GPS tracking, and local language support.",
      icon: <Mountain className="w-6 h-6" />,
      features: ["Booking System", "Offline Maps", "GPS Tracking", "Trek Planning", "Hotel Integration", "Multi-language"]
    },
    { 
      title: "Education & Boarding School Apps", 
      desc: "Comprehensive education applications for Dehradun's famous boarding schools and educational institutions. We build LMS platforms, parent communication apps, fee management systems, and campus management solutions tailored for residential schools.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["LMS Platform", "Parent Portal", "Fee Management", "Attendance", "Campus Security", "Hostel Management"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Dehradun's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Dehradun's emerging startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Tourism & Hospitality", desc: "Travel booking apps, adventure activity platforms, hotel apps, and destination guides for Uttarakhand's thriving tourism industry.", icon: <Mountain className="w-5 h-5" /> },
    { name: "Education & Boarding Schools", desc: "LMS platforms, parent communication apps, campus management, and hostel management for Dehradun's famous boarding schools.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Dehradun's growing IT sector. Apps for software companies and tech startups.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Dehradun's healthcare sector. Yoga and wellness retreat apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Dehradun's growing real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "Agriculture & Organic", desc: "Farm management, organic produce marketplace, and agritech apps for Uttarakhand's agricultural sector.", icon: <Home className="w-5 h-5" /> },
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for Uttarakhand government departments.", icon: <Landmark className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Dehradun's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Rajpur Road", type: "Premium Commercial", desc: "Dehradun's premier commercial and residential corridor with upscale restaurants, hotels, and retail establishments." },
    { name: "Clock Tower", type: "Central Business", desc: "Historic commercial heart of Dehradun with retail, restaurants, banks, and professional services." },
    { name: "Paltan Bazaar", type: "Market Area", desc: "Major market area with retail, restaurants, and commercial establishments." },
    { name: "Race Course", type: "Upscale Area", desc: "Upscale residential and commercial area with premium establishments." },
    { name: "Dalanwala", type: "Commercial Hub", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "Clement Town", type: "Cantonment Area", desc: "Cantonment area with residential and commercial establishments." },
    { name: "Prem Nagar", type: "Residential Area", desc: "Residential area with growing commercial presence." },
    { name: "Ballupur", type: "Growing Hub", desc: "Rapidly developing area with new commercial and residential projects." },
    { name: "Sahastradhara", type: "Tourism Zone", desc: "Tourism area with resorts, adventure activities, and natural attractions." },
    { name: "Mussoorie Road", type: "Hill Route", desc: "Scenic route to Mussoorie with resorts, restaurants, and tourism establishments." },
    { name: "ISBT Area", type: "Transport Hub", desc: "Transport hub with commercial establishments and business offices." },
    { name: "Rispana", type: "Residential Area", desc: "Residential area with growing commercial presence." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Uttarakhand Tourism Expertise", 
      desc: "Uttarakhand is a major tourism destination with adventure sports, pilgrimage sites, and natural beauty. We've built tourism apps, adventure booking platforms, and hospitality solutions that understand the unique needs of the tourism industry.",
      icon: <Mountain className="w-5 h-5" />,
      stats: "10+ Tourism Apps"
    },
    { 
      title: "Education & Boarding School Experience", 
      desc: "Dehradun is famous for its boarding schools. We've built LMS platforms, parent communication apps, and campus management solutions for educational institutions. Our apps serve thousands of students and parents.",
      icon: <GraduationCap className="w-5 h-5" />,
      stats: "8+ Education Apps"
    },
    { 
      title: "Affordable Hill Station Pricing", 
      desc: "Dehradun offers excellent value compared to metros. Our competitive pricing allows Uttarakhand businesses to get premium app development at rates 45-50% lower than Delhi without compromising on quality.",
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
      title: "Enterprise-Grade Quality", 
      desc: "We maintain the same quality standards as our metro projects. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "100% Quality Focus"
    },
    { 
      title: "Local Support & Meetings", 
      desc: "We provide on-site meetings and support in Dehradun. Whether you're on Rajpur Road, Clock Tower, or Race Course, we can meet at your office or a convenient location for project discussions.",
      icon: <Shield className="w-5 h-5" />,
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
      ideal: "Growing businesses & tourism",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,00,000 - ₹5,00,000+", 
      ideal: "Large institutions & resorts",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Adventure Tourism Platform",
      client: "Uttarakhand Adventure Company",
      description: "Built a comprehensive adventure tourism platform with activity booking, trek planning, GPS tracking, and offline maps. The app serves 15,000+ adventure enthusiasts and lists 200+ activities across Uttarakhand.",
      results: ["15K+ Users", "200+ Activities", "Offline Maps", "GPS Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Google Maps"]
    },
    {
      title: "Boarding School Management",
      client: "Dehradun Boarding School",
      description: "Created a comprehensive school management app with LMS, parent communication, fee management, attendance tracking, and hostel management. The app serves 3,000+ students and parents.",
      results: ["3K+ Students", "Parent Portal", "Fee Management", "Hostel Mgmt"],
      tech: ["React Native", "Python", "MongoDB", "Firebase", "Razorpay"]
    },
    {
      title: "Wellness Resort App",
      client: "Himalayan Wellness Resort",
      description: "Developed a wellness resort app with booking, spa scheduling, yoga class management, and guest services. The app serves 5,000+ guests annually with personalized wellness programs.",
      results: ["5K+ Guests", "Spa Booking", "Yoga Classes", "Wellness Programs"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "AWS"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Dehradun?",
      answer: "App development in Dehradun costs ₹25,000 to ₹5,00,000+ depending on complexity. Startup apps with basic features cost ₹25,000-₹80,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹80,000-₹2,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,00,000-₹5,00,000+. Dehradun offers 45-50% savings compared to Delhi."
    },
    {
      question: "Do you build tourism and adventure apps?",
      answer: "Yes! Uttarakhand is a major tourism destination. We specialize in tourism apps including travel booking, adventure activity platforms, trek planning, hotel apps, and destination guides. Our apps include offline maps, GPS tracking, and multi-language support."
    },
    {
      question: "How long does app development take in Dehradun?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent tourism projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Dehradun?",
      answer: "Yes! We provide on-site meetings and support in Dehradun. Whether you're on Rajpur Road, Clock Tower, Race Course, or any other area, we can meet at your office or a convenient location for project discussions and reviews."
    },
    {
      question: "Can you build apps for boarding schools?",
      answer: "Yes! Dehradun is famous for its boarding schools. We've built LMS platforms, parent communication apps, fee management systems, attendance tracking, and hostel management solutions for educational institutions."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is important for apps targeting local consumers and tourists."
    },
    {
      question: "What technologies do you use for Dehradun app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For tourism: We integrate with booking systems, maps, and GPS."
    },
    {
      question: "Can you build apps for wellness and yoga retreats?",
      answer: "Yes! Dehradun and Rishikesh are wellness destinations. We build wellness resort apps, yoga class booking, spa scheduling, and guest services apps. Our apps include personalized wellness programs and booking management."
    },
    {
      question: "Do you build apps with offline functionality?",
      answer: "Yes! Given Uttarakhand's hilly terrain with variable connectivity, we build apps with robust offline functionality. Our apps can work offline and sync when connectivity is restored, essential for tourism and adventure apps."
    },
    {
      question: "What about app security for school apps?",
      answer: "Security is paramount for education applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, role-based access control, and comprehensive audit logging. Our apps protect student data and comply with privacy standards."
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
      question: "Do you sign NDAs for Dehradun projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for tourist seasons?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built tourism apps that handle peak season traffic without issues."
    },
    {
      question: "What makes you different from other Dehradun app development companies?",
      answer: "Three key differentiators: 1) Tourism Expertise: Specialized experience in tourism and adventure apps for Uttarakhand. 2) Education Focus: Deep experience with boarding school and education apps. 3) Quality at Value: Metro-quality development at Dehradun pricing with local support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Dehradun office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider offline functionality and tourism-specific design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Tourism apps undergo additional offline and GPS testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local Dehradun support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Tourism", technologies: ["Google Maps", "GPS Tracking", "Offline Maps", "Booking APIs", "Payment Gateway", "Multi-language"] },
    { category: "Education", technologies: ["LMS APIs", "Video Streaming", "Assessment Engine", "Parent Portal", "Fee Management", "Attendance"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Dehradun | Mobile App Developers Uttarakhand | Web Nova Crew" description="Top app development company in Dehradun. Android, iOS, Flutter apps for tourism, education. ₹25,000 onwards." keywords="app development Dehradun, mobile app developers Uttarakhand, tourism app Dehradun" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Dehradun", url: "https://webnovacrew.com/locations/app-development-dehradun" }]} />
      <ServiceSchema serviceName="App Development in Dehradun" serviceDescription="Professional mobile app development for Dehradun businesses." serviceUrl="https://webnovacrew.com/locations/app-development-dehradun" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Dehradun, Uttarakhand • Gateway to Himalayas • State Capital</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">App Development Company in Dehradun</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-emerald-400 font-semibold">Uttarakhand's</span> trusted app partner for tourism & education.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Rajpur Road, Clock Tower, Race Course & across Dehradun.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">12+</div><div className="text-sm text-slate-400">Dehradun Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400">₹25K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400">50%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Dehradun</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Uttarakhand. From tourism apps to boarding school solutions.</p>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dehradun: Gateway to the Himalayas</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Tourism & Adventure Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Uttarakhand is a major tourism destination with adventure sports, pilgrimage sites, and natural beauty. Dehradun serves as the gateway to popular destinations like Mussoorie, Rishikesh, and Haridwar.</p>
              <p className="text-slate-300 leading-relaxed">We specialize in tourism apps with offline maps, GPS tracking, and booking systems designed for the unique needs of the tourism industry.</p>
            </div>
            <div className="bg-gradient-to-br from-green-950/30 to-slate-900/50 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Education & Boarding Schools</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Dehradun is famous for its prestigious boarding schools and educational institutions. The city has a long tradition of quality education attracting students from across India and abroad.</p>
              <p className="text-slate-300 leading-relaxed">We've built comprehensive school management apps, LMS platforms, and parent communication solutions for educational institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Dehradun</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dehradun Success Stories</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Dehradun Areas</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Dehradun Businesses Choose Us</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dehradun App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">45-50% savings compared to Delhi with metro-quality development.</p></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dehradun App Development FAQs</h2></div>
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
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Dehradun App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your tourism, education, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
