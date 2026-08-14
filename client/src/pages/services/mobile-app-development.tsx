import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Tablet, Zap, Shield, 
  Code2, Layers, Users, TrendingUp, Phone, Award, Globe,
  Rocket, Star, Clock, DollarSign, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function MobileAppDevelopment() {
  const platforms = [
    { title: "Android App Development", desc: "Native Android apps using Kotlin & Java for Google Play Store", icon: <Smartphone className="w-6 h-6" /> },
    { title: "iOS App Development", desc: "Premium iOS apps in Swift for Apple App Store", icon: <Tablet className="w-6 h-6" /> },
    { title: "Cross-Platform Apps", desc: "Flutter & React Native apps for both Android & iOS", icon: <Globe className="w-6 h-6" /> },
    { title: "Progressive Web Apps", desc: "Web apps that work like native mobile applications", icon: <Code2 className="w-6 h-6" /> },
  ];

  const appTypes = [
    { title: "E-commerce Apps", desc: "Online shopping, payments, cart, order tracking" },
    { title: "On-Demand Delivery", desc: "Food, grocery, pharmacy delivery solutions" },
    { title: "Real Estate Apps", desc: "Property listing, agent panels, map search" },
    { title: "Healthcare Apps", desc: "Telemedicine, appointment booking, patient records" },
    { title: "Education Apps", desc: "E-learning, online courses, student management" },
    { title: "Social Networking", desc: "Community apps, messaging, content sharing" },
    { title: "Business Apps", desc: "CRM, ERP, inventory, workforce management" },
    { title: "Entertainment Apps", desc: "Streaming, gaming, content platforms" },
  ];

  const features = [
    "User Authentication & Security",
    "Push Notifications",
    "Payment Gateway Integration",
    "GPS & Location Services",
    "Real-time Chat & Messaging",
    "Social Media Integration",
    "Analytics & Reporting",
    "Offline Mode Support",
    "Cloud Storage Integration",
    "Multi-language Support",
    "Admin Dashboard",
    "API Development & Integration"
  ];

  const process = [
    { step: "1", title: "Consultation & Strategy", desc: "Understand your business goals, target audience, and app requirements" },
    { step: "2", title: "UI/UX Design", desc: "Create wireframes and high-fidelity designs for all screens" },
    { step: "3", title: "Development", desc: "Build frontend, backend, APIs, and integrations" },
    { step: "4", title: "Testing & QA", desc: "Comprehensive testing across devices and scenarios" },
    { step: "5", title: "Deployment", desc: "Launch on App Store and Play Store" },
    { step: "6", title: "Support & Maintenance", desc: "Ongoing updates, bug fixes, and new features" },
  ];

  const whyChooseUs = [
    { title: "7+ Years Experience", desc: "Proven track record with 250+ apps delivered", icon: <Award className="w-5 h-5" /> },
    { title: "In-House Team", desc: "No freelancers - dedicated designers & developers", icon: <Users className="w-5 h-5" /> },
    { title: "Fast Delivery", desc: "Launch your app in 7-45 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "Affordable Pricing", desc: "₹25,000 - ₹5,00,000 transparent pricing", icon: <DollarSign className="w-5 h-5" /> },
    { title: "AI-Powered Features", desc: "Chatbots, recommendations, automation included", icon: <Zap className="w-5 h-5" /> },
    { title: "Post-Launch Support", desc: "Maintenance, updates, and scaling support", icon: <Shield className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      question: "How much does mobile app development cost?",
      answer: "Mobile app development costs range from ₹25,000 to ₹5,00,000 in India (200-4,500 KWD in Kuwait) depending on features, platforms, design complexity, and integrations. Simple apps start at ₹25,000 while complex enterprise apps can go up to ₹5,00,000."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Simple apps can be developed in 7-15 days, standard business apps take 3-6 weeks, and complex apps with advanced features take 2-3 months. Timeline depends on features, platforms, and design requirements."
    },
    {
      question: "Do you develop for both Android and iOS?",
      answer: "Yes! We develop native Android apps (Kotlin/Java), native iOS apps (Swift), and cross-platform apps using Flutter and React Native that work on both platforms with a single codebase."
    },
    {
      question: "Can you help publish the app on App Store and Play Store?",
      answer: "Absolutely! We handle the complete app store submission process including account setup, app listing optimization, screenshots, descriptions, and compliance with store guidelines."
    },
    {
      question: "Do you provide maintenance and updates after launch?",
      answer: "Yes, we offer flexible maintenance plans including bug fixes, OS updates, security patches, performance optimization, and new feature development based on your needs."
    },
    {
      question: "Can you integrate AI features into mobile apps?",
      answer: "Yes! We specialize in AI integration including chatbots, recommendation engines, voice AI, image recognition, predictive analytics, and automation features powered by GPT-4, Claude, and custom ML models."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Mobile App Development Company | Android, iOS, Flutter | India & Kuwait" 
        description="Leading mobile app development company in India & Kuwait. We build high-performance Android, iOS, and cross-platform apps with AI integration. 250+ apps delivered. ₹25,000 onwards."
        keywords="mobile app development company, Android app development, iOS app development, cross-platform app development, Flutter app development, React Native development, app development India, app development Kuwait, mobile app developers"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "Mobile App Development", url: "https://webnovacrew.com/services/mobile-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Mobile App Development"
        serviceDescription="Professional mobile app development services for Android, iOS, and cross-platform applications. Custom apps with modern UI/UX, AI integration, and scalable architecture."
        serviceUrl="https://webnovacrew.com/services/mobile-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">250+ Apps Delivered | 7+ Years Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Mobile App Development Company
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build high-performance <span className="text-blue-400 font-semibold">Android, iOS, and cross-platform apps</span> with AI-powered features, modern UI/UX, and scalable architecture. Trusted by businesses in India & Kuwait.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Portfolio
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">250+</div>
                <div className="text-sm text-slate-400">Apps Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">7+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">7-45</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">In-House Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms We Build For */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Platforms We Build For
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Native and cross-platform app development for all major platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.title}</h3>
                <p className="text-slate-400">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types We Build */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom mobile apps for every industry and business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features We Include */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Features We Include
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive features to make your app powerful and user-friendly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose Web Nova Crew
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              India & Kuwait's most trusted mobile app development company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Streamlined process from idea to App Store launch
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
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about mobile app development
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
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed project proposal from our experts
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-white">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
