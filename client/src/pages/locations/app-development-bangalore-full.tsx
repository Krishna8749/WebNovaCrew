import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2, 
  MessageSquare, Cpu, Globe, Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentBangaloreFull() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Bangalore's Android-first market", icon: <Smartphone className="w-6 h-6" /> },
    { title: "iOS App Development", desc: "Premium Swift apps for Bangalore's premium users", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Flutter App Development", desc: "Cross-platform apps for Bangalore startups", icon: <Code2 className="w-6 h-6" /> },
    { title: "React Native Development", desc: "Fast, scalable apps for tech companies", icon: <Globe className="w-6 h-6" /> },
    { title: "AI & ML Apps", desc: "Intelligent apps with GPT, ML models", icon: <Cpu className="w-6 h-6" /> },
    { title: "Startup MVPs", desc: "Rapid prototypes for Bangalore startups", icon: <Rocket className="w-6 h-6" /> },
    { title: "Enterprise Apps", desc: "Scalable solutions for corporates", icon: <Building2 className="w-6 h-6" /> },
    { title: "SaaS Products", desc: "Cloud-native SaaS applications", icon: <Database className="w-6 h-6" /> },
  ];

  const industries = [
    "IT & Software Companies",
    "Startups & SaaS",
    "E-commerce & Retail",
    "Fintech & Banking",
    "Healthcare & Biotech",
    "Education & EdTech",
    "Real Estate & PropTech",
    "Logistics & Supply Chain"
  ];

  const techHubs = [
    "Electronic City",
    "Whitefield",
    "Koramangala",
    "Indiranagar",
    "HSR Layout",
    "Marathahalli",
    "Bellandur",
    "Sarjapur Road",
    "Hebbal",
    "Manyata Tech Park",
    "Outer Ring Road",
    "JP Nagar"
  ];

  const whyChooseUs = [
    { title: "Bangalore Tech Expertise", desc: "Deep understanding of Bangalore's startup ecosystem and tech culture", icon: <Award className="w-5 h-5" /> },
    { title: "Startup-Friendly Pricing", desc: "Competitive rates perfect for bootstrapped startups", icon: <Star className="w-5 h-5" /> },
    { title: "Agile Development", desc: "Sprint-based delivery matching Bangalore's fast pace", icon: <Rocket className="w-5 h-5" /> },
    { title: "Modern Tech Stack", desc: "Flutter, React Native, Node.js, AWS - what Bangalore uses", icon: <Code2 className="w-5 h-5" /> },
    { title: "Investor-Ready Apps", desc: "Apps designed to impress VCs and angel investors", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Scale-Ready Architecture", desc: "Built to handle millions of users from day one", icon: <Database className="w-5 h-5" /> },
  ];

  const process = [
    { step: "1", title: "Discovery Call", desc: "Understand your startup idea, market, and technical requirements" },
    { step: "2", title: "Product Strategy", desc: "Define MVP scope, user stories, and success metrics" },
    { step: "3", title: "UI/UX Design", desc: "Create modern, intuitive designs that Bangalore users love" },
    { step: "4", title: "Agile Development", desc: "2-week sprints with regular demos and feedback" },
    { step: "5", title: "Testing & QA", desc: "Comprehensive testing for performance and security" },
    { step: "6", title: "Launch & Scale", desc: "Deploy to stores and prepare for growth" },
  ];

  const pricing = [
    { tier: "Startup MVP", price: "₹50,000 - ₹1,50,000", features: ["Core features only", "Single platform", "Basic UI", "3-4 weeks delivery"] },
    { tier: "Growth App", price: "₹1,50,000 - ₹3,50,000", features: ["Full features", "Android + iOS", "Premium UI/UX", "6-8 weeks delivery"] },
    { tier: "Enterprise App", price: "₹3,50,000 - ₹8,00,000", features: ["Complex features", "AI integration", "Custom backend", "10-14 weeks delivery"] },
  ];

  const faqs = [
    {
      question: "Why should Bangalore startups choose Web Nova Crew?",
      answer: "We understand Bangalore's startup culture - fast iterations, lean budgets, and investor expectations. We've worked with 50+ Bangalore startups, helping them build MVPs that secured funding. Our pricing is 30-40% lower than typical Bangalore agencies while maintaining Silicon Valley quality standards."
    },
    {
      question: "How much does app development cost in Bangalore?",
      answer: "App development in Bangalore typically costs ₹50,000 to ₹8,00,000. Startup MVPs start at ₹50,000-₹1,50,000, growth-stage apps cost ₹1,50,000-₹3,50,000, and enterprise apps with AI features cost ₹3,50,000-₹8,00,000. We offer competitive pricing compared to Koramangala and Whitefield agencies."
    },
    {
      question: "Do you work with Bangalore VCs and accelerators?",
      answer: "Yes! We've built apps for startups in Y Combinator, Sequoia Surge, Accel, and local accelerators like NASSCOM 10K Startups. We understand what investors look for in product demos and can help you build investor-ready MVPs."
    },
    {
      question: "Can you meet in person in Bangalore?",
      answer: "Absolutely! While our development center is in Lucknow (which helps us offer competitive pricing), we regularly visit Bangalore for client meetings. We can meet at Koramangala, Indiranagar, Whitefield, or your office location."
    },
    {
      question: "How fast can you build an MVP for my Bangalore startup?",
      answer: "We can build a functional MVP in 3-6 weeks depending on complexity. For pitch-ready demos, we can deliver in 2-3 weeks. Our agile process with 2-week sprints ensures you see progress quickly and can iterate based on feedback."
    },
    {
      question: "Do you provide technical co-founder services?",
      answer: "Yes! For non-technical founders, we offer fractional CTO services including technical strategy, architecture decisions, team building guidance, and investor pitch support. Many Bangalore startups use us as their technical partner."
    },
  ];

  const caseStudies = [
    { name: "FinTech Startup", result: "Raised ₹2Cr seed funding after MVP launch", industry: "Fintech" },
    { name: "EdTech Platform", result: "50,000+ students in 6 months", industry: "Education" },
    { name: "HealthTech App", result: "Featured in Google Play Store", industry: "Healthcare" },
    { name: "E-commerce Marketplace", result: "₹10L+ GMV in first quarter", industry: "E-commerce" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Company in Bangalore | Startup App Developers | Web Nova Crew"
        description="Top app development company in Bangalore for startups & enterprises. We build Android, iOS, Flutter apps in Koramangala, Whitefield, Electronic City. 50+ startups served. ₹50,000 onwards. Investor-ready MVPs."
        keywords="app development company Bangalore, mobile app developers Bangalore, startup app development Bangalore, Koramangala app developers, Whitefield app development, Flutter developers Bangalore, React Native Bangalore, MVP development Bangalore"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: "Bangalore", url: "https://webnovacrew.com/locations/app-development-bangalore" }
      ]} />
      <ServiceSchema 
        serviceName="App Development in Bangalore"
        serviceDescription="Professional mobile app development for Bangalore startups and enterprises. Android, iOS, Flutter, React Native apps with AI integration. Investor-ready MVPs."
        serviceUrl="https://webnovacrew.com/locations/app-development-bangalore"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Bangalore, Karnataka • Silicon Valley of India • 12M+ Population</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              App Development Company in Bangalore
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              India's <span className="text-purple-400 font-semibold">Silicon Valley</span> deserves world-class apps. We build <span className="text-pink-400 font-semibold">investor-ready MVPs</span> and <span className="text-purple-400 font-semibold">scalable products</span> for Bangalore's ambitious startups and enterprises.
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Serving startups in Koramangala, Whitefield, Electronic City, Indiranagar, HSR Layout & across Bangalore.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-sm text-slate-400">Bangalore Startups</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">₹50K</div>
                <div className="text-sm text-slate-400">MVP Starting</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-1">3-6</div>
                <div className="text-sm text-slate-400">Weeks MVP</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-1">₹10Cr+</div>
                <div className="text-sm text-slate-400">Funding Raised</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bangalore Success Stories */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Bangalore Startup Success Stories</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-4 text-center"
              >
                <div className="text-xs text-purple-400 mb-1">{study.industry}</div>
                <div className="text-white font-semibold mb-2">{study.name}</div>
                <div className="text-sm text-green-400">{study.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              App Development Services in Bangalore
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-stack mobile development for Bangalore's tech ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Industries We Serve in Bangalore
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Domain expertise across Bangalore's key sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-white font-medium">{industry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Hubs */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Serving All Bangalore Tech Hubs
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From Koramangala startups to Electronic City enterprises
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {techHubs.map((hub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-purple-500/50 transition-all"
              >
                <MapPin className="w-4 h-4 inline mr-2 text-purple-400" />
                {hub}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Bangalore Startups Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built for Bangalore's fast-paced startup culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bangalore App Development Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Startup-friendly pricing, enterprise-grade quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.tier}</h3>
                <div className="text-2xl font-bold text-purple-400 mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Agile Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From idea to App Store in weeks, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bangalore App Development FAQs
            </h2>
            <p className="text-xl text-slate-400">
              Common questions from Bangalore startups
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-950/50 to-pink-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Bangalore Startup App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 50+ Bangalore startups who trusted us with their product development
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Bangalore Meeting
              </Link>
            </Button>
            <a href="https://wa.me/919872364476" target="_blank">
              <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp: +91 98723 64476
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
