import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Factory, Briefcase, Clock, Zap, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentKanpur() {
  // Comprehensive services list
  const services = [
    { 
      title: "Android App Development", 
      desc: "Native Kotlin & Java apps optimized for Kanpur's diverse user base. We build high-performance Android apps for businesses, startups, and enterprises.", 
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Kotlin & Java", "Material Design 3", "Offline Support", "Push Notifications"]
    },
    { 
      title: "iOS App Development", 
      desc: "Premium Swift apps for iPhone and iPad users in Kanpur. Apple App Store optimized with latest iOS features.", 
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Swift & SwiftUI", "iOS 17 Ready", "Apple Pay", "Face ID/Touch ID"]
    },
    { 
      title: "Flutter App Development", 
      desc: "Cross-platform apps with single codebase for Android & iOS. Cost-effective solution for Kanpur startups.", 
      icon: <Code2 className="w-6 h-6" />,
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Custom Widgets"]
    },
    { 
      title: "React Native Development", 
      desc: "JavaScript-based cross-platform apps with native feel. Perfect for Kanpur businesses needing quick market entry.", 
      icon: <Globe className="w-6 h-6" />,
      features: ["JavaScript/TypeScript", "Native Modules", "Fast Development", "Code Reuse"]
    },
    { 
      title: "Leather & Textile Industry Apps", 
      desc: "Custom B2B apps for Kanpur's famous leather and textile industries. Inventory, order management, and supply chain solutions.", 
      icon: <Factory className="w-6 h-6" />,
      features: ["Inventory Management", "Order Tracking", "B2B Marketplace", "Supply Chain"]
    },
    { 
      title: "E-commerce Apps", 
      desc: "Online shopping apps with payment gateway integration. UPI, cards, and COD support for Kanpur customers.", 
      icon: <Database className="w-6 h-6" />,
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Delivery Tracking"]
    },
    { 
      title: "AI & ML Apps", 
      desc: "Intelligent apps with machine learning, chatbots, and automation. Future-ready solutions for Kanpur enterprises.", 
      icon: <Cpu className="w-6 h-6" />,
      features: ["AI Chatbots", "Image Recognition", "Predictive Analytics", "Automation"]
    },
    { 
      title: "Enterprise Solutions", 
      desc: "Scalable corporate apps for large Kanpur businesses. ERP, CRM, and custom business process apps.", 
      icon: <Building2 className="w-6 h-6" />,
      features: ["ERP Integration", "CRM Systems", "Workflow Automation", "Analytics Dashboard"]
    },
  ];

  // Detailed industries
  const industries = [
    { name: "Leather & Footwear", desc: "Apps for Kanpur's famous leather industry" },
    { name: "Textile & Garments", desc: "B2B and retail textile solutions" },
    { name: "FMCG & Consumer Goods", desc: "Distribution and retail apps" },
    { name: "Education & Coaching", desc: "IIT-JEE, NEET coaching apps" },
    { name: "Healthcare & Hospitals", desc: "Patient management systems" },
    { name: "Real Estate", desc: "Property listing and management" },
    { name: "Banking & Finance", desc: "Fintech and payment solutions" },
    { name: "Government & PSU", desc: "Public sector applications" }
  ];

  // Kanpur areas with details
  const areas = [
    { name: "Civil Lines", type: "Business Hub" },
    { name: "Mall Road", type: "Commercial" },
    { name: "Swaroop Nagar", type: "Residential" },
    { name: "Kakadeo", type: "IT Area" },
    { name: "Kidwai Nagar", type: "Industrial" },
    { name: "Govind Nagar", type: "Commercial" },
    { name: "Harsh Nagar", type: "Residential" },
    { name: "Shyam Nagar", type: "Business" },
    { name: "Kalyanpur", type: "Industrial" },
    { name: "Panki", type: "Industrial" },
    { name: "Arya Nagar", type: "Commercial" },
    { name: "Nawabganj", type: "Market Area" }
  ];

  // Why choose us with detailed benefits
  const whyChooseUs = [
    { 
      title: "Kanpur Industry Expertise", 
      desc: "Deep understanding of Kanpur's leather, textile, and manufacturing industries. We've built apps for local businesses that understand their unique needs.", 
      icon: <Factory className="w-5 h-5" />,
      stats: "15+ Industry Apps"
    },
    { 
      title: "Most Affordable in UP", 
      desc: "Being based in Lucknow, we offer the most competitive rates in Uttar Pradesh. Save 40-50% compared to Delhi/NCR agencies.", 
      icon: <Star className="w-5 h-5" />,
      stats: "40-50% Savings"
    },
    { 
      title: "Fastest Delivery", 
      desc: "Agile development with 2-week sprints. Launch your MVP in just 3-4 weeks. Regular demos and quick iterations.", 
      icon: <Rocket className="w-5 h-5" />,
      stats: "3-4 Week MVP"
    },
    { 
      title: "Hindi & Local Support", 
      desc: "Full Hindi language support in apps. Local project managers who understand Kanpur business culture.", 
      icon: <MessageSquare className="w-5 h-5" />,
      stats: "100% Hindi Support"
    },
    { 
      title: "Quality Assurance", 
      desc: "Rigorous testing on 50+ devices. Bug-free apps with 99.9% crash-free rate. Post-launch support included.", 
      icon: <Shield className="w-5 h-5" />,
      stats: "99.9% Crash-Free"
    },
    { 
      title: "On-Site Meetings", 
      desc: "Regular visits to Kanpur for client meetings. Face-to-face discussions at your office or preferred location.", 
      icon: <Users className="w-5 h-5" />,
      stats: "Monthly Visits"
    },
  ];

  // Development process
  const process = [
    { step: "1", title: "Discovery & Planning", desc: "Understanding your Kanpur business needs, target audience, and app requirements. Free consultation included.", duration: "1-2 Days" },
    { step: "2", title: "UI/UX Design", desc: "Creating intuitive, user-friendly designs. Hindi language support and local preferences considered.", duration: "1-2 Weeks" },
    { step: "3", title: "Development", desc: "Agile development with 2-week sprints. Regular demos and feedback sessions.", duration: "3-8 Weeks" },
    { step: "4", title: "Testing & QA", desc: "Comprehensive testing on 50+ devices. Performance, security, and usability testing.", duration: "1 Week" },
    { step: "5", title: "Launch & Support", desc: "App Store/Play Store submission. Post-launch monitoring and support.", duration: "Ongoing" },
  ];

  // Detailed pricing
  const pricing = [
    { 
      tier: "Starter", 
      price: "₹25,000 - ₹75,000", 
      ideal: "Small businesses & MVPs",
      features: [
        "Single platform (Android OR iOS)",
        "Up to 10 screens",
        "Basic UI/UX design",
        "User authentication",
        "Push notifications",
        "3-4 weeks delivery",
        "30 days free support"
      ],
      popular: false
    },
    { 
      tier: "Business", 
      price: "₹75,000 - ₹2,00,000", 
      ideal: "Growing businesses",
      features: [
        "Android + iOS apps",
        "Up to 25 screens",
        "Premium UI/UX design",
        "Payment gateway integration",
        "Admin panel included",
        "API development",
        "6-8 weeks delivery",
        "90 days free support"
      ],
      popular: true
    },
    { 
      tier: "Enterprise", 
      price: "₹2,00,000 - ₹5,00,000", 
      ideal: "Large enterprises",
      features: [
        "Android + iOS + Web",
        "Unlimited screens",
        "Custom UI/UX design",
        "AI/ML integration",
        "ERP/CRM integration",
        "Dedicated team",
        "10-16 weeks delivery",
        "1 year free support"
      ],
      popular: false
    },
  ];

  // Comprehensive FAQs
  const faqs = [
    { 
      question: "How much does app development cost in Kanpur?", 
      answer: "App development in Kanpur costs ₹25,000 to ₹5,00,000 depending on complexity. Simple apps start at ₹25,000-₹75,000, business apps cost ₹75,000-₹2,00,000, and enterprise apps with advanced features cost ₹2,00,000-₹5,00,000. We offer the most competitive rates in UP, saving you 40-50% compared to Delhi agencies." 
    },
    { 
      question: "Do you build apps for Kanpur's leather and textile industry?", 
      answer: "Yes! Kanpur is famous for leather and textiles, and we've built specialized B2B apps for these industries. Our solutions include inventory management, order tracking, supplier management, quality control, and B2B marketplace apps tailored for Kanpur's manufacturing sector." 
    },
    { 
      question: "How long does it take to develop an app in Kanpur?", 
      answer: "Development timeline depends on complexity: Simple apps take 3-4 weeks, business apps require 6-8 weeks, and enterprise apps take 10-16 weeks. We use agile methodology with 2-week sprints, so you see progress quickly and can launch faster." 
    },
    { 
      question: "Do you provide Hindi language support in apps?", 
      answer: "Absolutely! All our Kanpur apps include full Hindi language support. We can build bilingual (Hindi + English) apps with proper RTL support, Hindi push notifications, and Hindi content management. This is essential for reaching Kanpur's local audience." 
    },
    { 
      question: "Can you meet in person in Kanpur?", 
      answer: "Yes! Our headquarters is in Lucknow, just 80 km from Kanpur. We regularly visit Kanpur for client meetings. We can meet at Civil Lines, Mall Road, Swaroop Nagar, or your office. Video calls are also available for quick discussions." 
    },
    { 
      question: "Do you provide post-launch support and maintenance?", 
      answer: "Yes! All our packages include free post-launch support (30-365 days depending on package). After that, we offer affordable maintenance plans starting at ₹5,000/month covering bug fixes, updates, server monitoring, and minor feature additions." 
    },
    { 
      question: "What technologies do you use for app development?", 
      answer: "We use modern technologies: Flutter and React Native for cross-platform apps, Kotlin for Android, Swift for iOS, Node.js and Python for backend, Firebase and AWS for cloud, and MongoDB/PostgreSQL for databases. All apps are built with scalability in mind." 
    },
    { 
      question: "Do you help with app store submission?", 
      answer: "Yes! We handle complete App Store (iOS) and Play Store (Android) submission. This includes app store optimization (ASO), screenshots, descriptions, and compliance with store guidelines. We also help with app updates and version management." 
    },
  ];

  // Tech stack
  const techStack = [
    { category: "Mobile", techs: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { category: "Backend", techs: ["Node.js", "Python", "Java", "PHP"] },
    { category: "Database", techs: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"] },
    { category: "Cloud", techs: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Kanpur | Mobile App Developers UP | ₹25,000 Onwards | Web Nova Crew"
        description="Top-rated app development company in Kanpur, UP. We build Android, iOS, Flutter apps for leather, textile, e-commerce industries. 40-50% lower than Delhi rates. Free consultation. Call +91 98723 64476."
        keywords="app development company Kanpur, mobile app developers Kanpur, Android app Kanpur, iOS app Kanpur, Flutter developers Kanpur, leather industry app Kanpur, textile app Kanpur, best app developers UP, cheap app development Kanpur"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "India", url: "https://webnovacrew.com/locations" },
        { name: "Kanpur", url: "https://webnovacrew.com/locations/app-development-kanpur" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Kanpur"
        serviceDescription="Professional mobile app development services in Kanpur, Uttar Pradesh. Custom Android, iOS, and cross-platform apps for leather, textile, and other industries. Affordable rates with quality delivery."
        serviceUrl="https://webnovacrew.com/locations/app-development-kanpur"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Kanpur, Uttar Pradesh • Industrial Capital of UP • 3M+ Population</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              #1 App Development Company in Kanpur
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Build powerful <span className="text-blue-400 font-semibold">Android, iOS & Flutter apps</span> for your Kanpur business. Specialized in <span className="text-cyan-400 font-semibold">leather, textile & manufacturing</span> industry apps.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              🏆 Trusted by 50+ Kanpur businesses • ⭐ 4.9/5 Rating • 💰 40-50% Lower Than Delhi Rates
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp: +91 98723 64476
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-sm text-slate-400">Kanpur Apps Built</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">₹25K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">3-4</div>
                <div className="text-sm text-slate-400">Weeks for MVP</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">50%</div>
                <div className="text-sm text-slate-400">Cost Savings</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              App Development Services in Kanpur
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive mobile app development solutions tailored for Kanpur's diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Industries We Serve in Kanpur
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized app solutions for Kanpur's key business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{industry.name}</h3>
                    <p className="text-sm text-slate-400">{industry.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Serving All Areas of Kanpur
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From Civil Lines to Panki, we serve clients across Kanpur
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{area.name}</span>
                <span className="text-xs text-slate-500">({area.type})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Kanpur Businesses Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The most trusted app development partner in Uttar Pradesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {item.stats}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our App Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent, agile process from idea to launch
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{step.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-blue-400">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-blue-500/50"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Kanpur App Development Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. 40-50% lower than Delhi/NCR rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 border rounded-xl p-6 relative ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-1">{plan.tier}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.ideal}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern tech stack for scalable, future-ready apps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, i) => (
                    <span key={i} className="text-sm bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions - Kanpur
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about app development in Kanpur
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Build Your Kanpur App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed proposal. No obligations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 98723 64476
              </Button>
            </a>
          </div>
          <p className="text-slate-400 mt-6">
            📍 Just 80 km from Kanpur • Regular on-site visits available
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
