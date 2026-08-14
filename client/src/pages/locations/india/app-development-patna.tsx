import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Heart, ShoppingCart, Home, GraduationCap, Landmark, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentPatna() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Patna's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Bihar. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language", "Low Data Mode"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Patna's growing iPhone user base in upscale areas like Boring Road and Patliputra. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit for premium business experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Patna startups and coaching institutes looking to launch quickly on both platforms while optimizing development costs.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Patna's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Education & Coaching Apps", 
      desc: "Specialized education and coaching applications for Patna's thriving coaching industry. As India's coaching capital for IIT-JEE, NEET, and UPSC, Patna needs powerful EdTech solutions. We build LMS platforms, test prep apps, live class systems, and coaching management apps.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["LMS Platform", "Live Classes", "Test Series", "Progress Tracking", "Video Courses", "Doubt Resolution"]
    },
    { 
      title: "E-commerce & Retail Apps", 
      desc: "Full-featured e-commerce applications for Patna's growing retail sector. We build online shopping apps, marketplace platforms, and retail solutions. Our apps include product catalogs, cart management, payment integration, order tracking, and inventory sync.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Inventory Sync", "Multi-vendor", "COD Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Patna's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, and predictive analytics for business intelligence.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Patna's emerging startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our MVPs are designed to be scalable and investor-ready.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Education & Coaching", desc: "LMS platforms, test prep apps, and coaching management for Patna's famous coaching industry. IIT-JEE, NEET, UPSC preparation apps.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Government & PSU", desc: "Citizen services, internal tools, and public information apps for Bihar government departments and public sector undertakings.", icon: <Landmark className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Patna's healthcare sector. Patient management and appointment booking apps.", icon: <Heart className="w-5 h-5" /> },
    { name: "Agriculture & Agritech", desc: "Farm management, crop monitoring, and agritech apps for Bihar's agricultural sector. Apps for farmers, agri-businesses, and cooperatives.", icon: <Home className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Patna's growing real estate market.", icon: <Building2 className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Patna's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Fintech apps, banking solutions, and financial services apps for banks and NBFCs operating in Patna.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "IT & Software", desc: "Internal tools, employee apps, and client products for Patna's growing IT sector. Apps for software companies and tech startups.", icon: <Code2 className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Boring Road", type: "Premium Commercial", desc: "Patna's premium commercial and coaching hub with coaching institutes, restaurants, and retail establishments." },
    { name: "Kankarbagh", type: "Commercial Hub", desc: "Major commercial and residential area with retail, restaurants, and business establishments." },
    { name: "Patliputra", type: "Upscale Residential", desc: "Upscale residential area with growing commercial presence and premium retail establishments." },
    { name: "Bailey Road", type: "Commercial Zone", desc: "Commercial corridor with retail, restaurants, coaching centers, and business offices." },
    { name: "Ashok Rajpath", type: "Educational Hub", desc: "Educational hub with Patna University, colleges, and coaching institutes." },
    { name: "Danapur", type: "Cantonment Area", desc: "Cantonment area with residential and commercial establishments near the railway station." },
    { name: "Phulwari Sharif", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces and residential complexes." },
    { name: "Rajendra Nagar", type: "Residential Area", desc: "Residential area with growing commercial presence and retail establishments." },
    { name: "Gandhi Maidan", type: "Central Area", desc: "Central Patna area with government offices, banks, and commercial establishments." },
    { name: "Fraser Road", type: "Business District", desc: "Historic business district with banks, professional services, and retail establishments." },
    { name: "Exhibition Road", type: "Commercial Area", desc: "Commercial hub with retail, restaurants, and business offices." },
    { name: "Anisabad", type: "Residential Hub", desc: "Residential area with growing commercial presence and retail establishments." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Bihar Market Expertise", 
      desc: "We understand Bihar's unique business landscape, local consumer behavior, and market dynamics. Our apps are designed to resonate with Bihar's audience and address local business challenges.",
      icon: <Award className="w-5 h-5" />,
      stats: "15+ Bihar Apps"
    },
    { 
      title: "Education App Specialists", 
      desc: "Patna is India's coaching capital. We've built LMS platforms, test prep apps, live class systems, and coaching management apps for leading coaching institutes. Our education apps serve 50,000+ students.",
      icon: <GraduationCap className="w-5 h-5" />,
      stats: "10+ EdTech Apps"
    },
    { 
      title: "Most Affordable in Eastern India", 
      desc: "Patna offers excellent value compared to metros. Our competitive pricing allows Bihar businesses to get premium app development at rates 50-55% lower than Delhi or Mumbai without compromising on quality.",
      icon: <Star className="w-5 h-5" />,
      stats: "50-55% Savings"
    },
    { 
      title: "Fast Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our efficient processes ensure timely delivery.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Hindi & Regional Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is essential for apps targeting Bihar's local audience.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Hindi Support"
    },
    { 
      title: "Local Support & Meetings", 
      desc: "We provide on-site meetings and support in Patna. Whether you're in Boring Road, Kankarbagh, or Patliputra, we can meet at your office or a convenient location for project discussions and reviews.",
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
      ideal: "Growing businesses & coaching",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹1,75,000 - ₹4,50,000+", 
      ideal: "Large institutes & enterprises",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Coaching Institute LMS",
      client: "Patna Coaching Institute",
      description: "Built a comprehensive LMS platform for a leading Patna coaching institute with live classes, recorded courses, test series, and progress tracking. The app serves 25,000+ students preparing for IIT-JEE and NEET.",
      results: ["25K+ Students", "500+ Courses", "Live Classes", "4.8 Rating"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "WebRTC"]
    },
    {
      title: "Agricultural Marketplace",
      client: "Bihar Farmers Cooperative",
      description: "Created an agricultural marketplace app connecting Bihar farmers with buyers. The app includes crop listings, price discovery, logistics coordination, and payment processing. Serves 15,000+ farmers.",
      results: ["15K+ Farmers", "Direct Sales", "Price Discovery", "Logistics"],
      tech: ["React Native", "Python", "MongoDB", "Razorpay", "Google Maps"]
    },
    {
      title: "Healthcare Booking App",
      client: "Patna Hospital Chain",
      description: "Developed a healthcare booking app for a Patna hospital chain with appointment booking, telemedicine, lab reports, and prescription management. The app serves 10,000+ patients.",
      results: ["10K+ Patients", "Telemedicine", "Lab Reports", "Prescriptions"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "AWS"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Patna?",
      answer: "App development in Patna costs ₹20,000 to ₹4,50,000+ depending on complexity. Startup apps with basic features cost ₹20,000-₹70,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹70,000-₹1,75,000. Enterprise apps with AI, complex backends, and integrations cost ₹1,75,000-₹4,50,000+. Patna offers 50-55% savings compared to Delhi."
    },
    {
      question: "Do you build education and coaching apps?",
      answer: "Yes! Patna is India's coaching capital for IIT-JEE, NEET, and UPSC. We specialize in education apps including LMS platforms, test prep apps, live class systems, doubt resolution, progress tracking, and coaching management. Our education apps serve 50,000+ students across Bihar."
    },
    {
      question: "How long does app development take in Patna?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. For urgent education projects, we've delivered MVPs in as little as 3 weeks."
    },
    {
      question: "Do you provide on-site meetings in Patna?",
      answer: "Yes! We provide on-site meetings and support in Patna. Whether you're in Boring Road, Kankarbagh, Patliputra, or any other area, we can meet at your office or a convenient location for project discussions, workshops, and reviews."
    },
    {
      question: "Can you build apps for coaching institutes?",
      answer: "Yes! We've built apps for leading Patna coaching institutes. Our coaching apps include live classes, recorded courses, test series, progress tracking, doubt resolution, fee management, and parent communication. We understand the coaching industry's unique needs."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi fonts, Hindi content management, and Hindi push notifications. This is essential for apps targeting Bihar's local audience and students."
    },
    {
      question: "What technologies do you use for Patna app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For education: WebRTC for live classes, video streaming, and real-time features."
    },
    {
      question: "Can you build apps for the agriculture sector?",
      answer: "Yes! Bihar is an agricultural state. We build farm management apps, crop monitoring solutions, agricultural marketplaces, and agritech apps. Our apps connect farmers with buyers and provide price discovery and logistics coordination."
    },
    {
      question: "Do you build apps for government departments?",
      answer: "Yes! We build apps for Bihar government departments including citizen services, internal tools, and public information systems. We understand government compliance requirements and can integrate with state-specific systems."
    },
    {
      question: "What about app security for education apps?",
      answer: "Security is paramount for education applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, content protection, anti-piracy measures, and comprehensive audit logging. Our apps protect student data and course content."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer on-site support in Patna."
    },
    {
      question: "Can you integrate with existing coaching systems?",
      answer: "Yes, we have experience integrating with coaching management systems, payment gateways, and video platforms. We can connect your app with existing systems for seamless data flow and operations."
    },
    {
      question: "Do you sign NDAs for Patna projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls."
    },
    {
      question: "Can you scale apps for large student bases?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built education apps that serve 25,000+ students and can handle high traffic during exams."
    },
    {
      question: "What makes you different from other Patna app development companies?",
      answer: "Three key differentiators: 1) Education Expertise: Specialized experience in coaching and EdTech apps for Patna's coaching industry. 2) Bihar Focus: Deep understanding of Bihar's market and local business needs. 3) Quality at Value: Metro-quality development at Patna pricing with local support."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Patna office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi language support if needed and education-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Education apps undergo additional content and streaming testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with local Patna support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Education", technologies: ["WebRTC", "Video Streaming", "LMS APIs", "Assessment Engine", "Progress Tracking", "Live Classes"] },
    { category: "Enterprise", technologies: ["Tally Integration", "Payment Gateway", "SMS/Email", "Analytics", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Patna | Mobile App Developers Bihar | Web Nova Crew" description="Top app development company in Patna. Android, iOS, Flutter apps for education, businesses in Boring Road, Kankarbagh. ₹20,000 onwards." keywords="app development Patna, mobile app developers Patna, Bihar app development, education app Patna" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Patna", url: "https://webnovacrew.com/locations/app-development-patna" }]} />
      <ServiceSchema serviceName="App Development in Patna" serviceDescription="Professional mobile app development for Patna businesses." serviceUrl="https://webnovacrew.com/locations/app-development-patna" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-yellow-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-yellow-400" /><span className="text-sm text-yellow-300">Patna, Bihar • Education Hub • State Capital</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-amber-100 bg-clip-text text-transparent">App Development Company in Patna</h1>
            <p className="text-xl text-slate-300 mb-4"><span className="text-yellow-400 font-semibold">Bihar's</span> trusted app partner for education & businesses.</p>
            <p className="text-lg text-slate-400 mb-8">Serving Boring Road, Kankarbagh, Patliputra & across Patna.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-yellow-400">15+</div><div className="text-sm text-slate-400">Patna Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-amber-400">₹20K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-yellow-400">3-10</div><div className="text-sm text-slate-400">Weeks</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-amber-400">55%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Patna</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Bihar's education hub. From coaching apps to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-yellow-500/10 text-yellow-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Patna: India's Coaching Capital</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-950/30 to-slate-900/50 border border-yellow-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Education & Coaching Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Patna is India's coaching capital for IIT-JEE, NEET, and UPSC preparation. With thousands of coaching institutes and lakhs of students, Patna needs powerful EdTech solutions.</p>
              <p className="text-slate-300 leading-relaxed">We specialize in education apps including LMS platforms, test prep apps, live class systems, and coaching management solutions.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Bihar's Growing Economy</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Bihar is one of India's fastest-growing states with a young, tech-savvy population. Patna offers excellent value with 50-55% cost savings compared to metros.</p>
              <p className="text-slate-300 leading-relaxed">Our deep understanding of Bihar's market helps us build apps that truly serve local business needs and consumer preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Patna</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Patna Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="text-yellow-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-yellow-500/10 rounded-lg px-3 py-2 text-center"><span className="text-yellow-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Patna Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-yellow-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-yellow-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-yellow-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Patna Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400">{item.icon}</div>
                  <div className="text-sm font-bold text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Patna App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">50-55% savings compared to Delhi with metro-quality development.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-yellow-500 ring-2 ring-yellow-500/20' : 'border-slate-700 hover:border-yellow-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-yellow-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-yellow-600 to-amber-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Patna App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-yellow-950/50 to-amber-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Patna App?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss your education, enterprise, or startup app project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Contact Us</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
