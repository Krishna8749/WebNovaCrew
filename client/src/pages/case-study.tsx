import { useParams, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(slug || "");

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white font-sans pt-20">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other case studies
  const otherCaseStudies = caseStudies.filter(cs => cs.id !== caseStudy.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title={`${caseStudy.title} - Case Study`}
        description={`${caseStudy.client} case study: ${caseStudy.challenge.substring(0, 150)}...`}
        keywords={`${caseStudy.industry} case study, ${caseStudy.services.join(", ")}, ${caseStudy.technologies.join(", ")}`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Portfolio", url: "https://webnovacrew.com/portfolio" },
        { name: caseStudy.title, url: `https://webnovacrew.com/case-study/${caseStudy.slug}` }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-96 md:h-[500px]">
          <img 
            src={caseStudy.heroImage} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30"></div>
        </div>
        
        <div className="relative container mx-auto max-w-6xl px-4 pt-8 pb-20 md:pb-32">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-6 text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl pt-20 md:pt-32"
          >
            <span className="inline-block bg-lime-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
              {caseStudy.industry}
            </span>
            <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-white/80">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4" /> {caseStudy.client}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" /> {caseStudy.duration}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-12 bg-blue-900 text-white -mt-1">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">{result.value}</div>
                <div className="text-blue-200 font-medium">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg font-bold">1</span>
                  The Challenge
                </h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {caseStudy.challenge}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-bold">2</span>
                  Our Solution
                </h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {caseStudy.solution}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg font-bold">3</span>
                  The Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{result.value}</div>
                        <div className="font-semibold text-slate-900 mb-1">{result.metric}</div>
                        <div className="text-sm text-slate-500">{result.description}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl p-8"
                >
                  <Quote className="w-12 h-12 text-blue-200 mb-4" />
                  <blockquote className="text-xl text-slate-700 italic mb-6 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{caseStudy.testimonial.author}</div>
                      <div className="text-slate-500">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Services */}
              <Card className="border-none shadow-md sticky top-28">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Services Provided</h3>
                  <div className="space-y-2 mb-6">
                    {caseStudy.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-lime-500" />
                        {service}
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold text-slate-900 mb-4">Project Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Client</span>
                      <span className="font-medium text-slate-900">{caseStudy.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Industry</span>
                      <span className="font-medium text-slate-900">{caseStudy.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-medium text-slate-900">{caseStudy.duration}</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      Start Similar Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">More Case Studies</h2>
            <Link href="/portfolio">
              <Button variant="ghost" className="text-blue-600">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherCaseStudies.map((cs) => (
              <Link key={cs.id} href={`/case-study/${cs.slug}`}>
                <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={cs.heroImage} 
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase">{cs.industry}</span>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 line-clamp-2">
                      {cs.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2">{cs.client}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Achieve Similar Results?"
        subtitle="Let's discuss how we can help transform your business with a custom solution."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
}
