import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Truck, Package,
  Globe, Users, TrendingUp, Phone, Award, Rocket, Star, Shield, Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function KuwaitEcommerceAppDevelopment() {
  const features = [
    { title: "Product Catalog", desc: "Unlimited products with variants, images, and filters", icon: <Package className="w-6 h-6" /> },
    { title: "KNET & TAP Integration", desc: "Kuwait payment gateways with secure checkout", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Arabic + English UI", desc: "Bilingual RTL interface for Kuwait market", icon: <Globe className="w-6 h-6" /> },
    { title: "Delivery Integration", desc: "Local Kuwait delivery partners and tracking", icon: <Truck className="w-6 h-6" /> },
  ];

  const appTypes = [
    "Online Fashion Store Apps",
    "Grocery Delivery Apps",
    "Electronics Store Apps",
    "Multi-Vendor Marketplace Apps",
    "Wholesale B2B Apps",
    "Retail POS Integration Apps",
    "Subscription Box Apps",
    "Luxury Brand Apps"
  ];

  const ecommerceFeatures = [
    "Product Catalog & Categories",
    "Shopping Cart & Wishlist",
    "KNET Payment Gateway",
    "TAP Payment Integration",
    "STC Pay Integration",
    "Cash on Delivery (COD)",
    "Order Tracking & History",
    "Push Notifications",
    "Coupon & Discount System",
    "Loyalty Points & Rewards",
    "Multi-language (Arabic/English)",
    "Admin Dashboard",
    "Inventory Management",
    "Sales Analytics & Reports",
    "Customer Reviews & Ratings",
    "WhatsApp Order Support"
  ];

  const whyChooseUs = [
    { title: "Kuwait E-commerce Experts", desc: "Deep understanding of Kuwait shopping behavior", icon: <Award className="w-5 h-5" /> },
    { title: "KNET Certified Integration", desc: "Secure payment gateway implementation", icon: <Shield className="w-5 h-5" /> },
    { title: "Arabic-First Design", desc: "RTL layouts designed for Arabic users", icon: <Globe className="w-5 h-5" /> },
    { title: "Fast Delivery", desc: "Launch your store in 30-60 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "Local Delivery Partners", desc: "Integration with Kuwait logistics", icon: <Truck className="w-5 h-5" /> },
    { title: "Ongoing Support", desc: "Kuwait business hours support", icon: <Users className="w-5 h-5" /> },
  ];

  const pricing = [
    { tier: "Basic Store", price: "400-800 KWD", features: ["Product catalog", "Cart & checkout", "KNET payment", "Basic admin panel"] },
    { tier: "Business Store", price: "900-1,800 KWD", features: ["All Basic features", "Multi-vendor", "Loyalty program", "Advanced analytics"] },
    { tier: "Enterprise Store", price: "2,000-4,500 KWD", features: ["All Business features", "AI recommendations", "Custom integrations", "Dedicated support"] },
  ];

  const faqs = [
    {
      question: "How much does e-commerce app development cost in Kuwait?",
      answer: "E-commerce app development in Kuwait costs 400-4,500 KWD depending on features. Basic online store apps start at 400-800 KWD, business apps with multi-vendor cost 900-1,800 KWD, and enterprise solutions with AI cost 2,000-4,500 KWD."
    },
    {
      question: "Can you integrate KNET payment gateway?",
      answer: "Yes! We are experts in KNET integration for Kuwait e-commerce apps. We also integrate TAP, STC Pay, credit cards, and Cash on Delivery (COD) options for maximum customer convenience."
    },
    {
      question: "Do you build Arabic e-commerce apps?",
      answer: "Absolutely! All our Kuwait e-commerce apps include full Arabic + English bilingual support with proper RTL (right-to-left) layout, Arabic product descriptions, and Arabic customer notifications."
    },
    {
      question: "How long does it take to build an e-commerce app in Kuwait?",
      answer: "E-commerce app development in Kuwait takes 30-90 days. Basic store apps take 30-45 days, business apps require 45-60 days, and enterprise solutions with custom features take 60-90 days."
    },
    {
      question: "Can you integrate with Kuwait delivery companies?",
      answer: "Yes, we integrate with popular Kuwait delivery partners and logistics companies. We also build custom delivery tracking, driver apps, and real-time order status updates."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="E-commerce App Development Kuwait | Online Store Apps | KNET Integration"
        description="Leading e-commerce app development company in Kuwait. Build Arabic + English online store apps with KNET, TAP payment integration. Grocery, fashion, retail apps. 400 KWD onwards."
        keywords="e-commerce app development Kuwait, online store app Kuwait, KNET integration, Kuwait shopping app, Arabic e-commerce app, grocery app Kuwait, retail app development Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Kuwait Locations", url: "https://webnovacrew.com/locations" },
        { name: "E-commerce App Development", url: "https://webnovacrew.com/locations/kuwait-ecommerce-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="E-commerce App Development Kuwait"
        serviceDescription="Professional e-commerce and online store app development in Kuwait with KNET payment integration, Arabic support, and local delivery integration."
        serviceUrl="https://webnovacrew.com/locations/kuwait-ecommerce-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <ShoppingCart className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">🇰🇼 Kuwait E-commerce Experts • KNET Certified</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
              E-commerce App Development in Kuwait
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build powerful <span className="text-emerald-400 font-semibold">online shopping apps</span> for Kuwait with KNET payment integration, Arabic + English support, and local delivery partners.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View E-commerce Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">50+</div>
                <div className="text-sm text-slate-400">Kuwait Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">400</div>
                <div className="text-sm text-slate-400">KWD Starting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">30-60</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">KNET Ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Kuwait E-commerce Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to sell online in Kuwait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              E-commerce Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom online store solutions for every Kuwait business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">{type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Kuwait E-commerce App Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent pricing in Kuwaiti Dinar (KWD)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose Us for Kuwait E-commerce
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              E-commerce App FAQs - Kuwait
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Launch Your Kuwait Online Store?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed e-commerce app proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Kuwait Team
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
              <Link href="/pricing">
                View Full Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
