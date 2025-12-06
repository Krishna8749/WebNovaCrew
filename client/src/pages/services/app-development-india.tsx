import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Brain, Building2, ShoppingCart, 
  Car, Stethoscope, Zap, Shield, Clock, Award, Users, Globe, Star, 
  Phone, MessageSquare, Code, Rocket, TrendingUp, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection } from "@/components/sections/FAQ";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentIndia() {
  const services = [
    { title: "AI App Development", desc: "GPT-4, Claude & custom ML models integration", icon: <Brain className="w-8 h-8" /> },
    { title: "Flutter App Development", desc: "Single codebase for iOS & Android", icon: <Smartphone className="w-8 h-8" /> },
    { title: "React Native Apps", desc: "Cross-platform native performance", icon: <Code className="w-8 h-8" /> },
    { title: "Real Estate Apps", desc: "Property listing & CRM solutions", icon: <Building2 className="w-8 h-8" /> },
    { title: "E-commerce Apps", desc: "Multi-vendor marketplaces", icon: <ShoppingCart className="w-8 h-8" /> },
    { title: "On-Demand Delivery", desc: "Food, grocery & logistics apps", icon: <Car className="w-8 h-8" /> },
    { title: "Healthcare Apps", desc: "HIPAA-compliant telemedicine", icon: <Stethoscope className="w-8 h-8" /> },
    { title: "Enterprise Solutions", desc: "ERP, CRM & automation", icon: <Building2 className="w-8 h-8" /> },
  ];

  const cities = [
    { name: "Lucknow", link: "/services/app-development-lucknow" },
    { name: "Delhi", link: "/services/app-development-delhi" },
    { name: "Mumbai", link: "/services/app-development-mumbai" },
    { name: "Bangalore", link: "/services/app-development-bangalore" },
    { name: "Noida", link: "/services/app-development-noida" },
    { name: "Hyderabad", link: "/services/app-development-hyderabad" },
  ];

  const faqs = [
    {
      question: "What is the cost of app development in India?",
      answer: "App development costs in India range from ₹25,000 for basic apps to ₹6,00,000+ for AI-powered enterprise solutions. Factors include features, complexity, platforms (iOS/Android), and AI integrations. We provide transparent pricing with no hidden costs."
    },
    {
      question: "How long does it take to develop a mobile app in India?",
      answer: "Development timelines vary: Basic apps take 4-6 weeks, business apps 8-12 weeks, and complex AI-powered apps 12-16 weeks. We follow agile methodology with weekly updates and milestone deliveries."
    },
    {
      question: "Why choose an Indian app development company?",
      answer: "India offers world-class developers at competitive rates, 40-60% lower than US/UK. Our team has 7+ years experience, expertise in latest technologies (Flutter, React Native, AI/ML), and a proven track record of 200+ successful apps."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, and 24/7 technical support. Maintenance packages start from ₹10,000/month."
    },
    {
      question: "Can you develop apps for both iOS and Android?",
      answer: "Absolutely! We specialize in cross-platform development using Flutter and React Native, delivering native performance on both iOS and Android from a single codebase, saving you 40% on development costs."
    },
  ];

  const stats = [
    { value: "200+", label: "Apps Delivered" },
    { value: "97%", label: "Client Satisfaction" },
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "AI Projects" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Best App Development Company in India | Mobile App Developers | AI Apps" 
        description="India's #1 app development company. We build AI-powered mobile apps using Flutter, React Native for startups & enterprises. 200+ apps delivered. Get free consultation. ₹25,000 onwards."
        keywords="app development company India, mobile app development India, best app developers India, AI app development India, Flutter app development India, React Native India, iOS app development India, Android app development India, app development cost India"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "App Development India", url: "https://webnovacrew.com/services/app-development-india" }
      ]} />
      <ServiceSchema 
        serviceName="App Development Company in India"
        serviceDescription="Professional mobile app development services in India. We build AI-powered iOS, Android & cross-platform apps using Flutter, React Native for businesses worldwide."
        serviceUrl="https://webnovacrew.com/services/app-development-india"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-orange-500/30">
              <span className="text-2xl">🇮🇳</span> India's #1 App Development Company
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">App Development</span> Company in India
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              We build <strong className="text-white">AI-powered mobile applications</strong> for startups, enterprises, and government organizations. 
              From concept to launch, our expert team delivers world-class apps using <strong className="text-orange-400">Flutter, React Native, and cutting-edge AI technologies</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our App Development <span className="text-orange-400">Services in India</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              From AI-powered applications to enterprise solutions, we deliver cutting-edge mobile apps for every industry.
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Us as Your <span className="text-orange-400">App Development Partner</span> in India?
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "7+ Years of Excellence", desc: "Proven track record with 200+ successful app deliveries across 10+ countries" },
                  { title: "AI & ML Expertise", desc: "Specialists in GPT-4, Claude, TensorFlow, and custom AI model integration" },
                  { title: "Cost-Effective Solutions", desc: "World-class quality at 40-60% lower costs compared to US/UK agencies" },
                  { title: "Agile Development", desc: "Weekly sprints, transparent communication, and on-time delivery guaranteed" },
                  { title: "Post-Launch Support", desc: "Comprehensive maintenance, updates, and 24/7 technical support" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-blue-200/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h3>
              <p className="text-blue-200/70 mb-6">Tell us about your project and get a detailed proposal within 24 hours.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href="tel:+919872364476" className="hover:text-orange-400">+91 98723 64476</a>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <a href="https://wa.me/919872364476" target="_blank" className="hover:text-green-400">WhatsApp Us</a>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-6 rounded-full">
                  Request Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Pages */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              App Development Services Across <span className="text-orange-400">India</span>
            </h2>
            <p className="text-blue-200/70">We serve clients in all major Indian cities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, i) => (
              <Link key={i} href={city.link}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/50 hover:bg-orange-500/10 transition-all cursor-pointer">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <span className="text-white font-semibold">{city.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-200/70">Everything you need to know about app development in India</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and detailed quote for your mobile app project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-10 py-7 rounded-full">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
