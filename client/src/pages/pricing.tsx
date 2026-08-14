import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone, MessageSquare, Smartphone, ShoppingCart, Building2, Truck, Brain, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [currency, setCurrency] = useState<"INR" | "KWD">("INR");

  const appPricing = [
    {
      category: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      tiers: [
        { name: "Starter App", priceINR: "₹25,000 – ₹60,000", priceKWD: "200 – 600 KWD", timeline: "7-15 Days", features: ["5-7 Screens", "Basic UI/UX", "API Integration", "Android OR iOS"] },
        { name: "Business App", priceINR: "₹65,000 – ₹1,20,000", priceKWD: "450 – 1,100 KWD", timeline: "15-30 Days", features: ["15-25 Screens", "Custom Design", "Admin Panel", "Payment Gateway", "Both Platforms"], popular: true },
        { name: "Enterprise App", priceINR: "₹1,20,000 – ₹5,00,000", priceKWD: "1,200 – 4,500 KWD", timeline: "30-45 Days", features: ["Unlimited Screens", "AI Features", "Multi-platform", "Advanced Analytics", "Priority Support"] },
      ]
    },
    {
      category: "E-commerce App",
      icon: <ShoppingCart className="w-8 h-8" />,
      tiers: [
        { name: "Starter Store", priceINR: "₹40,000 – ₹75,000", priceKWD: "200 – 400 KWD", timeline: "15-20 Days", features: ["Product Catalog", "Payment Gateway", "Order Management", "Basic Admin"] },
        { name: "Business Store", priceINR: "₹1,00,000 – ₹2,00,000", priceKWD: "500 – 1,000 KWD", timeline: "30-45 Days", features: ["Multi-vendor", "Shipping API", "Promotions", "Advanced Admin", "Analytics"], popular: true },
        { name: "Enterprise Platform", priceINR: "₹2,50,000 – ₹5,00,000", priceKWD: "1,200 – 2,500 KWD", timeline: "60-90 Days", features: ["AI Recommendations", "Inventory System", "Multi-currency", "Custom Features"] },
      ]
    },
    {
      category: "Real Estate App",
      icon: <Building2 className="w-8 h-8" />,
      tiers: [
        { name: "Basic Property App", priceINR: "₹45,000 – ₹80,000", priceKWD: "200 – 400 KWD", timeline: "15-20 Days", features: ["Property Listings", "Search & Filters", "Contact Agent", "Basic Admin"] },
        { name: "Advanced Platform", priceINR: "₹1,00,000 – ₹2,00,000", priceKWD: "500 – 1,000 KWD", timeline: "30-45 Days", features: ["CRM Dashboard", "Map Integration", "Virtual Tours", "Agent Panel"], popular: true },
        { name: "Enterprise Solution", priceINR: "₹2,50,000 – ₹5,00,000", priceKWD: "1,200 – 2,500 KWD", timeline: "60-90 Days", features: ["AI Valuation", "Multi-vendor", "Analytics", "Custom Features"] },
      ]
    },
    {
      category: "On-Demand Delivery App",
      icon: <Truck className="w-8 h-8" />,
      tiers: [
        { name: "Basic Delivery", priceINR: "₹50,000 – ₹90,000", priceKWD: "250 – 450 KWD", timeline: "20-30 Days", features: ["Customer App", "Driver App", "Admin Panel", "Basic Tracking"] },
        { name: "Advanced Platform", priceINR: "₹1,20,000 – ₹2,50,000", priceKWD: "600 – 1,200 KWD", timeline: "45-60 Days", features: ["Multi-vendor", "Real-time Tracking", "Analytics", "Wallet System"], popular: true },
        { name: "Enterprise Solution", priceINR: "₹3,00,000 – ₹6,00,000", priceKWD: "1,500 – 3,000 KWD", timeline: "90-120 Days", features: ["AI Dispatch", "Route Optimization", "White-label", "Custom Features"] },
      ]
    },
    {
      category: "AI App Development",
      icon: <Brain className="w-8 h-8" />,
      tiers: [
        { name: "AI Chatbot", priceINR: "₹50,000 – ₹1,00,000", priceKWD: "250 – 500 KWD", timeline: "15-25 Days", features: ["GPT Integration", "Basic Training", "Web Widget", "Analytics"] },
        { name: "AI Business App", priceINR: "₹1,50,000 – ₹3,00,000", priceKWD: "750 – 1,500 KWD", timeline: "30-60 Days", features: ["Custom AI Model", "Recommendations", "Predictions", "Dashboard"], popular: true },
        { name: "Enterprise AI", priceINR: "₹3,50,000 – ₹10,00,000", priceKWD: "1,750 – 5,000 KWD", timeline: "60-120 Days", features: ["Custom ML Models", "Multi-modal AI", "Advanced Analytics", "Full Integration"] },
      ]
    },
    {
      category: "ERP & CRM Development",
      icon: <Database className="w-8 h-8" />,
      tiers: [
        { name: "Basic CRM", priceINR: "₹60,000 – ₹1,20,000", priceKWD: "300 – 600 KWD", timeline: "30-45 Days", features: ["Lead Management", "Contact Database", "Basic Reports", "Email Integration"] },
        { name: "Advanced ERP", priceINR: "₹1,50,000 – ₹3,50,000", priceKWD: "750 – 1,750 KWD", timeline: "60-90 Days", features: ["Multi-module", "Custom Workflows", "Integrations", "Mobile App"], popular: true },
        { name: "Enterprise Suite", priceINR: "₹4,00,000 – ₹10,00,000", priceKWD: "2,000 – 5,000 KWD", timeline: "120-180 Days", features: ["Full ERP Suite", "AI Analytics", "Multi-branch", "Custom Features"] },
      ]
    },
  ];

  const guarantees = [
    "100% delivery guarantee",
    "60 days free support",
    "Milestone-based payments",
    "No hidden charges",
    "Clean code + documentation",
    "Source code ownership",
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Pricing India & Kuwait | Transparent Costs | Web Nova Crew" 
        description="Transparent app development pricing for India & Kuwait. Mobile apps from ₹25,000 / 200 KWD. E-commerce, AI, Real Estate, Delivery apps. No hidden fees. Get instant quote."
        keywords="app development cost India, app development pricing Kuwait, mobile app cost, e-commerce app price, AI app development cost, Flutter app price, React Native cost"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Pricing", url: "https://webnovacrew.com/pricing" }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-cyan-500/30">
              💰 Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
            </h1>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto mb-8">
              No hidden fees, no surprises. Transparent pricing for India & Kuwait. Milestone-based payments with 100% delivery guarantee.
            </p>
            
            {/* Currency Toggle */}
            <div className="inline-flex items-center bg-white/10 rounded-full p-1 mb-12">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-6 py-3 rounded-full font-bold transition-all ${currency === "INR" ? "bg-cyan-500 text-white" : "text-white/70 hover:text-white"}`}
              >
                🇮🇳 INR (India)
              </button>
              <button
                onClick={() => setCurrency("KWD")}
                className={`px-6 py-3 rounded-full font-bold transition-all ${currency === "KWD" ? "bg-green-500 text-white" : "text-white/70 hover:text-white"}`}
              >
                🇰🇼 KWD (Kuwait)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables */}
      {appPricing.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}`}>
          <div className="container mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white">
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{category.category}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.tiers.map((tier, tierIndex) => (
                <motion.div
                  key={tierIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: tierIndex * 0.1 }}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-6 ${
                    tier.popular ? "border-cyan-500 scale-105" : "border-white/10"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {currency === "INR" ? tier.priceINR : tier.priceKWD}
                  </div>
                  <div className="text-sm text-blue-200/60 mb-4">Timeline: {tier.timeline}</div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-blue-200/80 text-sm">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full font-bold py-5 rounded-full ${
                      tier.popular 
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}>
                      Get Quote
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Guarantees */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Promise</h2>
            <p className="text-white/80">Every project comes with these guarantees</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {guarantees.map((guarantee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <Check className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <span className="text-white font-semibold text-sm">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-xl text-blue-200/70 mb-8">
            Every project is unique. Contact us for a detailed proposal tailored to your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg px-10 py-7 rounded-full">
                Get Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/919872364476" target="_blank">
              <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-10 py-7 rounded-full">
                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
              </Button>
            </a>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full">
                <Phone className="w-5 h-5 mr-2" /> +91 98723 64476
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
