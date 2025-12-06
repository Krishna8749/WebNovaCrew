import { Link } from "wouter";
import { Rocket, Globe, Users, Phone, MessageCircle, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-4 border-t border-slate-900">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-lime-400" />
              <span className="font-poppins font-bold text-xl text-white">WEB NOVA CREW</span>
          </div>
          <p className="mb-6 leading-relaxed text-slate-400">
            India's No.1 Custom Web & App Development Agency. We transform ideas into digital powerhouses using cutting-edge technology.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-500 hover:text-slate-900 transition-all cursor-pointer group">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-l-4 border-lime-500 pl-3">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span> Home</a></Link></li>
            <li><Link href="/about"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> About Us</a></Link></li>
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Services</a></Link></li>
            <li><Link href="/portfolio"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Portfolio</a></Link></li>
            <li><Link href="/blog"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Blog</a></Link></li>
            <li><Link href="/pricing"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Pricing</a></Link></li>
            <li><Link href="/team"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Our Team</a></Link></li>
            <li><Link href="/careers"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Careers</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-lime-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Contact</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-l-4 border-lime-500 pl-3">Our Services</h4>
          <ul className="space-y-3">
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors">Custom Web Development</a></Link></li>
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors">Mobile App Development</a></Link></li>
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors">E-Commerce Solutions</a></Link></li>
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors">UI/UX Design</a></Link></li>
            <li><Link href="/services"><a className="hover:text-lime-400 transition-colors">SEO & Digital Marketing</a></Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-l-4 border-lime-500 pl-3">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lime-400 mt-1 shrink-0" /> 
              <span>2nd Floor, Shree Plaza Complex, Vikas Nagar, Ring Road, Lucknow 226022, UP, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-lime-400 shrink-0" /> 
              <a href="tel:+919872364476" className="hover:text-white">+91 98723 64476</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lime-400 shrink-0" /> 
              <a href="mailto:info@webnovacrew.com" className="hover:text-white">info@webnovacrew.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Web Nova Crew. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="#" className="hover:text-slate-300">Sitemap</a>
        </div>
      </div>

    </footer>
  );
}
