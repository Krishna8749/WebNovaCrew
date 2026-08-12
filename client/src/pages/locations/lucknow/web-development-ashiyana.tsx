import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Home, Users2, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentAshiyana() {
  const services = [
    { title: "Real Estate & Housing Websites", desc: "Property listing platforms for Ashiyana's real estate agents, builders, and housing societies. Features include property galleries, virtual tours, EMI calculators, and lead management. We help Ashiyana's housing market reach potential buyers searching for homes in this prime residential area.", icon: <Home className="w-6 h-6" />, features: ["Property Galleries", "Virtual Tours", "EMI Calculator", "Lead Management", "Broker Integration", "Mobile Responsive"] },
    { title: "Society Management Apps", desc: "Digital platforms for Ashiyana's housing societies and RWAs. Maintenance payment collection, complaint management, visitor tracking, notice boards, and facility booking. We help residential communities go digital with modern society management solutions.", icon: <Users2 className="w-6 h-6" />, features: ["Payment Collection", "Complaint Mgmt", "Visitor Tracking", "Notice Board", "Facility Booking", "Resident Portal"] },
    { title: "Local Business Websites", desc: "Affordable websites for Ashiyana's neighborhood shops, clinics, and service providers. Starting at just ₹15,000 with free hosting for the first year. Perfect for the local businesses serving Ashiyana's dense residential population.", icon: <Globe className="w-6 h-6" />, features: ["₹15K Starting", "Free Hosting 1yr", "Google Maps", "WhatsApp Integration", "Mobile Responsive", "SEO Optimized"] },
    { title: "Healthcare & Clinic Solutions", desc: "Patient management systems for Ashiyana's doctors, dentists, and clinics. Online appointment booking, telemedicine, digital health records, and pharmacy integration. We help healthcare providers serve Ashiyana's family-oriented community.", icon: <Heart className="w-6 h-6" />, features: ["Appointment Booking", "Telemedicine", "Health Records", "Pharmacy Orders", "Reminders", "Patient Portal"] },
    { title: "Education & Tutoring Apps", desc: "Learning platforms for Ashiyana's tuition centers, hobby classes, and educational services. Online classes, progress tracking, fee management, and parent communication. We help educators reach students across Ashiyana's residential colonies.", icon: <GraduationCap className="w-6 h-6" />, features: ["Online Classes", "Progress Tracking", "Fee Management", "Parent Portal", "Mobile App", "Payment Integration"] },
    { title: "Local SEO for Residential Market", desc: "Specialized SEO for Ashiyana businesses targeting the local residential community. We optimize for 'near Ashiyana', 'best in Ashiyana Colony', and hyperlocal searches that capture the area's family-oriented customer base. Starting at ₹6,000/month.", icon: <Target className="w-6 h-6" />, features: ["Local SEO", "GMB Optimization", "Hyperlocal Targeting", "WhatsApp Marketing", "Review Management", "₹6K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Society Management Platform", client: "Ashiyana Residency RWA", description: "Built a comprehensive society management app with maintenance payments, complaint tracking, and facility booking for an Ashiyana housing society. Increased payment collection efficiency by 70% and improved resident satisfaction.", results: ["70% Faster Collection", "500+ Residents", "4.6★ Rating", "Zero Cash Handling"], tech: ["React Native", "Node.js", "PostgreSQL", "Razorpay", "AWS"] },
    { title: "Real Estate Listing Platform", client: "Ashiyana Properties", description: "Developed a property listing platform with virtual tours and lead management for an Ashiyana real estate agency. Generated 200+ qualified leads monthly and closed ₹3Cr in property deals within 6 months.", results: ["200+ Leads/Month", "₹3Cr Deals Closed", "50+ Listings", "4.8★ Rating"], tech: ["Next.js", "Node.js", "MongoDB", "AWS", "Google Maps"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Ashiyana?", answer: "XcFlown is the top web development company in Ashiyana, Lucknow. We specialize in real estate websites, society management apps, and local business solutions for this residential area. Starting at ₹15,000 with 1-week delivery." },
    { question: "Can you build a society management app for my Ashiyana housing society?", answer: "We build society management apps with maintenance collection, complaint tracking, visitor management, and notice boards. Starting at ₹60,000 with 4-6 week delivery. Our apps serve 500+ residents per society." },
    { question: "How much does a real estate website cost in Ashiyana?", answer: "Real estate websites for Ashiyana agents start at ₹35,000 with property listings and lead forms. Premium platforms with virtual tours and CRM cost ₹80,000-₹2,00,000. We help generate 200+ leads monthly." },
    { question: "Do you create websites for local Ashiyana shops?", answer: "We create affordable websites for Ashiyana shops and service providers starting at ₹15,000. Includes Google Maps optimization, WhatsApp integration, and local SEO to attract nearby customers." },
    { question: "What SEO works best for Ashiyana businesses?", answer: "Hyperlocal SEO targeting 'near Ashiyana' and 'Ashiyana Colony' searches works best. We optimize Google Business Profiles and create location-specific content. Starting at ₹6,000/month." },
    { question: "How quickly can you deliver a website in Ashiyana?", answer: "Basic websites in 5-7 days, real estate sites in 2-3 weeks, society apps in 4-6 weeks. Express delivery available for urgent projects." },
  ];

  const nearbyAreas = [
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
    { name: "Sushant Golf City", slug: "web-development-sushant-golf-city" },
    { name: "Aliganj", slug: "web-development-aliganj" },
    { name: "Gomti Nagar", slug: "web-development-gomti-nagar" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Ashiyana, Lucknow | Housing & Society | XcFlown" description="Top web development company in Ashiyana, Lucknow. Real estate platforms, society management apps, local business websites. ₹15,000 onwards. Residential area specialist." keywords="web development company in Ashiyana, app developer in Ashiyana Lucknow, digital marketing agency Ashiyana, society management app Ashiyana, real estate website Ashiyana, housing website Lucknow" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Ashiyana", url: "https://xcflown.com/locations/web-development-ashiyana" }]} />
      <ServiceSchema serviceName="Web Development in Ashiyana" serviceDescription="Professional web and app development services in Ashiyana, Lucknow. Real estate platforms, society management apps, local business websites, and healthcare solutions." serviceUrl="https://xcflown.com/locations/web-development-ashiyana" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-green-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-emerald-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">Ashiyana, Lucknow • Prime Residential • Family Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">Web Development Company in Ashiyana</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Ashiyana's <span className="text-green-400 font-semibold">residential community</span> needs specialized digital solutions. We build <span className="text-emerald-400 font-semibold">real estate platforms, society apps & local business sites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving housing societies, real estate agents, local shops & clinics in Ashiyana.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-green-400 mb-1">35+</div><div className="text-sm text-slate-400">Ashiyana Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-green-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-green-500/20"><div className="text-3xl font-bold text-emerald-400 mb-1">Free</div><div className="text-sm text-slate-400">Hosting 1st Year</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Ashiyana</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Digital solutions for residential communities and local businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-green-500/10 text-green-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ashiyana Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="text-green-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-green-500/10 rounded-lg px-3 py-2 text-center"><span className="text-green-300 text-sm font-medium">{r}</span></div>))}</div>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ashiyana Web Development FAQs</h2></div>
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
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-green-500/50 hover:text-green-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Digitize Your Ashiyana Community?</h2>
          <p className="text-xl text-slate-300 mb-8">Society apps, real estate platforms & local business solutions</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
