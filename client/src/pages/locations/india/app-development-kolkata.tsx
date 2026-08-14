import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, ShoppingBag,
  Heart, GraduationCap, ShoppingCart, Newspaper, Briefcase, Leaf, Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentKolkata() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Kolkata's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Salt Lake's IT corridor and traditional business districts. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions. Our apps integrate with enterprise systems used by Kolkata's IT companies and traditional businesses.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Enterprise Integration", "Offline Support", "Google Pay/UPI", "Bengali Language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Kolkata's growing iPhone user base in areas like Park Street, Ballygunge, and Alipore. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Kolkata's business executives and professionals expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Kolkata startups and IT companies looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for consumer-facing applications and enterprise tools.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Kolkata's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "E-commerce & Marketplace Apps", 
      desc: "Full-featured e-commerce applications for Kolkata's thriving retail sector. We build online shopping apps, B2B marketplaces, multi-vendor platforms, and retail solutions. Our e-commerce apps include product catalogs, cart management, payment integration, order tracking, and inventory management. Perfect for traditional Kolkata businesses going digital.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Inventory Sync", "Multi-vendor", "Analytics Dashboard"]
    },
    { 
      title: "FMCG & Distribution Apps", 
      desc: "Specialized applications for Kolkata's FMCG and distribution sector. We build sales force automation, distributor management, route optimization, order booking, and inventory tracking apps. Our FMCG apps integrate with ERP systems and support the unique workflows of consumer goods distribution in Eastern India.",
      icon: <ShoppingBag className="w-6 h-6" />,
      features: ["Sales Force Automation", "Distributor Management", "Route Optimization", "Order Booking", "Inventory Tracking", "ERP Integration"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Kolkata's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for quality inspection, and predictive analytics for business intelligence. Our AI apps can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Kolkata's large corporations and IT companies in Salt Lake and Rajarhat. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Tally. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Tally Integration", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Kolkata's IT companies in Salt Lake Sector V, Rajarhat, and New Town. We've built apps for companies from startups to large IT firms.", icon: <Code2 className="w-5 h-5" /> },
    { name: "FMCG & Consumer Goods", desc: "Sales force automation, distributor management, and retail apps for Kolkata's major FMCG companies. Distribution tracking and order management for Eastern India markets.", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Jute & Tea Industry", desc: "Supply chain apps, quality tracking, and export documentation for Kolkata's traditional jute and tea industries. Modernizing heritage industries with digital solutions.", icon: <Leaf className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Digital banking, payment apps, lending platforms, and insurance solutions for Kolkata's financial sector. RBI-compliant apps with bank-grade security.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Education & Universities", desc: "Learning platforms, campus apps, and EdTech solutions for Kolkata's prestigious universities like Jadavpur, Presidency, and IIM Calcutta.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Healthcare & Hospitals", desc: "Telemedicine, patient management, hospital apps, and healthcare solutions for Kolkata's renowned hospitals and medical institutions.", icon: <Heart className="w-5 h-5" /> },
    { name: "Retail & E-commerce", desc: "Online shopping apps, marketplace platforms, and retail solutions for Kolkata's growing e-commerce ecosystem. Traditional retailers going digital.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Media & Publishing", desc: "News apps, content platforms, and digital publishing solutions for Kolkata's vibrant media industry. Bengali content management and distribution.", icon: <Newspaper className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "Salt Lake Sector V", type: "IT Hub", desc: "Kolkata's premier IT hub with major software companies, TCS, Wipro, and numerous tech startups. The heart of Kolkata's tech ecosystem." },
    { name: "Rajarhat New Town", type: "Tech Corridor", desc: "Emerging IT corridor with modern office spaces, tech parks, and growing startup ecosystem. Home to many new-age companies." },
    { name: "Park Street", type: "Commercial Center", desc: "Kolkata's iconic commercial and entertainment hub with corporate offices, restaurants, and premium businesses." },
    { name: "Camac Street", type: "Business District", desc: "Traditional business district with corporate headquarters, banks, and professional services firms." },
    { name: "Esplanade", type: "Central Business", desc: "Central Kolkata's business hub with government offices, banks, and traditional businesses." },
    { name: "Howrah", type: "Industrial Hub", desc: "Industrial and manufacturing hub across the Hooghly. Traditional businesses and growing tech presence." },
    { name: "New Town", type: "Modern Hub", desc: "Planned township with IT parks, modern offices, and residential complexes. Growing business destination." },
    { name: "Ballygunge", type: "Premium Area", desc: "Upscale residential and commercial area with premium businesses and professional services." },
    { name: "Alipore", type: "Elite District", desc: "Elite residential and diplomatic area with high-end businesses and corporate offices." },
    { name: "Dum Dum", type: "North Kolkata", desc: "Growing commercial hub in North Kolkata with mix of traditional and modern businesses." },
    { name: "Behala", type: "South Kolkata", desc: "Major residential and commercial area in South Kolkata with growing business presence." },
    { name: "Gariahat", type: "Shopping Hub", desc: "Famous shopping destination with retail businesses, traditional shops, and growing digital presence." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Kolkata IT Expertise", 
      desc: "We understand Kolkata's unique business ecosystem - the IT corridor in Salt Lake and Rajarhat, the traditional business centers in Park Street and Camac Street, and the heritage industries. Our team has worked with businesses across Kolkata and knows what it takes to succeed in this market. We speak the language of Kolkata's tech community and understand local business practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "55+ Kolkata Apps"
    },
    { 
      title: "FMCG & Distribution Specialists", 
      desc: "Kolkata is a major FMCG hub for Eastern India, and we've built our distribution expertise accordingly. We've developed apps for sales force automation, distributor management, route optimization, and retail engagement. We understand the unique distribution networks and business practices of the FMCG industry in this region.",
      icon: <ShoppingBag className="w-5 h-5" />,
      stats: "12+ FMCG Apps"
    },
    { 
      title: "Enterprise-Grade Solutions", 
      desc: "Kolkata's large corporations and IT companies demand enterprise-grade reliability. We build apps that scale to millions of users, integrate with legacy systems including Tally, comply with corporate IT policies, and provide the security and audit trails that enterprise clients require.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "30+ Enterprise Clients"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by Salt Lake companies, we offer significant cost savings compared to agencies based in Sector V or Rajarhat. Our efficient processes and experienced team mean you get premium quality at competitive prices with complete transparency.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Kolkata's business environment values reliability and timely delivery. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Kolkata's business culture.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 5-Week MVP"
    },
    { 
      title: "Bengali Language Support", 
      desc: "We build fully localized apps with Bengali language support, including Bengali UI, Bengali content management, and Bengali push notifications. This is especially important for apps targeting local consumers, government projects, and businesses serving West Bengal's diverse population.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Bengali Support"
    },
  ];

  // Detailed Pricing
  const pricing = [
    { 
      tier: "Startup App", 
      price: "₹35,000 - ₹1,00,000", 
      ideal: "Early-stage startups & MVPs",
      features: ["Single platform (Android OR iOS)", "Up to 12 screens", "Basic UI/UX design", "User authentication", "Push notifications", "Basic analytics", "3-5 weeks delivery", "30 days support", "Source code ownership"],
      popular: false
    },
    { 
      tier: "Business App", 
      price: "₹1,00,000 - ₹2,50,000", 
      ideal: "Growing businesses & funded startups",
      features: ["Android + iOS apps", "Up to 25 screens", "Premium UI/UX design", "Payment integration", "Admin dashboard", "API development", "Advanced analytics", "6-10 weeks delivery", "90 days support"],
      popular: true
    },
    { 
      tier: "Enterprise App", 
      price: "₹2,50,000 - ₹6,00,000+", 
      ideal: "Large corporations & complex apps",
      features: ["Android + iOS + Web", "Unlimited screens", "Custom UI/UX", "AI/ML integration", "Enterprise backend", "Third-party integrations", "Enterprise security", "10-16 weeks delivery", "1 year support"],
      popular: false
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "FMCG Sales Force App",
      client: "Kolkata FMCG Company",
      description: "Built a comprehensive sales force automation app with beat planning, order booking, distributor management, and real-time reporting. The app is used by 1,500+ sales representatives across Eastern India.",
      results: ["1,500+ Sales Reps", "35% Order Increase", "Real-time Tracking", "Tally Integration"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Tea Export Management",
      client: "Darjeeling Tea Exporter",
      description: "Developed a complete tea export management app with quality grading, auction tracking, export documentation, and shipment management. The app handles 500+ tea lots monthly.",
      results: ["500+ Lots Monthly", "Export Documentation", "Quality Tracking", "Auction Integration"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Stripe"]
    },
    {
      title: "Multi-vendor Marketplace",
      client: "Kolkata Retail Chain",
      description: "Created a multi-vendor e-commerce platform with product catalog, vendor management, order processing, and delivery tracking. The app serves 100,000+ customers across Bengal.",
      results: ["100K+ Customers", "500+ Vendors", "4.5 App Rating", "₹2Cr+ GMV"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Razorpay"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Kolkata?",
      answer: "App development in Kolkata costs ₹35,000 to ₹6,00,000+ depending on complexity. Startup apps with basic features cost ₹35,000-₹1,00,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,00,000-₹2,50,000. Enterprise apps with AI, complex backends, and integrations cost ₹2,50,000-₹6,00,000+. We offer 30-40% lower pricing than typical Salt Lake agencies while delivering premium quality."
    },
    {
      question: "Do you build apps for FMCG and distribution businesses?",
      answer: "Yes! Kolkata is a major FMCG hub for Eastern India, and we specialize in distribution apps. We've built sales force automation, distributor management, route optimization, order booking, and inventory tracking apps. We understand the unique distribution networks and business practices of the FMCG industry in this region."
    },
    {
      question: "Can you work with Kolkata IT companies as a development partner?",
      answer: "Absolutely! We've partnered with several Salt Lake Sector V and Rajarhat IT companies for their internal apps, client projects, and product development. We can work as your extended development team, handle complete projects, or provide specialized expertise. We understand enterprise requirements and can integrate with your existing processes."
    },
    {
      question: "Do you provide Bengali language support in apps?",
      answer: "Yes! We build fully localized apps with Bengali language support, including Bengali UI, Bengali fonts, Bengali content management, and Bengali push notifications. We handle Unicode properly for Bengali text rendering. This is especially important for apps targeting local consumers, government projects, and businesses serving West Bengal's population."
    },
    {
      question: "How long does app development take in Kolkata?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team."
    },
    {
      question: "Do you provide on-site meetings in Kolkata?",
      answer: "Yes! We regularly visit Kolkata for client meetings, workshops, and project kickoffs. We can meet at your office in Salt Lake, Rajarhat, Park Street, Camac Street, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Can you integrate with Tally and other accounting software?",
      answer: "Yes, we specialize in Tally integration which is widely used by Kolkata businesses. We can sync orders, inventory, invoices, and financial data between your app and Tally. We also integrate with other accounting software, ERPs, and business systems used by Kolkata companies."
    },
    {
      question: "What technologies do you use for Kolkata app development?",
      answer: "We use modern, enterprise-approved technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, MongoDB. For cloud: AWS, Azure, Google Cloud. For enterprise: We integrate with Tally, SAP, Oracle, and custom ERPs."
    },
    {
      question: "Do you build apps for traditional industries like jute and tea?",
      answer: "Yes! We understand Kolkata's heritage industries and help them modernize with digital solutions. We've built supply chain apps, quality tracking systems, export documentation apps, and auction management platforms for jute and tea companies. We bridge traditional business practices with modern technology."
    },
    {
      question: "Can you build e-commerce apps for Kolkata retailers?",
      answer: "Yes, we specialize in e-commerce apps for Kolkata's retail sector. We build online shopping apps, B2B marketplaces, multi-vendor platforms, and retail solutions. Our apps include product catalogs, payment integration, order tracking, and inventory management. Perfect for traditional Kolkata retailers going digital."
    },
    {
      question: "What about app security for enterprise and financial apps?",
      answer: "Security is paramount, especially for Kolkata's enterprise and financial sectors. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. We can arrange third-party security audits."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements for enterprise clients with SLA guarantees."
    },
    {
      question: "Can you build apps for government projects in West Bengal?",
      answer: "Yes, we have experience building apps for government projects and public sector organizations. We understand government procurement processes, compliance requirements, and can work within the specific constraints of public sector projects. We've built citizen services apps and e-governance solutions."
    },
    {
      question: "Do you sign NDAs for Kolkata projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. Many of our Kolkata clients are in competitive industries where confidentiality is critical."
    },
    {
      question: "What makes you different from other Kolkata app development companies?",
      answer: "Three key differentiators: 1) Industry Expertise: We specialize in Kolkata's key industries - FMCG, traditional industries, IT services, and retail - with deep understanding of local requirements. 2) Quality at Better Prices: We deliver Salt Lake-quality work at 30-40% lower costs through efficient processes. 3) Reliability: We've delivered 55+ apps for Kolkata businesses with a track record of on-time delivery."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Kolkata business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Bengali language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. FMCG apps undergo additional field testing with sales teams." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "E-commerce", technologies: ["Razorpay", "PayU", "Shiprocket", "Inventory APIs", "Catalog Management", "Order Systems"] },
    { category: "Enterprise", technologies: ["Tally Integration", "SAP APIs", "Oracle", "ERP Connect", "SSO/LDAP", "Audit Logging"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Kolkata | Mobile App Developers Salt Lake | Web Nova Crew"
        description="Top app development company in Kolkata. Android, iOS, Flutter apps for IT companies, FMCG, retail in Salt Lake, Rajarhat, Park Street. ₹35,000 onwards."
        keywords="app development company Kolkata, mobile app developers Kolkata, Salt Lake app development, Rajarhat app developers, Flutter developers Kolkata, FMCG app development Kolkata"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Kolkata", url: "https://webnovacrew.com/locations/app-development-kolkata" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Kolkata"
        serviceDescription="Professional mobile app development for Kolkata businesses. Android, iOS, Flutter apps for IT, FMCG, retail sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-kolkata"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-rose-300">Kolkata, West Bengal • Cultural Capital of India • 15M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent">
              App Development Company in Kolkata
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-rose-400 font-semibold">Kolkata's</span> trusted app development partner. We build <span className="text-pink-400 font-semibold">enterprise-grade apps</span> for IT companies, FMCG, retail & startups.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in Salt Lake Sector V, Rajarhat, Park Street & across Kolkata.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20">
                <div className="text-3xl font-bold text-rose-400 mb-1">45+</div>
                <div className="text-sm text-slate-400">Kolkata Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">₹35K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20">
                <div className="text-3xl font-bold text-rose-400 mb-1">3-10</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Cost Savings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Kolkata</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Kolkata's diverse business ecosystem. From FMCG distribution to e-commerce solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-rose-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-rose-500/10 text-rose-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Kolkata's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-950/30 to-slate-900/50 border border-rose-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Salt Lake IT Hub & Eastern India Gateway</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Kolkata's Salt Lake Sector V and Rajarhat New Town form the IT backbone of Eastern India. Home to TCS, Wipro, Cognizant, and numerous startups, this ecosystem demands enterprise-grade solutions that can scale across the region.</p>
              <p className="text-slate-300 leading-relaxed">We understand the unique requirements of Kolkata's IT companies - from internal tools to client-facing products - and build apps that meet enterprise standards.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-950/30 to-slate-900/50 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">FMCG & Traditional Industries Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Kolkata is a major FMCG distribution hub for Eastern India, with traditional industries like jute and tea adding to its unique business landscape. We've built our expertise to serve this diverse ecosystem with distribution apps, supply chain solutions, and digital transformation tools.</p>
              <p className="text-slate-300 leading-relaxed">Our apps bridge traditional business practices with modern technology, helping heritage industries embrace digital solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Kolkata</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-rose-500/50 transition-all">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kolkata Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-rose-500/50 transition-all">
                <div className="text-rose-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-rose-500/10 rounded-lg px-3 py-2 text-center"><span className="text-rose-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Kolkata Business Hubs</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-rose-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-rose-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-rose-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-rose-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-rose-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Kolkata Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-rose-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400">{item.icon}</div>
                  <div className="text-sm font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kolkata App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Transparent pricing. 30-40% lower than typical Salt Lake agencies.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-700 hover:border-rose-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-rose-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-rose-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-rose-600 to-pink-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kolkata App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-rose-950/50 to-pink-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Kolkata App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 45+ Kolkata businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Kolkata Meeting</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
