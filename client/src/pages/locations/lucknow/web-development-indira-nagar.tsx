import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Stethoscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentIndiraNagar() {
  const services = [
    { title: "Education & Coaching Platforms", desc: "Learning management systems and coaching apps for Indira Nagar's thriving education sector. We build platforms with live class streaming, test series, student progress tracking, video course hosting, and payment integration. Perfect for the dozens of coaching centers and training institutes along Indira Nagar's main market.", icon: <BookOpen className="w-6 h-6" />, features: ["Live Classes", "Test Series", "Student Tracking", "Payment Integration", "Video Courses", "Parent Dashboard"] },
    { title: "Healthcare & Clinic Websites", desc: "Professional websites and patient management apps for Indira Nagar's clinics and hospitals. Features include online appointment booking, telemedicine video consultations, digital health records, pharmacy ordering, and doctor profile pages. We help Indira Nagar's healthcare providers deliver modern patient experiences.", icon: <Stethoscope className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "Pharmacy Orders", "Doctor Profiles", "Review System"] },
    { title: "Business Website Development", desc: "Professional websites for Indira Nagar's diverse business community — from retail shops and restaurants to professional service firms and real estate agents. We build fast, SEO-optimized websites that rank on Google's first page for 'best [service] in Indira Nagar' searches.", icon: <Globe className="w-6 h-6" />, features: ["SEO Optimized", "Mobile Responsive", "2s Load Time", "CMS Integration", "Analytics Setup", "Contact Forms"] },
    { title: "E-Commerce & Retail Apps", desc: "Online stores and delivery apps for Indira Nagar's retail businesses. We integrate Razorpay, Paytm, and UPI payment gateways, build inventory management systems, and add delivery tracking. Perfect for the area's garment shops, electronics stores, and specialty retailers looking to sell online.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Razorpay & UPI", "Inventory System", "Delivery Tracking", "Discount Engine", "WhatsApp Commerce", "Review System"] },
    { title: "Digital Marketing & Local SEO", desc: "Result-driven digital marketing for Indira Nagar businesses. We specialize in local SEO to rank #1 for 'best [service] in Indira Nagar', Google Ads for immediate leads, and social media marketing. Our Indira Nagar clients see 3x more enquiries within 90 days of starting our services.", icon: <Target className="w-6 h-6" />, features: ["Local SEO #1", "Google Ads", "Social Media", "GMB Optimization", "Review Management", "Content Marketing"] },
    { title: "Mobile App Development", desc: "Native and cross-platform mobile apps for Indira Nagar businesses. Whether you need a Flutter app for your coaching center, a React Native app for your clinic, or a native Android app for your delivery service, we deliver apps that users love with 60fps performance and intuitive UX.", icon: <Smartphone className="w-6 h-6" />, features: ["Flutter & React Native", "60fps Performance", "Offline Support", "Push Notifications", "UPI Integration", "Play Store Optimization"] },
  ];

  const caseStudies = [
    { title: "Healthcare Appointment Platform", client: "MediCare Clinics, Indira Nagar", description: "Built a patient management platform with online appointment booking, telemedicine video calls, and digital health records for a multi-specialty clinic chain in Indira Nagar. Reduced patient wait times by 60% and increased clinic revenue by 35%.", results: ["5K+ Appointments/Month", "60% Less Wait Time", "35% Revenue Increase", "4.9★ Rating"], tech: ["React Native", "WebRTC", "Node.js", "Firebase", "Stripe"] },
    { title: "Coaching Institute App", client: "Excel Academy, Indira Nagar Main Market", description: "Developed an education app with live class streaming, test series, and AI-powered doubt resolution for a leading Indira Nagar coaching center. The app enrolled 8,000+ students and achieved 95% renewal rate.", results: ["8K+ Students", "95% Renewal Rate", "4.8★ Rating", "₹20L Revenue/Month"], tech: ["Flutter", "WebRTC", "Python AI", "AWS", "PostgreSQL"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Indira Nagar?", answer: "XcFlown is the leading web development company in Indira Nagar, Lucknow. We specialize in healthcare websites, education platforms, and business apps tailored for Indira Nagar's market. Starting at ₹20,000 with 1-2 week delivery for professional websites." },
    { question: "How much does app development cost in Indira Nagar?", answer: "App development in Indira Nagar starts at ₹25,000 for basic apps. Education and coaching apps cost ₹50,000-₹2,00,000, healthcare apps cost ₹80,000-₹3,00,000, and business apps range from ₹60,000-₹2,00,000. We offer EMI options for startups." },
    { question: "Can you build an education app for my Indira Nagar coaching center?", answer: "We specialize in education app development for Indira Nagar coaching centers with live class streaming, test series, student progress tracking, video courses, and payment integration. Starting at ₹50,000 with 4-6 week delivery. Our coaching apps have enrolled 8,000+ students." },
    { question: "Do you create websites for clinics in Indira Nagar?", answer: "We build professional clinic websites with appointment booking, patient portals, doctor profiles, and telemedicine features. Starting at ₹25,000 with SEO optimization. Our healthcare websites help Indira Nagar clinics get 5,000+ appointments monthly." },
    { question: "What SEO services do you offer for Indira Nagar businesses?", answer: "We provide local SEO for Indira Nagar businesses including Google Business Profile optimization, local keyword targeting for 'best [service] in Indira Nagar' searches, review management, and citation building. Starting at ₹8,000/month with first-page results in 90 days." },
    { question: "How quickly can you deliver a website for my Indira Nagar business?", answer: "Basic business websites take 1-2 weeks, professional websites with booking systems take 2-3 weeks, and e-commerce sites take 3-5 weeks. We follow agile methodology with weekly demos." },
  ];

  const nearbyAreas = [
    { name: "Aliganj", slug: "web-development-aliganj" },
    { name: "Mahanagar", slug: "web-development-mahanagar" },
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
    { name: "Jankipuram", slug: "web-development-jankipuram" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO 
        title="Best Web Development Company in Indira Nagar, Lucknow | XcFlown"
        description="Top web & app development company in Indira Nagar, Lucknow. Education platforms, healthcare apps, business websites. ₹20,000 onwards. Coaching center & clinic specialist."
        keywords="web development company in Indira Nagar, app developer in Indira Nagar Lucknow, digital marketing agency Indira Nagar, IT company Indira Nagar, website developer Indira Nagar Lucknow, coaching app developer Indira Nagar"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://xcflown.com" },
        { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" },
        { name: "Indira Nagar", url: "https://xcflown.com/locations/web-development-indira-nagar" }
      ]} />
      <ServiceSchema serviceName="Web Development in Indira Nagar" serviceDescription="Professional web and app development services in Indira Nagar, Lucknow. Education platforms, healthcare apps, business websites, and digital marketing." serviceUrl="https://xcflown.com/locations/web-development-indira-nagar" />
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
              <span className="text-sm text-rose-300">Indira Nagar, Lucknow • Education & Healthcare Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent">
              Best Web Development Company in Indira Nagar
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Indira Nagar's <span className="text-rose-400 font-semibold">coaching centers & clinics</span> need specialized digital solutions. We build <span className="text-pink-400 font-semibold">education platforms, healthcare apps & business websites</span> for the area's thriving community.
            </p>
            <p className="text-lg text-slate-400 mb-8">Serving coaching institutes, clinics, retailers & professionals across Indira Nagar.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">50+</div><div className="text-sm text-slate-400">Local Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">₹20K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-rose-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-rose-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Indira Nagar</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Specialized digital solutions for education, healthcare & business</p></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Indira Nagar Success Stories</h2></div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Indira Nagar Web Development FAQs</h2></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Digitize Your Indira Nagar Business?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 50+ Indira Nagar businesses who chose XcFlown</p>
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
