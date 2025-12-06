import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-blue-900 shadow-md py-3" : "bg-blue-900/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white">
          <Link href="/">
            <a className="flex items-center gap-2 group">
               <div className="relative flex items-center justify-center w-10 h-10 bg-lime-400 rounded-lg transform -rotate-3 shadow-lg group-hover:rotate-0 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-blue-900" />
               </div>
               <div className="flex flex-col">
                  <span className="font-poppins font-bold text-xl leading-none tracking-tight">WEB NOVA</span>
                  <span className="font-poppins font-bold text-sm text-lime-400 leading-none tracking-widest">CREW</span>
               </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={`transition-colors relative group ${location === link.href ? "text-lime-400" : "hover:text-lime-300"}`}>
                  {link.name}
                  {location === link.href && (
                    <motion.span layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-400" />
                  )}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-lime-500 text-blue-900 hover:bg-lime-400 font-bold rounded-full px-6">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:text-lime-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-blue-900 pt-24 px-6 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-6 text-white text-xl font-semibold">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between border-b border-blue-800 pb-4 hover:text-lime-400 transition-colors">
                    {link.name}
                    <ChevronDown className="w-5 h-5 -rotate-90 text-blue-500" />
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-lime-500 text-blue-900 hover:bg-lime-400 w-full mt-4 font-bold py-6 text-lg">
                  Get Started Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
