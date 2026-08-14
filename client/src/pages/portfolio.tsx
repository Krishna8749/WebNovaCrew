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
      title: "Al Mulla Exchange Kuwait",
      category: "FinTech Platform",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      desc: "Complete digital transformation for Kuwait's leading exchange company. Real-time currency rates, KNET integration, remittance tracking, and multi-branch management system serving 200K+ customers.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "KNET API"],
      results: "200K+ customers",
      industry: "FinTech - Kuwait",
      year: "2025"
    },
    {
      title: "Mumbai Realty Hub",
      category: "Real Estate Platform",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      desc: "Premium property listing platform for Mumbai's top real estate developers. Features 3D virtual tours, AI-powered property matching, lead management CRM, and integrated home loan calculator. Increased leads by 380%.",
      tags: ["Next.js", "Three.js", "PostgreSQL", "AWS"],
      results: "380% more leads",
      industry: "Real Estate - India",
      year: "2025"
    },
    {
      title: "Seha Health Kuwait",
      category: "Healthcare App",
      filterCategory: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      desc: "Comprehensive healthcare app for Kuwait Ministry of Health approved clinics. Telemedicine video consultations, e-prescriptions, lab results, appointment booking, and Arabic RTL support. 85K+ active patients.",
      tags: ["Flutter", "WebRTC", "Firebase", "Node.js"],
      results: "85K+ patients",
      industry: "Healthcare - Kuwait",
      year: "2025"
    },
    {
      title: "Spice Route E-Commerce",
      category: "E-Commerce Store",
      filterCategory: "E-Commerce",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      desc: "Premium Indian spices and organic products marketplace serving India, Kuwait, UAE, and USA. Multi-currency checkout, Razorpay + KNET integration, subscription boxes, and wholesale portal. ₹4.5Cr monthly GMV.",
      tags: ["Next.js", "Stripe", "Razorpay", "KNET"],
      results: "₹4.5Cr GMV/month",
      industry: "E-Commerce - Global",
      year: "2025"
    },
    {
      title: "Delhi Public School LMS",
      category: "EdTech Platform",
      filterCategory: "SaaS",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      desc: "Custom learning management system for DPS school network across North India. Live classes, assignment submission, parent portal, attendance tracking, and fee management. Deployed across 45 schools, 120K+ students.",
      tags: ["React", "Django", "AWS", "WebSocket"],
      results: "120K+ students",
      industry: "Education - India",
      year: "2024"
    },
    {
      title: "Kuwait Airways Booking",
      category: "Travel Portal",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
      desc: "White-label flight booking engine for Kuwait-based travel agency. Real-time inventory from GDS, dynamic pricing, seat selection, KNET/card payments, and Arabic-English bilingual interface. KWD 2M+ monthly bookings.",
      tags: ["React", "Express", "MongoDB", "Amadeus API"],
      results: "KWD 2M+/month",
      industry: "Travel - Kuwait",
      year: "2024"
    },
    {
      title: "Talabat Clone - Salmiya",
      category: "Food Delivery App",
      filterCategory: "Mobile App",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
      desc: "Hyperlocal food delivery app for Salmiya restaurants. Real-time GPS tracking, KNET + Apple Pay, driver app, restaurant dashboard, and loyalty rewards. 180+ restaurants onboarded, 35K orders/month.",
      tags: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      results: "35K orders/month",
      industry: "Food Tech - Kuwait",
      year: "2025"
    },
    {
      title: "Lucknow Chikan Emporium",
      category: "Fashion E-Commerce",
      filterCategory: "E-Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      desc: "Heritage Lucknowi Chikankari fashion brand's D2C platform. AR try-on for kurtas, size recommendation AI, COD + UPI payments, and international shipping to 15 countries. 280% revenue growth in 8 months.",
      tags: ["Next.js", "Shopify", "TensorFlow", "Shiprocket"],
      results: "280% revenue growth",
      industry: "Fashion - India",
      year: "2025"
    },
    {
      title: "Hawally Business CRM",
      category: "Enterprise SaaS",
      filterCategory: "SaaS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      desc: "Custom CRM for Kuwait SMEs with Arabic interface. Sales pipeline, WhatsApp integration, invoice generation, inventory sync, and KNET payment links. Used by 150+ businesses in Hawally and Salmiya.",
      tags: ["React", "Node.js", "PostgreSQL", "WhatsApp API"],
      results: "150+ businesses",
      industry: "B2B SaaS - Kuwait",
      year: "2024"
    },
    {
      title: "Bangalore Startup Hub",
      category: "Community Platform",
      filterCategory: "Web Development",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      desc: "Startup ecosystem platform connecting founders, investors, and mentors in Bangalore. Event management, pitch deck sharing, funding tracker, and job board. 8K+ registered startups, ₹120Cr funding facilitated.",
      tags: ["Next.js", "Supabase", "Stripe", "Vercel"],
      results: "₹120Cr funding",
      industry: "Startup Ecosystem - India",
      year: "2024"
    },
    {
      title: "Kuwait Gold Souk",
      category: "Jewelry E-Commerce",
      filterCategory: "E-Commerce",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000",
      desc: "Luxury jewelry e-commerce for Kuwait's Gold Souk retailers. Live gold rate integration, 360° product views, KNET + installment payments, and certificate verification. KWD 800K monthly sales.",
      tags: ["Next.js", "Three.js", "KNET", "Node.js"],
      results: "KWD 800K/month",
      industry: "Jewelry - Kuwait",
      year: "2025"
    },
    {
      title: "Hyderabad Metro App",
      category: "Transit App",
      filterCategory: "Mobile App",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      desc: "Official companion app for Hyderabad Metro Rail. Live train tracking, fare calculator, QR ticketing, station facilities, and accessibility features. 500K+ downloads, 4.6★ rating on Play Store.",
      tags: ["Flutter", "Firebase", "Google Maps", "UPI"],
      results: "500K+ downloads",
      industry: "Transit - India",
      year: "2024"
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
                {/* Detailed UI Mockup */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  {/* Al Mulla Exchange Kuwait */}
                  {index === 0 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">Al Mulla Exchange</div>
                        <div className="text-white/80 text-sm">Kuwait's Trusted Exchange</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-semibold text-sm">USD to KWD</span>
                            <span className="text-green-600 font-bold">0.307</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-semibold text-sm">INR to KWD</span>
                            <span className="text-green-600 font-bold">0.0037</span>
                          </div>
                          <div className="bg-green-600 text-white text-center py-2 rounded text-sm font-semibold">
                            Send Money Now
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-green-600 font-bold text-lg">200K+</div>
                            <div className="text-gray-600 text-xs">Customers</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-green-600 font-bold text-lg">15</div>
                            <div className="text-gray-600 text-xs">Branches</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mumbai Realty Hub */}
                  {index === 1 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">Mumbai Realty Hub</div>
                        <div className="text-white/80 text-sm">Premium Properties</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="w-full h-20 bg-blue-200 rounded mb-2 flex items-center justify-center">
                            <span className="text-blue-700 text-xs">3D Virtual Tour</span>
                          </div>
                          <div className="text-gray-800 font-semibold text-sm mb-1">Luxury 3BHK Apartment</div>
                          <div className="text-gray-600 text-xs mb-2">Bandra West, Mumbai</div>
                          <div className="flex items-center justify-between">
                            <div className="text-blue-600 font-bold">₹2.5 Cr</div>
                            <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">View Details</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-blue-600 font-bold">380%</div>
                            <div className="text-gray-600 text-xs">More Leads</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-blue-600 font-bold">5K+</div>
                            <div className="text-gray-600 text-xs">Properties</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Seha Health Kuwait */}
                  {index === 2 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">Seha Health</div>
                        <div className="text-white/80 text-sm">صحة - Your Health Partner</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                              <span className="text-teal-700 text-xs">Dr</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-gray-800 font-semibold text-sm">Dr. Ahmed Al-Rashid</div>
                              <div className="text-gray-600 text-xs">Cardiologist • Available</div>
                            </div>
                            <div className="bg-teal-500 text-white px-2 py-1 rounded text-xs">Book</div>
                          </div>
                          <div className="bg-teal-500 text-white text-center py-2 rounded text-sm font-semibold">
                            Video Consultation
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-teal-600 font-bold">85K+</div>
                            <div className="text-gray-600 text-xs">Patients</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-teal-600 font-bold">24/7</div>
                            <div className="text-gray-600 text-xs">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Spice Route E-Commerce */}
                  {index === 3 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">Spice Route</div>
                        <div className="text-white/80 text-sm">Authentic Indian Spices</div>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 shadow-sm border">
                            <div className="w-full h-12 bg-orange-200 rounded mb-1"></div>
                            <div className="text-gray-800 text-xs font-semibold">Garam Masala</div>
                            <div className="text-orange-600 font-bold text-sm">₹299</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 shadow-sm border">
                            <div className="w-full h-12 bg-red-200 rounded mb-1"></div>
                            <div className="text-gray-800 text-xs font-semibold">Red Chili</div>
                            <div className="text-red-600 font-bold text-sm">₹199</div>
                          </div>
                        </div>
                        <div className="bg-orange-500 text-white text-center py-2 rounded text-sm font-semibold">
                          Add to Cart
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-orange-600 font-bold">₹4.5Cr</div>
                            <div className="text-gray-600 text-xs">Monthly GMV</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-orange-600 font-bold">Global</div>
                            <div className="text-gray-600 text-xs">Shipping</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delhi Public School LMS */}
                  {index === 4 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">DPS Learning</div>
                        <div className="text-white/80 text-sm">Smart Education Platform</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-200 rounded-full"></div>
                            <span className="text-gray-800 font-semibold text-sm">Mathematics - Class 10</span>
                          </div>
                          <div className="text-gray-600 text-xs mb-2">Live Class at 10:00 AM</div>
                          <div className="bg-indigo-600 text-white text-center py-2 rounded text-sm font-semibold">
                            Join Class
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-indigo-600 font-bold">120K+</div>
                            <div className="text-gray-600 text-xs">Students</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-indigo-600 font-bold">45</div>
                            <div className="text-gray-600 text-xs">Schools</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Kuwait Airways Booking */}
                  {index === 5 && (
                    <div className="p-4 h-full">
                      <div className="bg-gradient-to-r from-blue-700 to-sky-600 rounded-lg p-4 mb-4">
                        <div className="text-white font-bold text-lg">Kuwait Airways</div>
                        <div className="text-white/80 text-sm">Book Your Journey</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="text-gray-800 font-semibold text-sm">KWI → BOM</div>
                              <div className="text-gray-600 text-xs">Kuwait to Mumbai</div>
                            </div>
                            <div className="text-blue-600 font-bold">KWD 180</div>
                          </div>
                          <div className="bg-blue-600 text-white text-center py-2 rounded text-sm font-semibold">
                            Book Flight
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-blue-600 font-bold">KWD 2M+</div>
                            <div className="text-gray-600 text-xs">Monthly</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className="text-blue-600 font-bold">Arabic</div>
                            <div className="text-gray-600 text-xs">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Default mockup for remaining projects */}
                  {index > 5 && (
                    <div className="p-4 h-full">
                      <div className={`bg-gradient-to-r ${
                        index === 6 ? 'from-orange-500 to-red-500' :
                        index === 7 ? 'from-pink-500 to-purple-600' :
                        index === 8 ? 'from-blue-600 to-indigo-700' :
                        index === 9 ? 'from-green-500 to-emerald-600' :
                        index === 10 ? 'from-yellow-500 to-orange-500' :
                        'from-purple-500 to-pink-500'
                      } rounded-lg p-4 mb-4`}>
                        <div className="text-white font-bold text-lg">{project.title.split(' ')[0]} {project.title.split(' ')[1]}</div>
                        <div className="text-white/80 text-sm">{project.category}</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border">
                          <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                          <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2 mb-2"></div>
                          <div className={`bg-${
                            index === 6 ? 'orange' :
                            index === 7 ? 'pink' :
                            index === 8 ? 'blue' :
                            index === 9 ? 'green' :
                            index === 10 ? 'yellow' :
                            'purple'
                          }-500 text-white text-center py-2 rounded text-sm font-semibold`}>
                            View Project
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className={`text-${
                              index === 6 ? 'orange' :
                              index === 7 ? 'pink' :
                              index === 8 ? 'blue' :
                              index === 9 ? 'green' :
                              index === 10 ? 'yellow' :
                              'purple'
                            }-600 font-bold text-sm`}>{project.results.split(' ')[0]}</div>
                            <div className="text-gray-600 text-xs">{project.results.split(' ').slice(1).join(' ')}</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center shadow-sm border">
                            <div className={`text-${
                              index === 6 ? 'orange' :
                              index === 7 ? 'pink' :
                              index === 8 ? 'blue' :
                              index === 9 ? 'green' :
                              index === 10 ? 'yellow' :
                              'purple'
                            }-600 font-bold text-sm`}>{project.year}</div>
                            <div className="text-gray-600 text-xs">Launched</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Link href="/contact">
                      <Button className="rounded-full font-bold bg-lime-400 text-blue-900 hover:bg-white">
                        View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
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
