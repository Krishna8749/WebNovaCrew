import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Users, Award, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { teamMembers, departments, getTeamByDepartment } from "@/data/team";

export default function Team() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const filteredTeam = getTeamByDepartment(activeDepartment);

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Our Team - Meet the Experts Behind Web Nova Crew" 
        description="Meet the talented team of developers, designers, and strategists at Web Nova Crew. 25+ experts dedicated to building world-class web and mobile solutions."
        keywords="web development team india, app developers mohali, UP, UI/UX designers, tech team, software engineers india"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Team", url: "https://webnovacrew.com/team" }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
              Meet the <span className="text-blue-600">Experts</span> Behind Our Success
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              We're a team of 25+ passionate developers, designers, and strategists dedicated to building exceptional digital experiences. Our diverse expertise spans web development, mobile apps, UI/UX design, and digital marketing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: <Users className="w-6 h-6" />, value: "25+", label: "Team Members" },
                { icon: <Award className="w-6 h-6" />, value: "50+", label: "Projects Delivered" },
                { icon: <Globe className="w-6 h-6" />, value: "10+", label: "Countries Served" },
                { icon: <Heart className="w-6 h-6" />, value: "4.9/5", label: "Team Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeDepartment === dept
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-blue-400 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                      {member.department}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="text-xs bg-slate-100 text-slate-400 px-2 py-1 rounded">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Want to Join Our Team?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. Check out our open positions and become part of the Web Nova Crew family.
          </p>
          <Link href="/careers">
            <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-8">
              View Open Positions
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
