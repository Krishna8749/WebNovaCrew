import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, TrendingUp as Trend, Home, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentSultanpurRoad() {
  const services = [
    { title: "Real Estate Development Websites", desc: "Property platforms for Sultanpur Road's emerging real estate projects. Virtual tours, floor plans, booking systems, and lead management for developers. We help capture buyers looking for properties along this developing corridor.", icon: <Home className="w-6 h-6" />, features: ["Virtual Tours", "Floor Plans", "Booking System", "Lead CRM", "Mobile Responsive", "SEO Optimized"] },
    { title: "Industrial & Warehouse Solutions", desc: "Digital platforms for Sultanpur Road's industrial area, warehouses, and logistics businesses. Inventory systems, fleet management, and B2B portals. We help industrial operations along this corridor go digital.", icon: <Factory className="w-6 h-6" />, features: ["B2B Portals", "Inventory Systems", "Fleet Management", "Logistics Tracking", "Mobile Apps", "Analytics Dashboard"] },
    { title: "New Business Websites", desc: "Modern websites for startups and new businesses setting up on Sultanpur Road. Fast delivery, affordable pricing, and scalable designs. Starting at just ₹15,000 with free hosting first year.", icon: <Trend className="w-6 h-6" />, features: ["₹15K Starting", "Fast Delivery", "Scalable Design", "Mobile Responsive", "SEO Ready", "Analytics Setup"] },
    { title: "Transport & Logistics Apps", desc: "Fleet management and logistics apps for Sultanpur Road's transport businesses. Route optimization, vehicle tracking, driver management, and delivery tracking. Perfect for the logistics corridor.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Route Optimization", "Vehicle Tracking", "Driver Management", "Delivery Tracking", "Payment Integration", "Real-time Updates"] },
    { title: "Corridor-Specific SEO", desc: "SEO targeting Sultanpur Road's growing market. We optimize for 'Sultanpur Road Lucknow', 'warehouses on Sultanpur Road', and corridor-specific searches. Starting at ₹8,000/month.", icon: <Target className="w-6 h-6" />, features: ["Corridor SEO", "Google Maps #1", "GMB Optimization", "Local Targeting", "Content Marketing", "₹8K/Month Start"] },
    { title: "Education & Training Platforms", desc: "Learning management systems for Sultanpur Road's educational institutions and training centers. Online classes, student tracking, and fee management for the growing student population.", icon: <GraduationCap className="w-6 h-6" />, features: ["Online Classes", "Student Portal", "Fee Collection", "Progress Tracking", "Mobile App", "Payment Integration"] },
  ];

  const caseStudies = [
    { title: "Warehouse Management System", client: "LogiCorp Warehouses, Sultanpur Road", description: "Built a warehouse management system with inventory tracking, order management, and logistics integration for Sultanpur Road warehouses. Increased efficiency by 200% and reduced errors by 80%.", results: ["200% Efficiency", "80% Error Reduction", "50K+ Orders", "4.8★ Rating"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
    { title: "Real Estate Portal", client: "Sultanpur Properties", description: "Created a real estate portal with virtual tours and lead management for a developer on Sultanpur Road. Generated 300+ leads and sold 65% of inventory within 5 months.", results: ["300+ Leads", "65% Inventory Sold", "₹10Cr Revenue", "4.7★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"] },
  ];

  const faqs = [
    { question: "Which is the best web development company on Sultanpur Road?", answer: "Web Nova Crew is the leading web development company for Sultanpur Road, Lucknow. We specialize in industrial solutions, real estate platforms, and logistics apps. Starting at ₹15,000 with 1-2 week delivery." },
    { question: "Can you build a warehouse management system for my Sultanpur Road facility?", answer: "We build warehouse management systems with inventory tracking, order management, and logistics integration. Starting at ₹80,000. Our systems increase efficiency by 200%." },
    { question: "How much does a real estate website cost on Sultanpur Road?", answer: "Real estate websites for Sultanpur Road developments start at ₹50,000 with virtual tours and booking systems. Premium platforms cost ₹1,00,000-₹2,50,000." },
    { question: "Do you offer SEO for Sultanpur Road businesses?", answer: "We provide specialized SEO for Sultanpur Road targeting industrial and logistics searches. Packages start at ₹8,000/month." },
    { question: "Can you create a logistics app for my Sultanpur Road transport business?", answer: "We create logistics apps with route optimization, tracking, and fleet management. Starting at ₹1,00,000 with 6-8 week delivery." },
    { question: "How quickly can you deliver a Sultanpur Road project?", answer: "Business websites in 1-2 weeks, warehouse systems in 4-6 weeks, real estate sites in 3-4 weeks. Express delivery available." },
  ];

  const nearbyAreas = [
    { name: "Faizabad Road", slug: "web-development-faizabad-road" },
    { name: "Shaheed Path", slug: "web-development-shaheed-path" },
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="Web Development Company on Sultanpur Road, Lucknow | Web Nova Crew" description="Top web development company on Sultanpur Road, Lucknow. Warehouse systems, real estate websites, logistics apps. ₹15,000 onwards. Industrial corridor specialist." keywords="web development company Sultanpur Road, app developer Sultanpur Road Lucknow, digital marketing agency Sultanpur Road, warehouse system developer Sultanpur Road, logistics app Sultanpur Road" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" }, { name: "Sultanpur Road", url: "https://webnovacrew.com/locations/web-development-sultanpur-road" }]} />
      <ServiceSchema serviceName="Web Development on Sultanpur Road" serviceDescription="Professional web and app development services on Sultanpur Road, Lucknow. Warehouse management systems, real estate platforms, logistics apps, and industrial solutions." serviceUrl="https://webnovacrew.com/locations/web-development-sultanpur-road" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-orange-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-amber-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Sultanpur Road, Lucknow • Industrial Corridor • Logistics Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent">Web Development on Sultanpur Road</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Sultanpur Road's <span className="text-orange-400 font-semibold">industrial & logistics growth</span> needs digital solutions. We build <span className="text-amber-400 font-semibold">warehouse systems, real estate platforms & logistics apps</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving warehouses, factories, real estate developers & transport businesses on Sultanpur Road.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">25+</div><div className="text-sm text-slate-400">Road Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">200%</div><div className="text-sm text-slate-400">Efficiency Gain</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services on Sultanpur Road</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Industrial and logistics digital solutions</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sultanpur Road Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="text-orange-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-orange-500/10 rounded-lg px-3 py-2 text-center"><span className="text-orange-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sultanpur Road Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-950/50 to-amber-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Digitize Your Sultanpur Road Operations</h2>
          <p className="text-xl text-slate-300 mb-8">Warehouse systems, logistics apps & real estate platforms</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
