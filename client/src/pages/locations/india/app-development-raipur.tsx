import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Factory, Briefcase, Clock, Pickaxe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentRaipur() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Raipur's steel, mining, and business sectors.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin & Java", "Material Design", "Offline Mode", "Hindi Support"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Raipur's growing premium market.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift & SwiftUI", "iOS 17", "Apple Pay", "Face ID"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Raipur startups and SMEs.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Native Performance", "Hot Reload", "Beautiful UI"] },
    { title: "React Native Development", desc: "JavaScript-based apps for quick market entry.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native Modules", "Fast Dev", "Code Reuse"] },
    { title: "Steel & Mining Apps", desc: "Industry apps for Chhattisgarh's steel and mining sector. IoT, inventory, and ERP.", icon: <Pickaxe className="w-6 h-6" />, features: ["IoT Integration", "Inventory", "ERP", "Safety Tracking"] },
    { title: "Government Apps", desc: "Public sector apps for Chhattisgarh government departments and PSUs.", icon: <Building2 className="w-6 h-6" />, features: ["Citizen Services", "e-Governance", "Compliance", "Reporting"] },
    { title: "E-commerce Apps", desc: "Online shopping apps for Raipur's retail and wholesale businesses.", icon: <Database className="w-6 h-6" />, features: ["Product Catalog", "Payment Gateway", "Order Management", "Delivery"] },
    { title: "Enterprise Solutions", desc: "Scalable corporate apps for Raipur's large businesses.", icon: <Briefcase className="w-6 h-6" />, features: ["ERP Integration", "CRM", "Workflow", "Analytics"] },
  ];

  const industries = [
    { name: "Steel & Iron", desc: "Steel plants, iron ore processing" },
    { name: "Mining & Minerals", desc: "Coal, iron ore, bauxite mining" },
    { name: "Government & PSU", desc: "State departments, public sector" },
    { name: "Power & Energy", desc: "Power plants, renewable energy" },
    { name: "Agriculture", desc: "Rice mills, agri-business" },
    { name: "Healthcare", desc: "Hospitals, clinics, diagnostics" },
    { name: "Education", desc: "Universities, coaching centers" },
    { name: "Real Estate", desc: "Property developers, builders" }
  ];

  const areas = [
    { name: "Shankar Nagar", type: "Commercial" },
    { name: "Pandri", type: "Business Hub" },
    { name: "Telibandha", type: "Lake Area" },
    { name: "Civil Lines", type: "Government" },
    { name: "Fafadih", type: "Commercial" },
    { name: "Devendra Nagar", type: "Residential" },
    { name: "Tatibandh", type: "Industrial" },
    { name: "Amanaka", type: "Commercial" },
    { name: "Samta Colony", type: "Residential" },
    { name: "Mowa", type: "Industrial" },
    { name: "Bhanpuri", type: "Industrial" },
    { name: "Naya Raipur", type: "Smart City" }
  ];

  const whyChooseUs = [
    { title: "Chhattisgarh Expertise", desc: "Deep understanding of Raipur's steel, mining, and government sectors. We've built apps for major CG businesses.", icon: <Pickaxe className="w-5 h-5" />, stats: "20+ CG Apps" },
    { title: "Steel & Mining Apps", desc: "Industry 4.0 apps for steel plants and mining operations with IoT and safety tracking.", icon: <Factory className="w-5 h-5" />, stats: "10+ Industrial Apps" },
    { title: "Most Affordable in CG", desc: "Best rates in Chhattisgarh. Save 40-50% compared to Delhi/Mumbai agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Government App Experience", desc: "Experience with e-governance apps for Chhattisgarh government departments.", icon: <Building2 className="w-5 h-5" />, stats: "Govt Certified" },
    { title: "Fast Delivery", desc: "Agile development with 2-week sprints. Launch your MVP in 3-4 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "3-4 Week MVP" },
    { title: "Hindi Support", desc: "Full Hindi language support in apps. Local project managers who understand CG business.", icon: <MessageSquare className="w-5 h-5" />, stats: "100% Hindi" },
  ];

  const pricing = [
    { tier: "Starter", price: "₹20,000 - ₹70,000", ideal: "Small businesses", features: ["Single platform", "Up to 10 screens", "Basic UI/UX", "Hindi + English", "3-4 weeks", "30 days support"], popular: false },
    { tier: "Business", price: "₹70,000 - ₹1,75,000", ideal: "Growing businesses", features: ["Android + iOS", "Up to 25 screens", "Premium UI/UX", "Payment gateway", "Admin panel", "6-8 weeks", "90 days support"], popular: true },
    { tier: "Enterprise", price: "₹1,75,000 - ₹4,50,000", ideal: "Large enterprises", features: ["Android + iOS + Web", "Unlimited screens", "IoT/ERP integration", "AI features", "Dedicated team", "10-16 weeks", "1 year support"], popular: false },
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    { question: "How much does app development cost in Raipur?", answer: "App development in Raipur costs ₹20,000 to ₹4,50,000+ depending on complexity. Simple apps start at ₹20,000-₹70,000 and take 3-4 weeks. Business apps cost ₹70,000-₹1,75,000 with full features. Enterprise apps with IoT, ERP integration cost ₹1,75,000-₹4,50,000+. We offer the most affordable rates in Chhattisgarh - 40-50% cheaper than Delhi/Mumbai." },
    { question: "Do you build apps for steel and mining industry?", answer: "Yes! Chhattisgarh is India's steel hub with major plants like Bhilai Steel Plant. We build Industry 4.0 apps with IoT integration, safety tracking, inventory management, production monitoring, quality control, and ERP systems for steel plants and mining operations." },
    { question: "Can you build government apps?", answer: "Yes! We have experience building e-governance apps for government departments. We understand compliance requirements, security standards, and can work within government procurement processes. Our apps include Hindi language support and accessibility features." },
    { question: "How long does app development take in Raipur?", answer: "Timeline depends on complexity. Simple apps take 3-4 weeks, business apps require 6-8 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints and regular demos." },
    { question: "Do you provide on-site meetings in Raipur?", answer: "Yes! We regularly visit Raipur for client meetings. We can meet at Shankar Nagar, Pandri, Civil Lines, Telibandha, or your office location for project discussions and reviews." },
    { question: "Do you work with Naya Raipur smart city projects?", answer: "Yes! We're experienced in smart city app development and can build apps for Naya Raipur's smart infrastructure, citizen services, IoT-based solutions, and integrated city management systems." },
    { question: "What technologies do you use for Raipur app development?", answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Python, Java Spring with databases like PostgreSQL, MongoDB. For industrial: IoT integration, SCADA connectors, and real-time systems." },
    { question: "Can you integrate with existing ERP systems?", answer: "Yes! We have experience integrating with SAP, Oracle, Tally, and custom ERP systems used in steel plants and manufacturing. We can connect your mobile app with existing systems for seamless data flow." },
    { question: "Do you build apps with offline functionality?", answer: "Yes! Given industrial environments and remote mining areas, we build apps with robust offline functionality. Our apps can work offline and sync when connectivity is restored, essential for plant floor and field apps." },
    { question: "What about app security for industrial apps?", answer: "Security is paramount for industrial applications. We implement multiple security layers: SSL/TLS encryption, secure authentication, role-based access control, data encryption at rest, and comprehensive audit logging." },
    { question: "How do you handle app maintenance after launch?", answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, minor feature enhancements, server monitoring, and analytics review." },
    { question: "Can you build apps for power plants?", answer: "Yes! Chhattisgarh has major power plants. We build apps for power generation monitoring, maintenance scheduling, safety compliance, and operational dashboards with real-time data visualization." },
    { question: "Do you sign NDAs for Raipur projects?", answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories." },
    { question: "Can you build apps for agriculture and rice mills?", answer: "Yes! Chhattisgarh is a major rice producer. We build apps for rice mills, agricultural businesses, farm management, crop monitoring, and supply chain solutions with inventory and logistics features." },
    { question: "What makes you different from other Raipur app development companies?", answer: "Three key differentiators: 1) Industrial Expertise: Specialized in steel, mining, and power sector apps for Chhattisgarh. 2) Government Experience: e-Governance apps with compliance. 3) Value Pricing: 40-50% lower than metro cities with same quality." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Steel Plant Production App",
      client: "Chhattisgarh Steel Company",
      description: "Built a comprehensive production monitoring app with real-time dashboards, quality control, and safety tracking. The app serves 2,000+ workers across multiple plants and improved efficiency by 30%.",
      results: ["2K+ Workers", "30% Efficiency", "Real-time Monitoring", "Safety Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "IoT Integration"]
    },
    {
      title: "Government Citizen Services",
      client: "Chhattisgarh Government Department",
      description: "Developed a citizen services app with online applications, status tracking, and document management. The app serves 100,000+ citizens with Hindi language support and accessibility features.",
      results: ["100K+ Citizens", "Hindi Support", "Online Applications", "Status Tracking"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Firebase"]
    },
    {
      title: "Mining Safety & Inventory App",
      client: "Chhattisgarh Mining Company",
      description: "Created a mining safety app with incident reporting, equipment tracking, and inventory management. The app serves 1,500+ workers with offline functionality for remote areas.",
      results: ["1.5K+ Workers", "Offline Mode", "Safety Compliance", "GPS Tracking"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Firebase"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Raipur office or ours. Understanding industrial requirements, government compliance, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups tailored for your users. We consider Hindi language support and industrial-specific design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Industrial apps undergo additional offline and safety testing." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, bug fixes, and ongoing maintenance with regular Raipur visits." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Industrial", technologies: ["IoT Integration", "SCADA Connect", "ERP Integration", "Safety Systems", "Offline Sync", "Real-time Alerts"] },
    { category: "Government", technologies: ["e-Governance", "Compliance", "Hindi Support", "Accessibility", "Document Management", "Citizen Portal"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Raipur | Mobile App Developers Chhattisgarh | ₹20,000 Onwards | Web Nova Crew" description="Top app development company in Raipur. Steel, mining, government apps for Shankar Nagar, Pandri, Naya Raipur. Most affordable in CG. Call +91 98723 64476." keywords="app development Raipur, mobile app developers Raipur, Chhattisgarh app development, steel app Raipur, mining app Raipur, government app Raipur" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Raipur", url: "https://webnovacrew.com/locations/app-development-raipur" }]} />
      <ServiceSchema serviceName="App Development in Raipur" serviceDescription="Professional mobile app development in Raipur, Chhattisgarh. Steel, mining, government apps with IoT integration." serviceUrl="https://webnovacrew.com/locations/app-development-raipur" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-300">Raipur, Chhattisgarh • Steel Capital of India • State Capital</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-zinc-100 bg-clip-text text-transparent">#1 App Development Company in Raipur</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Build powerful <span className="text-slate-400 font-semibold">steel, mining & government apps</span> for Chhattisgarh. <span className="text-zinc-400 font-semibold">Most affordable</span> in the state.</p>
            <p className="text-lg text-slate-400 mb-8">🏭 20+ CG Apps Built • 🏛️ Government Experience • 💰 40-50% Savings</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6 text-lg"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp: +91 98723 64476</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-slate-400">20+</div><div className="text-sm text-slate-400">CG Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-zinc-400">₹20K</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-slate-400">3-4</div><div className="text-sm text-slate-400">Week MVP</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-zinc-400">50%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Raipur</h2><p className="text-xl text-slate-400">Specialized solutions for Chhattisgarh's steel, mining, and government sectors</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50"><div className="w-14 h-14 bg-slate-500/10 rounded-xl flex items-center justify-center text-slate-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-slate-500/10 text-slate-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Raipur</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-slate-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Areas of Raipur</h2></div>
          <div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Raipur Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-slate-500/10 rounded-xl flex items-center justify-center text-slate-400">{item.icon}</div><div className="text-sm font-bold text-slate-400 bg-slate-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Raipur Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-slate-500/50 transition-all">
                <div className="text-slate-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-slate-500/10 rounded-lg px-3 py-2 text-center"><span className="text-slate-300 text-sm font-medium">{result}</span></div>))}
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-slate-400 text-sm mb-3">{phase.duration}</div>
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
                <h3 className="text-lg font-semibold text-slate-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Raipur App Development Pricing</h2><p className="text-xl text-slate-400">40-50% savings compared to Delhi/Mumbai agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-slate-800/50 border rounded-xl p-6 relative ${p.popular ? 'border-slate-500 ring-2 ring-slate-500/20' : 'border-slate-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-600 to-zinc-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}<h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><p className="text-sm text-slate-400 mb-4">{p.ideal}</p><div className="text-3xl font-bold text-slate-400 mb-6">{p.price}</div><ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-slate-600 to-zinc-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Raipur App Development FAQs</h2></div>
          <div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-zinc-800/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Raipur App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation for your steel, mining, or government app.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Free Consultation</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-slate-500/50 text-slate-400 hover:bg-slate-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
          <p className="text-slate-400 mt-6">📍 Regular visits to Raipur • Naya Raipur smart city experience</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
