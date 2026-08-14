import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, TrendingUp as Trend, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentShaheedPath() {
  const services = [
    { title: "Premium Real Estate Websites", desc: "High-end property platforms for Shaheed Path's upscale real estate developments. Virtual tours, 3D walkthroughs, premium booking systems, and luxury lead management. We help premium developers showcase projects to high-value buyers along this premium corridor.", icon: <Home className="w-6 h-6" />, features: ["3D Virtual Tours", "Premium Booking", "Lead CRM", "Brochure Downloads", "Mobile Responsive", "Luxury SEO"] },
    { title: "Corporate & IT Park Solutions", desc: "Professional websites and intranet solutions for Shaheed Path's corporate offices and IT parks. Employee portals, facility management, and corporate branding. We serve the growing corporate ecosystem along this premium corridor.", icon: <Briefcase className="w-6 h-6" />, features: ["Corporate Websites", "Employee Portals", "Facility Mgmt", "Branding", "Mobile Apps", "Analytics"] },
    { title: "Startup & Tech Company Websites", desc: "Modern, tech-forward websites for startups and tech companies on Shaheed Path. Fast loading, cutting-edge design, and investor-ready presentation. Starting at ₹25,000 for premium tech company websites.", icon: <Trend className="w-6 h-6" />, features: ["₹25K Starting", "Tech-forward Design", "Fast Loading", "Investor Ready", "Mobile Responsive", "Analytics Setup"] },
    { title: "Premium Retail & Showrooms", desc: "Luxury e-commerce and showroom websites for Shaheed Path's premium retail businesses. High-end product showcases, appointment booking, and personalized shopping experiences. We match the premium positioning of Shaheed Path businesses.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Luxury Showcases", "Appointment Booking", "Personalized UX", "Payment Gateway", "Mobile Responsive", "Premium SEO"] },
    { title: "Premium Corridor SEO", desc: "High-end SEO targeting affluent buyers and corporate clients on Shaheed Path. We optimize for luxury real estate, premium services, and corporate searches. Starting at ₹15,000/month for premium positioning.", icon: <Target className="w-6 h-6" />, features: ["Premium SEO", "Luxury Targeting", "Google Maps #1", "Corporate SEO", "Content Marketing", "₹15K/Month Start"] },
    { title: "Healthcare & Wellness Apps", desc: "Premium healthcare and wellness platforms for Shaheed Path's medical facilities and wellness centers. Telemedicine, appointment booking, and patient management with premium UX. We serve the high-end healthcare market.", icon: <Heart className="w-6 h-6" />, features: ["Telemedicine", "Appointment Booking", "Health Records", "Premium UX", "Mobile App", "Reminders"] },
  ];

  const caseStudies = [
    { title: "Luxury Real Estate Platform", client: "Prestige Developers, Shaheed Path", description: "Built a premium real estate platform with 3D virtual tours and luxury booking for a Shaheed Path developer. Generated 500+ high-value leads and sold 85% of luxury units within 8 months.", results: ["500+ Luxury Leads", "85% Units Sold", "₹25Cr Revenue", "5.0★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"] },
    { title: "Corporate Intranet Portal", client: "TechPark Offices, Shaheed Path", description: "Created a corporate intranet with employee management, facility booking, and internal communications for an IT park on Shaheed Path. Serving 2,000+ employees with 95% adoption rate.", results: ["2K+ Employees", "95% Adoption", "80% Efficiency", "4.9★ Rating"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "SSO Integration"] },
  ];

  const faqs = [
    { question: "Which is the best web development company on Shaheed Path?", answer: "Web Nova Crew is the premium web development company for Shaheed Path, Lucknow. We specialize in luxury real estate platforms, corporate solutions, and tech company websites. Starting at ₹25,000 with premium quality." },
    { question: "Can you build a luxury real estate website for my Shaheed Path project?", answer: "We build premium real estate websites with 3D virtual tours and luxury booking systems. Starting at ₹80,000. Our Shaheed Path platforms generate 500+ high-value leads and sell 85% of luxury inventory." },
    { question: "How much does a corporate website cost on Shaheed Path?", answer: "Corporate websites for Shaheed Path businesses start at ₹40,000. Intranet portals and employee management systems cost ₹1,00,000-₹3,00,000 depending on features." },
    { question: "Do you offer premium SEO for Shaheed Path businesses?", answer: "We provide luxury-focused SEO for Shaheed Path targeting high-value buyers and corporate clients. Packages start at ₹15,000/month with premium positioning." },
    { question: "Can you create a tech startup website for my Shaheed Path office?", answer: "We create tech-forward startup websites with modern design and investor-ready presentation. Starting at ₹25,000 for Shaheed Path tech companies." },
    { question: "How quickly can you deliver a Shaheed Path project?", answer: "Premium websites in 2-3 weeks, real estate platforms in 4-6 weeks, corporate portals in 6-10 weeks. We prioritize quality for premium positioning." },
  ];

  const nearbyAreas = [
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
    { name: "Gomti Nagar Extension", slug: "web-development-gomti-nagar-extension" },
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="Premium Web Development on Shaheed Path, Lucknow | Web Nova Crew" description="Premium web development company on Shaheed Path, Lucknow. Luxury real estate websites, corporate solutions, tech company platforms. ₹25,000 onwards. Premium corridor specialist." keywords="web development company Shaheed Path, app developer Shaheed Path Lucknow, digital marketing agency Shaheed Path, luxury real estate website Shaheed Path, corporate website developer Shaheed Path" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" }, { name: "Shaheed Path", url: "https://webnovacrew.com/locations/web-development-shaheed-path" }]} />
      <ServiceSchema serviceName="Web Development on Shaheed Path" serviceDescription="Premium web and app development services on Shaheed Path, Lucknow. Luxury real estate platforms, corporate intranets, tech company websites, and high-end digital marketing." serviceUrl="https://webnovacrew.com/locations/web-development-shaheed-path" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-violet-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-purple-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Shaheed Path, Lucknow • Premium Corridor • IT & Corporate Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">Premium Web Development on Shaheed Path</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Shaheed Path's <span className="text-violet-400 font-semibold">luxury real estate & corporate offices</span> need premium digital solutions. We build <span className="text-purple-400 font-semibold">high-end websites, corporate portals & luxury platforms</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving real estate developers, IT companies, corporate offices & premium retail on Shaheed Path.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Premium Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400 mb-1">35+</div><div className="text-sm text-slate-400">Path Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">₹25K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400 mb-1">2-3</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">500+</div><div className="text-sm text-slate-400">Luxury Leads</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services on Shaheed Path</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Premium digital solutions for luxury businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
                <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Shaheed Path Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
                <div className="text-violet-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-violet-500/10 rounded-lg px-3 py-2 text-center"><span className="text-violet-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Shaheed Path Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-violet-500/50 hover:text-violet-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Premium Digital Solutions for Shaheed Path</h2>
          <p className="text-xl text-slate-300 mb-8">Luxury real estate platforms, corporate portals & tech websites</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Premium Quote</Link></Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
