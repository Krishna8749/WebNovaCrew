import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Brain, Building2, ShoppingCart, 
  Car, Stethoscope, Zap, Shield, Clock, Award, Users, Globe, Star, 
  Phone, MessageSquare, Code, Rocket, TrendingUp, MapPin, Languages, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection } from "@/components/sections/FAQ";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentKuwait() {
  const services = [
    { title: "AI App Development Kuwait", desc: "GPT-4, Claude & custom AI for Kuwaiti businesses", icon: <Brain className="w-8 h-8" /> },
    { title: "Kuwait Delivery Apps", desc: "Food, grocery & logistics delivery solutions", icon: <Car className="w-8 h-8" /> },
    { title: "Kuwait Real Estate Apps", desc: "Property listing, virtual tours & CRM", icon: <Building2 className="w-8 h-8" /> },
    { title: "Kuwait E-commerce Apps", desc: "Arabic shopping platforms with KNET", icon: <ShoppingCart className="w-8 h-8" /> },
    { title: "Government Digital Services", desc: "Secure & compliant government apps", icon: <Shield className="w-8 h-8" /> },
    { title: "Kuwait Fintech Apps", desc: "Banking, payments & investment apps", icon: <CreditCard className="w-8 h-8" /> },
    { title: "Healthcare Apps Kuwait", desc: "Telemedicine & health tracking", icon: <Stethoscope className="w-8 h-8" /> },
    { title: "Enterprise Solutions", desc: "ERP, CRM & business automation", icon: <Building2 className="w-8 h-8" /> },
  ];

  const kuwaitFeatures = [
    { title: "Arabic + English Support", desc: "Full RTL Arabic interface with seamless English switching", icon: <Languages className="w-6 h-6" /> },
    { title: "KNET Payment Integration", desc: "Native KNET, STC Pay, Tap Payments integration", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Kuwait Server Hosting", desc: "Low-latency servers in Kuwait & GCC region", icon: <Globe className="w-6 h-6" /> },
    { title: "Local Support Team", desc: "Dedicated Kuwait support with Arabic speakers", icon: <Users className="w-6 h-6" /> },
    { title: "Kuwait Compliance", desc: "CITRA & Kuwait regulatory compliance", icon: <Shield className="w-6 h-6" /> },
    { title: "GCC Market Ready", desc: "Scalable to Saudi, UAE, Bahrain, Qatar, Oman", icon: <MapPin className="w-6 h-6" /> },
  ];

  const kuwaitCities = [
    { name: "Kuwait City", link: "/services/app-development-kuwait-city" },
    { name: "Hawally", link: "/services/app-development-hawally" },
    { name: "Salmiya", link: "/services/app-development-salmiya" },
    { name: "Farwaniya", link: "/services/app-development-farwaniya" },
    { name: "Ahmadi", link: "/services/app-development-ahmadi" },
    { name: "Jahra", link: "/services/app-development-jahra" },
  ];

  const pricing = [
    { name: "Starter App", price: "100 – 250 KWD", features: ["Basic UI/UX", "5-7 Screens", "Arabic Support", "30 Days"] },
    { name: "Business App", price: "300 – 600 KWD", features: ["Custom Design", "15-25 Screens", "KNET Integration", "Admin Panel", "60 Days"], popular: true },
    { name: "AI Premium App", price: "600 – 2,500 KWD", features: ["AI Features", "Unlimited Screens", "Multi-platform", "Analytics", "90 Days"] },
  ];

  const faqs = [
    {
      question: "What is the cost of app development in Kuwait?",
      answer: "App development in Kuwait ranges from 100 KWD for basic apps to 2,500+ KWD for AI-powered enterprise solutions. We offer competitive pricing with world-class quality, significantly lower than local Kuwait agencies while delivering superior technology."
    },
    {
      question: "Do you provide Arabic language support in apps?",
      answer: "Yes! All our Kuwait apps come with full Arabic RTL (right-to-left) support. We ensure perfect Arabic typography, culturally appropriate UI/UX, and seamless English-Arabic language switching."
    },
    {
      question: "Can you integrate KNET and local Kuwait payment gateways?",
      answer: "Absolutely! We have extensive experience integrating KNET, STC Pay, Tap Payments, and other GCC payment gateways. We ensure PCI-DSS compliance and secure transaction processing."
    },
    {
      question: "Do you have a team in Kuwait?",
      answer: "We have dedicated support for Kuwait clients with Arabic-speaking team members. While our development center is in India, we provide Kuwait timezone support and can arrange in-person meetings when needed."
    },
    {
      question: "How long does it take to develop an app for Kuwait market?",
      answer: "Timelines depend on complexity: Basic apps take 4-6 weeks, business apps 8-12 weeks, and enterprise AI apps 12-16 weeks. We follow agile methodology with weekly demos and updates."
    },
    {
      question: "Can you help with Kuwait app store submission?",
      answer: "Yes! We handle complete app store submission for both Apple App Store and Google Play Store, including Kuwait-specific compliance, Arabic metadata, and localized screenshots."
    },
  ];

  const stats = [
    { value: "50+", label: "Kuwait Projects" },
    { value: "100%", label: "Arabic Support" },
    { value: "24/7", label: "Kuwait Support" },
    { value: "KNET", label: "Integrated" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Kuwait | Mobile Apps Kuwait | AI Apps Kuwait" 
        description="Kuwait's leading app development company. We build AI-powered mobile apps with Arabic support, KNET integration for Kuwait businesses. 50+ Kuwait projects delivered. Get free consultation."
        keywords="app development company Kuwait, mobile app development Kuwait, Kuwait software company, AI app development Kuwait, Flutter app Kuwait, React Native Kuwait, iOS app Kuwait, Android app Kuwait, KNET integration, Arabic app development, Kuwait City app developers"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "App Development Kuwait", url: "https://webnovacrew.com/services/app-development-kuwait" }
      ]} />
      <ServiceSchema 
        serviceName="App Development Company in Kuwait"
        serviceDescription="Professional mobile app development services in Kuwait. We build AI-powered iOS, Android apps with Arabic support, KNET integration for Kuwait businesses."
        serviceUrl="https://webnovacrew.com/services/app-development-kuwait"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-green-500/30">
              <span className="text-2xl">🇰🇼</span> Kuwait's Trusted App Development Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">App Development</span> Company in Kuwait
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              We build <strong className="text-white">AI-powered mobile applications</strong> for Kuwait businesses with 
              <strong className="text-green-400"> full Arabic support, KNET integration</strong>, and local compliance. 
              From delivery apps to enterprise solutions, we're your trusted technology partner in Kuwait.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Kuwait Team
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kuwait-Specific Features */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-green-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for <span className="text-green-400">Kuwait Market</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Our apps are specifically designed for Kuwait businesses with local features and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kuwaitFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Development <span className="text-green-400">Services in Kuwait</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              From AI-powered applications to Kuwait-specific solutions, we deliver cutting-edge mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-green-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing for Kuwait */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-green-950/20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Development <span className="text-green-400">Pricing in Kuwait</span>
            </h2>
            <p className="text-xl text-blue-200/70">Transparent pricing in Kuwaiti Dinar (KWD)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-8 ${
                  tier.popular ? 'border-green-500 scale-105' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full font-bold py-6 rounded-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kuwait Cities */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serving All <span className="text-green-400">Kuwait Regions</span>
            </h2>
            <p className="text-blue-200/70">App development services across Kuwait</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {kuwaitCities.map((city, i) => (
              <Link key={i} href={city.link}>
                <div className="bg-white/5 border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-pointer">
                  <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-white font-semibold">{city.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-green-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-200/70">Everything about app development in Kuwait</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-green-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl">🇰🇼</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Kuwait App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and detailed quote for your Kuwait mobile app project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-bold text-lg px-10 py-7 rounded-full">
                Contact Kuwait Team <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/919872364476" target="_blank">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full">
                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
