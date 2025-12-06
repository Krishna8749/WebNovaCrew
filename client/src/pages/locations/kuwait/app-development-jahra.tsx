import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Globe, Database, Tractor, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentJahra() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Jahra's agricultural and commercial sectors.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Jahra businesses.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Jahra market.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "Agricultural Apps", desc: "Farm management and agri-business apps for Jahra's farms.", icon: <Tractor className="w-6 h-6" />, features: ["Farm Management", "Irrigation", "Livestock", "Market"] },
    { title: "Retail Apps", desc: "E-commerce for Jahra's commercial areas.", icon: <Database className="w-6 h-6" />, features: ["Catalog", "KNET", "Inventory", "Delivery"] },
    { title: "Community Apps", desc: "Apps for Jahra's local communities.", icon: <Users className="w-6 h-6" />, features: ["Social", "Events", "Services", "Directory"] },
    { title: "Government Apps", desc: "Public sector apps for Jahra governorate.", icon: <Building2 className="w-6 h-6" />, features: ["Citizen Services", "Permits", "Complaints", "Info"] },
    { title: "Service Apps", desc: "Booking and service apps for local businesses.", icon: <Globe className="w-6 h-6" />, features: ["Booking", "Payments", "Staff", "CRM"] },
  ];

  const industries = [
    { name: "Agriculture", desc: "Farms, greenhouses, livestock" },
    { name: "Retail", desc: "Shopping, markets" },
    { name: "Government", desc: "Public services" },
    { name: "Healthcare", desc: "Hospitals, clinics" },
    { name: "Education", desc: "Schools, institutes" },
    { name: "Real Estate", desc: "Property, rentals" },
    { name: "Restaurants", desc: "Dining, cafes" },
    { name: "Automotive", desc: "Car services" }
  ];

  const areas = [
    { name: "Jahra City", type: "Center" },
    { name: "Saad Al-Abdullah", type: "Residential" },
    { name: "Naseem", type: "Residential" },
    { name: "Qasr", type: "Residential" },
    { name: "Sulaibiya", type: "Industrial" },
    { name: "Amghara", type: "Industrial" },
    { name: "Abdali", type: "Agricultural" },
    { name: "Waha", type: "Residential" }
  ];

  const whyChooseUs = [
    { title: "Jahra Expertise", desc: "Understanding of Jahra's agricultural and local market.", icon: <Award className="w-5 h-5" />, stats: "10+ Jahra Apps" },
    { title: "Agricultural Apps", desc: "Farm management and agri-business solutions.", icon: <Tractor className="w-5 h-5" />, stats: "Agri Experts" },
    { title: "KNET Integration", desc: "Seamless payment integration.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Launch in 4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Arabic Support", desc: "Full Arabic RTL support.", icon: <Globe className="w-5 h-5" />, stats: "100% Arabic" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Bilingual", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Growing businesses", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large businesses", features: ["All platforms", "Unlimited", "AI features", "12-20 weeks"], popular: false },
  ];

  // Extended FAQs
  const faqs = [
    { question: "How much does app development cost in Jahra?", answer: "App development in Jahra costs KWD 500 to KWD 10,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and enterprise apps cost KWD 4,000-10,000+. We're 40-50% cheaper than local agencies." },
    { question: "Do you build agricultural apps?", answer: "Yes! Farm management, irrigation control, livestock tracking, greenhouse monitoring, and agricultural marketplace apps for Jahra's farming sector." },
    { question: "Can you build government apps?", answer: "Yes! Citizen services, permit systems, public information, and e-governance apps for Jahra governorate." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Jahra apps include native Arabic RTL support with bilingual interfaces." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts for retail and service apps." },
    { question: "How long does app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks." },
    { question: "Do you build apps with offline functionality?", answer: "Yes! Essential for agricultural areas. Our apps work offline and sync when connectivity is restored." },
    { question: "Can you build IoT apps for farms?", answer: "Yes! Irrigation sensors, greenhouse monitoring, and smart farming solutions with IoT integration." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3)." },
    { question: "What makes you different from local agencies?", answer: "Three key differentiators: 1) Agricultural Expertise. 2) Cost Efficiency: 40-50% lower costs. 3) Quality: International standards." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Smart Farm Management App",
      client: "Jahra Agricultural Company",
      description: "Built a comprehensive farm management app with irrigation control, crop monitoring, and market integration. The app manages 50+ farms with IoT sensors.",
      results: ["50+ Farms", "IoT Sensors", "Irrigation Control", "Market Integration"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "IoT"]
    },
    {
      title: "Government Services Portal",
      client: "Jahra Governorate",
      description: "Developed a citizen services app with permit applications, complaints, and public information. The app serves 100,000+ citizens.",
      results: ["100K+ Citizens", "Permit System", "Complaints", "Bilingual"],
      tech: ["React Native", "Python", "PostgreSQL", "AWS", "Firebase"]
    },
    {
      title: "Local Marketplace App",
      client: "Jahra Business Association",
      description: "Created a local marketplace app connecting farms, retailers, and consumers. The app serves 5,000+ users with delivery integration.",
      results: ["5K+ Users", "Farm-to-Table", "Delivery", "KNET Payment"],
      tech: ["Kotlin", "Swift", "Node.js", "MongoDB", "KNET API"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding Jahra market, agricultural requirements, and local needs." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Arabic-first UI/UX design with offline capability for rural areas." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Agile development with IoT integration and KNET payment." },
    { step: "4", title: "Testing", duration: "1-2 Weeks", desc: "Comprehensive testing including offline mode and device compatibility." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "App store submission and ongoing support in Kuwait timezone." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "IoT", techs: ["Sensors", "Irrigation", "Monitoring", "Alerts"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "COD"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Jahra | Mobile App Developers Kuwait | Agricultural Apps | Web Nova Crew" description="Top app development company in Jahra, Kuwait. Agricultural, retail, government apps. Arabic support. 40% cheaper. Call +91 98723 64476." keywords="app development Jahra, mobile app developers Jahra Kuwait, agricultural app Kuwait, farm app Kuwait" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Jahra", url: "https://webnovacrew.com/locations/app-development-jahra" }]} />
      <ServiceSchema serviceName="App Development in Jahra" serviceDescription="Professional mobile app development in Jahra, Kuwait." serviceUrl="https://webnovacrew.com/locations/app-development-jahra" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-green-400" /><span className="text-sm text-green-300">Jahra, Kuwait • Agricultural Hub • Largest Governorate</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">#1 App Development Company in Jahra</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-green-400 font-semibold">agricultural, retail & government apps</span> for Jahra.</p>
            <p className="text-lg text-slate-400 mb-8">🌾 Agricultural Experts • 🏪 Retail Apps • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-green-500/20"><div className="text-3xl font-bold text-green-400">10+</div><div className="text-sm text-slate-400">Jahra Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-green-500/20"><div className="text-3xl font-bold text-green-400">4-6</div><div className="text-sm text-slate-400">Week MVP</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50"><div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-green-500/10 text-green-300 px-2 py-1 rounded">{f}</span>))}</div></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-green-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-green-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">{item.icon}</div><div className="text-sm font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Jahra App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-green-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-green-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Jahra Success Stories</h2></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((study, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all"><div className="text-green-400 text-sm font-medium mb-2">{study.client}</div><h3 className="text-xl font-bold text-white mb-4">{study.title}</h3><p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p><div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((result, i) => (<div key={i} className="bg-green-500/10 rounded-lg px-3 py-2 text-center"><span className="text-green-300 text-sm font-medium">{result}</span></div>))}</div><div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div></motion.div>))}</div></div></section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div><div className="grid md:grid-cols-5 gap-6">{developmentProcess.map((phase, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all h-full"><div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div><h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3><div className="text-green-400 text-sm mb-3">{phase.duration}</div><p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p></div></motion.div>))}</div></div></section>

      {/* Tech Stack */}
      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div><div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">{techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-green-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}</div></div></section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Jahra App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Jahra App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your agricultural, retail, or government app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
