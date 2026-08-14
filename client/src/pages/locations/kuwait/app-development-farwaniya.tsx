import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, ShoppingCart, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentFarwaniya() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Farwaniya's diverse business community.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Farwaniya market.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Farwaniya businesses.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "React Native Development", desc: "JavaScript apps for quick deployment.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native", "Quick", "Reusable"] },
    { title: "Retail & Shopping Apps", desc: "E-commerce for Farwaniya's busy commercial areas.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Catalog", "KNET", "Inventory", "Delivery"] },
    { title: "Healthcare Apps", desc: "Apps for Farwaniya's hospitals and clinics.", icon: <Building2 className="w-6 h-6" />, features: ["Appointments", "Records", "Pharmacy", "Telemedicine"] },
    { title: "Community Apps", desc: "Apps for Farwaniya's large expatriate population.", icon: <Users className="w-6 h-6" />, features: ["Social", "Events", "Services", "Directory"] },
    { title: "Service Business Apps", desc: "Booking apps for various service businesses.", icon: <Database className="w-6 h-6" />, features: ["Booking", "Payments", "Staff", "CRM"] },
  ];

  const industries = [
    { name: "Retail & Commercial", desc: "Shopping centers, markets" },
    { name: "Healthcare", desc: "Hospitals, clinics, pharmacies" },
    { name: "Education", desc: "Schools, institutes" },
    { name: "Restaurants", desc: "Dining, fast food, cafes" },
    { name: "Automotive", desc: "Car services, dealers" },
    { name: "Real Estate", desc: "Rentals, property" },
    { name: "Professional Services", desc: "Offices, consultants" },
    { name: "Logistics", desc: "Warehousing, delivery" }
  ];

  const areas = [
    { name: "Farwaniya Center", type: "Commercial" },
    { name: "Khaitan", type: "Commercial" },
    { name: "Jleeb Al-Shuyoukh", type: "Residential" },
    { name: "Abraq Khaitan", type: "Residential" },
    { name: "Ardiya", type: "Industrial" },
    { name: "Rai", type: "Commercial" },
    { name: "Riggae", type: "Residential" },
    { name: "Andalous", type: "Residential" },
    { name: "Omariya", type: "Residential" },
    { name: "Rabiya", type: "Residential" },
    { name: "Firdous", type: "Residential" },
    { name: "Ishbiliya", type: "Residential" }
  ];

  const whyChooseUs = [
    { title: "Farwaniya Expertise", desc: "Understanding of Farwaniya's diverse commercial and residential market.", icon: <Award className="w-5 h-5" />, stats: "20+ Farwaniya Apps" },
    { title: "Multilingual Apps", desc: "Arabic, English, Hindi, Tagalog for diverse population.", icon: <Globe className="w-5 h-5" />, stats: "5+ Languages" },
    { title: "KNET Integration", desc: "Seamless payment integration.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Launch in 4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "24/7 Support", desc: "Kuwait timezone support.", icon: <Shield className="w-5 h-5" />, stats: "24/7 Available" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Bilingual", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Growing businesses", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "Admin panel", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large businesses", features: ["All platforms", "Unlimited", "AI features", "Multi-location", "12-20 weeks"], popular: false },
  ];

  // Extended FAQs
  const faqs = [
    { question: "How much does app development cost in Farwaniya?", answer: "App development in Farwaniya costs KWD 500 to KWD 10,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and enterprise apps cost KWD 4,000-10,000+. We're 40-50% cheaper than local Kuwait agencies." },
    { question: "Do you support multiple languages?", answer: "Yes! Farwaniya has Kuwait's most diverse population. We build apps in Arabic, English, Hindi, Tagalog, Filipino, Urdu, and other languages with proper RTL support." },
    { question: "Can you build healthcare apps?", answer: "Yes! Appointment booking, patient records, pharmacy apps, telemedicine solutions, and hospital management systems for Farwaniya's healthcare sector." },
    { question: "Do you integrate with delivery services?", answer: "Yes! We integrate with Talabat, Carriage, Deliveroo, and local delivery services. We also build custom delivery management systems." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Farwaniya apps include native Arabic RTL support with bilingual interfaces for the diverse population." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts. We handle complete integration including sandbox testing, certification, and go-live support." },
    { question: "How long does app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks. We use agile methodology with regular demos." },
    { question: "Do you build community and social apps?", answer: "Yes! Apps for expatriate communities, social groups, events, and service directories for Farwaniya's diverse population." },
    { question: "Can you build retail and e-commerce apps?", answer: "Yes! E-commerce apps, retail POS, inventory management, and loyalty programs for Farwaniya's busy commercial areas like Khaitan and Rai." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3). We provide Arabic and English communication." },
    { question: "Do you have experience with Khaitan businesses?", answer: "Yes! We've built apps for businesses in Khaitan, Rai, Ardiya, and other Farwaniya areas, understanding the local market needs." },
    { question: "What makes you different from local agencies?", answer: "Three key differentiators: 1) Cost Efficiency: 40-50% lower costs. 2) Multilingual Expertise: Apps in 5+ languages. 3) Quality: International standards with local market understanding." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Healthcare Clinic Network App",
      client: "Farwaniya Medical Group",
      description: "Built a patient management app with appointment booking, medical records, and telemedicine. The app serves 30,000+ patients across 5 clinic locations with multilingual support.",
      results: ["30K+ Patients", "5 Clinics", "Telemedicine", "Multilingual"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliant"]
    },
    {
      title: "Retail Chain E-commerce App",
      client: "Khaitan Shopping Center",
      description: "Developed a multi-store e-commerce app with KNET payment, inventory sync, and delivery integration. The app serves 15,000+ customers across 8 store locations.",
      results: ["15K+ Users", "8 Stores", "KNET Integration", "Delivery API"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "KNET API"]
    },
    {
      title: "Community Services Platform",
      client: "Farwaniya Expatriate Association",
      description: "Created a community app with service directory, events, and messaging for expatriates. The app serves 20,000+ users in 5 languages.",
      results: ["20K+ Users", "5 Languages", "Service Directory", "Events"],
      tech: ["Kotlin", "Swift", "Node.js", "Firebase", "Push Notifications"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding Farwaniya market, multilingual requirements, and diverse user needs." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Arabic-first UI/UX design with multilingual support for Farwaniya's diverse population." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Agile development with KNET integration, multilingual features, and delivery APIs." },
    { step: "4", title: "Testing", duration: "1-2 Weeks", desc: "Comprehensive testing including payment flows, RTL, and device compatibility." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "App store submission, KNET certification, and ongoing support in Kuwait timezone." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "MyFatoorah"] },
    { category: "Delivery", techs: ["Talabat API", "Carriage", "Custom Delivery", "GPS"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Farwaniya | Mobile App Developers Kuwait | Web Nova Crew" description="Top app development company in Farwaniya, Kuwait. Retail, healthcare, community apps. Multilingual support. 40% cheaper. Call +91 98723 64476." keywords="app development Farwaniya, mobile app developers Farwaniya Kuwait, Khaitan app development, healthcare app Kuwait" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Farwaniya", url: "https://webnovacrew.com/locations/app-development-farwaniya" }]} />
      <ServiceSchema serviceName="App Development in Farwaniya" serviceDescription="Professional mobile app development in Farwaniya, Kuwait." serviceUrl="https://webnovacrew.com/locations/app-development-farwaniya" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-cyan-400" /><span className="text-sm text-cyan-300">Farwaniya, Kuwait • Most Populous • Commercial Hub</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">#1 App Development Company in Farwaniya</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-cyan-400 font-semibold">retail, healthcare & community apps</span> for Farwaniya's diverse market.</p>
            <p className="text-lg text-slate-400 mb-8">🏪 20+ Farwaniya Apps • 🌐 Multilingual • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-cyan-500/20"><div className="text-3xl font-bold text-cyan-400">20+</div><div className="text-sm text-slate-400">Farwaniya Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-cyan-500/20"><div className="text-3xl font-bold text-teal-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-cyan-500/20"><div className="text-3xl font-bold text-cyan-400">5+</div><div className="text-sm text-slate-400">Languages</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-cyan-500/20"><div className="text-3xl font-bold text-teal-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50"><div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded">{f}</span>))}</div></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">{item.icon}</div><div className="text-sm font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Farwaniya App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-cyan-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-cyan-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-cyan-600 to-teal-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Farwaniya Success Stories</h2></div>
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

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Our Development Process</h2></div>
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
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Technologies</h2></div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-cyan-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Farwaniya App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-950/50 to-teal-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Farwaniya App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your retail, healthcare, or community app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
