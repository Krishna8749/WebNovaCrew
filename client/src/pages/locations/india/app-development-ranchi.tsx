import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, GraduationCap, Landmark, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentRanchi() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Ranchi's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Jharkhand. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and provide Hindi language support.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Ranchi's growing iPhone user base. As the state capital, Ranchi has increasing smartphone penetration. We build apps leveraging iOS 17 features for premium experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Ranchi startups and businesses looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Ranchi's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Mining & Industrial Apps", 
      desc: "Specialized applications for Jharkhand's mining and industrial sector. We build mine management apps, safety monitoring systems, inventory tracking, equipment maintenance apps, and supply chain solutions for coal, iron ore, and mineral industries.",
      icon: <Mountain className="w-6 h-6" />,
      features: ["Mine Management", "Safety Monitoring", "Inventory Tracking", "Equipment Maintenance", "Supply Chain", "GPS Tracking"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Online shopping and marketplace applications for Ranchi's retail businesses. We build B2C and B2B e-commerce apps with product catalogs, payment integration, and logistics management for local and regional markets.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Logistics API", "Vendor Portal", "Inventory"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Ranchi's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Ranchi's emerging startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Mining & Minerals", desc: "Mine management, safety monitoring, and supply chain apps for Jharkhand's coal, iron ore, and mineral industries.", icon: <Mountain className="w-5 h-5" /> },
    { name: "Steel & Manufacturing", desc: "Production management, quality control, and inventory apps for steel plants and manufacturing units.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for Jharkhand government departments and PSUs.", icon: <Landmark className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Ranchi's education sector and competitive exam preparation.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Hospitals", desc: "Telemedicine, hospital apps, and healthcare solutions for Ranchi's medical sector.", icon: <Heart className="w-5 h-5" /> },
    { name: "Agriculture & Rural", desc: "Farm management, crop monitoring, and agritech apps for Jharkhand's agricultural sector.", icon: <Database className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Ranchi's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Banking apps, payment solutions, and financial services for banks and NBFCs operating in Jharkhand.", icon: <Landmark className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Main Road", type: "Commercial Hub", desc: "Ranchi's primary commercial area with retail, restaurants, and business offices." },
    { name: "Lalpur", type: "Business District", desc: "Major business district with corporate offices and commercial establishments." },
    { name: "Doranda", type: "Government Area", desc: "Government offices, administrative buildings, and residential areas." },
    { name: "Harmu", type: "Commercial Zone", desc: "Growing commercial zone with retail and business establishments." },
    { name: "Kanke", type: "Institutional Area", desc: "Institutional area with universities, colleges, and research centers." },
    { name: "Morabadi", type: "Residential Hub", desc: "Residential area with growing commercial presence." },
    { name: "Bariatu", type: "Healthcare Zone", desc: "Healthcare hub with major hospitals and medical facilities." },
    { name: "Hinoo", type: "Commercial Area", desc: "Commercial area with retail, restaurants, and business offices." },
    { name: "Ashok Nagar", type: "Residential Area", desc: "Residential neighborhood with local businesses." },
    { name: "Kokar", type: "Industrial Area", desc: "Industrial and commercial area with manufacturing units." },
    { name: "Namkum", type: "Industrial Hub", desc: "Industrial hub with factories and business establishments." },
    { name: "Ratu Road", type: "Commercial Corridor", desc: "Commercial corridor with retail and business offices." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Jharkhand Mining Expertise", 
      desc: "Jharkhand is India's mining capital with coal, iron ore, and mineral industries. We have specialized experience building mining apps, safety monitoring systems, and industrial solutions for the mining sector.",
      icon: <Mountain className="w-5 h-5" />,
      stats: "10+ Mining Apps"
    },
    { 
      title: "Most Affordable in Eastern India", 
      desc: "We offer the most competitive rates in Eastern India. Our pricing is 50-55% lower than metro cities while maintaining the same quality standards. Perfect for Ranchi startups and SMEs.",
      icon: <Star className="w-5 h-5" />,
      stats: "55% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Hindi Language Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. Essential for apps targeting local Jharkhand consumers.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Hindi Ready"
    },
    { 
      title: "Enterprise-Grade Quality", 
      desc: "We maintain the same quality standards as our metro projects. Our apps undergo rigorous testing, security audits, and performance optimization. We use modern technologies and best practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "100% Quality Focus"
    },
    { 
      title: "Local Support & Meetings", 
      desc: "We provide on-site meetings and support in Ranchi. Whether you're on Main Road, Lalpur, or Doranda, we can meet at your office or a convenient location for project discussions.",
      icon: <Award className="w-5 h-5" />,
      stats: "On-Site Available"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹20,000 - ₹70,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹70,000 - ₹1,75,000", 
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹1,75,000 - ₹4,50,000+", 
      ideal: "Large enterprises & mining companies",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Mining Safety Monitoring App",
      client: "Jharkhand Mining Company",
      description: "Built a comprehensive mining safety app with real-time monitoring, incident reporting, and emergency alerts. The app serves 5,000+ mine workers and has improved safety compliance by 40%.",
      results: ["5K+ Workers", "40% Safety Improvement", "Real-time Alerts", "GPS Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Steel Plant Management",
      client: "Ranchi Steel Manufacturer",
      description: "Created a production management app with inventory tracking, quality control, and equipment maintenance scheduling. The app serves 500+ employees and improved efficiency by 25%.",
      results: ["500+ Users", "25% Efficiency", "Inventory Tracking", "Quality Control"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Razorpay"]
    },
    {
      title: "Government Citizen Services",
      client: "Jharkhand Government Department",
      description: "Developed a citizen services app with online applications, status tracking, and document management. The app serves 50,000+ citizens with Hindi language support.",
      results: ["50K+ Citizens", "Hindi Support", "Online Applications", "Status Tracking"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Firebase"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Ranchi?",
      answer: "App development in Ranchi costs ₹20,000 to ₹4,50,000+ depending on complexity. Startup apps with basic features cost ₹20,000-₹70,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹70,000-₹1,75,000. Enterprise apps with AI, complex backends, and integrations cost ₹1,75,000-₹4,50,000+. We're 55% cheaper than metro cities."
    },
    {
      question: "Do you build mining industry apps?",
      answer: "Yes! Jharkhand is India's mining capital. We specialize in mining apps including mine management, safety monitoring, incident reporting, equipment maintenance, and supply chain solutions for coal, iron ore, and mineral industries."
    },
    {
      question: "How long does app development take in Ranchi?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Ranchi?",
      answer: "Yes! We provide on-site meetings and support in Ranchi. Whether you're on Main Road, Lalpur, Doranda, or any other area, we can meet at your office or a convenient location for project discussions and reviews."
    },
    {
      question: "Can you build apps for steel plants?",
      answer: "Yes! We build production management apps, inventory tracking, quality control, and equipment maintenance apps for steel plants and manufacturing units in Jharkhand."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is essential for apps targeting local Jharkhand consumers."
    },
    {
      question: "What technologies do you use for Ranchi app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For industrial: We integrate with IoT sensors, GPS tracking, and safety systems."
    },
    {
      question: "Can you build apps for government departments?",
      answer: "Yes! We have experience building citizen services apps, internal tools, and public information apps for government departments. Our apps include Hindi language support and accessibility features."
    },
    {
      question: "Do you build apps with offline functionality?",
      answer: "Yes! Given Jharkhand's remote mining areas with variable connectivity, we build apps with robust offline functionality. Our apps can work offline and sync when connectivity is restored, essential for mining and industrial apps."
    },
    {
      question: "What about app security for industrial apps?",
      answer: "Security is paramount for industrial applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, role-based access control, and comprehensive audit logging. Our apps protect sensitive operational data."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review."
    },
    {
      question: "Can you integrate with existing industrial systems?",
      answer: "Yes, we have experience integrating with industrial systems, IoT sensors, SCADA systems, and ERP platforms. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "Do you sign NDAs for Ranchi projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large workforces?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve thousands of workers across multiple locations."
    },
    {
      question: "What makes you different from other Ranchi app development companies?",
      answer: "Three key differentiators: 1) Mining Expertise: Specialized experience in mining and industrial apps for Jharkhand. 2) Hindi Support: Full Hindi language support for local apps. 3) Value Pricing: 55% lower than metro cities with same quality."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Ranchi office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi language support and industrial-specific design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Industrial apps undergo additional offline and safety testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local Ranchi support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Industrial", technologies: ["IoT Integration", "GPS Tracking", "Safety Systems", "SCADA Connect", "Offline Sync", "Real-time Alerts"] },
    { category: "Localization", technologies: ["Hindi", "English", "i18n", "Content Management", "Push Notifications", "SMS Gateway"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Ranchi | Mobile App Developers Jharkhand | Web Nova Crew" description="Top app development company in Ranchi. Android, iOS, Flutter apps for mining, businesses. ₹20,000 onwards." keywords="app development Ranchi, mobile app developers Jharkhand, mining app Ranchi" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Ranchi", url: "https://webnovacrew.com/locations/app-development-ranchi" }]} />
      <ServiceSchema serviceName="App Development in Ranchi" serviceDescription="Professional mobile app development for Ranchi businesses." serviceUrl="https://webnovacrew.com/locations/app-development-ranchi" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-stone-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-stone-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-500/10 border border-stone-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-stone-400" /><span className="text-sm text-stone-300">Ranchi, Jharkhand • City of Waterfalls • State Capital</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-stone-100 to-zinc-100 bg-clip-text text-transparent">App Development Company in Ranchi</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-stone-400 font-semibold">Jharkhand's</span> trusted app partner for mining & businesses.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Main Road, Lalpur, Doranda & across Ranchi.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-stone-600 to-zinc-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-stone-500/20"><div className="text-3xl font-bold text-stone-400">10+</div><div className="text-sm text-slate-400">Ranchi Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-stone-500/20"><div className="text-3xl font-bold text-zinc-400">₹20K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-stone-500/20"><div className="text-3xl font-bold text-stone-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-stone-500/20"><div className="text-3xl font-bold text-zinc-400">55%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Ranchi</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Jharkhand. From mining apps to industrial solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-stone-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-stone-500/10 rounded-xl flex items-center justify-center text-stone-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-stone-500/10 text-stone-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ranchi: City of Waterfalls</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-stone-950/30 to-slate-900/50 border border-stone-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Mining Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Jharkhand is India's mining capital with rich deposits of coal, iron ore, copper, and other minerals. Ranchi serves as the administrative hub for the mining industry with major companies and government departments.</p>
              <p className="text-slate-300 leading-relaxed">We have specialized experience building mining apps, safety monitoring systems, and industrial solutions for the mining sector. Our apps serve thousands of mine workers across Jharkhand.</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-950/30 to-slate-900/50 border border-zinc-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Growing State Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Ranchi is Jharkhand's capital with growing IT presence, educational institutions, and government offices. The city is developing as an emerging tech hub in Eastern India.</p>
              <p className="text-slate-300 leading-relaxed">We offer the most affordable app development rates in Eastern India - 55% lower than metro cities while maintaining the same quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Ranchi</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-stone-500/50 transition-all">
                <div className="w-12 h-12 bg-stone-500/10 rounded-xl flex items-center justify-center text-stone-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ranchi Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-stone-500/50 transition-all">
                <div className="text-stone-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-stone-500/10 rounded-lg px-3 py-2 text-center"><span className="text-stone-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Ranchi Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-stone-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-stone-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-stone-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-stone-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-stone-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-stone-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Ranchi Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-stone-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-stone-500/10 rounded-xl flex items-center justify-center text-stone-400">{item.icon}</div>
                  <div className="text-sm font-bold text-stone-400 bg-stone-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ranchi App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">55% savings compared to metro cities with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-stone-500 ring-2 ring-stone-500/20' : 'border-slate-700 hover:border-stone-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-stone-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-stone-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-stone-600 to-zinc-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ranchi App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-stone-950/50 to-zinc-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Ranchi App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your mining, industrial, or business app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-stone-600 to-zinc-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-stone-500/50 text-stone-400 hover:bg-stone-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
