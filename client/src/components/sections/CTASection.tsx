import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, Calendar, Rocket, Sparkles } from "lucide-react";

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
  const variantClasses = {
    primary: "bg-blue-900 text-white",
    secondary: "bg-lime-400 text-blue-900",
    gradient: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
  };

  return (
    <section className={`py-20 px-4 relative overflow-hidden ${variantClasses[variant]}`}>
      {/* Animated background blobs */}
      {variant !== "secondary" && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rotating ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className={`w-4 h-4 ${variant === "secondary" ? "text-blue-600" : "text-lime-400"}`} />
            </motion.span>
            <span className="text-sm font-semibold">Free Consultation Available</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              variant === "secondary" ? "text-blue-800" : "text-blue-100"
            }`}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={primaryButtonLink}>
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Button
                  size="lg"
                  className={`font-bold text-base sm:text-lg px-8 py-6 sm:py-7 rounded-full shadow-xl ${
                    variant === "secondary"
                      ? "bg-blue-900 text-white hover:bg-blue-800"
                      : "bg-lime-500 text-blue-900 hover:bg-lime-400"
                  }`}
                >
                  {primaryButtonText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>

            <Link href={secondaryButtonLink}>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className={`font-bold text-base sm:text-lg px-8 py-6 sm:py-7 rounded-full ${
                    variant === "secondary"
                      ? "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {secondaryButtonText}
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Phone + response time */}
          {showPhone && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base ${
                variant === "secondary" ? "text-blue-800" : "text-blue-200"
              }`}
            >
              <motion.a
                href="tel:+919872364476"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors font-semibold"
                whileHover={{ x: 2 }}
              >
                <Phone className="w-4 h-4" />
                +91 98723 64476
              </motion.a>
              <span className="hidden sm:block text-white/30">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
            </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-50 to-lime-50 rounded-2xl p-8 text-center border border-blue-100"
    >
      <p className="text-slate-700 font-medium mb-4">{text}</p>
      <Link href={link}>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6">
            {buttonText} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
}
