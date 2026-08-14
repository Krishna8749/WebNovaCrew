import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Briefcase, Clock, CreditCard, Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentKuwaitCity() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Kuwait businesses with Arabic RTL support and KNET integration.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET Payment", "Offline Mode"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Kuwait's iPhone-dominant market with Apple Pay Kuwait.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic UI"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Kuwait startups with bilingual Arabic-English support.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast Dev", "Native Feel"] },
    { title: "React Native Development", desc: "JavaScript-based apps for quick market entry in Kuwait's competitive market.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native Modules", "Quick Launch", "Code Reuse"] },
    { title: "Fintech & Banking Apps", desc: "KNET, payment gateway, and banking apps compliant with CBK regulations.", icon: <CreditCard className="w-6 h-6" />, features: ["KNET Integration", "CBK Compliant", "Secure", "Multi-currency"] },
    { title: "E-commerce Apps", desc: "Online shopping apps with KNET, COD, and delivery integration for Kuwait market.", icon: <Database className="w-6 h-6" />, features: ["KNET Payment", "COD", "Delivery API", "Arabic Catalog"] },
    { title: "Enterprise Solutions", desc: "Corporate apps for Kuwait's oil, banking, and government sectors.", icon: <Briefcase className="w-6 h-6" />, features: ["ERP Integration", "CRM", "Workflow", "Analytics"] },
    { title: "AI & Chatbot Apps", desc: "Arabic AI chatbots and automation apps for Kuwait businesses.", icon: <Cpu className="w-6 h-6" />, features: ["Arabic NLP", "AI Chatbot", "Automation", "ML Models"] },
  ];

  const industries = [
    { name: "Oil & Gas", desc: "KPC, KNPC, and contractor apps" },
    { name: "Banking & Finance", desc: "NBK, KFH, Boubyan compliant apps" },
    { name: "Government & eGov", desc: "Ministry and public sector apps" },
    { name: "Retail & E-commerce", desc: "Shopping and marketplace apps" },
    { name: "Real Estate", desc: "Property listing and management" },
    { name: "Healthcare", desc: "Hospital and clinic management" },
    { name: "Education", desc: "School and university apps" },
    { name: "Logistics & Delivery", desc: "Last-mile delivery solutions" }
  ];

  const areas = [
    { name: "Kuwait City Center", type: "Capital" },
    { name: "Sharq", type: "Business District" },
    { name: "Mirqab", type: "Commercial" },
    { name: "Qibla", type: "Historic" },
    { name: "Dasman", type: "Government" },
    { name: "Salhiya", type: "Shopping" },
    { name: "Mubarakiya", type: "Traditional" },
    { name: "Bneid Al-Gar", type: "Residential" },
    { name: "Kaifan", type: "Residential" },
    { name: "Shamiya", type: "Residential" },
    { name: "Shuwaikh", type: "Industrial" },
    { name: "Free Trade Zone", type: "Business" }
  ];

  const whyChooseUs = [
    { title: "Kuwait Market Experts", desc: "Deep understanding of Kuwait's business culture, regulations, and consumer behavior. We've built 50+ apps for Kuwait businesses.", icon: <Award className="w-5 h-5" />, stats: "50+ Kuwait Apps" },
    { title: "Arabic-First Development", desc: "Native Arabic UI/UX with proper RTL support. Bilingual apps that feel natural to Kuwaiti users.", icon: <Languages className="w-5 h-5" />, stats: "100% Arabic RTL" },
    { title: "KNET Integration Experts", desc: "Seamless KNET payment gateway integration. We're experienced with all Kuwait payment methods.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local Kuwait agencies while maintaining international quality standards.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Agile development with 2-week sprints. Launch your MVP in 4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "24/7 Kuwait Support", desc: "Support team available in Kuwait timezone. Arabic and English communication.", icon: <Clock className="w-5 h-5" />, stats: "Kuwait Timezone" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "Up to 10 screens", "Arabic + English", "KNET basic", "4-5 weeks", "30 days support"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Growing businesses", features: ["Android + iOS", "Up to 25 screens", "Premium UI/UX", "Full KNET integration", "Admin panel", "8-10 weeks", "90 days support"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large enterprises", features: ["Android + iOS + Web", "Unlimited screens", "AI/ML features", "ERP integration", "Dedicated team", "12-20 weeks", "1 year support"], popular: false },
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    { question: "How much does app development cost in Kuwait City?", answer: "App development in Kuwait City costs KWD 500 to KWD 10,000+ (₹1,35,000 to ₹25,00,000+). Simple apps start at KWD 500-1,500 and take 4-5 weeks. Business apps cost KWD 1,500-4,000 with full features. Enterprise apps with AI and ERP integration cost KWD 4,000-10,000+. We're 40-50% cheaper than local Kuwait agencies." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Kuwait apps include native Arabic RTL (Right-to-Left) support. We design Arabic-first interfaces that feel natural to Kuwaiti users, with proper font rendering, date formats, Islamic calendar support, and cultural considerations." },
    { question: "Can you integrate KNET payment gateway?", answer: "Absolutely! We're certified KNET integration experts. We handle the complete integration including sandbox testing, certification, and go-live support. We also integrate Tap, MyFatoorah, and Apple Pay Kuwait." },
    { question: "Do you build apps compliant with Kuwait regulations?", answer: "Yes! We understand Kuwait's regulatory requirements including CBK (Central Bank of Kuwait) guidelines for fintech, CITRA requirements, PACI integration, and data protection laws. All our apps are built to be compliant." },
    { question: "How long does app development take in Kuwait?", answer: "Timeline depends on complexity. Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks. We use agile methodology with 2-week sprints and regular demos." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3). We provide Arabic and English communication, and can arrange video calls at convenient Kuwait times." },
    { question: "Can you build apps for Kuwait government projects?", answer: "Yes! We have experience with e-government apps and understand Kuwait's public sector requirements. We can work with government procurement processes, security requirements, and PACI integration." },
    { question: "Do you have a presence in Kuwait?", answer: "We work remotely with Kuwait clients but have local partners for on-ground support. We regularly visit Kuwait for important client meetings and can arrange in-person discussions in Kuwait City." },
    { question: "What technologies do you use for Kuwait apps?", answer: "We use modern technologies. For mobile: Flutter, React Native, Kotlin, Swift. For backend: Node.js, Python, AWS, Firebase. For payments: KNET, Tap, MyFatoorah. For AI: Arabic NLP, GPT Arabic, chatbots." },
    { question: "Can you build apps for oil and gas sector?", answer: "Yes! Kuwait's oil sector is our specialty. We build apps for KPC, KNPC contractors with safety tracking, field operations, inventory management, and HSE compliance features." },
    { question: "Do you build fintech apps for Kuwait banks?", answer: "Yes! We have experience with CBK-compliant fintech apps. We build mobile banking, payment apps, and financial services apps with proper security and compliance." },
    { question: "How do you handle app maintenance after launch?", answer: "We provide comprehensive post-launch support. Our packages include: bug fixes, OS compatibility updates, security patches, feature enhancements, server monitoring, and 24/7 critical support." },
    { question: "Can you integrate with Kuwait Civil ID (PACI)?", answer: "Yes! We have experience integrating with PACI (Public Authority for Civil Information) for identity verification, civil ID validation, and e-government services." },
    { question: "Do you sign NDAs for Kuwait projects?", answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices." },
    { question: "What makes you different from local Kuwait agencies?", answer: "Three key differentiators: 1) Cost Efficiency: 40-50% lower than local agencies. 2) Technical Expertise: Latest technologies with Arabic-first approach. 3) Quality: International standards with local market understanding." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Oil & Gas Field Operations App",
      client: "Kuwait Oil Contractor",
      description: "Built a comprehensive field operations app with safety tracking, equipment management, and HSE compliance. The app serves 5,000+ field workers with offline functionality for remote areas.",
      results: ["5K+ Workers", "HSE Compliant", "Offline Mode", "GPS Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "IoT Integration"]
    },
    {
      title: "Islamic Banking Mobile App",
      client: "Kuwait Islamic Bank",
      description: "Developed a CBK-compliant mobile banking app with KNET integration, fund transfers, and Islamic finance features. The app serves 200,000+ customers with Arabic-first UI.",
      results: ["200K+ Users", "CBK Compliant", "KNET Integration", "Arabic RTL"],
      tech: ["React Native", "Java Spring", "Oracle", "AWS", "KNET API"]
    },
    {
      title: "Government Services Portal",
      client: "Kuwait Ministry",
      description: "Created a citizen services app with PACI integration, document management, and service requests. The app serves 100,000+ citizens with bilingual Arabic-English support.",
      results: ["100K+ Citizens", "PACI Integration", "Bilingual", "e-Signature"],
      tech: ["Kotlin", "Swift", "Python", "PostgreSQL", "AWS GovCloud"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "Understanding Kuwait market requirements, regulatory compliance, Arabic UI/UX needs, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Arabic-first design with RTL support. Wireframes and high-fidelity mockups tailored for Kuwaiti users and cultural preferences." },
    { step: "3", title: "Agile Development", duration: "4-16 Weeks", desc: "Development in 2-week sprints with demos after each sprint. KNET integration, Arabic localization, and compliance implementation." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including Arabic RTL, KNET payment flows, security testing, and device compatibility across Kuwait market." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, KNET certification, deployment, and ongoing support in Kuwait timezone with Arabic communication." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "MyFatoorah", "Stripe", "PayPal"] },
    { category: "Backend", techs: ["Node.js", "Python", "Java Spring", "Go", "GraphQL", "REST APIs"] },
    { category: "Cloud", techs: ["AWS", "Azure", "Google Cloud", "Firebase", "Docker", "Kubernetes"] },
    { category: "Arabic AI", techs: ["Arabic NLP", "GPT Arabic", "Chatbots", "Voice Recognition", "Sentiment Analysis"] },
    { category: "Compliance", techs: ["CBK Guidelines", "PACI Integration", "CITRA", "Data Protection", "e-Signature"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Kuwait City | Mobile App Developers Kuwait | KNET Integration | Web Nova Crew"
        description="Top app development company in Kuwait City. Arabic apps with KNET integration for Sharq, Mirqab, Salhiya. 40% cheaper than local agencies. iOS, Android, Flutter. Call +91 98723 64476."
        keywords="app development Kuwait City, mobile app developers Kuwait, KNET integration, Arabic app development, iOS app Kuwait, Android app Kuwait, Flutter developers Kuwait, Kuwait app company"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Kuwait City", url: "https://webnovacrew.com/locations/app-development-kuwait-city" }]} />
      <ServiceSchema serviceName="App Development in Kuwait City" serviceDescription="Professional mobile app development in Kuwait City. Arabic RTL apps with KNET payment integration for businesses, government, and enterprises." serviceUrl="https://webnovacrew.com/locations/app-development-kuwait-city" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Kuwait City, Kuwait • Capital • Business Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">#1 App Development Company in Kuwait City</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Build powerful <span className="text-emerald-400 font-semibold">Arabic apps with KNET integration</span> for Kuwait. <span className="text-teal-400 font-semibold">40-50% cheaper</span> than local agencies.</p>
            <p className="text-lg text-slate-400 mb-8">🇰🇼 50+ Kuwait Apps • 💳 KNET Experts • 🌐 Arabic RTL • 💰 Best Value</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6 text-lg"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp: +91 98723 64476</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">50+</div><div className="text-sm text-slate-400">Kuwait Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">KNET</div><div className="text-sm text-slate-400">Integrated</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400">عربي</div><div className="text-sm text-slate-400">Arabic RTL</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Kuwait City</h2><p className="text-xl text-slate-400">Arabic-first apps with KNET integration for Kuwait businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50"><div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Kuwait</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Areas of Kuwait City</h2></div>
          <div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Kuwait Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">{item.icon}</div><div className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Kuwait City App Development Pricing</h2><p className="text-xl text-slate-400">Transparent pricing in KWD and INR</p></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-slate-800/50 border rounded-xl p-6 relative ${p.popular ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}<h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><p className="text-sm text-slate-400 mb-2">{p.ideal}</p><div className="text-2xl font-bold text-emerald-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></motion.div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Kuwait Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="text-emerald-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-emerald-500/10 rounded-lg px-3 py-2 text-center"><span className="text-emerald-300 text-sm font-medium">{result}</span></div>))}
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-emerald-400 text-sm mb-3">{phase.duration}</div>
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
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technologies for Kuwait Apps</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-emerald-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Kuwait App Development FAQs</h2></div>
          <div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Kuwait App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation for your Arabic app with KNET integration.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Free Consultation</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
          <p className="text-slate-400 mt-6">🇰🇼 Kuwait timezone support • Arabic & English communication</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
