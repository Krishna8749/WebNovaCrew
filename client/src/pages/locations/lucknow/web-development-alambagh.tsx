import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Hotel, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentAlambagh() {
  const services = [
    { title: "Hotel & Hospitality Websites", desc: "Booking-enabled websites for Alambagh's hotels and guest houses. We build hotel websites with real-time room availability, online booking engines, payment gateway integration, and channel manager connectivity. Perfect for hotels near Alambagh Bus Stand that need to capture transit travellers searching 'hotel near Alambagh' on Google.", icon: <Hotel className="w-6 h-6" />, features: ["Real-time Booking", "Payment Gateway", "Channel Manager", "Review Integration", "Mobile Responsive", "SEO Optimized"] },
    { title: "Transport & Logistics Apps", desc: "Fleet management and booking apps for Alambagh's transport businesses. We build apps with vehicle tracking, route optimization, booking management, and driver assignment. Ideal for the transport companies operating from Alambagh's bus terminal area.", icon: <Bus className="w-6 h-6" />, features: ["Vehicle Tracking", "Route Optimization", "Booking System", "Driver Management", "Payment Integration", "Real-time Updates"] },
    { title: "Restaurant & Food Delivery", desc: "Food ordering websites and apps for Alambagh's restaurants and dhabas. We build platforms with menu management, online ordering, delivery tracking, and integration with Swiggy and Zomato. Alambagh's high transit traffic means restaurants need to be found easily online by arriving passengers.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Online Ordering", "Delivery Tracking", "Swiggy/Zomato Integration", "Menu Management", "Loyalty Program", "Review System"] },
    { title: "Local SEO for Transit Traffic", desc: "Specialized local SEO for Alambagh businesses targeting transit passengers. We optimize for 'near Alambagh bus stand', 'hotel near Lucknow station', and 'restaurant near Alambagh' searches. Our strategies capture the lakhs of monthly visitors passing through Alambagh.", icon: <Target className="w-6 h-6" />, features: ["Transit SEO", "Google Maps #1", "GMB Optimization", "Review Management", "Near Me Searches", "₹8K/Month Start"] },
    { title: "Retail & Shop Websites", desc: "Affordable websites for Alambagh's retail shops and markets. From garment stores to electronics shops, we build fast, mobile-friendly websites with product catalogues, WhatsApp integration, and Google Maps directions. Starting at just ₹12,000.", icon: <Globe className="w-6 h-6" />, features: ["₹12K Starting", "Product Catalogue", "WhatsApp Integration", "Google Maps", "Mobile Responsive", "SEO Optimized"] },
    { title: "Healthcare & Clinic Solutions", desc: "Patient management and appointment systems for Alambagh's clinics and diagnostic centers. Online booking, telemedicine, lab report delivery, and pharmacy integration. We help Alambagh's healthcare providers serve both local residents and transit patients.", icon: <Heart className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Lab Reports", "Pharmacy Orders", "Doctor Profiles", "Reminders"] },
  ];

  const caseStudies = [
    { title: "Hotel Booking Platform", client: "StayEasy Hotels, Alambagh", description: "Built a hotel booking platform with real-time availability, payment gateway, and channel manager integration for an Alambagh hotel near the bus stand. Increased direct bookings by 40% and saved ₹8L/year in OTA commissions.", results: ["40% More Direct Bookings", "₹8L Saved/Year", "90% Occupancy", "4.7★ Rating"], tech: ["Next.js", "Node.js", "Stripe", "AWS", "Channel Manager API"] },
    { title: "Food Ordering App", client: "Alambagh Food Court", description: "Developed a food ordering app for a multi-restaurant food court near Alambagh Bus Stand with real-time order tracking, multi-vendor management, and delivery integration. Processing 500+ daily orders within 2 months.", results: ["500+ Daily Orders", "15 Restaurants", "4.6★ Rating", "₹8L Monthly Revenue"], tech: ["Flutter", "Node.js", "Firebase", "Razorpay", "Google Maps"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Alambagh?", answer: "Web Nova Crew is the top web development company in Alambagh, Lucknow. We specialize in hospitality, transport, and retail business websites that capture Alambagh's high transit traffic. Starting at ₹12,000 with 1-week delivery." },
    { question: "How much does a hotel website cost in Alambagh?", answer: "Hotel websites with booking engines start at ₹40,000 for basic booking functionality. Premium platforms with channel manager integration and payment gateway cost ₹80,000-₹2,50,000. We help hotels save 40-60% on OTA commissions." },
    { question: "Can you build a hotel booking app for my Alambagh hotel?", answer: "We build hotel booking apps with room management, online payments, guest reviews, and channel manager integration. Starting at ₹1,00,000 with 6-8 week delivery. Our hotel apps increase direct bookings by 40%." },
    { question: "Do you offer local SEO for Alambagh businesses?", answer: "We provide specialized local SEO for Alambagh businesses to rank #1 for 'hotel near Alambagh', 'restaurant near Alambagh bus stand' and similar transit-related searches. Packages start at ₹8,000/month." },
    { question: "What digital marketing works best for Alambagh businesses?", answer: "Google Maps optimization, local SEO, and Google Ads work best for Alambagh businesses due to high tourist and transit traffic. We create targeted campaigns that capture passengers searching for services near the bus stand. Starting at ₹10,000/month." },
    { question: "How quickly can you deliver a website for my Alambagh business?", answer: "Basic business websites in 5-7 days, hotel websites with booking in 2-3 weeks, and food delivery apps in 4-6 weeks. We also offer express delivery for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Charbagh", slug: "web-development-charbagh" },
    { name: "Lalbagh", slug: "web-development-lalbagh" },
    { name: "Aminabad", slug: "web-development-aminabad" },
    { name: "Rajajipuram", slug: "web-development-rajajipuram" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="Web Development Company in Alambagh, Lucknow | Hotels & Transport | Web Nova Crew" description="Top web development company in Alambagh, Lucknow. Hotel booking websites, transport apps, restaurant platforms. ₹12,000 onwards. Capture transit traffic." keywords="web development company in Alambagh, app developer in Alambagh Lucknow, digital marketing agency Alambagh, hotel website Alambagh, transport app Alambagh, website developer near Alambagh" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" }, { name: "Alambagh", url: "https://webnovacrew.com/locations/web-development-alambagh" }]} />
      <ServiceSchema serviceName="Web Development in Alambagh" serviceDescription="Professional web and app development services in Alambagh, Lucknow. Hotel booking platforms, transport apps, restaurant websites, and local SEO for transit traffic." serviceUrl="https://webnovacrew.com/locations/web-development-alambagh" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-sky-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-blue-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-sm text-sky-300">Alambagh, Lucknow • Transport Hub • High Transit Traffic</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-100 to-blue-100 bg-clip-text text-transparent">Web Development Company in Alambagh</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Alambagh's <span className="text-sky-400 font-semibold">transit hub</span> businesses need strong online visibility. We build <span className="text-blue-400 font-semibold">hotel booking sites, transport apps & restaurant platforms</span> that capture lakhs of monthly visitors.</p>
            <p className="text-lg text-slate-400 mb-8">Serving hotels, transport companies, restaurants & retailers near Alambagh Bus Stand.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-sky-400 mb-1">35+</div><div className="text-sm text-slate-400">Alambagh Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-blue-400 mb-1">₹12K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-sky-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Delivery</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-sky-500/20"><div className="text-3xl font-bold text-blue-400 mb-1">40%</div><div className="text-sm text-slate-400">More Bookings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Alambagh</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for Alambagh's transit-driven economy</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-sky-500/50 transition-all">
                <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Alambagh Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-sky-500/50 transition-all">
                <div className="text-sky-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-sky-500/10 rounded-lg px-3 py-2 text-center"><span className="text-sky-300 text-sm font-medium">{r}</span></div>))}</div>
                <div className="flex flex-wrap gap-2">{study.tech.map((t, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderBio />
      <TestimonialsSection />

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Alambagh Web Development FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950/50 to-blue-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Capture Alambagh's Transit Traffic Online</h2>
          <p className="text-xl text-slate-300 mb-8">Hotel booking sites, transport apps & local SEO for Alambagh businesses</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
