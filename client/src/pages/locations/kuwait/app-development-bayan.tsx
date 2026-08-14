import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Code2, MessageSquare, Globe, Database, Users, CreditCard, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentBayan() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Bayan's upscale residential market.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Premium"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Bayan's affluent community.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "Real Estate Apps", desc: "Luxury property apps.", icon: <Home className="w-6 h-6" />, features: ["Listings", "Virtual Tours", "Premium UI", "CRM"] },
    { title: "Lifestyle Apps", desc: "Premium lifestyle apps.", icon: <Users className="w-6 h-6" />, features: ["Concierge", "Booking", "Services", "Luxury"] },
    { title: "E-commerce Apps", desc: "Premium shopping.", icon: <Database className="w-6 h-6" />, features: ["Catalog", "KNET", "Delivery", "Premium"] },
    { title: "Service Apps", desc: "High-end services.", icon: <Building2 className="w-6 h-6" />, features: ["Appointments", "Payments", "Staff", "CRM"] },
    { title: "Community Apps", desc: "Exclusive community apps.", icon: <Globe className="w-6 h-6" />, features: ["Social", "Events", "Directory", "Private"] },
  ];

  const industries = [{ name: "Real Estate", desc: "Luxury properties" }, { name: "Retail", desc: "Premium shopping" }, { name: "Restaurants", desc: "Fine dining" }, { name: "Healthcare", desc: "Private clinics" }, { name: "Beauty", desc: "Luxury spas" }, { name: "Automotive", desc: "Premium cars" }, { name: "Education", desc: "Private schools" }, { name: "Services", desc: "Concierge" }];
  const areas = [{ name: "Bayan", type: "Premium" }, { name: "Mishref", type: "Residential" }, { name: "Salwa", type: "Upscale" }, { name: "Rumaithiya", type: "Residential" }];
  const whyChooseUs = [
    { title: "Premium Quality", desc: "High-end apps for Bayan's affluent market.", icon: <Award className="w-5 h-5" />, stats: "Premium" },
    { title: "Luxury UI/UX", desc: "Elegant designs.", icon: <Star className="w-5 h-5" />, stats: "Luxury Design" },
    { title: "KNET Integration", desc: "Seamless payments.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% savings.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Bilingual", desc: "Arabic-English.", icon: <Globe className="w-5 h-5" />, stats: "100% Bilingual" },
  ];
  const pricing = [
    { tier: "Starter", price: "KWD 750 - 2,000", priceINR: "₹2,00,000 - ₹5,50,000", ideal: "Small businesses", features: ["Single platform", "Premium UI", "Bilingual", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 2,000 - 5,000", priceINR: "₹5,50,000 - ₹13,50,000", ideal: "Growing businesses", features: ["Android + iOS", "Luxury UI", "Full KNET", "Admin panel", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 5,000 - 12,000", priceINR: "₹13,50,000 - ₹32,00,000", ideal: "Premium brands", features: ["All platforms", "Unlimited", "AI features", "12-20 weeks"], popular: false },
  ];
  // Extended FAQs
  const faqs = [
    { question: "How much does premium app development cost in Bayan?", answer: "Premium app development in Bayan costs KWD 750 to KWD 12,000+. Starter apps start at KWD 750-2,000, business apps cost KWD 2,000-5,000, and enterprise apps cost KWD 5,000-12,000+." },
    { question: "Do you build luxury real estate apps?", answer: "Yes! Premium property listings, virtual tours, 3D walkthroughs, and CRM for Bayan's luxury real estate market." },
    { question: "Can you build lifestyle and concierge apps?", answer: "Yes! Premium lifestyle apps with concierge services, booking, and exclusive member features." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our apps include native Arabic RTL support with elegant bilingual interfaces." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts for premium retail and service apps." },
    { question: "How long does app development take?", answer: "Premium apps take 4-5 weeks for starter, 8-10 weeks for business, and 12-20 weeks for enterprise." },
    { question: "Do you build apps with premium UI/UX?", answer: "Yes! Luxury design with elegant animations, premium typography, and sophisticated user experiences." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3)." },
  ];

  // Case Studies
  const caseStudies = [
    { title: "Luxury Real Estate App", client: "Bayan Properties", description: "Built a premium property app with virtual tours, 3D walkthroughs, and CRM. The app showcases 500+ luxury properties.", results: ["500+ Properties", "Virtual Tours", "3D Walkthrough", "Premium UI"], tech: ["Flutter", "Node.js", "PostgreSQL", "AWS"] },
    { title: "Lifestyle Concierge App", client: "Bayan Lifestyle Club", description: "Developed an exclusive concierge app with booking, services, and member features. The app serves 2,000+ premium members.", results: ["2K+ Members", "Concierge", "Booking", "Exclusive"], tech: ["React Native", "Python", "PostgreSQL", "Firebase"] },
    { title: "Premium E-commerce App", client: "Bayan Luxury Boutique", description: "Created a luxury shopping app with premium UI, KNET payment, and delivery. The app serves 5,000+ customers.", results: ["5K+ Customers", "Premium UI", "KNET", "Delivery"], tech: ["Kotlin", "Swift", "Node.js", "MongoDB"] }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding premium market requirements and luxury user expectations." },
    { step: "2", title: "Design", duration: "2-3 Weeks", desc: "Luxury UI/UX design with elegant animations and premium aesthetics." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Premium development with attention to detail and quality." },
    { step: "4", title: "Testing", duration: "1-2 Weeks", desc: "Comprehensive testing for premium user experience." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "Premium launch and ongoing support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Premium", techs: ["3D Tours", "AR/VR", "Animations", "Premium UI"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "Premium Cards"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Bayan | Premium Mobile Apps Kuwait | Web Nova Crew" description="Top app development company in Bayan, Kuwait. Premium real estate, lifestyle apps. Luxury UI/UX. Call +91 98723 64476." keywords="app development Bayan, premium app Kuwait, luxury app development Kuwait" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Bayan", url: "https://webnovacrew.com/locations/app-development-bayan" }]} />
      <ServiceSchema serviceName="App Development in Bayan" serviceDescription="Premium mobile app development in Bayan, Kuwait." serviceUrl="https://webnovacrew.com/locations/app-development-bayan" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Bayan, Kuwait • Premium Residential • Upscale Market</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">Premium App Development in Bayan</h1>
            <p className="text-xl text-slate-300 mb-4">Build <span className="text-emerald-400 font-semibold">luxury real estate, lifestyle & premium apps</span> for Bayan's affluent market.</p>
            <p className="text-lg text-slate-400 mb-8">✨ Premium Quality • 🏠 Luxury Real Estate • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">Premium</div><div className="text-sm text-slate-400">Quality</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400">KWD 750</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400">Luxury</div><div className="text-sm text-slate-400">UI/UX</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Premium Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50"><div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">{f}</span>))}</div></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">{item.icon}</div><div className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Bayan Premium App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-emerald-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Bayan Success Stories</h2></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((study, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all"><div className="text-emerald-400 text-sm font-medium mb-2">{study.client}</div><h3 className="text-xl font-bold text-white mb-4">{study.title}</h3><p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p><div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((result, i) => (<div key={i} className="bg-emerald-500/10 rounded-lg px-3 py-2 text-center"><span className="text-emerald-300 text-sm font-medium">{result}</span></div>))}</div><div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div></motion.div>))}</div></div></section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div><div className="grid md:grid-cols-5 gap-6">{developmentProcess.map((phase, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all h-full"><div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div><h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3><div className="text-emerald-400 text-sm mb-3">{phase.duration}</div><p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p></div></motion.div>))}</div></div></section>

      {/* Tech Stack */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div><div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">{techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-emerald-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}</div></div></section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Bayan App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Premium Bayan App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your luxury real estate, lifestyle, or premium app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
