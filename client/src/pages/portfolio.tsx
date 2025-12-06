import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Web Development", "Mobile App", "E-Commerce", "SaaS"];
  
  const projects = [
    {
      title: "FinTech Dashboard Pro",
      category: "SaaS",
      filterCategory: "SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      desc: "A comprehensive financial analytics dashboard handling real-time data for 50k+ users. Built with React and D3.js for stunning data visualizations.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      results: "50K+ active users",
      industry: "FinTech"
    },
    {
      title: "Luxe Estate",
      category: "Real Estate Platform",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      desc: "Premium property listing platform with virtual tour integration, lead management, and advanced search. Increased client leads by 400%.",
      tags: ["Next.js", "Mapbox", "PostgreSQL", "AWS"],
      results: "400% more leads",
      industry: "Real Estate"
    },
    {
      title: "HealthCare Connect",
      category: "Healthcare App",
      filterCategory: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      desc: "Patient-doctor appointment booking app with secure telemedicine video calls, prescription management, and health records. HIPAA compliant.",
      tags: ["Flutter", "WebRTC", "Firebase", "Node.js"],
      results: "100K+ downloads",
      industry: "Healthcare"
    },
    {
      title: "EcoShop Marketplace",
      category: "E-Commerce Store",
      filterCategory: "E-Commerce",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      desc: "Sustainable products marketplace with advanced filtering, wishlist, and seamless checkout. Achieved 250% increase in conversion rate.",
      tags: ["Shopify Plus", "Liquid", "React", "Stripe"],
      results: "250% conversion boost",
      industry: "E-Commerce"
    },
    {
      title: "EduLearn Platform",
      category: "EdTech LMS",
      filterCategory: "SaaS",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      desc: "Interactive learning management system for schools with live classes, assignment tracking, and progress analytics. Used by 200+ schools.",
      tags: ["React", "Django", "AWS", "WebSocket"],
      results: "200+ schools onboarded",
      industry: "Education"
    },
    {
      title: "TravelGo Booking",
      category: "Travel Portal",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
      desc: "Flight and hotel booking engine with complex search algorithms, price comparison, and instant booking confirmation.",
      tags: ["React", "Express", "MongoDB", "Redis"],
      results: "₹2Cr+ bookings/month",
      industry: "Travel"
    },
    {
      title: "FoodieHub Delivery",
      category: "Food Delivery App",
      filterCategory: "Mobile App",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
      desc: "On-demand food delivery app with real-time tracking, multiple payment options, and restaurant management dashboard.",
      tags: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      results: "50K+ orders/month",
      industry: "Food & Beverage"
    },
    {
      title: "StyleStore Fashion",
      category: "Fashion E-Commerce",
      filterCategory: "E-Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      desc: "High-end fashion e-commerce with AR try-on feature, size recommendations, and influencer integration.",
      tags: ["Next.js", "Shopify", "TensorFlow", "AR Kit"],
      results: "300% revenue growth",
      industry: "Fashion"
    },
    {
      title: "CRM Enterprise Suite",
      category: "Enterprise SaaS",
      filterCategory: "SaaS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      desc: "Custom CRM solution for enterprise clients with sales pipeline, analytics dashboard, and team collaboration tools.",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      results: "Enterprise clients",
      industry: "B2B SaaS"
    }
  ];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Portfolio - Web & App Development Case Studies" 
        description="Explore our portfolio of 50+ successful web development, mobile app, and e-commerce projects. See real results: 300% traffic growth, 250% conversion increases, and more."
        keywords="web development portfolio, app development case studies, website design examples, mobile app projects, e-commerce success stories, react projects, flutter apps"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Portfolio", url: "https://webnovacrew.com/portfolio" }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Web & App Development <span className="text-blue-600">Case Studies</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of 50+ successful projects across web development, mobile apps, e-commerce, and SaaS platforms. Each project showcases our commitment to delivering measurable business results.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-600">98%</div>
                <div className="text-sm text-slate-500">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-slate-500">Industries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                layout
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} by Web Nova Crew`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Link href="/contact">
                      <Button className="rounded-full font-bold bg-lime-400 text-blue-900 hover:bg-white">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 bg-lime-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {project.results}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-medium bg-slate-100 text-slate-400 px-2 py-1 rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection 
        title="What Clients Say About Our Work"
        subtitle="Don't just take our word for it. Here's what our clients have to say about working with Web Nova Crew."
      />
      
      {/* CTA */}
      <CTASection 
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can help bring your vision to life. Get a free consultation and custom quote."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />

      <Footer />
    </div>
  );
}
