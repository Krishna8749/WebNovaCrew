import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentGomtiNagarExtension() {
  const services = [
    { title: "Startup Web & App Development", desc: "Rapid MVP development for Gomti Nagar Extension's growing startup community. We build investor-ready products in 2-4 weeks with React, Next.js, and Flutter. Perfect for startups in the new commercial complexes along Shaheed Path who need to launch fast and iterate quickly.", icon: <Rocket className="w-6 h-6" />, features: ["2-4 Week MVPs", "Investor-Ready", "Scalable Architecture", "Analytics Built-in"] },
    { title: "E-Commerce Development", desc: "Online stores for Gomti Nagar Extension's retail businesses with Razorpay, UPI, inventory management, and delivery tracking. We help new businesses establish their online presence quickly and start selling from day one.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Razorpay & UPI", "Inventory System", "Delivery Tracking", "WhatsApp Commerce"] },
    { title: "Real Estate Platforms", desc: "Property listing websites and apps for Gomti Nagar Extension's booming real estate market. Features include 360° virtual tours, AI price estimation, lead management CRM, and WhatsApp integration for instant buyer communication.", icon: <Building2 className="w-6 h-6" />, features: ["Virtual Tours", "AI Price Estimation", "Lead CRM", "WhatsApp Integration"] },
    { title: "Digital Marketing & SEO", desc: "Local SEO and digital marketing for Gomti Nagar Extension businesses. We optimize for 'near Gomti Nagar Extension' searches, manage Google Business Profiles, and run targeted Google Ads campaigns to capture the area's growing customer base.", icon: <Target className="w-6 h-6" />, features: ["Local SEO #1", "Google Ads", "GMB Optimization", "Social Media"] },
    { title: "Education Platform Development", desc: "Learning management systems and coaching apps for Gomti Nagar Extension's educational institutions. Live class streaming, test series, student progress tracking, and payment integration for online education businesses.", icon: <GraduationCap className="w-6 h-6" />, features: ["Live Classes", "Test Series", "Student Tracking", "Payment Integration"] },
    { title: "Healthcare App Development", desc: "Patient management and telemedicine apps for Gomti Nagar Extension's healthcare providers. Online appointment booking, video consultations, digital health records, and pharmacy integration for modern healthcare delivery.", icon: <Heart className="w-6 h-6" />, features: ["Telemedicine", "Appointment Booking", "Health Records", "Pharmacy Integration"] },
  ];

  const caseStudies = [
    { title: "EdTech Learning Platform", client: "EduPro Academy, Gomti Nagar Extension", description: "Built an online learning platform with live classes, AI-powered doubt resolution, and progress analytics. The platform enrolled 10,000+ students and generated ₹15L monthly revenue within 6 months.", results: ["10K+ Students", "₹15L Monthly Revenue", "4.7★ Rating", "95% Renewal Rate"], tech: ["Next.js", "WebRTC", "Python AI", "AWS", "PostgreSQL"] },
    { title: "Real Estate Listing Platform", client: "PropTech Realty, Shaheed Path", description: "Developed a property listing platform with virtual tours and AI-powered price estimation for Gomti Nagar Extension projects. Closed ₹2Cr in deals through the platform within 3 months.", results: ["500+ Listings", "₹2Cr Deals", "200+ Leads/Month", "#1 in Lucknow"], tech: ["React", "Three.js", "Node.js", "MongoDB", "AWS"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Gomti Nagar Extension?", answer: "XcFlown is the top web development company near Gomti Nagar Extension, Lucknow. We build modern, responsive websites and apps for the area's growing startup and business community. Starting at ₹15,000 with 1-2 week delivery." },
    { question: "How much does a website cost in Gomti Nagar Extension?", answer: "Website development in Gomti Nagar Extension starts at ₹15,000 for basic sites, ₹40,000-₹1,00,000 for business websites, and ₹1,50,000+ for e-commerce platforms. All packages include SEO optimization and mobile responsiveness." },
    { question: "Can you build a real estate app for my Gomti Nagar Extension project?", answer: "We specialize in real estate app development for Gomti Nagar Extension projects with property listings, virtual tours, CRM integration, and lead management. Starting at ₹1,50,000 with 6-8 week delivery." },
    { question: "How long does app development take near Gomti Nagar Extension?", answer: "MVP apps: 2-4 weeks, business apps: 4-6 weeks, enterprise apps: 8-12 weeks depending on complexity. We follow agile methodology with weekly demos." },
    { question: "Do you offer digital marketing near Gomti Nagar Extension?", answer: "We provide full digital marketing including local SEO, Google Business Profile optimization, social media management, and PPC advertising for Gomti Nagar Extension businesses. Starting at ₹8,000/month." },
  ];

  const nearbyAreas = [
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
    { name: "Shaheed Path", slug: "web-development-shaheed-path" },
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO 
        title="Web Development Company in Gomti Nagar Extension, Lucknow | XcFlown"
        description="Top web & app development company near Gomti Nagar Extension, Lucknow. Startup MVPs, real estate platforms, e-commerce sites. ₹15,000 onwards. Fast delivery."
        keywords="web development company in Gomti Nagar Extension, app developer Gomti Nagar Extension, digital marketing agency Gomti Nagar Extension, IT company near Gomti Nagar Extension, website developer Gomti Nagar Extension Lucknow"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://xcflown.com" },
        { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" },
        { name: "Gomti Nagar Extension", url: "https://xcflown.com/locations/web-development-gomti-nagar-extension" }
      ]} />
      <ServiceSchema serviceName="Web Development in Gomti Nagar Extension" serviceDescription="Professional web and app development services near Gomti Nagar Extension, Lucknow. Startup MVPs, real estate platforms, and e-commerce solutions." serviceUrl="https://xcflown.com/locations/web-development-gomti-nagar-extension" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-emerald-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-teal-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Gomti Nagar Extension, Lucknow • Fastest Growing Corridor</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
              Web Development Company in Gomti Nagar Extension
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Lucknow's <span className="text-emerald-400 font-semibold">fastest-growing business corridor</span> needs modern digital solutions. We build <span className="text-teal-400 font-semibold">websites, apps & platforms</span> for Gomti Nagar Extension's new businesses.
            </p>
            <p className="text-lg text-slate-400 mb-8">Serving startups, real estate developers & businesses along Shaheed Path.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/918360723410" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">40+</div><div className="text-sm text-slate-400">Local Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">2-4</div><div className="text-sm text-slate-400">Weeks MVP</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-emerald-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">100%</div><div className="text-sm text-slate-400">Satisfaction</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Gomti Nagar Extension</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for the area's rapidly growing business community</p>
          </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gomti Nagar Extension Success Stories</h2>
          </div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gomti Nagar Extension FAQs</h2></div>
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

      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Launch Your Digital Presence?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 40+ Gomti Nagar Extension businesses who chose us</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
