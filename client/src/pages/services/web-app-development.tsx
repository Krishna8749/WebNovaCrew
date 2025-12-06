import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Globe, Code2, Zap, Shield, 
  Layers, Users, TrendingUp, Phone, Award, Rocket,
  Star, Clock, DollarSign, Database, Settings, Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function WebAppDevelopment() {
  const webAppTypes = [
    { title: "Progressive Web Apps (PWA)", desc: "App-like experience that works offline and can be installed", icon: <Globe className="w-6 h-6" /> },
    { title: "Single Page Applications (SPA)", desc: "Fast, responsive apps using React, Vue, or Angular", icon: <Zap className="w-6 h-6" /> },
    { title: "Enterprise Web Applications", desc: "Scalable business solutions with complex workflows", icon: <Database className="w-6 h-6" /> },
    { title: "SaaS Platforms", desc: "Multi-tenant cloud applications with subscription models", icon: <Cloud className="w-6 h-6" /> },
  ];

  const industries = [
    { title: "E-commerce & Retail", desc: "Online stores, marketplaces, inventory management" },
    { title: "Healthcare & Telemedicine", desc: "Patient portals, appointment systems, EMR" },
    { title: "Education & E-learning", desc: "LMS, online courses, student management" },
    { title: "Real Estate", desc: "Property portals, CRM, lead management" },
    { title: "Finance & Banking", desc: "Fintech apps, payment gateways, accounting" },
    { title: "Logistics & Transport", desc: "Fleet management, booking systems, tracking" },
    { title: "HR & Recruitment", desc: "ATS, employee portals, payroll systems" },
    { title: "Media & Entertainment", desc: "Streaming platforms, content management" },
  ];

  const techStack = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS / Azure", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ];

  const features = [
    "Responsive Design (Mobile, Tablet, Desktop)",
    "User Authentication & Authorization",
    "Real-time Updates & Notifications",
    "Payment Gateway Integration",
    "Third-party API Integration",
    "Advanced Search & Filtering",
    "Admin Dashboard & Analytics",
    "Role-based Access Control",
    "Cloud Storage Integration",
    "Email & SMS Notifications",
    "Multi-language Support",
    "SEO Optimization"
  ];

  const whyChooseUs = [
    { title: "Full-Stack Expertise", desc: "Frontend, backend, database, and cloud specialists", icon: <Code2 className="w-5 h-5" /> },
    { title: "Modern Tech Stack", desc: "React, Next.js, Node.js, Laravel, AWS", icon: <Layers className="w-5 h-5" /> },
    { title: "Fast Development", desc: "Launch MVP in 15-60 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "Scalable Architecture", desc: "Built to handle growth from day one", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Security First", desc: "HTTPS, encryption, secure authentication", icon: <Shield className="w-5 h-5" /> },
    { title: "Ongoing Support", desc: "Maintenance, updates, and feature additions", icon: <Settings className="w-5 h-5" /> },
  ];

  const process = [
    { step: "1", title: "Discovery & Planning", desc: "Define features, user flows, and technical architecture" },
    { step: "2", title: "UI/UX Design", desc: "Create wireframes and high-fidelity designs" },
    { step: "3", title: "Frontend Development", desc: "Build responsive UI with React/Next.js" },
    { step: "4", title: "Backend Development", desc: "Develop APIs, database, and business logic" },
    { step: "5", title: "Testing & QA", desc: "Comprehensive testing across browsers and devices" },
    { step: "6", title: "Deployment & Launch", desc: "Deploy to cloud with CI/CD pipeline" },
  ];

  const faqs = [
    {
      question: "What is the difference between a web app and a website?",
      answer: "A website is primarily informational and static, while a web app is interactive and allows users to perform tasks like managing data, making transactions, or collaborating. Web apps have user authentication, databases, and complex functionality similar to mobile apps but accessible through a browser."
    },
    {
      question: "How much does web app development cost?",
      answer: "Web app development costs range from ₹40,000 to ₹10,00,000 in India (350-9,000 KWD in Kuwait). Simple web apps start at ₹40,000, business applications cost ₹1,00,000-₹3,00,000, and complex SaaS platforms cost ₹5,00,000-₹10,00,000 depending on features and complexity."
    },
    {
      question: "How long does it take to build a web application?",
      answer: "Simple web apps take 15-30 days, standard business applications require 6-10 weeks, and complex enterprise or SaaS platforms take 3-6 months. Timeline depends on features, integrations, design complexity, and testing requirements."
    },
    {
      question: "What technologies do you use for web app development?",
      answer: "We use modern tech stacks including React.js, Next.js, Vue.js for frontend; Node.js, Laravel, Python for backend; PostgreSQL, MongoDB for databases; and AWS, Azure for cloud hosting. We select the best technology based on your specific requirements."
    },
    {
      question: "Can you build Progressive Web Apps (PWA)?",
      answer: "Yes! We specialize in PWA development that combines the best of web and mobile apps. PWAs work offline, can be installed on devices, send push notifications, and provide app-like experience while being accessible through browsers."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes, we offer complete hosting solutions on AWS, Azure, or other cloud platforms, along with ongoing maintenance including security updates, bug fixes, performance optimization, and feature enhancements."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Web App Development Company | React, Next.js, SaaS | India & Kuwait" 
        description="Leading web app development company in India & Kuwait. We build Progressive Web Apps, SaaS platforms, and enterprise web applications using React, Next.js, Node.js, and Laravel. ₹40,000 onwards."
        keywords="web app development, progressive web app development, SaaS development, React web app, Next.js development, web application development India, web app development Kuwait, PWA development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "Web App Development", url: "https://webnovacrew.com/services/web-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Web App Development"
        serviceDescription="Professional web application development services. Custom web apps, Progressive Web Apps, SaaS platforms using React, Next.js, Node.js, and modern cloud technologies."
        serviceUrl="https://webnovacrew.com/services/web-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">200+ Web Apps Delivered</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
              Web App Development Company
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build powerful <span className="text-indigo-400 font-semibold">web applications and SaaS platforms</span> with React, Next.js, Node.js, and cloud-native architecture. Trusted by businesses in India & Kuwait.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Web Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-1">200+</div>
                <div className="text-sm text-slate-400">Web Apps Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">₹40K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-1">15-60</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Cloud Native</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web App Types */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Types of Web Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern web applications for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webAppTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-slate-400">{type.desc}</p>
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
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom web applications for every sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Tech Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern technologies for scalable web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-slate-400">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Features We Include
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive features for modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-200">{feature}</span>
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
              Why Choose Web Nova Crew
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              India & Kuwait's trusted web app development partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From concept to cloud deployment in 6 steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">{item.title}</h3>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything about web app development
            </p>
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
      <section className="py-20 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed web app development proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
