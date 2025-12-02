import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard Pro",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      desc: "A comprehensive financial analytics dashboard handling real-time data for 50k+ users.",
      tags: ["React", "D3.js", "Node.js"]
    },
    {
      title: "Luxe Estate",
      category: "Real Estate Website",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      desc: "Premium property listing platform with virtual tour integration and lead management.",
      tags: ["Next.js", "Mapbox", "PostgreSQL"]
    },
    {
      title: "HealthCare Connect",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      desc: "Patient-doctor appointment booking app with secure telemedicine video calls.",
      tags: ["Flutter", "WebRTC", "Firebase"]
    },
    {
      title: "EcoShop",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      desc: "Sustainable products marketplace with advanced filtering and cart functionality.",
      tags: ["Shopify Plus", "Liquid", "React"]
    },
    {
      title: "EduLearn Platform",
      category: "LMS Solution",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      desc: "Interactive learning management system for schools with assignment tracking.",
      tags: ["Vue.js", "Django", "AWS"]
    },
    {
      title: "TravelGo",
      category: "Booking Portal",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
      desc: "Flight and hotel booking engine with complex search algorithms.",
      tags: ["React", "Express", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Our Portfolio" 
        description="View our case studies and success stories. See how Web Nova Crew delivers world-class web and app solutions for clients globally."
        keywords="web development portfolio, app case studies, successful tech projects, client success stories"
      />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Our Work Speaks for <span className="text-blue-600">Itself</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We don't just claim to be the best; we prove it with every project. Explore some of our recent work that has transformed businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full font-bold bg-lime-400 text-blue-900 hover:bg-white">
                      View Project <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-poppins">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8">
                Start a Project with Us
            </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
