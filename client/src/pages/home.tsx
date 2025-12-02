import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Rocket, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom React & Next.js websites that load fast and convert.",
      link: "/services"
    },
    {
      title: "App Development",
      desc: "Native iOS/Android apps built with Flutter for performance.",
      link: "/services"
    },
    {
      title: "SEO Optimization",
      desc: "Rank #1 on Google with our AI-driven SEO strategies.",
      link: "/services"
    },
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
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Home" 
        description="Web Nova Crew is India's No.1 Custom Web & App Development Agency. We build high-performance websites and mobile apps that drive growth."
      />
      
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8 border border-blue-200 tracking-wide">
              🚀 India's No.1 Custom Web Development Agency
            </span>
            <h1 className="font-poppins font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-slate-900 mb-8 tracking-tight">
              We design to <span className="text-blue-600 relative inline-block">impress<svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>.<br />
              We develop to <span className="text-lime-600 relative inline-block">dominate<svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your business with high-performance websites and mobile apps. Our AI-first approach ensures you stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="bg-lime-500 text-blue-950 hover:bg-lime-400 font-bold text-lg px-10 py-7 shadow-xl shadow-lime-500/20 transition-all hover:scale-105 rounded-full">
                  View Case Studies
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-blue-100 text-blue-700 hover:bg-blue-50 hover:border-blue-200 font-bold text-lg px-10 py-7 rounded-full">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-10 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 transition-all group cursor-pointer">
                    <h3 className="font-bold text-xl text-slate-900 mb-2 flex items-center justify-between">
                      {s.title} <ChevronRight className="w-5 h-5 text-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-slate-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-poppins font-bold text-3xl md:text-5xl text-slate-900 mb-4">Real Results, Real Growth</h2>
              <p className="text-slate-600 text-lg">
                These results show what is possible for your business too. We don't just promise; we deliver measurable success.
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="text-blue-600 font-bold hover:bg-blue-50 text-lg group">
                See All Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
                <Card className="border-none shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-all duration-300 h-full bg-white group overflow-hidden rounded-2xl">
                  <CardHeader className="pb-2 pt-8 px-8">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{study.category}</div>
                    <div className="flex items-baseline justify-between">
                      <CardTitle className="text-5xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-poppins">
                        {study.stat}
                      </CardTitle>
                    </div>
                    <div className="mt-2">
                       <span className="inline-flex items-center text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                        {study.trend === "up" && <TrendingUp className="w-3 h-3 mr-1.5" />}
                        {study.sub}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-4">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {study.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-blue-900 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500 rounded-full blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 leading-tight">
                Why leading brands choose <span className="text-lime-400">Web Nova Crew</span>
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                We don't just build websites; we build digital assets that generate revenue. Our team of 20+ specialists is dedicated to your growth.
              </p>
              
              <div className="space-y-6">
                {[
                  "Transparent Process with Weekly Updates",
                  "Data-Driven Strategies backed by Analytics",
                  "360° SEO & Development Solutions",
                  "100% Client Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                 <Button className="mt-10 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 py-6 rounded-full">
                    More About Us
                 </Button>
              </Link>
            </div>
            
            <div className="relative">
               <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
                   <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 bg-lime-400 rounded-xl flex items-center justify-center shadow-lg">
                           <Rocket className="w-8 h-8 text-blue-900" />
                       </div>
                       <div>
                           <div className="font-bold text-2xl">Start Your Project</div>
                           <div className="text-blue-200">Get a proposal within 24 hours</div>
                       </div>
                   </div>
                   <p className="text-blue-100 mb-8 text-lg">
                       "Web Nova Crew transformed our online presence. We saw a 300% increase in leads within the first 3 months."
                   </p>
                   <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                       <div>
                           <div className="font-bold">Rajesh Kumar</div>
                           <div className="text-sm text-blue-300">CEO, TechFlow India</div>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
