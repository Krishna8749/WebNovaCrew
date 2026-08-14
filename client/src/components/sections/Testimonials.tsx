import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  location?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechFlow India",
    content: "I was skeptical at first—we'd been burned by agencies before. But Web Nova Crew delivered a 300% increase in qualified leads within 90 days. Our website now generates ₹15 lakhs in monthly revenue. They're not just developers; they're growth partners.",
    rating: 5,
    location: "Delhi, India"
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "EcoStyle Fashion",
    content: "Before Web Nova Crew, our e-commerce store converted at 0.8%. After their redesign? 3.2%. That's 4x more sales from the same traffic. The site loads in 1.8 seconds and looks stunning. Best ₹3 lakh investment I've ever made.",
    rating: 5,
    location: "Mumbai, India"
  },
  {
    name: "Dr. Amit Patel",
    role: "Director",
    company: "HealthFirst Clinics",
    content: "We needed a HIPAA-compliant telemedicine app, and most agencies quoted 8-12 months. Web Nova Crew delivered in 5 months with zero security issues. Patient bookings increased 400%. They saved us from losing patients to competitors.",
    rating: 5,
    location: "Bangalore, India"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Head",
    company: "GlobalTech Solutions",
    content: "We were invisible on Google. Page 5 for our main keywords. Web Nova Crew got us to Page 1 in 4 months. Organic traffic is up 500%, and we've reduced our Google Ads spend by 60%. The ROI is insane.",
    rating: 5,
    location: "California, USA"
  },
  {
    name: "Vikram Singh",
    role: "Co-Founder",
    company: "PropEase Real Estate",
    content: "Our old website was embarrassing. Leads were going to competitors with better sites. Web Nova Crew built us a platform that handles 50,000+ listings and generates ₹2 crore in monthly transactions. Worth every rupee.",
    rating: 5,
    location: "Chandigarh, India"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "FinanceHub",
    content: "We interviewed 15 agencies. Web Nova Crew was the only one that understood fintech security requirements. Our Flutter app now serves 100,000+ users with 99.99% uptime. They're our go-to for all development work.",
    rating: 5,
    location: "Singapore"
  }
];

export function TestimonialsSection({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. Here's what business owners and executives say about working with Web Nova Crew.",
  testimonials = defaultTestimonials,
  className = ""
}: TestimonialsSectionProps) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-blue-100 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      {testimonial.location && (
                        <div className="text-xs text-slate-400">{testimonial.location}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6 font-medium">Trusted by 50+ businesses across India and globally</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["⭐ 4.9/5 Google Rating", "🏆 Top Rated on Clutch", "✅ 100% Project Success", "🌍 Clients in 10+ Countries"].map((badge, i) => (
              <span key={i} className="text-slate-600 font-semibold bg-slate-100 px-4 py-2 rounded-full text-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
