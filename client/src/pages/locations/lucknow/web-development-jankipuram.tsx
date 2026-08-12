import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Scale, Gavel, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentJankipuram() {
  const services = [
    { title: "Legal Services Websites", desc: "Professional websites for Jankipuram's legal practitioners and law firms. Features include practice area showcases, case status portals for clients, appointment booking, document sharing, and lawyer profile pages. We create authoritative online presence that builds trust with potential clients searching for lawyers near Jankipuram.", icon: <Gavel className="w-6 h-6" />, features: ["Practice Areas", "Case Portal", "Appointment Booking", "Document Sharing", "Lawyer Profiles", "Review System"] },
    { title: "Healthcare & Clinic Solutions", desc: "Patient management systems for Jankipuram's healthcare providers. Online appointment scheduling, telemedicine video consultations, digital health records, EMR integration, and pharmacy ordering. We help Jankipuram's doctors and clinics serve the dense residential population.", icon: <Stethoscope className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "EMR Integration", "Pharmacy Orders", "Lab Reports"] },
    { title: "Government Service Portals", desc: "Digital platforms for Jankipuram's government offices and public institutions. Citizen service portals with document management, RTI filing, status tracking, and secure authentication. Our government solutions are accessible, secure, and compliant with Digital India standards.", icon: <Building2 className="w-6 h-6" />, features: ["Citizen Services", "RTI Filing", "Status Tracking", "Document Upload", "Secure Portal", "Accessibility"] },
    { title: "Professional Services Websites", desc: "Authoritative websites for Jankipuram's professional service providers — CAs, consultants, architects, and engineers. We build trust-building websites with portfolio showcases, client testimonials, service descriptions, and appointment systems. Starting at ₹20,000.", icon: <Scale className="w-6 h-6" />, features: ["Portfolio Showcases", "Testimonials", "Service Pages", "Appointment System", "Contact Forms", "SEO Optimized"] },
    { title: "Education & Coaching Apps", desc: "Learning platforms for Jankipuram's coaching centers and educational institutions. Live class streaming, test series with analytics, student progress tracking, and parent dashboards. We help coaching centers reach students across Jankipuram's residential colonies.", icon: <GraduationCap className="w-6 h-6" />, features: ["Live Classes", "Test Series", "Progress Tracking", "Parent Dashboard", "Payment Integration", "Mobile Apps"] },
    { title: "Local SEO & Digital Marketing", desc: "Specialized SEO for Jankipuram's professional services. We optimize for 'best lawyer in Jankipuram', 'doctor near Jankipuram', and similar professional searches. Our strategies help service providers rank #1 on Google and attract high-value local clients.", icon: <Target className="w-6 h-6" />, features: ["Professional SEO", "Google Maps #1", "GMB Optimization", "Review Management", "Content Marketing", "₹10K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Legal Consultation Platform", client: "LegalConnect Pro, Jankipuram", description: "Built a lawyer directory and video consultation platform for Jankipuram's legal community. 500+ lawyers listed and 2,000+ consultations facilitated in the first quarter, generating ₹10L in platform revenue.", results: ["500+ Lawyers", "2K+ Consultations", "4.8★ Rating", "₹10L Revenue"], tech: ["React", "WebRTC", "Node.js", "MongoDB", "AWS"] },
    { title: "Clinic Management System", client: "City Care Clinics, Jankipuram", description: "Developed a patient management system with EMR, appointment scheduling, billing, and telemedicine features for a multi-location clinic chain in Jankipuram. Serving 3,000+ patients monthly with 85% patient retention.", results: ["3K+ Patients/Month", "85% Retention", "60% Online Bookings", "4.7★ Rating"], tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Jankipuram?", answer: "XcFlown is the leading web development company in Jankipuram, Lucknow. We specialize in professional service websites for lawyers, doctors, and government-related businesses. Starting at ₹20,000 with 1-2 week delivery." },
    { question: "Can you build a legal services app for Jankipuram lawyers?", answer: "We build legal consultation apps with video calling, document management, appointment booking, and payment integration. Starting at ₹80,000 with 6-8 week delivery. Our legal platforms have facilitated 2,000+ consultations." },
    { question: "How much does a website cost in Jankipuram?", answer: "Professional service websites in Jankipuram start at ₹20,000. Legal and medical practice websites with appointment systems cost ₹40,000-₹1,50,000. Government portals are custom quoted based on requirements." },
    { question: "Do you offer SEO for legal and medical practices in Jankipuram?", answer: "We provide specialized SEO for Jankipuram's legal and medical professionals to rank for 'best lawyer in Jankipuram', 'doctor near Jankipuram' etc. Starting at ₹10,000/month with first-page results in 90 days." },
    { question: "Can you create a patient management system for Jankipuram clinics?", answer: "We develop patient management systems with EMR, appointment scheduling, billing, and telemedicine features. Custom pricing based on requirements. Our systems serve 3,000+ patients monthly for Jankipuram clinics." },
    { question: "How quickly can you deliver a project in Jankipuram?", answer: "Basic websites in 1-2 weeks, professional service websites in 2-3 weeks, legal/medical apps in 4-6 weeks, and government portals in 6-12 weeks." },
  ];

  const nearbyAreas = [
    { name: "Aliganj", slug: "web-development-aliganj" },
    { name: "Indira Nagar", slug: "web-development-indira-nagar" },
    { name: "Rajajipuram", slug: "web-development-rajajipuram" },
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Jankipuram, Lucknow | Legal & Medical | XcFlown" description="Top web development company in Jankipuram, Lucknow. Legal websites, healthcare apps, government portals, professional services. ₹20,000 onwards. High Court area specialist." keywords="web development company in Jankipuram, app developer in Jankipuram Lucknow, digital marketing agency Jankipuram, lawyer website Jankipuram, doctor website Jankipuram, IT company near High Court Lucknow" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Jankipuram", url: "https://xcflown.com/locations/web-development-jankipuram" }]} />
      <ServiceSchema serviceName="Web Development in Jankipuram" serviceDescription="Professional web and app development services in Jankipuram, Lucknow. Legal services platforms, healthcare apps, government portals, and professional websites." serviceUrl="https://xcflown.com/locations/web-development-jankipuram" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-indigo-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-purple-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Jankipuram, Lucknow • High Court Area • Professional Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">Web Development Company in Jankipuram</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Jankipuram's <span className="text-indigo-400 font-semibold">lawyers, doctors & professionals</span> need authoritative digital presence. We build <span className="text-purple-400 font-semibold">legal platforms, healthcare apps & professional websites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving legal practitioners, healthcare providers, government offices & professionals near High Court.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20"><div className="text-3xl font-bold text-indigo-400 mb-1">45+</div><div className="text-sm text-slate-400">Jankipuram Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">₹20K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20"><div className="text-3xl font-bold text-indigo-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-indigo-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Jankipuram</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Professional digital solutions for legal, medical & government services</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jankipuram Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
                <div className="text-indigo-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-indigo-500/10 rounded-lg px-3 py-2 text-center"><span className="text-indigo-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jankipuram Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Professional Digital Presence?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 45+ Jankipuram professionals who chose XcFlown</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
