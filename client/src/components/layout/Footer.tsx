import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";
import { staggerContainer, staggerFadeUp } from "@/lib/animations";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/61575876269804", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://x.com/WebNovaCrew", label: "Twitter/X", color: "hover:bg-sky-500" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/web-nova-crew", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Instagram, href: "https://www.instagram.com/web_nova_crew", label: "Instagram", color: "hover:bg-pink-600" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/team", label: "Our Team" },
  { href: "/founder", label: "Founder" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/web-app-development", label: "Custom Web Development" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/ecommerce-app-development", label: "E-Commerce Solutions" },
  { href: "/services/ai-app-development", label: "AI App Development" },
  { href: "/services/flutter-app-development", label: "Flutter Development" },
  { href: "/services/react-native-development", label: "React Native" },
  { href: "/services/erp-crm-development", label: "ERP & CRM Systems" },
];

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative text-slate-300 overflow-hidden" style={{ background: "#0D1B2E" }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(41,131,219,0.12)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl" style={{ background: "rgba(177,245,31,0.06)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Top border gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(41,131,219,0.6), transparent)" }} />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1 — Brand */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-6">
              <Logo variant="footer" className="h-12" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              India's No.1 Custom Web & App Development Agency. We transform ideas into digital powerhouses using cutting-edge technology.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 ${color}`}
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs border-l-4 border-lime-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <motion.a
                      className="text-sm text-slate-400 hover:text-lime-400 transition-colors flex items-center gap-1.5 group"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-lime-500 transition-colors" />
                      {label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Services */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs border-l-4 border-lime-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <motion.a
                      className="text-sm text-slate-400 hover:text-lime-400 transition-colors flex items-center gap-1.5 group"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-lime-500 transition-colors" />
                      {label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs border-l-4 border-lime-500 pl-3">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  2nd Floor, Shree Plaza Complex, Vikas Nagar, Ring Road, Lucknow 226022, UP, India
                </span>
              </li>
              <li>
                <motion.a
                  href="tel:+919872364476"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
                  whileHover={{ x: 2 }}
                >
                  <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                  +91 98723 64476
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:info@webnovacrew.com"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
                  whileHover={{ x: 2 }}
                >
                  <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                  info@webnovacrew.com
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
            </ul>

            {/* Mini CTA */}
            <motion.a
              href="https://wa.me/919872364476"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 hover:bg-green-500/25 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 WhatsApp Us Now
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600"
        >
          <p>© {new Date().getFullYear()} Web Nova Crew. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy-policy">
              <a className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </Link>
            <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
