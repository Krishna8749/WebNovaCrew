import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Sparkles, Briefcase, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentMahanagar() {
  const services = [
    { title: "Premium Business Websites", desc: "High-end websites for Mahanagar's professional offices and boutique businesses. We create sophisticated, brand-aligned designs that reflect the premium positioning of Mahanagar businesses. Clean aesthetics, smooth animations, and luxury-grade UI patterns starting at ₹30,000.", icon: <Globe className="w-6 h-6" />, features: ["Premium UI/UX", "Brand Identity", "Smooth Animations", "Mobile Responsive", "SEO Optimized", "Analytics Setup"] },
    { title: "Boutique & Retail Solutions", desc: "E-commerce platforms for Mahanagar's boutique stores and premium retailers. Features include curated collections, personalized recommendations, lookbook showcases, and luxury shopping experiences. We create online stores that match the sophistication of Mahanagar's shopping scene.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Curated Collections", "Personalized Recs", "Lookbook Showcase", "Premium Checkout", "WhatsApp Orders", "Review System"] },
    { title: "Cafe & Restaurant Platforms", desc: "Beautiful websites and ordering apps for Mahanagar's cafes and restaurants. Table reservation systems, online ordering, menu showcases with high-quality imagery, and loyalty programs. We help Mahanagar's food businesses create Instagram-worthy digital experiences.", icon: <Coffee className="w-6 h-6" />, features: ["Table Reservation", "Online Ordering", "Menu Showcase", "Loyalty Program", "Instagram Integration", "Review System"] },
    { title: "Wellness & Healthcare Apps", desc: "Appointment booking and telemedicine platforms for Mahanagar's wellness centers, spas, and premium clinics. Features include service catalogs, therapist profiles, package bookings, and membership management. We create calming, trust-building digital experiences.", icon: <Heart className="w-6 h-6" />, features: ["Service Catalogs", "Therapist Profiles", "Package Bookings", "Membership Mgmt", "Telemedicine", "Reminders"] },
    { title: "Professional Services Websites", desc: "Authoritative websites for Mahanagar's consultants, designers, and professional service providers. Portfolio showcases, service descriptions, client testimonials, and appointment booking. We help professionals establish credibility and attract high-value clients.", icon: <Briefcase className="w-6 h-6" />, features: ["Portfolio Showcase", "Service Pages", "Testimonials", "Appointment Booking", "Contact Forms", "SEO Optimized"] },
    { title: "Premium Digital Marketing", desc: "Sophisticated social media management and Instagram marketing for Mahanagar's premium businesses. We create aesthetic content strategies, influencer collaborations, and targeted ads that match the upscale positioning of Mahanagar brands. Starting at ₹12,000/month.", icon: <Sparkles className="w-6 h-6" />, features: ["Instagram Marketing", "Aesthetic Content", "Influencer Collabs", "Premium SEO", "Google Ads", "Brand Building"] },
  ];

  const caseStudies = [
    { title: "Wellness Booking Platform", client: "WellnessHub Spa, Mahanagar", description: "Built a wellness booking platform with service catalogs, therapist profiles, and membership management for a premium spa in Mahanagar. Processing 3,000+ bookings monthly with 85% customer retention.", results: ["3K+ Bookings/Month", "85% Retention", "4.9★ Rating", "₹15L Monthly Revenue"], tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
    { title: "Boutique E-Commerce", client: "Elegance Boutique, Mahanagar", description: "Created a premium e-commerce platform with curated collections, personalized recommendations, and lookbook showcases for a Mahanagar fashion boutique. Monthly revenue reached ₹12L within 6 months.", results: ["₹12L Monthly Revenue", "Lookbook Feature", "Personalized Recs", "4.8★ Rating"], tech: ["React", "Node.js", "MongoDB", "AWS", "Razorpay"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Mahanagar?", answer: "XcFlown is the premium web development company in Mahanagar, Lucknow. We create high-end websites and apps for upscale businesses, clinics, and professional offices. Starting at ₹30,000 with premium design quality." },
    { question: "How much does a premium website cost in Mahanagar?", answer: "Premium websites for Mahanagar businesses start at ₹30,000 for professional sites. Custom business applications cost ₹1,00,000-₹5,00,000 depending on features. We focus on sophisticated design that matches Mahanagar's premium market positioning." },
    { question: "Can you build a booking app for my Mahanagar clinic?", answer: "We build appointment booking apps for Mahanagar healthcare and wellness businesses with scheduling, payments, and patient management. Starting at ₹60,000 with 4-6 week delivery. Our wellness apps process 3,000+ bookings monthly." },
    { question: "Do you offer social media marketing for Mahanagar businesses?", answer: "We manage Instagram, Facebook, and Google Business for Mahanagar's boutique stores, cafes, and professional services. We create aesthetic content strategies that match your brand positioning. Starting at ₹12,000/month." },
    { question: "What makes XcFlown different for Mahanagar businesses?", answer: "We understand Mahanagar's premium market positioning. Our designs reflect the sophistication that Mahanagar customers expect, with focus on brand identity, aesthetics, and user experience. We create digital experiences as refined as your physical business." },
    { question: "How quickly can you deliver a Mahanagar project?", answer: "Premium websites in 2-3 weeks, e-commerce platforms in 4-6 weeks, and booking apps in 6-8 weeks. We prioritize quality over speed but maintain efficient delivery timelines." },
  ];

  const nearbyAreas = [
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
    { name: "Indira Nagar", slug: "web-development-indira-nagar" },
    { name: "Aliganj", slug: "web-development-aliganj" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Premium Web Development in Mahanagar, Lucknow | XcFlown" description="Premium web development company in Mahanagar, Lucknow. High-end websites, boutique e-commerce, wellness apps. ₹30,000 onwards. Upscale business specialist." keywords="web development company in Mahanagar, app developer in Mahanagar Lucknow, digital marketing agency Mahanagar, premium website developer Mahanagar, boutique website Mahanagar" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Mahanagar", url: "https://xcflown.com/locations/web-development-mahanagar" }]} />
      <ServiceSchema serviceName="Web Development in Mahanagar" serviceDescription="Premium web and app development services in Mahanagar, Lucknow. High-end websites, boutique e-commerce platforms, wellness booking apps, and sophisticated digital marketing." serviceUrl="https://xcflown.com/locations/web-development-mahanagar" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-orange-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-teal-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Mahanagar, Lucknow • Premium Residential • Upscale Business</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">Premium Web Development in Mahanagar</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Mahanagar's <span className="text-orange-400 font-semibold">premium businesses</span> deserve sophisticated digital presence. We build <span className="text-teal-400 font-semibold">high-end websites, boutique stores & wellness apps</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving boutiques, cafes, wellness centers, and professional services in Mahanagar.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Premium Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">45+</div><div className="text-sm text-slate-400">Premium Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">₹30K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">2-3</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-orange-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Mahanagar</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Sophisticated digital solutions for upscale businesses</p></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Mahanagar Success Stories</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Mahanagar Web Development FAQs</h2></div>
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

      <section className="py-20 bg-gradient-to-br from-cyan-950/50 to-teal-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Elevate Your Mahanagar Business Online</h2>
          <p className="text-xl text-slate-300 mb-8">Premium digital solutions for Mahanagar's upscale businesses</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Premium Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
