import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Home, TrendingUp as Trend, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentVrindavanYojna() {
  const services = [
    { title: "Real Estate & Builder Websites", desc: "Premium property listing platforms for Vrindavan Yojna's developers and real estate agents. Features include virtual property tours, floor plan viewers, EMI calculators, and lead management CRM. We help builders showcase their projects to potential buyers searching for homes in this developing area.", icon: <Home className="w-6 h-6" />, features: ["Virtual Tours", "Floor Plans", "EMI Calculator", "Lead CRM", "Mobile Responsive", "SEO Optimized"] },
    { title: "Startup & Business Solutions", desc: "Modern websites and apps for Vrindavan Yojna's emerging businesses and startups. We understand the entrepreneurial spirit of this developing area and create digital solutions that help new businesses establish their brand. Fast delivery and affordable pricing for startups.", icon: <Trend className="w-6 h-6" />, features: ["Startup MVPs", "Brand Websites", "Fast Delivery", "Affordable Pricing", "Mobile Apps", "Analytics Setup"] },
    { title: "Retail & Service Business Websites", desc: "Professional websites for Vrindavan Yojna's growing retail and service sector. From new shops opening in the area to service providers, we create fast, SEO-optimized websites that help businesses get found online. Starting at just ₹15,000.", icon: <Globe className="w-6 h-6" />, features: ["₹15K Starting", "SEO Optimized", "Mobile Responsive", "WhatsApp Integration", "Google Maps", "Contact Forms"] },
    { title: "Education & Training Platforms", desc: "Learning apps and websites for Vrindavan Yojna's educational institutions and training centers. Online courses, student management, progress tracking, and fee collection. We help educators reach students in this rapidly developing residential hub.", icon: <GraduationCap className="w-6 h-6" />, features: ["Online Courses", "Student Portal", "Progress Tracking", "Fee Collection", "Mobile App", "Live Classes"] },
    { title: "Healthcare Clinic Solutions", desc: "Patient management and appointment systems for Vrindavan Yojna's new clinics and healthcare providers. Online booking, telemedicine, digital records, and pharmacy integration. We help medical practices serve the growing population.", icon: <Heart className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "Pharmacy Orders", "Doctor Profiles", "Reminders"] },
    { title: "New Area SEO Strategy", desc: "Specialized digital marketing for Vrindavan Yojna businesses targeting early adopters and new residents. We help businesses establish visibility in this growing area with local SEO, Google Ads, and social media. Starting at ₹8,000/month.", icon: <Target className="w-6 h-6" />, features: ["Local SEO", "Google Ads", "Social Media", "GMB Setup", "Content Marketing", "₹8K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Builder Project Website", client: "Green Valley Builders, Vrindavan Yojna", description: "Created a premium real estate website with virtual tours, floor plans, and lead management for a builder in Vrindavan Yojna. Generated 300+ qualified leads and sold 80% of units within 4 months of launch.", results: ["300+ Leads", "80% Units Sold", "₹15Cr Revenue", "4.9★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"] },
    { title: "Coaching Center Platform", client: "Excel Academy, Vrindavan Yojna", description: "Built an education platform with online tests, video lectures, and student management for a coaching center serving Vrindavan Yojna residents. Enrolled 2,500+ students with 90% satisfaction rate.", results: ["2.5K+ Students", "90% Satisfaction", "4.7★ Rating", "₹12L Revenue"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Vrindavan Yojna?", answer: "XcFlown is the leading web development company in Vrindavan Yojna, Lucknow. We specialize in real estate platforms, startup solutions, and business websites for this developing area. Starting at ₹15,000 with 1-2 week delivery." },
    { question: "Can you build a real estate website for my Vrindavan Yojna project?", answer: "We build premium real estate websites with virtual tours, floor plans, and lead management for Vrindavan Yojna builders. Starting at ₹50,000 with 3-4 week delivery. Our builder websites generate 300+ leads monthly." },
    { question: "How much does a startup website cost in Vrindavan Yojna?", answer: "Startup websites in Vrindavan Yojna start at ₹15,000 for professional sites. MVP apps cost ₹40,000-₹1,00,000. We offer special startup packages with flexible payment terms for new businesses." },
    { question: "Do you offer SEO for new businesses in Vrindavan Yojna?", answer: "We provide local SEO and digital marketing for Vrindavan Yojna businesses starting at ₹8,000/month. We help new businesses get visibility in this developing area through Google Ads, social media, and local optimization." },
    { question: "Can you create an education platform for my Vrindavan Yojna coaching center?", answer: "We build education platforms with online tests, video courses, and student management. Starting at ₹50,000 with 4-6 week delivery. Our coaching platforms serve 2,500+ students." },
    { question: "How quickly can you deliver a project in Vrindavan Yojna?", answer: "Business websites in 1-2 weeks, real estate sites in 3-4 weeks, education platforms in 4-6 weeks. We offer express delivery for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
    { name: "Ashiyana", slug: "web-development-ashiyana" },
    { name: "Gomti Nagar Extension", slug: "web-development-gomti-nagar-extension" },
    { name: "Shaheed Path", slug: "web-development-shaheed-path" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Vrindavan Yojna, Lucknow | XcFlown" description="Top web development company in Vrindavan Yojna, Lucknow. Real estate websites, startup solutions, business platforms. ₹15,000 onwards. Developing area specialist." keywords="web development company in Vrindavan Yojna, app developer in Vrindavan Yojna Lucknow, digital marketing agency Vrindavan Yojna, real estate website developer Vrindavan Yojna, startup app developer Vrindavan Yojna" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Vrindavan Yojna", url: "https://xcflown.com/locations/web-development-vrindavan-yojna" }]} />
      <ServiceSchema serviceName="Web Development in Vrindavan Yojna" serviceDescription="Professional web and app development services in Vrindavan Yojna, Lucknow. Real estate platforms, startup solutions, business websites, and education apps." serviceUrl="https://xcflown.com/locations/web-development-vrindavan-yojna" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-lime-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-orange-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-green-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Vrindavan Yojna, Lucknow • Fast Growing • New Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-lime-100 to-green-100 bg-clip-text text-transparent">Web Development in Vrindavan Yojna</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Vrindavan Yojna's <span className="text-orange-400 font-semibold">new businesses & builders</span> need modern digital solutions. We build <span className="text-green-400 font-semibold">real estate platforms, startup apps & business websites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving real estate developers, startups, new shops & clinics in Vrindavan Yojna.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">30+</div><div className="text-sm text-slate-400">Local Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-green-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-green-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Vrindavan Yojna</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for a growing residential hub</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Vrindavan Yojna Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
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

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Vrindavan Yojna Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-lime-950/50 to-green-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Grow Your Vrindavan Yojna Business Online</h2>
          <p className="text-xl text-slate-300 mb-8">Real estate platforms, startup solutions & business websites</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
