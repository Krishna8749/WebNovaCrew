import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const menuVariants = {
  closed: { x: "100%", opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
  open:   { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] } },
};

const backdropVariants = {
  closed: { opacity: 0, transition: { duration: 0.3 } },
  open:   { opacity: 1, transition: { duration: 0.3 } },
};

const linkVariants = {
  closed: { opacity: 0, x: 30 },
  open: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: isScrolled ? "rgba(20, 90, 170, 0.97)" : "#2983DB",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(41,131,219,0.25)"
            : "0 2px 0px rgba(41,131,219,0.0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          paddingTop: isScrolled ? "0.6rem" : "0.9rem",
          paddingBottom: isScrolled ? "0.6rem" : "0.9rem",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#2983DB" }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between text-white max-w-7xl">
          {/* Logo */}
          <Link href="/">
            <motion.a
              className="flex items-center gap-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Logo variant="header" className="h-10 sm:h-12" />
            </motion.a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.a
                  className={`relative py-1 transition-colors font-medium ${
                    location === link.href
                      ? "text-[#B1F51F]"
                      : "text-white/90 hover:text-white"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {link.name}
                  {location === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#B1F51F] rounded-full"
                    />
                  )}
                </motion.a>
              </Link>
            ))}

            {/* CTA Button */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  className="font-bold rounded-full px-5 xl:px-7 text-sm border-0"
                  style={{
                    background: "#B1F51F",
                    color: "#0D1B2E",
                    boxShadow: "0 4px 20px rgba(177,245,31,0.35)",
                  }}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden relative z-60 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed" animate="open" exit="closed"
              className="fixed inset-0 z-40 bg-[#0D1B2E]/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed" animate="open" exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)] lg:hidden flex flex-col"
              style={{ background: "#2983DB" }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
                <Logo variant="header" className="h-9" />
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white p-1"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed" animate="open" exit="closed"
                  >
                    <Link href={link.href}>
                      <a
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                          location === link.href
                            ? "text-[#B1F51F] border border-[#B1F51F]/30 bg-white/10"
                            : "text-white/90 hover:text-white hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        {link.name}
                        <ChevronRight className={`w-4 h-4 ${location === link.href ? "text-[#B1F51F]" : "text-white/30"}`} />
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="px-6 pb-8 pt-4 border-t border-white/15"
              >
                <Link href="/contact">
                  <Button
                    className="w-full font-bold py-5 text-base rounded-xl border-0"
                    style={{
                      background: "#B1F51F",
                      color: "#0D1B2E",
                      boxShadow: "0 4px 20px rgba(177,245,31,0.35)",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started Now 🚀
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
