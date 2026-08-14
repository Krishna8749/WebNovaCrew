import { Link } from "wouter";
import { ArrowRight, TrendingUp, Rocket, CheckCircle2, ChevronRight, Code, Smartphone, Search, ShoppingCart, Zap, Shield, Clock, Award, Users, Globe, Star, Play, Phone, BadgeCheck, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection, homeFAQs } from "@/components/sections/FAQ";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { StatsSection } from "@/components/sections/Stats";
import { CertificationBadgesGrid, TrustBar, CompactBadges } from "@/components/widgets/CertificationBadges";

export default function Home() {
  const services = [
    {
      title: "Web Development That Converts",
      desc: "Stop losing customers to slow, outdated websites. Our React & Next.js solutions load in under 2 seconds and convert 3x more visitors into paying customers.",
      icon: <Code className="w-8 h-8" />,
      link: "/services",
      stats: "300% avg. conversion boost"
    },
    {
      title: "Mobile Apps That Users Love",
      desc: "Why pay for two apps when one Flutter codebase delivers native performance on both iOS & Android? Save 40% on development costs without sacrificing quality.",
      icon: <Smartphone className="w-8 h-8" />,
      link: "/services",
      stats: "100K+ app downloads"
    },
    {
      title: "E-Commerce That Sells",
      desc: "Your competitors are stealing your customers with better online stores. We build Shopify & custom e-commerce platforms that turn browsers into buyers.",
      icon: <ShoppingCart className="w-8 h-8" />,
      link: "/services",
      stats: "₹10Cr+ revenue generated"
    },
    {
      title: "SEO That Dominates Google",
      desc: "Page 2 of Google is where businesses go to die. Our proven SEO strategies have helped 50+ clients reach Page 1 for their most competitive keywords.",
      icon: <Search className="w-8 h-8" />,
      link: "/services",
      stats: "500% avg. traffic increase"
    },
  ];

  const proofPoints = [
    {
      metric: "₹50Cr+",
      label: "Revenue Generated for Clients",
      desc: "Our solutions have directly contributed to over ₹50 crore in client revenue"
    },
    {
      metric: "97%",
      label: "Client Retention Rate",
      desc: "Clients don't leave because we deliver results, not excuses"
    },
    {
      metric: "<24hrs",
      label: "Response Time Guarantee",
      desc: "We respond to every inquiry within 24 hours or your first consultation is free"
    },
    {
      metric: "4.9/5",
      label: "Clutch Rating",
      desc: "Independently verified reviews from real clients on Clutch.co"
    }
  ];

  const clientResults = [
    {
      company: "FinanceHub Technologies",
      industry: "FinTech",
      result: "400% increase in user engagement",
      quote: "Web Nova Crew didn't just build us a dashboard—they built us a competitive advantage.",
      person: "Michael Chen, CTO"
    },
    {
      company: "Luxe Estate Properties",
      industry: "Real Estate",
      result: "₹2Cr additional revenue in 6 months",
      quote: "Our lead generation increased 400%. The ROI was visible within the first month.",
      person: "Vikram Singh, MD"
    },
    {
      company: "HealthFirst Clinics",
      industry: "Healthcare",
      result: "100,000+ app downloads",
      quote: "They understood healthcare compliance. The app is now essential to our operations.",
      person: "Dr. Amit Patel, CMO"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ship 40% Faster",
      desc: "While others take 6 months, we deliver in 3-4. Our agile process eliminates delays without cutting corners."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Security Breaches",
      desc: "ISO 27001 certified. Bank-level encryption. Your data and your customers' data is protected 24/7."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Support",
      desc: "Website down at 3 AM? We're on it. Our support team responds to critical issues within 30 minutes."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Experts Only",
      desc: "No juniors on your project. Every team member is certified in React, AWS, or Google Cloud."
    }
  ];

  const technologies = [
    "React.js", "Next.js", "TypeScript", "Node.js", "Python", "Flutter", 
    "AWS", "Google Cloud", "MongoDB", "PostgreSQL", "Shopify", "WordPress"
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Best Web Development Company in India" 
        description="Web Nova Crew is India's #1 custom web development and mobile app development company. We specialize in React, Next.js, Flutter, SEO, and e-commerce solutions. Get a free quote today!"
        keywords="web development company india, best web development agency, mobile app development company, custom website development, react development company, next.js developers, flutter app development, ecommerce website development, SEO services india, web design company mohali"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" }
      ]} />
      
      <Navbar />

      {/* Hero Section - Primary H1 with target keywords */}
      <section id="home" className="pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-lime-500/20 to-cyan-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-purple-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Urgency Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400 text-sm font-bold mb-8 border border-lime-500/30 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              Only 3 Project Slots Left for December 2024
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-poppins font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-10 tracking-tight"
            >
              Your Competitors Are{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400">
                  Stealing Your Customers
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 4 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a3e635"/>
                      <stop offset="100%" stopColor="#22d3ee"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />With Better Websites
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-blue-100/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              We build <strong className="text-white font-semibold">blazing-fast websites</strong> that load in under 2 seconds, 
              <strong className="text-white font-semibold"> rank on Google Page 1</strong>, and 
              <strong className="text-white font-semibold"> convert 3x more visitors</strong> into paying customers.
            </motion.p>
            
            {/* Proof Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              <CompactBadges />
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold text-xl px-10 py-7 shadow-2xl shadow-lime-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lime-500/50 rounded-full group">
                  Get Your Free Website Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+919872364476">
                <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" /> +91 98723 64476
                </Button>
              </a>
            </motion.div>
            
            {/* Micro-commitment */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 text-blue-200/80 text-sm"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Free consultation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> No obligation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Response within 24 hours</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Trust Bar */}
      <TrustBar />

      {/* Problem-Agitation Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-900 mb-12">
              Is Your Website Costing You Customers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { icon: <Clock className="w-8 h-8" />, problem: "Slow loading speed", impact: "53% of visitors leave if your site takes >3 seconds to load", stat: "53%" },
                { icon: <Search className="w-8 h-8" />, problem: "Not on Google Page 1", impact: "75% of users never scroll past the first page of search results", stat: "75%" },
                { icon: <Smartphone className="w-8 h-8" />, problem: "Poor mobile experience", impact: "61% of users won't return to a site that's hard to use on mobile", stat: "61%" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white p-8 rounded-3xl border-2 border-red-100 hover:border-red-200 shadow-lg hover:shadow-xl transition-all group cursor-pointer h-full relative overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">{item.problem}</h3>
                          <ChevronRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-5">{item.impact}</p>
                        <div className="inline-flex items-center gap-2 text-base font-bold text-white bg-gradient-to-r from-lime-500 to-emerald-500 px-5 py-2.5 rounded-full shadow-md">
                          <TrendingUp className="w-5 h-5" /> {item.stat}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-lime-500 to-emerald-500 text-white p-8 rounded-3xl inline-block"
            >
              <p className="text-xl md:text-2xl font-medium">
                <strong>The good news?</strong> We fix all of this. Every website we build is fast, SEO-optimized, and converts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - H2 with service keywords */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="services">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-base font-bold mb-8">
              <Zap className="w-5 h-5" /> How We Help
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Solutions That Drive <span className="gradient-text">Real Business Results</span>
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We don't just build websites—we build revenue-generating machines. Here's how we help businesses like yours grow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8 }}
              >
                <Link href={s.link}>
                  <div className="p-10 rounded-3xl bg-white hover:shadow-2xl shadow-lg border border-slate-100 transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                        {s.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                          <ChevronRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-5">{s.desc}</p>
                        <div className="inline-flex items-center gap-2 text-base font-bold text-white bg-gradient-to-r from-lime-500 to-emerald-500 px-5 py-2.5 rounded-full shadow-md">
                          <TrendingUp className="w-5 h-5" /> {s.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full px-10 py-6 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                See All Services & Pricing <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />

      {/* Industries We Serve - TechSavyCrew Style */}
      <section className="py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2.5 rounded-full text-base font-bold mb-8">
              <Globe className="w-5 h-5" /> Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Expertise Across <span className="gradient-text">Multiple Industries</span>
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We've delivered successful projects across diverse sectors, understanding unique challenges and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Real Estate", icon: "🏠", desc: "Property portals & CRM systems", color: "from-blue-500 to-cyan-500" },
              { name: "E-Commerce", icon: "🛒", desc: "Online stores & marketplaces", color: "from-orange-500 to-red-500" },
              { name: "Healthcare", icon: "🏥", desc: "HIPAA-compliant solutions", color: "from-green-500 to-emerald-500" },
              { name: "FinTech", icon: "💳", desc: "Banking & payment apps", color: "from-purple-500 to-indigo-500" },
              { name: "Education", icon: "📚", desc: "LMS & e-learning platforms", color: "from-yellow-500 to-orange-500" },
              { name: "Travel", icon: "✈️", desc: "Booking & hospitality apps", color: "from-cyan-500 to-blue-500" },
              { name: "SaaS", icon: "☁️", desc: "Cloud-based applications", color: "from-indigo-500 to-purple-500" },
              { name: "Startups", icon: "🚀", desc: "MVP & rapid development", color: "from-pink-500 to-rose-500" },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-4xl mb-5 shadow-lg group-hover:scale-110 transition-transform p-4`}>
                  {industry.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-2">{industry.name}</h3>
                <p className="text-base text-slate-500">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - TechSavyCrew Style */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-lime-500/20 text-lime-400 px-5 py-2.5 rounded-full text-base font-bold mb-8 border border-lime-500/30">
                <Users className="w-5 h-5" /> Meet Our Leadership
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-8 leading-tight">
                Building Digital Excellence from <span className="text-lime-400">Lucknow to the World</span>
              </h2>
              <p className="text-blue-100 text-xl md:text-2xl mb-8 leading-relaxed">
                Web Nova Crew was founded with a vision to provide world-class web development services from India. Our team of 25+ experts combines technical excellence with creative innovation to deliver solutions that drive real business results.
              </p>
              <p className="text-blue-200 text-lg md:text-xl mb-10 leading-relaxed">
                With expertise across React, Next.js, Flutter, and modern cloud technologies, we've helped 50+ businesses transform their digital presence and generate over ₹50 Crore in revenue for our clients.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://www.linkedin.com/company/web-nova-crew" target="_blank" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://x.com/WebNovaCrew" target="_blank" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" /> Twitter
                </a>
                <Link href="/contact">
                  <span className="flex items-center gap-2 bg-lime-500 text-slate-900 px-4 py-2 rounded-full hover:bg-lime-400 transition-colors font-bold cursor-pointer">
                    Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "50+", label: "Projects Delivered", icon: "🚀" },
                { value: "₹50Cr+", label: "Revenue Generated", icon: "💰" },
                { value: "25+", label: "Team Members", icon: "👥" },
                { value: "10+", label: "Countries Served", icon: "🌍" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-lime-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section id="case-studies" className="py-28 bg-slate-900 text-white px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-lime-400 font-bold tracking-wider uppercase text-base mb-6 block">Proof, Not Promises</span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Real Clients. Real Results. Real Revenue.
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Don't take our word for it. Here's what we've achieved for businesses just like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {clientResults.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-3xl p-10 border border-slate-700"
              >
                <div className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-3">{client.industry}</div>
                <h3 className="text-2xl font-bold mb-5">{client.company}</h3>
                <div className="text-5xl font-bold text-lime-400 mb-5">{client.result}</div>
                <blockquote className="text-slate-300 italic text-lg mb-5 leading-relaxed">"{client.quote}"</blockquote>
                <div className="text-base text-slate-400">— {client.person}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-lime-500 text-slate-900 hover:bg-lime-400 font-bold rounded-full px-10 py-7 text-lg">
                See All Case Studies <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Certification Badges */}
      <CertificationBadgesGrid />

      {/* Why Choose Us */}
      <section className="py-28 bg-blue-900 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500 rounded-full blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                Why leading brands choose <span className="text-lime-400">Web Nova Crew</span>
              </h2>
              <p className="text-blue-100 text-xl md:text-2xl mb-12 leading-relaxed">
                We don't just build websites; we build digital assets that generate revenue. Our team of 25+ specialists is dedicated to your growth.
              </p>
              
              <div className="space-y-8">
                {[
                  "Transparent Process with Weekly Updates",
                  "Data-Driven Strategies backed by Analytics",
                  "360° SEO & Development Solutions",
                  "100% Client Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                        <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <span className="font-medium text-xl">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                 <Button className="mt-12 bg-white text-blue-900 hover:bg-blue-50 font-bold text-xl px-10 py-7 rounded-full">
                    More About Us
                 </Button>
              </Link>
            </div>
            
            <div className="relative">
               <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-2xl">
                   <div className="flex items-center gap-5 mb-10">
                       <div className="w-18 h-18 bg-lime-400 rounded-2xl flex items-center justify-center shadow-lg p-4">
                           <Rocket className="w-10 h-10 text-blue-900" />
                       </div>
                       <div>
                           <div className="font-bold text-3xl">Start Your Project</div>
                           <div className="text-blue-200 text-lg">Get a proposal within 24 hours</div>
                       </div>
                   </div>
                   <p className="text-blue-100 mb-10 text-xl leading-relaxed">
                       "Web Nova Crew transformed our online presence. We saw a 300% increase in leads within the first 3 months."
                   </p>
                   <div className="flex items-center gap-4">
                       <div className="w-14 h-14 bg-blue-500 rounded-full"></div>
                       <div>
                           <div className="font-bold text-xl">Rajesh Kumar</div>
                           <div className="text-base text-blue-300">CEO, TechFlow India</div>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">Technologies We Master</h2>
          <p className="text-slate-600 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build scalable, secure, and high-performance digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {technologies.map((tech) => (
              <span key={tech} className="px-8 py-4 bg-slate-100 rounded-full text-slate-700 font-semibold text-xl border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
              The Web Nova Crew Advantage
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              What makes us the preferred choice for web and app development in India
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection faqs={homeFAQs} />

      {/* Final CTA - Urgency */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 py-3 px-6 rounded-full bg-white/10 text-lime-400 text-base font-bold mb-8 border border-white/20">
              <span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></span>
              Limited Availability: Only 3 Slots Left This Month
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-8">
              Stop Losing Customers to Your Competitors
            </h2>
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every day without a high-converting website is money left on the table. Let's fix that—starting with a free 30-minute strategy call.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold text-xl px-12 py-8 rounded-full shadow-xl">
                  Book Your Free Strategy Call <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919872364476">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-xl px-12 py-8 rounded-full">
                  <Phone className="w-6 h-6 mr-2" /> +91 98723 64476
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-lg text-blue-200">
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-lime-400" /> Free consultation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-lime-400" /> No obligation</span>
              <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-lime-400" /> Response in 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
