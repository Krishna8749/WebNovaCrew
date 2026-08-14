import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, 
  MessageSquare, Globe, Database, Briefcase, Lightbulb,
  Target, Layers, BarChart3, ShoppingCart, Heart, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentGomtiNagar() {
  const services = [
    { 
      title: "Custom Web Development", 
      desc: "Bespoke websites and web applications built with React, Next.js, and Node.js for Gomti Nagar's premium businesses. Whether you're a fintech startup in Vibhuti Khand or a healthcare chain in Viraj Khand, we create fast, SEO-optimized websites that convert visitors into customers. Our sites load in under 2 seconds and rank on Google's first page.",
      icon: <Globe className="w-6 h-6" />,
      features: ["React & Next.js", "SEO Optimized", "2s Load Time", "Mobile Responsive", "CMS Integration", "Analytics Setup"]
    },
    { 
      title: "Mobile App Development", 
      desc: "Native and cross-platform mobile apps for Gomti Nagar's thriving business community. From UPI-integrated fintech apps for startups in Gomti Nagar IT Park to patient management apps for healthcare providers on Shaheed Path, we deliver apps that users love. Our Flutter and React Native apps achieve 60fps performance on all devices.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Flutter & React Native", "UPI Integration", "60fps Performance", "Play Store Optimization", "Push Notifications", "Offline Support"]
    },
    { 
      title: "E-Commerce Development", 
      desc: "Full-featured e-commerce platforms for Gomti Nagar's retail and service businesses. We integrate Razorpay, Paytm, and UPI payment gateways, build inventory management systems, and add delivery tracking. Perfect for Gomti Nagar's fashion boutiques, electronics stores, and specialty retailers looking to sell online.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Razorpay & UPI", "Inventory Management", "Delivery Tracking", "Multi-vendor Support", "Discount Engine", "WhatsApp Commerce"]
    },
    { 
      title: "Digital Marketing & SEO", 
      desc: "Result-driven digital marketing for Gomti Nagar businesses. We specialize in local SEO to rank #1 for 'best [service] in Gomti Nagar', Google Ads for immediate leads, and social media marketing to build brand awareness. Our Gomti Nagar clients see 3x more enquiries within 90 days.",
      icon: <Target className="w-6 h-6" />,
      features: ["Local SEO #1 Rank", "Google Ads Management", "Social Media Marketing", "Content Marketing", "GMB Optimization", "Review Management"]
    },
    { 
      title: "Startup MVP Development", 
      desc: "Rapid MVP development for Gomti Nagar's startup ecosystem. We understand the IT Park community — the pressure of investor demos, the need for quick pivots, and what VCs look for in technical due diligence. We deliver investor-ready MVPs in 2-4 weeks with clean code and scalable architecture.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["2-4 Week Delivery", "Investor-Ready Code", "Scalable Architecture", "Analytics Built-in", "Pitch Deck Support", "Due Diligence Ready"]
    },
    { 
      title: "AI & Chatbot Solutions", 
      desc: "Intelligent AI-powered solutions for Gomti Nagar businesses. We build chatbots for customer support, AI-powered recommendation engines for e-commerce, and predictive analytics for healthcare and fintech. Our AI solutions help Gomti Nagar businesses automate operations and deliver personalized experiences.",
      icon: <Zap className="w-6 h-6" />,
      features: ["GPT-4 Chatbots", "AI Recommendations", "Predictive Analytics", "Voice Assistants", "Document AI", "Process Automation"]
    },
  ];

  const industries = [
    { name: "IT & Software", desc: "Internal tools, SaaS products, and client portals for Gomti Nagar's growing IT companies in Vibhuti Khand and IT Park.", icon: <Code2 className="w-5 h-5" /> },
    { name: "Fintech & Banking", desc: "UPI apps, lending platforms, and digital payment solutions for Gomti Nagar's fintech startups and financial institutions.", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Real Estate", desc: "Property listing platforms, virtual tours, and CRM systems for Gomti Nagar's premium real estate developers.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Healthcare & Clinics", desc: "Patient management, telemedicine, and appointment booking apps for Gomti Nagar's hospitals and clinics.", icon: <Heart className="w-5 h-5" /> },
    { name: "E-commerce & Retail", desc: "Online stores, delivery apps, and inventory management for Gomti Nagar's premium retail businesses.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Education & Coaching", desc: "Learning platforms, test series apps, and student management for Gomti Nagar's educational institutions.", icon: <GraduationCap className="w-5 h-5" /> },
  ];

  const areas = [
    { name: "Vibhuti Khand", type: "IT & Business Hub", desc: "Premium commercial complex housing IT companies, banks, and corporate offices. The nerve center of Gomti Nagar's business activity." },
    { name: "Viraj Khand", type: "Commercial Zone", desc: "Major commercial area with retail chains, restaurants, and service businesses. High footfall area with strong digital adoption." },
    { name: "Gomti Nagar IT Park", type: "Tech Park", desc: "Lucknow's primary IT park housing tech startups, software companies, and co-working spaces. The startup capital of the city." },
    { name: "Patel Nagar", type: "Residential Hub", desc: "Dense residential area with local markets, coaching centers, and healthcare facilities serving Gomti Nagar residents." },
    { name: "Janeshwar Mishra Park Area", type: "Premium Zone", desc: "Upscale area near the park with premium residential projects, boutique stores, and professional service offices." },
    { name: "Lohia Park Area", type: "Corporate Zone", desc: "Corporate office cluster with banks, insurance companies, and professional service firms requiring authoritative digital presence." },
  ];

  const whyChooseUs = [
    { title: "Gomti Nagar Market Expertise", desc: "We've worked with 80+ businesses in Gomti Nagar across Vibhuti Khand, Viraj Khand, and IT Park. We understand the local market dynamics — from fintech startups seeking funding to real estate developers needing lead generation. Our local knowledge means faster project delivery and better results.", icon: <MapPin className="w-5 h-5" />, stats: "80+ Local Clients" },
    { title: "Premium Quality, Affordable Pricing", desc: "Gomti Nagar agencies charge premium rates. We deliver the same Silicon Valley quality at 40% lower costs through efficient processes and experienced team. For startups, this means more runway. For businesses, better ROI on their digital investment.", icon: <Star className="w-5 h-5" />, stats: "40% Cost Savings" },
    { title: "Fast Delivery", desc: "We understand Gomti Nagar's fast-paced business environment. MVPs in 2-4 weeks, business websites in 1-2 weeks, and complex applications in 6-10 weeks. Our agile process with weekly demos ensures you see progress and can provide feedback throughout.", icon: <Rocket className="w-5 h-5" />, stats: "2-4 Week MVPs" },
    { title: "100% In-House Team", desc: "No freelancers, no outsourcing. Our dedicated team of 25+ developers, designers, and digital marketers work exclusively on your project. This means consistent quality, direct communication, and accountability for every deliverable.", icon: <Users className="w-5 h-5" />, stats: "25+ Team Members" },
    { title: "Post-Launch Support", desc: "We don't disappear after launch. Our support packages include bug fixes, security updates, performance optimization, and feature enhancements. We're available on WhatsApp for quick communication and provide monthly analytics reports.", icon: <Shield className="w-5 h-5" />, stats: "24/7 Support" },
    { title: "SEO-First Development", desc: "Every website and app we build is optimized for search engines from day one. Clean code, fast loading, structured data, and local SEO setup ensure your Gomti Nagar business ranks on Google's first page within 90 days.", icon: <BarChart3 className="w-5 h-5" />, stats: "90-Day SEO Results" },
  ];

  const caseStudies = [
    {
      title: "Fintech Mobile Banking App",
      client: "FinServe Technologies, Vibhuti Khand",
      description: "Built a mobile banking app with UPI integration, AI-powered expense tracking, and instant loan approval. The app processed ₹50Cr in transactions within the first quarter and helped the startup raise Series A funding.",
      results: ["50K+ Downloads", "₹50Cr Transactions", "4.8★ Play Store", "Series A Raised"],
      tech: ["Flutter", "Node.js", "UPI SDK", "AWS", "PostgreSQL"]
    },
    {
      title: "Real Estate Listing Platform",
      client: "Premium Realty, Gomti Nagar",
      description: "Developed a property listing platform with 360° virtual tours, AI-powered price estimation, and lead management CRM. The platform became the #1 real estate website in Lucknow within 6 months.",
      results: ["500+ Listings", "₹2Cr Deals/Month", "#1 in Lucknow", "200+ Leads/Month"],
      tech: ["Next.js", "Three.js", "Python ML", "MongoDB", "AWS"]
    },
    {
      title: "Healthcare Appointment Platform",
      client: "MediCare Clinics, Viraj Khand",
      description: "Created a patient management platform with online appointment booking, telemedicine video calls, and digital health records. Reduced patient wait times by 60% and increased clinic revenue by 35%.",
      results: ["5K+ Appointments/Month", "60% Less Wait Time", "35% Revenue Increase", "4.9★ Rating"],
      tech: ["React Native", "WebRTC", "Node.js", "Firebase", "Stripe"]
    }
  ];

  const pricing = [
    { tier: "Startup MVP", price: "₹25,000 - ₹1,00,000", ideal: "Pre-seed & seed startups in Gomti Nagar IT Park", features: ["Single platform (Web/Mobile)", "Up to 10 screens", "Core features only", "Basic UI/UX design", "User authentication", "Analytics integration", "2-4 weeks delivery", "30 days support", "Source code ownership"], popular: false },
    { tier: "Business App", price: "₹1,00,000 - ₹3,00,000", ideal: "Growing businesses in Vibhuti Khand & Viraj Khand", features: ["Web + Mobile apps", "Up to 25 screens", "Full feature set", "Premium UI/UX design", "Payment integration", "Admin dashboard", "Push notifications", "6-8 weeks delivery", "90 days support"], popular: true },
    { tier: "Enterprise Solution", price: "₹3,00,000 - ₹8,00,000+", ideal: "Established companies & healthcare chains", features: ["Web + Android + iOS", "Unlimited screens", "AI/ML integration", "Custom backend", "Third-party integrations", "Enterprise security", "SSO & RBAC", "10-14 weeks delivery", "1 year support"], popular: false },
  ];

  const faqs = [
    { question: "Which is the best web development company in Gomti Nagar?", answer: "Web Nova Crew is the leading web development company in Gomti Nagar, Lucknow. We've delivered 250+ projects with expertise in React, Next.js, and custom web applications for Gomti Nagar's IT and business community. Our clients include fintech startups in IT Park, real estate firms in Vibhuti Khand, and healthcare chains in Viraj Khand." },
    { question: "How much does app development cost in Gomti Nagar?", answer: "App development cost in Gomti Nagar ranges from ₹25,000 for simple apps to ₹8,00,000 for enterprise solutions. Startup MVPs cost ₹25,000-₹1,00,000, business apps cost ₹1,00,000-₹3,00,000, and complex enterprise apps cost ₹3,00,000-₹8,00,000. We offer transparent pricing with no hidden charges and EMI options for startups." },
    { question: "Do you develop apps for startups in Gomti Nagar IT Park?", answer: "Yes! We specialize in MVP development for Gomti Nagar IT Park startups. Our startup packages start at ₹25,000 with rapid delivery in 2-4 weeks. We understand what VCs look for during technical due diligence and build investor-ready products with clean code and scalable architecture." },
    { question: "Can you build an e-commerce website for my Gomti Nagar business?", answer: "We build e-commerce websites and apps for Gomti Nagar businesses with Razorpay, Paytm, UPI payment integration, inventory management, delivery tracking, and WhatsApp commerce. Starting at ₹40,000 with 2-week delivery for basic stores." },
    { question: "What digital marketing services do you offer in Gomti Nagar?", answer: "We provide complete digital marketing in Gomti Nagar including local SEO to rank #1 for 'best [service] in Gomti Nagar', Google Ads for immediate leads, social media marketing, content marketing, and Google Business Profile optimization. Our clients see 3x more enquiries within 90 days." },
    { question: "How long does web development take in Gomti Nagar?", answer: "Web development timeline in Gomti Nagar: basic business websites take 1-2 weeks, e-commerce sites take 3-5 weeks, and complex web applications take 6-12 weeks. We follow agile methodology with weekly demos so you see progress throughout." },
    { question: "Do you offer SEO services for Gomti Nagar businesses?", answer: "Yes! We specialize in local SEO for Gomti Nagar businesses. Our SEO packages include keyword research, on-page optimization, Google Business Profile setup, content strategy, and link building. Most clients rank on Google's first page within 90 days. Starting at ₹10,000/month." },
    { question: "Can you meet in person in Gomti Nagar for project discussions?", answer: "Absolutely! We can meet at your office in Vibhuti Khand, Viraj Khand, IT Park, or any convenient location in Gomti Nagar. We also do working sessions at co-working spaces. For ongoing projects, we combine in-person meetings with video calls." },
    { question: "What technologies do you use for Gomti Nagar projects?", answer: "We use modern, scalable technologies: React and Next.js for web, Flutter and React Native for mobile, Node.js and Python for backend, AWS and GCP for cloud, PostgreSQL and MongoDB for databases, and TensorFlow and GPT-4 for AI features." },
    { question: "Do you provide post-launch support for Gomti Nagar clients?", answer: "Yes! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and monthly analytics reports. We're available on WhatsApp for quick communication. Support packages start at ₹5,000/month." },
  ];

  const nearbyAreas = [
    { name: "Gomti Nagar Extension", slug: "web-development-gomti-nagar-extension" },
    { name: "Indira Nagar", slug: "web-development-indira-nagar" },
    { name: "Mahanagar", slug: "web-development-mahanagar" },
    { name: "Vrindavan Yojna", slug: "web-development-vrindavan-yojna" },
    { name: "Aliganj", slug: "web-development-aliganj" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Best Web Development Company in Gomti Nagar, Lucknow | Web Nova Crew"
        description="Top web & app development company in Gomti Nagar, Lucknow. We build React, Next.js websites, Flutter apps, e-commerce platforms for businesses in Vibhuti Khand, Viraj Khand, IT Park. ₹25,000 onwards. 250+ projects delivered."
        keywords="web development company in Gomti Nagar, app developer in Gomti Nagar, digital marketing agency Gomti Nagar, IT company in Gomti Nagar Lucknow, software development Gomti Nagar, best website developer Gomti Nagar"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" },
        { name: "Gomti Nagar", url: "https://webnovacrew.com/locations/web-development-gomti-nagar" }
      ]} />
      <ServiceSchema 
        serviceName="Web Development in Gomti Nagar"
        serviceDescription="Professional web and app development services in Gomti Nagar, Lucknow. Custom React, Next.js websites, Flutter apps, e-commerce, and digital marketing for local businesses."
        serviceUrl="https://webnovacrew.com/locations/web-development-gomti-nagar"
      />
      <FAQSchema faqs={faqs} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-blue-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-cyan-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
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
              <span className="text-sm text-blue-300">Gomti Nagar, Lucknow • IT Hub • Premium Business District</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Best Web Development Company in Gomti Nagar
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Lucknow's <span className="text-blue-400 font-semibold">#1 IT hub</span> deserves world-class digital solutions. We build <span className="text-cyan-400 font-semibold">websites, apps & e-commerce platforms</span> for Gomti Nagar's ambitious businesses.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving businesses in Vibhuti Khand, Viraj Khand, Gomti Nagar IT Park & across Gomti Nagar.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-1">80+</div>
                <div className="text-sm text-slate-400">Gomti Nagar Clients</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">₹25K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-1">2-4</div>
                <div className="text-sm text-slate-400">Weeks MVP</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-blue-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">250+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Gomti Nagar Businesses Need Digital Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/50 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Lucknow's IT & Business Capital</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Gomti Nagar is Lucknow's answer to Bangalore's Koramangala — a premium business district housing the city's IT Park, startup incubators, and corporate headquarters. With over 500 businesses operating from Vibhuti Khand and Viraj Khand alone, the competition for digital visibility is intense.
              </p>
              <p className="text-slate-300 leading-relaxed">
                From fintech startups building the next UPI-based payment solution to real estate developers showcasing luxury apartments, every Gomti Nagar business needs a strong digital presence to capture the area's tech-savvy, affluent customer base.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-950/30 to-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Digital-First Customer Base</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Gomti Nagar residents are among Lucknow's most digitally active consumers. They search Google for services, order via apps, and make purchasing decisions based on online reviews and website quality. A business without a professional website or app is invisible to this lucrative customer segment.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our data shows Gomti Nagar businesses with optimized websites receive 3x more enquiries than those without. We help you capture this digital demand with websites that rank on Google and apps that users love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Web & App Development Services in Gomti Nagar
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-stack digital solutions for Gomti Nagar's business community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">{feature}</span>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Industries We Serve in Gomti Nagar
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain expertise across Gomti Nagar's key business sectors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Gomti Nagar Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results from projects we've delivered for Gomti Nagar businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="text-blue-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-blue-500/10 rounded-lg px-3 py-2 text-center">
                      <span className="text-blue-300 text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Serving All Areas of Gomti Nagar
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From Vibhuti Khand's corporate offices to IT Park's startup ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">{area.name}</h3>
                    <span className="text-blue-400 text-sm">{area.type}</span>
                    <p className="text-slate-400 text-sm mt-1">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Gomti Nagar Businesses Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Your trusted digital partner in Lucknow's IT hub
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {item.stats}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Gomti Nagar Development Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent pricing. 40% lower than typical Gomti Nagar agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 transition-all ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-blue-500/50'}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <FounderBio />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Google Map */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Visit Our Lucknow Office
            </h2>
            <p className="text-xl text-slate-400">
              Serving Gomti Nagar businesses from our Lucknow headquarters
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700 h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1984!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd49a5b37e0d%3A0x8fba8e5c1e0f2e0a!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Web Nova Crew - Gomti Nagar, Lucknow"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Gomti Nagar Web Development FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking - Nearby Areas */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (
              <Link key={index} href={`/locations/${area.slug}`}>
                <a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {area.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Digital Presence in Gomti Nagar?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 80+ Gomti Nagar businesses who trusted us with their digital transformation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Gomti Nagar Meeting
              </Link>
            </Button>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
                <Phone className="w-5 h-5 mr-2" />
                +91 98723 64476
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
