import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", {
        name,
        email,
        subject,
        message,
      });
      toast({
        title: "Message sent",
        description: "Thank you — we'll get back to you shortly.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";
      let desc = raw.replace(/^\d+:\s*/, "");
      const jsonMatch = raw.match(/^\d+:\s*(\{[\s\S]*\})\s*$/);
      if (jsonMatch) {
        try {
          const j = JSON.parse(jsonMatch[1]) as { message?: string };
          if (j.message) desc = j.message;
        } catch {
          /* keep desc */
        }
      }
      toast({
        title: "Could not send",
        description: desc || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Contact Us - Get a Free Quote" 
        description="Contact XcFlown for web development, app development, and SEO services. Get a free consultation and custom quote within 24 hours. Call +91 83607 23410 or email info@xcflown.com"
        keywords="contact web development company, hire web developers india, get website quote, app development consultation, web design inquiry, free website consultation"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://xcflown.com" },
        { name: "Contact", url: "https://xcflown.com/contact" }
      ]} />
      
      <Navbar />
      
      {/* Header */}
      <section className="bg-violet-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-orange-400 text-sm font-bold mb-6 border border-white/20">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Let's Build Your <span className="text-orange-400">Dream Project</span>
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with a stunning website or powerful mobile app? Get a free consultation and custom quote within 24 hours.
          </p>
          
          {/* Quick Contact Options */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918360723410" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5 text-orange-400" />
              <span className="font-semibold">+91 83607 23410</span>
            </a>
            <a href="mailto:info@xcflown.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5 text-orange-400" />
              <span className="font-semibold">info@xcflown.com</span>
            </a>
            <a href="https://wa.me/918360723410" target="_blank" className="flex items-center gap-2 bg-orange-500 text-violet-900 px-5 py-3 rounded-full hover:bg-orange-400 transition-colors font-bold">
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
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600 mb-1">Mon-Fri from 9am to 6pm IST</p>
                      <a href="tel:+918360723410" className="text-violet-600 font-bold text-lg hover:underline">+91 83607 23410</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600 mb-1">For general inquiries and support</p>
                      <a href="mailto:info@xcflown.com" className="text-violet-600 font-bold text-lg hover:underline">info@xcflown.com</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
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
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input id="name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="bg-slate-50 border-slate-200 focus-visible:ring-violet-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="bg-slate-50 border-slate-200 focus-visible:ring-violet-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <Input id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Project Inquiry" className="bg-slate-50 border-slate-200 focus-visible:ring-violet-500" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." className="min-h-[150px] bg-slate-50 border-slate-200 focus-visible:ring-violet-500" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-6 text-lg disabled:opacity-70">
                  <Send className="w-5 h-5 mr-2" /> {isSubmitting ? "Sending…" : "Send Message"}
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
              Why Work With XcFlown?
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
                <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-4">
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
            title="XcFlown Office Location"
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
              className="text-violet-600 font-semibold text-sm hover:underline flex items-center gap-1"
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
