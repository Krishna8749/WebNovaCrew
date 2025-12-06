import { Link } from "wouter";
import { ArrowRight, MapPin, Phone, MessageSquare, Building2, TrendingUp, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function AppDevelopmentMumbai() {
  const services = ["Android App Development", "iOS App Development", "Flutter Apps", "React Native Apps", "Fintech Apps", "E-commerce Apps", "Enterprise Apps", "Startup MVPs"];
  const areas = ["Andheri", "Bandra", "Lower Parel", "BKC", "Powai", "Navi Mumbai", "Thane", "Worli"];

  const faqs = [
    { question: "What is the cost of app development in Mumbai?", answer: "App development in Mumbai starts from ₹25,000 for basic apps to ₹5,00,000+ for enterprise solutions. We offer 25-35% lower pricing than typical Mumbai agencies while maintaining premium quality." },
    { question: "Do you work with Mumbai's fintech companies?", answer: "Yes! We have extensive experience building fintech apps including payment apps, trading platforms, and banking solutions. We understand RBI compliance and security requirements." },
    { question: "Can you meet in person in Mumbai?", answer: "Yes! We regularly visit Mumbai for client meetings. We can arrange meetings in BKC, Lower Parel, Andheri, or any convenient location." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Mumbai | Mobile App Developers | Web Nova Crew" 
        description="Top app development company in Mumbai. We build Android, iOS, Flutter, fintech apps for businesses in Mumbai, Navi Mumbai, Thane. Competitive pricing. 80+ apps delivered."
        keywords="app development Mumbai, mobile app developer Mumbai, Android app Mumbai, iOS app Mumbai, fintech app development Mumbai, Flutter developer Mumbai, app development company Mumbai"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "App Development Mumbai", url: "https://webnovacrew.com/locations/app-development-mumbai" }
      ]} />
      <ServiceSchema serviceName="App Development in Mumbai" serviceDescription="Professional app development services in Mumbai. Android, iOS, Flutter, fintech apps for businesses." serviceUrl="https://webnovacrew.com/locations/app-development-mumbai" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <MapPin className="w-4 h-4" /> Mumbai, Maharashtra
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              App Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mumbai</span>
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Mumbai's trusted <strong className="text-white">mobile app development partner</strong>. We build 
              <strong className="text-blue-400"> Android, iOS, fintech, enterprise apps</strong> for businesses across Mumbai. 80+ apps delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact"><Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">Get Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full"><MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us</Button></a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ value: "80+", label: "Apps in Mumbai" }, { value: "30+", label: "Fintech Apps" }, { value: "35%", label: "Cost Savings" }, { value: "4.9★", label: "Client Rating" }].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">App Development Services in <span className="text-blue-400">Mumbai</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white/5 border border-blue-500/20 rounded-full px-6 py-3 text-white font-semibold hover:border-blue-500/50 transition-all">{service}</motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Areas We Serve in <span className="text-blue-400">Mumbai</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-blue-500/30 rounded-xl px-6 py-4 text-white font-semibold flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> {area}</motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your App in Mumbai?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss your project. Schedule a call or meeting today!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-7 rounded-full">Get Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> +91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
