import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, Fuel, Factory, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentAhmadi() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Ahmadi's oil & gas and industrial sector.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline"] },
    { title: "iOS App Development", desc: "Premium Swift apps for KOC, KNPC employees and contractors.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Ahmadi businesses.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "Oil & Gas Apps", desc: "Industrial apps for KOC, KNPC, and oil sector contractors.", icon: <Fuel className="w-6 h-6" />, features: ["HSE Tracking", "Permit System", "Asset Management", "Reporting"] },
    { title: "Industrial Apps", desc: "Manufacturing and industrial process apps.", icon: <Factory className="w-6 h-6" />, features: ["IoT Integration", "Inventory", "Quality", "Maintenance"] },
    { title: "Contractor Management", desc: "Apps for managing oil field contractors and workforce.", icon: <Building2 className="w-6 h-6" />, features: ["Workforce", "Timesheets", "Safety", "Compliance"] },
    { title: "E-commerce Apps", desc: "Shopping apps for Ahmadi's residential communities.", icon: <Database className="w-6 h-6" />, features: ["Catalog", "KNET", "Delivery", "Arabic"] },
    { title: "Community Apps", desc: "Apps for Ahmadi's expatriate communities.", icon: <Globe className="w-6 h-6" />, features: ["Social", "Events", "Directory", "Services"] },
  ];

  const industries = [
    { name: "Oil & Gas", desc: "KOC, KNPC, refineries" },
    { name: "Petrochemicals", desc: "Chemical plants, processing" },
    { name: "Industrial", desc: "Manufacturing, maintenance" },
    { name: "Contractors", desc: "Oil field services" },
    { name: "Retail", desc: "Shopping centers, stores" },
    { name: "Healthcare", desc: "Hospitals, clinics" },
    { name: "Education", desc: "Schools, training" },
    { name: "Real Estate", desc: "Housing, rentals" }
  ];

  const areas = [
    { name: "Ahmadi City", type: "Oil Hub" },
    { name: "Fahaheel", type: "Commercial" },
    { name: "Mangaf", type: "Residential" },
    { name: "Mahboula", type: "Residential" },
    { name: "Fintas", type: "Coastal" },
    { name: "Abu Halifa", type: "Residential" },
    { name: "Sabahiya", type: "Residential" },
    { name: "Riqqa", type: "Residential" },
    { name: "Hadiya", type: "Residential" },
    { name: "Wafra", type: "Agricultural" },
    { name: "Shuaiba", type: "Industrial" },
    { name: "Mina Abdullah", type: "Industrial" }
  ];

  const whyChooseUs = [
    { title: "Oil & Gas Expertise", desc: "Experience with KOC, KNPC, and oil sector apps. HSE, permit systems, and industrial solutions.", icon: <Fuel className="w-5 h-5" />, stats: "15+ Oil Apps" },
    { title: "Industrial App Specialists", desc: "IoT integration, asset management, and industrial process apps.", icon: <Factory className="w-5 h-5" />, stats: "20+ Industrial" },
    { title: "KNET Integration", desc: "Seamless payment integration for all business types.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Launch in 4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Arabic Support", desc: "Full Arabic RTL and bilingual apps.", icon: <Globe className="w-5 h-5" />, stats: "100% Arabic" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Arabic + English", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Contractors & SMEs", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "Admin panel", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 15,000", priceINR: "₹10,00,000 - ₹40,00,000", ideal: "Oil & gas companies", features: ["All platforms", "Unlimited", "IoT/ERP", "HSE modules", "Dedicated team", "12-24 weeks"], popular: false },
  ];

  // Extended FAQs
  const faqs = [
    { question: "How much does app development cost in Ahmadi?", answer: "App development in Ahmadi costs KWD 500 to KWD 15,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and oil & gas enterprise apps cost KWD 4,000-15,000+. We're 40-50% cheaper than local agencies." },
    { question: "Do you build oil and gas industry apps?", answer: "Yes! We specialize in HSE tracking, permit-to-work systems, asset management, field operations, and industrial apps for KOC, KNPC, and oil sector contractors." },
    { question: "Can you integrate with industrial systems?", answer: "Yes! We integrate with SCADA, ERP systems (SAP, Oracle), IoT sensors, PLCs, and existing industrial infrastructure for real-time data." },
    { question: "Do you build contractor management apps?", answer: "Absolutely! Workforce management, timesheets, safety compliance, contractor portals, and gate pass systems for oil field contractors." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Ahmadi apps include native Arabic RTL support with bilingual interfaces for both Kuwaiti and expatriate users." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts. We handle complete integration for retail and service apps in Ahmadi." },
    { question: "How long does app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise oil & gas apps take 12-24 weeks with proper testing." },
    { question: "Do you build apps with offline functionality?", answer: "Yes! Essential for oil field operations. Our apps work offline and sync when connectivity is restored, crucial for remote field locations." },
    { question: "Can you build HSE compliance apps?", answer: "Yes! Health, Safety, and Environment apps with incident reporting, safety observations, permit-to-work, and compliance tracking." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3). We provide Arabic and English communication." },
    { question: "Do you have experience with KOC/KNPC projects?", answer: "Yes! We've built apps for oil sector contractors working with KOC, KNPC, and other Kuwait oil companies." },
    { question: "What makes you different from local agencies?", answer: "Three key differentiators: 1) Oil & Gas Expertise: 15+ industrial apps. 2) Cost Efficiency: 40-50% lower costs. 3) Quality: International standards with local compliance." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Oil Field Operations App",
      client: "Ahmadi Oil Contractor",
      description: "Built a comprehensive field operations app with HSE tracking, permit-to-work, and equipment management. The app serves 3,000+ field workers with offline functionality.",
      results: ["3K+ Workers", "HSE Compliant", "Offline Mode", "GPS Tracking"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "IoT Integration"]
    },
    {
      title: "Contractor Workforce Management",
      client: "Kuwait Oil Services Company",
      description: "Developed a workforce management app with timesheets, gate pass, and safety compliance. The app manages 5,000+ contractor employees across multiple sites.",
      results: ["5K+ Employees", "Gate Pass System", "Timesheets", "Safety Tracking"],
      tech: ["React Native", "Python", "PostgreSQL", "AWS", "Biometric API"]
    },
    {
      title: "Industrial Asset Management",
      client: "Ahmadi Industrial Company",
      description: "Created an asset management app with IoT integration, maintenance scheduling, and inventory tracking. The app manages 10,000+ assets across 3 facilities.",
      results: ["10K+ Assets", "IoT Integration", "Maintenance", "Inventory"],
      tech: ["Kotlin", "Swift", "Java Spring", "Oracle", "SCADA Connect"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding oil & gas requirements, HSE compliance, and industrial integration needs." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Industrial-focused UI/UX design with offline capability and field-friendly interfaces." },
    { step: "3", title: "Development", duration: "4-20 Weeks", desc: "Agile development with IoT integration, SCADA connectivity, and HSE modules." },
    { step: "4", title: "Testing", duration: "2-4 Weeks", desc: "Comprehensive testing including offline mode, industrial integration, and security testing." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "Deployment, training, and ongoing support with 24/7 availability for critical systems." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Industrial", techs: ["IoT", "SCADA", "PLC Connect", "Sensors"] },
    { category: "Backend", techs: ["Node.js", "Python", "Java Spring", "Oracle"] },
    { category: "Cloud", techs: ["AWS", "Azure", "On-Premise", "Hybrid"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Ahmadi | Oil & Gas Apps Kuwait | Industrial Apps | Web Nova Crew" description="Top app development company in Ahmadi, Kuwait. Oil & gas, industrial, contractor apps for KOC, KNPC. HSE tracking, IoT integration. Call +91 98723 64476." keywords="app development Ahmadi, oil gas app Kuwait, industrial app Ahmadi, KOC app, KNPC app, HSE app Kuwait, contractor management app" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Ahmadi", url: "https://webnovacrew.com/locations/app-development-ahmadi" }]} />
      <ServiceSchema serviceName="App Development in Ahmadi" serviceDescription="Professional mobile app development in Ahmadi, Kuwait. Oil & gas, industrial, contractor apps." serviceUrl="https://webnovacrew.com/locations/app-development-ahmadi" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Ahmadi, Kuwait • Oil & Gas Capital • Industrial Hub</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent">#1 App Development Company in Ahmadi</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-amber-400 font-semibold">oil & gas, industrial & contractor apps</span> for Ahmadi's energy sector.</p>
            <p className="text-lg text-slate-400 mb-8">⛽ 15+ Oil Apps • 🏭 Industrial Experts • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-amber-500/20"><div className="text-3xl font-bold text-amber-400">15+</div><div className="text-sm text-slate-400">Oil & Gas Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-amber-500/20"><div className="text-3xl font-bold text-orange-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-amber-500/20"><div className="text-3xl font-bold text-amber-400">IoT</div><div className="text-sm text-slate-400">Integration</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-amber-500/20"><div className="text-3xl font-bold text-orange-400">HSE</div><div className="text-sm text-slate-400">Compliant</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Services in Ahmadi</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<motion.div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50"><div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries in Ahmadi</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-amber-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Ahmadi Governorate Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">{item.icon}</div><div className="text-sm font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Ahmadi App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-amber-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Ahmadi Success Stories</h2></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((study, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all"><div className="text-amber-400 text-sm font-medium mb-2">{study.client}</div><h3 className="text-xl font-bold text-white mb-4">{study.title}</h3><p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p><div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((result, i) => (<div key={i} className="bg-amber-500/10 rounded-lg px-3 py-2 text-center"><span className="text-amber-300 text-sm font-medium">{result}</span></div>))}</div><div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div></motion.div>))}</div></div></section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div><div className="grid md:grid-cols-5 gap-6">{developmentProcess.map((phase, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all h-full"><div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div><h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3><div className="text-amber-400 text-sm mb-3">{phase.duration}</div><p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p></div></motion.div>))}</div></div></section>

      {/* Tech Stack */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div><div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">{techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-amber-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}</div></div></section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Ahmadi App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-950/50 to-orange-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Ahmadi App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your oil & gas, industrial, or contractor app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
