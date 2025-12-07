import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Smartphone, MapPin, Building2, Users, 
  TrendingUp, Phone, Award, Rocket, Star, Zap, Shield, Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";
import { CityData } from "@/data/india-cities";

interface IndiaCityPageProps {
  city: CityData;
}

export function IndiaCityPage({ city }: IndiaCityPageProps) {
  const services = [
    { title: "Android App Development", desc: `Native Android apps for ${city.name} businesses`, icon: <Smartphone className="w-6 h-6" /> },
    { title: "iOS App Development", desc: `Premium iPhone apps for ${city.name} market`, icon: <Smartphone className="w-6 h-6" /> },
    { title: "Flutter App Development", desc: `Cross-platform apps for ${city.name} startups`, icon: <Code2 className="w-6 h-6" /> },
    { title: "AI-Powered Apps", desc: `Intelligent apps with ML for ${city.name}`, icon: <Zap className="w-6 h-6" /> },
  ];

  const whyChooseUs = [
    { title: `Local ${city.name} Team`, desc: "Understanding of local market and business needs", icon: <MapPin className="w-5 h-5" /> },
    { title: "7+ Years Experience", desc: "250+ apps delivered across India", icon: <Award className="w-5 h-5" /> },
    { title: "Fast Delivery", desc: "Launch your app in 7-45 days", icon: <Rocket className="w-5 h-5" /> },
    { title: "Affordable Pricing", desc: "₹25,000 - ₹5,00,000 transparent pricing", icon: <Star className="w-5 h-5" /> },
    { title: "100% In-House Team", desc: "No freelancers, dedicated developers", icon: <Users className="w-5 h-5" /> },
    { title: "Post-Launch Support", desc: "Maintenance and updates included", icon: <Shield className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      question: `How much does app development cost in ${city.name}?`,
      answer: `App development costs in ${city.name} range from ₹25,000 to ₹5,00,000 depending on features and complexity. Simple apps start at ₹25,000, business apps cost ₹80,000-₹2,00,000, and complex enterprise apps cost ₹2,50,000-₹5,00,000.`
    },
    {
      question: `How long does it take to develop an app in ${city.name}?`,
      answer: `App development timeline in ${city.name} is 7-45 days. Simple apps take 7-15 days, standard business apps require 3-5 weeks, and complex apps with advanced features take 6-12 weeks.`
    },
    {
      question: `Do you have developers in ${city.name}?`,
      answer: `Yes, we work with businesses in ${city.name} and across ${city.state}. We provide remote development services with local support, regular meetings, and dedicated project managers for ${city.name} clients.`
    },
    {
      question: `What types of apps do you build for ${city.name} businesses?`,
      answer: `We build all types of apps for ${city.name} businesses including e-commerce, delivery, real estate, healthcare, education, fintech, and custom business apps tailored to ${city.name} market needs.`
    },
    {
      question: `Can you help with app marketing in ${city.name}?`,
      answer: `Yes, we provide App Store Optimization (ASO), digital marketing, and local marketing strategies specifically for ${city.name} and ${city.state} markets to help your app reach the right audience.`
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title={`App Development Company in ${city.name} | Mobile App Developers ${city.name}`}
        description={`Leading app development company in ${city.name}, ${city.state}. We build Android, iOS, Flutter apps for ${city.name} businesses. ${city.industries.slice(0, 3).join(', ')}. ₹25,000 onwards.`}
        keywords={city.keywords.join(', ')}
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" },
        { name: `${city.name}`, url: `https://webnovacrew.com/locations/app-development-${city.slug}` }
      ]} />
      <ServiceSchema 
        serviceName={`App Development in ${city.name}`}
        serviceDescription={`Professional mobile app development services in ${city.name}, ${city.state}. Custom Android, iOS, and cross-platform apps for local businesses.`}
        serviceUrl={`https://webnovacrew.com/locations/app-development-${city.slug}`}
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
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">{city.name}, {city.state} • Tier {city.tier} City • {city.population}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              App Development Company in {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              {city.description}
            </p>

            <p className="text-lg text-slate-400 mb-8">
              We build <span className="text-blue-400 font-semibold">Android, iOS, and cross-platform apps</span> for {city.name} businesses in {city.industries.slice(0, 3).join(', ')}, and more.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
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
                <div className="text-3xl font-bold text-cyan-400 mb-1">₹25K</div>
                <div className="text-sm text-slate-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">7-45</div>
                <div className="text-sm text-slate-400">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Industries We Serve in {city.name}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Custom app solutions for {city.name}'s key business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
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
              Our App Development Services in {city.name}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Complete mobile app development solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
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
              Why {city.name} Businesses Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Your trusted app development partner in {city.state}
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

      {/* Landmarks */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Serving Businesses Across {city.name}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We work with clients in all major areas of {city.name}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {city.landmarks.map((landmark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 transition-all"
              >
                <MapPin className="w-4 h-4 inline mr-2 text-blue-400" />
                {landmark}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <FounderBio />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              App Development FAQs - {city.name}
            </h2>
            <p className="text-xl text-slate-400">
              Common questions from {city.name} businesses
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
            Ready to Build Your App in {city.name}?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and detailed proposal for your {city.name} app project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact {city.name} Team
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
