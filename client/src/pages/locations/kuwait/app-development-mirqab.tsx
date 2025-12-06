import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Code2, MessageSquare, Globe, Database, Briefcase, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentMirqab() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Mirqab's commercial sector.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Enterprise"] },
    { title: "iOS App Development", desc: "Premium Swift apps for businesses.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "Enterprise Apps", desc: "Corporate and business apps.", icon: <Briefcase className="w-6 h-6" />, features: ["ERP", "CRM", "Workflow", "Analytics"] },
    { title: "Government Apps", desc: "Public sector apps.", icon: <Building2 className="w-6 h-6" />, features: ["Citizen Services", "Permits", "Compliance", "Reporting"] },
    { title: "E-commerce Apps", desc: "Business e-commerce.", icon: <Database className="w-6 h-6" />, features: ["Catalog", "KNET", "B2B", "Inventory"] },
    { title: "Fintech Apps", desc: "Banking and finance apps.", icon: <CreditCard className="w-6 h-6" />, features: ["Payments", "Banking", "Compliance", "Security"] },
    { title: "Service Apps", desc: "Professional services.", icon: <Globe className="w-6 h-6" />, features: ["Booking", "Payments", "CRM", "Analytics"] },
  ];

  const industries = [{ name: "Government", desc: "Ministries, public sector" }, { name: "Banking", desc: "Banks, finance" }, { name: "Corporate", desc: "Enterprises" }, { name: "Retail", desc: "Commercial" }, { name: "Healthcare", desc: "Hospitals" }, { name: "Legal", desc: "Law firms" }, { name: "Consulting", desc: "Professional services" }, { name: "Real Estate", desc: "Commercial properties" }];
  const areas = [{ name: "Mirqab", type: "Commercial" }, { name: "Sharq", type: "Business" }, { name: "Kuwait City", type: "Capital" }, { name: "Qibla", type: "Historic" }];
  const whyChooseUs = [
    { title: "Enterprise Expertise", desc: "Corporate and government apps.", icon: <Briefcase className="w-5 h-5" />, stats: "20+ Enterprise" },
    { title: "Government Apps", desc: "Public sector experience.", icon: <Building2 className="w-5 h-5" />, stats: "Govt Certified" },
    { title: "KNET Integration", desc: "Seamless payments.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% savings.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Bilingual", desc: "Arabic-English.", icon: <Globe className="w-5 h-5" />, stats: "100% Bilingual" },
  ];
  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Bilingual", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Growing businesses", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 15,000", priceINR: "₹10,00,000 - ₹40,00,000", ideal: "Government & enterprise", features: ["All platforms", "Unlimited", "ERP/CRM", "Compliance", "12-24 weeks"], popular: false },
  ];
  // Extended FAQs
  const faqs = [
    { question: "How much does enterprise app development cost in Mirqab?", answer: "Enterprise app development in Mirqab costs KWD 500 to KWD 15,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and enterprise apps cost KWD 4,000-15,000+." },
    { question: "Do you build government apps?", answer: "Yes! Public sector apps with compliance, security, and citizen services." },
    { question: "Can you build enterprise ERP/CRM apps?", answer: "Yes! Custom ERP, CRM, and workflow apps for corporate clients." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our apps include native Arabic RTL support with bilingual interfaces." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts for enterprise apps." },
    { question: "How long does enterprise app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-24 weeks." },
    { question: "Do you build fintech apps?", answer: "Yes! Banking, payment, and financial apps with compliance." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3)." },
  ];

  // Case Studies
  const caseStudies = [
    { title: "Government Services App", client: "Kuwait Ministry", description: "Built a citizen services app with permits and tracking. Serves 50,000+ citizens.", results: ["50K+ Citizens", "Permits", "Tracking", "Compliant"], tech: ["Flutter", "Node.js", "PostgreSQL", "AWS"] },
    { title: "Enterprise ERP App", client: "Mirqab Corporation", description: "Developed a custom ERP app with workflow and analytics. Serves 500+ employees.", results: ["500+ Employees", "ERP", "Analytics", "Workflow"], tech: ["React Native", "Python", "PostgreSQL", "Azure"] },
    { title: "Banking App", client: "Kuwait Finance", description: "Created a secure banking app with payments. Serves 20,000+ customers.", results: ["20K+ Customers", "Payments", "Security", "Compliant"], tech: ["Kotlin", "Swift", "Node.js", "AWS"] }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "2-3 Weeks", desc: "Understanding enterprise requirements." },
    { step: "2", title: "Design", duration: "2-3 Weeks", desc: "Enterprise UI/UX with security focus." },
    { step: "3", title: "Development", duration: "8-20 Weeks", desc: "Agile development with compliance." },
    { step: "4", title: "Testing", duration: "2-3 Weeks", desc: "Security and compliance testing." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "Enterprise deployment and support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Enterprise", techs: ["ERP", "CRM", "Workflow", "Analytics"] },
    { category: "Security", techs: ["OAuth", "Encryption", "Compliance", "Audit"] },
    { category: "Cloud", techs: ["AWS", "Azure", "GCP", "On-Premise"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Mirqab | Enterprise Apps Kuwait | Web Nova Crew" description="Top app development company in Mirqab, Kuwait. Enterprise, government, corporate apps. KNET integration. Call +91 98723 64476." keywords="app development Mirqab, enterprise app Kuwait, government app Kuwait, corporate app Kuwait" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Mirqab", url: "https://webnovacrew.com/locations/app-development-mirqab" }]} />
      <ServiceSchema serviceName="App Development in Mirqab" serviceDescription="Professional enterprise app development in Mirqab, Kuwait." serviceUrl="https://webnovacrew.com/locations/app-development-mirqab" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-300">Mirqab, Kuwait • Commercial Hub • Government District</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-zinc-100 bg-clip-text text-transparent">#1 Enterprise App Development in Mirqab</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-slate-400 font-semibold">enterprise, government & corporate apps</span> for Mirqab's business district.</p>
            <p className="text-lg text-slate-400 mb-8">🏛️ Government Apps • 🏢 Enterprise • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-slate-400">20+</div><div className="text-sm text-slate-400">Enterprise Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-zinc-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-slate-400">Govt</div><div className="text-sm text-slate-400">Certified</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-slate-500/20"><div className="text-3xl font-bold text-zinc-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Enterprise Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50"><div className="w-14 h-14 bg-slate-500/10 rounded-xl flex items-center justify-center text-slate-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-slate-500/10 text-slate-300 px-2 py-1 rounded">{f}</span>))}</div></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-slate-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-slate-500/10 rounded-xl flex items-center justify-center text-slate-400">{item.icon}</div><div className="text-sm font-bold text-slate-400 bg-slate-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mirqab Enterprise Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-slate-500 ring-2 ring-slate-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-slate-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-slate-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-slate-600 to-zinc-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mirqab Success Stories</h2></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((study, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-slate-500/50 transition-all"><div className="text-slate-400 text-sm font-medium mb-2">{study.client}</div><h3 className="text-xl font-bold text-white mb-4">{study.title}</h3><p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p><div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((result, i) => (<div key={i} className="bg-slate-500/10 rounded-lg px-3 py-2 text-center"><span className="text-slate-300 text-sm font-medium">{result}</span></div>))}</div><div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div></motion.div>))}</div></div></section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div><div className="grid md:grid-cols-5 gap-6">{developmentProcess.map((phase, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50 transition-all h-full"><div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div><h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3><div className="text-slate-400 text-sm mb-3">{phase.duration}</div><p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p></div></motion.div>))}</div></div></section>

      {/* Tech Stack */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div><div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">{techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-slate-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}</div></div></section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mirqab Enterprise FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-zinc-800/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Mirqab Enterprise App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your government, enterprise, or corporate app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-slate-500/50 text-slate-400 hover:bg-slate-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
