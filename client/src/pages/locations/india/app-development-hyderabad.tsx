import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, 
  MessageSquare, Cpu, Globe, Database, Briefcase, Heart, 
  GraduationCap, ShoppingCart, Home, Factory, Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentHyderabad() {
  // Detailed Services
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin and Java applications built for Hyderabad's diverse Android user base. Our Android development team creates high-performance apps optimized for the devices used across Cyberabad's IT corridor. We implement Material Design 3, ensure compatibility with Android 8.0 and above, and optimize for varying network conditions from high-speed fiber in HITEC City to mobile networks in outer areas. Our apps integrate seamlessly with enterprise systems used by Hyderabad's IT companies.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Enterprise Integration", "Offline Support", "Google Pay/UPI", "Telugu Language Support"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift and SwiftUI applications for Hyderabad's growing iPhone user base in areas like Jubilee Hills, Banjara Hills, and Financial District. We build apps leveraging iOS 17 features including Dynamic Island, Live Activities, and WidgetKit. Our iOS apps are designed for the premium experience that Hyderabad's tech professionals and business executives expect.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Features", "Apple Pay India", "Face ID/Touch ID", "iCloud Sync", "Enterprise Distribution"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform Flutter applications that provide native performance on both Android and iOS from a single codebase. Perfect for Hyderabad startups and IT companies looking to launch quickly on both platforms while optimizing development costs. Our Flutter apps achieve 60fps animations and feel indistinguishable from native apps, ideal for consumer-facing applications and enterprise tools.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets", "Platform Channels", "Web Support"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform development using React Native, ideal for Hyderabad's IT companies with existing JavaScript/React teams. We leverage React Native's mature ecosystem to build apps that share code with web applications and integrate with existing enterprise codebases. Perfect for companies looking to unify their mobile and web development efforts.",
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Code Sharing", "Native Modules", "Expo Support", "OTA Updates", "Enterprise Ready"]
    },
    { 
      title: "Pharma & Healthcare Apps", 
      desc: "HIPAA-compliant healthcare applications for Hyderabad's thriving pharmaceutical and healthcare sector. We build telemedicine platforms, patient management systems, pharmacy apps, clinical trial management, drug information databases, and hospital management solutions. Our healthcare apps implement strict security protocols and comply with Indian healthcare regulations and international standards.",
      icon: <Heart className="w-6 h-6" />,
      features: ["HIPAA Compliant", "Telemedicine", "Patient Records", "Pharmacy Integration", "Clinical Trials", "Lab Integration"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable enterprise applications for Hyderabad's large IT companies and MNCs in HITEC City and Gachibowli. We build internal tools, employee apps, client-facing products, and B2B solutions that integrate with existing enterprise systems like SAP, Oracle, and Salesforce. Our enterprise apps include comprehensive admin panels, role-based access control, audit logging, and enterprise SSO integration.",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Enterprise Integration", "SSO/LDAP", "Role-Based Access", "Audit Logging", "Compliance Ready", "24/7 SLA Support"]
    },
    { 
      title: "AI & Machine Learning Apps", 
      desc: "Intelligent applications powered by AI and ML for Hyderabad's innovation-driven companies. We integrate GPT-4 for conversational AI, TensorFlow and PyTorch for custom ML models, computer vision for image analysis, and predictive analytics for business intelligence. Our AI apps can be deployed on-device or in the cloud, perfect for Hyderabad's growing AI ecosystem.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["GPT-4 Integration", "Custom ML Models", "Computer Vision", "NLP & Chatbots", "Predictive Analytics", "On-device AI"]
    },
    { 
      title: "Fintech & Banking Apps", 
      desc: "RBI-compliant fintech applications for Hyderabad's growing financial services sector. We build digital banking apps, payment gateways, lending platforms, insurance apps, and wealth management solutions. Our fintech apps implement bank-grade security with 256-bit encryption, two-factor authentication, and biometric login, complying with all regulatory requirements.",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["RBI Compliant", "PCI-DSS Security", "UPI Integration", "Digital Lending", "Insurance APIs", "Wealth Management"]
    },
  ];

  // Detailed Industries
  const industries = [
    { name: "IT & Software Services", desc: "Internal tools, employee apps, and client products for Hyderabad's 1,500+ IT companies in HITEC City, Gachibowli, and Financial District. We've built apps for companies from startups to Fortune 500 MNCs.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Pharmaceuticals & Healthcare", desc: "Telemedicine, patient management, pharmacy apps, and clinical trial solutions for Hyderabad's pharma hub. We understand FDA, HIPAA, and Indian healthcare compliance requirements.", icon: <Heart className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "Digital banking, payment apps, lending platforms, and insurance solutions for Hyderabad's financial sector. RBI-compliant apps with bank-grade security.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online shopping apps, marketplace platforms, and retail solutions for Hyderabad's growing e-commerce ecosystem. Apps handling lakhs of orders monthly.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Real Estate & Construction", desc: "Property listing apps, virtual tour platforms, construction management, and PropTech solutions for Hyderabad's booming real estate market.", icon: <Home className="w-5 h-5" /> },
    { name: "Education & EdTech", desc: "Learning platforms, course apps, assessment tools, and virtual classroom solutions for Hyderabad's education sector and EdTech startups.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Manufacturing & Industry", desc: "Factory management, supply chain apps, IoT integration, and industrial automation solutions for Hyderabad's manufacturing sector.", icon: <Factory className="w-5 h-5" /> },
    { name: "Government & Public Sector", desc: "Citizen services apps, e-governance solutions, and public sector applications. Experience with government procurement processes and compliance.", icon: <Landmark className="w-5 h-5" /> }
  ];

  // Detailed Areas
  const areas = [
    { name: "HITEC City", type: "IT Hub", desc: "Hyderabad's premier IT hub with major tech companies, startups, and the iconic Cyber Towers. Home to Microsoft, Google, and Amazon offices." },
    { name: "Gachibowli", type: "Tech Corridor", desc: "Major IT corridor with DLF Cyber City, Raheja Mindspace, and numerous tech parks. Growing startup ecosystem." },
    { name: "Madhapur", type: "Startup Hub", desc: "Emerging startup hub with co-working spaces, incubators, and young tech companies. Affordable office spaces attracting new ventures." },
    { name: "Kondapur", type: "IT Residential", desc: "Residential area for IT professionals with growing commercial presence. Mix of startups and established companies." },
    { name: "Jubilee Hills", type: "Premium Business", desc: "Upscale area with premium offices, media companies, and high-end businesses. High concentration of iOS users." },
    { name: "Banjara Hills", type: "Commercial Hub", desc: "Prime commercial area with corporate offices, banks, and professional services. Premium business district." },
    { name: "Kukatpally", type: "Growing Hub", desc: "Rapidly developing area with IT parks, educational institutions, and growing tech presence." },
    { name: "Secunderabad", type: "Twin City", desc: "Historic twin city with defense establishments, railways, and traditional businesses embracing digital transformation." },
    { name: "Ameerpet", type: "Training Hub", desc: "Known for IT training institutes and coaching centers. Growing startup and small business ecosystem." },
    { name: "Begumpet", type: "Airport Area", desc: "Near old airport with corporate offices, hotels, and business centers. Good connectivity for client meetings." },
    { name: "Financial District", type: "Business Hub", desc: "Hyderabad's newest business district with modern towers, financial institutions, and premium office spaces." },
    { name: "Uppal", type: "East Hyderabad", desc: "Growing IT presence in East Hyderabad with affordable office spaces and emerging tech ecosystem." }
  ];

  // Detailed Why Choose Us
  const whyChooseUs = [
    { 
      title: "Cyberabad Expertise", 
      desc: "We understand Hyderabad's unique IT ecosystem - the enterprise culture of HITEC City, the startup energy of Madhapur, and the pharma focus of the city. Our team has worked with businesses across Cyberabad and knows what it takes to succeed in this market. We speak the language of Hyderabad's tech community and understand local business practices.",
      icon: <Award className="w-5 h-5" />,
      stats: "75+ Hyderabad Apps"
    },
    { 
      title: "Pharma & Healthcare Specialists", 
      desc: "Hyderabad is India's pharma capital, and we've built our healthcare expertise accordingly. We understand FDA regulations, HIPAA compliance, clinical trial requirements, and the specific needs of pharmaceutical companies. Our healthcare apps are used by hospitals, clinics, and pharma companies across the city.",
      icon: <Heart className="w-5 h-5" />,
      stats: "20+ Healthcare Apps"
    },
    { 
      title: "Enterprise-Grade Solutions", 
      desc: "Hyderabad's large IT companies demand enterprise-grade reliability. We build apps that scale to millions of users, integrate with legacy systems, comply with corporate IT policies, and provide the security and audit trails that enterprise clients require. Our apps are deployed in some of Hyderabad's largest corporations.",
      icon: <Building2 className="w-5 h-5" />,
      stats: "40+ Enterprise Clients"
    },
    { 
      title: "30-40% Cost Advantage", 
      desc: "While maintaining the quality expected by HITEC City companies, we offer significant cost savings compared to agencies based in Gachibowli or Financial District. Our efficient processes and experienced team mean you get premium quality at competitive prices with complete transparency.",
      icon: <Star className="w-5 h-5" />,
      stats: "Average 35% Savings"
    },
    { 
      title: "Fast Agile Delivery", 
      desc: "Hyderabad's IT industry moves fast, and so do we. Our agile development process with 2-week sprints means you see progress quickly. We've delivered MVPs in as little as 3 weeks for urgent projects. Our project managers understand Hyderabad's business timelines.",
      icon: <Rocket className="w-5 h-5" />,
      stats: "Average 5-Week MVP"
    },
    { 
      title: "24/7 Support", 
      desc: "Hyderabad businesses operate around the clock, especially with global clients. We provide round-the-clock support for critical applications. Our team is available for emergency fixes, performance monitoring, and immediate response whenever you need us.",
      icon: <Shield className="w-5 h-5" />,
      stats: "< 1 Hour Response"
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
      title: "Pharma Sales Force App",
      client: "Hyderabad Pharmaceutical Company",
      description: "Built a comprehensive sales force automation app for medical representatives with doctor visit tracking, sample management, order processing, and real-time reporting. The app is used by 2,000+ MRs across India.",
      results: ["2,000+ Active MRs", "40% Productivity Increase", "Real-time Reporting", "Offline Capability"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Enterprise HR Platform",
      client: "HITEC City IT Company",
      description: "Developed a complete HR management platform with employee self-service, leave management, performance reviews, and payroll integration. The app serves 15,000+ employees across multiple locations.",
      results: ["15,000+ Employees", "80% HR Query Reduction", "SAP Integration", "4.5 App Rating"],
      tech: ["React Native", "Java Spring", "Oracle", "SAP APIs", "Azure"]
    },
    {
      title: "Telemedicine Platform",
      client: "Hyderabad Hospital Chain",
      description: "Created a telemedicine platform with video consultations, prescription management, pharmacy integration, and health records. The app handles 50,000+ consultations monthly across the hospital network.",
      results: ["50K+ Monthly Consultations", "HIPAA Compliant", "4.7 Rating", "30+ Hospitals"],
      tech: ["Kotlin", "Swift", "WebRTC", "AWS", "MongoDB"]
    }
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    {
      question: "How much does app development cost in Hyderabad?",
      answer: "App development in Hyderabad costs ₹40,000 to ₹7,00,000+ depending on complexity. Startup apps with basic features cost ₹40,000-₹1,25,000 and take 3-5 weeks. Business apps with full features for both platforms cost ₹1,25,000-₹3,00,000. Enterprise apps with AI, complex backends, and integrations cost ₹3,00,000-₹7,00,000+. We offer 30-40% lower pricing than typical HITEC City and Gachibowli agencies while delivering premium quality."
    },
    {
      question: "Do you build pharma and healthcare apps compliant with regulations?",
      answer: "Yes! We specialize in healthcare applications for Hyderabad's pharma hub. We build HIPAA-compliant telemedicine apps, patient management systems, pharmacy apps, clinical trial management, drug information databases, and hospital management solutions. We understand FDA requirements, Indian healthcare regulations, and implement strict security protocols for protected health information."
    },
    {
      question: "Can you work with Hyderabad IT companies as a development partner?",
      answer: "Absolutely! We've partnered with several HITEC City and Gachibowli IT companies for their internal apps, client projects, and product development. We can work as your extended development team, handle complete projects, or provide specialized expertise. We understand enterprise requirements, compliance needs, and can integrate with your existing development processes."
    },
    {
      question: "How long does app development take in Hyderabad?",
      answer: "Timeline depends on complexity. Startup MVPs take 3-5 weeks, business apps require 6-10 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see working features every two weeks. For urgent projects, we've delivered MVPs in as little as 3 weeks with a dedicated team."
    },
    {
      question: "Do you provide on-site meetings in Hyderabad?",
      answer: "Yes! We regularly visit Hyderabad for client meetings, workshops, and project kickoffs. We can meet at your office in HITEC City, Gachibowli, Madhapur, Financial District, Jubilee Hills, or any convenient location. For ongoing projects, we combine in-person meetings with video calls for efficiency."
    },
    {
      question: "Can you help with government and public sector apps?",
      answer: "Yes, we have experience building apps for government projects and public sector organizations in Telangana. We understand government procurement processes, compliance requirements, and can work within the specific constraints of public sector projects. We've built citizen services apps, e-governance solutions, and internal government applications."
    },
    {
      question: "What technologies do you use for Hyderabad app development?",
      answer: "We use modern, enterprise-approved technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Java Spring, Python with databases like PostgreSQL, Oracle, MongoDB. For cloud: AWS, Azure, Google Cloud. For enterprise: We integrate with SAP, Oracle, Salesforce, and custom ERPs. We choose technologies based on your specific requirements."
    },
    {
      question: "Do you build apps with Telugu language support?",
      answer: "Yes! We build fully localized apps with Telugu language support, including right-to-left text handling where needed, Telugu fonts, and culturally appropriate UI/UX. We understand the importance of local language support for apps targeting Telangana and Andhra Pradesh users."
    },
    {
      question: "Can you integrate with enterprise systems like SAP and Oracle?",
      answer: "Yes, we specialize in enterprise integrations. We've integrated apps with SAP, Oracle, Salesforce, Microsoft Dynamics, and custom ERPs used by Hyderabad corporations. We can work with your IT team to understand existing systems and build seamless integrations with proper security and data handling."
    },
    {
      question: "What about app security for enterprise and healthcare apps?",
      answer: "Security is paramount, especially for Hyderabad's enterprise and healthcare sectors. We implement multiple security layers: SSL/TLS encryption, AES-256 encryption for data at rest, secure authentication with OAuth 2.0 and biometrics, certificate pinning, code obfuscation, and comprehensive audit logging. For healthcare, we ensure HIPAA-equivalent security. We can arrange third-party security audits."
    },
    {
      question: "How do you handle app maintenance after launch?",
      answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review. We offer flexible plans from basic support to dedicated team arrangements for enterprise clients with SLA guarantees."
    },
    {
      question: "Can you scale apps for millions of users?",
      answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that handle millions of users, including enterprise apps with global deployments. We use technologies like Redis for caching, message queues for async processing, and microservices for independent scaling."
    },
    {
      question: "Do you sign NDAs for Hyderabad projects?",
      answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories, access controls, and secure communication channels. Many of our Hyderabad clients are in competitive industries where confidentiality is critical."
    },
    {
      question: "What is your development process for Hyderabad projects?",
      answer: "Our process is designed for Hyderabad's enterprise environment: 1) Discovery (1-2 weeks): Requirements, user research, technical planning. 2) Design (2-3 weeks): Wireframes, UI/UX design, prototyping. 3) Development (4-12 weeks): Agile sprints with bi-weekly demos. 4) Testing (1-2 weeks): QA, performance, security testing. 5) Launch: Store submission, deployment, monitoring. 6) Support: Ongoing maintenance. You're involved at every stage."
    },
    {
      question: "What makes you different from other Hyderabad app development companies?",
      answer: "Three key differentiators: 1) Domain Expertise: We specialize in Hyderabad's key industries - pharma, IT services, and enterprise - with deep understanding of local regulations and business practices. 2) Quality at Better Prices: We deliver HITEC City-quality work at 30-40% lower costs through efficient processes. 3) Reliability: We've delivered 75+ apps for Hyderabad businesses with a track record of on-time delivery and long-term partnerships."
    },
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions to understand your Hyderabad business, target users, and goals. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "2-3 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider local preferences, Telugu language support if needed, and enterprise design standards." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Enterprise apps undergo additional compliance testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with SLA options for enterprise clients." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "Oracle", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Enterprise", technologies: ["SAP Integration", "Oracle APIs", "Salesforce", "Microsoft 365", "LDAP/SSO", "Active Directory"] },
    { category: "Healthcare", technologies: ["HL7 FHIR", "HIPAA Compliance", "Telemedicine", "EHR Integration", "Lab Systems", "Pharmacy APIs"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Hyderabad | Mobile App Developers HITEC City | Web Nova Crew"
        description="Top app development company in Hyderabad. Android, iOS, Flutter apps for IT companies, pharma, startups in HITEC City, Gachibowli, Madhapur. ₹40,000 onwards. Enterprise solutions."
        keywords="app development company Hyderabad, mobile app developers Hyderabad, HITEC City app development, Gachibowli app developers, Flutter developers Hyderabad, pharma app development Hyderabad"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Hyderabad", url: "https://webnovacrew.com/locations/app-development-hyderabad" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Hyderabad"
        serviceDescription="Professional mobile app development for Hyderabad businesses. Android, iOS, Flutter apps for IT, pharma, fintech, and enterprise sectors."
        serviceUrl="https://webnovacrew.com/locations/app-development-hyderabad"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Hyderabad, Telangana • Cyberabad • 10M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
              App Development Company in Hyderabad
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Cyberabad's</span> trusted app development partner. We build <span className="text-teal-400 font-semibold">enterprise-grade apps</span> for IT companies, pharma, fintech & startups in Hyderabad.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in HITEC City, Gachibowli, Madhapur, Financial District & across Hyderabad.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">75+</div>
                <div className="text-sm text-slate-400">Hyderabad Apps</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-cyan-500/20">
                <div className="text-3xl font-bold text-teal-400 mb-1">₹40K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">3-10</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-cyan-500/20">
                <div className="text-3xl font-bold text-teal-400 mb-1">35%</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">App Development Services in Hyderabad</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-stack mobile development for Cyberabad's diverse business ecosystem. From pharma apps to enterprise solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Understanding Hyderabad's Tech Ecosystem</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-950/30 to-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cyberabad IT Corridor</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Hyderabad's IT corridor spanning HITEC City, Gachibowli, and Financial District is home to 1,500+ IT companies including Microsoft, Google, Amazon, and major Indian IT firms. We understand the enterprise culture, compliance requirements, and technical standards expected by these organizations.</p>
              <p className="text-slate-300 leading-relaxed">Our apps integrate seamlessly with enterprise systems like SAP, Oracle, and Salesforce, and meet the security and audit requirements of large corporations.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-950/30 to-slate-900/50 border border-teal-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Pharma & Healthcare Hub</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Hyderabad is India's pharmaceutical capital with major companies like Dr. Reddy's, Aurobindo, and Hetero. We've built our healthcare expertise to serve this ecosystem with HIPAA-compliant apps, clinical trial management, and pharma sales force automation.</p>
              <p className="text-slate-300 leading-relaxed">Our healthcare apps implement strict security protocols and comply with FDA, HIPAA, and Indian healthcare regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Detailed */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Hyderabad</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">{industry.icon}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hyderabad Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="text-cyan-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-cyan-500/10 rounded-lg px-3 py-2 text-center"><span className="text-cyan-300 text-sm font-medium">{result}</span></div>))}
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serving All Hyderabad IT Hubs</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div><h3 className="text-white font-semibold">{area.name}</h3><span className="text-cyan-400 text-sm">{area.type}</span><p className="text-slate-400 text-sm mt-1">{area.desc}</p></div>
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-cyan-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Hyderabad Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">{item.icon}</div>
                  <div className="text-sm font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{item.stats}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hyderabad App Development Pricing</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Transparent pricing. 30-40% lower than typical HITEC City agencies.</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/50'}`}>
                {plan.popular && (<div className="text-center mb-4"><span className="bg-cyan-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">{plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-cyan-600 to-teal-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hyderabad App Development FAQs</h2>
          </div>
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
      <section className="py-20 bg-gradient-to-br from-cyan-950/50 to-teal-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Hyderabad App?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 75+ Hyderabad businesses who trusted us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Hyderabad Meeting</Link>
            </Button>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
                <Phone className="w-5 h-5 mr-2" />+91 98723 64476
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
