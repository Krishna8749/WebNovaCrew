import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Truck, MapPin, Package, BarChart3,
  Globe, Users, TrendingUp, Phone, Award, Rocket, Star, Shield, Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function KuwaitLogisticsAppDevelopment() {
  const features = [
    { title: "Fleet Management", desc: "Track and manage your entire vehicle fleet in real-time", icon: <Truck className="w-6 h-6" /> },
    { title: "Live GPS Tracking", desc: "Real-time location tracking for all deliveries", icon: <Navigation className="w-6 h-6" /> },
    { title: "Route Optimization", desc: "AI-powered route planning for faster deliveries", icon: <MapPin className="w-6 h-6" /> },
    { title: "Proof of Delivery", desc: "Digital signatures, photos, and delivery confirmation", icon: <Package className="w-6 h-6" /> },
  ];

  const appTypes = [
    "Fleet Management Apps",
    "Delivery Tracking Apps",
    "Courier Service Apps",
    "Warehouse Management Apps",
    "Last-Mile Delivery Apps",
    "Freight & Cargo Apps",
    "Driver Management Apps",
    "Dispatch & Booking Apps"
  ];

  const logisticsFeatures = [
    "Real-time GPS Tracking",
    "Route Optimization",
    "Driver Mobile App",
    "Customer Tracking Portal",
    "Proof of Delivery (POD)",
    "Digital Signatures",
    "Photo Documentation",
    "Automated Dispatch",
    "Order Management",
    "Warehouse Integration",
    "Arabic + English UI",
    "Admin Dashboard",
    "Driver Performance Analytics",
    "Fuel Management",
    "Vehicle Maintenance Alerts",
    "Customer Notifications"
  ];

  const whyChooseUs = [
    { title: "Kuwait Logistics Experts", desc: "Understanding of Kuwait delivery landscape", icon: <Award className="w-5 h-5" /> },
    { title: "Arabic Driver Apps", desc: "Full RTL Arabic interface for drivers", icon: <Globe className="w-5 h-5" /> },
    { title: "GPS Integration", desc: "Kuwait-optimized maps and routing", icon: <MapPin className="w-5 h-5" /> },
    { title: "Fast Launch", desc: "Go live in 35-60 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "Scalable Solution", desc: "From 10 to 1000+ vehicles", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "24/7 Support", desc: "Round-the-clock logistics support", icon: <Shield className="w-5 h-5" /> },
  ];

  const pricing = [
    { tier: "Starter Fleet", price: "600-1,000 KWD", features: ["Up to 20 vehicles", "GPS tracking", "Driver app", "Basic analytics"] },
    { tier: "Business Fleet", price: "1,200-2,500 KWD", features: ["Up to 100 vehicles", "Route optimization", "Customer portal", "Advanced analytics"] },
    { tier: "Enterprise Fleet", price: "3,000-5,000 KWD", features: ["Unlimited vehicles", "AI optimization", "Warehouse integration", "Custom features"] },
  ];

  const faqs = [
    {
      question: "How much does logistics app development cost in Kuwait?",
      answer: "Logistics app development in Kuwait costs 600-5,000 KWD. Starter fleet apps for up to 20 vehicles cost 600-1,000 KWD, business fleet apps cost 1,200-2,500 KWD, and enterprise solutions with unlimited vehicles cost 3,000-5,000 KWD."
    },
    {
      question: "Can you build Arabic logistics apps for Kuwait drivers?",
      answer: "Yes! All our Kuwait logistics apps include full Arabic + English bilingual support with RTL layout. Driver apps, customer tracking, and admin panels all support Arabic for seamless operations."
    },
    {
      question: "Do you integrate with GPS and mapping services?",
      answer: "Absolutely! We integrate Google Maps, GPS tracking, and route optimization specifically configured for Kuwait roads and locations. Real-time tracking works across all Kuwait governorates."
    },
    {
      question: "Can you build apps for different types of logistics?",
      answer: "Yes, we build apps for courier services, freight companies, last-mile delivery, warehouse operations, cold chain logistics, and custom logistics solutions tailored to your Kuwait business needs."
    },
    {
      question: "How long does it take to build a logistics app?",
      answer: "Logistics app development takes 35-75 days in Kuwait. Starter fleet apps take 35-45 days, business fleet apps require 45-55 days, and enterprise solutions with advanced features take 55-75 days."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Logistics App Development Kuwait | Fleet Management | Delivery Tracking"
        description="Leading logistics app development company in Kuwait. Build fleet management, delivery tracking, driver apps with GPS, route optimization, Arabic support. 600 KWD onwards."
        keywords="logistics app development Kuwait, fleet management app Kuwait, delivery tracking app Kuwait, driver app Kuwait, courier app Kuwait, GPS tracking Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Kuwait Locations", url: "https://webnovacrew.com/locations" },
        { name: "Logistics App Development", url: "https://webnovacrew.com/locations/kuwait-logistics-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Logistics App Development Kuwait"
        serviceDescription="Professional logistics and fleet management app development in Kuwait with GPS tracking, route optimization, driver apps, and Arabic support."
        serviceUrl="https://webnovacrew.com/locations/kuwait-logistics-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Truck className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">🇰🇼 Kuwait Logistics App Experts • GPS Enabled</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-yellow-100 bg-clip-text text-transparent">
              Logistics App Development in Kuwait
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build powerful <span className="text-amber-400 font-semibold">fleet management and delivery tracking apps</span> for Kuwait with GPS tracking, route optimization, driver apps, and Arabic support.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Logistics Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">25+</div>
                <div className="text-sm text-slate-400">Logistics Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">600</div>
                <div className="text-sm text-slate-400">KWD Starting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">35-60</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">GPS Enabled</div>
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
              Logistics App Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need for Kuwait logistics operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {logisticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
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
              Logistics Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom logistics solutions for Kuwait businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-amber-400" />
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
              Kuwait Logistics App Pricing
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
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-amber-400 mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
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
              Why Choose Us for Kuwait Logistics Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-4">
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
              Logistics App FAQs - Kuwait
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
      <section className="py-20 bg-gradient-to-br from-amber-950/50 to-yellow-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Optimize Your Kuwait Logistics?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed logistics app proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8">
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
