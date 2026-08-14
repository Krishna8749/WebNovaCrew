import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Star, Quote, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

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
  },
  {
    name: "Fatima Al-Rashid",
    role: "CEO",
    company: "Kuwait Luxury Mart",
    content: "Building an Arabic e-commerce app seemed daunting, but the team handled RTL layouts, KNET integration, and full Arabic typography flawlessly. Launched in 6 weeks. Sales exceeded KWD 50,000 in month one.",
    rating: 5,
    location: "Kuwait City"
  },
  {
    name: "Arjun Mehta",
    role: "Startup Founder",
    company: "FoodieRush",
    content: "Our on-demand food delivery app with live tracking, multi-restaurant support, and instant payouts was delivered in just 30 days. The quality is incredible for the price. 20,000+ orders in first 3 months.",
    rating: 5,
    location: "Bangalore, India"
  },
];

// Duplicated for seamless loop
const row1 = [...defaultTestimonials.slice(0, 4), ...defaultTestimonials.slice(0, 4)];
const row2 = [...defaultTestimonials.slice(4), ...defaultTestimonials.slice(4)];

// Animated counter for avatar fallback colors
const avatarColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-lime-500",
  "from-orange-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-pink-500 to-rose-500",
  "from-yellow-500 to-orange-500",
  "from-teal-500 to-cyan-500",
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      className="relative w-[min(340px,85vw)] sm:w-80 flex-shrink-0 bg-white rounded-2xl p-6 cursor-default"
      style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 20px rgba(41,131,219,0.07)" }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 mb-3" style={{ color: "rgba(41,131,219,0.3)", fill: "rgba(41,131,219,0.05)" }} />

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-5 line-clamp-4" style={{ color: "#4A6080" }}>
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #EEF4FB" }}>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-sm truncate" style={{ color: "#0D1B2E" }}>{testimonial.name}</div>
          <div className="text-xs truncate" style={{ color: "#8CA0B5" }}>{testimonial.role}, {testimonial.company}</div>
          {testimonial.location && (
            <div className="text-xs truncate" style={{ color: "#B0C0D0" }}>📍 {testimonial.location}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Infinite scroll row using requestAnimationFrame via Framer Motion
function InfiniteRow({ testimonials, direction = 1, speed = 0.5 }: {
  testimonials: Testimonial[];
  direction?: 1 | -1;
  speed?: number;
}) {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardWidth = 340 + 24; // card width + gap
  const totalWidth = testimonials.length / 2 * cardWidth; // half because duplicated

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const moveBy = direction * speed * (delta / 16);
    const current = x.get();
    const next = current + moveBy;

    if (direction > 0 && Math.abs(next) >= totalWidth) {
      x.set(next + totalWidth);
    } else if (direction < 0 && next >= 0) {
      x.set(next - totalWidth);
    } else {
      x.set(next);
    }
  });

  return (
    <div
      className="marquee-wrapper overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="marquee-track py-3"
        style={{ x }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. Here's what business owners and executives say about working with Web Nova Crew.",
  testimonials = defaultTestimonials,
  className = ""
}: TestimonialsSectionProps) {
  return (
    <section className={`py-20 bg-white overflow-hidden ${className}`}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="badge-blue mb-4" style={{ fontSize: "0.8rem", padding: "0.3rem 0.9rem" }}
          >
            ⭐ Client Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0D1B2E" }}>
            {title}
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#4A6080" }}>
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed */}
      <div className="space-y-5">
        <InfiniteRow testimonials={row1} direction={-1} speed={0.4} />
        <InfiniteRow testimonials={row2} direction={1} speed={0.35} />
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {[
            { emoji: "⭐", text: "4.9/5 Google Rating" },
            { emoji: "🏆", text: "Top Rated on Clutch" },
            { emoji: "✅", text: "100% Project Success" },
            { emoji: "🌍", text: "Clients in 10+ Countries" },
          ].map((badge, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm cursor-default"
              style={{ background: "#ffffff", border: "1px solid #E0ECF8", boxShadow: "0 2px 10px rgba(41,131,219,0.07)", color: "#0D1B2E" }}
            >
              <span>{badge.emoji}</span>
              {badge.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
