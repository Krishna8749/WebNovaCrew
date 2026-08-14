import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Camera, Briefcase, Clock, Hotel
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentAgra() {
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin apps for Agra's tourism, handicraft, and local businesses. Optimized for diverse user base.", 
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design", "Offline Mode", "Multi-language"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift apps for iPhone users. Perfect for tourism apps targeting international visitors to Taj Mahal.", 
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17", "Apple Pay", "AR Kit"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform apps with single codebase. Cost-effective for Agra startups and small businesses.", 
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Beautiful UI"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based apps with native feel. Quick development for Agra's growing tech ecosystem.", 
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript", "Native Modules", "Fast Dev", "Code Reuse"]
    },
    { 
      title: "Tourism & Travel Apps", 
      desc: "Specialized apps for Agra's tourism industry. Tour booking, guide apps, AR heritage tours, hotel booking.", 
      icon: <Camera className="w-6 h-6" />,
      features: ["Tour Booking", "AR Tours", "Audio Guides", "Multi-language"]
    },
    { 
      title: "Handicraft & Marble Apps", 
      desc: "E-commerce and B2B apps for Agra's famous marble inlay and handicraft industry.", 
      icon: <Database className="w-6 h-6" />,
      features: ["Product Catalog", "B2B Portal", "Order Management", "Shipping"]
    },
    { 
      title: "Hotel & Hospitality Apps", 
      desc: "Booking apps, guest management, and hospitality solutions for Agra's hotel industry.", 
      icon: <Hotel className="w-6 h-6" />,
      features: ["Room Booking", "Guest Management", "POS Integration", "Reviews"]
    },
    { 
      title: "AI & AR Apps", 
      desc: "Augmented reality heritage tours, AI chatbots for tourism, and smart automation apps.", 
      icon: <Cpu className="w-6 h-6" />,
      features: ["AR Tours", "AI Chatbots", "Image Recognition", "Voice Guide"]
    },
  ];

  const industries = [
    { name: "Tourism & Travel", desc: "Taj Mahal tours, heritage walks, travel booking" },
    { name: "Handicrafts & Marble", desc: "Marble inlay, Zardozi, leather goods" },
    { name: "Hotels & Hospitality", desc: "Hotel booking, guest management" },
    { name: "Footwear Industry", desc: "Shoe manufacturing, B2B trade" },
    { name: "Food & Petha", desc: "Sweet shops, food delivery" },
    { name: "Education", desc: "Schools, coaching centers" },
    { name: "Real Estate", desc: "Property listing, rentals" },
    { name: "Healthcare", desc: "Hospitals, clinics, diagnostics" }
  ];

  const areas = [
    { name: "Taj Ganj", type: "Tourism Hub" },
    { name: "Sadar Bazaar", type: "Commercial" },
    { name: "Civil Lines", type: "Business" },
    { name: "Sanjay Place", type: "Commercial" },
    { name: "Kamla Nagar", type: "Residential" },
    { name: "Sikandra", type: "Heritage" },
    { name: "Fatehabad Road", type: "Hotels" },
    { name: "MG Road", type: "Commercial" },
    { name: "Shahganj", type: "Market" },
    { name: "Dayalbagh", type: "Industrial" },
    { name: "Belanganj", type: "Commercial" },
    { name: "Raja Ki Mandi", type: "Transport Hub" }
  ];

  const whyChooseUs = [
    { 
      title: "Tourism App Experts", 
      desc: "Specialized in tourism apps with AR tours, multi-language support, and offline functionality for Agra's 8M+ annual tourists.", 
      icon: <Camera className="w-5 h-5" />,
      stats: "20+ Tourism Apps"
    },
    { 
      title: "Handicraft E-commerce", 
      desc: "Experience building e-commerce platforms for Agra's famous marble inlay, Zardozi, and handicraft businesses.", 
      icon: <Database className="w-5 h-5" />,
      stats: "15+ E-commerce Apps"
    },
    { 
      title: "Most Affordable in UP", 
      desc: "Based in Lucknow, just 330 km away. Save 40-50% compared to Delhi agencies with same quality.", 
      icon: <Star className="w-5 h-5" />,
      stats: "40-50% Savings"
    },
    { 
      title: "Multi-language Support", 
      desc: "Apps in Hindi, English, and other languages for international tourists visiting Agra.", 
      icon: <Globe className="w-5 h-5" />,
      stats: "10+ Languages"
    },
    { 
      title: "AR & AI Integration", 
      desc: "Augmented reality heritage tours, AI-powered chatbots, and smart recommendations.", 
      icon: <Cpu className="w-5 h-5" />,
      stats: "AR/AI Ready"
    },
    { 
      title: "On-Site Support", 
      desc: "Regular visits to Agra for client meetings. Just 4 hours from our Lucknow office.", 
      icon: <Users className="w-5 h-5" />,
      stats: "Monthly Visits"
    },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "Understanding your Agra business, target audience (tourists/locals), and app requirements.", duration: "1-2 Days" },
    { step: "2", title: "Design", desc: "Creating beautiful, intuitive designs with multi-language support.", duration: "1-2 Weeks" },
    { step: "3", title: "Development", desc: "Agile development with regular demos and feedback.", duration: "3-8 Weeks" },
    { step: "4", title: "Testing", desc: "Testing on 50+ devices, offline mode, and multi-language testing.", duration: "1 Week" },
    { step: "5", title: "Launch", desc: "App Store submission and post-launch support.", duration: "Ongoing" },
  ];

  const pricing = [
    { 
      tier: "Starter", 
      price: "₹25,000 - ₹75,000", 
      ideal: "Small businesses & MVPs",
      features: [
        "Single platform (Android OR iOS)",
        "Up to 10 screens",
        "Basic UI/UX design",
        "Hindi + English support",
        "Push notifications",
        "3-4 weeks delivery",
        "30 days free support"
      ],
      popular: false
    },
    { 
      tier: "Business", 
      price: "₹75,000 - ₹2,00,000", 
      ideal: "Tourism & hospitality",
      features: [
        "Android + iOS apps",
        "Up to 25 screens",
        "Premium UI/UX design",
        "Multi-language (5+ languages)",
        "Payment gateway",
        "Booking system",
        "6-8 weeks delivery",
        "90 days free support"
      ],
      popular: true
    },
    { 
      tier: "Enterprise", 
      price: "₹2,00,000 - ₹5,00,000", 
      ideal: "Large tourism companies",
      features: [
        "Android + iOS + Web",
        "Unlimited screens",
        "AR/VR integration",
        "AI chatbot",
        "Custom CRM/ERP",
        "Dedicated team",
        "10-16 weeks delivery",
        "1 year free support"
      ],
      popular: false
    },
  ];

  const faqs = [
    { 
      question: "How much does app development cost in Agra?", 
      answer: "App development in Agra costs ₹25,000 to ₹5,00,000. Simple apps start at ₹25,000-₹75,000, tourism/business apps cost ₹75,000-₹2,00,000, and enterprise apps with AR/AI cost ₹2,00,000-₹5,00,000. We're 40-50% cheaper than Delhi agencies." 
    },
    { 
      question: "Do you build tourism and travel apps for Agra?", 
      answer: "Yes! We specialize in tourism apps for Agra. Our solutions include Taj Mahal AR tours, audio guide apps, hotel booking, tour operator apps, and multi-language travel guides. We've built 20+ tourism apps." 
    },
    { 
      question: "Can you build apps for Agra's handicraft and marble industry?", 
      answer: "Absolutely! We've built e-commerce and B2B apps for Agra's famous marble inlay, Zardozi embroidery, and handicraft businesses. Features include product catalogs, order management, and international shipping integration." 
    },
    { 
      question: "Do you support multiple languages for international tourists?", 
      answer: "Yes! All our tourism apps support multiple languages including English, Hindi, French, German, Spanish, Chinese, Japanese, and more. We also provide RTL support for Arabic." 
    },
    { 
      question: "Can you add AR (Augmented Reality) features to tourism apps?", 
      answer: "Yes! We build AR-powered heritage tour apps that overlay historical information on monuments. Visitors can point their phone at the Taj Mahal and see historical facts, 3D reconstructions, and audio guides." 
    },
    { 
      question: "How long does it take to build a tourism app?", 
      answer: "A basic tourism app takes 4-6 weeks, a full-featured app with booking takes 8-10 weeks, and an AR-powered enterprise app takes 12-16 weeks. We use agile methodology for faster delivery." 
    },
    { 
      question: "Do you provide on-site meetings in Agra?", 
      answer: "Yes! We regularly visit Agra for client meetings. We can meet at Taj Ganj, Sadar Bazaar, Civil Lines, Fatehabad Road, or your office. Agra is just 4 hours from our Lucknow headquarters." 
    },
    { 
      question: "Do you help with app marketing for tourists?", 
      answer: "Yes! We provide App Store Optimization (ASO), help with tourism portal listings, and can integrate with travel platforms like TripAdvisor and Booking.com for better visibility." 
    },
  ];

  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "AR/VR", techs: ["ARCore", "ARKit", "Unity", "Vuforia"] },
    { category: "Backend", techs: ["Node.js", "Python", "Firebase", "AWS"] },
    { category: "Database", techs: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Agra | Tourism App Developers | ₹25,000 Onwards | Web Nova Crew"
        description="Top app development company in Agra. Specialized in tourism, handicraft, hotel apps. AR tours, multi-language support. 40% cheaper than Delhi. Free consultation. Call +91 98723 64476."
        keywords="app development company Agra, mobile app developers Agra, tourism app Agra, Taj Mahal app, AR tour app, handicraft app Agra, hotel app Agra, Flutter developers Agra"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "India", url: "https://webnovacrew.com/locations" },
        { name: "Agra", url: "https://webnovacrew.com/locations/app-development-agra" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Agra"
        serviceDescription="Professional mobile app development in Agra. Tourism apps, AR heritage tours, handicraft e-commerce, hotel booking apps. Multi-language support for international tourists."
        serviceUrl="https://webnovacrew.com/locations/app-development-agra"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">Agra, Uttar Pradesh • City of Taj Mahal • 8M+ Annual Tourists</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent leading-tight">
              #1 App Development Company in Agra
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Build powerful <span className="text-amber-400 font-semibold">tourism, handicraft & hospitality apps</span> for Agra. Specialized in <span className="text-orange-400 font-semibold">AR heritage tours</span> and multi-language apps.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              🏆 20+ Tourism Apps Built • 🌍 10+ Languages Supported • 💰 40% Lower Than Delhi Rates
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg">
                <Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />WhatsApp: +91 98723 64476
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">35+</div>
                <div className="text-sm text-slate-400">Agra Apps Built</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">₹25K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">10+</div>
                <div className="text-sm text-slate-400">Languages</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">AR</div>
                <div className="text-sm text-slate-400">Tours Ready</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Agra</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Specialized solutions for Agra's tourism, handicraft, and hospitality industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition-all">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (<span key={i} className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded">{feature}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Agra</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">From Taj Mahal tourism to marble handicrafts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div><h3 className="text-lg font-semibold text-white mb-1">{industry.name}</h3><p className="text-sm text-slate-400">{industry.desc}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Areas of Agra</h2>
            <p className="text-xl text-slate-400">From Taj Ganj to Dayalbagh</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {areas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }} viewport={{ once: true }}
                className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-amber-500/50 transition-all flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" /><span>{area.name}</span><span className="text-xs text-slate-500">({area.type})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Agra Businesses Choose Us</h2>
            <p className="text-xl text-slate-400">Tourism app experts with AR/AI capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">{item.icon}</div>
                  <div className="text-sm font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">{item.stats}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Development Process</h2>
            <p className="text-xl text-slate-400">From idea to App Store in weeks</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{step.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-amber-400"><Clock className="w-3 h-3" />{step.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Agra App Development Pricing</h2>
            <p className="text-xl text-slate-400">Transparent pricing. 40% lower than Delhi rates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className={`bg-slate-800/50 border rounded-xl p-6 relative ${plan.popular ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-700'}`}>
                {plan.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}
                <h3 className="text-xl font-semibold text-white mb-1">{plan.tier}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.ideal}</p>
                <div className="text-3xl font-bold text-amber-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{feature}</li>))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-slate-700 hover:bg-slate-600'}`}><Link href="/contact">Get Started</Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technologies We Use</h2>
            <p className="text-xl text-slate-400">AR/VR ready tech stack for tourism apps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.techs.map((tech, i) => (<span key={i} className="text-sm bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions - Agra</h2>
            <p className="text-xl text-slate-400">Everything about app development in Agra</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-950/50 to-orange-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Agra App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation and detailed proposal for your tourism or business app.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Free Consultation</Link>
            </Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white px-8 py-6 text-lg"><Phone className="w-5 h-5 mr-2" />Call: +91 98723 64476</Button></a>
          </div>
          <p className="text-slate-400 mt-6">📍 Just 4 hours from Agra • Regular on-site visits available</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
