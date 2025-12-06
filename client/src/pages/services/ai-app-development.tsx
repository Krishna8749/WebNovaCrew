import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Brain, Bot, Sparkles, Zap, Shield, 
  MessageSquare, TrendingUp, Phone, Award, Users, Database,
  Search, Eye, Mic, BarChart3, Cpu, Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function AIAppDevelopment() {
  const aiCapabilities = [
    { title: "AI Recommendation Engine", desc: "Personalized product & content suggestions using ML algorithms", icon: <Sparkles className="w-6 h-6" /> },
    { title: "AI Chatbots & Virtual Assistants", desc: "GPT-4 & Claude powered conversational AI for 24/7 support", icon: <Bot className="w-6 h-6" /> },
    { title: "Predictive Analytics", desc: "Forecast sales, user behavior & market trends with AI", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Automated CRM Systems", desc: "AI-driven lead scoring, follow-ups & customer insights", icon: <Database className="w-6 h-6" /> },
    { title: "Voice AI & Speech Recognition", desc: "Voice commands, transcription & multilingual support", icon: <Mic className="w-6 h-6" /> },
    { title: "Facial Recognition & Biometrics", desc: "Secure authentication & identity verification", icon: <Eye className="w-6 h-6" /> },
    { title: "LLM-Powered Search", desc: "Semantic search with natural language understanding", icon: <Search className="w-6 h-6" /> },
    { title: "AI Data Insights & Reporting", desc: "Automated business intelligence & visual dashboards", icon: <BarChart3 className="w-6 h-6" /> },
  ];

  const techStack = [
    { name: "GPT-4 / GPT-4o", category: "LLM" },
    { name: "Claude 3.5", category: "LLM" },
    { name: "LangChain", category: "Framework" },
    { name: "TensorFlow", category: "ML" },
    { name: "PyTorch", category: "ML" },
    { name: "OpenAI API", category: "API" },
    { name: "Hugging Face", category: "Models" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Vector DB", category: "Database" },
  ];

  const useCases = [
    { title: "E-commerce AI", desc: "Product recommendations, dynamic pricing, inventory forecasting" },
    { title: "Healthcare AI", desc: "Symptom analysis, appointment scheduling, patient monitoring" },
    { title: "Real Estate AI", desc: "Property valuation, lead scoring, virtual property tours" },
    { title: "FinTech AI", desc: "Fraud detection, credit scoring, investment recommendations" },
    { title: "Education AI", desc: "Personalized learning, automated grading, tutoring bots" },
    { title: "Customer Service AI", desc: "24/7 chatbots, ticket routing, sentiment analysis" },
  ];

  const faqs = [
    {
      question: "What is AI app development?",
      answer: "AI app development involves integrating artificial intelligence capabilities like machine learning, natural language processing, computer vision, and predictive analytics into mobile and web applications to automate tasks, personalize experiences, and provide intelligent insights."
    },
    {
      question: "How much does AI app development cost?",
      answer: "AI app development costs range from ₹1,20,000 to ₹5,00,000 in India (1,200-4,500 KWD in Kuwait) depending on complexity. Simple AI chatbots start lower, while advanced ML models with custom training cost more."
    },
    {
      question: "Which AI technologies do you use?",
      answer: "We use GPT-4, Claude 3.5, LangChain, TensorFlow, PyTorch, OpenAI APIs, Hugging Face models, and custom ML solutions. We select the best technology based on your specific use case and requirements."
    },
    {
      question: "Can you integrate AI into my existing app?",
      answer: "Yes! We specialize in AI integration for existing applications. We can add chatbots, recommendation engines, predictive analytics, and other AI features to your current mobile or web app."
    },
    {
      question: "How long does it take to develop an AI app?",
      answer: "AI app development typically takes 30-90 days depending on complexity. Simple chatbot integration takes 2-3 weeks, while custom ML models with training can take 2-3 months."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="AI App Development Company | GPT-4, Machine Learning, Chatbots | India & Kuwait" 
        description="Leading AI app development company. We build intelligent apps with GPT-4, Claude, machine learning, chatbots, recommendation engines & predictive analytics. Custom AI solutions for businesses in India & Kuwait."
        keywords="AI app development, machine learning app development, GPT-4 integration, AI chatbot development, recommendation engine, predictive analytics app, artificial intelligence mobile app, AI software development India, AI app development Kuwait"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "AI App Development", url: "https://webnovacrew.com/services/ai-app-development" }
      ]} />
      <ServiceSchema 
        serviceName="AI App Development"
        serviceDescription="Professional AI app development services. We build intelligent applications with GPT-4, machine learning, chatbots, and predictive analytics for businesses."
        serviceUrl="https://webnovacrew.com/services/ai-app-development"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-purple-500/30">
              <Brain className="w-4 h-4" /> AI-Powered Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI App Development</span> Company
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build intelligent applications using <strong className="text-white">GPT-4, Claude, machine learning, chatbots, recommendation engines</strong> and 
              <strong className="text-purple-400"> predictive analytics</strong>. Transform your business with cutting-edge AI technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get AI Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "AI Projects" },
                { value: "GPT-4", label: "Powered" },
                { value: "24/7", label: "AI Support" },
                { value: "95%", label: "Accuracy" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Capabilities <span className="text-purple-400">We Build</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              From conversational AI to predictive analytics, we build intelligent features that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-blue-200/60 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Technologies <span className="text-purple-400">We Use</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-purple-500/20 rounded-full px-6 py-3 hover:border-purple-500/50 transition-all"
              >
                <span className="text-white font-semibold">{tech.name}</span>
                <span className="text-purple-400 text-sm ml-2">({tech.category})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="text-purple-400">Use Cases</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              We build AI solutions for every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-blue-200/70">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-purple-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your AI App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free AI consultation and discover how artificial intelligence can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-lg px-10 py-7 rounded-full">
                Start AI Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919872364476">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
