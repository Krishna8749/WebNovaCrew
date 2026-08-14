import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Gem,
  Heart, ShoppingCart, Home, GraduationCap, Plane, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentJaipur() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Jaipur's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Rajasthan's tourism, handicraft, and IT sectors. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions across the state.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Google Pay/UPI", "Hindi Language Support", "Location Services"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Jaipur's growing iPhone user base, especially among tourists and premium businesses. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that heritage hotels and luxury tourism businesses expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "AR Kit for Tourism"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Jaipur startups and tourism businesses looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Jaipur's IT and BPO companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Tourism & Travel Apps", 
      desc: "Specialized applications for Jaipur's thriving tourism industry - the Pink City attracts millions of visitors annually. We build hotel booking apps, heritage tour guides, audio tour apps, travel marketplaces, and AR-powered heritage experiences. Our tourism apps include multi-language support, offline maps, and booking integrations.",
      icon: <Plane className="w-6 h-6" />,
      features: ["Hotel Booking", "Tour Guides", "Audio Tours", "AR Experiences", "Offline Maps", "Multi-language"]
    },
    { 
      title: "Handicraft & Jewelry E-commerce", 
      desc: "Full-featured e-commerce applications for Jaipur's famous handicraft and jewelry businesses. We build online shopping apps, B2B marketplaces, artisan platforms, and wholesale distribution apps. Our apps showcase the beauty of Rajasthani craftsmanship with high-quality image galleries, 360° product views, and secure payment processing.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "360° Views", "Payment Gateway", "Order Management", "Artisan Profiles", "Wholesale Features"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Jaipur's innovation-driven companies. We integrate GPT-4 for conversational AI and chatbots, computer vision for product recognition, and recommendation engines for e-commerce. Our AI apps can provide personalized travel recommendations and heritage information.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Chatbots", "Computer Vision", "Recommendations", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Jaipur's IT companies and large businesses in Sitapura Industrial Area. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Tally Integration", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "Tourism & Hospitality", desc: "Hotel booking apps, heritage tour guides, travel marketplaces, and AR experiences for Jaipur's tourism industry. Apps serving millions of visitors to the Pink City.", icon: <Plane className="w-5 h-5" /> },
    { name: "Handicrafts & Jewelry", desc: "E-commerce platforms, artisan marketplaces, and B2B apps for Jaipur's world-famous handicraft and jewelry industry. Showcasing Rajasthani craftsmanship globally.", icon: <Gem className="w-5 h-5" /> },
    { name: "Textile & Garments", desc: "B2B marketplaces, inventory management, and order tracking for Jaipur's textile industry. Apps for block printing, bandhani, and traditional fabric businesses.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "IT & BPO Services", desc: "Internal tools, employee apps, and client products for Jaipur's growing IT and BPO sector in Sitapura and Malviya Nagar.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, and construction management for Jaipur's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "LMS platforms, coaching apps, and EdTech solutions for Jaipur's education sector. Apps for competitive exam preparation and skill development.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Jaipur's growing e-commerce ecosystem.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Healthcare & Wellness", desc: "Telemedicine, hospital apps, and wellness solutions for Jaipur's healthcare sector. Ayurveda and traditional medicine apps.", icon: <Heart className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Malviya Nagar", type: "IT Hub", desc: "Major IT and business hub with tech companies, startups, and modern commercial spaces. Growing tech ecosystem." },
    { name: "Vaishali Nagar", type: "Commercial Center", desc: "Established commercial and residential area with corporate offices, retail, and professional services." },
    { name: "C-Scheme", type: "Premium Business", desc: "Premium business district with corporate offices, banks, and high-end commercial establishments." },
    { name: "Mansarovar", type: "Residential Hub", desc: "Large residential and commercial area with growing business presence and retail establishments." },
    { name: "Sitapura Industrial", type: "IT Park", desc: "Major IT park and industrial area with software companies, BPOs, and manufacturing units." },
    { name: "Tonk Road", type: "Commercial Strip", desc: "Major commercial corridor with retail, hospitality, and business establishments." },
    { name: "JLN Marg", type: "Business Corridor", desc: "Important business corridor with corporate offices, hotels, and commercial spaces." },
    { name: "Raja Park", type: "Central Hub", desc: "Central commercial area with traditional businesses, retail, and professional services." },
    { name: "Jagatpura", type: "Growing Hub", desc: "Rapidly developing area with new commercial spaces, educational institutions, and residential complexes." },
    { name: "Ajmer Road", type: "Industrial Zone", desc: "Industrial and commercial corridor with manufacturing, logistics, and growing IT presence." },
    { name: "MI Road", type: "Heritage Commercial", desc: "Historic commercial street with traditional businesses, jewelry shops, and heritage establishments." },
    { name: "Bani Park", type: "Tourism Hub", desc: "Major tourism area with heritage hotels, guest houses, and tourism-related businesses." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Rajasthan Tourism Expertise", 
      desc: "We understand Jaipur's unique position as India's Pink City and a major tourist destination. Our team has built tourism apps, heritage tour guides, and hospitality solutions that serve millions of visitors. We know what tourists expect and how to deliver exceptional digital experiences.",
      icon: <Award className="w-5 h-5" />,
      stats: "35+ Jaipur Apps"
    },
    { 
      title: "Handicraft & Jewelry Specialists", 
      desc: "Jaipur is world-famous for its handicrafts and jewelry. We've built e-commerce platforms, artisan marketplaces, and B2B apps that showcase Rajasthani craftsmanship. We understand the unique requirements of jewelry photography, product catalogs, and wholesale pricing.",
      icon: <Gem className="w-5 h-5" />,
      stats: "10+ Craft Apps"
    },
    { 
      title: "Most Affordable Pricing", 
      desc: "We offer the most competitive pricing for Jaipur businesses while maintaining premium quality. Our efficient processes and experienced team mean you get excellent value. We understand the budget constraints of small businesses and startups in Rajasthan.",
      icon: <Star className="w-5 h-5" />,
      stats: "40% Cost Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Tourism businesses especially benefit from our quick turnaround before peak seasons.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 4-Week MVP"
    },
    { 
      title: "Hindi & Regional Support", 
      desc: "We build fully localized apps with Hindi language support, including Hindi UI, Hindi content management, and Hindi push notifications. This is especially important for apps targeting local consumers and tourists who prefer Hindi interfaces.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Hindi Support"
    },
    { 
      title: "Quality Focus", 
      desc: "We maintain enterprise-grade quality standards for all projects. Our QA processes include automated testing, performance optimization, and device compatibility testing. Tourism apps undergo additional testing for offline functionality and location services.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "99.9% Uptime"
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
      ideal: "Growing businesses & tourism apps",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,25,000 - ₹5,50,000+", 
      ideal: "Large corporations & complex apps",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Heritage Tourism App",
      client: "Jaipur Tourism Board",
      description: "Built a comprehensive heritage tourism app with AR-powered monument guides, audio tours, booking integration, and offline maps. The app serves 500,000+ tourists annually with multi-language support.",
      results: ["500K+ Downloads", "AR Experiences", "15 Languages", "Offline Maps"],
      tech: ["Flutter", "AR Kit", "Node.js", "AWS", "Firebase"]
    },
    {
      title: "Jewelry E-commerce Platform",
      client: "Jaipur Jewelry Consortium",
      description: "Developed a B2B and B2C jewelry marketplace with 360° product views, certification verification, secure payments, and wholesale pricing. The app connects 200+ jewelers with buyers globally.",
      results: ["200+ Jewelers", "₹10Cr+ GMV", "360° Views", "Global Reach"],
      tech: ["React Native", "Python", "PostgreSQL", "Stripe", "AWS"]
    },
    {
      title: "Hotel Booking App",
      client: "Rajasthan Heritage Hotels",
      description: "Created a hotel booking app for heritage properties with virtual tours, instant booking, payment processing, and guest services. The app manages 50+ heritage properties across Rajasthan.",
      results: ["50+ Properties", "25K+ Bookings", "Virtual Tours", "4.8 Rating"],
      tech: ["Kotlin", "Swift", "Java Spring", "MongoDB", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Jaipur?",
      answer: "App development in Jaipur costs ₹30,000 to ₹5,50,000+ depending on complexity. Startup apps with basic features cost ₹30,000-₹90,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹90,000-₹2,25,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,25,000-₹5,50,000+. We offer the most affordable pricing in Rajasthan while delivering premium quality."
    },
    {
      question: "Do you build tourism and travel apps?",
      answer: "Yes! Jaipur is India's Pink City and a major tourist destination. We specialize in tourism apps including hotel booking, heritage tour guides, audio tours, AR-powered monument experiences, travel marketplaces, and offline maps. Our tourism apps support multiple languages and work offline for areas with poor connectivity."
    },
    {
      question: "Can you build apps for handicraft and jewelry businesses?",
      answer: "Absolutely! Jaipur is world-famous for its handicrafts and jewelry. We've built e-commerce platforms, artisan marketplaces, B2B wholesale apps, and retail solutions. Our apps feature high-quality product photography, 360° views, certification verification, and secure payment processing for valuable items."
    },
    {
      question: "How long does app development take in Jaipur?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. Tourism businesses can get apps ready before peak tourist seasons."
    },
    {
      question: "Do you provide on-site meetings in Jaipur?",
      answer: "Yes! We regularly visit Jaipur for client meetings, workshops, and project kickoffs. We can meet at your office in Malviya Nagar, C-Scheme, Vaishali Nagar, Sitapura, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Do you provide Hindi language support in apps?",
      answer: "Yes! We build fully localized apps with Hindi language support, including Hindi UI, Hindi fonts, Hindi content management, and Hindi push notifications. We handle Devanagari script properly. This is especially important for apps targeting local consumers and tourists who prefer Hindi interfaces."
    },
    {
      question: "Can you build AR-powered heritage apps?",
      answer: "Yes! We specialize in AR (Augmented Reality) experiences for Jaipur's heritage sites. We can build apps that overlay historical information on monuments, provide virtual reconstructions, and create immersive heritage experiences. AR works on both Android and iOS devices."
    },
    {
      question: "What technologies do you use for Jaipur app development?",
      answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For tourism: AR Kit, offline maps, multi-language support. For cloud: AWS, Azure, Google Cloud."
    },
    {
      question: "Can you build apps that work offline?",
      answer: "Yes! Offline functionality is crucial for tourism apps in areas with poor connectivity. We build apps with offline maps, cached content, and sync capabilities. Tourists can access heritage information, audio guides, and maps even without internet connection."
    },
    {
      question: "Do you build apps for the education sector?",
      answer: "Yes! Jaipur has a growing education and coaching sector. We build LMS platforms, coaching apps, competitive exam preparation apps, and EdTech solutions. Our education apps support video content, assessments, progress tracking, and live classes."
    },
    {
      question: "What about app security for e-commerce and jewelry apps?",
      answer: "Security is paramount, especially for jewelry and high-value e-commerce. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, and PCI-DSS compliant payment processing."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. Tourism apps get special attention before peak seasons."
    },
    {
      question: "Can you integrate with hotel booking systems?",
      answer: "Yes! We integrate with major hotel booking systems and OTAs. We can connect your app with property management systems, channel managers, and booking engines. We've built integrations for heritage hotels and boutique properties across Rajasthan."
    },
    {
      question: "Do you sign NDAs for Jaipur projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels."
    },
    {
      question: "What makes you different from other Jaipur app development companies?",
      answer: "Three key differentiators: 1) Tourism Expertise: Deep specialization in heritage tourism, hospitality, and travel apps with AR capabilities. 2) Handicraft Focus: Understanding of jewelry and handicraft e-commerce with high-quality product presentation. 3) Affordable Quality: Most competitive pricing in Rajasthan while delivering premium quality."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Jaipur business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Hindi language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Tourism apps undergo additional offline and location testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with special attention before tourist seasons." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Tourism", technologies: ["AR Kit", "Offline Maps", "Audio Guides", "Multi-language", "Booking APIs", "Location Services"] },
    { category: "E-commerce", technologies: ["Razorpay", "PayU", "Product Catalog", "360° Views", "Inventory APIs", "Wholesale Pricing"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Jaipur | Mobile App Developers Rajasthan | Web Nova Crew"
        description="Top app development company in Jaipur. Android, iOS, Flutter apps for tourism, handicrafts, IT in Malviya Nagar, C-Scheme. ₹30,000 onwards."
        keywords="app development company Jaipur, mobile app developers Jaipur, Rajasthan app development, tourism app Jaipur, Flutter developers Jaipur"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Jaipur", url: "https://webnovacrew.com/locations/app-development-jaipur" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Jaipur"
        serviceDescription="Professional mobile app development for Jaipur businesses. Android, iOS, Flutter apps for tourism, handicrafts, IT sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-jaipur"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-pink-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300">Jaipur, Rajasthan • Pink City • 4M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-rose-100 bg-clip-text text-transparent">
              App Development Company in Jaipur
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-pink-400 font-semibold">Pink City's</span> trusted app development partner. We build <span className="text-rose-400 font-semibold">tourism, handicraft & business apps</span> for Jaipur enterprises.
            </p>

            <p className="text-lg text-slate-400 mb-8">Serving businesses in Malviya Nagar, C-Scheme, Vaishali Nagar & across Jaipur.</p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-pink-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">35+</div><div className="text-sm text-slate-400">Jaipur Apps</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-pink-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">₹30K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-pink-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">3-10</div><div className="text-sm text-slate-400">Weeks Delivery</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-pink-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">45%</div><div className="text-sm text-slate-400">Cost Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Jaipur</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Jaipur's diverse business ecosystem. From heritage tourism apps to jewelry e-commerce.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-pink-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-pink-500/10 text-pink-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Jaipur's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-950/30 to-slate-900/50 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Pink City - Tourism Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Jaipur attracts millions of tourists annually to its UNESCO World Heritage sites, palaces, and forts. We've built our tourism expertise to serve this market with heritage tour guides, AR experiences, hotel booking apps, and travel marketplaces.</p>
              <p className="text-slate-300 leading-relaxed">Our tourism apps support multiple languages, work offline, and provide immersive experiences that enhance the visitor journey.</p>
            </div>
            <div className="bg-gradient-to-br from-rose-950/30 to-slate-900/50 border border-rose-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Handicraft & Jewelry Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Jaipur is world-famous for its handicrafts, jewelry, and textiles. We've built e-commerce platforms, artisan marketplaces, and B2B apps that showcase Rajasthani craftsmanship to global audiences.</p>
              <p className="text-slate-300 leading-relaxed">Our apps feature high-quality product photography, 360° views, and secure payment processing for valuable items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Jaipur</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-pink-500/50 transition-all">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jaipur Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-pink-500/50 transition-all">
                <div className="text-pink-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-pink-500/10 rounded-lg px-3 py-2 text-center"><span className="text-pink-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Jaipur Areas</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-pink-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-pink-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-pink-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-pink-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-pink-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Jaipur Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-pink-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400">{item.icon}</div>
                  <div className="text-sm font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jaipur App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Most affordable pricing in Rajasthan with premium quality.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-pink-500 ring-2 ring-pink-500/20' : 'border-slate-700 hover:border-pink-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-pink-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-pink-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-pink-600 to-rose-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jaipur App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-pink-950/50 to-rose-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Jaipur App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 35+ Jaipur businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Jaipur Meeting</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
