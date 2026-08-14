import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection, servicesFAQs } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Smartphone, Globe, ShoppingCart, Search, Layout, Database, Server, Code2, Check, ArrowRight, Zap, Users, Clock, Shield, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      id: "web-development",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Custom Web Development",
      shortTitle: "Web Development",
      description: "We build high-performance, SEO-optimized websites using React.js, Next.js, and modern web technologies. From corporate websites to complex web applications, our custom web development services help businesses establish a powerful online presence that converts visitors into customers.",
      features: [
        "React.js & Next.js Development",
        "Progressive Web Apps (PWA)",
        "Corporate & Business Websites",
        "SaaS Platform Development",
        "Landing Page Design",
        "Website Redesign & Migration"
      ],
      benefits: ["40% faster load times", "SEO-optimized code", "Mobile-first design"],
      pricing: "Starting from ₹50,000"
    },
    {
      id: "mobile-app-development",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      shortTitle: "App Development",
      description: "Create powerful iOS and Android mobile applications with our expert Flutter and React Native development team. We deliver cross-platform apps that provide native-like performance at 40% lower cost, helping you reach users on any device.",
      features: [
        "Flutter Cross-Platform Apps",
        "React Native Development",
        "iOS Native (Swift)",
        "Android Native (Kotlin)",
        "App UI/UX Design",
        "App Store Optimization (ASO)"
      ],
      benefits: ["Single codebase for iOS & Android", "Native performance", "Faster time-to-market"],
      pricing: "Starting from ₹3,00,000"
    },
    {
      id: "ecommerce-development",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "E-Commerce Development",
      shortTitle: "E-Commerce",
      description: "Build profitable online stores with our e-commerce development expertise. From Shopify and WooCommerce to custom headless commerce solutions, we create conversion-optimized shopping experiences that drive sales and customer loyalty.",
      features: [
        "Shopify & Shopify Plus",
        "WooCommerce Development",
        "Custom E-Commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Multi-vendor Marketplaces"
      ],
      benefits: ["Higher conversion rates", "Secure payment processing", "Scalable architecture"],
      pricing: "Starting from ₹1,00,000"
    },
    {
      id: "seo-services",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "SEO & Digital Marketing",
      shortTitle: "SEO Services",
      description: "Dominate Google search results with our data-driven SEO strategies. We combine technical SEO, content optimization, and link building to help your business rank #1 for competitive keywords and drive qualified organic traffic.",
      features: [
        "Technical SEO Audits",
        "On-Page SEO Optimization",
        "Link Building & Outreach",
        "Local SEO & Google My Business",
        "Content Strategy & Creation",
        "SEO Analytics & Reporting"
      ],
      benefits: ["Page 1 Google rankings", "300%+ organic traffic growth", "Higher quality leads"],
      pricing: "Starting from ₹25,000/month"
    },
    {
      id: "ui-ux-design",
      icon: <Layout className="w-12 h-12 text-blue-600" />,
      title: "UI/UX Design Services",
      shortTitle: "UI/UX Design",
      description: "Create exceptional user experiences with our UI/UX design services. We blend aesthetics with functionality to design intuitive interfaces that delight users and drive engagement. Our user-centered approach ensures your product stands out.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Interaction Design",
        "Usability Testing",
        "Design System Creation"
      ],
      benefits: ["Improved user satisfaction", "Higher engagement rates", "Reduced development costs"],
      pricing: "Starting from ₹40,000"
    },
    {
      id: "backend-development",
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Backend & API Development",
      shortTitle: "Backend Development",
      description: "Power your applications with robust backend infrastructure. Our backend development services include API design, database architecture, cloud deployment, and server management to ensure your application scales seamlessly.",
      features: [
        "Node.js & Python Development",
        "RESTful & GraphQL APIs",
        "Database Design (PostgreSQL, MongoDB)",
        "AWS & Google Cloud Deployment",
        "Microservices Architecture",
        "DevOps & CI/CD Setup"
      ],
      benefits: ["99.9% uptime guarantee", "Auto-scaling infrastructure", "Enterprise-grade security"],
      pricing: "Starting from ₹75,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business goals, target audience, and competition to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Our designers create wireframes and visual mockups, ensuring the user experience aligns with your brand."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your solution using best practices, with rigorous testing at every stage."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing maintenance, updates, and 24/7 support."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Web Development & App Development Services" 
        description="Professional web development, mobile app development, e-commerce, and SEO services in India. Custom React, Next.js, Flutter solutions. Get a free quote today!"
        keywords="web development services india, mobile app development company, ecommerce website development, SEO services, react development, next.js developers, flutter app development, custom software development, website design services"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" }
      ]} />
      <ServiceSchema 
        serviceName="Web & App Development Services"
        serviceDescription="Professional web development, mobile app development, e-commerce, and SEO services"
        serviceUrl="https://webnovacrew.com/services"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-lime-400 text-sm font-bold mb-6 border border-white/20">
            Complete Digital Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Professional <span className="text-lime-400">Web Development</span> & <span className="text-lime-400">App Development</span> Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            From custom website development to mobile app creation, e-commerce solutions to SEO optimization — we deliver end-to-end digital services that help businesses grow and succeed online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-8">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50" id="all-services">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
              Our Web & App Development Services
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. Each service is designed to deliver measurable results.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins">{service.title}</h3>
                        <p className="text-lime-600 font-semibold">{service.pricing}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          <TrendingUp className="w-3 h-3" /> {benefit}
                        </span>
                      ))}
                    </div>
                    
                    <Link href="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6">
                        Get Quote for {service.shortTitle} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Features List */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-bold text-slate-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-lime-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A proven 4-step process that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-blue-100"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">Technologies We Master</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            We use industry-leading technologies to build scalable, secure, and high-performance solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "Next.js", "TypeScript", "Node.js", "Python", "Flutter", "AWS", "Google Cloud", "MongoDB", "PostgreSQL", "Shopify", "WordPress", "Firebase", "Docker"].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-white rounded-full text-slate-700 font-semibold text-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Our Services"
        subtitle="Get answers to common questions about our web development, app development, and digital marketing services."
        faqs={servicesFAQs} 
      />
      
      {/* CTA */}
      <CTASection 
        variant="secondary"
        title="Ready to Start Your Project?"
        subtitle="Get a free consultation and custom quote for your web or app development project. We respond within 24 hours."
        primaryButtonText="Get Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
      />

      <Footer />
    </div>
  );
}
