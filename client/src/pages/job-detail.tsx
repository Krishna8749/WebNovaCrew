import { useState } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Briefcase, IndianRupee, ArrowLeft, CheckCircle2, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { getJobBySlug } from "@/data/jobs";

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const job = getJobBySlug(slug || "");

  const [form, setForm] = useState({
    name: "", email: "", phone: "", linkedin: "", portfolio: "", coverLetter: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setErrorMsg("Name and email are required.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          jobTitle: job?.title ?? "Unknown Position",
          jobSlug: slug,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-white font-sans pt-20">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Job Not Found</h1>
          <p className="text-slate-600 mb-8">This position may have been filled or removed.</p>
          <Link href="/careers">
            <Button>View All Openings</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO
        title={`${job.title} - Careers at Web Nova Crew`}
        description={job.description}
        keywords={`${job.title} job, ${job.department} careers, web development jobs india, ${job.location}`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Careers", url: "https://webnovacrew.com/careers" },
        { name: job.title, url: `https://webnovacrew.com/careers/${job.slug}` }
      ]} />

      <Navbar />

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <Link href="/careers">
            <Button variant="ghost" className="mb-6 text-slate-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-lime-100 text-lime-700 px-3 py-1 rounded-full font-bold">{job.type}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">{job.department}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">{job.title}</h1>

            <div className="flex flex-wrap gap-6 text-slate-600">
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> {job.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-blue-600" /> {job.experience}</span>
              <span className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-600" /> {job.type}</span>
              <span className="flex items-center gap-2"><IndianRupee className="w-5 h-5 text-blue-600" /> {job.salary}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left â€” details */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Role</h2>
                <p className="text-slate-600 leading-relaxed">{job.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Nice to Have</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar â€” Application Form */}
            <div className="lg:col-span-1">
              <Card className="border-none shadow-xl sticky top-28">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Apply for This Position</h3>

                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#B1F51F" }} />
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Application Submitted!</h4>
                        <p className="text-slate-600 text-sm">
                          We've received your application and will get back to you within 3â€“5 business days. Check your inbox for a confirmation email.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form key="form" className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name *</label>
                          <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="bg-slate-50" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Email *</label>
                          <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="bg-slate-50" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                          <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="bg-slate-50" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">LinkedIn Profile</label>
                          <Input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." className="bg-slate-50" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Portfolio/GitHub</label>
                          <Input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://..." className="bg-slate-50" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Cover Letter</label>
                          <Textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} placeholder="Tell us why you're interested in this role..." className="bg-slate-50 min-h-[100px]" />
                        </div>

                        {status === "error" && (
                          <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">{errorMsg}</p>
                        )}

                        <Button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full font-bold rounded-full"
                          style={{ background: "#2983DB", color: "white" }}
                        >
                          {status === "loading" ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submittingâ€¦</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Submit Application</>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>

                  <p className="text-xs text-slate-400 mt-4 text-center">
                    Or email your resume to{" "}
                    <a href="mailto:careers@webnovacrew.com" className="text-blue-600 hover:underline">
                      careers@webnovacrew.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
