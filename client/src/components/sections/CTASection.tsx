import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, Calendar, Rocket } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "secondary" | "gradient";
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPhone?: boolean;
}

export function CTASection({
  variant = "primary",
  title = "Ready to Transform Your Digital Presence?",
  subtitle = "Let's build something extraordinary together. Get a free consultation and custom quote for your project.",
  primaryButtonText = "Start Your Project",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio",
  showPhone = true
}: CTASectionProps) {
  const variants = {
    primary: "bg-violet-900 text-white",
    secondary: "bg-orange-400 text-violet-900",
    gradient: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
  };

  return (
    <section className={`py-20 px-4 relative overflow-hidden ${variants[variant]}`}>
      {/* Background Elements */}
      {variant !== "secondary" && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        </>
      )}

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Rocket className={`w-5 h-5 ${variant === "secondary" ? "text-violet-600" : "text-orange-400"}`} />
            <span className="text-sm font-semibold">Free Consultation Available</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
            {title}
          </h2>
          
          <p className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
            variant === "secondary" ? "text-violet-800" : "text-violet-100"
          }`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={primaryButtonLink}>
              <Button 
                size="lg" 
                className={`font-bold text-lg px-8 py-7 rounded-full shadow-xl transition-all hover:scale-105 ${
                  variant === "secondary" 
                    ? "bg-violet-900 text-white hover:bg-violet-800" 
                    : "bg-orange-500 text-violet-900 hover:bg-orange-400"
                }`}
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link href={secondaryButtonLink}>
              <Button 
                size="lg" 
                variant="outline"
                className={`font-bold text-lg px-8 py-7 rounded-full ${
                  variant === "secondary"
                    ? "border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>

          {showPhone && (
            <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 ${
              variant === "secondary" ? "text-violet-800" : "text-violet-200"
            }`}>
              <a href="tel:+918360723410" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+91 83607 23410</span>
              </a>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Compact CTA for inline use
export function InlineCTA({ 
  text = "Need a custom solution?",
  buttonText = "Get Free Quote",
  link = "/contact"
}: { text?: string; buttonText?: string; link?: string }) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-lime-50 rounded-2xl p-8 text-center border border-blue-100">
      <p className="text-slate-700 font-medium mb-4">{text}</p>
      <Link href={link}>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full px-6">
          {buttonText} <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}
