import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Briefcase, Clock, CreditCard, ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentHawally() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Hawally's retail and service businesses with Arabic RTL.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline Mode"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Hawally's diverse expatriate and local market.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic UI"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Hawally startups and SMEs.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast Dev", "Native Feel"] },
    { title: "React Native Development", desc: "JavaScript-based apps for quick market entry.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native Modules", "Quick Launch", "Code Reuse"] },
    { title: "Retail & Shopping Apps", desc: "E-commerce and retail apps for Hawally's famous shopping district.", icon: <ShoppingBag className="w-6 h-6" />, features: ["Product Catalog", "KNET", "Inventory", "Loyalty"] },
    { title: "Restaurant & Food Apps", desc: "Food ordering and delivery apps for Hawally's vibrant restaurant scene.", icon: <Database className="w-6 h-6" />, features: ["Menu Management", "Online Order", "Delivery", "Table Booking"] },
    { title: "Service Business Apps", desc: "Booking and management apps for salons, clinics, and service businesses.", icon: <Briefcase className="w-6 h-6" />, features: ["Appointment", "Staff Management", "Payments", "CRM"] },
    { title: "Community Apps", desc: "Apps for Hawally's diverse expatriate communities and social groups.", icon: <Users className="w-6 h-6" />, features: ["Social Features", "Events", "Directory", "Messaging"] },
  ];

  const industries = [
    { name: "Retail & Shopping", desc: "Hawally's famous shopping streets" },
    { name: "Restaurants & Cafes", desc: "Diverse dining options" },
    { name: "Healthcare & Clinics", desc: "Medical centers and pharmacies" },
    { name: "Beauty & Salons", desc: "Spas and beauty services" },
    { name: "Real Estate", desc: "Property rentals and sales" },
    { name: "Education", desc: "Schools and training centers" },
    { name: "Automotive", desc: "Car dealers and services" },
    { name: "Professional Services", desc: "Legal, accounting, consulting" }
  ];

  const areas = [
    { name: "Hawally Center", type: "Commercial Hub" },
    { name: "Salmiya", type: "Shopping District" },
    { name: "Jabriya", type: "Residential" },
    { name: "Salwa", type: "Residential" },
    { name: "Rumaithiya", type: "Residential" },
    { name: "Bayan", type: "Upscale" },
    { name: "Mishref", type: "Residential" },
    { name: "Shaab", type: "Coastal" },
    { name: "Maidan Hawally", type: "Commercial" },
    { name: "Nugra", type: "Residential" },
    { name: "Hitteen", type: "Residential" },
    { name: "Zahra", type: "Residential" }
  ];

  const whyChooseUs = [
    { title: "Hawally Market Experts", desc: "Understanding of Hawally's diverse retail and expatriate market. We've built apps for local businesses.", icon: <Award className="w-5 h-5" />, stats: "25+ Hawally Apps" },
    { title: "Retail App Specialists", desc: "E-commerce and retail apps for Hawally's famous shopping district.", icon: <ShoppingBag className="w-5 h-5" />, stats: "15+ Retail Apps" },
    { title: "Arabic-English Bilingual", desc: "Native bilingual apps for Hawally's diverse population.", icon: <Globe className="w-5 h-5" />, stats: "100% Bilingual" },
    { title: "KNET Integration", desc: "Seamless KNET payment integration for all business types.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local agencies with international quality.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Launch your app in 4-6 weeks with agile development.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "Up to 10 screens", "Arabic + English", "KNET basic", "4-5 weeks", "30 days support"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Retail & restaurants", features: ["Android + iOS", "Up to 25 screens", "Premium UI/UX", "Full KNET", "Admin panel", "8-10 weeks", "90 days support"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large businesses", features: ["Android + iOS + Web", "Unlimited screens", "AI features", "Multi-location", "Dedicated team", "12-20 weeks", "1 year support"], popular: false },
  ];

  // Extended FAQs (12 questions)
  const faqs = [
    { question: "How much does app development cost in Hawally?", answer: "App development in Hawally costs KWD 500 to KWD 10,000+. Simple apps start at KWD 500-1,500 and take 4-5 weeks. Business apps cost KWD 1,500-4,000 with full features. Enterprise apps cost KWD 4,000-10,000+. We're 40-50% cheaper than local Kuwait agencies." },
    { question: "Do you build retail and shopping apps?", answer: "Yes! Hawally is Kuwait's shopping hub. We build e-commerce apps, retail POS apps, inventory management, loyalty programs, and multi-store management for Hawally's retail businesses." },
    { question: "Can you build restaurant and food delivery apps?", answer: "Absolutely! We build food ordering apps, table booking systems, kitchen display systems, and delivery management for Hawally's vibrant restaurant scene with Talabat and Carriage integration." },
    { question: "Do you support multiple languages for expatriates?", answer: "Yes! Hawally has a diverse expatriate population. We build apps in Arabic, English, Hindi, Tagalog, Filipino, and other languages as needed with proper RTL support." },
    { question: "How long does app development take?", answer: "Timeline depends on complexity. Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks. We use agile methodology with regular demos." },
    { question: "Do you integrate with Kuwait delivery services?", answer: "Yes! We integrate with Talabat, Carriage, Deliveroo, and local delivery services for food and retail apps. We also build custom delivery management systems." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Hawally apps include native Arabic RTL support with bilingual interfaces that feel natural to both Kuwaiti and expatriate users." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts. We handle complete integration including sandbox testing, certification, and go-live support." },
    { question: "Do you build salon and clinic booking apps?", answer: "Yes! Appointment booking, staff management, service catalogs, and payment integration for Hawally's beauty, wellness, and healthcare businesses." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3). We provide Arabic and English communication." },
    { question: "Can you build community and social apps?", answer: "Yes! Apps for expatriate communities, social groups, events, and directories. Features include messaging, event management, and member directories." },
    { question: "What makes you different from local agencies?", answer: "Three key differentiators: 1) Cost Efficiency: 40-50% lower costs. 2) Multilingual Expertise: Apps in 5+ languages. 3) Quality: International standards with local market understanding." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Multi-Store Retail App",
      client: "Hawally Shopping Chain",
      description: "Built a comprehensive retail app with multi-store inventory, KNET payment, and loyalty program. The app serves 25,000+ customers across 12 store locations.",
      results: ["25K+ Users", "12 Stores", "KNET Integration", "Loyalty Program"],
      tech: ["Flutter", "Node.js", "MongoDB", "AWS", "KNET API"]
    },
    {
      title: "Restaurant Ordering Platform",
      client: "Hawally Restaurant Group",
      description: "Developed a food ordering app with table booking, kitchen display, and Talabat integration. The app serves 20 restaurant locations with real-time order tracking.",
      results: ["20 Locations", "Talabat Integration", "Table Booking", "Kitchen Display"],
      tech: ["React Native", "Python", "PostgreSQL", "Firebase", "Talabat API"]
    },
    {
      title: "Healthcare Clinic App",
      client: "Hawally Medical Center",
      description: "Created a patient app with appointment booking, medical records, and telemedicine. The app serves 15,000+ patients with Arabic-English support.",
      results: ["15K+ Patients", "Telemedicine", "Medical Records", "Appointment Booking"],
      tech: ["Kotlin", "Swift", "Node.js", "PostgreSQL", "HIPAA Compliant"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding Hawally market, retail/restaurant requirements, and multilingual needs." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Arabic-first UI/UX design with multilingual support for Hawally's diverse population." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Agile development with KNET integration, delivery APIs, and multilingual features." },
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
      <SEO title="App Development Company in Hawally | Mobile App Developers Kuwait | Retail Apps | Web Nova Crew" description="Top app development company in Hawally, Kuwait. Retail, restaurant, service apps with KNET integration. Arabic-English bilingual. 40% cheaper. Call +91 98723 64476." keywords="app development Hawally, mobile app developers Hawally Kuwait, retail app Hawally, restaurant app Kuwait, KNET integration, Arabic app development" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Hawally", url: "https://webnovacrew.com/locations/app-development-hawally" }]} />
      <ServiceSchema serviceName="App Development in Hawally" serviceDescription="Professional mobile app development in Hawally, Kuwait. Retail, restaurant, and service apps with KNET integration." serviceUrl="https://webnovacrew.com/locations/app-development-hawally" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Hawally, Kuwait • Shopping Hub • Diverse Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">#1 App Development Company in Hawally</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Build powerful <span className="text-blue-400 font-semibold">retail, restaurant & service apps</span> for Hawally. <span className="text-indigo-400 font-semibold">Bilingual Arabic-English</span> with KNET.</p>
            <p className="text-lg text-slate-400 mb-8">🛍️ 25+ Hawally Apps • 🍽️ Restaurant Experts • 💳 KNET Ready • 🌐 Multilingual</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6 text-lg"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400">25+</div><div className="text-sm text-slate-400">Hawally Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-blue-500/20"><div className="text-3xl font-bold text-indigo-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400">4-6</div><div className="text-sm text-slate-400">Week MVP</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-blue-500/20"><div className="text-3xl font-bold text-indigo-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Hawally</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50"><div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Hawally</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Hawally Governorate</h2></div>
          <div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Hawally Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">{item.icon}</div><div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hawally App Development Pricing</h2></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-slate-800/50 border rounded-xl p-6 relative ${p.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}<h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><p className="text-sm text-slate-400 mb-2">{p.ideal}</p><div className="text-2xl font-bold text-blue-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></motion.div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hawally Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-blue-500/10 rounded-lg px-3 py-2 text-center"><span className="text-blue-300 text-sm font-medium">{result}</span></div>))}
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-blue-400 text-sm mb-3">{phase.duration}</div>
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
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technologies</h2></div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-blue-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hawally App Development FAQs</h2></div>
          <div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Hawally App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation for your retail, restaurant, or service app.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Consultation</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
