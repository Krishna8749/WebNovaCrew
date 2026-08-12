import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, BookOpen, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentAliganj() {
  const services = [
    { title: "Affordable Business Websites", desc: "Budget-friendly yet professional websites for Aliganj's small business community. We understand that local shops, coaching centers, and service providers need affordable digital solutions. Our websites start at just ₹12,000 with free hosting for the first year, SEO optimization, and mobile responsiveness included.", icon: <Globe className="w-6 h-6" />, features: ["₹12K Starting", "Free Hosting 1yr", "SEO Optimized", "Mobile Responsive", "WhatsApp Integration", "Contact Forms"] },
    { title: "Education & Coaching Apps", desc: "Learning apps for Aliganj's coaching centers and educational institutions. Live class streaming, test series with analytics, student progress tracking, video course hosting, and online payment integration. Our education apps help Aliganj coaching centers reach students beyond their physical location.", icon: <BookOpen className="w-6 h-6" />, features: ["Live Classes", "Test Series", "Student Tracking", "Payment Integration", "Parent Dashboard", "Analytics"] },
    { title: "Government Service Portals", desc: "Digital platforms for Aliganj's government offices and public service institutions. We build citizen service portals with document management, RTI integration, complaint registration, and status tracking. Our government solutions are secure, accessible, and compliant with digital India standards.", icon: <Building2 className="w-6 h-6" />, features: ["Citizen Services", "Document Management", "RTI Integration", "Status Tracking", "Secure Portal", "Accessibility"] },
    { title: "Legal Services Websites", desc: "Professional websites for Aliganj's legal practitioners and law firms. Features include practice area showcases, appointment booking, case status portals for clients, document sharing, and lawyer profile pages. We create authoritative online presence that builds trust with potential clients.", icon: <Scale className="w-6 h-6" />, features: ["Practice Areas", "Appointment Booking", "Case Portal", "Document Sharing", "Lawyer Profiles", "Review System"] },
    { title: "Healthcare & Clinic Solutions", desc: "Patient management and appointment booking systems for Aliganj's clinics and healthcare providers. Online scheduling, telemedicine, digital health records, and pharmacy integration. We help Aliganj's doctors and clinics modernize their patient experience.", icon: <Heart className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "Pharmacy Orders", "Doctor Profiles", "Reminders"] },
    { title: "Local SEO & Digital Marketing", desc: "Budget-friendly digital marketing packages for Aliganj businesses. We optimize Google Business Profiles for 'near me' searches, manage social media, and run affordable Google Ads campaigns. Our Aliganj clients see 2x more foot traffic within 60 days.", icon: <Target className="w-6 h-6" />, features: ["GMB Optimization", "Local SEO", "Social Media", "Google Ads", "WhatsApp Marketing", "₹5K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Coaching Institute Platform", client: "StudyPoint Academy, Aliganj", description: "Built an online test platform with AI-powered analytics and video lectures for an Aliganj coaching center. The platform enrolled 8,000+ students with a 95% renewal rate and was featured in local media.", results: ["8K+ Students", "95% Renewal Rate", "4.7★ Rating", "Featured in Media"], tech: ["Flutter", "Node.js", "Python AI", "AWS", "PostgreSQL"] },
    { title: "Legal Consultation Portal", client: "Aliganj Legal Associates", description: "Created a lawyer directory and consultation platform with video calling and document sharing for Aliganj's legal community. 500+ lawyers listed and 2,000+ consultations facilitated in the first quarter.", results: ["500+ Lawyers", "2K+ Consultations", "4.8★ Rating", "₹10L Revenue/Quarter"], tech: ["React", "WebRTC", "Node.js", "MongoDB", "AWS"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Aliganj?", answer: "XcFlown is the most trusted web development company in Aliganj, Lucknow. We offer affordable website solutions starting at ₹12,000 for small businesses and educational institutions. Our local expertise and budget-friendly pricing make us the top choice for Aliganj businesses." },
    { question: "How much does a website cost in Aliganj?", answer: "Website development in Aliganj starts at ₹12,000 for basic business sites with free hosting for the first year. Professional websites with SEO cost ₹25,000-₹80,000, and e-commerce sites start at ₹50,000. We offer EMI options for businesses with budget constraints." },
    { question: "Can you build an app for my Aliganj coaching center?", answer: "We build education apps for Aliganj coaching centers with live class streaming, test series, student management, and payment integration. Starting at ₹40,000 with 15-day delivery. Our coaching apps have enrolled 8,000+ students for Aliganj institutes." },
    { question: "Do you offer affordable digital marketing in Aliganj?", answer: "We offer budget-friendly digital marketing packages for Aliganj businesses starting at ₹5,000/month including social media management, local SEO, Google Ads, and WhatsApp marketing. Our clients see 2x more enquiries within 60 days." },
    { question: "Can you create a government service portal in Aliganj?", answer: "We develop government service portals with citizen services, document management, RTI integration, and complaint tracking. Our solutions are secure, accessible, and compliant with Digital India standards. Contact us for custom quotes." },
    { question: "How quickly can you deliver a website in Aliganj?", answer: "Basic business websites take 5-7 days, professional websites take 2-3 weeks, and complex applications take 4-8 weeks. We also offer express delivery for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Indira Nagar", slug: "web-development-indira-nagar" },
    { name: "Jankipuram", slug: "web-development-jankipuram" },
    { name: "Mahanagar", slug: "web-development-mahanagar" },
    { name: "Rajajipuram", slug: "web-development-rajajipuram" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO 
        title="Best Web Development Company in Aliganj, Lucknow | Affordable | XcFlown"
        description="Affordable web development company in Aliganj, Lucknow. Websites from ₹12,000. Coaching apps, clinic websites, government portals. Free hosting 1st year. 50+ Aliganj clients."
        keywords="web development company in Aliganj, app developer in Aliganj Lucknow, digital marketing agency Aliganj, affordable website developer Aliganj, IT company Aliganj Lucknow, coaching app developer Aliganj"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Aliganj", url: "https://xcflown.com/locations/web-development-aliganj" }]} />
      <ServiceSchema serviceName="Web Development in Aliganj" serviceDescription="Affordable web and app development services in Aliganj, Lucknow. Education apps, clinic websites, government portals, and budget-friendly digital marketing." serviceUrl="https://xcflown.com/locations/web-development-aliganj" />
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
              <span className="text-sm text-violet-300">Aliganj, Lucknow • Education & Government Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
              Affordable Web Development in Aliganj
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Aliganj's <span className="text-violet-400 font-semibold">coaching centers, clinics & small businesses</span> deserve affordable digital solutions. Websites from <span className="text-purple-400 font-semibold">₹12,000 with free hosting</span>.
            </p>
            <p className="text-lg text-slate-400 mb-8">Serving educational institutions, government offices & local businesses in Aliganj.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-orange-500 hover:from-violet-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400 mb-1">50+</div><div className="text-sm text-slate-400">Aliganj Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">₹12K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-violet-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Delivery</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-violet-500/20"><div className="text-3xl font-bold text-purple-400 mb-1">Free</div><div className="text-sm text-slate-400">Hosting 1st Year</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Aliganj</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Affordable, quality digital solutions for Aliganj's community</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Aliganj Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-violet-500/50 transition-all">
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

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Aliganj Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-violet-500/50 hover:text-violet-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Go Digital? Affordable Solutions for Aliganj</h2>
          <p className="text-xl text-slate-300 mb-8">Websites from ₹12,000 • Free hosting • 5-7 day delivery</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-orange-500 hover:from-violet-700 hover:to-purple-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
