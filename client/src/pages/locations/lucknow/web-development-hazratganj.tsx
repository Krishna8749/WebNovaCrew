import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, MessageSquare, Globe, ShoppingCart, Heart, GraduationCap, Target, BarChart3, Gem, Utensils, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function WebDevelopmentHazratganj() {
  const services = [
    { title: "Premium Website Development", desc: "Luxury-grade websites for Hazratganj's prestigious businesses — heritage jewelry showrooms, high-end fashion boutiques, and premium service providers. We create sophisticated designs that match the Ganj's legacy, with fast loading, mobile responsiveness, and SEO optimization to attract high-value customers searching for 'best in Hazratganj'.", icon: <Globe className="w-6 h-6" />, features: ["Premium UI/UX", "SEO Optimized", "2s Load Time", "Mobile Responsive", "CMS Integration", "Analytics Setup"] },
    { title: "E-Commerce for Luxury Brands", desc: "Premium e-commerce platforms for Hazratganj's jewelry, fashion, and luxury businesses. Features include 3D product showcase with zoom, AR try-on for jewelry and accessories, custom ordering for bespoke items, and international shipping integration. Designed for the discerning Hazratganj customer who expects a world-class online shopping experience.", icon: <ShoppingCart className="w-6 h-6" />, features: ["3D Product View", "AR Try-On", "International Shipping", "Custom Orders", "Razorpay & UPI", "Inventory Management"] },
    { title: "Restaurant & Food Ordering Apps", desc: "Food ordering and delivery apps for Hazratganj's iconic restaurants, cafes, and street food legends. From heritage kebab houses to modern bistros, we build apps with real-time order tracking, table reservation systems, loyalty programs, and integration with Swiggy and Zomato for maximum reach.", icon: <Utensils className="w-6 h-6" />, features: ["Order Tracking", "Table Reservation", "Loyalty Program", "Swiggy/Zomato Integration", "Payment Gateway", "Review System"] },
    { title: "Digital Marketing for Premium Brands", desc: "Sophisticated digital marketing for Hazratganj's premium businesses. Instagram marketing for fashion brands, Google Ads for jewelry showrooms, and local SEO to dominate 'best [service] in Hazratganj' searches. We understand the premium positioning that Hazratganj businesses require and create campaigns that attract high-value customers.", icon: <Target className="w-6 h-6" />, features: ["Instagram Marketing", "Premium SEO", "Google Ads", "Brand Building", "Influencer Outreach", "Review Management"] },
    { title: "Banking & Finance Solutions", desc: "Secure web and mobile applications for Hazratganj's banking and financial institutions. We build fintech apps with RBI-compliant security, UPI integration, loan management systems, and digital KYC. Our financial solutions are trusted by banks and NBFCs operating from Hazratganj's financial district.", icon: <Landmark className="w-6 h-6" />, features: ["RBI Compliant", "UPI Integration", "Digital KYC", "256-bit Encryption", "Loan Management", "Audit Logging"] },
    { title: "Heritage Brand Digital Transformation", desc: "Specialized digital transformation for Hazratganj's heritage brands — businesses that have operated for generations and now need to establish online presence while preserving their legacy. We create brand stories, heritage timelines, and digital experiences that honor tradition while embracing modern technology.", icon: <Gem className="w-6 h-6" />, features: ["Brand Storytelling", "Heritage Timeline", "Legacy Design", "Social Media Strategy", "Content Marketing", "Customer Testimonials"] },
  ];

  const industries = [
    { name: "Jewelry & Luxury", desc: "Premium e-commerce with 3D product showcase and AR try-on for Hazratganj's heritage jewelry brands.", icon: <Gem className="w-5 h-5" /> },
    { name: "Fashion & Textiles", desc: "Online stores for Hazratganj's premium fashion boutiques and chikan embroidery retailers.", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Food & Restaurants", desc: "Food ordering apps and websites for the Ganj's iconic restaurants and cafes.", icon: <Utensils className="w-5 h-5" /> },
    { name: "Banking & Finance", desc: "Secure fintech applications for Hazratganj's banking and financial services district.", icon: <Landmark className="w-5 h-5" /> },
    { name: "Healthcare & Clinics", desc: "Professional websites and appointment systems for Hazratganj's medical practices.", icon: <Heart className="w-5 h-5" /> },
    { name: "Professional Services", desc: "Authoritative websites for legal, consulting, and professional service firms.", icon: <Building2 className="w-5 h-5" /> },
  ];

  const caseStudies = [
    { title: "Luxury Jewelry E-Commerce", client: "Royal Jewellers, Hazratganj", description: "Built a premium e-commerce website with 3D product showcase and AR try-on for Hazratganj's heritage jewelry brand. The site achieved 300% increase in online sales, 2L+ monthly visitors, and enabled exports to 15 countries.", results: ["300% Sales Increase", "2L+ Visitors/Month", "15 Country Exports", "4.9★ Rating"], tech: ["Next.js", "Three.js", "Node.js", "AWS", "Stripe"] },
    { title: "Heritage Restaurant App", client: "Nawabi Kitchen, Hazratganj", description: "Developed a food ordering app with table reservation, loyalty program, and real-time order tracking for a legendary Hazratganj kebab house. The app increased direct orders by 60% and reduced dependence on food delivery platforms.", results: ["60% More Direct Orders", "4.8★ App Rating", "₹8L Saved/Year", "5K+ Loyalty Members"], tech: ["Flutter", "Node.js", "Firebase", "Razorpay", "AWS"] },
    { title: "Fashion Boutique Platform", client: "Elegance Fashion House, Ganj", description: "Created a premium fashion e-commerce platform with virtual try-on, custom tailoring orders, and Instagram shopping integration for a Hazratganj boutique. Monthly revenue reached ₹12L within 4 months of launch.", results: ["₹12L Monthly Revenue", "Virtual Try-On", "Instagram Shopping", "500+ Custom Orders"], tech: ["React", "Next.js", "AR.js", "MongoDB", "AWS"] },
  ];

  const whyChooseUs = [
    { title: "Premium Design Expertise", desc: "Hazratganj businesses demand premium aesthetics. Our design team creates sophisticated, brand-aligned websites that match the prestige of the Ganj. We use premium typography, elegant animations, and luxury-grade UI patterns that resonate with Hazratganj's discerning clientele.", icon: <Gem className="w-5 h-5" />, stats: "Premium Quality" },
    { title: "Heritage Brand Understanding", desc: "We understand that Hazratganj's heritage brands need to preserve their legacy while going digital. We create brand storytelling experiences with heritage timelines, legacy sections, and traditional design elements that honor generations of business history.", icon: <Landmark className="w-5 h-5" />, stats: "Heritage Expertise" },
    { title: "Local Market Knowledge", desc: "We know Hazratganj's business landscape intimately — from the premium showrooms on the main road to the specialty stores in inner lanes. This local knowledge helps us create targeted digital strategies that attract the right customers to your Hazratganj business.", icon: <MapPin className="w-5 h-5" />, stats: "60+ Local Clients" },
    { title: "SEO for Premium Searches", desc: "We specialize in ranking Hazratganj businesses for premium search queries like 'best jewelry shop in Hazratganj', 'luxury boutique Lucknow', and 'premium restaurant Hazratganj'. Our SEO strategies attract high-value customers who search for quality, not just price.", icon: <BarChart3 className="w-5 h-5" />, stats: "#1 on Google" },
    { title: "Fast Delivery", desc: "Premium websites in 1-2 weeks, e-commerce platforms in 3-5 weeks, and custom apps in 6-10 weeks. We understand that Hazratganj businesses move fast and need their digital presence ready for festivals, sales, and seasonal campaigns.", icon: <Rocket className="w-5 h-5" />, stats: "1-2 Week Websites" },
    { title: "Post-Launch Partnership", desc: "We provide ongoing support including seasonal updates, festival campaign pages, new product launches, and performance optimization. We're available on WhatsApp for quick communication and provide monthly analytics reports to track your digital growth.", icon: <Shield className="w-5 h-5" />, stats: "Ongoing Support" },
  ];

  const faqs = [
    { question: "Which is the best web development company in Hazratganj?", answer: "XcFlown is the #1 web development company in Hazratganj, Lucknow. We create premium websites for the Ganj's elite businesses including heritage jewelry brands, luxury fashion boutiques, iconic restaurants, and banking institutions. Our designs match the prestige that Hazratganj represents." },
    { question: "How much does a website cost for a Hazratganj business?", answer: "Website costs for Hazratganj businesses range from ₹25,000 for basic professional sites to ₹3,00,000 for premium e-commerce platforms with 3D product showcase and AR features. We offer custom designs that match the premium positioning of Hazratganj brands. Most businesses invest ₹50,000-₹1,50,000 for a world-class website." },
    { question: "Can you build a food delivery app for my Hazratganj restaurant?", answer: "Yes! We build food ordering and delivery apps for Hazratganj restaurants with real-time order tracking, table reservation, loyalty programs, and integration with Swiggy/Zomato. Starting at ₹80,000 with 4-6 week delivery. Our apps help reduce commission paid to food platforms by 40-60%." },
    { question: "Do you offer SEO services for Hazratganj businesses?", answer: "We provide specialized local SEO for Hazratganj businesses to rank #1 on Google for 'best [service] in Hazratganj' searches. Our SEO packages include Google Business Profile optimization, premium keyword targeting, review management, and content strategy. Starting at ₹10,000/month with results in 90 days." },
    { question: "Can you create a digital marketing strategy for my Hazratganj showroom?", answer: "We create result-driven digital marketing strategies for Hazratganj showrooms including Instagram marketing for fashion brands, Google Ads for jewelry stores, influencer collaborations, and local SEO to drive both foot traffic and online sales. Starting at ₹12,000/month." },
    { question: "How do you preserve heritage brand identity in digital design?", answer: "We work closely with heritage brand owners to understand their legacy, values, and visual identity. We incorporate heritage timelines, traditional design elements, brand stories, and generational narratives into the digital experience. The result is a website that honors tradition while embracing modern functionality." },
    { question: "What makes XcFlown different for Hazratganj businesses?", answer: "Three things: 1) We understand the premium positioning that Hazratganj demands — our designs reflect sophistication, not just functionality. 2) We have deep local knowledge of the Ganj's business ecosystem. 3) We offer heritage brand expertise that generic agencies lack. Our clients' websites look and feel as premium as their physical stores." },
    { question: "Can you build an e-commerce site for my jewelry business?", answer: "We specialize in jewelry e-commerce with 3D product showcase, AR try-on features, custom ordering for bespoke pieces, and international shipping integration. Starting at ₹80,000. Our jewelry websites have generated ₹25L+ monthly revenue for Hazratganj brands." },
  ];

  const nearbyAreas = [
    { name: "Lalbagh", slug: "web-development-lalbagh" },
    { name: "Aminabad", slug: "web-development-aminabad" },
    { name: "Charbagh", slug: "web-development-charbagh" },
    { name: "Chowk", slug: "web-development-chowk" },
  ];

  return (
    <div className="min-h-screen bg-violet-950 font-sans">
      <SEO 
        title="Best Web Development Company in Hazratganj, Lucknow | XcFlown"
        description="Premium web development company in Hazratganj, Lucknow. Luxury websites, e-commerce for jewelry & fashion brands, restaurant apps. ₹25,000 onwards. 60+ Hazratganj clients."
        keywords="web development company in Hazratganj, app developer in Hazratganj Lucknow, digital marketing agency Hazratganj, best IT company Hazratganj, e-commerce developer Hazratganj Lucknow, luxury website developer Hazratganj"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://xcflown.com" },
        { name: "Lucknow Areas", url: "https://xcflown.com/locations/app-development-lucknow" },
        { name: "Hazratganj", url: "https://xcflown.com/locations/web-development-hazratganj" }
      ]} />
      <ServiceSchema serviceName="Web Development in Hazratganj" serviceDescription="Premium web and app development services in Hazratganj, Lucknow. Luxury websites, e-commerce for jewelry and fashion, restaurant apps, and digital marketing." serviceUrl="https://xcflown.com/locations/web-development-hazratganj" />
      <FAQSchema faqs={faqs} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-amber-500/20 rounded-full blur-[60px] lg:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-orange-500/20 rounded-full blur-[50px] lg:blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">Hazratganj, Lucknow • Commercial Heart • Premium Business District</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent">
              Best Web Development Company in Hazratganj
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Lucknow's <span className="text-amber-400 font-semibold">iconic commercial district</span> deserves premium digital presence. We build <span className="text-orange-400 font-semibold">luxury websites & apps</span> for Hazratganj's elite businesses.
            </p>
            <p className="text-lg text-slate-400 mb-8">Serving premium showrooms, heritage brands, restaurants & banks in the Ganj.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">Get Premium Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <a href="https://wa.me/918360723410" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">60+</div><div className="text-sm text-slate-400">Ganj Clients</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">₹25K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20"><div className="text-3xl font-bold text-amber-400 mb-1">1-2</div><div className="text-sm text-slate-400">Weeks Website</div></div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-amber-500/20"><div className="text-3xl font-bold text-orange-400 mb-1">250+</div><div className="text-sm text-slate-400">Projects Delivered</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Context */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Hazratganj Businesses Need Premium Digital Presence</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Ganj's Legacy Meets Digital Age</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Hazratganj — or simply 'the Ganj' — has been Lucknow's commercial soul for over a century. Its showrooms, banks, and restaurants serve the city's most discerning customers. But today, these customers search Google before visiting. A Hazratganj business without a premium website is invisible to the next generation of customers.</p>
              <p className="text-slate-300 leading-relaxed">We help heritage brands transition to digital while preserving their legacy. From jewelry shops that have served nawabs to restaurants that define Lucknow's culinary identity, we create digital experiences that honor tradition and embrace innovation.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-900/50 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">High-Value Customers Search Online</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">Hazratganj's customers are affluent, quality-conscious, and digitally active. They search for 'best jewelry shop in Lucknow', 'premium restaurant near Hazratganj', and 'luxury boutique Ganj'. If your business doesn't appear in these searches, your competitors get those customers.</p>
              <p className="text-slate-300 leading-relaxed">Our SEO and digital marketing strategies are specifically designed for premium businesses. We don't just drive traffic — we attract high-value customers who appreciate quality and are willing to pay for it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Premium Digital Services in Hazratganj</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Sophisticated solutions for the Ganj's premium business community</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-violet-800/50 border border-violet-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">{service.features.map((f, i) => (<span key={i} className="text-xs bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full">{f}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries We Serve in Hazratganj</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hazratganj Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="text-amber-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">{study.results.map((r, i) => (<div key={i} className="bg-amber-500/10 rounded-lg px-3 py-2 text-center"><span className="text-amber-300 text-sm font-medium">{r}</span></div>))}</div>
                <div className="flex flex-wrap gap-2">{study.tech.map((t, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Hazratganj Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-700 rounded-xl p-8 hover:border-amber-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">{item.icon}</div>
                  <div className="text-sm font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">{item.stats}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderBio />
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-violet-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hazratganj Web Development FAQs</h2></div>
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

      {/* Nearby Areas */}
      <section className="py-16 bg-violet-900/50 border-t border-violet-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area, index) => (<Link key={index} href={`/locations/${area.slug}`}><a className="px-5 py-2.5 bg-violet-800/50 border border-violet-700 rounded-full text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all"><MapPin className="w-4 h-4 inline mr-2" />{area.name}</a></Link>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-950/50 to-orange-950/50 border-t border-violet-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Elevate Your Hazratganj Business Online?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 60+ Hazratganj brands who trusted us with their digital transformation</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Ganj Meeting</Link></Button>
            <a href="tel:+918360723410"><Button size="lg" variant="outline" className="border-violet-700/50 hover:bg-violet-800 text-white"><Phone className="w-5 h-5 mr-2" />+91 83607 23410</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
