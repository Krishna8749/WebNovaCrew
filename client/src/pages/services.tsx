import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { motion } from "framer-motion";
import { Smartphone, Globe, ShoppingCart, Search, Layout, Database, Server, Code2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Custom Web Development",
      description: "High-performance websites tailored to your brand. We build scalable, secure, and fast-loading web applications.",
      features: ["React.js & Next.js", "Progressive Web Apps (PWA)", "Corporate Websites", "SaaS Platforms"]
    },
    {
      id: "app-dev",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android devices.",
      features: ["iOS & Android Native", "Flutter Cross-Platform", "App UI/UX Design", "App Store Optimization"]
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "E-Commerce Solutions",
      description: "Robust online stores designed to maximize conversions. From Shopify setup to custom headless commerce builds.",
      features: ["WooCommerce & Shopify", "Custom Cart Development", "Payment Gateway Integration", "Inventory Management"]
    },
    {
      id: "seo",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Advanced SEO",
      description: "Data-driven strategies to dominate search rankings. We don't just bring traffic; we bring qualified leads.",
      features: ["Technical SEO Audits", "On-Page Optimization", "Link Building Strategy", "Local SEO Domination"]
    },
    {
      id: "uiux",
      icon: <Layout className="w-12 h-12 text-blue-600" />,
      title: "UI/UX Design",
      description: "User-centric design that blends aesthetics with functionality. We create interfaces users love to interact with.",
      features: ["Wireframing & Prototyping", "User Research", "Visual Design Systems", "Interaction Design"]
    },
    {
      id: "backend",
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Backend & API",
      description: "The engine room of your application. Secure, scalable server-side logic and database management.",
      features: ["Node.js & Python", "RESTful & GraphQL APIs", "Database Design (SQL/NoSQL)", "Cloud Infrastructure (AWS)"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive web and app development services. From custom coding to SEO dominance, we cover all your digital needs."
        keywords="web development services, mobile app development, ecommerce solutions, seo services india, ui ux design"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-50"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            End-to-End <span className="text-lime-400">Digital Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We combine creativity with technical expertise to deliver products that scale. Whether you need a simple website or a complex enterprise app, we have the crew for it.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-lime-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 font-bold">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 font-poppins">Technologies We Master</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Logos Text Placeholders for SEO visual concept */}
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter", "AWS", "MongoDB", "PostgreSQL", "Shopify", "WordPress"].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-bold text-lg border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-lime-400">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 font-poppins">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-blue-800 text-xl mb-8">
            Let's turn your vision into reality with India's best development team.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800 px-10 py-6 text-lg font-bold shadow-xl rounded-full">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
