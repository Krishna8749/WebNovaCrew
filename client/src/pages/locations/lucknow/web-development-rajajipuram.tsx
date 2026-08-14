import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, ShoppingBag, Utensils, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentRajajipuram() {
  const services = [
    { title: "Affordable Shop Websites", desc: "Budget-friendly websites for Rajajipuram's small businesses. Starting at just ₹12,000 with free hosting for the first year. We create fast, mobile-friendly sites for garment shops, electronics stores, grocery shops, and service providers with WhatsApp integration and Google Maps directions.", icon: <ShoppingBag className="w-6 h-6" />, features: ["₹12K Starting", "Free Hosting 1yr", "WhatsApp Integration", "Google Maps", "Mobile Responsive", "SEO Optimized"] },
    { title: "Grocery Delivery Apps", desc: "Online ordering apps for Rajajipuram's grocery stores and kirana shops. Real-time inventory management, delivery tracking, subscription model for regular customers, and payment integration. We help local grocers compete with BigBasket and Blinkit.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Inventory Management", "Delivery Tracking", "Subscription Model", "Payment Gateway", "WhatsApp Orders", "Customer App"] },
    { title: "Food Ordering Platforms", desc: "Food delivery apps and websites for Rajajipuram's restaurants, dhabas, and cloud kitchens. Menu management, order tracking, delivery partner integration, and loyalty programs. We help local food businesses get online orders without high Swiggy/Zomato commissions.", icon: <Utensils className="w-6 h-6" />, features: ["Menu Management", "Order Tracking", "Direct Orders", "Loyalty Program", "Payment Integration", "Low Commission"] },
    { title: "Delivery & Logistics Solutions", desc: "Fleet management and delivery apps for Rajajipuram's courier services, logistics companies, and delivery businesses. Route optimization, real-time tracking, driver management, and customer notifications. Perfect for the area's growing logistics sector.", icon: <Truck className="w-6 h-6" />, features: ["Route Optimization", "Real-time Tracking", "Driver Management", "Customer Notifications", "Payment Integration", "Analytics Dashboard"] },
    { title: "Education & Coaching Solutions", desc: "Learning apps for Rajajipuram's coaching centers and tuition teachers. Online test series, video courses, student progress tracking, and fee management. We help educators reach students across Rajajipuram's dense residential colonies.", icon: <GraduationCap className="w-6 h-6" />, features: ["Test Series", "Video Courses", "Progress Tracking", "Fee Management", "Parent Dashboard", "Mobile App"] },
    { title: "Budget Digital Marketing", desc: "Affordable digital marketing packages for Rajajipuram businesses. WhatsApp marketing, local SEO, social media management, and Google Business Profile optimization. Starting at just ₹5,000/month to help small businesses compete online.", icon: <Target className="w-6 h-6" />, features: ["WhatsApp Marketing", "Local SEO", "Social Media", "GMB Optimization", "Review Management", "₹5K/Month Start"] },
  ];

  const caseStudies = [
    { title: "Grocery Delivery Platform", client: "FreshMart Grocery, Rajajipuram", description: "Built a grocery delivery app with real-time inventory, route optimization, and subscription model for a Rajajipuram grocery store. Processing 1,500+ daily orders and generating ₹5L monthly revenue within 4 months.", results: ["1,500+ Daily Orders", "₹5L Monthly Revenue", "500+ Subscribers", "4.7★ Rating"], tech: ["Flutter", "Node.js", "Firebase", "Google Maps", "Razorpay"] },
    { title: "Coaching Center App", client: "Success Academy, Rajajipuram", description: "Developed an education app with test series, video courses, and student tracking for a coaching center in Rajajipuram. Enrolled 3,000+ students with 92% retention rate and generated ₹8L annual revenue.", results: ["3K+ Students", "92% Retention", "4.8★ Rating", "₹8L Revenue"], tech: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe"] },
  ];

  const faqs = [
    { question: "Which is the best affordable web development company in Rajajipuram?", answer: "Web Nova Crew offers the most affordable web development in Rajajipuram, Lucknow. Basic business websites start at ₹12,000 with free hosting for the first year and WhatsApp integration included." },
    { question: "Can you build a grocery delivery app for my Rajajipuram store?", answer: "We build grocery delivery apps with inventory management, delivery tracking, and payment integration. Starting at ₹60,000 with 30-day delivery. Our grocery apps process 1,500+ daily orders for Rajajipuram stores." },
    { question: "How much does digital marketing cost in Rajajipuram?", answer: "Digital marketing in Rajajipuram starts at ₹5,000/month for social media management and local SEO. We also offer WhatsApp marketing starting at ₹3,000/month. Most clients see 2x more enquiries within 60 days." },
    { question: "Do you create websites for small shops in Rajajipuram?", answer: "We create affordable websites for Rajajipuram shops including garment stores, electronics shops, grocery stores, and service providers. Starting at ₹12,000 with Google My Business optimization included." },
    { question: "Can you help my Rajajipuram business rank on Google Maps?", answer: "We optimize Google Business Profiles for Rajajipuram businesses to appear in the top 3 map results for local searches. Starting at ₹3,000 one-time setup and ₹2,000/month ongoing management." },
    { question: "How quickly can you deliver a website in Rajajipuram?", answer: "Basic business websites in 5-7 days, e-commerce sites in 2-3 weeks, and delivery apps in 4-6 weeks. Express delivery available for urgent requirements." },
  ];

  const nearbyAreas = [
    { name: "Alambagh", slug: "web-development-alambagh" },
    { name: "Jankipuram", slug: "web-development-jankipuram" },
    { name: "Aliganj", slug: "web-development-aliganj" },
    { name: "Charbagh", slug: "web-development-charbagh" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="Affordable Web Development in Rajajipuram, Lucknow | Web Nova Crew" description="Budget-friendly web development company in Rajajipuram, Lucknow. Websites from ₹12,000. Grocery apps, shop websites, delivery solutions. Free hosting 1st year. 40+ Rajajipuram clients." keywords="web development company in Rajajipuram, app developer in Rajajipuram Lucknow, digital marketing agency Rajajipuram, affordable website Rajajipuram, grocery app developer Rajajipuram" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Lucknow Areas", url: "https://webnovacrew.com/locations/app-development-lucknow" }, { name: "Rajajipuram", url: "https://webnovacrew.com/locations/web-development-rajajipuram" }]} />
      <ServiceSchema serviceName="Web Development in Rajajipuram" serviceDescription="Affordable web and app development services in Rajajipuram, Lucknow. Grocery delivery apps, shop websites, food ordering platforms, and budget-friendly digital marketing." serviceUrl="https://webnovacrew.com/locations/web-development-rajajipuram" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-fuchsia-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-fuchsia-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-pink-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm text-fuchsia-300">Rajajipuram, Lucknow • Dense Residential • Local Market</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-fuchsia-100 to-pink-100 bg-clip-text text-transparent">Affordable Web Development in Rajajipuram</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Rajajipuram's <span className="text-fuchsia-400 font-semibold">small businesses & shops</span> need affordable digital solutions. Websites from <span className="text-pink-400 font-semibold">₹12,000 with free hosting</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving grocery stores, restaurants, retail shops & service providers in Rajajipuram.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-fuchsia-400 mb-1">40+</div><div className="text-sm text-slate-400">Local Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">₹12K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-fuchsia-400 mb-1">5-7</div><div className="text-sm text-slate-400">Days Delivery</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20"><div className="text-3xl font-bold text-pink-400 mb-1">Free</div><div className="text-sm text-slate-400">Hosting 1st Year</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Rajajipuram</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Budget-friendly digital solutions for local businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-fuchsia-500/50 transition-all">
                <div className="w-14 h-14 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-fuchsia-500/10 text-fuchsia-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Rajajipuram Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-fuchsia-500/50 transition-all">
                <div className="text-fuchsia-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-fuchsia-500/10 rounded-lg px-3 py-2 text-center"><span className="text-fuchsia-300 text-sm font-medium">{r}</span></div>))}</div>
                <div className="flex flex-wrap gap-2">{study.tech.map((t, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderBio />
      <TestimonialsSection />

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Rajajipuram Web Development FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-fuchsia-500/50 hover:text-fuchsia-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-fuchsia-950/50 to-pink-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Affordable Digital Solutions for Rajajipuram</h2>
          <p className="text-xl text-slate-300 mb-8">Websites from ₹12,000 • Free hosting • WhatsApp integration</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 98723 64476</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
