import { Link } from "wouter";
import { 
  ArrowRight, Rocket, CheckCircle2, Code, Smartphone, Search, ShoppingCart, 
  Zap, Shield, Clock, Award, Users, Globe, Star, Phone, BadgeCheck, 
  Brain, Bot, MessageSquare, TrendingUp, Building2, Car, Stethoscope,
  Sparkles, Play, ChevronRight, MapPin, Languages, CreditCard, FileText,
  Truck, GraduationCap, Home as HomeIcon, Package, Headphones, Database,
  Layout, Server, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CertificationBadgesGrid } from "@/components/widgets/CertificationBadges";

export default function Home() {
  // Core Services - SEO Optimized
  const coreServices = [
    { 
      title: "AI App Development", 
      icon: <Brain className="w-8 h-8" />, 
      desc: "Build intelligent apps using machine learning, LLMs, chatbots, recommendation engines & predictive systems.", 
      link: "/services/ai-app-development" 
    },
    { 
      title: "Custom Mobile App Development", 
      icon: <Smartphone className="w-8 h-8" />, 
      desc: "Android, iOS & cross-platform apps using Flutter & React Native.", 
      link: "/services/app-development-india" 
    },
    { 
      title: "Real Estate App Development", 
      icon: <HomeIcon className="w-8 h-8" />, 
      desc: "Hyper-local property apps, CRM, agent apps, rental apps, marketplace apps.", 
      link: "/services/real-estate-app-development" 
    },
    { 
      title: "E-commerce App Development", 
      icon: <ShoppingCart className="w-8 h-8" />, 
      desc: "Single vendor, multi-vendor, B2B, B2C, delivery integrations & payment gateways.", 
      link: "/services/ecommerce-app-development" 
    },
    { 
      title: "On-Demand Delivery App Development", 
      icon: <Truck className="w-8 h-8" />, 
      desc: "Food, grocery, medicine, parcel & logistics app development.", 
      link: "/services/on-demand-app-development" 
    },
    { 
      title: "AI Chatbots & Automation", 
      icon: <Bot className="w-8 h-8" />, 
      desc: "WhatsApp AI bots, website AI, customer service automation & sales AI agents.", 
      link: "/services/ai-chatbot-development" 
    },
    { 
      title: "ERP & CRM App Development", 
      icon: <Database className="w-8 h-8" />, 
      desc: "Custom business software built on Laravel, Node.js or Python.", 
      link: "/services/erp-crm-development" 
    },
    { 
      title: "Web Development", 
      icon: <Layout className="w-8 h-8" />, 
      desc: "Next.js / React / Laravel / WordPress / custom SaaS development.", 
      link: "/services" 
    },
  ];

  // Why Choose Us - Authority Points
  const whyChooseUs = [
    "7+ years experience in mobile & AI applications",
    "250+ apps delivered across India, Kuwait & UAE",
    "Advanced AI tools, automation agents & analytics",
    "Custom development — no templates, no shortcuts",
    "100% on-time delivery guarantee",
    "Dedicated support team for India & Kuwait clients",
    "Transparent pricing & milestone-based payments",
  ];

  // Featured Portfolio Projects
  const portfolioProjects = [
    { 
      title: "Estato – Real Estate Super App", 
      desc: "AI-powered hyper-local property marketplace with CRM, search filters, map listing, agent panel & admin dashboard.",
      category: "Real Estate",
      tech: ["Flutter", "Node.js", "AI", "Maps API"],
      result: "₹2Cr+ revenue generated"
    },
    { 
      title: "GroceryGo – Delivery App", 
      desc: "Full stack delivery app with admin, delivery boy app, store app & customer app.",
      category: "On-Demand",
      tech: ["React Native", "Firebase", "Stripe"],
      result: "50K+ orders/month"
    },
    { 
      title: "EduAI – AI Education App", 
      desc: "AI tutors, PDF scanner, notes generator, and exam preparation tools.",
      category: "Education",
      tech: ["Flutter", "GPT-4", "Python"],
      result: "100K+ students"
    },
    { 
      title: "LuxeKart – E-commerce App", 
      desc: "Multi-vendor, inventory management, courier API, wallet & COD.",
      category: "E-commerce",
      tech: ["React Native", "Laravel", "Razorpay"],
      result: "₹5Cr+ GMV"
    },
  ];

  // Pricing - India
  const indiaPricing = [
    { name: "Starter App", price: "₹25,000 – ₹60,000", features: ["Basic UI/UX", "5-7 Screens", "7-15 Days"] },
    { name: "Business App", price: "₹65,000 – ₹1,20,000", features: ["Custom Design", "Admin Panel", "Payment Gateway", "15-30 Days"], popular: true },
    { name: "AI/Enterprise App", price: "₹1,20,000 – ₹5,00,000", features: ["AI Features", "Multi-platform", "Analytics", "30-45 Days"] },
  ];

  // Pricing - Kuwait
  const kuwaitPricing = [
    { name: "Mobile App (Basic)", price: "200 – 600 KWD", features: ["Arabic Support", "5-10 Screens", "KNET Ready"] },
    { name: "E-commerce App", price: "450 – 1,100 KWD", features: ["Multi-vendor", "Payment Gateway", "Admin Panel"], popular: true },
    { name: "Premium AI App", price: "1,200 – 4,500 KWD", features: ["AI Features", "Enterprise Grade", "Full Support"] },
  ];

  // Kuwait Industries
  const kuwaitIndustries = [
    "Retail", "Restaurants", "Construction", "Automotive", "E-commerce", 
    "Logistics", "Real Estate", "Education", "Healthcare", "Corporates"
  ];

  // Guarantee Points
  const guarantees = [
    { icon: <Shield className="w-6 h-6" />, text: "100% delivery guarantee" },
    { icon: <Headphones className="w-6 h-6" />, text: "60 days free support" },
    { icon: <CreditCard className="w-6 h-6" />, text: "Milestone-based payments only" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "No hidden charges" },
    { icon: <FileText className="w-6 h-6" />, text: "Clean code + documentation" },
  ];

  // FAQs - SEO Rich
  const faqs = [
    {
      question: "How much does app development cost in India?",
      answer: "Depending on features, app development in India costs between ₹25,000 and ₹5,00,000. Basic apps start at ₹25,000, business apps range from ₹65,000-₹1,20,000, and AI-powered enterprise apps can go up to ₹5,00,000."
    },
    {
      question: "How much does app development cost in Kuwait?",
      answer: "Kuwait app pricing ranges from 200 KWD to 4,500 KWD. Basic mobile apps start at 200-600 KWD, e-commerce apps range from 450-1,100 KWD, and premium AI apps can cost 1,200-4,500 KWD."
    },
    {
      question: "How long does it take to build an app?",
      answer: "7 to 45 days depending on complexity. Simple apps take 7-15 days, business apps with admin panels take 15-30 days, and complex AI-powered apps take 30-45 days."
    },
    {
      question: "Do you provide Arabic language support for Kuwait apps?",
      answer: "Yes! All our Kuwait apps come with full Arabic RTL (right-to-left) support, Arabic typography, and seamless English-Arabic language switching."
    },
    {
      question: "What technologies do you use for app development?",
      answer: "We use Flutter, React Native for cross-platform apps, Swift for iOS, Kotlin for Android, Node.js/Laravel/Python for backend, and GPT-4/Claude for AI features."
    },
  ];

  // Pricing tiers (combined India & Kuwait)
  const pricingTiers = [
    { 
      name: "Starter App", 
      priceINR: "₹25,000 – ₹60,000", 
      priceKWD: "200 – 600 KWD",
      features: ["Basic UI/UX", "5-7 Screens", "7-15 Days Delivery"],
      popular: false
    },
    { 
      name: "Business App", 
      priceINR: "₹65,000 – ₹1,20,000", 
      priceKWD: "450 – 1,100 KWD",
      features: ["Custom Design", "Admin Panel", "Payment Gateway", "15-30 Days Delivery"],
      popular: true
    },
    { 
      name: "AI/Enterprise App", 
      priceINR: "₹1,20,000 – ₹5,00,000", 
      priceKWD: "1,200 – 4,500 KWD",
      features: ["AI Features", "Multi-platform", "Analytics", "30-45 Days Delivery"],
      popular: false
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Top App Development Company in India & Kuwait – AI-Powered Mobile App Solutions" 
        description="India's & Kuwait's leading AI app development company. We build next-generation mobile apps using AI, Flutter, React Native for startups, enterprises & government. 200+ apps delivered. Get free consultation."
        keywords="app development company India, app development company Kuwait, AI app development, mobile app development India, Flutter app development, React Native development, real estate app development, e-commerce app development, Kuwait software company, best app developers India"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }]} />
      
      <Navbar />

      {/* HERO SECTION - Maximum Keyword Power */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/20 rounded-full blur-[80px] lg:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-purple-500/20 rounded-full blur-[60px] lg:blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-cyan-500/10 rounded-full blur-[50px] lg:blur-[80px] animate-pulse delay-500"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">🇮🇳 India & 🇰🇼 Kuwait's #1 AI App Development Company</span>
              </div>

              {/* H1 - Maximum SEO Power */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">App Development</span> Company in India & Kuwait
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/80 mb-8 leading-relaxed">
                We build <strong className="text-white">next-generation apps</strong> using <strong className="text-cyan-400">AI, automation & advanced technologies</strong> for startups, enterprises, government, and global clients.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl shadow-cyan-500/30 group">
                    Get Free App Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://wa.me/919872364476" target="_blank">
                  <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                    <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-bold text-lg px-8 py-7 rounded-full">
                    View Pricing
                  </Button>
                </Link>
              </div>

              {/* Authority Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "250+", label: "Apps Delivered", icon: <Smartphone className="w-6 h-6" /> },
                  { value: "97%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
                  { value: "7+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
                  { value: "50+", label: "AI Projects", icon: <Brain className="w-6 h-6" /> },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative scale-75 md:scale-90 lg:scale-100">
                {/* Real App Mockup 1 - E-commerce App */}
                <div className="absolute -top-10 -left-10 w-48 h-96 bg-white rounded-3xl shadow-2xl transform -rotate-12 animate-float overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-24 flex items-end p-4">
                    <div className="text-white font-bold text-lg">ShopEasy</div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                        <div className="w-8 h-8 bg-purple-200 rounded"></div>
                      </div>
                      <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                    </div>
                    <div className="bg-purple-600 text-white text-center py-3 rounded-lg text-sm font-semibold">
                      Add to Cart
                    </div>
                  </div>
                </div>

                {/* Real App Mockup 2 - Food Delivery App */}
                <div className="absolute top-10 left-10 md:top-20 md:left-20 w-56 h-[450px] bg-white rounded-3xl shadow-2xl transform rotate-6 z-10 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-32 flex flex-col justify-end p-4">
                    <div className="text-white font-bold text-xl">FoodieGo</div>
                    <div className="text-white/80 text-sm">Deliver in 30 mins</div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full p-2">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-orange-200 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2 mb-1"></div>
                            <div className="h-2 bg-green-300 rounded w-1/3"></div>
                          </div>
                          <div className="text-orange-600 font-bold text-sm">₹{120 + item * 50}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-orange-500 text-white text-center py-3 rounded-lg font-semibold">
                      Order Now
                    </div>
                  </div>
                </div>

                {/* Real App Mockup 3 - Banking/Finance App */}
                <div className="absolute top-20 right-0 md:top-40 w-44 h-80 bg-white rounded-3xl shadow-2xl transform rotate-12 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-28 flex flex-col justify-end p-4">
                    <div className="text-white font-bold text-lg">PaySecure</div>
                    <div className="text-blue-200 text-xs">Digital Wallet</div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3">
                      <div className="text-blue-800 text-xs font-semibold">Balance</div>
                      <div className="text-blue-900 text-xl font-bold">₹12,450</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-600 text-xs font-semibold">Quick Actions</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-6 h-6 bg-blue-200 rounded mx-auto mb-1"></div>
                          <div className="text-xs text-gray-600">Send</div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-6 h-6 bg-green-200 rounded mx-auto mb-1"></div>
                          <div className="text-xs text-gray-600">Receive</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-600 text-xs font-semibold">Recent</div>
                      {[1, 2].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* AI Badge */}
                <div className="absolute bottom-0 md:bottom-10 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-xl z-20 flex items-center gap-2 text-sm md:text-base">
                  <Brain className="w-4 h-4 md:w-5 md:h-5" /> AI-Powered Apps
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHORITY LAYER - Trust Signals */}
      <section className="py-8 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200/60">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 200+ Apps Delivered</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 97% Client Satisfaction</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 7+ Years Experience</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> AI, Flutter, Laravel, React, Next.js Experts</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cyan-400" /> Offices: Lucknow, Kuwait City</span>
          </div>
        </div>
      </section>

      {/* NICHE HIGHLIGHT - AI App Development Services */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-cyan-500/30">
              <Brain className="w-4 h-4" /> India's & Kuwait's Leading AI App Development Experts
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">App Development</span> Services
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              From AI chatbots to enterprise solutions, we build cutting-edge applications that transform businesses across India and Kuwait.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={service.link}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="text-blue-200/60 mb-4">{service.desc}</p>
                    <span className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Authority SEO Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-purple-500/30">
                <Award className="w-4 h-4" /> Why 300+ Businesses Trust Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Web Nova Crew</span>?
              </h2>
              
              <div className="space-y-4">
                {whyChooseUs.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-blue-100">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Guarantee Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-400" /> Our Promise
              </h3>
              <div className="space-y-4">
                {guarantees.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-blue-100">
                    <div className="text-purple-400">{item.icon}</div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-6 rounded-full text-lg">
                    Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APP CATEGORIES SECTION */}
      <section className="py-24 bg-gradient-to-b from-blue-950/30 to-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-500/30">
              <Building2 className="w-4 h-4" /> Industry Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apps for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Industry</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              From startups to enterprises, we've built successful apps across all major industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <ShoppingCart className="w-8 h-8" />, name: "E-commerce", count: "45+" },
              { icon: <Truck className="w-8 h-8" />, name: "Delivery", count: "32+" },
              { icon: <HomeIcon className="w-8 h-8" />, name: "Real Estate", count: "28+" },
              { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare", count: "25+" },
              { icon: <GraduationCap className="w-8 h-8" />, name: "Education", count: "35+" },
              { icon: <Car className="w-8 h-8" />, name: "Transport", count: "18+" },
              { icon: <CreditCard className="w-8 h-8" />, name: "Fintech", count: "22+" },
              { icon: <Package className="w-8 h-8" />, name: "Logistics", count: "15+" },
              { icon: <Users className="w-8 h-8" />, name: "Social", count: "12+" },
              { icon: <Brain className="w-8 h-8" />, name: "AI/ML", count: "40+" },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 text-center hover:border-indigo-500/50 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{category.name}</h3>
                <div className="text-indigo-400 font-bold text-xl">{category.count}</div>
                <div className="text-blue-200/60 text-sm">Apps Built</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION - Real App Screenshots */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/30">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-purple-500/30">
              <Smartphone className="w-4 h-4" /> Live App Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Apps, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Real Results</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              See our actual mobile applications in action - from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all group"
            >
              <div className="h-64 bg-white relative overflow-hidden">
                <div className="p-4 h-full">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-4 mb-4">
                    <div className="text-white font-bold text-lg">MediCare+</div>
                    <div className="text-white/80 text-sm">Your Health Companion</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-800 font-semibold text-sm">Dr. Sarah Wilson</div>
                        <div className="text-gray-600 text-xs">Cardiologist • Available</div>
                      </div>
                      <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Book
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-800 font-semibold text-sm">Dr. Mike Chen</div>
                        <div className="text-gray-600 text-xs">Neurologist • Busy</div>
                      </div>
                      <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Wait
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Healthcare Platform</h3>
                <p className="text-blue-200/60 text-sm mb-3">Doctor booking, telemedicine, health records management</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Flutter</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Node.js</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">AI</span>
                </div>
                <div className="text-green-400 text-sm font-bold">10K+ Consultations</div>
              </div>
            </motion.div>

            {/* Travel App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all group"
            >
              <div className="h-64 bg-white relative overflow-hidden">
                <div className="p-4 h-full">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg p-4 mb-4">
                    <div className="text-white font-bold text-lg">TravelEase</div>
                    <div className="text-white/80 text-sm">Plan • Book • Explore</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-800 font-semibold text-sm">Dubai, UAE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-600 text-xs">5 Days • 4 Nights</div>
                          <div className="text-orange-600 font-bold text-lg">₹45,000</div>
                        </div>
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Book Now
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-pink-500" />
                        <span className="text-gray-800 font-semibold text-sm">Bali, Indonesia</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-600 text-xs">7 Days • 6 Nights</div>
                          <div className="text-pink-600 font-bold text-lg">₹65,000</div>
                        </div>
                        <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Explore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Travel Booking Platform</h3>
                <p className="text-blue-200/60 text-sm mb-3">Flight booking, hotel reservations, travel planning</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">React Native</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Laravel</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Maps API</span>
                </div>
                <div className="text-green-400 text-sm font-bold">25K+ Bookings</div>
              </div>
            </motion.div>

            {/* Fitness App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all group"
            >
              <div className="h-64 bg-white relative overflow-hidden">
                <div className="p-4 h-full">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4 mb-4">
                    <div className="text-white font-bold text-lg">FitTracker</div>
                    <div className="text-white/80 text-sm">Your Fitness Journey</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-800 font-semibold text-sm">Today's Goal</span>
                        <span className="text-green-600 font-bold text-sm">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>8,500 steps</span>
                        <span>10,000 target</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-green-600 font-bold text-lg">45</div>
                        <div className="text-gray-600 text-xs">Workouts</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-green-600 font-bold text-lg">12</div>
                        <div className="text-gray-600 text-xs">Streak</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Fitness Tracking App</h3>
                <p className="text-blue-200/60 text-sm mb-3">Workout tracking, nutrition planning, progress analytics</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Flutter</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">Firebase</span>
                  <span className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">ML Kit</span>
                </div>
                <div className="text-green-400 text-sm font-bold">50K+ Active Users</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-green-500/30">
              <Award className="w-4 h-4" /> Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              200+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Successful Projects</span> Delivered
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Real results for real businesses across India, Kuwait, and 10+ countries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-cyan-500/50 transition-all"
              >
                {/* Real App Screenshot Mockup */}
                <div className="h-48 bg-white relative overflow-hidden">
                  {i === 0 && (
                    // Real Estate App UI
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 mb-3">
                        <div className="text-white font-bold text-sm">Estato</div>
                        <div className="text-white/80 text-xs">Find Your Dream Home</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <div className="flex-1 bg-gray-100 rounded p-2">
                            <div className="w-full h-16 bg-blue-200 rounded mb-1"></div>
                            <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-green-400 rounded w-1/2"></div>
                          </div>
                          <div className="flex-1 bg-gray-100 rounded p-2">
                            <div className="w-full h-16 bg-purple-200 rounded mb-1"></div>
                            <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-green-400 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="bg-blue-600 text-white text-center py-2 rounded text-xs font-semibold">
                          View Properties
                        </div>
                      </div>
                    </div>
                  )}
                  {i === 1 && (
                    // Delivery App UI
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3 mb-3">
                        <div className="text-white font-bold text-sm">GroceryGo</div>
                        <div className="text-white/80 text-xs">30 min delivery</div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center gap-2 bg-gray-50 rounded p-2">
                            <div className="w-8 h-8 bg-orange-200 rounded"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
                              <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                            </div>
                            <div className="text-orange-600 text-xs font-bold">₹{50 + item * 20}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {i === 2 && (
                    // Education App UI
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 mb-3">
                        <div className="text-white font-bold text-sm">EduAI</div>
                        <div className="text-white/80 text-xs">AI Learning Assistant</div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                            <div className="h-2 bg-gray-300 rounded flex-1"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                            <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                          </div>
                        </div>
                        <div className="bg-green-500 text-white text-center py-2 rounded text-xs font-semibold">
                          Start Learning
                        </div>
                      </div>
                    </div>
                  )}
                  {i === 3 && (
                    // E-commerce App UI
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-3 mb-3">
                        <div className="text-white font-bold text-sm">LuxeKart</div>
                        <div className="text-white/80 text-xs">Premium Shopping</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-gray-100 rounded p-2">
                          <div className="w-full h-12 bg-pink-200 rounded mb-1"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-3/4 mb-1"></div>
                          <div className="h-1.5 bg-green-400 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gray-100 rounded p-2">
                          <div className="w-full h-12 bg-purple-200 rounded mb-1"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-3/4 mb-1"></div>
                          <div className="h-1.5 bg-green-400 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="bg-pink-500 text-white text-center py-2 rounded text-xs font-semibold">
                        Shop Now
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Live
                  </div>
                </div>
                
                <div className="p-5">
                  <span className="text-cyan-400 text-xs font-semibold">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-blue-200/60 text-sm mb-3 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span key={j} className="text-xs bg-white/10 text-blue-200 px-2 py-0.5 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="text-green-400 text-sm font-bold">{project.result}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg px-10 py-7 rounded-full">
                View All 200+ Projects <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING TABLE - Google Ranking Trigger */}
      <section className="py-24 bg-gradient-to-b from-blue-950/30 to-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-yellow-500/30">
              <CreditCard className="w-4 h-4" /> Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Pricing</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Flexible pricing for startups, businesses, and enterprises. India & Kuwait rates available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-8 ${
                  tier.popular ? 'border-cyan-500 scale-105' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-cyan-400">{tier.priceINR}</span>
                  <span className="text-blue-200/60 ml-2">🇮🇳 India</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-bold text-green-400">{tier.priceKWD}</span>
                  <span className="text-blue-200/60 ml-2">🇰🇼 Kuwait</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full font-bold py-6 rounded-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-cyan-400 font-semibold hover:underline">
              View Detailed Pricing & Custom Quotes →
            </Link>
          </div>
        </div>
      </section>

      {/* KUWAIT-SPECIFIC CTA BLOCK */}
      <section className="py-24 bg-gradient-to-r from-green-900/30 via-slate-950 to-green-900/30 border-y border-green-500/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">🇰🇼</span>
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30">
                  Kuwait Business Solutions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dedicated App Development for <span className="text-green-400">Kuwait Businesses</span>
              </h2>
              <p className="text-xl text-blue-200/70 mb-8">
                We understand Kuwait's unique market needs. From Arabic language support to local payment integrations, we build apps that resonate with Kuwaiti users.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-blue-200/80">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Local Kuwait Support
                </div>
                <div className="flex items-center gap-3 text-blue-200/80">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Kuwait-based Servers
                </div>
                <div className="flex items-center gap-3 text-blue-200/80">
                  <Languages className="w-5 h-5 text-green-400" /> Arabic + English Apps
                </div>
                <div className="flex items-center gap-3 text-blue-200/80">
                  <CreditCard className="w-5 h-5 text-green-400" /> KNET, STC, Tap Payments
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919872364476" target="_blank">
                  <Button size="lg" className="bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-7 rounded-full">
                    <MessageSquare className="w-5 h-5 mr-2" /> Contact Kuwait Team
                  </Button>
                </a>
                <Link href="/services/app-development-kuwait">
                  <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                    Kuwait Services →
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Kuwait Delivery Apps", desc: "Food, grocery & logistics" },
                { title: "Kuwait Real Estate Apps", desc: "Property listing & CRM" },
                { title: "Kuwait E-commerce", desc: "Arabic shopping platforms" },
                { title: "Government Digital Services", desc: "Secure & compliant apps" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-200/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Flutter", "React Native", "Next.js", "React", "Node.js", "Laravel", "Python", "TensorFlow", "GPT-4", "AWS", "Firebase", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-blue-200 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section - SEO Rich */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <MessageSquare className="w-4 h-4" /> FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold">Limited Slots: Only 3 Projects Available This Month</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Bring Your <span className="text-yellow-300">App Idea</span> to Life
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Get a complete consultation, project demo & transparent pricing within 30 minutes. Join 250+ businesses across India & Kuwait.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl px-12 py-8 rounded-full shadow-2xl">
                  Get Free Consultation <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919872364476">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-xl px-12 py-8 rounded-full">
                  <Phone className="w-6 h-6 mr-2" /> +91 98723 64476
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-yellow-300" /> Free Consultation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-yellow-300" /> No Obligation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-yellow-300" /> Response in 24 Hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919872364476" 
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all hover:scale-110"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
