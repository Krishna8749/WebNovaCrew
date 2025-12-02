import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Web Nova Crew for your web and app development needs. Request a free quote today."
        keywords="contact web development agency, hire developers india, web design quote, app development consultation"
      />
      
      <Navbar />
      
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">Let's Build Something <span className="text-lime-400">Great</span></h1>
          <p className="text-xl text-blue-100">Have a project idea? We'd love to hear about it. Drop us a line and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-poppins">Get in Touch</h2>
              
              <div className="space-y-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600 mb-1">Mon-Fri from 9am to 6pm IST</p>
                      <a href="tel:+919876543210" className="text-blue-600 font-bold text-lg hover:underline">+91 98765 43210</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600 mb-1">For general inquiries and support</p>
                      <a href="mailto:info@webnovacrew.com" className="text-blue-600 font-bold text-lg hover:underline">info@webnovacrew.com</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Visit Us</h3>
                      <p className="text-slate-600">
                        4th Floor, Cabin 403 B, E-195,<br />
                        Phase 8B, Sector 74,<br />
                        Mohali, India 160055
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <Input id="subject" placeholder="Project Inquiry" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Map placeholder */}
      <div className="h-96 bg-slate-200 w-full relative">
         <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold text-xl">
             Google Map Embed would go here
         </div>
      </div>

      <Footer />
    </div>
  );
}
