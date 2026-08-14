import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Train, Hotel, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentCharbagh() {
  const services = [
    { title: "Hotel & Hospitality Booking", desc: "Reservation platforms for Charbagh's hotels near the railway station. Real-time room availability, online booking engines, payment integration, and channel manager connectivity. We help hotels capture the lakhs of daily travelers passing through Charbagh Railway Station.", icon: <Hotel className="w-6 h-6" />, features: ["Real-time Booking", "Payment Gateway", "Channel Manager", "Review Integration", "Mobile Responsive", "Transit SEO"] },
    { title: "Transport & Travel Apps", desc: "Travel booking and transport apps for Charbagh's taxi services, auto-rickshaw operators, and travel agencies. Features include ride booking, fare estimation, route tracking, and driver management. Perfect for the transport hub around Lucknow's main railway station.", icon: <Bus className="w-6 h-6" />, features: ["Ride Booking", "Fare Estimation", "Route Tracking", "Driver Management", "Payment Integration", "Real-time Updates"] },
    { title: "Restaurant & Food Ordering", desc: "Food ordering apps and websites for Charbagh's restaurants catering to railway passengers. Quick ordering, delivery tracking, and integration with food delivery platforms. We help food businesses serve the high-volume transit traffic.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Quick Ordering", "Delivery Tracking", "Menu Management", "Payment Gateway", "Review System", "Transit Offers"] },
    { title: "Transit SEO & Local Marketing", desc: "Specialized SEO for Charbagh businesses targeting railway passengers. We optimize for 'near Charbagh station', 'hotel near Lucknow railway', and similar transit searches. Our strategies capture the high footfall around the station.", icon: <Target className="w-6 h-6" />, features: ["Transit SEO", "Google Maps #1", "GMB Optimization", "Review Management", "Near Station Searches", "₹8K/Month Start"] },
    { title: "Retail & Shop Websites", desc: "Affordable websites for Charbagh's shops serving railway passengers. From travel essentials to gift shops, we create fast, mobile-friendly sites with WhatsApp integration and Google Maps directions. Starting at just ₹12,000.", icon: <Globe className="w-6 h-6" />, features: ["₹12K Starting", "Product Catalog", "WhatsApp Integration", "Google Maps", "Mobile Responsive", "Transit SEO"] },
    { title: "Healthcare & Clinic Solutions", desc: "Patient management for Charbagh's clinics serving travelers and local residents. Online appointment booking, telemedicine, and digital health records. We help healthcare providers serve both transit passengers and the local community.", icon: <Heart className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "Pharmacy Orders", "Doctor Profiles", "Reminders"] },
  ];

  const caseStudies = [
    { title: "Hotel Booking Platform", client: "Station View Hotels, Charbagh", description: "Built a hotel booking website with real-time availability and payment integration for a Charbagh hotel group. Increased direct bookings by 50% and saved ₹10L/year in OTA commissions while serving 200+ daily guests.", results: ["50% More Direct Bookings", "₹10L Saved/Year", "200+ Daily Guests", "4.8★ Rating"], tech: ["Next.js", "Node.js", "Stripe", "AWS", "Channel Manager"] },
    { title: "Food Delivery App", client: "Traveler's Kitchen, Charbagh", description: "Developed a quick food ordering app for a Charbagh restaurant serving railway passengers. Processed 800+ daily orders with 15-minute delivery guarantee and achieved 4.7★ rating.", results: ["800+ Daily Orders", "15 Min Delivery", "4.7★ Rating", "₹6L Monthly Revenue"], tech: ["Flutter", "Node.js", "Firebase", "Razorpay", "Google Maps"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Charbagh?", answer: "Web Nova Crew is the leading web development company in Charbagh, Lucknow. We specialize in hotel booking platforms, transport apps, and transit-focused digital solutions. Starting at ₹12,000 with 1-week delivery." },
    { question: "Can you build a hotel website for my Charbagh property?", answer: "We build hotel booking websites with real-time availability, payment gateway, and channel manager integration. Starting at ₹40,000. Our Charbagh hotel websites increase direct bookings by 50%." },
    { question: "How much does a transport app cost in Charbagh?", answer: "Transport and travel apps for Charbagh businesses start at ₹80,000 with ride booking and tracking features. Premium solutions with fleet management cost ₹1,50,000-₹3,00,000." },
    { question: "Do you offer SEO for Charbagh businesses?", answer: "We provide specialized transit SEO for Charbagh businesses to rank #1 for 'hotel near Charbagh', 'restaurant near Lucknow station' etc. Packages start at ₹8,000/month." },
    { question: "Can you create a website for my shop near Charbagh station?", answer: "We create affordable websites for Charbagh shops starting at ₹12,000. Includes Google My Business optimization for 'near Charbagh station' searches and WhatsApp integration." },
    { question: "How quickly can you deliver a Charbagh project?", answer: "Basic business websites in 5-7 days, hotel websites in 2-3 weeks, food ordering apps in 4-6 weeks. Express delivery available for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Alambagh", slug: "web-development-alambagh" },
    { name: "Hazratganj", slug: "web-development-hazratganj" },
    { name: "Lalbagh", slug: "web-development-lalbagh" },
    { name: "Aminabad", slug: "web-development-aminabad" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="Web Development Company in Charbagh, Lucknow | Hotels & Transport | Web Nova Crew" description="Top web development company in Charbagh, Lucknow. Hotel booking platforms, transport apps, restaurant websites. ₹12,000 onwards. Railway station area specialist." keywords="web development company in Charbagh, app developer in Charbagh Lucknow, digital marketing agency Charbagh, hotel website Charbagh, transport app Charbagh, website developer near Charbagh station" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" }, { name: "Charbagh", url: "https://webnovacrew.com/locations/web-development-charbagh" }]} />
      <ServiceSchema serviceName="Web Development in Charbagh" serviceDescription="Professional web and app development services in Charbagh, Lucknow. Hotel booking platforms, transport apps, restaurant websites, and transit-focused SEO." serviceUrl="https://webnovacrew.com/locations/web-development-charbagh" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-blue-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-indigo-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Charbagh, Lucknow • Railway Hub • Transit Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">Web Development in Charbagh</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Charbagh's <span className="text-blue-400 font-semibold">transit businesses</span> need digital solutions for travelers. We build <span className="text-indigo-400 font-semibold">hotel booking sites, transport apps & restaurant platforms</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving hotels, transport operators, restaurants & shops near Charbagh Railway Station.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400 mb-1">40+</div><div className="text-sm text-slate-400">Charbagh Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-indigo-400 mb-1">₹12K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-blue-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20"><div className="text-3xl font-bold text-indigo-400 mb-1">50%</div><div className="text-sm text-slate-400">More Direct Bookings</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Charbagh</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for transit hub businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Charbagh Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-blue-500/10 rounded-lg px-3 py-2 text-center"><span className="text-blue-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Charbagh Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Capture Charbagh's Transit Traffic</h2>
          <p className="text-xl text-slate-300 mb-8">Hotel booking sites, transport apps & transit-focused SEO</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
