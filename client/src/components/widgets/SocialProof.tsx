import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function SocialProofBadges() {
  const badges = [
    {
      name: "Clutch",
      rating: "4.9",
      reviews: "25 reviews",
      logo: "https://cdn.clutch.co/s3fs-public/logos/clutch-co-logo.svg",
      color: "bg-[#FF3D2E]",
    },
    {
      name: "Google",
      rating: "5.0",
      reviews: "50 reviews",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      color: "bg-white",
    },
    {
      name: "GoodFirms",
      rating: "4.8",
      reviews: "18 reviews",
      logo: "https://www.goodfirms.co/assets/images/logo.svg",
      color: "bg-[#0066FF]",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 border border-slate-100"
        >
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl font-bold text-slate-900">{badge.rating}</div>
            <div className="text-xs text-slate-500">{badge.reviews}</div>
          </div>
          <div className="border-l border-slate-200 pl-4">
            <div className="text-sm font-bold text-slate-700">{badge.name}</div>
            <div className="text-xs text-slate-400">Verified Reviews</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TrustBadges() {
  const badges = [
    { label: "Google Partner", icon: "🏆" },
    { label: "AWS Certified", icon: "☁️" },
    { label: "ISO 27001", icon: "🔒" },
    { label: "GDPR Compliant", icon: "✅" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className="text-sm font-medium text-slate-700">{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function ClientLogos() {
  // Placeholder for client logos - in production, use actual client logos
  const clients = [
    "TechCorp", "FinanceHub", "HealthFirst", "EduLearn", 
    "TravelGo", "EcoShop", "StartupX", "Enterprise Co"
  ];

  return (
    <div className="py-8">
      <p className="text-center text-slate-500 text-sm mb-6">Trusted by leading companies</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {clients.map((client, index) => (
          <div 
            key={client}
            className="text-xl font-bold text-slate-400"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecentActivity() {
  const activities = [
    { name: "Rahul from Mumbai", action: "requested a quote", time: "2 minutes ago" },
    { name: "Priya from Bangalore", action: "started a project", time: "15 minutes ago" },
    { name: "Amit from Delhi", action: "left a 5-star review", time: "1 hour ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-24 left-6 z-40 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-slate-100"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 shrink-0">
          ✓
        </div>
        <div>
          <p className="text-sm text-slate-700">
            <span className="font-semibold">{activities[0].name}</span> {activities[0].action}
          </p>
          <p className="text-xs text-slate-400">{activities[0].time}</p>
        </div>
      </div>
    </motion.div>
  );
}
