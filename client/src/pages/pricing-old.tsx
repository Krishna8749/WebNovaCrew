import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection, servicesFAQs } from "@/components/sections/FAQ";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator, Globe, Smartphone, ShoppingCart, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Link } from "wouter";

export default function Pricing() {
  const [projectType, setProjectType] = useState<string>("website");
  const [complexity, setComplexity] = useState<number>(50);
  const [pages, setPages] = useState<number>(10);
  const [features, setFeatures] = useState<string[]>([]);

  const featureOptions = [
    { id: "cms", label: "Content Management System", price: 25000 },
    { id: "ecommerce", label: "E-Commerce Functionality", price: 50000 },
    { id: "auth", label: "User Authentication", price: 20000 },
    { id: "api", label: "API Integration", price: 30000 },
    { id: "analytics", label: "Analytics Dashboard", price: 25000 },
    { id: "seo", label: "Advanced SEO Setup", price: 15000 },
    { id: "multilang", label: "Multi-language Support", price: 20000 },
    { id: "payment", label: "Payment Gateway", price: 15000 },
  ];

  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const calculatePrice = () => {
    let basePrice = projectType === "website" ? 50000 : projectType === "webapp" ? 150000 : 300000;
    let complexityMultiplier = 0.5 + (complexity / 100);
    let pagePrice = pages * 3000;
    let featurePrice = features.reduce((sum, f) => {
      const feature = featureOptions.find(fo => fo.id === f);
      return sum + (feature?.price || 0);
    }, 0);
    
    return Math.round((basePrice * complexityMultiplier + pagePrice + featurePrice) / 1000) * 1000;
  };

  const estimatedPrice = calculatePrice();

  const packages = [
    {
      name: "Starter",
      price: "₹50,000",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Basic SEO setup",
        "Contact form",
        "Mobile responsive",
        "1 month support",
        "Social media integration",
      ],
      notIncluded: ["CMS", "E-commerce", "Custom features"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      description: "For growing businesses needing more features",
      features: [
        "Up to 15 pages",
        "Content Management System",
        "Advanced SEO optimization",
        "Blog functionality",
        "Analytics integration",
        "3 months support",
        "Performance optimization",
        "SSL certificate",
      ],
      notIncluded: ["E-commerce", "Custom integrations"],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹5,00,000+",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom design & development",
        "E-commerce functionality",
        "API integrations",
        "Multi-language support",
        "12 months support",
        "Dedicated project manager",
        "Priority support",
        "Custom features",
      ],
      notIncluded: [],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title="Pricing - Web Development & App Development Costs" 
        description="Transparent pricing for web development, mobile app development, and digital services. Use our pricing calculator to estimate your project cost. Starting from ₹50,000."
        keywords="web development pricing india, app development cost, website design prices, ecommerce development cost, custom software pricing"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Pricing", url: "https://webnovacrew.com/pricing" }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
              Transparent <span className="text-blue-600">Pricing</span> for Every Budget
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Get a clear understanding of project costs upfront. Use our calculator for a custom estimate or choose from our packages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Website Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${pkg.popular ? 'border-2 border-blue-600 shadow-xl relative' : 'border-slate-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 mt-2">{pkg.price}</div>
                    <p className="text-slate-500 text-sm mt-2">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                          <Check className="w-4 h-4 text-lime-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {pkg.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-sm line-through">
                          <Check className="w-4 h-4 text-slate-300 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}>
                        {pkg.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              <Calculator className="w-5 h-5 inline mr-2" />
              Pricing Calculator
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">
              Get a Custom Estimate
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Use our interactive calculator to get an estimated cost for your project. This is just an estimate - contact us for a detailed quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                {/* Project Type */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-900 mb-4">Project Type</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: "website", label: "Website", icon: <Globe className="w-5 h-5" /> },
                      { id: "webapp", label: "Web App", icon: <Zap className="w-5 h-5" /> },
                      { id: "mobile", label: "Mobile App", icon: <Smartphone className="w-5 h-5" /> },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          projectType === type.id
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {type.icon}
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexity */}
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-slate-900">Project Complexity</label>
                    <span className="text-sm text-slate-500">
                      {complexity < 33 ? 'Simple' : complexity < 66 ? 'Medium' : 'Complex'}
                    </span>
                  </div>
                  <Slider
                    value={[complexity]}
                    onValueChange={(value) => setComplexity(value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Pages/Screens */}
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-slate-900">
                      {projectType === "mobile" ? "Screens" : "Pages"}
                    </label>
                    <span className="text-sm text-slate-500">{pages}</span>
                  </div>
                  <Slider
                    value={[pages]}
                    onValueChange={(value) => setPages(value[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-4">Additional Features</label>
                  <div className="grid grid-cols-2 gap-3">
                    {featureOptions.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-3 rounded-lg border text-left transition-all text-sm ${
                          features.includes(feature.id)
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            features.includes(feature.id) ? 'bg-blue-600 border-blue-600' : 'border-slate-300'
                          }`}>
                            {features.includes(feature.id) && <Check className="w-3 h-3 text-white" />}
                          </div>
                          {feature.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estimate Display */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-blue-900 text-white rounded-2xl p-8 text-center"
              >
                <p className="text-blue-200 mb-2">Estimated Project Cost</p>
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  ₹{estimatedPrice.toLocaleString('en-IN')}
                </div>
                <p className="text-blue-200 text-sm mb-8">
                  *This is an estimate. Final pricing may vary based on specific requirements.
                </p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Project Type</span>
                    <span className="font-medium capitalize">{projectType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Complexity</span>
                    <span className="font-medium">
                      {complexity < 33 ? 'Simple' : complexity < 66 ? 'Medium' : 'Complex'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">{projectType === "mobile" ? "Screens" : "Pages"}</span>
                    <span className="font-medium">{pages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Features</span>
                    <span className="font-medium">{features.length} selected</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="w-full bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold">
                    Get Detailed Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              <p className="text-center text-slate-500 text-sm mt-6">
                Need a more accurate quote? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        title="Pricing FAQs"
        subtitle="Common questions about our pricing and payment terms."
        faqs={[
          {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, UPI, credit/debit cards, and PayPal for international clients. We typically require 50% upfront and 50% upon project completion."
          },
          {
            question: "Do you offer payment plans?",
            answer: "Yes, for larger projects we offer milestone-based payments. We can split the payment into 3-4 installments based on project phases."
          },
          {
            question: "What's included in the support period?",
            answer: "Our support includes bug fixes, minor content updates, security patches, and technical assistance. Major feature additions are quoted separately."
          },
          {
            question: "Can I upgrade my package later?",
            answer: "Absolutely! You can upgrade your website or add features at any time. We'll provide a quote for the additional work."
          },
        ]}
      />

      <Footer />
    </div>
  );
}
