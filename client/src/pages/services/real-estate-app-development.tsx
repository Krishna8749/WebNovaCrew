import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Building2, MapPin, Search, Camera,
  MessageSquare, Phone, Award, Users, Home, Key, Calculator,
  Map, Video, BarChart3, Shield, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function RealEstateAppDevelopment() {
  const features = [
    { title: "Property Listing & Search", desc: "Advanced filters, map view, saved searches & property alerts", icon: <Search className="w-6 h-6" /> },
    { title: "Virtual Property Tours", desc: "360° tours, video walkthroughs & AR visualization", icon: <Video className="w-6 h-6" /> },
    { title: "Agent CRM & Dashboard", desc: "Lead management, follow-ups, commission tracking", icon: <Users className="w-6 h-6" /> },
    { title: "Property Valuation AI", desc: "AI-powered price estimation & market analysis", icon: <Calculator className="w-6 h-6" /> },
    { title: "Map Integration", desc: "Google Maps, nearby amenities, neighborhood insights", icon: <Map className="w-6 h-6" /> },
    { title: "Document Management", desc: "Secure document upload, e-signatures & verification", icon: <Shield className="w-6 h-6" /> },
    { title: "Appointment Scheduling", desc: "Property visit booking, calendar sync & reminders", icon: <Clock className="w-6 h-6" /> },
    { title: "Analytics Dashboard", desc: "Property views, lead conversion & market trends", icon: <BarChart3 className="w-6 h-6" /> },
  ];

  const appTypes = [
    { title: "Property Listing App", desc: "Buy, sell, rent properties with advanced search & filters" },
    { title: "Real Estate CRM", desc: "Agent & broker management with lead tracking" },
    { title: "Property Management App", desc: "Tenant management, rent collection, maintenance" },
    { title: "Real Estate Marketplace", desc: "Multi-vendor platform connecting buyers, sellers & agents" },
    { title: "Rental App", desc: "Short-term & long-term rental booking platform" },
    { title: "Commercial Real Estate App", desc: "Office spaces, retail, industrial property listings" },
  ];

  const pricing = [
    { name: "Basic Property App", price: "₹45,000 – ₹80,000", priceKWD: "200 – 400 KWD", features: ["Property Listings", "Search & Filters", "Contact Agent", "15-20 Days"] },
    { name: "Advanced Real Estate App", price: "₹1,00,000 – ₹2,00,000", priceKWD: "500 – 1,000 KWD", features: ["CRM Dashboard", "Map Integration", "Virtual Tours", "Admin Panel", "30-45 Days"], popular: true },
    { name: "Enterprise Platform", price: "₹2,50,000 – ₹5,00,000", priceKWD: "1,200 – 2,500 KWD", features: ["AI Valuation", "Multi-vendor", "Analytics", "Custom Features", "60-90 Days"] },
  ];

  const faqs = [
    {
      question: "How much does real estate app development cost?",
      answer: "Real estate app development costs range from ₹45,000 for basic listing apps to ₹5,00,000+ for enterprise platforms with AI features. In Kuwait, prices range from 200 KWD to 2,500 KWD depending on features and complexity."
    },
    {
      question: "What features should a real estate app have?",
      answer: "Essential features include property listings with photos/videos, advanced search filters, map integration, agent profiles, inquiry forms, favorites/saved properties, push notifications, and admin dashboard. Advanced features include virtual tours, AI valuation, CRM, and analytics."
    },
    {
      question: "How long does it take to build a real estate app?",
      answer: "Basic real estate apps take 15-30 days, advanced apps with CRM take 30-45 days, and enterprise platforms with AI features take 60-90 days. We follow agile methodology with weekly updates."
    },
    {
      question: "Can you build apps like 99acres, MagicBricks, or Zillow?",
      answer: "Yes! We have extensive experience building property listing platforms similar to 99acres, MagicBricks, Housing.com, and Zillow. We can customize features based on your specific market and requirements."
    },
    {
      question: "Do you provide real estate app maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 support. Maintenance starts from ₹15,000/month."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Real Estate App Development Company | Property Listing Apps | India & Kuwait" 
        description="Leading real estate app development company. We build property listing apps, real estate CRM, rental apps with virtual tours, AI valuation & map integration. 50+ real estate projects delivered in India & Kuwait."
        keywords="real estate app development, property listing app, real estate CRM development, rental app development, property management app, real estate marketplace, real estate app development India, property app Kuwait, 99acres clone, MagicBricks clone"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "Real Estate App Development", url: "https://webnovacrew.com/services/real-estate-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Real Estate App Development"
        serviceDescription="Professional real estate app development services. We build property listing apps, CRM systems, rental platforms with virtual tours and AI features."
        serviceUrl="https://webnovacrew.com/services/real-estate-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/30">
              <Building2 className="w-4 h-4" /> #1 Real Estate App Developers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Real Estate App</span> Development Company
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build powerful <strong className="text-white">property listing apps, real estate CRM, rental platforms</strong> with 
              <strong className="text-emerald-400"> virtual tours, AI valuation & advanced search</strong>. We've delivered 50+ real estate projects across India & Kuwait.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
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
                { value: "50+", label: "Real Estate Apps" },
                { value: "₹10Cr+", label: "Revenue Generated" },
                { value: "1M+", label: "Properties Listed" },
                { value: "100K+", label: "App Users" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">{stat.value}</div>
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
              Real Estate App <span className="text-emerald-400">Features</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Comprehensive features to build the perfect property platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-24 bg-gradient-to-b from-slate-950 to-emerald-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of <span className="text-emerald-400">Real Estate Apps</span> We Build
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
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <Home className="w-10 h-10 text-emerald-400 mb-4" />
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
              Real Estate App <span className="text-emerald-400">Pricing</span>
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
                  tier.popular ? 'border-emerald-500 scale-105' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-emerald-400">{tier.price}</span>
                  <span className="text-blue-200/60 ml-2">🇮🇳</span>
                </div>
                <div className="mb-6">
                  <span className="text-lg font-bold text-cyan-400">{tier.priceKWD}</span>
                  <span className="text-blue-200/60 ml-2">🇰🇼</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full font-bold py-6 rounded-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white' 
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
      <section className="py-24 bg-gradient-to-b from-slate-950 to-emerald-950/20">
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
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Real Estate App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and detailed quote for your property platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-lg px-10 py-7 rounded-full">
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
