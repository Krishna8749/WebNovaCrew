import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { motion } from "framer-motion";
import { CheckCircle2, Code, Users, Trophy, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="About Us" 
        description="Learn about Web Nova Crew, India's leading web and mobile app development agency. We are a team of 20+ experts dedicated to your digital success."
        keywords="about web nova crew, web development agency india, app development team, tech company mohali"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Building the Future of <br />
              <span className="text-blue-600">Digital Excellence</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2023, Web Nova Crew has rapidly evolved into India's premier digital agency. We don't just write code; we craft digital experiences that drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
            {[
              { label: "Projects Delivered", value: "40+" },
              { label: "Revenue Generated", value: "$3M+" },
              { label: "Team Members", value: "20+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-lime-200 rounded-3xl transform rotate-3"></div>
               <div className="relative bg-slate-900 text-white p-10 rounded-3xl shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Target className="text-lime-400" /> Our Mission
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    To empower businesses globally by providing high-quality, scalable, and innovative web and mobile solutions that deliver measurable ROI.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="text-lime-400" /> Our Vision
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    To become the world's most trusted digital partner, known for technical excellence, transparency, and a client-first approach.
                  </p>
               </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Why We Are Different</h2>
              <p className="text-slate-600 mb-8">
                In a crowded market of "me-too" agencies, Web Nova Crew stands out through rigor and results. We combine the agility of a startup with the process discipline of an enterprise.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Advanced Tech Stack", desc: "We use the latest frameworks like React, Next.js, and Flutter." },
                  { title: "SEO-First Development", desc: "Every line of code is written with search engine visibility in mind." },
                  { title: "Transparent Communication", desc: "No jargon. Just clear weekly updates and honest consulting." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Snippet */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Award-Winning Excellence</h2>
          <p className="text-slate-600 text-lg mb-8">
            Recognized by Forbes India as a leading agency, and rated 5.0 on Glassdoor by our own team. Great work comes from a happy, motivated crew.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
