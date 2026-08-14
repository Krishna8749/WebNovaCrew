import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface LeadFormProps {
  defaultService?: string;
  className?: string;
}

export function LeadForm({ defaultService = "", className = "" }: LeadFormProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const services = [
    { value: "web-dev", label: "Web Development" },
    { value: "app-dev", label: "Mobile App Development" },
    { value: "seo-marketing", label: "SEO & Digital Marketing" },
    { value: "erp-crm", label: "ERP & CRM Software" },
    { value: "custom-app", label: "Custom Web Application" },
    { value: "other", label: "Other Business Inquiry" },
  ];

  const budgets = [
    { value: "micro", label: "Under ₹25,000 (Under 100 KWD)" },
    { value: "basic", label: "₹25,000 - ₹50,000 (100 - 200 KWD)" },
    { value: "growth", label: "₹50,000 - ₹1,00,000 (200 - 400 KWD)" },
    { value: "premium", label: "₹1,00,000 - ₹2,50,000 (400 - 1000 KWD)" },
    { value: "enterprise", label: "₹2,50,000+ (1000+ KWD)" },
  ];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !service || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const selectedServiceLabel = services.find((s) => s.value === service)?.label || service;
      const selectedBudgetLabel = budgets.find((b) => b.value === budget)?.label || "Not specified";

      await apiRequest("POST", "/api/contact", {
        name,
        email,
        phone: phone || null,
        service: selectedServiceLabel,
        budget: selectedBudgetLabel,
        message,
        subject: `New Lead Enquiry: ${selectedServiceLabel}`,
      });

      setSuccess(true);
      toast({
        title: "Enquiry Submitted!",
        description: "Thank you! We will get back to you with a custom quote within 24 hours.",
      });

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
      setMessage("");
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "Could not submit your enquiry. Please check your network or try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-lime-500/30 rounded-2xl p-8 text-center text-white"
      >
        <div className="w-16 h-16 bg-lime-500/10 text-lime-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-lime-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-poppins mb-3">Thank You!</h3>
        <p className="text-slate-300 mb-6 max-w-md mx-auto">
          Your lead enquiry was logged successfully. Our tech consultants are analyzing your request and will contact you via email/phone within 24 hours.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          className="bg-lime-500 hover:bg-lime-400 text-blue-950 font-bold px-6 py-2 rounded-full"
        >
          Send Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl relative ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl"></div>

      <h3 className="text-2xl font-bold font-poppins mb-2 text-lime-400">Request a Free Quote</h3>
      <p className="text-slate-400 text-sm mb-6">
        Let us know what you want to build and we will get back to you with timelines and pricing estimates.
      </p>

      <form onSubmit={onSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="E.g. John Doe"
              className="bg-slate-950 border-slate-800 focus:border-lime-500 text-white placeholder-slate-600 rounded-lg h-11"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="bg-slate-950 border-slate-800 focus:border-lime-500 text-white placeholder-slate-600 rounded-lg h-11"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98723 XXXXX"
              className="bg-slate-950 border-slate-800 focus:border-lime-500 text-white placeholder-slate-600 rounded-lg h-11"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Needed *</label>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-lime-500 text-white rounded-lg h-11 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-lime-500"
            >
              <option value="" disabled className="text-slate-600">Select a Service...</option>
              {services.map((s) => (
                <option key={s.value} value={s.value} className="bg-slate-950 text-white">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-lime-500 text-white rounded-lg h-11 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-lime-500"
          >
            <option value="" className="text-slate-600">Select a Budget...</option>
            {budgets.map((b) => (
              <option key={b.value} value={b.value} className="bg-slate-950 text-white">
                {b.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Details *</label>
          <Textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your project, website goals, or required features..."
            className="min-h-[100px] bg-slate-950 border-slate-800 focus:border-lime-500 text-white placeholder-slate-600 rounded-lg"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lime-500 hover:bg-lime-400 text-blue-950 font-bold py-6 text-md rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/10 disabled:opacity-75"
        >
          {isSubmitting ? (
            "Sending Request..."
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Request
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
