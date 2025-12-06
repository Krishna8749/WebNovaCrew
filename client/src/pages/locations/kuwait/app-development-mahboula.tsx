import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Code2, MessageSquare, Globe, Database, Users, CreditCard, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentMahboula() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Mahboula's diverse community.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Mahboula.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "Real Estate Apps", desc: "Property and rental apps.", icon: <Home className="w-6 h-6" />, features: ["Listings", "Virtual Tours", "Booking", "CRM"] },
    { title: "Community Apps", desc: "Apps for expatriate communities.", icon: <Users className="w-6 h-6" />, features: ["Social", "Events", "Services", "Directory"] },
    { title: "Retail Apps", desc: "E-commerce solutions.", icon: <Database className="w-6 h-6" />, features: ["Catalog", "KNET", "Delivery", "Inventory"] },
    { title: "Service Apps", desc: "Booking apps.", icon: <Building2 className="w-6 h-6" />, features: ["Appointments", "Payments", "Staff", "CRM"] },
    { title: "Delivery Apps", desc: "Last-mile delivery.", icon: <Globe className="w-6 h-6" />, features: ["Tracking", "Routes", "Payments", "Notifications"] },
  ];

  const industries = [{ name: "Real Estate", desc: "Apartments, rentals" }, { name: "Retail", desc: "Shops, markets" }, { name: "Restaurants", desc: "Dining, cafes" }, { name: "Healthcare", desc: "Clinics" }, { name: "Beauty", desc: "Salons, spas" }, { name: "Automotive", desc: "Car services" }, { name: "Education", desc: "Training" }, { name: "Services", desc: "Professional" }];
  const areas = [{ name: "Mahboula", type: "Residential" }, { name: "Abu Halifa", type: "Coastal" }, { name: "Mangaf", type: "Residential" }, { name: "Fintas", type: "Residential" }];
  const whyChooseUs = [
    { title: "Mahboula Expertise", desc: "Understanding of Mahboula's diverse market.", icon: <Award className="w-5 h-5" />, stats: "10+ Apps" },
    { title: "Multilingual Apps", desc: "Arabic, English, Hindi, Tagalog.", icon: <Globe className="w-5 h-5" />, stats: "5+ Languages" },
    { title: "KNET Integration", desc: "Seamless payments.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% savings.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Real Estate Apps", desc: "Property solutions.", icon: <Home className="w-5 h-5" />, stats: "RE Expert" },
  ];
  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Bilingual", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Growing businesses", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large businesses", features: ["All platforms", "Unlimited", "AI features", "12-20 weeks"], popular: false },
  ];
  // Extended FAQs
  const faqs = [
    { question: "How much does app development cost in Mahboula?", answer: "App development in Mahboula costs KWD 500 to KWD 10,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and enterprise apps cost KWD 4,000-10,000+." },
    { question: "Do you support multiple languages?", answer: "Yes! Arabic, English, Hindi, Tagalog, and more for Mahboula's diverse expatriate community." },
    { question: "Can you build real estate apps?", answer: "Yes! Property listings, rental management, and virtual tours for Mahboula's residential market." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our apps include native Arabic RTL support with bilingual interfaces." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts for all business types." },
    { question: "How long does app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks." },
    { question: "Do you build community apps?", answer: "Yes! Social, events, and directory apps for Mahboula's diverse communities." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3)." },
  ];

  // Case Studies
  const caseStudies = [
    { title: "Rental Management App", client: "Mahboula Properties", description: "Built a rental management app with listings, payments, and maintenance requests. The app manages 500+ units.", results: ["500+ Units", "Payments", "Maintenance", "Multilingual"], tech: ["Flutter", "Node.js", "PostgreSQL", "AWS"] },
    { title: "Community Services App", client: "Mahboula Residents", description: "Developed a community app with services, events, and directory. The app serves 8,000+ residents.", results: ["8K+ Residents", "Services", "Events", "5 Languages"], tech: ["React Native", "Python", "PostgreSQL", "Firebase"] },
    { title: "Local Delivery App", client: "Mahboula Delivery", description: "Created a delivery app with tracking and multi-language support. The app serves 50+ businesses.", results: ["50+ Businesses", "Tracking", "Multilingual", "KNET"], tech: ["Kotlin", "Swift", "Node.js", "MongoDB"] }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding diverse community requirements." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Multilingual UI/UX design with RTL support." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Agile development with KNET integration." },
    { step: "4", title: "Testing", duration: "1-2 Weeks", desc: "Comprehensive testing across languages." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "App store submission and ongoing support." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Languages", techs: ["Arabic", "English", "Hindi", "Tagalog"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "COD"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Mahboula | Mobile App Developers Kuwait | Web Nova Crew" description="Top app development company in Mahboula, Kuwait. Real estate, community apps. Multilingual. 40% cheaper. Call +91 98723 64476." keywords="app development Mahboula, mobile app developers Mahboula Kuwait" />
      <LocalBusinessSchema /><BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Mahboula", url: "https://webnovacrew.com/locations/app-development-mahboula" }]} />
      <ServiceSchema serviceName="App Development in Mahboula" serviceDescription="Professional mobile app development in Mahboula, Kuwait." serviceUrl="https://webnovacrew.com/locations/app-development-mahboula" />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-violet-400" /><span className="text-sm text-violet-300">Mahboula, Kuwait • Diverse Community • Residential Hub</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">#1 App Development Company in Mahboula</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-violet-400 font-semibold">real estate, community & service apps</span> for Mahboula.</p>
            <p className="text-lg text-slate-400 mb-8">🏠 Real Estate Apps • 🌐 5+ Languages • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400">10+</div><div className="text-sm text-slate-400">Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400">5+</div><div className="text-sm text-slate-400">Languages</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-violet-500/50"><div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-violet-500/10 text-violet-300 px-2 py-1 rounded">{f}</span>))}</div></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-violet-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400">{item.icon}</div><div className="text-sm font-bold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mahboula App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-violet-500 ring-2 ring-violet-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-violet-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-violet-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mahboula Success Stories</h2></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((study, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all"><div className="text-violet-400 text-sm font-medium mb-2">{study.client}</div><h3 className="text-xl font-bold text-white mb-4">{study.title}</h3><p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p><div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((result, i) => (<div key={i} className="bg-violet-500/10 rounded-lg px-3 py-2 text-center"><span className="text-violet-300 text-sm font-medium">{result}</span></div>))}</div><div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div></motion.div>))}</div></div></section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div><div className="grid md:grid-cols-5 gap-6">{developmentProcess.map((phase, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-violet-500/50 transition-all h-full"><div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div><h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3><div className="text-violet-400 text-sm mb-3">{phase.duration}</div><p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p></div></motion.div>))}</div></div></section>

      {/* Tech Stack */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div><div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">{techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-violet-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}</div></div></section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Mahboula App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Mahboula App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your multilingual community or real estate app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
