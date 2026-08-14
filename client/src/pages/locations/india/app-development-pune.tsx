import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, GraduationCap,
  Heart, ShoppingCart, Home, Briefcase, Car, Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentPune() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Pune's tech-savvy Android user base. Our Android development team creates high-performance apps optimized for devices used across Hinjewadi's IT corridor and Pune's startup ecosystem. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions. Our apps integrate with enterprise systems used by Pune's IT companies.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Enterprise Integration", "Offline Support", "Google Pay/UPI", "Marathi Language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Pune's growing iPhone user base in areas like Koregaon Park, Kalyani Nagar, and Baner. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Pune's young professionals and entrepreneurs expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Pune startups looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for MVPs and consumer-facing applications.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Pune's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "EdTech & E-Learning Apps", 
      desc: "Specialized applications for Pune's thriving education sector - India's Oxford. We build LMS platforms, online course apps, virtual classrooms, student management systems, assessment tools, and gamified learning experiences. Our EdTech apps support video streaming, live classes, interactive content, and progress tracking for millions of students.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["LMS Platforms", "Video Streaming", "Live Classes", "Assessments", "Progress Tracking", "Gamification"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Pune's vibrant startup ecosystem. We help founders validate ideas quickly with lean, functional prototypes that can be tested with real users. Our startup-friendly approach includes flexible engagement models, equity options for select startups, and a focus on speed-to-market without compromising quality.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3-Week MVPs", "Lean Development", "User Testing", "Pivot Ready", "Scalable Architecture", "Investor-Ready"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Pune's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for image analysis, and predictive analytics for business intelligence. Our AI apps can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Pune's large IT companies and MNCs in Hinjewadi and Kharadi. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Salesforce. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Compliance Ready", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Pune's 1,000+ IT companies in Hinjewadi, Kharadi, and Magarpatta. We've built apps for companies from startups to Fortune 500 MNCs.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Education & EdTech", desc: "LMS platforms, course apps, and virtual classrooms for Pune's education hub. Apps for universities, coaching institutes, and EdTech startups serving millions of students.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Automobile & Manufacturing", desc: "Apps for Pune's automobile corridor including Tata Motors, Bajaj, and auto component manufacturers. Dealer apps, service management, and Industry 4.0 solutions.", icon: <Car className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "Digital banking, payment apps, lending platforms, and insurance solutions for Pune's financial sector. RBI-compliant apps with bank-grade security.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Healthcare & Pharma", desc: "Telemedicine, patient management, hospital apps, and healthcare solutions for Pune's growing healthcare sector and pharma companies.", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate & PropTech", desc: "Property listing apps, virtual tour platforms, construction management, and PropTech solutions for Pune's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Pune's growing e-commerce ecosystem. Apps handling lakhs of orders monthly.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Startups & SaaS", desc: "MVP development, product scaling, and SaaS applications for Pune's vibrant startup ecosystem. From idea validation to Series A and beyond.", icon: <Lightbulb className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Hinjewadi IT Park", type: "IT Hub", desc: "Pune's largest IT hub with Infosys, Wipro, TCS, and 500+ tech companies. The heart of Pune's tech ecosystem across Phases 1, 2, and 3." },
    { name: "Kharadi", type: "Tech Corridor", desc: "Major IT corridor with EON IT Park, World Trade Center, and numerous tech companies. Growing startup ecosystem." },
    { name: "Magarpatta", type: "IT Township", desc: "Integrated IT township with Cybercity and major tech companies. Self-contained business ecosystem." },
    { name: "Baner", type: "Startup Hub", desc: "Emerging startup hub with co-working spaces, incubators, and young tech companies. Affordable office spaces attracting new ventures." },
    { name: "Wakad", type: "IT Suburb", desc: "Growing IT suburb near Hinjewadi with tech parks, startups, and residential complexes for IT professionals." },
    { name: "Viman Nagar", type: "Commercial Hub", desc: "Commercial hub near airport with corporate offices, retail, and growing tech presence." },
    { name: "Koregaon Park", type: "Premium Area", desc: "Upscale area with premium offices, restaurants, and high-end businesses. High concentration of iOS users and premium brands." },
    { name: "Aundh", type: "Business District", desc: "Established business district with corporate offices, educational institutions, and professional services." },
    { name: "Pimpri-Chinchwad", type: "Industrial Hub", desc: "Industrial hub with automobile manufacturers, MIDC, and growing IT presence. Tata Motors, Bajaj headquarters." },
    { name: "Hadapsar", type: "IT Corridor", desc: "Major IT corridor with Magarpatta, SP Infocity, and numerous tech companies. Growing residential and commercial hub." },
    { name: "Shivaji Nagar", type: "Central Pune", desc: "Central Pune's business hub with traditional businesses, government offices, and professional services." },
    { name: "Kalyani Nagar", type: "Premium Business", desc: "Premium residential and commercial area with upscale offices, restaurants, and professional services." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Pune IT Expertise", 
      desc: "We understand Pune's unique tech ecosystem - the IT corridor in Hinjewadi and Kharadi, the startup culture in Baner and Koregaon Park, and the manufacturing hub in Pimpri-Chinchwad. Our team has worked with businesses across Pune and knows what it takes to succeed in this market. We speak the language of Pune's tech community.",
      icon: <Award className="w-5 h-5" />,
      stats: "65+ Pune Apps"
    },
    { 
      title: "EdTech Specialists", 
      desc: "Pune is India's Oxford, and we've built our education expertise accordingly. We've developed LMS platforms, online course apps, virtual classrooms, and assessment tools for universities, coaching institutes, and EdTech startups. We understand the unique requirements of the education sector.",
      icon: <GraduationCap className="w-5 h-5" />,
      stats: "18+ EdTech Apps"
    },
    { 
      title: "Startup-Friendly Partner", 
      desc: "We've worked with 40+ Pune startups, helping them build MVPs and scale their products. We understand the startup ecosystem and offer flexible engagement models including milestone-based payments, equity options for select startups, and a focus on speed-to-market.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "40+ Startups Served"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by Hinjewadi companies, we offer significant cost savings compared to agencies based in the IT parks. Our efficient processes and experienced team mean you get premium quality at competitive prices with complete transparency.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Pune's startup culture demands speed, and we deliver. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Pune's fast-paced business environment.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Quality Focus", 
      desc: "We maintain enterprise-grade quality standards for all projects, whether it's a startup MVP or a corporate application. Our QA processes include automated testing, performance optimization, security audits, and device compatibility testing across 50+ devices.",
      icon: <Shield className="w-5 h-5" />,
      stats: "99.9% Uptime"
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
      ideal: "Growing businesses & funded startups",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹3,00,000 - ₹7,00,000+", 
      ideal: "Large corporations & complex apps",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "EdTech Learning Platform",
      client: "Pune Education Startup",
      description: "Built a comprehensive e-learning platform with live classes, recorded courses, assessments, and progress tracking. The app serves 500,000+ students across India with video streaming and interactive content.",
      results: ["500K+ Students", "10K+ Courses", "4.7 App Rating", "Live Classes"],
      tech: ["Flutter", "Node.js", "AWS", "WebRTC", "MongoDB"]
    },
    {
      title: "Automobile Dealer App",
      client: "Pune Auto Dealership Chain",
      description: "Developed a dealer management app with inventory tracking, customer CRM, service booking, and sales analytics. The app is used across 30+ showrooms and service centers.",
      results: ["30+ Showrooms", "15K+ Customers", "40% Efficiency Gain", "DMS Integration"],
      tech: ["React Native", "Java Spring", "PostgreSQL", "Firebase", "SAP"]
    },
    {
      title: "Startup Fintech MVP",
      client: "Pune Fintech Startup",
      description: "Created an MVP for a peer-to-peer lending platform with user verification, loan matching, payment processing, and credit scoring. The startup raised Series A after successful launch.",
      results: ["Series A Raised", "₹5Cr+ Disbursed", "RBI Compliant", "4-Week MVP"],
      tech: ["Kotlin", "Swift", "Python", "AWS", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Pune?",
      answer: "App development in Pune costs ₹40,000 to ₹7,00,000+ depending on complexity. Startup apps with basic features cost ₹40,000-₹1,25,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,25,000-₹3,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹3,00,000-₹7,00,000+. We offer 30-40% lower pricing than typical Hinjewadi agencies while delivering premium quality."
    },
    {
      question: "Do you build EdTech and education apps?",
      answer: "Yes! Pune is India's education hub, and we specialize in EdTech applications. We've built LMS platforms, online course apps, virtual classrooms, student management systems, assessment tools, and gamified learning experiences. Our EdTech apps support video streaming, live classes, interactive content, and progress tracking for millions of students."
    },
    {
      question: "Can you work with Pune IT companies as a development partner?",
      answer: "Absolutely! We've partnered with several Hinjewadi and Kharadi IT companies for their internal apps, client projects, and product development. We can work as your extended development team, handle complete projects, or provide specialized expertise. We understand enterprise requirements and can integrate with your existing processes."
    },
    {
      question: "How long does app development take in Pune?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team."
    },
    {
      question: "Do you provide on-site meetings in Pune?",
      answer: "Yes! We regularly visit Pune for client meetings, workshops, and project kickoffs. We can meet at your office in Hinjewadi, Kharadi, Baner, Magarpatta, Koregaon Park, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Do you work with Pune startups?",
      answer: "Yes! We've worked with 40+ Pune startups, helping them build MVPs and scale their products. We understand the startup ecosystem and offer flexible engagement models including milestone-based payments, equity options for select startups, and a focus on speed-to-market. Many of our startup clients have gone on to raise funding."
    },
    {
      question: "What technologies do you use for Pune app development?",
      answer: "We use modern, enterprise-approved technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For cloud: AWS, Azure, Google Cloud. For EdTech: WebRTC for live classes, video streaming, and interactive content."
    },
    {
      question: "Can you build apps for the automobile industry?",
      answer: "Yes! Pune is a major automobile hub with Tata Motors, Bajaj, and numerous auto component manufacturers. We've built dealer management apps, service center solutions, fleet tracking, and connected car platforms. We understand DMS integrations and the specific needs of the automobile industry."
    },
    {
      question: "Do you provide Marathi language support in apps?",
      answer: "Yes! We build fully localized apps with Marathi language support, including Marathi UI, Marathi fonts, Marathi content management, and Marathi push notifications. We handle Unicode properly for Marathi text rendering. This is especially important for apps targeting local consumers and government projects."
    },
    {
      question: "Can you help startups raise funding?",
      answer: "While we're not investors, we help startups build investor-ready products. Our MVPs are designed to demonstrate traction and scalability. We provide technical documentation, architecture diagrams, and can participate in investor calls to explain the technical aspects. Many of our startup clients have successfully raised funding."
    },
    {
      question: "What about app security for enterprise and fintech apps?",
      answer: "Security is paramount, especially for Pune's enterprise and fintech sectors. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. For fintech, we ensure RBI compliance."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements for enterprise clients with SLA guarantees."
    },
    {
      question: "Can you scale apps for millions of users?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built EdTech apps that serve 500,000+ students and enterprise apps with global deployments. We use technologies like Redis for caching and microservices for independent scaling."
    },
    {
      question: "Do you sign NDAs for Pune projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. Many of our Pune clients are in competitive industries where confidentiality is critical."
    },
    {
      question: "What makes you different from other Pune app development companies?",
      answer: "Three key differentiators: 1) Startup DNA: We understand Pune's startup culture and offer flexible engagement models with a focus on speed-to-market. 2) EdTech Expertise: Deep specialization in education apps with 18+ EdTech projects delivered. 3) Quality at Better Prices: We deliver Hinjewadi-quality work at 30-40% lower costs through efficient processes."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Pune business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Marathi language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. EdTech apps undergo additional video streaming and live class testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "EdTech", technologies: ["WebRTC", "Video Streaming", "HLS/DASH", "Interactive Content", "LMS APIs", "Assessment Tools"] },
    { category: "Enterprise", technologies: ["SAP Integration", "Oracle APIs", "Salesforce", "SSO/LDAP", "Audit Logging", "Compliance"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Pune | Mobile App Developers Hinjewadi | Web Nova Crew"
        description="Top app development company in Pune. Android, iOS, Flutter apps for IT companies, EdTech, startups in Hinjewadi, Kharadi, Baner. ₹40,000 onwards."
        keywords="app development company Pune, mobile app developers Pune, Hinjewadi app development, Kharadi app developers, Flutter developers Pune, EdTech app development Pune"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Pune", url: "https://webnovacrew.com/locations/app-development-pune" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Pune"
        serviceDescription="Professional mobile app development for Pune businesses. Android, iOS, Flutter apps for IT, EdTech, startup sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-pune"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Pune, Maharashtra • Oxford of the East • 7M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-violet-100 bg-clip-text text-transparent">
              App Development Company in Pune
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-indigo-400 font-semibold">Pune's</span> trusted app development partner. We build <span className="text-violet-400 font-semibold">innovative apps</span> for IT companies, EdTech, startups & enterprises.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in Hinjewadi, Kharadi, Baner, Magarpatta & across Pune.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20">
                <div className="text-3xl font-bold text-indigo-400 mb-1">55+</div>
                <div className="text-sm text-slate-400">Pune Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20">
                <div className="text-3xl font-bold text-violet-400 mb-1">₹40K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20">
                <div className="text-3xl font-bold text-indigo-400 mb-1">3-10</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20">
                <div className="text-3xl font-bold text-violet-400 mb-1">30+</div>
                <div className="text-sm text-slate-400">Startups Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Pune</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Pune's diverse business ecosystem. From EdTech platforms to startup MVPs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Pune's Tech Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-950/30 to-slate-900/50 border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Oxford - Education Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Pune is India's education capital with prestigious universities, coaching institutes, and a thriving EdTech ecosystem. We've built our education expertise to serve this market with LMS platforms, virtual classrooms, and assessment tools serving millions of students.</p>
              <p className="text-slate-300 leading-relaxed">Our EdTech apps support video streaming, live classes, interactive content, and progress tracking for universities and startups alike.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-950/30 to-slate-900/50 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Startup Capital & IT Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Pune's Hinjewadi and Kharadi IT corridors host 1,000+ tech companies, while Baner and Koregaon Park nurture a vibrant startup ecosystem. We understand both worlds - enterprise requirements and startup agility.</p>
              <p className="text-slate-300 leading-relaxed">We've helped 40+ Pune startups build MVPs and scale their products, with many going on to raise funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Pune</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pune Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
                <div className="text-indigo-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-indigo-500/10 rounded-lg px-3 py-2 text-center"><span className="text-indigo-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Pune IT Hubs</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-indigo-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-indigo-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-indigo-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Pune Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">{item.icon}</div>
                  <div className="text-sm font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pune App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Startup-friendly pricing. 30-40% lower than typical Hinjewadi agencies.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-700 hover:border-indigo-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-indigo-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-violet-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pune App Development FAQs</h2></div>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-950/50 to-violet-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Pune App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 55+ Pune businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Pune Meeting</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
