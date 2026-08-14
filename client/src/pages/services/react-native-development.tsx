import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Zap, Code, Layers,
  MessageSquare, Phone, Award, Users, Shield, Globe, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function ReactNativeDevelopment() {
  const benefits = [
    { title: "JavaScript Ecosystem", desc: "Leverage existing JS/React skills and npm packages", icon: <Code className="w-6 h-6" /> },
    { title: "Native Components", desc: "True native UI components for authentic platform feel", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Hot Reloading", desc: "See changes instantly without rebuilding the app", icon: <RefreshCw className="w-6 h-6" /> },
    { title: "Large Community", desc: "Massive community with extensive libraries & support", icon: <Users className="w-6 h-6" /> },
    { title: "Code Sharing", desc: "Share up to 90% code between iOS & Android", icon: <Layers className="w-6 h-6" /> },
    { title: "Meta Backed", desc: "Developed & maintained by Meta (Facebook)", icon: <Shield className="w-6 h-6" /> },
  ];

  const pricing = [
    { name: "Basic RN App", price: "₹40,000 – ₹80,000", priceKWD: "200 – 400 KWD", features: ["5-10 Screens", "Basic UI", "API Integration", "15-25 Days"] },
    { name: "Advanced RN App", price: "₹90,000 – ₹2,00,000", priceKWD: "450 – 1,000 KWD", features: ["15-30 Screens", "Custom UI", "Backend Integration", "Admin Panel", "30-50 Days"], popular: true },
    { name: "Enterprise RN App", price: "₹2,50,000 – ₹5,50,000", priceKWD: "1,200 – 2,700 KWD", features: ["Unlimited Screens", "Complex Features", "Multi-platform", "60-90 Days"] },
  ];

  const faqs = [
    {
      question: "Why choose React Native for app development?",
      answer: "React Native offers cross-platform development with JavaScript, native UI components, large community support, and is backed by Meta. It's ideal if your team has JavaScript/React experience and you want to share code between web and mobile."
    },
    {
      question: "How much does React Native app development cost?",
      answer: "React Native app development costs range from ₹40,000 for basic apps to ₹5,50,000+ for enterprise solutions. In Kuwait, prices range from 200 KWD to 2,700 KWD. It saves 30-40% compared to separate native development."
    },
    {
      question: "React Native vs Flutter - which should I choose?",
      answer: "Choose React Native if you have JavaScript expertise or want to share code with React web apps. Choose Flutter for better performance, consistent UI, and if starting fresh. Both are excellent choices for cross-platform development."
    },
    {
      question: "Can React Native achieve native performance?",
      answer: "React Native uses native components and can achieve near-native performance for most apps. For performance-critical features, you can write native modules in Swift/Kotlin. Apps like Facebook, Instagram, and Airbnb use React Native."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="React Native App Development Company | Cross-Platform Apps | India & Kuwait" 
        description="Leading React Native app development company. We build cross-platform iOS & Android apps with JavaScript. Native performance, code sharing. 80+ React Native apps delivered in India & Kuwait."
        keywords="React Native app development, React Native developer India, React Native company, cross-platform app development, React Native mobile app, React Native iOS Android, React Native Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "React Native Development", url: "https://webnovacrew.com/services/react-native-development" }
      ]} />
      <ServiceSchema 
        serviceName="React Native App Development"
        serviceDescription="Professional React Native app development services. We build cross-platform iOS & Android apps with JavaScript and native performance."
        serviceUrl="https://webnovacrew.com/services/react-native-development"
      />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-cyan-500/30">
              <Code className="w-4 h-4" /> React Native Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">React Native</span> App Development
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build powerful <strong className="text-white">cross-platform iOS & Android apps</strong> with 
              <strong className="text-cyan-400"> JavaScript & React</strong>. Native components, code sharing, Meta-backed framework. 80+ apps delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get RN Quote <ArrowRight className="w-5 h-5 ml-2" />
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
                { value: "80+", label: "RN Apps" },
                { value: "90%", label: "Code Sharing" },
                { value: "JS", label: "Powered" },
                { value: "Meta", label: "Backed" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-cyan-400">React Native</span>?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-200/60 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-cyan-950/20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">React Native <span className="text-cyan-400">Pricing</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-8 ${tier.popular ? 'border-cyan-500 scale-105' : 'border-white/10'}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold px-6 py-2 rounded-full">Most Popular</div>}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2"><span className="text-2xl font-bold text-cyan-400">{tier.price}</span><span className="text-blue-200/60 ml-2">🇮🇳</span></div>
                <div className="mb-6"><span className="text-lg font-bold text-blue-400">{tier.priceKWD}</span><span className="text-blue-200/60 ml-2">🇰🇼</span></div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />{feature}</li>
                  ))}
                </ul>
                <Link href="/contact"><Button className={`w-full font-bold py-6 rounded-full ${tier.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>Get Started</Button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your React Native App?</h2>
          <p className="text-xl text-white/90 mb-8">Get a free consultation and detailed quote for your cross-platform app.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold text-lg px-10 py-7 rounded-full">Start Your Project <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> Call Now</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
