import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Stethoscope, School, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentLalbagh() {
  const services = [
    { title: "Healthcare & Hospital Solutions", desc: "Comprehensive digital platforms for Lalbagh's medical institutions and hospitals. Patient management systems, appointment scheduling, telemedicine, EMR integration, and pharmacy management. We help healthcare providers serve the dense residential population of Lalbagh.", icon: <Stethoscope className="w-6 h-6" />, features: ["Patient Management", "Appointment Scheduling", "Telemedicine", "EMR Integration", "Pharmacy Mgmt", "Lab Reports"] },
    { title: "Education & School Platforms", desc: "School management and education apps for Lalbagh's educational institutions. Student management, online classes, fee collection, parent communication, and exam systems. We help schools and colleges in this education-focused area go digital.", icon: <School className="w-6 h-6" />, features: ["Student Management", "Online Classes", "Fee Collection", "Parent Portal", "Exam System", "Mobile App"] },
    { title: "Retail & Market Websites", desc: "E-commerce and business websites for Lalbagh's retail shops and markets. From clothing stores to electronics shops, we create fast, mobile-friendly sites with WhatsApp integration. Starting at just ₹15,000.", icon: <ShoppingBag className="w-6 h-6" />, features: ["₹15K Starting", "Product Catalog", "WhatsApp Orders", "UPI Payments", "Mobile Responsive", "SEO Optimized"] },
    { title: "Local Business Solutions", desc: "Professional websites for Lalbagh's diverse business community. Service providers, small shops, clinics, and professional offices all need digital presence. We create affordable, effective websites that help local businesses get found online.", icon: <Globe className="w-6 h-6" />, features: ["₹15K Starting", "Service Showcase", "Contact Forms", "Google Maps", "Mobile Responsive", "Local SEO"] },
    { title: "Health-Focused SEO", desc: "Specialized SEO for Lalbagh's healthcare providers and medical businesses. We optimize for 'best hospital in Lalbagh', 'doctor near Lalbagh', and health-related local searches. Our strategies help medical practices attract patients from the surrounding residential areas.", icon: <Target className="w-6 h-6" />, features: ["Medical SEO", "Google Maps #1", "GMB Optimization", "Review Management", "Content Marketing", "₹10K/Month Start"] },
    { title: "Restaurant & Food Services", desc: "Food ordering and delivery apps for Lalbagh's restaurants and food businesses. Online ordering, menu management, delivery tracking, and loyalty programs. We help food businesses serve Lalbagh's dense residential population.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Online Ordering", "Menu Management", "Delivery Tracking", "Payment Gateway", "Review System", "Loyalty Program"] },
  ];

  const caseStudies = [
    { title: "Hospital Management System", client: "City Care Hospital, Lalbagh", description: "Built a comprehensive hospital management system with patient records, appointment scheduling, billing, and pharmacy integration for a Lalbagh hospital. Serving 5,000+ patients monthly with 90% patient satisfaction.", results: ["5K+ Patients/Month", "90% Satisfaction", "60% Online Bookings", "4.8★ Rating"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
    { title: "School Management Platform", client: "Lalbagh Public School", description: "Developed a school management platform with student records, online classes, fee payment, and parent communication for a Lalbagh school. Serving 3,000+ students with 95% parent engagement.", results: ["3K+ Students", "95% Parent Engagement", "100% Fee Collection", "4.7★ Rating"], tech: ["React Native", "Node.js", "MongoDB", "AWS", "Razorpay"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Lalbagh?", answer: "XcFlown is the leading web development company in Lalbagh, Lucknow. We specialize in healthcare solutions, education platforms, and retail websites for this residential area. Starting at ₹15,000 with 1-week delivery." },
    { question: "Can you build a hospital website for my Lalbagh clinic?", answer: "We build hospital and clinic websites with appointment booking, patient management, and telemedicine features. Starting at ₹40,000. Our Lalbagh healthcare sites serve 5,000+ patients monthly." },
    { question: "How much does a school management system cost in Lalbagh?", answer: "School management platforms for Lalbagh institutions start at ₹60,000 with student management and fee collection. Premium solutions with online classes cost ₹1,50,000-₹3,00,000." },
    { question: "Do you offer medical SEO for Lalbagh healthcare providers?", answer: "We provide specialized medical SEO for Lalbagh hospitals and clinics to rank for 'best hospital in Lalbagh', 'doctor near Lalbagh' etc. Packages start at ₹10,000/month." },
    { question: "Can you create a website for my Lalbagh shop?", answer: "We create affordable websites for Lalbagh shops starting at ₹15,000. Includes product catalogs, WhatsApp integration, and local SEO to attract nearby customers." },
    { question: "How quickly can you deliver a Lalbagh project?", answer: "Basic business websites in 5-7 days, healthcare sites in 2-3 weeks, education platforms in 4-6 weeks. Express delivery available for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Hazratganj", slug: "web-development-hazratganj" },
    { name: "Aminabad", slug: "web-development-aminabad" },
    { name: "Charbagh", slug: "web-development-charbagh" },
    { name: "Alambagh", slug: "web-development-alambagh" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Lalbagh, Lucknow | Healthcare & Education | XcFlown" description="Top web development company in Lalbagh, Lucknow. Hospital websites, school management platforms, retail solutions. ₹15,000 onwards. Medical & education specialist." keywords="web development company in Lalbagh, app developer in Lalbagh Lucknow, digital marketing agency Lalbagh, hospital website Lalbagh, school app developer Lalbagh, medical website Lucknow" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Lalbagh", url: "https://xcflown.com/locations/web-development-lalbagh" }]} />
      <ServiceSchema serviceName="Web Development in Lalbagh" serviceDescription="Professional web and app development services in Lalbagh, Lucknow. Hospital management systems, school platforms, retail websites, and healthcare-focused SEO." serviceUrl="https://xcflown.com/locations/web-development-lalbagh" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-teal-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-orange-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300">Lalbagh, Lucknow • Medical Hub • Education Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent">Web Development in Lalbagh</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Lalbagh's <span className="text-teal-400 font-semibold">hospitals, schools & businesses</span> need specialized digital solutions. We build <span className="text-orange-400 font-semibold">healthcare platforms, education apps & retail websites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving medical institutions, schools, retail shops & service providers in Lalbagh.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">40+</div><div className="text-sm text-slate-400">Lalbagh Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-teal-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-teal-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">5K+</div><div className="text-sm text-slate-400">Patients/Month</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Lalbagh</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for healthcare, education & retail</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lalbagh Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="text-teal-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-teal-500/10 rounded-lg px-3 py-2 text-center"><span className="text-teal-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lalbagh Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-teal-500/50 hover:text-teal-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-950/50 to-cyan-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Digitize Your Lalbagh Institution</h2>
          <p className="text-xl text-slate-300 mb-8">Hospital platforms, school management systems & retail websites</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
