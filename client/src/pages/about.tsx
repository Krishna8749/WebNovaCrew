import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection, aboutFAQs } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { StatsSection } from "@/components/sections/Stats";
import { motion } from "framer-motion";
import { CheckCircle2, Code, Users, Trophy, Target, Sparkles, Award, Globe, Zap, Shield, Heart, Star, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const teamValues = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive edge."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Obsessed",
      description: "Every line of code is reviewed, tested, and optimized. We don't compromise on quality, ever."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client Success",
      description: "Your success is our success. We measure our performance by the results we deliver for your business."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description: "We work as an extension of your team, maintaining transparent communication throughout the project."
    }
  ];

  const milestones = [
    { year: "2023", title: "Founded", description: "Web Nova Crew was established in Lucknow, Uttar Pradesh, India" },
    { year: "2023", title: "First 10 Clients", description: "Delivered successful projects for startups and SMBs" },
    { year: "2024", title: "Team Expansion", description: "Grew to 20+ skilled developers and designers" },
    { year: "2024", title: "50+ Projects", description: "Milestone of 50 successful project deliveries" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="About Us - Best Web Development Company in India" 
        description="Web Nova Crew is India's leading web and mobile app development agency based in Lucknow, UP. 25+ expert developers, 50+ projects delivered, 100% client satisfaction. Learn about our team, values, and mission."
        keywords="about web nova crew, web development company india, app development agency hardoi, best web developers india, software company uttar pradesh, IT company UP"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "About Us", url: "https://webnovacrew.com/about" }
      ]} />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Web Nova Crew</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 mb-6">
              India's Leading <span className="text-blue-600">Web Development</span> & <span className="text-lime-600">App Development</span> Company
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Founded in 2023 in Lucknow, Uttar Pradesh, Web Nova Crew has rapidly evolved into one of India's most trusted digital agencies. We're a team of 25+ passionate developers, designers, and digital strategists dedicated to transforming businesses through technology. We don't just write code; we craft digital experiences that drive real business growth and deliver measurable ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">Lucknow, UP, India</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">Est. 2023</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-slate-700 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        stats={[
          { value: "50", suffix: "+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
          { value: "25", suffix: "+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
          { value: "10", suffix: "+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
          { value: "100", suffix: "%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
        ]}
      />

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

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our core values shape how we work, collaborate, and deliver exceptional results for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
              Milestones & Achievements
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {milestone.year}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-xl text-slate-900">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Award-Winning Excellence</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Recognized as a top web development company in India. Our commitment to quality and client success has earned us industry recognition and a 4.9/5 rating from our clients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["⭐ Top Rated on Clutch", "🏆 Best Web Agency 2024", "✅ ISO Certified", "🌟 Google Partner"].map((badge, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Web Nova Crew"
        subtitle="Learn more about our company, team, and how we work with clients."
        faqs={aboutFAQs} 
      />

      {/* CTA */}
      <CTASection 
        title="Ready to Work With India's Best Web Development Team?"
        subtitle="Let's discuss your project and see how we can help transform your digital presence."
        primaryButtonText="Start a Conversation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />

      <Footer />
    </div>
  );
}
