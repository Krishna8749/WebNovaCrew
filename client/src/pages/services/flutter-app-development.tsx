import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Zap, Code, Layers,
  MessageSquare, Phone, Award, Clock, Shield, Cpu, Palette,
  RefreshCw, Globe, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function FlutterAppDevelopment() {
  const benefits = [
    { title: "Single Codebase", desc: "One codebase for iOS, Android, Web & Desktop - save 40% development cost", icon: <Code className="w-6 h-6" /> },
    { title: "Native Performance", desc: "60fps smooth animations with Dart compiled to native ARM code", icon: <Zap className="w-6 h-6" /> },
    { title: "Beautiful UI", desc: "Material Design & Cupertino widgets for stunning cross-platform UI", icon: <Palette className="w-6 h-6" /> },
    { title: "Hot Reload", desc: "Instant code changes without losing app state - faster development", icon: <RefreshCw className="w-6 h-6" /> },
    { title: "Rich Ecosystem", desc: "10,000+ packages on pub.dev for every feature you need", icon: <Layers className="w-6 h-6" /> },
    { title: "Google Backed", desc: "Maintained by Google with regular updates & long-term support", icon: <Shield className="w-6 h-6" /> },
  ];

  const services = [
    "Custom Flutter App Development",
    "Flutter UI/UX Design",
    "Flutter App Migration",
    "Flutter Web Development",
    "Flutter Desktop Apps",
    "Flutter App Maintenance",
    "Flutter Plugin Development",
    "Flutter Consulting",
  ];

  const pricing = [
    { name: "Basic Flutter App", price: "₹35,000 – ₹70,000", priceKWD: "180 – 350 KWD", features: ["5-10 Screens", "Basic UI", "API Integration", "15-25 Days"] },
    { name: "Advanced Flutter App", price: "₹80,000 – ₹1,80,000", priceKWD: "400 – 900 KWD", features: ["15-30 Screens", "Custom UI", "Firebase/Backend", "Admin Panel", "30-50 Days"], popular: true },
    { name: "Enterprise Flutter App", price: "₹2,00,000 – ₹5,00,000", priceKWD: "1,000 – 2,500 KWD", features: ["Unlimited Screens", "Complex Features", "Multi-platform", "60-90 Days"] },
  ];

  const faqs = [
    {
      question: "Why choose Flutter for app development?",
      answer: "Flutter offers single codebase for iOS & Android (saving 40% cost), native performance, beautiful UI, hot reload for faster development, and is backed by Google. It's ideal for startups and enterprises looking for cost-effective cross-platform development."
    },
    {
      question: "How much does Flutter app development cost?",
      answer: "Flutter app development costs range from ₹35,000 for basic apps to ₹5,00,000+ for enterprise solutions. In Kuwait, prices range from 180 KWD to 2,500 KWD. Flutter saves 30-40% compared to native iOS + Android development."
    },
    {
      question: "Flutter vs React Native - which is better?",
      answer: "Flutter offers better performance (compiled to native code), consistent UI across platforms, and faster development with hot reload. React Native has a larger community and uses JavaScript. We recommend Flutter for most projects due to its superior performance and Google backing."
    },
    {
      question: "Can Flutter apps achieve native performance?",
      answer: "Yes! Flutter compiles to native ARM code, achieving 60fps animations and native-like performance. Unlike hybrid frameworks, Flutter doesn't use web views or JavaScript bridges, resulting in truly native performance."
    },
    {
      question: "How long does Flutter app development take?",
      answer: "Basic Flutter apps take 15-25 days, advanced apps take 30-50 days, and enterprise apps take 60-90 days. Flutter's hot reload and single codebase significantly reduce development time compared to native development."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Flutter App Development Company | Cross-Platform Apps | India & Kuwait" 
        description="Leading Flutter app development company. We build cross-platform iOS & Android apps with single codebase. Native performance, beautiful UI. 100+ Flutter apps delivered in India & Kuwait."
        keywords="Flutter app development, Flutter developer India, Flutter app development company, cross-platform app development, Flutter mobile app, Flutter iOS Android, Flutter app Kuwait, Flutter development services"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "Flutter App Development", url: "https://webnovacrew.com/services/flutter-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Flutter App Development"
        serviceDescription="Professional Flutter app development services. We build cross-platform iOS & Android apps with native performance using Flutter framework."
        serviceUrl="https://webnovacrew.com/services/flutter-app-development"
      />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <Smartphone className="w-4 h-4" /> Flutter Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Flutter App</span> Development Company
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build beautiful, <strong className="text-white">cross-platform iOS & Android apps</strong> with a 
              <strong className="text-blue-400"> single codebase</strong>. Native performance, stunning UI, 40% cost savings. 100+ Flutter apps delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Flutter Quote <ArrowRight className="w-5 h-5 ml-2" />
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
                { value: "100+", label: "Flutter Apps" },
                { value: "40%", label: "Cost Savings" },
                { value: "60fps", label: "Performance" },
                { value: "4.9★", label: "Client Rating" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-blue-400">Flutter</span>?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-200/60 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Flutter <span className="text-blue-400">Services</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-white/5 border border-blue-500/20 rounded-full px-6 py-3 text-white font-semibold hover:border-blue-500/50 transition-all">
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Flutter App <span className="text-blue-400">Pricing</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-8 ${tier.popular ? 'border-blue-500 scale-105' : 'border-white/10'}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold px-6 py-2 rounded-full">Most Popular</div>}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2"><span className="text-2xl font-bold text-blue-400">{tier.price}</span><span className="text-blue-200/60 ml-2">🇮🇳</span></div>
                <div className="mb-6"><span className="text-lg font-bold text-cyan-400">{tier.priceKWD}</span><span className="text-blue-200/60 ml-2">🇰🇼</span></div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />{feature}</li>
                  ))}
                </ul>
                <Link href="/contact"><Button className={`w-full font-bold py-6 rounded-full ${tier.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>Get Started</Button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Flutter App?</h2>
          <p className="text-xl text-white/90 mb-8">Get a free consultation and detailed quote for your cross-platform app.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-7 rounded-full">Start Your Project <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> Call Now</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
