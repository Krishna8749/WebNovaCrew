import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, ShoppingBag, Gem, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentAminabad() {
  const services = [
    { title: "Heritage Jewelry E-Commerce", desc: "Online stores for Aminabad's legendary jewelry and textile businesses. Features include gold/silver cataloging, fabric showcases, custom order management, and secure payment integration. We help Aminabad's heritage businesses sell online while preserving their traditional appeal.", icon: <Gem className="w-6 h-6" />, features: ["Gold/Silver Catalog", "Fabric Showcase", "Custom Orders", "Secure Payments", "Inventory Mgmt", "Mobile Responsive"] },
    { title: "Traditional Retail Websites", desc: "E-commerce platforms for Aminabad's traditional markets — chikan embroidery, zardozi work, ethnic wear, and handicrafts. We create websites that honor the area's commercial heritage while embracing modern shopping experiences. Starting at ₹30,000.", icon: <Store className="w-6 h-6" />, features: ["Heritage Design", "Product Catalogs", "WhatsApp Orders", "UPI Payments", "Mobile Responsive", "SEO Optimized"] },
    { title: "Wholesale Trading Platforms", desc: "B2B portals for Aminabad's wholesale merchants dealing in textiles, jewelry, and consumer goods. Features include bulk ordering, dealer management, price tiers, and inventory tracking. We help wholesalers digitize their operations.", icon: <ShoppingBag className="w-6 h-6" />, features: ["B2B Ordering", "Dealer Management", "Price Tiers", "Inventory Tracking", "Bulk Discounts", "Payment Gateway"] },
    { title: "Local Shop Websites", desc: "Affordable websites for Aminabad's local shops and small businesses. From garment stores to electronics shops, we create fast, mobile-friendly sites with WhatsApp integration and Google Maps. Starting at just ₹15,000.", icon: <Globe className="w-6 h-6" />, features: ["₹15K Starting", "WhatsApp Integration", "Google Maps", "Mobile Responsive", "Product Showcase", "SEO Optimized"] },
    { title: "Heritage Brand Digital Marketing", desc: "Digital marketing strategies that respect Aminabad's traditional business culture while reaching new customers. Social media marketing for ethnic products, local SEO, and WhatsApp business solutions. Starting at ₹10,000/month.", icon: <Target className="w-6 h-6" />, features: ["Social Media Mktg", "Local SEO", "WhatsApp Business", "Google Ads", "Content Marketing", "₹10K/Month Start"] },
    { title: "Restaurant & Food Ordering", desc: "Food ordering apps and websites for Aminabad's iconic eateries and street food vendors. Online ordering, menu management, delivery tracking, and integration with Swiggy/Zomato. We help food businesses get more online orders.", icon: <ShoppingCart className="w-6 h-6" />, features: ["Online Ordering", "Menu Management", "Delivery Tracking", "Payment Gateway", "Review System", "Loyalty Program"] },
  ];

  const caseStudies = [
    { title: "Heritage Jewelry E-Commerce", client: "Royal Jewelers, Aminabad", description: "Built an e-commerce platform for Aminabad's heritage jewelry brand with gold cataloging and custom order management. The platform processed ₹25L in online sales within the first quarter.", results: ["₹25L Sales/Q1", "500+ Orders", "15% Online Growth", "4.8★ Rating"], tech: ["Next.js", "Node.js", "Razorpay", "AWS", "MongoDB"] },
    { title: "Wholesale Trading Portal", client: "Aminabad Textile Traders", description: "Created a B2B wholesale platform with dealer management and bulk ordering for Aminabad textile merchants. Onboarded 200+ dealers and processed ₹2Cr in transactions within 6 months.", results: ["200+ Dealers", "₹2Cr Transactions", "300% Efficiency", "4.7★ Rating"], tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"] },
  ];

  const faqs = [
    { question: "Which is the best web development company in Aminabad?", answer: "XcFlown is the leading web development company in Aminabad, Lucknow. We specialize in heritage e-commerce for jewelry and textiles, wholesale platforms, and traditional retail solutions. Starting at ₹15,000." },
    { question: "Can you build an e-commerce site for my Aminabad jewelry business?", answer: "We build heritage jewelry e-commerce sites with gold/silver cataloging, custom orders, and secure payments. Starting at ₹40,000. Our jewelry platforms process ₹25L+ quarterly sales." },
    { question: "How much does a wholesale trading portal cost in Aminabad?", answer: "B2B wholesale platforms for Aminabad traders start at ₹80,000 with dealer management and bulk ordering. Premium solutions with inventory tracking cost ₹1,50,000-₹3,00,000." },
    { question: "Do you offer digital marketing for Aminabad businesses?", answer: "We provide digital marketing for Aminabad's traditional businesses including social media for ethnic products, local SEO, and WhatsApp marketing. Starting at ₹10,000/month." },
    { question: "Can you create a website for my Aminabad textile shop?", answer: "We create websites for Aminabad textile and chikan embroidery shops with product catalogs, WhatsApp orders, and UPI payments. Starting at ₹20,000 with heritage-themed design." },
    { question: "How quickly can you deliver a project in Aminabad?", answer: "Local shop websites in 1-2 weeks, e-commerce sites in 3-4 weeks, wholesale platforms in 6-8 weeks. We respect the traditional business culture while delivering modern solutions." },
  ];

  const nearbyAreas = [
    { name: "Chowk", slug: "web-development-chowk" },
    { name: "Hazratganj", slug: "web-development-hazratganj" },
    { name: "Lalbagh", slug: "web-development-lalbagh" },
    { name: "Charbagh", slug: "web-development-charbagh" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO title="Web Development Company in Aminabad, Lucknow | Heritage Markets | XcFlown" description="Top web development company in Aminabad, Lucknow. Heritage e-commerce, wholesale platforms, traditional retail websites. ₹15,000 onwards. Jewelry & textile specialist." keywords="web development company in Aminabad, app developer in Aminabad Lucknow, digital marketing agency Aminabad, jewelry e-commerce Aminabad, wholesale platform Aminabad, chikan website developer Lucknow" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://xcflown.com" }, { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" }, { name: "Aminabad", url: "https://xcflown.com/locations/web-development-aminabad" }]} />
      <ServiceSchema serviceName="Web Development in Aminabad" serviceDescription="Professional web and app development services in Aminabad, Lucknow. Heritage e-commerce, wholesale platforms, traditional retail websites, and digital marketing." serviceUrl="https://xcflown.com/locations/web-development-aminabad" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-yellow-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-yellow-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-amber-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-300">Aminabad, Lucknow • Heritage Market • Traditional Commerce</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-amber-100 bg-clip-text text-transparent">Web Development in Aminabad</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">Aminabad's <span className="text-yellow-400 font-semibold">heritage businesses</span> deserve modern digital presence. We build <span className="text-amber-400 font-semibold">jewelry e-commerce, wholesale platforms & traditional retail sites</span>.</p>
            <p className="text-lg text-slate-400 mb-8">Serving jewelry shops, textile traders, chikan businesses & traditional retailers in Aminabad.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/918360723410" target="_blank"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-yellow-400 mb-1">40+</div><div className="text-sm text-slate-400">Aminabad Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">₹15K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-yellow-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-yellow-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services in Aminabad</h2><p className="text-xl text-slate-400 max-w-3xl mx-auto">Modern solutions for traditional businesses</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-yellow-500/10 text-yellow-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Aminabad Success Stories</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="text-yellow-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-yellow-500/10 rounded-lg px-3 py-2 text-center"><span className="text-yellow-300 text-sm font-medium">{r}</span></div>))}</div>
                <div className="flex flex-wrap gap-2">{study.tech.map((t, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderBio />
      <TestimonialsSection />

      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Aminabad Web Development FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-900/50 border-t border-violet-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-yellow-500/50 hover:text-yellow-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-950/50 to-amber-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Modernize Your Aminabad Heritage Business</h2>
          <p className="text-xl text-slate-300 mb-8">E-commerce, wholesale platforms & digital marketing for traditional markets</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Get Free Quote</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
