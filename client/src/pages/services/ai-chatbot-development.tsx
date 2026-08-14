import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Bot, Sparkles, Zap, Shield, 
  MessageSquare, TrendingUp, Phone, Award, Users, Clock,
  Globe, Headphones, BarChart3, Settings, Code, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

export default function AIChatbotDevelopment() {
  const chatbotFeatures = [
    { title: "GPT-4 & Claude Integration", desc: "Advanced LLM-powered conversations with human-like responses", icon: <Bot className="w-6 h-6" /> },
    { title: "24/7 Customer Support", desc: "Automated support that never sleeps, reducing response time to seconds", icon: <Headphones className="w-6 h-6" /> },
    { title: "Multi-Language Support", desc: "Chatbots that communicate in 50+ languages including Hindi, Arabic & English", icon: <Globe className="w-6 h-6" /> },
    { title: "Lead Generation & Qualification", desc: "Capture and qualify leads automatically with intelligent conversations", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "E-commerce Integration", desc: "Product recommendations, order tracking & shopping assistance", icon: <Sparkles className="w-6 h-6" /> },
    { title: "CRM & Database Sync", desc: "Seamless integration with Salesforce, HubSpot, Zoho & custom CRMs", icon: <Layers className="w-6 h-6" /> },
    { title: "Analytics Dashboard", desc: "Track conversations, user satisfaction & chatbot performance metrics", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Custom Training", desc: "Train chatbots on your business data, FAQs & product catalog", icon: <Settings className="w-6 h-6" /> },
  ];

  const chatbotTypes = [
    { 
      title: "Customer Support Chatbot", 
      desc: "Handle FAQs, complaints, returns & support tickets automatically",
      features: ["Ticket creation", "FAQ automation", "Escalation to human", "Sentiment analysis"],
      price: "₹50,000+"
    },
    { 
      title: "Sales & Lead Gen Chatbot", 
      desc: "Qualify leads, book demos & guide customers through sales funnel",
      features: ["Lead scoring", "Calendar booking", "Product recommendations", "Follow-up sequences"],
      price: "₹75,000+"
    },
    { 
      title: "E-commerce Chatbot", 
      desc: "Product search, order tracking, returns & personalized shopping",
      features: ["Product catalog search", "Order status", "Size recommendations", "Cart recovery"],
      price: "₹80,000+"
    },
    { 
      title: "Enterprise AI Assistant", 
      desc: "Internal knowledge base, HR queries, IT support & document search",
      features: ["Knowledge base RAG", "Document Q&A", "Employee onboarding", "IT helpdesk"],
      price: "₹1,50,000+"
    },
  ];

  const techStack = [
    "GPT-4", "GPT-4o", "Claude 3.5", "LangChain", "OpenAI API", 
    "Dialogflow", "Rasa", "Botpress", "Python", "Node.js",
    "Vector DB", "Pinecone", "Weaviate", "React", "WhatsApp API"
  ];

  const integrations = [
    "WhatsApp Business", "Facebook Messenger", "Instagram DM", "Telegram",
    "Slack", "Microsoft Teams", "Website Widget", "Mobile App SDK",
    "Shopify", "WooCommerce", "Salesforce", "HubSpot", "Zendesk"
  ];

  const processSteps = [
    { step: "1", title: "Discovery & Planning", desc: "Understand your business needs, user journeys & chatbot objectives" },
    { step: "2", title: "Conversation Design", desc: "Design conversation flows, intents, entities & fallback scenarios" },
    { step: "3", title: "AI Model Selection", desc: "Choose the right LLM (GPT-4, Claude) based on your use case" },
    { step: "4", title: "Development & Training", desc: "Build chatbot, train on your data & integrate with your systems" },
    { step: "5", title: "Testing & Optimization", desc: "Rigorous testing, A/B testing & continuous improvement" },
    { step: "6", title: "Deployment & Support", desc: "Launch on your channels with ongoing monitoring & updates" },
  ];

  const faqs = [
    {
      question: "What is an AI chatbot?",
      answer: "An AI chatbot is an intelligent conversational agent powered by artificial intelligence (like GPT-4 or Claude) that can understand natural language, answer questions, perform tasks, and have human-like conversations with users 24/7 on websites, apps, WhatsApp, and other platforms."
    },
    {
      question: "How much does AI chatbot development cost in India?",
      answer: "AI chatbot development costs range from ₹50,000 to ₹3,00,000+ in India depending on complexity. Simple FAQ bots start at ₹50,000, while advanced GPT-4 powered chatbots with custom training, CRM integration, and multi-channel deployment can cost ₹1,50,000-₹3,00,000+."
    },
    {
      question: "Which platforms can the chatbot be deployed on?",
      answer: "We deploy chatbots on WhatsApp Business, Facebook Messenger, Instagram DM, Telegram, Slack, Microsoft Teams, your website (as a widget), mobile apps (iOS & Android), and custom platforms. Multi-channel deployment ensures you reach customers wherever they are."
    },
    {
      question: "Can the chatbot be trained on my business data?",
      answer: "Yes! We use RAG (Retrieval Augmented Generation) to train chatbots on your specific business data including product catalogs, FAQs, documentation, policies, and knowledge bases. This ensures accurate, context-aware responses specific to your business."
    },
    {
      question: "How long does it take to develop an AI chatbot?",
      answer: "Simple chatbots take 2-3 weeks, while advanced AI chatbots with custom training and integrations take 4-8 weeks. Enterprise solutions with multiple integrations and complex workflows can take 8-12 weeks."
    },
    {
      question: "Do you provide chatbot maintenance and updates?",
      answer: "Yes, we offer ongoing maintenance packages that include conversation monitoring, performance optimization, adding new intents, updating responses, and keeping the AI models up-to-date. We also provide analytics dashboards to track chatbot performance."
    },
  ];

  const benefits = [
    { title: "70% Cost Reduction", desc: "Reduce customer support costs by automating repetitive queries" },
    { title: "24/7 Availability", desc: "Never miss a customer query, even outside business hours" },
    { title: "3x Faster Response", desc: "Instant responses vs minutes or hours with human agents" },
    { title: "50% More Leads", desc: "Capture and qualify leads automatically around the clock" },
    { title: "90% Query Resolution", desc: "Most common queries resolved without human intervention" },
    { title: "Better Customer Experience", desc: "Consistent, accurate responses every time" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="AI Chatbot Development Company India | GPT-4 Chatbot, WhatsApp Bot | Web Nova Crew" 
        description="Leading AI chatbot development company in India. We build GPT-4 powered chatbots for WhatsApp, websites & apps. Custom AI chatbots for customer support, lead generation & e-commerce. Get a free consultation!"
        keywords="AI chatbot development, GPT-4 chatbot, WhatsApp chatbot development, AI chatbot company India, custom chatbot development, conversational AI, chatbot for business, customer support chatbot, lead generation chatbot, e-commerce chatbot"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "AI Chatbot Development", url: "https://webnovacrew.com/services/ai-chatbot-development" }
      ]} />
      <ServiceSchema 
        serviceName="AI Chatbot Development"
        serviceDescription="Professional AI chatbot development services. We build intelligent GPT-4 powered chatbots for WhatsApp, websites, and mobile apps for customer support, lead generation, and e-commerce."
        serviceUrl="https://webnovacrew.com/services/ai-chatbot-development"
      />
      <FAQSchema faqs={faqs} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <Bot className="w-4 h-4" /> GPT-4 Powered Chatbots
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Chatbot Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Company India</span>
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build intelligent <strong className="text-white">GPT-4 & Claude powered chatbots</strong> for WhatsApp, websites & apps. 
              Automate customer support, generate leads & boost sales with <strong className="text-cyan-400">24/7 AI assistants</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100+", label: "Chatbots Built" },
                { value: "50M+", label: "Messages Handled" },
                { value: "24/7", label: "Availability" },
                { value: "90%", label: "Query Resolution" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Your Business Needs an <span className="text-blue-400">AI Chatbot</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Transform customer experience and reduce operational costs with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-blue-200/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Features */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Chatbot <span className="text-blue-400">Features We Build</span>
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Enterprise-grade chatbot capabilities powered by the latest AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatbotFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types & Pricing */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Types of <span className="text-blue-400">AI Chatbots</span> We Build
            </h2>
            <p className="text-xl text-blue-200/70 max-w-3xl mx-auto">
              Choose the right chatbot solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chatbotTypes.map((type, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                  <span className="text-blue-400 font-bold text-lg">{type.price}</span>
                </div>
                <p className="text-blue-200/70 mb-6">{type.desc}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-blue-200/80">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies <span className="text-blue-400">We Use</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 border border-blue-500/20 rounded-full px-5 py-2 text-white font-medium hover:border-blue-500/50 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Platform Integrations</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration, i) => (
              <span
                key={i}
                className="bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 text-blue-300 font-medium hover:bg-blue-500/20 transition-all"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Chatbot Development <span className="text-blue-400">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 mt-2">{step.title}</h3>
                <p className="text-blue-200/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 border border-blue-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and discover how an AI chatbot can transform your customer experience and boost your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-7 rounded-full">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
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
