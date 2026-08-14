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
import { motion, useAnimationFrame, useMotionValue, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/forms/LeadForm";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CertificationBadgesGrid } from "@/components/widgets/CertificationBadges";
import { useCountUp, parseStatValue } from "@/hooks/useCountUp";
import { ReactNode } from "react";

// Animated stat card with count-up number — white card version
function AnimatedStatCard({ stat, delay }: { stat: { value: string; label: string; icon: ReactNode }; delay: number }) {
  const parsed = parseStatValue(stat.value);
  const { ref, displayValue } = useCountUp(parsed.value, 2000, parsed.suffix, parsed.prefix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="rounded-2xl p-4 text-center transition-all cursor-default"
      style={{
        background: "#ffffff",
        border: "1px solid #E0ECF8",
        boxShadow: "0 2px 12px rgba(41,131,219,0.07)"
      }}
    >
      <div className="mb-2 flex justify-center" style={{ color: "#2983DB" }}>{stat.icon}</div>
      <div className="text-2xl sm:text-3xl font-bold tabular-nums" style={{ color: "#0D1B2E" }}>{displayValue}</div>
      <div className="text-xs sm:text-sm mt-0.5" style={{ color: "#8CA0B5" }}>{stat.label}</div>
    </motion.div>
  );
}

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
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="Top App Development Company in India & Kuwait – AI-Powered Mobile App Solutions" 
        description="India's & Kuwait's leading AI app development company. We build next-generation mobile apps using AI, Flutter, React Native for startups, enterprises & government. 200+ apps delivered. Get free consultation."
        keywords="app development company India, app development company Kuwait, AI app development, mobile app development India, Flutter app development, React Native development, real estate app development, e-commerce app development, Kuwait software company, best app developers India"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }]} />
      
      <Navbar />

      {/* HERO SECTION - Maximum Keyword Power */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Animated Background Blobs - light blue tints on white */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] animate-morph" style={{ background: "rgba(41,131,219,0.07)" }} />
          <motion.div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] animate-morph" style={{ background: "rgba(177,245,31,0.07)", animationDelay: "3s" }} />
          <motion.div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse" style={{ background: "rgba(41,131,219,0.05)" }} />
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(41,131,219,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                style={{ background: "rgba(41,131,219,0.08)", border: "1px solid rgba(41,131,219,0.2)", color: "#2983DB" }}
              >
                <Sparkles className="w-4 h-4" />
                🇮🇳 India & 🇰🇼 Kuwait's #1 AI App Development Company
              </motion.div>

              {/* H1 - Maximum SEO Power */}
              <h1 className="font-bold leading-tight mb-6" style={{ color: "#0D1B2E", fontSize: "clamp(2rem, 6vw, 4rem)" }}>
                Top <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>App Development</span> Company in India & Kuwait
              </h1>

              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "#4A6080" }}>
                We build <strong style={{ color: "#0D1B2E" }}>next-generation apps</strong> using{" "}
                <strong style={{ color: "#2983DB" }}>AI, automation & advanced technologies</strong> for startups, enterprises, government, and global clients.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Button size="lg" className="font-bold text-base sm:text-lg px-7 py-6 rounded-full shadow-lg btn-shine border-0"
                      style={{ background: "#B1F51F", color: "#0D1B2E", boxShadow: "0 6px 30px rgba(177,245,31,0.4)" }}>
                      Get Free App Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <a href="https://wa.me/919872364476" target="_blank">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Button size="lg" className="font-bold text-base sm:text-lg px-7 py-6 rounded-full border-2"
                      style={{ borderColor: "#2983DB", color: "#2983DB", background: "transparent" }}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                    </Button>
                  </motion.div>
                </a>
              </div>

              {/* Authority Stats with Animated Counters */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "250+", label: "Apps Delivered", icon: <Smartphone className="w-5 h-5" /> },
                  { value: "97%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
                  { value: "7+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
                  { value: "50+", label: "AI Projects", icon: <Brain className="w-5 h-5" /> },
                ].map((stat, i) => (
                  <AnimatedStatCard key={i} stat={stat} delay={0.5 + i * 0.1} />
                ))}
              </div>
              {/* Floating trust signals */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["🔒 Secure & Compliant", "⚡ 7-Day MVP Delivery", "🌍 10+ Countries"].map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(41,131,219,0.07)", border: "1px solid rgba(41,131,219,0.15)", color: "#2983DB" }}>{t}</span>
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
                <div className="absolute bottom-0 md:bottom-10 left-0 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-xl z-20 flex items-center gap-2 text-sm md:text-base" style={{ background: "#2983DB", boxShadow: "0 6px 24px rgba(41,131,219,0.35)" }}>
                  <Brain className="w-4 h-4 md:w-5 md:h-5" /> AI-Powered Apps
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── RECOGNITION PLATFORMS ────────────────────────────── */}
      <section className="py-10 bg-white overflow-hidden" style={{ borderBottom: "1px solid #EEF4FB" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#8CA0B5" }}
          >
            Recognized &amp; Listed On Leading Industry Platforms
          </motion.p>

          {/* Row 1 — scrolls left */}
          <div className="relative overflow-hidden mb-3">
            <div
              className="flex gap-0 pointer-events-none select-none"
              style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
            >
              <motion.div
                className="flex gap-4 shrink-0"
                animate={{ x: [0, -1200] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" } }}
              >
                {([
                  { name: "Clutch", icon: "🏆", color: "#E63946", desc: "Top Company", href: "https://clutch.co" },
                  { name: "GoodFirms", icon: "⭐", color: "#F28C38", desc: "Verified Agency", href: "https://www.goodfirms.co" },
                  { name: "DesignRush", icon: "🏅", color: "#7B2FBE", desc: "Ranked Agency", href: "https://www.designrush.com" },
                  { name: "TechBehemoths", icon: "✅", color: "#2983DB", desc: "Verified Company", href: "https://techbehemoths.com" },
                  { name: "The Manifest", icon: "📋", color: "#1B4F72", desc: "Listed Agency", href: "https://themanifest.com" },
                  { name: "Techreviewer", icon: "🔍", color: "#219653", desc: "Top Company", href: "https://techreviewer.co" },
                  { name: "TopDevelopers", icon: "💎", color: "#C0392B", desc: "Featured Agency", href: "https://www.topdevelopers.co" },
                  { name: "SuperbCompanies", icon: "🌟", color: "#E67E22", desc: "Recognized", href: "https://superbcompanies.com" },
                  { name: "SelectedFirms", icon: "🎯", color: "#16A085", desc: "Listed", href: "https://selectedfirms.co" },
                  { name: "Clutch", icon: "🏆", color: "#E63946", desc: "Top Company", href: "https://clutch.co" },
                  { name: "GoodFirms", icon: "⭐", color: "#F28C38", desc: "Verified Agency", href: "https://www.goodfirms.co" },
                  { name: "DesignRush", icon: "🏅", color: "#7B2FBE", desc: "Ranked Agency", href: "https://www.designrush.com" },
                  { name: "TechBehemoths", icon: "✅", color: "#2983DB", desc: "Verified Company", href: "https://techbehemoths.com" },
                  { name: "The Manifest", icon: "📋", color: "#1B4F72", desc: "Listed Agency", href: "https://themanifest.com" },
                  { name: "Techreviewer", icon: "🔍", color: "#219653", desc: "Top Company", href: "https://techreviewer.co" },
                ] as const).map((p, i) => (
                  <a
                    key={i}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl whitespace-nowrap flex-shrink-0 pointer-events-auto transition-all hover:-translate-y-1 hover:shadow-md"
                    style={{ border: "1px solid #E0ECF8", background: "#ffffff", boxShadow: "0 2px 8px rgba(41,131,219,0.05)" }}
                  >
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <div className="text-xs font-bold leading-none" style={{ color: p.color }}>{p.name}</div>
                      <div className="text-[10px] leading-none mt-0.5" style={{ color: "#8CA0B5" }}>{p.desc}</div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-0 pointer-events-none select-none"
              style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
            >
              <motion.div
                className="flex gap-4 shrink-0"
                animate={{ x: [-1000, 0] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" } }}
              >
                {([
                  { name: "Google Business", icon: "📍", color: "#4285F4", desc: "Local Authority" },
                  { name: "Trustpilot", icon: "⭐", color: "#00B67A", desc: "Verified Reviews" },
                  { name: "GoodFirms India", icon: "🇮🇳", color: "#F28C38", desc: "India Rankings" },
                  { name: "Crunchbase", icon: "📊", color: "#0288D1", desc: "Company Profile" },
                  { name: "G2", icon: "🔵", color: "#FF492C", desc: "Software Reviews" },
                  { name: "Product Hunt", icon: "🚀", color: "#DA552F", desc: "Product Launch" },
                  { name: "GitHub", icon: "💻", color: "#24292F", desc: "Open Source" },
                  { name: "Agency Spotter", icon: "🔭", color: "#5B2E99", desc: "Agency Directory" },
                  { name: "Sortlist", icon: "📌", color: "#FF6B35", desc: "Agency Directory" },
                  { name: "Google Business", icon: "📍", color: "#4285F4", desc: "Local Authority" },
                  { name: "Trustpilot", icon: "⭐", color: "#00B67A", desc: "Verified Reviews" },
                  { name: "GoodFirms India", icon: "🇮🇳", color: "#F28C38", desc: "India Rankings" },
                  { name: "Crunchbase", icon: "📊", color: "#0288D1", desc: "Company Profile" },
                  { name: "G2", icon: "🔵", color: "#FF492C", desc: "Software Reviews" },
                ] as const).map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl whitespace-nowrap flex-shrink-0"
                    style={{ border: "1px solid #E0ECF8", background: "#FAFCFF", boxShadow: "0 2px 8px rgba(41,131,219,0.04)" }}
                  >
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <div className="text-xs font-bold leading-none" style={{ color: p.color }}>{p.name}</div>
                      <div className="text-[10px] leading-none mt-0.5" style={{ color: "#8CA0B5" }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs mt-5"
            style={{ color: "#B0C0D0" }}
          >
            🎯 We are actively building our verified presence.{" "}
            <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#2983DB" }}>
              Leave us a review on Clutch →
            </a>
          </motion.p>
        </div>
      </section>

      {/* AUTHORITY LAYER - Animated Trust Ticker */}
      <section className="py-4 overflow-hidden" style={{ background: "#2983DB", borderTop: "none", borderBottom: "none" }}>
        <div className="marquee-wrapper">
          <motion.div
            className="marquee-track"
            animate={{ x: [0, -1800] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {[
              "🌟 97% Client Satisfaction",
              "⚡ 7+ Years Experience",
              "🤖 AI, Flutter, Laravel, React Experts",
              "🇮🇳 India's #1 Dev Agency",
              "🇰🇼 Kuwait's Trusted Partner",
              "🏆 On-Time Delivery Guaranteed",
              "💬 24/7 Client Support",
              "🔒 100% Code Ownership",
              // Duplicate for seamless loop
              "✅ 200+ Apps Delivered",
              "🌟 97% Client Satisfaction",
              "⚡ 7+ Years Experience",
              "🤖 AI, Flutter, Laravel, React Experts",
              "🇮🇳 India's #1 Dev Agency",
              "🇰🇼 Kuwait's Trusted Partner",
              "🏆 On-Time Delivery Guaranteed",
              "💬 24/7 Client Support",
              "🔒 100% Code Ownership",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-8 text-sm font-semibold whitespace-nowrap px-6" style={{ color: "rgba(255,255,255,0.88)" }}>
                {item}
                <span className="text-lg" style={{ color: "rgba(177,245,31,0.7)" }}>◆</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NICHE HIGHLIGHT - AI App Development Services */}
      <section className="py-20 sm:py-24" style={{ background: "#F0F7FF" }}>
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <Brain className="w-4 h-4" /> India's & Kuwait's Leading AI App Development Experts
            </span>
            <h2 className="font-bold mb-5" style={{ color: "#0D1B2E" }}>
              AI-Powered{" "}
              <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>App Development</span>{" "}
              Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4A6080" }}>
              From AI chatbots to enterprise solutions, we build cutting-edge applications that transform businesses across India and Kuwait.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={service.link}>
                  <div className="relative bg-white rounded-2xl p-6 h-full transition-all duration-300 group cursor-pointer overflow-hidden" style={{ border: "1px solid #E0ECF8", boxShadow: "0 2px 12px rgba(41,131,219,0.06)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2983DB"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(41,131,219,0.14)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E0ECF8"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(41,131,219,0.06)"; }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(41,131,219,0.03), rgba(177,245,31,0.03))" }} />
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5"
                      style={{ background: "#2983DB", boxShadow: "0 6px 20px rgba(41,131,219,0.3)" }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-base font-bold mb-2.5 leading-snug transition-colors" style={{ color: "#0D1B2E" }}>{service.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#4A6080" }}>{service.desc}</p>
                    <span className="font-semibold flex items-center gap-1.5 text-sm group-hover:gap-2.5 transition-all" style={{ color: "#2983DB" }}>
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Authority SEO Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
                <Award className="w-4 h-4" /> Why 300+ Businesses Trust Us
              </span>
              <h2 className="font-bold mb-8" style={{ color: "#0D1B2E" }}>
                Why <span style={{ background: "linear-gradient(135deg,#2983DB,#5AA8F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Web Nova Crew</span>?
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
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#2983DB" }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg" style={{ color: "#4A6080" }}>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Guarantee Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8"
              style={{ background: "linear-gradient(135deg, #2983DB, #1A6BB5)", boxShadow: "0 20px 60px rgba(41,131,219,0.3)" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8" style={{ color: "#B1F51F" }} /> Our Promise
              </h3>
              <div className="space-y-4">
                {guarantees.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90">
                    <div style={{ color: "#B1F51F" }}>{item.icon}</div>
                    <span className="text-base">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link href="/contact">
                  <Button className="w-full font-bold py-6 rounded-full text-lg border-0" style={{ background: "#B1F51F", color: "#0D1B2E", boxShadow: "0 6px 24px rgba(177,245,31,0.4)" }}>
                    Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APP CATEGORIES SECTION */}
      <section className="py-20 sm:py-24" style={{ background: "#F0F7FF" }}>
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <Building2 className="w-4 h-4" /> Industry Expertise
            </span>
            <h2 className="font-bold mb-5" style={{ color: "#0D1B2E" }}>
              Apps for Every <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Industry</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4A6080" }}>
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
                className="bg-white rounded-2xl p-5 text-center transition-all group cursor-pointer" style={{ border: "1px solid #E0ECF8", boxShadow: "0 2px 10px rgba(41,131,219,0.05)" }}
                onHoverStart={() => {}}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ background: "#2983DB", boxShadow: "0 6px 20px rgba(41,131,219,0.25)" }}>
                  {category.icon}
                </div>
                <h3 className="text-base font-bold mb-1 transition-colors" style={{ color: "#0D1B2E" }}>{category.name}</h3>
                <div className="font-bold text-lg" style={{ color: "#2983DB" }}>{category.count}</div>
                <div className="text-sm" style={{ color: "#8CA0B5" }}>Apps Built</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION - Real App Screenshots */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <Smartphone className="w-4 h-4" /> Live App Showcase
            </span>
            <h2 className="font-bold mb-5" style={{ color: "#0D1B2E" }}>
              Real Apps, <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Real Results</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4A6080" }}>
              See our actual mobile applications in action - from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-3xl overflow-hidden transition-all group" style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 20px rgba(41,131,219,0.06)" }}
            >
              <div className="h-64 bg-gray-50 relative overflow-hidden">
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
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0D1B2E" }}>Healthcare Platform</h3>
                <p className="text-sm mb-3" style={{ color: "#4A6080" }}>Doctor booking, telemedicine, health records management</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Flutter</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Node.js</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>AI</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#B1F51F", WebkitTextFillColor: "unset", background: "none" }}>✅ 10K+ Consultations</div>
              </div>
            </motion.div>

            {/* Travel App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden transition-all group" style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 20px rgba(41,131,219,0.06)" }}
            >
              <div className="h-64 bg-gray-50 relative overflow-hidden">
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
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0D1B2E" }}>Travel Booking Platform</h3>
                <p className="text-sm mb-3" style={{ color: "#4A6080" }}>Flight booking, hotel reservations, travel planning</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>React Native</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Laravel</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Maps API</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#2983DB" }}>✅ 25K+ Bookings</div>
              </div>
            </motion.div>

            {/* Fitness App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden transition-all group" style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 20px rgba(41,131,219,0.06)" }}
            >
              <div className="h-64 bg-gray-50 relative overflow-hidden">
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
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0D1B2E" }}>Fitness Tracking App</h3>
                <p className="text-sm mb-3" style={{ color: "#4A6080" }}>Workout tracking, nutrition planning, progress analytics</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Flutter</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>Firebase</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>ML Kit</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#2983DB" }}>✅ 50K+ Active Users</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24" style={{ background: "#F0F7FF" }}>
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <Award className="w-4 h-4" /> Our Portfolio
            </span>
            <h2 className="font-bold mb-5" style={{ color: "#0D1B2E" }}>
              200+ <span style={{ background: "linear-gradient(135deg,#2983DB,#B1F51F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Successful Projects</span> Delivered
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4A6080" }}>
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
                className="bg-white rounded-3xl overflow-hidden group cursor-pointer transition-all" style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 16px rgba(41,131,219,0.07)" }}
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
                  <span className="text-xs font-bold" style={{ color: "#2983DB" }}>{project.category}</span>
                  <h3 className="text-base font-bold mt-1 mb-2 transition-colors" style={{ color: "#0D1B2E" }}>{project.title}</h3>
                  <p className="text-sm mb-3 line-clamp-2" style={{ color: "#4A6080" }}>{project.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(41,131,219,0.08)", color: "#2983DB", border: "1px solid rgba(41,131,219,0.15)" }}>{tech}</span>
                    ))}
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#2983DB" }}>✅ {project.result}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="font-bold text-base sm:text-lg px-10 py-7 rounded-full border-0" style={{ background: "#2983DB", color: "white", boxShadow: "0 6px 24px rgba(41,131,219,0.3)" }}>
                View All 200+ Projects <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING TABLE - Google Ranking Trigger */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <CreditCard className="w-4 h-4" /> Transparent Pricing
            </span>
            <h2 className="font-bold mb-5" style={{ color: "#0D1B2E" }}>
              App Development <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Pricing</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4A6080" }}>
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
                whileHover={{ y: -6 }}
                className="relative rounded-3xl p-8"
                style={{
                  background: tier.popular ? "linear-gradient(135deg,#2983DB,#1A6BB5)" : "#ffffff",
                  border: tier.popular ? "none" : "1px solid #E0ECF8",
                  boxShadow: tier.popular ? "0 20px 60px rgba(41,131,219,0.35)" : "0 4px 20px rgba(41,131,219,0.07)",
                  transform: tier.popular ? "scale(1.04)" : undefined
                }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-bold px-6 py-2 rounded-full" style={{ background: "#B1F51F", color: "#0D1B2E", boxShadow: "0 4px 16px rgba(177,245,31,0.4)" }}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4" style={{ color: tier.popular ? "white" : "#0D1B2E" }}>{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold" style={{ color: tier.popular ? "#B1F51F" : "#2983DB" }}>{tier.priceINR}</span>
                  <span className="ml-2 text-sm" style={{ color: tier.popular ? "rgba(255,255,255,0.7)" : "#8CA0B5" }}>🇮🇳 India</span>
                </div>
                <div className="mb-6">
                  <span className="text-lg font-bold" style={{ color: tier.popular ? "rgba(255,255,255,0.9)" : "#2983DB" }}>{tier.priceKWD}</span>
                  <span className="ml-2 text-sm" style={{ color: tier.popular ? "rgba(255,255,255,0.7)" : "#8CA0B5" }}>🇰🇼 Kuwait</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3" style={{ color: tier.popular ? "rgba(255,255,255,0.9)" : "#4A6080" }}>
                      <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: tier.popular ? "#B1F51F" : "#2983DB" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full font-bold py-6 rounded-full border-0" style={{
                    background: tier.popular ? "#B1F51F" : "#2983DB",
                    color: tier.popular ? "#0D1B2E" : "white",
                    boxShadow: tier.popular ? "0 6px 20px rgba(177,245,31,0.4)" : "0 6px 20px rgba(41,131,219,0.25)"
                  }}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="font-semibold hover:underline" style={{ color: "#2983DB" }}>
              View Detailed Pricing & Custom Quotes →
            </Link>
          </div>
        </div>
      </section>

      {/* KUWAIT-SPECIFIC CTA BLOCK */}
      <section className="py-20 sm:py-24" style={{ background: "#F0F7FF", borderTop: "1px solid #E0ECF8", borderBottom: "1px solid #E0ECF8" }}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">🇰🇼</span>
                <span className="badge-blue">
                  Kuwait Business Solutions
                </span>
              </div>
              <h2 className="font-bold mb-6" style={{ color: "#0D1B2E" }}>
                Dedicated App Development for <span style={{ color: "#2983DB" }}>Kuwait Businesses</span>
              </h2>
              <p className="text-lg mb-8" style={{ color: "#4A6080" }}>
                We understand Kuwait's unique market needs. From Arabic language support to local payment integrations, we build apps that resonate with Kuwaiti users.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3" style={{ color: "#4A6080" }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#2983DB" }} /> Local Kuwait Support
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A6080" }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#2983DB" }} /> Kuwait-based Servers
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A6080" }}>
                  <Languages className="w-5 h-5" style={{ color: "#2983DB" }} /> Arabic + English Apps
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A6080" }}>
                  <CreditCard className="w-5 h-5" style={{ color: "#2983DB" }} /> KNET, STC, Tap Payments
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919872364476" target="_blank">
                  <Button size="lg" className="font-bold text-base sm:text-lg px-8 py-7 rounded-full border-0" style={{ background: "#B1F51F", color: "#0D1B2E", boxShadow: "0 6px 24px rgba(177,245,31,0.35)" }}>
                    <MessageSquare className="w-5 h-5 mr-2" /> Contact Kuwait Team
                  </Button>
                </a>
                <Link href="/services/app-development-kuwait">
                  <Button size="lg" className="font-bold text-base sm:text-lg px-8 py-7 rounded-full" style={{ border: "2px solid #2983DB", color: "#2983DB", background: "transparent" }}>
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
                <div key={i} className="bg-white rounded-2xl p-6 transition-all" style={{ border: "1px solid #E0ECF8", boxShadow: "0 2px 12px rgba(41,131,219,0.06)" }}>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#0D1B2E" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#4A6080" }}>{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16 sm:py-20" style={{ background: "#2983DB" }}>
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Technologies We Master</h2>
          <p className="text-white/70 mb-10">Cutting-edge stack to future-proof your product</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Flutter", "React Native", "Next.js", "React", "Node.js", "Laravel", "Python", "TensorFlow", "GPT-4", "AWS", "Firebase", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-5 py-2.5 rounded-full font-semibold text-sm cursor-default transition-all"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Official IT Badges & Industry Recognitions */}
      <CertificationBadgesGrid />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section - SEO Rich */}
      <section className="py-20 sm:py-24" style={{ background: "#F0F7FF" }}>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <span className="badge-blue mb-6" style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
              <MessageSquare className="w-4 h-4" /> Frequently Asked Questions
            </span>
            <h2 className="font-bold mb-4" style={{ color: "#0D1B2E" }}>
              Common <span style={{ background: "linear-gradient(135deg,#2983DB,#1A6BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
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
                className="bg-white rounded-2xl p-6 transition-all cursor-pointer" style={{ border: "1px solid #E0ECF8", boxShadow: "0 2px 10px rgba(41,131,219,0.05)" }}
              >
                <h3 className="text-base font-bold mb-3" style={{ color: "#0D1B2E" }}>{faq.question}</h3>
                <p style={{ color: "#4A6080" }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2983DB 0%, #1A6BB5 60%, #0D4F9A 100%)" }}>
        {/* Background rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none"
          animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/8 pointer-events-none"
          animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
        {/* Lime accent glow */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(177,245,31,0.12)" }} />

        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: "#B1F51F" }}></span>
              <span className="text-white font-semibold text-sm">Limited Slots: Only 3 Projects Available This Month</span>
            </div>

            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(2rem,6vw,3.5rem)" }}>
              Bring Your <span style={{ color: "#B1F51F" }}>App Idea</span> to Life
            </h2>
            <p className="text-lg sm:text-xl text-white/85 mb-12 max-w-3xl mx-auto">
              Get a complete consultation, project demo & transparent pricing within 30 minutes. Join 250+ businesses across India & Kuwait.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Button size="lg" className="font-bold text-base sm:text-lg px-8 sm:px-12 py-7 sm:py-8 rounded-full border-0 btn-shine" style={{ background: "#B1F51F", color: "#0D1B2E", boxShadow: "0 8px 32px rgba(177,245,31,0.45)" }}>
                    Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <a href="tel:+919872364476">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Button size="lg" className="font-bold text-base sm:text-lg px-8 sm:px-12 py-7 sm:py-8 rounded-full" style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white", background: "rgba(255,255,255,0.1)" }}>
                    <Phone className="w-5 h-5 mr-2" /> +91 98723 64476
                  </Button>
                </motion.div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white/75 text-sm sm:text-base">
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5" style={{ color: "#B1F51F" }} /> Free Consultation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5" style={{ color: "#B1F51F" }} /> No Obligation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5" style={{ color: "#B1F51F" }} /> Response in 24 Hours</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Lead Enquiry Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "#F0F7FF", borderTop: "1px solid #E0ECF8" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(41,131,219,0.06)" }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(177,245,31,0.05)" }}></div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4" style={{ color: "#0D1B2E", fontSize: "clamp(1.75rem,5vw,3rem)" }}>
              Get an Instant <span style={{ background: "linear-gradient(135deg,#2983DB,#B1F51F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Quote</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#4A6080" }}>
              Fill out the form below. Our consultants will evaluate your project scope and provide a free estimation report.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <Footer />

      {/* Floating Quick Action Widget */}
      <FloatingContact />
    </div>
  );
}
