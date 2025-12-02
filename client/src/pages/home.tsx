import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, ArrowRight, CheckCircle2, MessageCircle, TrendingUp, Users, Globe, Smartphone, Palette, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Development",
      desc: "Custom, high-performance websites built with React, Next.js, and modern technologies."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "SEO Optimization",
      desc: "Data-driven SEO strategies to rank your business #1 on Google."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      desc: "Intuitive and engaging user interfaces that convert visitors into customers."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "E-Commerce",
      desc: "Scalable online stores with Shopify, WooCommerce, or custom solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      desc: "Comprehensive branding and marketing campaigns to grow your reach."
    }
  ];

  const caseStudies = [
    {
      category: "Real Estate Solution",
      stat: "588K",
      sub: "4.7x Increase",
      desc: "The monthly total of non-branded clicks increased from 2.62K to 12.2K.",
      trend: "up"
    },
    {
      category: "E-Commerce Store",
      stat: "20K+",
      sub: "300% Growth",
      desc: "Scaled monthly traffic from 5,000 to 20,000+ visits in just 6 months.",
      trend: "up"
    },
    {
      category: "Healthcare Firm",
      stat: "#1",
      sub: "Top Rankings",
      desc: "Achieved dominant search visibility for competitive healthcare keywords.",
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-blue-600 shadow-md py-3" : "bg-blue-600 py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
             {/* Logo Area */}
             <div className="relative flex items-center justify-center w-10 h-10 bg-lime-400 rounded-lg transform -rotate-3 shadow-lg">
                <Rocket className="w-6 h-6 text-blue-900" />
             </div>
             <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl leading-none tracking-tight">WEB NOVA</span>
                <span className="font-poppins font-bold text-sm text-lime-400 leading-none tracking-widest">CREW</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#home" className="hover:text-lime-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-lime-300 transition-colors">About</a>
            <a href="#services" className="hover:text-lime-300 transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-lime-300 transition-colors">Case Studies</a>
            <Button className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-6">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-blue-700 pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-white text-lg font-semibold">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
              <Button className="bg-lime-500 text-blue-900 hover:bg-lime-400 w-full mt-4 font-bold">
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 border border-blue-200">
              India's No.1 Custom Web Development Agency
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight text-slate-900 mb-6">
              We design to <span className="text-blue-600">impress</span>.<br />
              We develop to <span className="text-lime-600">dominate</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our work speaks through the success of our clients. From higher rankings to stronger conversions, our AI-first methods deliver real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lime-500 text-blue-950 hover:bg-lime-400 font-bold text-lg px-8 py-6 shadow-lg shadow-lime-500/20 transition-all hover:scale-105">
                View Case Studies
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold text-lg px-8 py-6">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section (The requested part) */}
      <section id="case-studies" className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4">Real Results, Real Growth</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These results show what is possible for your business too. We don't just promise; we deliver measurable success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-all duration-300 h-full bg-white group overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{study.category}</div>
                    <div className="flex items-baseline justify-between">
                      <CardTitle className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {study.stat}
                      </CardTitle>
                      <span className="flex items-center text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {study.trend === "up" && <TrendingUp className="w-3 h-3 mr-1" />}
                        {study.sub}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {study.desc}
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                       <a href="#" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 hover:underline">
                          Read full story <ArrowRight className="w-4 h-4 ml-1" />
                       </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <Button className="bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-600/20">
                View All Case Studies
             </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Our Expertise</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mt-2 mb-6">Full-Stack Digital Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100 transition-all duration-300 group">
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-20 bg-blue-900 text-white px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 leading-tight">
                Why leading brands choose <span className="text-lime-400">Web Nova Crew</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We don't just build websites; we build digital assets that generate revenue. Our team of 20+ specialists is dedicated to your growth.
              </p>
              
              <div className="space-y-4">
                {[
                  "Transparent Process with Weekly Updates",
                  "Data-Driven Strategies backed by Analytics",
                  "360° SEO & Development Solutions",
                  "100% Client Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-lime-400 w-6 h-6 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
               <h3 className="font-bold text-2xl mb-6">Frequently Asked Questions</h3>
               <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/20">
                  <AccordionTrigger className="hover:text-lime-400 text-left">How long does a website take?</AccordionTrigger>
                  <AccordionContent className="text-blue-100">
                    Typically 4-8 weeks depending on complexity. We work in agile sprints to deliver value quickly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/20">
                  <AccordionTrigger className="hover:text-lime-400 text-left">Do you offer post-launch support?</AccordionTrigger>
                  <AccordionContent className="text-blue-100">
                    Yes! We offer lifetime maintenance and support packages to keep your digital assets running smoothly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/20">
                  <AccordionTrigger className="hover:text-lime-400 text-left">What industries do you serve?</AccordionTrigger>
                  <AccordionContent className="text-blue-100">
                    We specialize in Real Estate, E-Commerce, Healthcare, and SaaS, but we've worked with clients across 40+ industries.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <Rocket className="w-6 h-6 text-lime-400" />
                <span className="font-poppins font-bold text-xl text-white">WEB NOVA CREW</span>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">
              India's premier web development and SEO agency. We help businesses scale through innovative digital solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-500 hover:text-slate-900 transition-all cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-500 hover:text-slate-900 transition-all cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">SEO Services</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-lime-400" /> info@webnovacrew.com
              </li>
              <li className="mt-4 text-sm text-slate-500">
                4th Floor, Mohali, India 160055
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Web Nova Crew. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
