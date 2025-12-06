import { Link } from "wouter";
import { ArrowRight, MapPin, Phone, MessageSquare, Building2, Globe, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function AppDevelopmentKuwaitCity() {
  const services = ["Android App Development", "iOS App Development", "Flutter Apps", "E-commerce Apps", "Real Estate Apps", "Delivery Apps", "Fintech Apps", "Arabic/Bilingual Apps"];
  const areas = ["Kuwait City", "Salmiya", "Hawalli", "Farwaniya", "Jahra", "Ahmadi", "Fahaheel", "Mangaf"];

  const whyUs = [
    { title: "Arabic + English", desc: "Bilingual apps with RTL support for Kuwait market", icon: <Globe className="w-6 h-6" /> },
    { title: "KNET Integration", desc: "Local payment gateway integration for Kuwait", icon: <Shield className="w-6 h-6" /> },
    { title: "Kuwait Timezone", desc: "Support during Kuwait business hours", icon: <Clock className="w-6 h-6" /> },
    { title: "Local Compliance", desc: "Apps compliant with Kuwait regulations", icon: <Building2 className="w-6 h-6" /> },
  ];

  const faqs = [
    { question: "What is the cost of app development in Kuwait?", answer: "App development in Kuwait starts from 200 KWD for basic apps to 5,000 KWD+ for enterprise solutions. We offer competitive pricing with premium quality and local market expertise." },
    { question: "Do you support Arabic language in apps?", answer: "Yes! All our Kuwait apps support Arabic with proper RTL (Right-to-Left) layout, Arabic fonts, and bilingual (Arabic + English) interfaces. We understand the local market requirements." },
    { question: "Can you integrate KNET payment gateway?", answer: "Absolutely! We have extensive experience integrating KNET, Tap Payments, and other Kuwait payment gateways. We ensure secure, compliant payment processing." },
    { question: "Do you provide support in Kuwait timezone?", answer: "Yes! We provide dedicated support during Kuwait business hours (8 AM - 6 PM AST). Our team is available via WhatsApp, phone, and email for quick responses." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Kuwait City | Mobile App Developers | Web Nova Crew" 
        description="Best app development company in Kuwait City. We build Arabic/English Android, iOS, Flutter apps with KNET integration. Serving Kuwait City, Salmiya, Hawalli. Call +91 98723 64476."
        keywords="app development Kuwait City, mobile app developer Kuwait, Android app Kuwait, iOS app Kuwait, Flutter developer Kuwait, Arabic app development, KNET integration, app development company Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "App Development Kuwait City", url: "https://webnovacrew.com/locations/app-development-kuwait-city" }
      ]} />
      <ServiceSchema serviceName="App Development in Kuwait City" serviceDescription="Professional app development services in Kuwait City. Arabic/English apps with KNET integration." serviceUrl="https://webnovacrew.com/locations/app-development-kuwait-city" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/20 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-green-500/30">
              <MapPin className="w-4 h-4" /> 🇰🇼 Kuwait City
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              App Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Kuwait City</span>
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Kuwait's trusted <strong className="text-white">mobile app development partner</strong>. We build 
              <strong className="text-green-400"> Arabic/English apps with KNET integration</strong> for businesses across Kuwait. 40+ Kuwait apps delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact"><Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">Get Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full"><MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us</Button></a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ value: "40+", label: "Kuwait Apps" }, { value: "🇰🇼", label: "KNET Ready" }, { value: "AR+EN", label: "Bilingual" }, { value: "4.9★", label: "Client Rating" }].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Us for <span className="text-green-400">Kuwait</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-green-500/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-green-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Areas We Serve in <span className="text-green-400">Kuwait</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-green-500/30 rounded-xl px-6 py-4 text-white font-semibold flex items-center gap-2"><MapPin className="w-4 h-4 text-green-400" /> {area}</motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-green-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your App in Kuwait?</h2>
          <p className="text-xl text-white/90 mb-8">Get a free consultation for your Kuwait app project!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-bold text-lg px-10 py-7 rounded-full">Get Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> +91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
