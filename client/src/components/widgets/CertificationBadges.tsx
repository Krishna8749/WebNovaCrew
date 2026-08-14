import { motion } from "framer-motion";
import { ExternalLink, Star, Award, Shield, CheckCircle, Sparkles, Trophy } from "lucide-react";

// Badge data with styled components instead of external images
const certificationBadges = [
  {
    name: "Clutch",
    link: "https://clutch.co",
    description: "Premier Verified Agency",
    color: "from-slate-800 to-slate-900",
    accent: "#00b67a",
    rating: "4.9"
  },
  {
    name: "GoodFirms",
    link: "https://goodfirms.co",
    description: "Top Mobile App Development",
    color: "from-blue-500 to-blue-600",
    accent: "#fbbf24",
    rating: "5.0"
  },
  {
    name: "SelectedFirms",
    link: "https://selectedfirms.co",
    description: "Top Mobile App Development",
    color: "from-cyan-500 to-blue-500",
    accent: "#22c55e",
    rating: "5.0"
  },
  {
    name: "DesignRush",
    link: "https://designrush.com",
    description: "Best App Development Agency",
    color: "from-violet-600 to-purple-600",
    accent: "#06b6d4",
    rating: "5.0"
  },
  {
    name: "TechReviewer",
    link: "https://techreviewer.co/companies/web-nova-crew",
    description: "Top Web Development Company",
    color: "from-emerald-500 to-teal-600",
    accent: "#f59e0b",
    rating: "5.0"
  },
  {
    name: "TopDevelopers",
    link: "https://topdevelopers.co",
    description: "Top Web Developers",
    color: "from-orange-500 to-red-500",
    accent: "#3b82f6",
    rating: "5.0"
  },
];

export function CertificationBadgesGrid() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 px-5 py-2.5 rounded-full text-base font-bold mb-8 border border-amber-200"
          >
            <Sparkles className="w-5 h-5" />
            Recognized Excellence
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Industry Leaders</span>
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Our work speaks for itself. We're proud to be recognized by the world's leading B2B review platforms.
          </p>
        </motion.div>

        {/* Badge Grid with Styled Components */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certificationBadges.map((badge, index) => (
            <motion.a
              key={badge.name}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group text-center flex flex-col items-center justify-center min-h-[220px]"
            >
              {/* Styled Badge */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4" 
                    style={{ fill: badge.accent, color: badge.accent }}
                  />
                ))}
              </div>
              
              {/* Badge Name */}
              <div className="font-bold text-slate-800 text-lg mb-1">{badge.name}</div>
              <div className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors leading-tight">
                {badge.description}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Animated Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "10+", label: "Countries Served" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-400">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const trustItems = [
    { label: "Clutch", sub: "Top Rated", color: "bg-emerald-500" },
    { label: "GoodFirms", sub: "Verified", color: "bg-blue-500" },
    { label: "DesignRush", sub: "Featured", color: "bg-purple-500" },
    { label: "SelectedFirms", sub: "Top Agency", color: "bg-cyan-500" },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <CheckCircle className="w-4 h-4 text-lime-400" />
          <span className="text-slate-400 text-sm font-medium">Trusted & Verified on Leading Platforms</span>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{item.label}</div>
                <div className="text-xs text-slate-400">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompactBadges() {
  const badges = [
    { label: "Clutch Verified", stars: 5 },
    { label: "GoodFirms Top", stars: 5 },
    { label: "50+ Projects", stars: 0 },
    { label: "100% Satisfaction", stars: 0 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default"
        >
          {badge.stars > 0 && (
            <div className="flex gap-0.5">
              {[...Array(badge.stars)].map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}
          {badge.stars === 0 && <CheckCircle className="w-4 h-4 text-lime-400" />}
          <span>{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Floating Badge Animation Component
export function FloatingBadges() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {certificationBadges.slice(0, 4).map((badge, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-16 opacity-10 rounded-xl bg-gradient-to-br ${badge.color}`}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            rotate: Math.random() * 360 
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-white/50" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
