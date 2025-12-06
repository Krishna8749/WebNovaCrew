import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, Home, GraduationCap, Truck, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentNagpur() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Nagpur's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Vidarbha and Central India. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi/Marathi", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Nagpur's growing iPhone user base in upscale areas like Dharampeth and Civil Lines. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Nagpur startups and logistics companies looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Nagpur's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Logistics & Transport Apps", 
      desc: "Specialized logistics and transport applications for Nagpur's thriving logistics sector. As India's Zero Mile city and logistics hub, Nagpur businesses need fleet management, route optimization, shipment tracking, and supply chain apps. We build comprehensive logistics solutions.",
      icon: <Truck className="w-6 h-6" />,
      features: ["Fleet Management", "Route Optimization", "GPS Tracking", "Driver Apps", "Warehouse Mgmt", "Supply Chain"]
    },
    { 
      title: "E-commerce & Retail Apps", 
      desc: "Full-featured e-commerce applications for Nagpur's growing retail sector. We build online shopping apps, marketplace platforms, and retail solutions. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Nagpur's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for quality inspection, and predictive analytics for logistics optimization.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Nagpur's emerging startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Logistics & Transport", desc: "Fleet management, route optimization, and supply chain apps for Nagpur's thriving logistics sector. India's Zero Mile city is a logistics hub.", icon: <Truck className="w-5 h-5" /> },
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Nagpur's growing IT sector in MIHAN and IT parks. Apps for software companies and tech startups.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Mining & Minerals", desc: "Mining operations, inventory management, and safety apps for Vidarbha's mining industry. Apps for coal, manganese, and mineral companies.", icon: <Factory className="w-5 h-5" /> },
    { name: "Agriculture & Agritech", desc: "Farm management, crop monitoring, and agritech apps for Vidarbha's agricultural sector. Apps for farmers, agri-businesses, and cooperatives.", icon: <Home className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Nagpur's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Nagpur's education sector. Apps for schools, colleges, and competitive exam preparation.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Nagpur's growing real estate market.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Manufacturing & Industry", desc: "Production management, quality control, and industrial IoT apps for Nagpur's manufacturing sector in Hingna and Butibori.", icon: <Factory className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Sitabuldi", type: "Central Business", desc: "Historic commercial heart of Nagpur with retail, restaurants, banks, and professional services." },
    { name: "Dharampeth", type: "Premium Commercial", desc: "Upscale commercial and residential area with corporate offices, premium retail, and professional services." },
    { name: "Sadar", type: "Commercial Hub", desc: "Major commercial area with retail, restaurants, and business establishments near the cantonment." },
    { name: "Civil Lines", type: "Administrative", desc: "Administrative center with government offices, banks, and professional services." },
    { name: "Ramdaspeth", type: "Business District", desc: "Established business district with corporate offices, banks, and professional services." },
    { name: "Wardha Road", type: "Commercial Zone", desc: "Growing commercial corridor with retail, restaurants, and business offices." },
    { name: "Hingna", type: "Industrial Area", desc: "Major industrial zone with manufacturing units, warehouses, and logistics companies." },
    { name: "Koradi", type: "Industrial Hub", desc: "Industrial area with power plants, manufacturing, and growing commercial presence." },
    { name: "Manish Nagar", type: "Residential Hub", desc: "Growing residential and commercial area with new developments and retail establishments." },
    { name: "Pratap Nagar", type: "Residential Area", desc: "Residential area with growing commercial presence and retail establishments." },
    { name: "Trimurti Nagar", type: "Commercial Area", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "MIHAN", type: "SEZ & IT Hub", desc: "Multi-modal International Hub Airport at Nagpur - India's largest SEZ with IT companies, logistics, and aerospace." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Central India Expertise", 
      desc: "Nagpur is India's Zero Mile city and the geographic center of the country. We understand the unique business landscape of Central India, Vidarbha's industries, and the logistics sector that makes Nagpur a strategic hub.",
      icon: <MapPin className="w-5 h-5" />,
      stats: "15+ Nagpur Apps"
    },
    { 
      title: "Logistics App Specialists", 
      desc: "Nagpur is India's logistics hub with MIHAN, major highways, and rail connectivity. We've built fleet management, route optimization, shipment tracking, and supply chain apps for logistics companies across Vidarbha.",
      icon: <Truck className="w-5 h-5" />,
      stats: "10+ Logistics Apps"
    },
    { 
      title: "Affordable Vidarbha Pricing", 
      desc: "Nagpur offers excellent value compared to metros. Our competitive pricing allows Vidarbha businesses to get premium app development at rates 40-50% lower than Mumbai or Pune without compromising on quality.",
      icon: <Star className="w-5 h-5" />,
      stats: "40-50% Savings"
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
      desc: "We provide on-site meetings and support in Nagpur. Whether you're in Sitabuldi, Dharampeth, or MIHAN, we can meet at your office or a convenient location for project discussions and reviews.",
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
      ideal: "Growing businesses & SMEs",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,00,000 - ₹5,00,000+", 
      ideal: "Large corporations & logistics",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Logistics Fleet Management App",
      client: "Nagpur Transport Company",
      description: "Built a comprehensive fleet management app for a Nagpur-based transport company with real-time GPS tracking, route optimization, driver management, and fuel monitoring. The app manages 200+ vehicles across Central India.",
      results: ["200+ Vehicles", "30% Fuel Savings", "Real-time Tracking", "Driver App"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "Google Maps", "Firebase"]
    },
    {
      title: "Mining Operations App",
      client: "Vidarbha Mining Company",
      description: "Developed a mining operations app for a Vidarbha mining company with inventory management, safety compliance, equipment tracking, and production monitoring. The app serves 500+ workers across multiple sites.",
      results: ["500+ Workers", "5 Sites", "Safety Compliance", "Real-time Data"],
      tech: ["React Native", "Python", "PostgreSQL", "IoT Integration", "AWS"]
    },
    {
      title: "Agricultural Marketplace",
      client: "Vidarbha Farmers Cooperative",
      description: "Created an agricultural marketplace app connecting Vidarbha farmers with buyers. The app includes crop listings, price discovery, logistics coordination, and payment processing. Serves 10,000+ farmers.",
      results: ["10K+ Farmers", "Direct Sales", "Price Discovery", "Logistics"],
      tech: ["Kotlin", "Swift", "Java Spring", "MongoDB", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Nagpur?",
      answer: "App development in Nagpur costs ₹25,000 to ₹5,00,000+ depending on complexity. Startup apps with basic features cost ₹25,000-₹80,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹80,000-₹2,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,00,000-₹5,00,000+. Nagpur offers 40-50% savings compared to Mumbai."
    },
    {
      question: "Do you build logistics and transport apps?",
      answer: "Yes! Nagpur is India's logistics hub and Zero Mile city. We specialize in logistics apps including fleet management, route optimization, GPS tracking, driver apps, warehouse management, and supply chain solutions. We've built apps for transport companies managing 200+ vehicles."
    },
    {
      question: "How long does app development take in Nagpur?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent logistics projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Nagpur?",
      answer: "Yes! We provide on-site meetings and support in Nagpur. Whether you're in Sitabuldi, Dharampeth, MIHAN, or any other area, we can meet at your office or a convenient location for project discussions, workshops, and reviews."
    },
    {
      question: "Can you build apps for the mining industry?",
      answer: "Yes! Vidarbha has a significant mining sector. We build mining operations apps including inventory management, safety compliance, equipment tracking, production monitoring, and worker management. Our apps serve multiple mining sites."
    },
    {
      question: "Do you provide Hindi and Marathi language support?",
      answer: "Yes! We build fully localized apps with Hindi and Marathi language support, including local UI, content management, and push notifications. This is especially important for apps targeting local consumers and workers in Vidarbha."
    },
    {
      question: "What technologies do you use for Nagpur app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For logistics: GPS integration, route optimization APIs, IoT for fleet tracking."
    },
    {
      question: "Can you build apps for MIHAN companies?",
      answer: "Yes! MIHAN is India's largest SEZ with IT companies, logistics, and aerospace. We build apps for MIHAN-based companies including enterprise solutions, logistics apps, and IT products. We understand the SEZ ecosystem and compliance requirements."
    },
    {
      question: "Do you build agricultural and agritech apps?",
      answer: "Yes! Vidarbha is an agricultural region. We build farm management apps, crop monitoring solutions, agricultural marketplaces, and agritech apps. Our apps connect farmers with buyers and provide price discovery and logistics coordination."
    },
    {
      question: "What about app security for logistics apps?",
      answer: "Security is paramount for logistics applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, GPS data protection, driver verification, and comprehensive audit logging. Our apps comply with industry security standards."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer on-site support in Nagpur."
    },
    {
      question: "Can you integrate with existing logistics systems?",
      answer: "Yes, we have experience integrating with logistics systems, ERP software, GPS providers, and fleet management platforms. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "Do you sign NDAs for Nagpur projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large fleet operations?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and real-time data processing. We've built logistics apps that manage 200+ vehicles and can scale further."
    },
    {
      question: "What makes you different from other Nagpur app development companies?",
      answer: "Three key differentiators: 1) Logistics Expertise: Specialized experience in logistics and transport apps for Nagpur's hub. 2) Central India Focus: Deep understanding of Vidarbha's industries and business landscape. 3) Quality at Value: Metro-quality development at Nagpur pricing with local support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Nagpur office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi/Marathi language support if needed and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Logistics apps undergo additional GPS and real-time testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local Nagpur support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Logistics", technologies: ["GPS Integration", "Route Optimization", "Fleet APIs", "IoT Sensors", "Real-time Tracking", "Geofencing"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "ERP Connect", "Warehouse Mgmt", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Nagpur | Mobile App Developers Vidarbha | Web Nova Crew" description="Top app development company in Nagpur. Android, iOS, Flutter apps for logistics, businesses in Sitabuldi, Dharampeth. ₹25,000 onwards." keywords="app development Nagpur, mobile app developers Nagpur, Vidarbha app development, logistics app Nagpur" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Nagpur", url: "https://webnovacrew.com/locations/app-development-nagpur" }]} />
      <ServiceSchema serviceName="App Development in Nagpur" serviceDescription="Professional mobile app development for Nagpur businesses." serviceUrl="https://webnovacrew.com/locations/app-development-nagpur" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-orange-400" /><span className="text-sm text-orange-300">Nagpur, Maharashtra • Orange City • Zero Mile Center of India</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent">App Development Company in Nagpur</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-orange-400 font-semibold">Central India's</span> trusted app partner for logistics & businesses.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Sitabuldi, Dharampeth, MIHAN & across Nagpur.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400">15+</div><div className="text-sm text-slate-400">Nagpur Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-amber-400">₹25K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-amber-400">50%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Nagpur</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Central India's logistics hub. From fleet management to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nagpur: India's Zero Mile City</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-900/50 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Logistics Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Nagpur is India's geographic center and Zero Mile city, making it the country's premier logistics hub. With MIHAN (India's largest SEZ), major highways, and rail connectivity, Nagpur is where logistics companies thrive.</p>
              <p className="text-slate-300 leading-relaxed">We specialize in logistics apps including fleet management, route optimization, and supply chain solutions for this strategic hub.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Vidarbha's Business Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Nagpur is the commercial capital of Vidarbha with diverse industries including mining, agriculture, manufacturing, and IT. The city offers excellent value with 40-50% cost savings compared to Mumbai.</p>
              <p className="text-slate-300 leading-relaxed">Our deep understanding of Vidarbha's industries helps us build apps that truly serve local business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Nagpur</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nagpur Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="text-orange-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-orange-500/10 rounded-lg px-3 py-2 text-center"><span className="text-orange-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Nagpur Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-orange-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-orange-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-orange-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-orange-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Nagpur Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400">{item.icon}</div>
                  <div className="text-sm font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nagpur App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">40-50% savings compared to Mumbai with metro-quality development.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-700 hover:border-orange-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-amber-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nagpur App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-orange-950/50 to-amber-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Nagpur App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your logistics, enterprise, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
