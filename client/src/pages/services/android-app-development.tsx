import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, Code2, Zap, Shield, 
  PlayCircle, Layers, Users, TrendingUp, Phone, Award, Globe,
  Rocket, Star, Clock, DollarSign, Database, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AndroidAppDevelopment() {
  const androidFeatures = [
    { title: "Native Android Development", desc: "Built with Kotlin & Java for optimal performance", icon: <Code2 className="w-6 h-6" /> },
    { title: "Material Design UI", desc: "Modern, intuitive interfaces following Google's design guidelines", icon: <Layers className="w-6 h-6" /> },
    { title: "Google Play Store Publishing", desc: "Complete app store submission and optimization", icon: <PlayCircle className="w-6 h-6" /> },
    { title: "Firebase Integration", desc: "Cloud storage, analytics, push notifications, authentication", icon: <Database className="w-6 h-6" /> },
  ];

  const appCategories = [
    { title: "E-commerce & Shopping", desc: "Online stores, marketplace apps, payment integration" },
    { title: "Food Delivery", desc: "Restaurant apps, food ordering, delivery tracking" },
    { title: "Real Estate", desc: "Property listings, agent apps, virtual tours" },
    { title: "Healthcare", desc: "Telemedicine, appointment booking, health tracking" },
    { title: "Education & E-learning", desc: "Online courses, student portals, learning management" },
    { title: "Social & Community", desc: "Social networking, messaging, content sharing" },
    { title: "Business & Productivity", desc: "CRM, task management, team collaboration" },
    { title: "Entertainment & Media", desc: "Video streaming, music apps, content platforms" },
  ];

  const techStack = [
    { name: "Kotlin", category: "Primary Language" },
    { name: "Java", category: "Language" },
    { name: "Android Studio", category: "IDE" },
    { name: "Jetpack Compose", category: "UI Framework" },
    { name: "Firebase", category: "Backend" },
    { name: "Room Database", category: "Local Storage" },
    { name: "Retrofit", category: "API Integration" },
    { name: "Coroutines", category: "Async Operations" },
    { name: "MVVM Architecture", category: "Design Pattern" },
    { name: "Material Design", category: "UI/UX" },
  ];

  const features = [
    "Google Sign-In & Authentication",
    "Firebase Cloud Messaging (Push Notifications)",
    "Google Maps & Location Services",
    "In-App Purchases & Subscriptions",
    "Google Pay Integration",
    "Camera & Gallery Access",
    "Offline Mode Support",
    "Real-time Database Sync",
    "Biometric Authentication",
    "Google Analytics Integration",
    "Deep Linking",
    "Background Services & Workers"
  ];

  const whyChooseUs = [
    { title: "Google Certified Developers", desc: "Team trained in latest Android technologies", icon: <Award className="w-5 h-5" /> },
    { title: "250+ Android Apps", desc: "Proven track record on Google Play Store", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Fast Development", desc: "Launch in 10-45 days with agile methodology", icon: <Rocket className="w-5 h-5" /> },
    { title: "Affordable Pricing", desc: "Starting from ₹20,000 (180 KWD)", icon: <DollarSign className="w-5 h-5" /> },
    { title: "Play Store Optimization", desc: "ASO, screenshots, descriptions included", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Lifetime Support", desc: "Updates, bug fixes, and feature additions", icon: <Shield className="w-5 h-5" /> },
  ];

  const process = [
    { step: "1", title: "Requirement Analysis", desc: "Understand your app idea, target audience, and business goals" },
    { step: "2", title: "UI/UX Design", desc: "Create Material Design compliant wireframes and mockups" },
    { step: "3", title: "Android Development", desc: "Build app using Kotlin with clean architecture" },
    { step: "4", title: "API & Backend Integration", desc: "Connect with Firebase, REST APIs, and databases" },
    { step: "5", title: "Testing & QA", desc: "Test on multiple Android devices and OS versions" },
    { step: "6", title: "Play Store Launch", desc: "Submit app with optimized listing and assets" },
  ];

  const faqs = [
    {
      question: "How much does Android app development cost in India?",
      answer: "Android app development costs range from ₹20,000 to ₹4,00,000 in India depending on complexity. Simple apps with basic features start at ₹20,000, business apps cost ₹50,000-₹1,50,000, and complex apps with advanced features cost ₹2,00,000-₹4,00,000."
    },
    {
      question: "How long does it take to develop an Android app?",
      answer: "Simple Android apps can be developed in 10-15 days, standard business apps take 3-5 weeks, and complex apps with advanced features take 6-12 weeks. Timeline depends on features, design complexity, and integrations required."
    },
    {
      question: "Do you use Kotlin or Java for Android development?",
      answer: "We primarily use Kotlin as it's Google's recommended language for Android development. It offers better performance, safety, and modern features. However, we also support Java for legacy apps or specific requirements."
    },
    {
      question: "Can you publish the app on Google Play Store?",
      answer: "Yes! We handle the complete Play Store submission process including developer account setup, app listing optimization, screenshots, descriptions, privacy policy, and compliance with Google's policies."
    },
    {
      question: "Will my Android app work on all devices?",
      answer: "Yes, we develop apps that are compatible with Android 6.0 (API 23) and above, covering 95%+ of active Android devices. We test on multiple screen sizes, resolutions, and manufacturers (Samsung, Xiaomi, OnePlus, etc.)."
    },
    {
      question: "Do you provide maintenance after app launch?",
      answer: "Yes, we offer flexible maintenance plans including bug fixes, Android OS updates, security patches, performance optimization, and new feature development based on user feedback."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Android App Development Company | Kotlin, Java | India & Kuwait" 
        description="Leading Android app development company in India & Kuwait. We build native Android apps using Kotlin & Java with Material Design, Firebase integration, and Play Store optimization. ₹20,000 onwards."
        keywords="Android app development, Kotlin app development, Java Android apps, native Android development, Android app developers India, Android app development Kuwait, Google Play Store app, Material Design app"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "Android App Development", url: "https://webnovacrew.com/services/android-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="Android App Development"
        serviceDescription="Professional Android app development services using Kotlin and Java. Native Android apps with Material Design, Firebase integration, and Google Play Store optimization."
        serviceUrl="https://webnovacrew.com/services/android-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <PlayCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">250+ Apps on Google Play Store</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
              Android App Development Company
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Build powerful <span className="text-green-400 font-semibold">native Android apps</span> with Kotlin, Material Design, Firebase integration, and seamless Google Play Store publishing. Trusted by businesses in India & Kuwait.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Android Apps
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">250+</div>
                <div className="text-sm text-slate-400">Android Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">₹20K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">10-45</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Play Store Success</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Android Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Native Android Development
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leveraging the full power of Android platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {androidFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-4">
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
              Android Apps We Build
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom Android solutions for every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
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
              Android Tech Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modern technologies for high-performance Android apps
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-green-500/50 transition-all"
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
              Android Features We Integrate
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive Google services and Android capabilities
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
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
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
              Why Choose Us for Android Development
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              India & Kuwait's trusted Android app development partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-4">
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
              Our Android Development Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From concept to Play Store in 6 simple steps
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
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
              Everything about Android app development
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
      <section className="py-20 bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Android App?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed Android app development proposal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8">
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
