import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Truck, MapPin, Clock, Package,
  MessageSquare, Phone, Users, CreditCard, BarChart3, Shield,
  Navigation, Bell, Star, Utensils, ShoppingBag, Pill
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function OnDemandAppDevelopment() {
  const features = [
    { title: "Real-time Tracking", desc: "Live GPS tracking, ETA updates & route optimization", icon: <Navigation className="w-6 h-6" /> },
    { title: "Multi-app Ecosystem", desc: "Customer app, driver app, vendor app & admin panel", icon: <Users className="w-6 h-6" /> },
    { title: "Smart Dispatch", desc: "AI-powered order assignment & route optimization", icon: <MapPin className="w-6 h-6" /> },
    { title: "Payment Integration", desc: "Multiple payment options, wallet & COD support", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Push Notifications", desc: "Order updates, promotions & driver alerts", icon: <Bell className="w-6 h-6" /> },
    { title: "Ratings & Reviews", desc: "Customer feedback, driver ratings & quality control", icon: <Star className="w-6 h-6" /> },
    { title: "Analytics Dashboard", desc: "Order metrics, revenue reports & driver performance", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scheduled Delivery", desc: "Advance booking, time slots & recurring orders", icon: <Clock className="w-6 h-6" /> },
  ];

  const appTypes = [
    { title: "Food Delivery App", desc: "Restaurant ordering with real-time tracking like Zomato/Swiggy", icon: <Utensils className="w-8 h-8" /> },
    { title: "Grocery Delivery App", desc: "Quick commerce with slot-based delivery like BigBasket/Blinkit", icon: <ShoppingBag className="w-8 h-8" /> },
    { title: "Medicine Delivery App", desc: "Pharmacy delivery with prescription upload like PharmEasy", icon: <Pill className="w-8 h-8" /> },
    { title: "Parcel & Logistics App", desc: "Courier services with multi-stop delivery like Dunzo/Porter", icon: <Package className="w-8 h-8" /> },
    { title: "Laundry & Cleaning App", desc: "On-demand home services with scheduling", icon: <Shield className="w-8 h-8" /> },
    { title: "Multi-service Platform", desc: "Super app combining multiple delivery services", icon: <Truck className="w-8 h-8" /> },
  ];

  const pricing = [
    { name: "Basic Delivery App", price: "₹50,000 – ₹90,000", priceKWD: "250 – 450 KWD", features: ["Customer App", "Driver App", "Admin Panel", "20-30 Days"] },
    { name: "Advanced Platform", price: "₹1,20,000 – ₹2,50,000", priceKWD: "600 – 1,200 KWD", features: ["Multi-vendor", "Real-time Tracking", "Analytics", "Wallet System", "45-60 Days"], popular: true },
    { name: "Enterprise Solution", price: "₹3,00,000 – ₹6,00,000", priceKWD: "1,500 – 3,000 KWD", features: ["AI Dispatch", "Route Optimization", "White-label", "Custom Features", "90-120 Days"] },
  ];

  const faqs = [
    {
      question: "How much does on-demand delivery app development cost?",
      answer: "On-demand delivery app development costs range from ₹50,000 for basic apps to ₹6,00,000+ for enterprise platforms. In Kuwait, prices range from 250 KWD to 3,000 KWD. Cost depends on features like real-time tracking, multi-vendor support, and AI dispatch."
    },
    {
      question: "Can you build apps like Zomato, Swiggy, or Talabat?",
      answer: "Yes! We build food delivery apps similar to Zomato, Swiggy, Talabat, and Uber Eats with features like restaurant listings, real-time tracking, driver management, and analytics. We customize based on your market requirements."
    },
    {
      question: "How many apps are included in a delivery platform?",
      answer: "A complete delivery platform includes 4 apps: Customer App (iOS & Android), Driver/Rider App, Vendor/Restaurant App, and Admin Dashboard. All apps are interconnected with real-time synchronization."
    },
    {
      question: "How long does it take to build a delivery app?",
      answer: "Basic delivery apps take 20-30 days, advanced platforms take 45-60 days, and enterprise solutions take 90-120 days. We follow agile methodology with weekly demos and milestone deliveries."
    },
    {
      question: "Do you provide delivery app maintenance?",
      answer: "Yes, we offer comprehensive maintenance including bug fixes, server management, feature updates, and 24/7 support. Maintenance packages start from ₹20,000/month for delivery platforms."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="On-Demand Delivery App Development | Food, Grocery, Logistics Apps | India & Kuwait" 
        description="Leading on-demand delivery app development company. We build food delivery, grocery, medicine, logistics apps with real-time tracking & AI dispatch. Zomato, Swiggy, Talabat clone development in India & Kuwait."
        keywords="on-demand delivery app development, food delivery app, grocery delivery app, logistics app development, Zomato clone, Swiggy clone, Talabat clone, delivery app India, delivery app Kuwait, courier app development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "On-Demand Delivery App Development", url: "https://webnovacrew.com/services/on-demand-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="On-Demand Delivery App Development"
        serviceDescription="Professional on-demand delivery app development. We build food, grocery, medicine, logistics apps with real-time tracking and AI dispatch."
        serviceUrl="https://webnovacrew.com/services/on-demand-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-red-500/30">
              <Truck className="w-4 h-4" /> Delivery App Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">On-Demand Delivery</span> App Development
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build powerful <strong className="text-white">food, grocery, medicine, parcel delivery apps</strong> with 
              <strong className="text-red-400"> real-time tracking, AI dispatch & multi-vendor support</strong>. We've delivered 80+ delivery platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-400 hover:to-yellow-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
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
              {[
                { value: "80+", label: "Delivery Apps" },
                { value: "10M+", label: "Orders Delivered" },
                { value: "50K+", label: "Drivers Onboarded" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-red-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Delivery App <span className="text-red-400">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-red-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of <span className="text-red-400">Delivery Apps</span> We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/50 transition-all"
              >
                <div className="text-red-400 mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-blue-200/70">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Delivery App <span className="text-red-400">Pricing</span>
            </h2>
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
                  tier.popular ? 'border-red-500 scale-105' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-sm font-bold px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-red-400">{tier.price}</span>
                  <span className="text-blue-200/60 ml-2">🇮🇳</span>
                </div>
                <div className="mb-6">
                  <span className="text-lg font-bold text-cyan-400">{tier.priceKWD}</span>
                  <span className="text-blue-200/60 ml-2">🇰🇼</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80">
                      <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full font-bold py-6 rounded-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white' 
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

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-red-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Delivery App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and detailed quote for your delivery platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg px-10 py-7 rounded-full">
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
