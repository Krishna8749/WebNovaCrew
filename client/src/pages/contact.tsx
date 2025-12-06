import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection, homeFAQs } from "@/components/sections/FAQ";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Globe, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Contact() {
  const services = [
    "Custom Web Development",
    "Mobile App Development",
    "E-Commerce Solutions",
    "SEO & Digital Marketing",
    "UI/UX Design",
    "Website Redesign",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Contact Us - Get a Free Quote" 
        description="Contact Web Nova Crew for web development, app development, and SEO services. Get a free consultation and custom quote within 24 hours. Call +91 98723 64476 or email info@webnovacrew.com"
        keywords="contact web development company, hire web developers india, get website quote, app development consultation, web design inquiry, free website consultation"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Contact", url: "https://webnovacrew.com/contact" }
      ]} />
      
      <Navbar />
      
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-lime-400 text-sm font-bold mb-6 border border-white/20">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Let's Build Your <span className="text-lime-400">Dream Project</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with a stunning website or powerful mobile app? Get a free consultation and custom quote within 24 hours.
          </p>
          
          {/* Quick Contact Options */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919872364476" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5 text-lime-400" />
              <span className="font-semibold">+91 98723 64476</span>
            </a>
            <a href="mailto:info@webnovacrew.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5 text-lime-400" />
              <span className="font-semibold">info@webnovacrew.com</span>
            </a>
            <a href="https://wa.me/919872364476" target="_blank" className="flex items-center gap-2 bg-lime-500 text-blue-900 px-5 py-3 rounded-full hover:bg-lime-400 transition-colors font-bold">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
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
                      <a href="tel:+919872364476" className="text-blue-600 font-bold text-lg hover:underline">+91 98723 64476</a>
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
                        2nd Floor, Shree Plaza Complex,<br />
                        Vikas Nagar, Ring Road,<br />
                        Lucknow 226022, UP, India
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
      
      {/* Why Contact Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">
              Why Work With Web Nova Crew?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              When you choose us, you get more than just a development team. You get a dedicated partner committed to your success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "24-Hour Response", desc: "We respond to all inquiries within 24 hours, guaranteed." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Free Consultation", desc: "Get expert advice on your project at no cost or obligation." },
              { icon: <Globe className="w-6 h-6" />, title: "Global Delivery", desc: "We serve clients across India, USA, UK, Australia, and more." },
              { icon: <Calendar className="w-6 h-6" />, title: "Flexible Engagement", desc: "Choose from fixed-price, hourly, or dedicated team models." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="h-96 bg-slate-100 w-full relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.1310!3d27.4055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI0JzE5LjgiTiA4MMKwMDcnNTEuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Web Nova Crew Office Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          
          {/* Address Card Overlay */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-6 max-w-sm">
            <h3 className="font-bold text-slate-900 mb-2">Our Office</h3>
            <p className="text-slate-600 text-sm mb-3">
              2nd Floor, Shree Plaza Complex,<br />
              Vikas Nagar, Ring Road,<br />
              Lucknow 226022, UP, India
            </p>
            <a 
              href="https://maps.google.com/?q=26.8467,80.9462" 
              target="_blank" 
              className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Have questions about working with us? Find answers to common inquiries below."
        faqs={homeFAQs.slice(0, 4)}
      />

      <Footer />
    </div>
  );
}
