import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, UtensilsCrossed, ShoppingBag, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentChowk() {
  const services = [
    { title: "Heritage Food & Restaurant Apps", desc: "Food ordering platforms for Chowk's legendary eateries and street food vendors. From Tunday Kababi to iconic sweet shops, we build apps that honor culinary heritage while enabling online orders. Features include heritage storytelling, menu management, and delivery tracking.", icon: <UtensilsCrossed className="w-6 h-6" />, features: ["Heritage Storytelling", "Menu Management", "Order Tracking", "Payment Gateway", "Review System", "Loyalty Program"] },
    { title: "Traditional Retail Websites", desc: "E-commerce solutions for Chowk's traditional markets selling chikan, zardozi, perfumes (ittars), and handicrafts. We create websites that reflect the area's rich cultural heritage while providing modern shopping experiences. Starting at ₹25,000.", icon: <ShoppingBag className="w-6 h-6" />, features: ["Heritage Design", "Product Catalog", "WhatsApp Orders", "UPI Payments", "Mobile Responsive", "SEO Optimized"] },
    { title: "Cultural Tourism Platforms", desc: "Tourism websites and booking platforms for Chowk's heritage attractions, havelis, and cultural experiences. We help tourism businesses showcase Chowk's rich history and attract visitors looking for authentic Lucknow experiences.", icon: <Landmark className="w-6 h-6" />, features: ["Heritage Tours", "Booking System", "Virtual Tours", "Guide Management", "Payment Integration", "Review System"] },
    { title: "Local Business Websites", desc: "Affordable websites for Chowk's local shops and service providers. From traditional medicine stores to tailoring services, we create fast, mobile-friendly sites with WhatsApp integration. Starting at just ₹15,000.", icon: <Globe className="w-6 h-6" />, features: ["₹15K Starting", "WhatsApp Integration", "Google Maps", "Mobile Responsive", "Service Showcase", "SEO Optimized"] },
    { title: "Heritage Brand Marketing", desc: "Digital marketing that respects Chowk's cultural significance while reaching new customers. Social media marketing for traditional businesses, local SEO for Old Lucknow searches, and content marketing that tells heritage stories. Starting at ₹10,000/month.", icon: <Target className="w-6 h-6" />, features: ["Heritage Social Media", "Local SEO", "Storytelling Content", "Google Ads", "WhatsApp Marketing", "₹10K/Month Start"] },
    { title: "Healthcare & Unani Medicine", desc: "Digital platforms for Chowk's traditional medicine practitioners, Unani clinics, and herbal stores. We help preserve and promote traditional healthcare practices while making them accessible online.", icon: <Heart className="w-6 h-6" />, features: ["Clinic Websites", "Appointment Booking", "Medicine Catalog", "Telemedicine", "Health Blogs", "Review System"] },
  ];

  const caseStudies = [
    { title: "Heritage Food Ordering App", client: "Nawabi Kitchen, Chowk", description: "Built a food ordering app for a legendary Chowk restaurant with heritage storytelling and online ordering. The app processed 1,000+ daily orders and achieved 4.8★ rating while preserving the brand's traditional appeal.", results: ["1K+ Daily Orders", "4.8★ Rating", "30% Online Growth", "Heritage Branding"], tech: ["Flutter", "Node.js", "Firebase", "Razorpay", "AWS"] },
    { title: "Cultural Tourism Platform", client: "Heritage Walks Lucknow, Chowk", description: "Created a tourism booking platform for Chowk heritage walks and cultural experiences. Booked 5,000+ tours and generated ₹15L revenue while promoting Chowk's rich cultural heritage.", results: ["5K+ Tours Booked", "₹15L Revenue", "4.9★ Rating", "Cultural Impact"], tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Chowk?", answer: "XcFlown is the leading web development company in Chowk, Lucknow. We specialize in heritage food apps, traditional retail websites, and cultural tourism platforms. Starting at ₹15,000." },
    { question: "Can you build a food ordering app for my Chowk restaurant?", answer: "We build heritage food ordering apps with storytelling, menu management, and delivery tracking. Starting at ₹60,000. Our Chowk restaurant apps process 1,000+ daily orders." },
    { question: "How much does a tourism website cost for Chowk?", answer: "Tourism and heritage websites for Chowk start at ₹30,000 with booking systems. Premium platforms with virtual tours cost ₹80,000-₹2,00,000. We help showcase Chowk's cultural heritage." },
    { question: "Do you offer digital marketing for Chowk businesses?", answer: "We provide heritage-focused digital marketing for Chowk including social media for traditional businesses, local SEO for Old Lucknow searches, and cultural storytelling. Starting at ₹10,000/month." },
    { question: "Can you create a website for my traditional Chowk shop?", answer: "We create heritage-themed websites for Chowk's traditional shops with product catalogs, WhatsApp orders, and cultural storytelling. Starting at ₹20,000." },
    { question: "How quickly can you deliver a project in Chowk?", answer: "Local business websites in 1-2 weeks, food ordering apps in 4-6 weeks, tourism platforms in 6-8 weeks. We respect Chowk's heritage while delivering modern solutions." },
  ];

  const nearbyAreas = [
    { name: "Aminabad", slug: "web-development-aminabad" },
    { name: "Hazratganj", slug: "web-development-hazratganj" },
    { name: "Lalbagh", slug: "web-development-lalbagh" },
    { name: "Charbagh", slug: "web-development-charbagh" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Chowk, Lucknow | Heritage Food & Culture | XcFlown" description="Top web development company in Chowk, Lucknow. Heritage food apps, cultural tourism platforms, traditional retail websites. ₹15,000 onwards. Old Lucknow specialist." keywords="web development company in Chowk, app developer in Chowk Lucknow, digital marketing agency Chowk, food app developer Chowk, heritage website Lucknow, old city website developer" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Chowk", url: "https://xcflown.com/locations/web-development-chowk" }]} />
      <ServiceSchema serviceName="Web Development in Chowk" serviceDescription="Professional web and app development services in Chowk, Lucknow. Heritage food apps, cultural tourism platforms, traditional retail websites, and heritage brand marketing." serviceUrl="https://xcflown.com/locations/web-development-chowk" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-red-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-orange-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300">Chowk, Lucknow • Heritage Heart • Cultural Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent">Web Development in Chowk</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Chowk's <span className="text-red-400 font-semibold">heritage food & culture</span> deserves digital preservation. We build <span className="text-orange-400 font-semibold">food apps, tourism platforms & cultural websites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving legendary restaurants, traditional shops, tourism operators & cultural businesses in Old Lucknow.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-red-500/20"><div className="text-3xl font-bold text-red-400 mb-1">35+</div><div className="text-sm text-slate-400">Chowk Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-red-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-red-500/20"><div className="text-3xl font-bold text-red-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-red-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Chowk</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions that honor heritage</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-red-500/50 transition-all">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-red-500/10 text-red-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chowk Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-red-500/50 transition-all">
                <div className="text-red-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-red-500/10 rounded-lg px-3 py-2 text-center"><span className="text-red-300 text-sm font-medium">{r}</span></div>))}</div>
                <div className="flex flex-wrap gap-2">{study.tech.map((t, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderBio />
      <TestimonialsSection />

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Chowk Web Development FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-900/50 border-t border-violet-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-red-500/50 hover:text-red-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-950/50 to-orange-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Preserve Chowk's Heritage Digitally</h2>
          <p className="text-xl text-slate-300 mb-8">Food apps, tourism platforms & cultural websites for Old Lucknow</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
