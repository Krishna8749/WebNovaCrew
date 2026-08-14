import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  Phone, Award, Rocket, Star, Shield, Code2, MessageSquare, Cpu, 
  Globe, Database, Flame, GraduationCap, Clock, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AppDevelopmentVaranasi() {
  const services = [
    { title: "Android App Development", desc: "Native Kotlin apps for Varanasi's spiritual tourism, silk, and education sectors.", icon: <Smartphone className="w-6 h-6" />, features: ["Kotlin", "Material Design", "Offline Mode", "Hindi Support"] },
    { title: "iOS App Development", desc: "Premium Swift apps for international pilgrims and tourists visiting Varanasi.", icon: <Smartphone className="w-6 h-6" />, features: ["Swift", "iOS 17", "Apple Pay", "Multi-language"] },
    { title: "Flutter App Development", desc: "Cross-platform apps for Varanasi startups and traditional businesses going digital.", icon: <Code2 className="w-6 h-6" />, features: ["Single Codebase", "Native Feel", "Hot Reload", "Beautiful UI"] },
    { title: "React Native Development", desc: "JavaScript-based apps with quick development for Varanasi's growing tech scene.", icon: <Globe className="w-6 h-6" />, features: ["JavaScript", "Native Modules", "Fast Dev", "Code Reuse"] },
    { title: "Spiritual Tourism Apps", desc: "Ghat darshan apps, puja booking, temple guides, and spiritual journey planners.", icon: <Flame className="w-6 h-6" />, features: ["Ghat Guide", "Puja Booking", "Live Aarti", "Pandit Connect"] },
    { title: "Banarasi Silk E-commerce", desc: "E-commerce apps for Varanasi's famous Banarasi silk saree industry.", icon: <Database className="w-6 h-6" />, features: ["Product Catalog", "B2B Portal", "Order Management", "Shipping"] },
    { title: "Education Apps", desc: "Apps for BHU, coaching centers, and Varanasi's rich educational ecosystem.", icon: <GraduationCap className="w-6 h-6" />, features: ["LMS", "Live Classes", "Test Prep", "Student Portal"] },
    { title: "Healthcare Apps", desc: "Hospital management, Ayurveda clinic apps, and wellness tourism solutions.", icon: <Heart className="w-6 h-6" />, features: ["Appointment", "Telemedicine", "Ayurveda", "Wellness"] },
  ];

  const industries = [
    { name: "Spiritual Tourism", desc: "Ghat tours, puja booking, temple guides" },
    { name: "Banarasi Silk & Textiles", desc: "Saree e-commerce, B2B trade" },
    { name: "Education & BHU", desc: "University apps, coaching centers" },
    { name: "Ayurveda & Wellness", desc: "Ayurvedic clinics, yoga centers" },
    { name: "Handicrafts", desc: "Wooden toys, brassware, carpets" },
    { name: "Music & Arts", desc: "Classical music schools, art galleries" },
    { name: "Hotels & Homestays", desc: "Ghat-view hotels, heritage stays" },
    { name: "Food & Sweets", desc: "Kachori, lassi, sweet shops" }
  ];

  const areas = [
    { name: "Dashashwamedh Ghat", type: "Tourism Hub" },
    { name: "Assi Ghat", type: "Cultural" },
    { name: "Godowlia", type: "Commercial" },
    { name: "Lanka", type: "BHU Area" },
    { name: "Sigra", type: "Business" },
    { name: "Cantt", type: "Commercial" },
    { name: "Bhelupur", type: "Residential" },
    { name: "Sarnath", type: "Buddhist Site" },
    { name: "Ramnagar", type: "Heritage" },
    { name: "Pandeypur", type: "Commercial" },
    { name: "Mahmoorganj", type: "Market" },
    { name: "Nadesar", type: "Residential" }
  ];

  const whyChooseUs = [
    { title: "Spiritual Tourism Experts", desc: "Specialized in ghat darshan apps, puja booking, and pilgrimage journey apps for Varanasi's millions of visitors.", icon: <Flame className="w-5 h-5" />, stats: "15+ Tourism Apps" },
    { title: "Banarasi Silk E-commerce", desc: "Experience building e-commerce for Varanasi's famous silk saree industry with B2B and B2C solutions.", icon: <Database className="w-5 h-5" />, stats: "10+ E-commerce Apps" },
    { title: "Most Affordable in UP", desc: "Based in Lucknow, just 300 km away. Save 40-50% compared to Delhi agencies.", icon: <Star className="w-5 h-5" />, stats: "40-50% Savings" },
    { title: "Multi-language Support", desc: "Apps in Hindi, English, Sanskrit, and other languages for diverse visitors.", icon: <Globe className="w-5 h-5" />, stats: "10+ Languages" },
    { title: "BHU & Education Apps", desc: "Experience with university apps, coaching centers, and educational platforms.", icon: <GraduationCap className="w-5 h-5" />, stats: "Education Ready" },
    { title: "On-Site Support", desc: "Regular visits to Varanasi for client meetings. Just 4 hours from Lucknow.", icon: <Users className="w-5 h-5" />, stats: "Monthly Visits" },
  ];

  const pricing = [
    { tier: "Starter", price: "₹25,000 - ₹75,000", ideal: "Small businesses", features: ["Single platform", "Up to 10 screens", "Basic UI/UX", "Hindi + English", "3-4 weeks", "30 days support"], popular: false },
    { tier: "Business", price: "₹75,000 - ₹2,00,000", ideal: "Tourism & silk businesses", features: ["Android + iOS", "Up to 25 screens", "Premium UI/UX", "Multi-language", "Payment gateway", "6-8 weeks", "90 days support"], popular: true },
    { tier: "Enterprise", price: "₹2,00,000 - ₹5,00,000", ideal: "Large enterprises", features: ["Android + iOS + Web", "Unlimited screens", "Live streaming", "AI chatbot", "Custom CRM", "10-16 weeks", "1 year support"], popular: false },
  ];

  // Extended FAQs (15 questions)
  const faqs = [
    { question: "How much does app development cost in Varanasi?", answer: "App development in Varanasi costs ₹25,000 to ₹5,00,000+ depending on complexity. Simple apps start at ₹25,000-₹75,000 and take 3-4 weeks. Tourism and silk business apps cost ₹75,000-₹2,00,000 with full features. Enterprise apps with live streaming and AI cost ₹2,00,000-₹5,00,000+. We're 40-50% cheaper than Delhi agencies." },
    { question: "Do you build spiritual tourism apps for Varanasi?", answer: "Yes! We specialize in spiritual tourism apps including ghat darshan guides with GPS navigation, puja booking with pandit profiles, live Ganga aarti streaming, temple guides with audio tours, pilgrimage journey planners, and virtual darshan features. We've built 15+ such apps." },
    { question: "Can you build apps for Banarasi silk businesses?", answer: "Absolutely! We've built e-commerce and B2B apps for Varanasi's famous Banarasi silk industry. Features include product catalogs with high-resolution zoom, weaver profiles and stories, order management, international shipping integration, and B2B wholesale portals." },
    { question: "Do you support Sanskrit and other languages?", answer: "Yes! Our apps support Hindi, English, Sanskrit, and 10+ other languages including Tamil, Telugu, Bengali, Gujarati, and international languages. This is essential for spiritual apps reaching pilgrims from across India and the world." },
    { question: "Can you add live Ganga aarti streaming?", answer: "Yes! We can integrate live streaming of Ganga aarti from Dashashwamedh Ghat using RTMP/HLS protocols. We also support recorded videos, audio guides, virtual darshan features, and scheduled notifications for aarti timings." },
    { question: "Do you provide on-site meetings in Varanasi?", answer: "Yes! We regularly visit Varanasi for client meetings. We can meet at Godowlia, Lanka, Sigra, Cantt, or your office. Varanasi is just 4 hours from our Lucknow headquarters, making coordination easy." },
    { question: "What technologies do you use for Varanasi app development?", answer: "We use modern technologies. For mobile: Kotlin for Android, Swift for iOS, Flutter and React Native for cross-platform. For backend: Node.js, Python with databases like PostgreSQL, MongoDB. For streaming: RTMP, HLS, WebRTC for live video." },
    { question: "Can you build apps for BHU and educational institutions?", answer: "Yes! We have experience building university apps, LMS platforms, student portals, and coaching center apps. Features include live classes, test preparation, attendance tracking, and result management." },
    { question: "Do you build apps with offline functionality?", answer: "Yes! Given variable connectivity in some areas, we build apps with robust offline functionality. Our apps can work offline for ghat guides, audio tours, and product catalogs, syncing when connectivity is restored." },
    { question: "Can you integrate payment gateways for international pilgrims?", answer: "Yes! We integrate multiple payment gateways including Razorpay, PayU, Stripe, and PayPal for international payments. We also support UPI, credit cards, and net banking for Indian users." },
    { question: "How do you handle app maintenance after launch?", answer: "We provide comprehensive post-launch support. Our packages include: bug fixes and performance optimization, OS compatibility updates, security patches, content updates for festivals and events, and analytics review." },
    { question: "Can you build apps for Ayurveda and wellness tourism?", answer: "Yes! Varanasi is known for Ayurveda. We build apps for Ayurvedic clinics, yoga centers, wellness retreats, and health tourism with appointment booking, treatment catalogs, and practitioner profiles." },
    { question: "Do you sign NDAs for Varanasi projects?", answer: "Absolutely. We sign comprehensive NDAs before any project discussion. All our team members are bound by confidentiality agreements. We use secure development practices including private repositories." },
    { question: "Can you build apps for handicraft businesses?", answer: "Yes! Varanasi is famous for handicrafts. We build e-commerce apps for wooden toys, brassware, carpets, and other handicrafts with artisan profiles, product catalogs, and shipping integration." },
    { question: "What makes you different from other Varanasi app development companies?", answer: "Three key differentiators: 1) Spiritual Tourism Expertise: 15+ apps for ghat darshan, puja booking, and pilgrimage. 2) Multi-language: Support for 10+ languages including Sanskrit. 3) Value Pricing: 40-50% lower than Delhi with same quality." },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Ghat Darshan & Puja Booking App",
      client: "Varanasi Tourism Company",
      description: "Built a comprehensive spiritual tourism app with ghat guides, puja booking, pandit connect, and live Ganga aarti streaming. The app serves 100,000+ pilgrims with multi-language support.",
      results: ["100K+ Users", "Live Aarti Streaming", "10+ Languages", "Pandit Connect"],
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS", "HLS Streaming"]
    },
    {
      title: "Banarasi Silk E-commerce Platform",
      client: "Varanasi Silk Traders Association",
      description: "Created a B2B and B2C e-commerce platform for Banarasi silk sarees with high-resolution product images, weaver profiles, and international shipping. The platform serves 500+ weavers and 50,000+ customers.",
      results: ["500+ Weavers", "50K+ Customers", "International Shipping", "B2B Portal"],
      tech: ["React Native", "Python", "MongoDB", "AWS", "Razorpay"]
    },
    {
      title: "BHU Student Portal App",
      client: "Educational Institution",
      description: "Developed a comprehensive student portal with attendance tracking, result management, library access, and event notifications. The app serves 25,000+ students with Hindi and English support.",
      results: ["25K+ Students", "Attendance Tracking", "Result Management", "Library Access"],
      tech: ["Kotlin", "Swift", "Java Spring", "PostgreSQL", "Firebase"]
    }
  ];

  // Development Process
  const developmentProcess = [
    { step: "1", title: "Discovery & Planning", duration: "1-2 Weeks", desc: "In-depth discussions at your Varanasi office or ours. Understanding spiritual tourism needs, silk industry requirements, and technical architecture planning." },
    { step: "2", title: "UI/UX Design", duration: "1-2 Weeks", desc: "Wireframes and high-fidelity mockups with cultural sensitivity. We consider multi-language support and spiritual app design patterns." },
    { step: "3", title: "Agile Development", duration: "4-12 Weeks", desc: "Development in 2-week sprints with demos after each sprint. You see working features regularly and can provide feedback. CI/CD for continuous integration." },
    { step: "4", title: "Quality Assurance", duration: "1-2 Weeks", desc: "Comprehensive testing including functional, performance, security, and device testing. Multi-language testing and streaming quality verification." },
    { step: "5", title: "Launch & Support", duration: "Ongoing", desc: "App store submission, deployment, and monitoring. Post-launch support, content updates for festivals, and ongoing maintenance." }
  ];

  // Tech Stack
  const techStack = [
    { category: "Mobile", technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Jetpack Compose", "SwiftUI"] },
    { category: "Backend", technologies: ["Node.js", "Java Spring", "Python", "Go", "GraphQL", "REST APIs"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CDN"] },
    { category: "Streaming", technologies: ["RTMP", "HLS", "WebRTC", "Live Video", "Audio Tours", "Virtual Darshan"] },
    { category: "Localization", technologies: ["Hindi", "English", "Sanskrit", "Tamil", "Bengali", "10+ Languages"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO title="App Development Company in Varanasi | Spiritual Tourism Apps | ₹25,000 Onwards | Web Nova Crew" description="Top app development company in Varanasi. Spiritual tourism apps, Banarasi silk e-commerce, BHU education apps. Multi-language support. 40% cheaper than Delhi. Call +91 98723 64476." keywords="app development Varanasi, mobile app developers Varanasi, spiritual tourism app, Banarasi silk app, ghat darshan app, puja booking app, BHU app" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://webnovacrew.com" }, { name: "Locations", url: "https://webnovacrew.com/locations" }, { name: "Varanasi", url: "https://webnovacrew.com/locations/app-development-varanasi" }]} />
      <ServiceSchema serviceName="App Development in Varanasi" serviceDescription="Professional mobile app development in Varanasi. Spiritual tourism apps, Banarasi silk e-commerce, education apps with multi-language support." serviceUrl="https://webnovacrew.com/locations/app-development-varanasi" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-orange-400" /><span className="text-sm text-orange-300">Varanasi, Uttar Pradesh • Spiritual Capital of India • 5000+ Years Old</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">#1 App Development Company in Varanasi</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Build powerful <span className="text-orange-400 font-semibold">spiritual tourism, Banarasi silk & education apps</span>. Specialized in <span className="text-red-400 font-semibold">ghat darshan & puja booking</span> apps.</p>
            <p className="text-lg text-slate-400 mb-8">🕉️ 15+ Spiritual Apps Built • 🧵 Banarasi Silk E-commerce • 💰 40% Lower Than Delhi</p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link></Button>
              <a href="https://wa.me/919872364476"><Button size="lg" variant="outline" className="border-green-500/50 text-green-400 px-8 py-6 text-lg"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp: +91 98723 64476</Button></a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400">30+</div><div className="text-sm text-slate-400">Varanasi Apps</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-orange-500/20"><div className="text-3xl font-bold text-red-400">₹25K</div><div className="text-sm text-slate-400">Starting Price</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-orange-500/20"><div className="text-3xl font-bold text-orange-400">10+</div><div className="text-sm text-slate-400">Languages</div></div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-orange-500/20"><div className="text-3xl font-bold text-red-400">Live</div><div className="text-sm text-slate-400">Aarti Streaming</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">App Development Services in Varanasi</h2><p className="text-xl text-slate-400">Specialized solutions for Varanasi's spiritual, silk, and education sectors</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50"><div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">{s.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm mb-4">{s.desc}</p><div className="flex flex-wrap gap-2">{s.features.map((f, j) => (<span key={j} className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded">{f}</span>))}</div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve in Varanasi</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50"><div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-orange-400 mt-1" /><div><h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3><p className="text-sm text-slate-400">{ind.desc}</p></div></div></motion.div>))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving All Areas of Varanasi</h2></div>
          <div className="flex flex-wrap gap-4 justify-center">{areas.map((a, i) => (<div key={i} className="px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" />{a.name}<span className="text-xs text-slate-500">({a.type})</span></div>))}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Varanasi Businesses Choose Us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50"><div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400">{item.icon}</div><div className="text-sm font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">{item.stats}</div></div><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-slate-400">{item.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Varanasi Success Stories</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all">
                <div className="text-orange-400 text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {study.results.map((result, i) => (<div key={i} className="bg-orange-500/10 rounded-lg px-3 py-2 text-center"><span className="text-orange-300 text-sm font-medium">{result}</span></div>))}
                </div>
                <div className="flex flex-wrap gap-2">{study.tech.map((tech, i) => (<span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Development Process</h2></div>
          <div className="grid md:grid-cols-5 gap-6">
            {developmentProcess.map((phase, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all h-full">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                  <div className="text-orange-400 text-sm mb-3">{phase.duration}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technology Stack</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">{stack.technologies.map((tech, i) => (<span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">{tech}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Varanasi App Development Pricing</h2><p className="text-xl text-slate-400">40-50% savings compared to Delhi agencies with same quality.</p></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-slate-800/50 border rounded-xl p-6 relative ${p.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>)}<h3 className="text-xl font-semibold text-white mb-1">{p.tier}</h3><p className="text-sm text-slate-400 mb-4">{p.ideal}</p><div className="text-3xl font-bold text-orange-400 mb-6">{p.price}</div><ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5" />{f}</li>))}</ul><Button className={`w-full ${p.popular ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-slate-700'}`}><Link href="/contact">Get Started</Link></Button></motion.div>))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Varanasi App Development FAQs</h2></div>
          <div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3><p className="text-slate-400 leading-relaxed">{faq.answer}</p></motion.div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-950/50 to-red-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Varanasi App?</h2>
          <p className="text-xl text-slate-300 mb-8">Get a free consultation for your spiritual tourism or silk business app.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-6 text-lg"><Link href="/contact" className="flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Free Consultation</Link></Button>
            <a href="https://wa.me/919872364476" target="_blank"><Button size="lg" variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"><MessageSquare className="w-5 h-5 mr-2" />WhatsApp Us</Button></a>
          </div>
          <p className="text-slate-400 mt-6">📍 Just 4 hours from Varanasi • Regular on-site visits</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
