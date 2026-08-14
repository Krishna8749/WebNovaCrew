import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Apple, Code2, Zap, Shield, 
  Smartphone, Layers, Users, TrendingUp, Phone, Award, Globe,
  Rocket, Star, Lock, DollarSign, Database, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function iOSAppDevelopment() {
  const iosFeatures = [
    { title: "Native iOS Development", desc: "Built with Swift for maximum performance and security", icon: <Code2 className="w-6 h-6" /> },
    { title: "Human Interface Design", desc: "Beautiful, intuitive UI following Apple's design principles", icon: <Layers className="w-6 h-6" /> },
    { title: "App Store Publishing", desc: "Complete submission, review, and optimization", icon: <Apple className="w-6 h-6" /> },
    { title: "iCloud & CloudKit", desc: "Seamless data sync across all Apple devices", icon: <Database className="w-6 h-6" /> },
  ];

  const appCategories = [
    { title: "E-commerce & Retail", desc: "Shopping apps with Apple Pay, wallet integration" },
    { title: "Food & Delivery", desc: "Restaurant apps, food ordering, delivery tracking" },
    { title: "Real Estate", desc: "Property apps with AR views, map integration" },
    { title: "Healthcare & Fitness", desc: "HealthKit integration, telemedicine, wellness apps" },
    { title: "Finance & Banking", desc: "Secure fintech apps with biometric authentication" },
    { title: "Social & Messaging", desc: "Social networks, chat apps, content platforms" },
    { title: "Business & Enterprise", desc: "CRM, productivity, team collaboration apps" },
    { title: "Entertainment & Media", desc: "Streaming, music, gaming, content apps" },
  ];

  const techStack = [
    { name: "Swift", category: "Primary Language" },
    { name: "SwiftUI", category: "UI Framework" },
    { name: "UIKit", category: "UI Framework" },
    { name: "Xcode", category: "IDE" },
    { name: "Core Data", category: "Database" },
    { name: "CloudKit", category: "Cloud Storage" },
    { name: "Combine", category: "Reactive Programming" },
    { name: "URLSession", category: "Networking" },
    { name: "MVVM", category: "Architecture" },
    { name: "TestFlight", category: "Beta Testing" },
  ];

  const features = [
    "Apple Sign-In & Authentication",
    "Apple Pay Integration",
    "Push Notifications (APNs)",
    "Face ID & Touch ID",
    "HealthKit & HomeKit Integration",
    "ARKit for Augmented Reality",
    "Core ML for Machine Learning",
    "iCloud Sync & Backup",
    "Siri Shortcuts Integration",
    "Apple Watch Companion App",
    "Universal Links & Deep Linking",
    "Background App Refresh"
  ];

  const whyChooseUs = [
    { title: "Apple Certified Team", desc: "Developers trained in latest iOS technologies", icon: <Award className="w-5 h-5" /> },
    { title: "150+ iOS Apps", desc: "Successfully published on App Store", icon: <Apple className="w-5 h-5" /> },
    { title: "Fast Delivery", desc: "Launch in 15-50 days with quality assurance", icon: <Rocket className="w-5 h-5" /> },
    { title: "Premium Quality", desc: "Apps that meet Apple's strict guidelines", icon: <Star className="w-5 h-5" /> },
    { title: "App Store Optimization", desc: "Keywords, screenshots, descriptions optimized", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Ongoing Support", desc: "iOS updates, bug fixes, feature additions", icon: <Shield className="w-5 h-5" /> },
  ];

  const process = [
    { step: "1", title: "Discovery & Planning", desc: "Define app features, user flows, and technical requirements" },
    { step: "2", title: "UI/UX Design", desc: "Create Human Interface compliant designs for iPhone & iPad" },
    { step: "3", title: "Swift Development", desc: "Build app using Swift with clean, maintainable code" },
    { step: "4", title: "API & Backend", desc: "Integrate with REST APIs, CloudKit, and third-party services" },
    { step: "5", title: "Testing & QA", desc: "Test on real devices, TestFlight beta testing" },
    { step: "6", title: "App Store Launch", desc: "Submit with optimized metadata and assets" },
  ];

  const faqs = [
    {
      question: "How much does iOS app development cost?",
      answer: "iOS app development costs range from ₹30,000 to ₹5,00,000 in India (250-4,500 KWD in Kuwait). Simple apps start at ₹30,000, business apps cost ₹80,000-₹2,00,000, and complex apps with advanced features cost ₹2,50,000-₹5,00,000."
    },
    {
      question: "How long does it take to develop an iOS app?",
      answer: "Simple iOS apps take 15-20 days, standard business apps require 4-6 weeks, and complex apps with advanced features take 8-14 weeks. Timeline includes design, development, testing, and App Store submission."
    },
    {
      question: "Do you develop apps in Swift or Objective-C?",
      answer: "We primarily use Swift as it's Apple's modern, safe, and performant language. Swift offers better code quality, faster development, and is the recommended choice for new iOS apps. We also support Objective-C for legacy app maintenance."
    },
    {
      question: "Can you help with App Store submission and approval?",
      answer: "Yes! We handle the complete App Store submission process including developer account setup, app metadata optimization, screenshot creation, privacy policy, and ensuring compliance with Apple's App Store Review Guidelines."
    },
    {
      question: "Will my iOS app work on iPhone and iPad?",
      answer: "Yes, we develop universal apps that work seamlessly on iPhone, iPad, and even Apple Watch if needed. We optimize the UI for different screen sizes and orientations to provide the best user experience on all devices."
    },
    {
      question: "Do you integrate Apple Pay and other Apple services?",
      answer: "Absolutely! We integrate Apple Pay for payments, Face ID/Touch ID for authentication, HealthKit for health data, ARKit for augmented reality, Core ML for AI features, and other Apple frameworks as per your requirements."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="iOS App Development Company | Swift, iPhone, iPad | India & Kuwait" 
        description="Leading iOS app development company in India & Kuwait. We build premium iPhone and iPad apps using Swift with Apple Pay, Face ID, ARKit, and App Store optimization. ₹30,000 onwards."
        keywords="iOS app development, iPhone app development, iPad app development, Swift app development, iOS developers India, iOS app development Kuwait, App Store app, Apple app development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "iOS App Development", url: "https://webnovacrew.com/services/ios-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="iOS App Development"
        serviceDescription="Professional iOS app development services using Swift. Premium iPhone and iPad apps with Apple Pay, Face ID, ARKit, and complete App Store optimization."
        serviceUrl="https://webnovacrew.com/services/ios-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-400/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded-full mb-6">
              <Apple className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-300">150+ Apps on Apple App Store</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              iOS App Development Company
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build premium <span className="text-slate-400 font-semibold">iPhone and iPad apps</span> with Swift, Apple Pay, Face ID, ARKit, and seamless App Store publishing. Trusted by businesses in India & Kuwait.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View iOS Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-1">150+</div>
                <div className="text-sm text-slate-400">iOS Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-1">₹30K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-1">15-50</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">App Store Approval</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* iOS Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Native iOS Development
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leveraging the full power of Apple ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iosFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center text-slate-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              iOS Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Premium iOS solutions for every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              iOS Tech Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern Apple technologies for premium iOS apps
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-slate-500/50 transition-all"
              >
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-slate-400">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Apple Features We Integrate
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Complete Apple ecosystem integration
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
                <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-200">{feature}</span>
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
              Why Choose Us for iOS Development
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              India & Kuwait's trusted iOS app development partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center text-slate-400 mb-4">
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
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our iOS Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From concept to App Store in 6 simple steps
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
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything about iOS app development
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
      <section className="py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your iOS App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed iOS app development proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get Free Consultation
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
