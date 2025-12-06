import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Factory, Briefcase, Clock, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentGhaziabad() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Ghaziabad's manufacturing, real estate, and retail businesses.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin & Java", "Material Design", "Offline Mode", "Push Notifications"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Ghaziabad's growing premium market and NCR customers.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift & SwiftUI", "iOS 17", "Apple Pay", "Face ID"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Ghaziabad startups. Single codebase for Android & iOS.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Native Performance", "Hot Reload", "Beautiful UI"] },
    { title: "React Native Development", desc: "JavaScript-based apps for quick market entry in NCR region.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native Modules", "Fast Dev", "Code Reuse"] },
    { title: "Manufacturing & Industrial Apps", desc: "Industry 4.0 apps for Ghaziabad's manufacturing sector. IoT, inventory, and ERP solutions.", icon: <Factory className="w-6 h-6" />, features: ["IoT Integration", "Inventory", "ERP", "Quality Control"] },
    { title: "Real Estate Apps", desc: "Property listing, virtual tours, and CRM apps for Ghaziabad's booming real estate market.", icon: <Building2 className="w-6 h-6" />, features: ["Property Listing", "Virtual Tours", "CRM", "Lead Management"] },
    { title: "E-commerce Apps", desc: "Online shopping apps with payment gateway for Ghaziabad's retail businesses.", icon: <Database className="w-6 h-6" />, features: ["Product Catalog", "Payment Gateway", "Order Management", "Delivery"] },
    { title: "Enterprise Solutions", desc: "Scalable corporate apps for Ghaziabad's large businesses and NCR enterprises.", icon: <Briefcase className="w-6 h-6" />, features: ["ERP Integration", "CRM", "Workflow", "Analytics"] },
  ];

  const industries = [
    { name: "Manufacturing & Industrial", desc: "Steel, pipes, electronics manufacturing" },
    { name: "Real Estate & Construction", desc: "Property developers, builders" },
    { name: "IT & Software", desc: "Tech companies, startups" },
    { name: "Retail & E-commerce", desc: "Shopping malls, online retail" },
    { name: "Logistics & Warehousing", desc: "Supply chain, distribution" },
    { name: "Healthcare", desc: "Hospitals, clinics, diagnostics" },
    { name: "Education", desc: "Schools, coaching centers" },
    { name: "Banking & Finance", desc: "Banks, NBFCs, fintech" }
  ];

  const areas = [
    { name: "Indirapuram", type: "IT Hub" },
    { name: "Vaishali", type: "Commercial" },
    { name: "Kaushambi", type: "Business" },
    { name: "Raj Nagar Extension", type: "Residential" },
    { name: "Vasundhara", type: "Residential" },
    { name: "Crossing Republik", type: "Township" },
    { name: "Lal Kuan", type: "Industrial" },
    { name: "Sahibabad", type: "Industrial" },
    { name: "Mohan Nagar", type: "Commercial" },
    { name: "Nehru Nagar", type: "Commercial" },
    { name: "Shalimar Garden", type: "Residential" },
    { name: "Wave City", type: "Township" }
  ];

  const whyChooseUs = [
    { title: "NCR Market Expertise", desc: "Deep understanding of Ghaziabad and NCR's business ecosystem. We've built 40+ apps for NCR businesses.", icon: <TrendingUp className="w-5 h-5" />, stats: "40+ NCR Apps" },
    { title: "Manufacturing App Specialists", desc: "Industry 4.0 apps for Ghaziabad's manufacturing sector with IoT and ERP integration.", icon: <Factory className="w-5 h-5" />, stats: "15+ Industrial Apps" },
    { title: "30% Lower Than Delhi", desc: "Same quality as Delhi agencies but 30% more affordable. Based in Lucknow with NCR presence.", icon: <Star className="w-5 h-5" />, stats: "30% Savings" },
    { title: "Real Estate App Experts", desc: "Property listing, virtual tours, and CRM apps for Ghaziabad's real estate boom.", icon: <Building2 className="w-5 h-5" />, stats: "20+ Real Estate Apps" },
    { title: "Fast Delivery", desc: "Agile development with 2-week sprints. Launch your MVP in 3-4 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "3-4 Week MVP" },
    { title: "On-Site Support", desc: "Regular visits to Ghaziabad and NCR. Easy coordination with Delhi-NCR clients.", icon: <Users className="w-5 h-5" />, stats: "Weekly NCR Visits" },
  ];

  const pricing = [
    { tier: "Starter", price: "₹35,000 - ₹1,00,000", ideal: "Small businesses", features: ["Single platform", "Up to 10 screens", "Basic UI/UX", "Push notifications", "3-4 weeks", "30 days support"], popular: false },
    { tier: "Business", price: "₹1,00,000 - ₹2,50,000", ideal: "Growing businesses", features: ["Android + iOS", "Up to 25 screens", "Premium UI/UX", "Payment gateway", "Admin panel", "6-8 weeks", "90 days support"], popular: true },
    { tier: "Enterprise", price: "₹2,50,000 - ₹6,00,000", ideal: "Large enterprises", features: ["Android + iOS + Web", "Unlimited screens", "IoT/ERP integration", "AI features", "Dedicated team", "10-16 weeks", "1 year support"], popular: false },
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    { question: "How much does app development cost in Ghaziabad?", answer: "App development in Ghaziabad costs ₹35,000 to ₹6,00,000+ depending on complexity. Simple apps start at ₹35,000-₹1,00,000 and take 3-4 weeks. Business apps cost ₹1,00,000-₹2,50,000 with full features. Enterprise apps with IoT, ERP integration cost ₹2,50,000-₹6,00,000+. We're 30% cheaper than Delhi agencies with same quality." },
    { question: "Do you build manufacturing and industrial apps?", answer: "Yes! Ghaziabad is NCR's industrial hub with steel, pipes, and electronics manufacturing. We build Industry 4.0 apps with IoT integration, inventory management, quality control, ERP systems, production tracking, and supply chain solutions." },
    { question: "Can you build real estate apps for Ghaziabad?", answer: "Absolutely! We've built 20+ real estate apps for NCR. Features include property listings with filters, virtual 360° tours, lead management, CRM integration, broker management, and payment tracking for Ghaziabad's booming property market." },
    { question: "How long does app development take in Ghaziabad?", answer: "Timeline depends on complexity. Simple apps take 3-4 weeks, business apps require 6-8 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints and regular demos." },
    { question: "Do you provide on-site meetings in Ghaziabad?", answer: "Yes! We have regular presence in NCR and visit Ghaziabad weekly. We can meet at Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension, or your office location for project discussions and reviews." },
    { question: "Do you work with Ghaziabad startups?", answer: "Yes! We've worked with 25+ NCR startups. We offer flexible engagement models, MVP development in 3-4 weeks, and can help you scale as you grow. We understand startup constraints and offer milestone-based payments." },
    { question: "What technologies do you use for Ghaziabad app development?", answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Python, Java Spring with databases like PostgreSQL, MongoDB. For industrial: IoT integration, ERP connectors, and real-time systems." },
    { question: "Can you integrate with existing ERP systems?", answer: "Yes! We have experience integrating with SAP, Oracle, Tally, and custom ERP systems. We can connect your mobile app with existing systems for seamless data flow, inventory sync, and real-time updates." },
    { question: "Do you build apps with offline functionality?", answer: "Yes! Given industrial environments and field work, we build apps with robust offline functionality. Our apps can work offline and sync when connectivity is restored, essential for factory floor and field sales apps." },
    { question: "What about app security for enterprise apps?", answer: "Security is paramount for enterprise applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, role-based access control, data encryption at rest, and comprehensive audit logging." },
    { question: "How do you handle app maintenance after launch?", answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review." },
    { question: "Can you build logistics and warehouse apps?", answer: "Yes! Ghaziabad is a logistics hub. We build warehouse management apps, delivery tracking, fleet management, inventory systems, and supply chain solutions with barcode/QR scanning and GPS tracking." },
    { question: "Do you sign NDAs for Ghaziabad projects?", answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories and access controls." },
    { question: "Can you scale apps for large enterprises?", answer: "Yes, we build apps designed to scale. Our architecture uses cloud-native approaches with auto-scaling, load balancing, and CDN distribution. We've built apps that serve thousands of users across multiple locations." },
    { question: "What makes you different from Delhi app development companies?", answer: "Three key differentiators: 1) NCR Expertise: 40+ apps built for NCR businesses with deep market understanding. 2) Industrial Focus: Specialized in manufacturing and real estate apps. 3) Value Pricing: 30% lower than Delhi agencies with same quality and weekly on-site visits." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Manufacturing ERP Mobile App",
      client: "Ghaziabad Steel Company",
      description: "Built a comprehensive mobile ERP app with production tracking, inventory management, quality control, and worker attendance. The app serves 800+ employees across 3 plants.",
      results: ["800+ Users", "35% Efficiency Gain", "Real-time Inventory", "Quality Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "IoT Integration"]
    },
    {
      title: "Real Estate CRM & Listing App",
      client: "Ghaziabad Property Developer",
      description: "Created a property listing app with virtual tours, lead management, and broker CRM. The app manages 500+ properties and 50+ brokers with automated lead distribution.",
      results: ["500+ Properties", "50+ Brokers", "Virtual Tours", "Lead Automation"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Razorpay"]
    },
    {
      title: "Logistics & Warehouse Management",
      client: "NCR Logistics Company",
      description: "Developed a warehouse management app with inventory tracking, order fulfillment, and delivery management. The app handles 10,000+ SKUs and 500+ daily orders.",
      results: ["10K+ SKUs", "500+ Daily Orders", "Barcode Scanning", "GPS Tracking"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Firebase"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Ghaziabad office or ours. Market research, competitor analysis, feature prioritization, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider industrial workflows and enterprise-specific design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Industrial apps undergo additional offline and integration testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with weekly NCR visits." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Industrial", technologies: ["IoT Integration", "ERP Connectors", "Barcode/QR", "GPS Tracking", "Offline Sync", "Real-time Systems"] },
    { category: "Enterprise", technologies: ["SAP Integration", "Tally Connect", "CRM APIs", "Payment Gateways", "Analytics", "Reporting"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Ghaziabad | Mobile App Developers NCR | ₹35,000 Onwards | Web Nova Crew" description="Top app development company in Ghaziabad. Manufacturing, real estate, e-commerce apps for Indirapuram, Vaishali, Kaushambi. 30% cheaper than Delhi. Call +91 98723 64476." keywords="app development Ghaziabad, mobile app developers Ghaziabad, NCR app development, manufacturing app Ghaziabad, real estate app Ghaziabad, Indirapuram app developers" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Ghaziabad", url: "https://webnovacrew.com/locations/app-development-ghaziabad" }]} />
      <ServiceSchema serviceName="App Development in Ghaziabad" serviceDescription="Professional mobile app development in Ghaziabad NCR. Manufacturing, real estate, e-commerce apps with IoT and ERP integration." serviceUrl="https://webnovacrew.com/locations/app-development-ghaziabad" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-indigo-400" /><span className="text-sm text-indigo-300">Ghaziabad, Uttar Pradesh • Gateway to NCR • Industrial Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">#1 App Development Company in Ghaziabad</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Build powerful <span className="text-indigo-400 font-semibold">manufacturing, real estate & enterprise apps</span> for Ghaziabad. <span className="text-purple-400 font-semibold">30% cheaper than Delhi</span> agencies.</p>
            <p className="text-lg text-slate-400 mb-8">🏭 40+ NCR Apps Built • 🏢 Real Estate Experts • 💰 30% Lower Than Delhi</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6 text-lg"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp: +91 98723 64476</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-indigo-500/20"><div className="text-3xl font-bold text-indigo-400">40+</div><div className="text-sm text-slate-400">NCR Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-indigo-500/20"><div className="text-3xl font-bold text-purple-400">₹35K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-indigo-500/20"><div className="text-3xl font-bold text-indigo-400">3-4</div><div className="text-sm text-slate-400">Week MVP</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-indigo-500/20"><div className="text-3xl font-bold text-purple-400">30%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Ghaziabad</h2><p className="text-xl text-slate-400">Specialized solutions for Ghaziabad's manufacturing, real estate, and enterprise sectors</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50"><div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Ghaziabad</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Areas of Ghaziabad</h2></div>
          <div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Ghaziabad Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">{item.icon}</div><div className="text-sm font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ghaziabad Success Stories</h2></div>
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

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Development Process</h2></div>
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
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technology Stack</h2></div>
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

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ghaziabad App Development Pricing</h2><p className="text-xl text-slate-400">30% savings compared to Delhi agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-slate-800/50 border rounded-xl p-6 relative ${p.popular ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}<h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><p className="text-sm text-slate-400 mb-4">{p.ideal}</p><div className="text-3xl font-bold text-indigo-400 mb-6">{p.price}</div><ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ghaziabad App Development FAQs</h2></div>
          <div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Ghaziabad App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation for your manufacturing, real estate, or business app.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Free Consultation</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
          <p className="text-slate-400 mt-6">📍 Weekly NCR visits • Easy coordination with Ghaziabad clients</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
