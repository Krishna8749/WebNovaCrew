import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Package,
  MessageSquare, Phone, Award, Truck, Store, BarChart3, Shield,
  Users, Tag, Percent, Globe, Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function EcommerceAppDevelopment() {
  const features = [
    { title: "Product Catalog", desc: "Unlimited products, categories, variants & inventory management", icon: <Package className="w-6 h-6" /> },
    { title: "Payment Gateway", desc: "Razorpay, Stripe, PayPal, KNET, COD & wallet integration", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Order Management", desc: "Order tracking, status updates, returns & refunds", icon: <ShoppingCart className="w-6 h-6" /> },
    { title: "Shipping Integration", desc: "Shiprocket, Delhivery, FedEx & custom courier APIs", icon: <Truck className="w-6 h-6" /> },
    { title: "Multi-vendor Support", desc: "Vendor dashboard, commission management & payouts", icon: <Store className="w-6 h-6" /> },
    { title: "Promotions & Coupons", desc: "Discount codes, flash sales, loyalty programs", icon: <Percent className="w-6 h-6" /> },
    { title: "Analytics Dashboard", desc: "Sales reports, customer insights & inventory alerts", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Customer Management", desc: "User profiles, wishlists, reviews & ratings", icon: <Users className="w-6 h-6" /> },
  ];

  const appTypes = [
    { title: "Single Vendor Store", desc: "Your own branded e-commerce app with full control" },
    { title: "Multi-vendor Marketplace", desc: "Platform connecting multiple sellers like Amazon/Flipkart" },
    { title: "B2B E-commerce", desc: "Wholesale platform with bulk pricing & credit terms" },
    { title: "Grocery & Supermarket", desc: "Quick commerce with slot-based delivery" },
    { title: "Fashion & Lifestyle", desc: "Apparel store with size guides & AR try-on" },
    { title: "Electronics Store", desc: "Tech products with specifications & comparisons" },
  ];

  const pricing = [
    { name: "Starter Store", price: "₹40,000 – ₹75,000", priceKWD: "200 – 400 KWD", features: ["Product Catalog", "Payment Gateway", "Order Management", "15-20 Days"] },
    { name: "Business Store", price: "₹1,00,000 – ₹2,00,000", priceKWD: "500 – 1,000 KWD", features: ["Multi-vendor", "Shipping API", "Promotions", "Admin Panel", "30-45 Days"], popular: true },
    { name: "Enterprise Platform", price: "₹2,50,000 – ₹5,00,000", priceKWD: "1,200 – 2,500 KWD", features: ["AI Recommendations", "Advanced Analytics", "Custom Features", "60-90 Days"] },
  ];

  const faqs = [
    {
      question: "How much does e-commerce app development cost?",
      answer: "E-commerce app development costs range from ₹40,000 for basic stores to ₹5,00,000+ for enterprise platforms. In Kuwait, prices range from 200 KWD to 2,500 KWD. Cost depends on features like multi-vendor support, payment gateways, and AI recommendations."
    },
    {
      question: "Can you build apps like Amazon, Flipkart, or Noon?",
      answer: "Yes! We build multi-vendor marketplaces similar to Amazon, Flipkart, and Noon with features like vendor management, product listings, reviews, order tracking, and advanced search. We customize based on your specific requirements."
    },
    {
      question: "Which payment gateways do you integrate?",
      answer: "We integrate all major payment gateways including Razorpay, Stripe, PayPal, Paytm, PhonePe for India, and KNET, Tap Payments, STC Pay for Kuwait. We also support COD, wallet, and EMI options."
    },
    {
      question: "How long does it take to build an e-commerce app?",
      answer: "Basic e-commerce apps take 15-30 days, business apps with multi-vendor support take 30-45 days, and enterprise platforms take 60-90 days. We follow agile methodology with weekly demos."
    },
    {
      question: "Do you provide e-commerce app maintenance?",
      answer: "Yes, we offer comprehensive maintenance including bug fixes, security updates, payment gateway updates, feature enhancements, and 24/7 support. Maintenance packages start from ₹15,000/month."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="E-commerce App Development Company | Online Store Apps | India & Kuwait" 
        description="Leading e-commerce app development company. We build online shopping apps, multi-vendor marketplaces, B2B platforms with payment gateway, shipping integration. 100+ e-commerce projects in India & Kuwait."
        keywords="e-commerce app development, online store app, shopping app development, multi-vendor marketplace, e-commerce app India, shopping app Kuwait, Amazon clone, Flipkart clone, Noon clone, online shopping app development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "E-commerce App Development", url: "https://webnovacrew.com/services/ecommerce-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="E-commerce App Development"
        serviceDescription="Professional e-commerce app development services. We build online stores, multi-vendor marketplaces with payment gateway and shipping integration."
        serviceUrl="https://webnovacrew.com/services/ecommerce-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-orange-500/30">
              <ShoppingCart className="w-4 h-4" /> E-commerce Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">E-commerce App</span> Development Company
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build powerful <strong className="text-white">online stores, multi-vendor marketplaces, B2B platforms</strong> with 
              <strong className="text-orange-400"> payment gateway, shipping integration & AI recommendations</strong>. We've delivered 100+ e-commerce projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
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
                { value: "100+", label: "E-commerce Apps" },
                { value: "₹50Cr+", label: "GMV Processed" },
                { value: "5M+", label: "Orders Delivered" },
                { value: "500K+", label: "App Users" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">{stat.value}</div>
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
              E-commerce App <span className="text-orange-400">Features</span>
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-24 bg-gradient-to-b from-slate-950 to-orange-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of <span className="text-orange-400">E-commerce Apps</span> We Build
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
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all"
              >
                <Store className="w-10 h-10 text-orange-400 mb-4" />
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
              E-commerce App <span className="text-orange-400">Pricing</span>
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
                  tier.popular ? 'border-orange-500 scale-105' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-orange-400">{tier.price}</span>
                  <span className="text-blue-200/60 ml-2">🇮🇳</span>
                </div>
                <div className="mb-6">
                  <span className="text-lg font-bold text-cyan-400">{tier.priceKWD}</span>
                  <span className="text-blue-200/60 ml-2">🇰🇼</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80">
                      <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full font-bold py-6 rounded-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
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
      <section className="py-24 bg-gradient-to-b from-slate-950 to-orange-950/20">
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
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and detailed quote for your e-commerce app.
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
