import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, Globe, Database, ShoppingBag, Utensils, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentSalmiya() {
  const services = [
    { title: "Android App Development", desc: "Native apps for Salmiya's vibrant retail and entertainment sector.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Arabic RTL", "KNET", "Offline"] },
    { title: "iOS App Development", desc: "Premium Swift apps for Salmiya's upscale market.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Arabic"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Salmiya businesses.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Bilingual", "Fast", "Native"] },
    { title: "React Native Development", desc: "JavaScript apps for quick market entry.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native", "Quick", "Reusable"] },
    { title: "Shopping & Retail Apps", desc: "E-commerce apps for Salmiya's famous shopping scene.", icon: <ShoppingBag className="w-6 h-6" />, features: ["Catalog", "KNET", "Inventory", "Loyalty"] },
    { title: "Restaurant & Cafe Apps", desc: "Food ordering for Salmiya's dining hotspots.", icon: <Utensils className="w-6 h-6" />, features: ["Menu", "Ordering", "Delivery", "Booking"] },
    { title: "Entertainment Apps", desc: "Apps for Salmiya's entertainment and leisure venues.", icon: <Database className="w-6 h-6" />, features: ["Booking", "Events", "Tickets", "Loyalty"] },
    { title: "Service Business Apps", desc: "Booking apps for salons, spas, and services.", icon: <Building2 className="w-6 h-6" />, features: ["Appointments", "Staff", "Payments", "CRM"] },
  ];

  const industries = [
    { name: "Retail & Shopping", desc: "Marina Mall, Salmiya shopping" },
    { name: "Restaurants & Cafes", desc: "Gulf Road dining scene" },
    { name: "Entertainment", desc: "Cinemas, arcades, leisure" },
    { name: "Beauty & Wellness", desc: "Salons, spas, gyms" },
    { name: "Healthcare", desc: "Clinics, pharmacies" },
    { name: "Real Estate", desc: "Apartments, rentals" },
    { name: "Automotive", desc: "Car showrooms, services" },
    { name: "Professional Services", desc: "Offices, consultants" }
  ];

  const areas = [
    { name: "Salmiya Center", type: "Commercial" },
    { name: "Marina Mall Area", type: "Shopping" },
    { name: "Gulf Road", type: "Coastal" },
    { name: "Salem Al-Mubarak St", type: "Shopping" },
    { name: "Amman Street", type: "Commercial" },
    { name: "Blajat Street", type: "Entertainment" },
    { name: "Scientific Center", type: "Tourism" },
    { name: "Marina Crescent", type: "Dining" }
  ];

  const whyChooseUs = [
    { title: "Salmiya Market Experts", desc: "Deep understanding of Salmiya's retail and entertainment market.", icon: <Award className="w-5 h-5" />, stats: "30+ Salmiya Apps" },
    { title: "Retail App Specialists", desc: "E-commerce and shopping apps for Salmiya's famous retail scene.", icon: <ShoppingBag className="w-5 h-5" />, stats: "20+ Retail Apps" },
    { title: "KNET Integration", desc: "Seamless KNET payment for all Salmiya businesses.", icon: <CreditCard className="w-5 h-5" />, stats: "KNET Certified" },
    { title: "Competitive Pricing", desc: "40-50% lower than local agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Fast Delivery", desc: "Launch in 4-6 weeks.", icon: <Rocket className="w-5 h-5" />, stats: "4-6 Week MVP" },
    { title: "Bilingual Support", desc: "Arabic-English apps and support.", icon: <Globe className="w-5 h-5" />, stats: "100% Bilingual" },
  ];

  const pricing = [
    { tier: "Starter", price: "KWD 500 - 1,500", priceINR: "₹1,35,000 - ₹4,00,000", ideal: "Small businesses", features: ["Single platform", "10 screens", "Arabic + English", "KNET", "4-5 weeks"], popular: false },
    { tier: "Business", price: "KWD 1,500 - 4,000", priceINR: "₹4,00,000 - ₹10,00,000", ideal: "Retail & restaurants", features: ["Android + iOS", "25 screens", "Premium UI", "Full KNET", "Admin panel", "8-10 weeks"], popular: true },
    { tier: "Enterprise", price: "KWD 4,000 - 10,000", priceINR: "₹10,00,000 - ₹25,00,000", ideal: "Large businesses", features: ["All platforms", "Unlimited", "AI features", "Multi-location", "12-20 weeks"], popular: false },
  ];

  // Extended FAQs (12 questions)
  const faqs = [
    { question: "How much does app development cost in Salmiya?", answer: "App development in Salmiya costs KWD 500 to KWD 10,000+. Simple apps start at KWD 500-1,500, business apps cost KWD 1,500-4,000, and enterprise apps cost KWD 4,000-10,000+. We're 40-50% cheaper than local Kuwait agencies." },
    { question: "Do you build shopping and retail apps?", answer: "Yes! We specialize in e-commerce apps for Salmiya's famous shopping district including Marina Mall area businesses. Features include product catalogs, KNET payment, inventory management, and loyalty programs." },
    { question: "Can you build restaurant apps?", answer: "Absolutely! Food ordering, table booking, kitchen display systems, and delivery apps for Salmiya's vibrant dining scene along Gulf Road and Marina Crescent." },
    { question: "Do you integrate with delivery services?", answer: "Yes! We integrate with Talabat, Carriage, Deliveroo, and local delivery services. We also build custom delivery management systems." },
    { question: "Do you provide Arabic RTL support?", answer: "Yes! All our Salmiya apps include native Arabic RTL support with bilingual Arabic-English interfaces that feel natural to both Kuwaiti and expatriate users." },
    { question: "Can you integrate KNET payment?", answer: "Absolutely! We're KNET integration experts. We handle complete integration including sandbox testing, certification, and go-live support for retail and restaurant apps." },
    { question: "How long does app development take?", answer: "Simple apps take 4-5 weeks, business apps require 8-10 weeks, and enterprise apps take 12-20 weeks. We use agile methodology with regular demos." },
    { question: "Do you build entertainment and booking apps?", answer: "Yes! Apps for cinemas, arcades, leisure venues, and event booking. Features include ticket booking, seat selection, and loyalty programs." },
    { question: "Can you build salon and spa booking apps?", answer: "Yes! Appointment booking, staff management, service catalogs, and payment integration for Salmiya's beauty and wellness businesses." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! Our support team is available during Kuwait business hours (GMT+3). We provide Arabic and English communication." },
    { question: "Do you have experience with Marina Mall businesses?", answer: "Yes! We've built apps for businesses in and around Marina Mall, understanding the premium retail and dining market requirements." },
    { question: "What makes you different from local agencies?", answer: "Three key differentiators: 1) Cost Efficiency: 40-50% lower costs. 2) Retail Expertise: 20+ retail and restaurant apps. 3) Quality: International standards with local market understanding." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Marina Mall Retail App",
      client: "Salmiya Fashion Retailer",
      description: "Built a premium e-commerce app with virtual try-on, KNET payment, and loyalty program. The app serves 50,000+ customers with bilingual Arabic-English support.",
      results: ["50K+ Users", "KNET Integration", "Virtual Try-On", "Loyalty Program"],
      tech: ["Flutter", "Node.js", "MongoDB", "AWS", "KNET API"]
    },
    {
      title: "Gulf Road Restaurant Chain App",
      client: "Salmiya Restaurant Group",
      description: "Developed a food ordering app with table booking, kitchen display, and Talabat integration. The app serves 15 restaurant locations with real-time order tracking.",
      results: ["15 Locations", "Talabat Integration", "Table Booking", "Kitchen Display"],
      tech: ["React Native", "Python", "PostgreSQL", "Firebase", "Talabat API"]
    },
    {
      title: "Salon & Spa Booking Platform",
      client: "Salmiya Beauty Chain",
      description: "Created a booking app with staff scheduling, service catalog, and payment integration. The app manages 8 salon locations with 100+ stylists.",
      results: ["8 Locations", "100+ Stylists", "Online Booking", "Staff Management"],
      tech: ["Kotlin", "Swift", "Node.js", "PostgreSQL", "KNET"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding Salmiya market, retail/restaurant requirements, and user experience needs." },
    { step: "2", title: "Design", duration: "1-2 Weeks", desc: "Arabic-first UI/UX design with bilingual support tailored for Salmiya's diverse customers." },
    { step: "3", title: "Development", duration: "4-16 Weeks", desc: "Agile development with KNET integration, delivery service APIs, and loyalty features." },
    { step: "4", title: "Testing", duration: "1-2 Weeks", desc: "Comprehensive testing including payment flows, Arabic RTL, and device compatibility." },
    { step: "5", title: "Launch", duration: "Ongoing", desc: "App store submission, KNET certification, and ongoing support in Kuwait timezone." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Payment", techs: ["KNET", "Apple Pay", "Tap", "MyFatoorah"] },
    { category: "Delivery", techs: ["Talabat API", "Carriage", "Custom Delivery", "GPS Tracking"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Salmiya | Mobile App Developers Kuwait | Shopping Apps | Web Nova Crew" description="Top app development company in Salmiya, Kuwait. Retail, restaurant, entertainment apps with KNET. Marina Mall area. 40% cheaper. Call +91 98723 64476." keywords="app development Salmiya, mobile app developers Salmiya Kuwait, retail app Salmiya, restaurant app Kuwait, Marina Mall app" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Kuwait", url: "https://webnovacrew.com/locations" }, { name: "Salmiya", url: "https://webnovacrew.com/locations/app-development-salmiya" }]} />
      <ServiceSchema serviceName="App Development in Salmiya" serviceDescription="Professional mobile app development in Salmiya, Kuwait. Retail, restaurant, entertainment apps." serviceUrl="https://webnovacrew.com/locations/app-development-salmiya" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950"><div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"><MapPin className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Salmiya, Kuwait • Shopping & Entertainment Hub</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">#1 App Development Company in Salmiya</h1>
            <p className="text-xl text-slate-300 mb-4">Build powerful <span className="text-purple-400 font-semibold">retail, restaurant & entertainment apps</span> for Salmiya's vibrant market.</p>
            <p className="text-lg text-slate-400 mb-8">🛍️ 30+ Salmiya Apps • 🍽️ Restaurant Experts • 💳 KNET Ready</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-purple-500/20"><div className="text-3xl font-bold text-purple-400">30+</div><div className="text-sm text-slate-400">Salmiya Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-purple-500/20"><div className="text-3xl font-bold text-pink-400">KWD 500</div><div className="text-sm text-slate-400">Starting</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-purple-500/20"><div className="text-3xl font-bold text-purple-400">4-6</div><div className="text-sm text-slate-400">Week MVP</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-purple-500/20"><div className="text-3xl font-bold text-pink-400">40%</div><div className="text-sm text-slate-400">Savings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Services in Salmiya</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<motion.div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50"><div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Industries in Salmiya</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{industries.map((ind, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-purple-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></div>))}</div></div></section>

      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Salmiya Areas</h2></div><div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400" />{a.name}</div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Why Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{whyChooseUs.map((item, i) => (<div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">{item.icon}</div><div className="text-sm font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></div>))}</div></div></section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-7xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Salmiya App Development Pricing</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{pricing.map((p, i) => (<div key={i} className={`bg-slate-800/50 border rounded-xl p-6 ${p.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700'}`}><h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><div className="text-2xl font-bold text-purple-400">{p.price}</div><div className="text-sm text-slate-500 mb-4">{p.priceINR}</div><ul className="space-y-2 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-400" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></div>))}</div></div></section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Salmiya Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="text-purple-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-purple-500/10 rounded-lg px-3 py-2 text-center"><span className="text-purple-300 text-sm font-medium">{result}</span></div>))}
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-purple-400 text-sm mb-3">{phase.duration}</div>
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
            {techStack.map((stack, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-purple-400 mb-4">{stack.category}</h3><div className="flex flex-wrap gap-2">{stack.techs.map((tech, j) => (<span key={j} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50"><div className="container mx-auto max-w-4xl px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Salmiya App Development FAQs</h2></div><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-950/50 to-pink-950/50 border-t border-slate-800"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Salmiya App?</h2><p className="text-xl text-slate-300 mb-8">Get a free consultation for your retail, restaurant, or entertainment app.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button><a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a></div></div></section>

      <Footer />
    </div>
  );
}
