import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, TreePine, Home, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentSushantGolfCity() {
  const services = [
    { title: "Golf & Sports Club Platforms", desc: "Digital platforms for Sushant Golf City's golf clubs and sports facilities. Membership management, booking systems, event management, and score tracking. We help sports clubs provide premium digital experiences to their members.", icon: <TreePine className="w-6 h-6" />, features: ["Membership Mgmt", "Booking System", "Event Management", "Score Tracking", "Mobile App", "Payment Integration"] },
    { title: "Luxury Real Estate Websites", desc: "Premium property platforms for Sushant Golf City's upscale developments. Virtual golf course tours, luxury villa showcases, and high-end booking systems. We help developers sell premium properties in this exclusive community.", icon: <Home className="w-6 h-6" />, features: ["Golf Course Tours", "Villa Showcases", "Luxury Booking", "Lead CRM", "Mobile Responsive", "Premium SEO"] },
    { title: "Society Management Apps", desc: "Digital platforms for Sushant Golf City's residential societies and golf villas. Maintenance payments, facility booking, community forums, and security management. We help premium communities go digital.", icon: <Building2 className="w-6 h-6" />, features: ["Payment Collection", "Facility Booking", "Community Forum", "Security Mgmt", "Visitor Tracking", "Resident App"] },
    { title: "Automotive & Golf Cart Solutions", desc: "Fleet management and booking apps for Sushant Golf City's golf carts, club vehicles, and transport services. Vehicle tracking, maintenance scheduling, and rental management. We help manage premium transportation services.", icon: <Car className="w-6 h-6" />, features: ["Fleet Tracking", "Maintenance Mgmt", "Rental Booking", "Payment Integration", "Mobile App", "Analytics Dashboard"] },
    { title: "Premium Local Business Websites", desc: "High-end websites for Sushant Golf City's shops, restaurants, and service providers. Premium design, WhatsApp integration, and local SEO. Starting at ₹25,000 for this exclusive community.", icon: <Globe className="w-6 h-6" />, features: ["₹25K Starting", "Premium Design", "WhatsApp Integration", "Golf View Maps", "Mobile Responsive", "Local SEO"] },
    { title: "Exclusive Community SEO", desc: "Specialized SEO targeting Sushant Golf City's affluent residents and visitors. We optimize for luxury services, premium retail, and exclusive experiences. Starting at ₹12,000/month for premium positioning.", icon: <Target className="w-6 h-6" />, features: ["Luxury SEO", "Affluent Targeting", "Google Maps #1", "GMB Optimization", "Premium Content", "₹12K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Golf Club Management System", client: "Sushant Golf Club", description: "Built a comprehensive golf club platform with membership management, tee time booking, and event management for Sushant Golf City. Serving 1,500+ members with 90% digital adoption.", results: ["1,500+ Members", "90% Digital Adoption", "4.9★ Rating", "₹20L Annual Revenue"], tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
    { title: "Luxury Villa Real Estate Portal", client: "Golf View Estates, Sushant Golf City", description: "Created a premium real estate portal with virtual golf course tours and luxury villa booking. Generated 200+ high-net-worth leads and sold 75% of luxury inventory within 6 months.", results: ["200+ HNW Leads", "75% Inventory Sold", "₹30Cr Revenue", "5.0★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Sushant Golf City?", answer: "XcFlown is the premium web development company for Sushant Golf City, Lucknow. We specialize in golf club platforms, luxury real estate websites, and society management apps. Starting at ₹25,000 with premium quality." },
    { question: "Can you build a golf club management system for Sushant Golf City?", answer: "We build golf club platforms with membership management, tee time booking, and event management. Starting at ₹1,00,000. Our systems serve 1,500+ members with 90% digital adoption." },
    { question: "How much does a luxury real estate website cost in Sushant Golf City?", answer: "Luxury real estate websites for Sushant Golf City start at ₹60,000 with virtual tours. Premium platforms with golf course views cost ₹1,50,000-₹3,00,000. We help generate 200+ high-net-worth leads." },
    { question: "Do you offer society management apps for Sushant Golf City?", answer: "We provide society management apps with maintenance collection, facility booking, and security management. Starting at ₹70,000 for Sushant Golf City residential communities." },
    { question: "Can you create a website for my Sushant Golf City business?", answer: "We create premium websites for Sushant Golf City businesses starting at ₹25,000. Includes luxury design, WhatsApp integration, and local SEO targeting affluent customers." },
    { question: "How quickly can you deliver a Sushant Golf City project?", answer: "Premium websites in 2-3 weeks, golf club systems in 6-8 weeks, real estate platforms in 4-6 weeks. We prioritize quality for this exclusive community." },
  ];

  const nearbyAreas = [
    { name: "Gomti Nagar Extension", slug: "web-development-gomti-nagar-extension" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
    { name: "Shaheed Path", slug: "web-development-shaheed-path" },
    { name: "Ashiyana", slug: "web-development-ashiyana" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Premium Web Development in Sushant Golf City, Lucknow | XcFlown" description="Premium web development company in Sushant Golf City, Lucknow. Golf club platforms, luxury real estate, society management apps. ₹25,000 onwards. Exclusive community specialist." keywords="web development company Sushant Golf City, app developer Sushant Golf City Lucknow, digital marketing agency Sushant Golf City, golf club website Sushant Golf City, luxury real estate developer Sushant Golf City" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Sushant Golf City", url: "https://xcflown.com/locations/web-development-sushant-golf-city" }]} />
      <ServiceSchema serviceName="Web Development in Sushant Golf City" serviceDescription="Premium web and app development services in Sushant Golf City, Lucknow. Golf club management systems, luxury real estate platforms, society management apps, and exclusive community solutions." serviceUrl="https://xcflown.com/locations/web-development-sushant-golf-city" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-emerald-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-green-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Sushant Golf City, Lucknow • Golf Community • Luxury Living</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">Web Development in Sushant Golf City</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Sushant Golf City's <span className="text-emerald-400 font-semibold">exclusive golf community</span> needs premium digital solutions. We build <span className="text-green-400 font-semibold">golf club platforms, luxury real estate & society apps</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving golf clubs, luxury developers, residential societies & premium businesses in Sushant Golf City.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Premium Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">25+</div><div className="text-sm text-slate-400">Golf City Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400 mb-1">₹25K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">2-3</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-green-400 mb-1">200+</div><div className="text-sm text-slate-400">HNW Leads</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Sushant Golf City</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Premium digital solutions for an exclusive community</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sushant Golf City Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="text-emerald-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-emerald-500/10 rounded-lg px-3 py-2 text-center"><span className="text-emerald-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sushant Golf City Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-green-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Premium Digital Solutions for Sushant Golf City</h2>
          <p className="text-xl text-slate-300 mb-8">Golf club platforms, luxury real estate & exclusive society apps</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Premium Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
