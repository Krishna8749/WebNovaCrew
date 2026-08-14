import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Database, Users, BarChart3, Settings,
  MessageSquare, Phone, Shield, Clock, Zap, FileText, Building2,
  TrendingUp, PieChart, Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export default function ERPCRMDevelopment() {
  const erpModules = [
    { title: "Inventory Management", desc: "Stock tracking, warehouse management, purchase orders", icon: <Database className="w-6 h-6" /> },
    { title: "Sales & CRM", desc: "Lead management, pipeline tracking, customer database", icon: <Users className="w-6 h-6" /> },
    { title: "Finance & Accounting", desc: "Invoicing, payments, expense tracking, reports", icon: <PieChart className="w-6 h-6" /> },
    { title: "HR & Payroll", desc: "Employee management, attendance, salary processing", icon: <Building2 className="w-6 h-6" /> },
    { title: "Project Management", desc: "Task tracking, timesheets, resource allocation", icon: <Workflow className="w-6 h-6" /> },
    { title: "Reports & Analytics", desc: "Custom dashboards, KPIs, business intelligence", icon: <BarChart3 className="w-6 h-6" /> },
  ];

  const crmFeatures = [
    "Lead Capture & Scoring",
    "Contact Management",
    "Sales Pipeline",
    "Email Integration",
    "Task Automation",
    "Customer Support",
    "Analytics Dashboard",
    "Mobile CRM App",
  ];

  const pricing = [
    { name: "Basic CRM", price: "₹60,000 – ₹1,20,000", priceKWD: "300 – 600 KWD", features: ["Lead Management", "Contact Database", "Basic Reports", "30-45 Days"] },
    { name: "Advanced ERP", price: "₹1,50,000 – ₹3,50,000", priceKWD: "750 – 1,750 KWD", features: ["Multi-module ERP", "Custom Workflows", "Integrations", "Mobile App", "60-90 Days"], popular: true },
    { name: "Enterprise Suite", price: "₹4,00,000 – ₹10,00,000", priceKWD: "2,000 – 5,000 KWD", features: ["Full ERP Suite", "AI Analytics", "Multi-branch", "Custom Features", "120-180 Days"] },
  ];

  const faqs = [
    {
      question: "What is the difference between ERP and CRM?",
      answer: "CRM (Customer Relationship Management) focuses on managing customer interactions, sales, and marketing. ERP (Enterprise Resource Planning) is broader, covering inventory, finance, HR, and operations. Many businesses need both, and we can build integrated solutions."
    },
    {
      question: "How much does custom ERP/CRM development cost?",
      answer: "Custom CRM development starts from ₹60,000, while comprehensive ERP systems range from ₹1,50,000 to ₹10,00,000+ depending on modules and complexity. In Kuwait, prices range from 300 KWD to 5,000 KWD."
    },
    {
      question: "Should I build custom ERP or use off-the-shelf solutions?",
      answer: "Custom ERP is ideal if you have unique business processes, need specific integrations, or want to avoid recurring license fees. Off-the-shelf solutions like SAP or Odoo work for standard processes. We help you decide based on your needs."
    },
    {
      question: "What technologies do you use for ERP/CRM development?",
      answer: "We use Laravel, Node.js, Python for backend; React, Vue.js for frontend; PostgreSQL, MySQL for databases; and can integrate with existing systems via APIs. We also build mobile apps for field teams."
    },
    {
      question: "How long does ERP implementation take?",
      answer: "Basic CRM takes 30-45 days, advanced ERP systems take 60-90 days, and enterprise suites take 120-180 days. We follow phased implementation with training and support at each stage."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="ERP & CRM Development Company | Custom Business Software | India & Kuwait" 
        description="Leading ERP & CRM development company. We build custom business software for inventory, sales, finance, HR management. 50+ enterprise solutions delivered in India & Kuwait."
        keywords="ERP development company, CRM development, custom ERP software, business management software, inventory management system, sales CRM, ERP India, CRM Kuwait, enterprise software development"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Services", url: "https://webnovacrew.com/services" },
        { name: "ERP & CRM Development", url: "https://webnovacrew.com/services/erp-crm-development" }
      ]} />
      <ServiceSchema 
        serviceName="ERP & CRM Development"
        serviceDescription="Professional ERP and CRM development services. We build custom business software for inventory, sales, finance, and HR management."
        serviceUrl="https://webnovacrew.com/services/erp-crm-development"
      />
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-400 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-500/30">
              <Database className="w-4 h-4" /> Enterprise Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">ERP & CRM</span> Development Company
            </h1>
            
            <p className="text-xl text-blue-200/80 mb-8 leading-relaxed">
              Build powerful <strong className="text-white">custom business software</strong> for 
              <strong className="text-indigo-400"> inventory, sales, finance, HR & operations</strong>. Streamline your business with tailored ERP & CRM solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-lg px-8 py-7 rounded-full shadow-2xl">
                  Get ERP Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919872364476" target="_blank">
                <Button size="lg" variant="outline" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-bold text-lg px-8 py-7 rounded-full">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "ERP Systems" },
                { value: "40%", label: "Efficiency Boost" },
                { value: "100K+", label: "Users" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ERP <span className="text-indigo-400">Modules</span> We Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpModules.map((module, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                <p className="text-blue-200/60 text-sm">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CRM <span className="text-indigo-400">Features</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {crmFeatures.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-white/5 border border-indigo-500/20 rounded-full px-6 py-3 text-white font-semibold hover:border-indigo-500/50 transition-all flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ERP/CRM <span className="text-indigo-400">Pricing</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-3xl p-8 ${tier.popular ? 'border-indigo-500 scale-105' : 'border-white/10'}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-bold px-6 py-2 rounded-full">Most Popular</div>}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-2"><span className="text-2xl font-bold text-indigo-400">{tier.price}</span><span className="text-blue-200/60 ml-2">🇮🇳</span></div>
                <div className="mb-6"><span className="text-lg font-bold text-violet-400">{tier.priceKWD}</span><span className="text-blue-200/60 ml-2">🇰🇼</span></div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-200/80"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />{feature}</li>
                  ))}
                </ul>
                <Link href="/contact"><Button className={`w-full font-bold py-6 rounded-full ${tier.popular ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>Get Started</Button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-indigo-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Streamline Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">Get a free consultation for your custom ERP/CRM solution.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-lg px-10 py-7 rounded-full">Start Your Project <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <a href="tel:+919872364476"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full"><Phone className="w-5 h-5 mr-2" /> Call Now</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
