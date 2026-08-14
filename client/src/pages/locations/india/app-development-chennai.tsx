import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Car,
  Heart, GraduationCap, ShoppingCart, Ship, Tv, Factory, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentChennai() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Chennai's diverse Android user base. Our Android development team creates high-performance apps optimized for devices used across Chennai's IT corridor and manufacturing hubs. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions from high-speed fiber in OMR to mobile networks in industrial areas. Our apps integrate with enterprise systems used by Chennai's IT and manufacturing companies.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Enterprise Integration", "Offline Support", "Google Pay/UPI", "Tamil Language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Chennai's growing iPhone user base in areas like Adyar, Nungambakkam, and Anna Nagar. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Chennai's tech professionals and business executives expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Chennai startups and IT companies looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for consumer-facing applications and enterprise tools.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Chennai's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Automotive Industry Apps", 
      desc: "Specialized applications for Chennai's thriving automobile industry - India's Detroit. We build apps for car dealerships, service center management, fleet tracking, spare parts inventory, customer relationship management, and connected car solutions. Our automotive apps integrate with DMS systems and support the unique workflows of the auto industry.",
      icon: <Car className="w-6 h-6" />,
      features: ["Dealer Management", "Service Booking", "Fleet Tracking", "Inventory Management", "CRM Integration", "Connected Car"]
    },
    { 
      title: "Manufacturing & Industry 4.0 Apps", 
      desc: "Industrial applications for Chennai's manufacturing sector including factory floor management, IoT device integration, quality control, supply chain tracking, and predictive maintenance. Our Industry 4.0 apps connect with PLCs, SCADA systems, and ERP platforms to enable smart manufacturing and real-time monitoring.",
      icon: <Factory className="w-6 h-6" />,
      features: ["IoT Integration", "SCADA/PLC Connect", "Quality Control", "Predictive Maintenance", "Supply Chain", "Real-time Dashboards"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Chennai's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for quality inspection, and predictive analytics for manufacturing optimization. Our AI apps can be deployed on-device or in the cloud.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "Quality Inspection", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Chennai's large IT companies and MNCs on OMR and in Guindy. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Salesforce. Our enterprise apps include comprehensive admin panels, role-based access control, and audit logging.",
      icon: <Database className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Compliance Ready", "24/7 SLA Support"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Chennai's 2,000+ IT companies on OMR, Tidel Park, and Guindy. We've built apps for companies from startups to Fortune 500 MNCs.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Automobile & Manufacturing", desc: "Apps for Chennai's automobile hub - India's Detroit. Dealer management, service apps, fleet tracking, and connected car solutions for Hyundai, Ford, BMW, and local manufacturers.", icon: <Car className="w-5 h-5" /> },
    { name: "Healthcare & Hospitals", desc: "Telemedicine, patient management, hospital apps, and healthcare solutions for Chennai's renowned medical tourism industry and hospital chains like Apollo and MIOT.", icon: <Heart className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Digital banking, payment apps, lending platforms, and insurance solutions for Chennai's financial sector. RBI-compliant apps with bank-grade security.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Education & Universities", desc: "Learning platforms, campus apps, and EdTech solutions for Chennai's prestigious universities like IIT Madras, Anna University, and numerous engineering colleges.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Logistics & Shipping", desc: "Port management, shipping logistics, fleet tracking, and supply chain apps for Chennai Port and the logistics ecosystem. Real-time tracking and documentation.", icon: <Ship className="w-5 h-5" /> },
    { name: "Retail & E-commerce", desc: "Online shopping apps, marketplace platforms, and retail solutions for Chennai's growing e-commerce ecosystem. Apps handling lakhs of orders monthly.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Media & Entertainment", desc: "Streaming apps, content platforms, and entertainment solutions for Kollywood and Chennai's vibrant media industry. OTT platforms and content management.", icon: <Tv className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "OMR (IT Corridor)", type: "IT Hub", desc: "Chennai's premier IT corridor stretching from Tidel Park to Siruseri. Home to TCS, Infosys, Cognizant, and 1,000+ tech companies." },
    { name: "Tidel Park", type: "Tech Park", desc: "Iconic IT park with major software companies. One of India's first IT parks and still a major tech hub." },
    { name: "Guindy", type: "Industrial Hub", desc: "Industrial and IT hub with manufacturing units, IT parks, and the famous Guindy Industrial Estate." },
    { name: "T. Nagar", type: "Commercial Center", desc: "Chennai's busiest commercial hub with retail businesses, traditional shops, and growing tech presence." },
    { name: "Anna Nagar", type: "Residential Business", desc: "Upscale residential area with growing commercial presence, startups, and professional services." },
    { name: "Velachery", type: "IT Suburb", desc: "Major IT suburb with tech parks, residential complexes, and growing startup ecosystem." },
    { name: "Adyar", type: "Premium Area", desc: "Premium residential and commercial area with educational institutions and professional services." },
    { name: "Nungambakkam", type: "Business District", desc: "Central business district with corporate offices, consulates, and premium businesses." },
    { name: "Porur", type: "Growing Hub", desc: "Rapidly developing IT and residential hub on the western corridor with new tech parks." },
    { name: "Ambattur", type: "Industrial Zone", desc: "Major industrial zone with manufacturing units, IT parks, and the Ambattur Industrial Estate." },
    { name: "Sholinganallur", type: "IT Corridor", desc: "Part of OMR IT corridor with major tech companies, SEZs, and modern office spaces." },
    { name: "Perungudi", type: "Tech Hub", desc: "Growing tech hub on OMR with IT companies, startups, and residential developments." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Chennai IT Expertise", 
      desc: "We understand Chennai's unique business ecosystem - the IT corridor on OMR, the manufacturing hub in Ambattur and Guindy, and the traditional business centers in T. Nagar. Our team has worked with businesses across Chennai and knows what it takes to succeed in this market. We speak the language of Chennai's tech community and understand local business practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "70+ Chennai Apps"
    },
    { 
      title: "Automobile Industry Specialists", 
      desc: "Chennai is India's Detroit, and we've built our automotive expertise accordingly. We've developed apps for car dealerships, service centers, fleet management, and manufacturing plants. We understand DMS integrations, service workflows, and the specific needs of the automobile industry from OEMs to local dealers.",
      icon: <Car className="w-5 h-5" />,
      stats: "15+ Auto Apps"
    },
    { 
      title: "Enterprise-Grade Solutions", 
      desc: "Chennai's large IT companies and MNCs demand enterprise-grade reliability. We build apps that scale to millions of users, integrate with legacy systems, comply with corporate IT policies, and provide the security and audit trails that enterprise clients require. Our apps are deployed in some of Chennai's largest corporations.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "35+ Enterprise Clients"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by OMR companies, we offer significant cost savings compared to agencies based in Tidel Park or Guindy. Our efficient processes and experienced team mean you get premium quality at competitive prices with complete transparency.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Chennai's IT industry moves fast, and so do we. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Chennai's business timelines and manufacturing schedules.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 5-Week MVP"
    },
    { 
      title: "Tamil Language Support", 
      desc: "We build fully localized apps with Tamil language support, including Tamil UI, Tamil content management, and Tamil push notifications. This is especially important for apps targeting local consumers, government projects, and businesses serving Tamil Nadu's diverse population.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Full Tamil Support"
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
      title: "Automobile Dealer Management App",
      client: "Chennai Car Dealership Chain",
      description: "Built a comprehensive dealer management app with inventory tracking, customer CRM, service booking, and sales analytics. The app is used across 25+ showrooms and service centers, handling 10,000+ customer interactions monthly.",
      results: ["25+ Showrooms", "10K+ Monthly Interactions", "40% Service Efficiency", "DMS Integration"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Manufacturing IoT Platform",
      client: "Ambattur Manufacturing Company",
      description: "Developed an Industry 4.0 platform with IoT device integration, real-time production monitoring, quality control, and predictive maintenance alerts. The app monitors 500+ machines across 3 factories.",
      results: ["500+ Machines Monitored", "30% Downtime Reduction", "Real-time Alerts", "Quality Tracking"],
      tech: ["React Native", "Python", "MQTT", "AWS IoT", "TimescaleDB"]
    },
    {
      title: "Hospital Management System",
      client: "Chennai Hospital Chain",
      description: "Created a complete hospital management app with patient registration, appointment booking, telemedicine, pharmacy integration, and billing. The app serves 50,000+ patients across multiple hospitals.",
      results: ["50K+ Patients", "5 Hospitals", "4.6 App Rating", "HIPAA Compliant"],
      tech: ["Kotlin", "Swift", "Java Spring", "Oracle", "Azure"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Chennai?",
      answer: "App development in Chennai costs ₹40,000 to ₹7,00,000+ depending on complexity. Startup apps with basic features cost ₹40,000-₹1,25,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,25,000-₹3,00,000. Enterprise apps with AI, IoT, and complex integrations cost ₹3,00,000-₹7,00,000+. We offer 30-40% lower pricing than typical OMR and Guindy agencies while delivering premium quality."
    },
    {
      question: "Do you build apps for the automobile industry in Chennai?",
      answer: "Yes! Chennai is India's automobile capital, and we specialize in automotive apps. We've built dealer management systems, service center apps, fleet tracking solutions, spare parts inventory apps, customer CRM, and connected car solutions. We understand DMS integrations, service workflows, and the specific needs of OEMs, dealers, and service centers."
    },
    {
      question: "Can you work with Chennai IT companies as a development partner?",
      answer: "Absolutely! We've partnered with several OMR and Tidel Park IT companies for their internal apps, client projects, and product development. We can work as your extended development team, handle complete projects, or provide specialized expertise. We understand enterprise requirements, compliance needs, and can integrate with your existing development processes."
    },
    {
      question: "Do you provide Tamil language support in apps?",
      answer: "Yes! We build fully localized apps with Tamil language support, including Tamil UI, Tamil fonts, Tamil content management, and Tamil push notifications. We handle Unicode properly for Tamil text rendering. This is especially important for apps targeting local consumers, government projects, and businesses serving Tamil Nadu's diverse population."
    },
    {
      question: "How long does app development take in Chennai?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team."
    },
    {
      question: "Do you provide on-site meetings in Chennai?",
      answer: "Yes! We regularly visit Chennai for client meetings, workshops, and project kickoffs. We can meet at your office on OMR, Tidel Park, Guindy, T. Nagar, Anna Nagar, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Can you build manufacturing and Industry 4.0 apps?",
      answer: "Yes, we specialize in Industry 4.0 applications for Chennai's manufacturing sector. We build apps with IoT device integration, SCADA/PLC connectivity, real-time production monitoring, quality control systems, predictive maintenance, and supply chain tracking. Our apps connect with factory floor systems and provide real-time dashboards for management."
    },
    {
      question: "What technologies do you use for Chennai app development?",
      answer: "We use modern, enterprise-approved technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, Oracle, MongoDB. For IoT: MQTT, AWS IoT, Azure IoT Hub. For enterprise: We integrate with SAP, Oracle, and custom ERPs."
    },
    {
      question: "Do you build apps for Chennai's healthcare sector?",
      answer: "Yes! Chennai is a major medical tourism destination, and we've built apps for hospitals, clinics, and healthcare providers. We develop telemedicine platforms, patient management systems, hospital apps, pharmacy integration, and health record management. Our healthcare apps are HIPAA-compliant and integrate with hospital information systems."
    },
    {
      question: "Can you integrate with enterprise systems like SAP and Oracle?",
      answer: "Yes, we specialize in enterprise integrations. We've integrated apps with SAP, Oracle, Salesforce, Microsoft Dynamics, and custom ERPs used by Chennai corporations. We can work with your IT team to understand existing systems and build seamless integrations with proper security and data handling."
    },
    {
      question: "What about app security for enterprise and manufacturing apps?",
      answer: "Security is paramount, especially for Chennai's enterprise and manufacturing sectors. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. For manufacturing, we ensure secure IoT communication."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements for enterprise clients with SLA guarantees."
    },
    {
      question: "Can you build apps for logistics and shipping companies?",
      answer: "Yes! Chennai Port is one of India's busiest, and we've built apps for logistics companies, shipping lines, and freight forwarders. We develop fleet tracking, shipment management, documentation apps, warehouse management, and supply chain visibility solutions. Our apps integrate with port systems and customs documentation."
    },
    {
      question: "Do you sign NDAs for Chennai projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. Many of our Chennai clients are in competitive industries where confidentiality is critical."
    },
    {
      question: "What makes you different from other Chennai app development companies?",
      answer: "Three key differentiators: 1) Industry Expertise: We specialize in Chennai's key industries - automobile, manufacturing, IT services, and healthcare - with deep understanding of local requirements. 2) Quality at Better Prices: We deliver OMR-quality work at 30-40% lower costs through efficient processes. 3) Reliability: We've delivered 70+ apps for Chennai businesses with a track record of on-time delivery."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Chennai business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Tamil language support if needed, and industry-specific design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Manufacturing apps undergo additional IoT and integration testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "Oracle", "MongoDB", "Redis", "TimescaleDB", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "IoT & Industry", technologies: ["MQTT", "AWS IoT", "Azure IoT Hub", "SCADA Integration", "PLC Connect", "OPC-UA"] },
    { category: "Enterprise", technologies: ["SAP Integration", "Oracle APIs", "Salesforce", "DMS Systems", "ERP Connect", "SSO/LDAP"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Chennai | Mobile App Developers OMR | Web Nova Crew"
        description="Top app development company in Chennai. Android, iOS, Flutter apps for IT companies, automobile, manufacturing in OMR, Guindy, Tidel Park. ₹40,000 onwards."
        keywords="app development company Chennai, mobile app developers Chennai, OMR app development, Guindy app developers, Flutter developers Chennai, automobile app development Chennai"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Chennai", url: "https://webnovacrew.com/locations/app-development-chennai" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Chennai"
        serviceDescription="Professional mobile app development for Chennai businesses. Android, iOS, Flutter apps for IT, automobile, manufacturing sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-chennai"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-yellow-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-300">Chennai, Tamil Nadu • Detroit of India • 11M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-amber-100 bg-clip-text text-transparent">
              App Development Company in Chennai
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-yellow-400 font-semibold">Chennai's</span> trusted app development partner. We build <span className="text-amber-400 font-semibold">enterprise-grade apps</span> for IT companies, automobile, manufacturing & startups.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in OMR, Tidel Park, Guindy, T. Nagar & across Chennai.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">60+</div>
                <div className="text-sm text-slate-400">Chennai Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">₹40K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">3-10</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">35%</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Chennai</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Chennai's diverse business ecosystem. From automobile apps to manufacturing IoT solutions.</p>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Chennai's Business Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-950/30 to-slate-900/50 border border-yellow-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">India's Detroit - Automobile Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Chennai produces 40% of India's automobiles and is home to Hyundai, Ford, BMW, Renault-Nissan, and numerous auto component manufacturers. We've built our automotive expertise to serve this ecosystem with dealer management apps, service center solutions, fleet tracking, and connected car platforms.</p>
              <p className="text-slate-300 leading-relaxed">Our automotive apps integrate with DMS systems and understand the unique workflows of OEMs, dealers, and service centers.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">OMR IT Corridor & Manufacturing</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Chennai's OMR IT corridor hosts 2,000+ IT companies including TCS, Infosys, Cognizant, and global MNCs. Combined with the manufacturing hub in Ambattur and Guindy, Chennai offers a unique blend of IT services and industrial expertise.</p>
              <p className="text-slate-300 leading-relaxed">We build apps that bridge both worlds - enterprise software for IT companies and Industry 4.0 solutions for manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Chennai</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chennai Success Stories</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Chennai Business Hubs</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Chennai Businesses Choose Us</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chennai App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Transparent pricing. 30-40% lower than typical OMR agencies.</p></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chennai App Development FAQs</h2></div>
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
      <section className="py-20 bg-gradient-to-br from-yellow-950/50 to-amber-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Chennai App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 60+ Chennai businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Chennai Meeting</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
