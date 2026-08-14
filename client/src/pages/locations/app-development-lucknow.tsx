import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MapPin, Phone, MessageSquare, Building2, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function AppDevelopmentLucknow() {
  const services = [
    "Android App Development",
    "iOS App Development", 
    "Flutter App Development",
    "React Native Development",
    "E-commerce Apps",
    "Real Estate Apps",
    "Food Delivery Apps",
    "Healthcare Apps",
  ];

  const whyLucknow = [
    { title: "Local Office", desc: "Visit our Lucknow office for face-to-face meetings", icon: <Building2 className="w-6 h-6" /> },
    { title: "Quick Support", desc: "Same-day response for Lucknow clients", icon: <Clock className="w-6 h-6" /> },
    { title: "Local Expertise", desc: "Understanding of UP market & businesses", icon: <Users className="w-6 h-6" /> },
    { title: "Proven Track Record", desc: "50+ apps delivered to Lucknow businesses", icon: <Award className="w-6 h-6" /> },
  ];

  const faqs = [
    {
      question: "What is the cost of app development in Lucknow?",
      answer: "App development in Lucknow starts from ₹25,000 for basic apps to ₹5,00,000+ for enterprise solutions. We offer competitive pricing compared to Delhi/Mumbai agencies while delivering the same quality."
    },
    {
      question: "Do you have an office in Lucknow?",
      answer: "Yes! Our headquarters is in Lucknow. You can visit us for face-to-face meetings, project discussions, and ongoing support. We're easily accessible from Hazratganj, Gomti Nagar, and other areas."
    },
    {
      question: "How long does app development take?",
      answer: "Basic apps take 15-30 days, business apps take 30-45 days, and enterprise apps take 60-90 days. We follow agile methodology with weekly updates and demos."
    },
    {
      question: "Do you provide app maintenance in Lucknow?",
      answer: "Yes, we provide comprehensive app maintenance including bug fixes, updates, feature additions, and 24/7 support. Maintenance packages start from ₹10,000/month."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Lucknow | Mobile App Developers | Web Nova Crew" 
        description="Best app development company in Lucknow. We build Android, iOS, Flutter apps for businesses in Lucknow, UP. Local office, competitive pricing. 50+ apps delivered. Call +91 98723 64476."
        keywords="app development Lucknow, mobile app developer Lucknow, Android app Lucknow, iOS app Lucknow, Flutter developer Lucknow, app development company Lucknow, software company Lucknow"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "App Development Lucknow", url: "https://webnovacrew.com/locations/app-development-lucknow" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Lucknow"
        serviceDescription="Professional app development services in Lucknow. Android, iOS, Flutter apps for local businesses with face-to-face support."
        serviceUrl="https://webnovacrew.com/locations/app-development-lucknow"
      />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-orange-500/30">
              <MapPin className="w-4 h-4" /> Lucknow, Uttar Pradesh
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              App Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Lucknow</span>
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Lucknow's trusted <strong className="text-white">mobile app development company</strong>. We build 
              <strong className="text-orange-400"> Android, iOS, Flutter apps</strong> for businesses across UP. Local office, competitive pricing, 50+ apps delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Apps in Lucknow" },
                { value: "7+", label: "Years Experience" },
                { value: "₹25K", label: "Starting Price" },
                { value: "4.9★", label: "Client Rating" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            App Development Services in <span className="text-orange-400">Lucknow</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-white/5 border border-orange-500/20 rounded-full px-6 py-3 text-white font-semibold hover:border-orange-500/50 transition-all">
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lucknow */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-orange-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Us in <span className="text-orange-400">Lucknow</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLucknow.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your App in Lucknow?</h2>
          <p className="text-xl text-white/90 mb-8">Visit our office or schedule a call. We're here to help!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-10 py-7 rounded-full">Get Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> +91 98723 64476</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
