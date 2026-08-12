import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, TrendingUp as Trend, Home, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentFaizabadRoad() {
  const services = [
    { title: "Real Estate Development Websites", desc: "Property platforms for Faizabad Road's growing real estate developments. Virtual tours, floor plans, booking systems, and lead management for builders and developers along this expansion corridor. We help capture buyers looking for properties on Faizabad Road.", icon: <Home className="w-6 h-6" />, features: ["Virtual Tours", "Floor Plans", "Booking System", "Lead CRM", "Mobile Responsive", "SEO Optimized"] },
    { title: "Industrial & Business Solutions", desc: "B2B websites and apps for Faizabad Road's industrial units, warehouses, and businesses. Inventory management, dealer portals, and logistics tracking. We help industrial businesses digitize their operations along this commercial corridor.", icon: <Truck className="w-6 h-6" />, features: ["B2B Portals", "Inventory Mgmt", "Dealer Systems", "Logistics Tracking", "Mobile Apps", "Analytics"] },
    { title: "Startup & New Business Websites", desc: "Modern websites for new businesses and startups setting up along Faizabad Road. Fast delivery, affordable pricing, and scalable solutions for entrepreneurs. Starting at just ₹15,000.", icon: <Trend className="w-6 h-6" />, features: ["₹15K Starting", "Fast Delivery", "Scalable Design", "Mobile Responsive", "SEO Ready", "Analytics Setup"] },
    { title: "Retail & Showroom Platforms", desc: "E-commerce and showroom websites for Faizabad Road's retail businesses. Product catalogs, WhatsApp integration, and local SEO to capture the growing customer base along this corridor.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Product Catalogs", "WhatsApp Orders", "Payment Gateway", "Mobile Responsive", "Local SEO", "Inventory Mgmt"] },
    { title: "Growth Corridor SEO", desc: "Specialized SEO for Faizabad Road businesses targeting the expanding residential and commercial market. We optimize for 'Faizabad Road Lucknow', 'properties on Faizabad Road', and corridor-specific searches. Starting at ₹8,000/month.", icon: <Target className="w-6 h-6" />, features: ["Corridor SEO", "Google Maps #1", "GMB Optimization", "Content Marketing", "Local Targeting", "₹8K/Month Start"] },
    { title: "Education & Training Solutions", desc: "Learning platforms for Faizabad Road's schools, colleges, and training centers. Online classes, student management, and fee collection. We help educational institutions serve the growing population along this corridor.", icon: <GraduationCap className="w-6 h-6" />, features: ["Online Classes", "Student Portal", "Fee Collection", "Progress Tracking", "Mobile App", "Payment Integration"] },
  ];

  const caseStudies = [
    { title: "Builder Project Website", client: "Highway Homes, Faizabad Road", description: "Built a real estate website with virtual tours and booking system for a Faizabad Road development project. Generated 400+ leads and sold 70% of units within 6 months.", results: ["400+ Leads", "70% Units Sold", "₹12Cr Revenue", "4.8★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"] },
    { title: "Industrial B2B Portal", client: "Faizabad Road Industries", description: "Created a B2B portal with dealer management and inventory tracking for businesses on Faizabad Road. Onboarded 150+ dealers and processed ₹5Cr in transactions.", results: ["150+ Dealers", "₹5Cr Transactions", "300% Efficiency", "4.7★ Rating"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
  ];

  const faqs = [
    { question: "Which is the best web development company on Faizabad Road?", answer: "XcFlown is the leading web development company for Faizabad Road, Lucknow. We specialize in real estate platforms, industrial B2B solutions, and new business websites. Starting at ₹15,000 with 1-2 week delivery." },
    { question: "Can you build a real estate website for my Faizabad Road project?", answer: "We build real estate websites with virtual tours and booking systems for Faizabad Road developments. Starting at ₹50,000. Our platforms generate 400+ leads and help sell 70%+ of units." },
    { question: "How much does a B2B portal cost for Faizabad Road businesses?", answer: "B2B portals for Faizabad Road industrial businesses start at ₹80,000 with dealer management and inventory tracking. Premium solutions cost ₹1,50,000-₹3,00,000." },
    { question: "Do you offer SEO for Faizabad Road businesses?", answer: "We provide specialized SEO for Faizabad Road targeting 'Faizabad Road Lucknow', 'properties on Faizabad Road' searches. Packages start at ₹8,000/month." },
    { question: "Can you create a website for my new Faizabad Road business?", answer: "We create modern websites for new businesses on Faizabad Road starting at ₹15,000. Includes Google My Business optimization and local SEO for the corridor." },
    { question: "How quickly can you deliver a Faizabad Road project?", answer: "Business websites in 1-2 weeks, real estate sites in 3-4 weeks, B2B portals in 6-8 weeks. Express delivery available for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Sultanpur Road", slug: "web-development-sultanpur-road" },
    { name: "Gomti Nagar Extension", slug: "web-development-gomti-nagar-extension" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company on Faizabad Road, Lucknow | XcFlown" description="Top web development company on Faizabad Road, Lucknow. Real estate websites, B2B portals, business solutions. ₹15,000 onwards. Growth corridor specialist." keywords="web development company Faizabad Road, app developer Faizabad Road Lucknow, digital marketing agency Faizabad Road, real estate website Faizabad Road, B2B portal developer Faizabad Road" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Faizabad Road", url: "https://xcflown.com/locations/web-development-faizabad-road" }]} />
      <ServiceSchema serviceName="Web Development on Faizabad Road" serviceDescription="Professional web and app development services on Faizabad Road, Lucknow. Real estate platforms, industrial B2B portals, business websites, and growth corridor SEO." serviceUrl="https://xcflown.com/locations/web-development-faizabad-road" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-rose-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-pink-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-rose-300">Faizabad Road, Lucknow • Growth Corridor • Expansion Zone</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent">Web Development on Faizabad Road</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Faizabad Road's <span className="text-rose-400 font-semibold">real estate & industrial growth</span> needs digital solutions. We build <span className="text-pink-400 font-semibold">property platforms, B2B portals & business websites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving builders, industrial units, new businesses & retail developments on Faizabad Road.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">30+</div><div className="text-sm text-slate-400">Road Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">400+</div><div className="text-sm text-slate-400">Leads Generated</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services on Faizabad Road</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for the growth corridor</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-rose-500/50 transition-all">
                <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-rose-500/10 text-rose-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Faizabad Road Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-rose-500/50 transition-all">
                <div className="text-rose-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-rose-500/10 rounded-lg px-3 py-2 text-center"><span className="text-rose-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Faizabad Road Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-rose-500/50 hover:text-rose-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-950/50 to-pink-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Grow Your Faizabad Road Business</h2>
          <p className="text-xl text-slate-300 mb-8">Real estate platforms, B2B portals & business websites</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
