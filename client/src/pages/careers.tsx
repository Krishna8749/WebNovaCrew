import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, IndianRupee, ArrowRight, Heart, Laptop, GraduationCap, Users, Coffee, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { jobs, departments, getJobsByDepartment } from "@/data/jobs";

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const filteredJobs = getJobsByDepartment(activeDepartment);

  const benefits = [
    { icon: <IndianRupee className="w-6 h-6" />, title: "Competitive Salary", desc: "Industry-leading compensation with annual reviews" },
    { icon: <Heart className="w-6 h-6" />, title: "Health Insurance", desc: "Comprehensive coverage for you and your family" },
    { icon: <Laptop className="w-6 h-6" />, title: "Latest Equipment", desc: "MacBook Pro and all the tools you need" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning Budget", desc: "₹50,000/year for courses and conferences" },
    { icon: <Coffee className="w-6 h-6" />, title: "Flexible Hours", desc: "Work when you're most productive" },
    { icon: <Plane className="w-6 h-6" />, title: "Team Retreats", desc: "Annual team outings and celebrations" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Careers - Join Web Nova Crew" 
        description="Join India's fastest-growing web development company. We're hiring React developers, Flutter developers, UI/UX designers, and more. Great salary, benefits, and growth opportunities."
        keywords="web development jobs india, react developer jobs mohali, flutter developer careers, UI/UX designer jobs, tech jobs punjab, software engineer openings"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Careers", url: "https://webnovacrew.com/careers" }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-lime-400 text-sm font-bold mb-6 border border-white/20">
              We're Hiring!
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Build Your Career at <span className="text-lime-400">Web Nova Crew</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join India's fastest-growing web development company. Work on exciting projects, learn from the best, and grow your career with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#openings">
                <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-8">
                  View Open Positions
                </Button>
              </a>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe happy employees create the best work. Here's what you'll enjoy as part of our team.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-6">
                A Place Where You Can Thrive
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  At Web Nova Crew, we've built a culture that values innovation, collaboration, and continuous learning. We believe the best ideas come from diverse perspectives and open communication.
                </p>
                <p>
                  Our hybrid work model gives you flexibility while maintaining strong team connections. We trust our team to manage their time and deliver exceptional results.
                </p>
                <p>
                  Whether you're a seasoned professional or just starting your career, you'll find mentorship, growth opportunities, and a supportive environment to reach your full potential.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { value: "4.9/5", label: "Glassdoor Rating" },
                  { value: "95%", label: "Employee Retention" },
                  { value: "Hybrid", label: "Work Model" },
                  { value: "25+", label: "Team Size" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" 
                alt="Team collaboration"
                className="rounded-xl h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500" 
                alt="Office environment"
                className="rounded-xl h-48 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500" 
                alt="Team meeting"
                className="rounded-xl h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500" 
                alt="Working together"
                className="rounded-xl h-48 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">
              Find Your Perfect Role
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're looking for talented individuals to join our growing team. Check out our current openings below.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/careers/${job.slug}`}>
                  <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                            <span className="text-xs bg-lime-100 text-lime-700 px-2 py-1 rounded-full font-medium">
                              {job.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" /> {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <IndianRupee className="w-4 h-4" /> {job.salary}
                            </span>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No openings in this department currently. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Don't See Your Role?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to Web Nova Crew.
          </p>
          <a href="mailto:careers@webnovacrew.com">
            <Button size="lg" className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-8">
              Send Your Resume
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
