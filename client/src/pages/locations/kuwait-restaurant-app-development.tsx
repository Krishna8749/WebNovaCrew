import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, UtensilsCrossed, CreditCard, Truck, QrCode,
  Globe, Users, TrendingUp, Phone, Award, Rocket, Star, Shield, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function KuwaitRestaurantAppDevelopment() {
  const features = [
    { title: "Online Food Ordering", desc: "Menu browsing, cart, and seamless checkout", icon: <UtensilsCrossed className="w-6 h-6" /> },
    { title: "KNET Payment", desc: "Secure Kuwait payment gateway integration", icon: <CreditCard className="w-6 h-6" /> },
    { title: "QR Menu System", desc: "Contactless digital menus for dine-in", icon: <QrCode className="w-6 h-6" /> },
    { title: "Delivery Tracking", desc: "Real-time order and driver tracking", icon: <Truck className="w-6 h-6" /> },
  ];

  const appTypes = [
    "Restaurant Ordering Apps",
    "Food Delivery Apps",
    "Café & Coffee Shop Apps",
    "Cloud Kitchen Apps",
    "Table Booking Apps",
    "Catering Service Apps",
    "Multi-Restaurant Marketplace",
    "Loyalty & Rewards Apps"
  ];

  const restaurantFeatures = [
    "Digital Menu with Photos",
    "Online Ordering System",
    "Table Reservation",
    "QR Code Menu Scanning",
    "KNET Payment Gateway",
    "TAP & STC Pay Integration",
    "Cash on Delivery",
    "Real-time Order Tracking",
    "Push Notifications",
    "Loyalty Points System",
    "Coupon & Offers",
    "Arabic + English Menu",
    "Kitchen Display System",
    "Order Management Panel",
    "Delivery Driver App",
    "Analytics Dashboard"
  ];

  const whyChooseUs = [
    { title: "Kuwait F&B Experts", desc: "Understanding of Kuwait dining culture", icon: <Award className="w-5 h-5" /> },
    { title: "Talabat-like Features", desc: "Build apps like top Kuwait platforms", icon: <Star className="w-5 h-5" /> },
    { title: "Arabic Menu Support", desc: "Full RTL Arabic menu management", icon: <Globe className="w-5 h-5" /> },
    { title: "Fast Launch", desc: "Go live in 25-45 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "KNET Certified", desc: "Secure payment integration", icon: <Shield className="w-5 h-5" /> },
    { title: "24/7 Support", desc: "Restaurant hours support available", icon: <Clock className="w-5 h-5" /> },
  ];

  const pricing = [
    { tier: "Single Restaurant", price: "350-700 KWD", features: ["Menu & ordering", "KNET payment", "Basic admin panel", "Push notifications"] },
    { tier: "Restaurant Chain", price: "800-1,500 KWD", features: ["Multi-branch support", "Loyalty program", "Driver app", "Advanced analytics"] },
    { tier: "Food Marketplace", price: "1,800-4,000 KWD", features: ["Multi-vendor platform", "Commission system", "AI recommendations", "Full ecosystem"] },
  ];

  const faqs = [
    {
      question: "How much does restaurant app development cost in Kuwait?",
      answer: "Restaurant app development in Kuwait costs 350-4,000 KWD. Single restaurant apps start at 350-700 KWD, restaurant chain apps cost 800-1,500 KWD, and multi-vendor food marketplaces cost 1,800-4,000 KWD."
    },
    {
      question: "Can you build an app like Talabat for Kuwait?",
      answer: "Yes! We build Talabat-like food delivery apps with all features including multi-restaurant listings, real-time tracking, driver apps, KNET payment, and Arabic support. We can customize features based on your business model."
    },
    {
      question: "Do you integrate with Kuwait delivery services?",
      answer: "Yes, we integrate with Kuwait delivery partners or build custom delivery driver apps with GPS tracking, order assignment, and earnings management for your own delivery fleet."
    },
    {
      question: "Can customers order in Arabic?",
      answer: "Absolutely! All our Kuwait restaurant apps include full Arabic + English bilingual support with RTL layout, Arabic menu items, Arabic notifications, and Arabic customer support features."
    },
    {
      question: "How long does it take to build a restaurant app?",
      answer: "Restaurant app development takes 25-60 days in Kuwait. Single restaurant apps take 25-35 days, chain restaurant apps require 35-45 days, and full marketplace platforms take 45-60 days."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Restaurant App Development Kuwait | Food Ordering Apps | KNET Integration"
        description="Leading restaurant app development company in Kuwait. Build food ordering, delivery, table booking apps with KNET payment, QR menus, Arabic support. 350 KWD onwards."
        keywords="restaurant app development Kuwait, food ordering app Kuwait, food delivery app Kuwait, KNET restaurant app, Arabic restaurant app, QR menu Kuwait, table booking app Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Kuwait Locations", url: "https://webnovacrew.com/locations" },
        { name: "Restaurant App Development", url: "https://webnovacrew.com/locations/kuwait-restaurant-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Restaurant App Development Kuwait"
        serviceDescription="Professional restaurant and food ordering app development in Kuwait with KNET payment, QR menus, delivery tracking, and Arabic support."
        serviceUrl="https://webnovacrew.com/locations/kuwait-restaurant-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <UtensilsCrossed className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">🇰🇼 Kuwait Restaurant App Experts • KNET Ready</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
              Restaurant App Development in Kuwait
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build powerful <span className="text-orange-400 font-semibold">food ordering and delivery apps</span> for Kuwait restaurants with KNET payment, QR menus, table booking, and Arabic support.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Restaurant Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">40+</div>
                <div className="text-sm text-slate-400">Restaurant Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">350</div>
                <div className="text-sm text-slate-400">KWD Starting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">25-45</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Arabic Support</div>
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
              Restaurant App Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything your Kuwait restaurant needs to go digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {restaurantFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
              Restaurant Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom food & beverage solutions for Kuwait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-orange-400" />
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
              Kuwait Restaurant App Pricing
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
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
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
              Why Choose Us for Kuwait Restaurant Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-4">
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
              Restaurant App FAQs - Kuwait
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
      <section className="py-20 bg-gradient-to-br from-orange-950/50 to-red-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Digitize Your Kuwait Restaurant?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed restaurant app proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
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
