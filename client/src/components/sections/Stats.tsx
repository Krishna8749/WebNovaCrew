import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe, Clock, Star } from "lucide-react";
import { useCountUp, parseStatValue } from "@/hooks/useCountUp";

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
  suffix?: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  variant?: "dark" | "light" | "gradient";
  className?: string;
}

const defaultStats: Stat[] = [
  { value: "250+", label: "Apps Delivered", icon: <Award className="w-6 h-6" /> },
  { value: "97%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
  { value: "7+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
  { value: "10+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
];

function AnimatedStat({ stat, variant, index }: { stat: Stat; variant: string; index: number }) {
  const parsed = parseStatValue(stat.value);
  const { ref, displayValue } = useCountUp(parsed.value, 2200, parsed.suffix, parsed.prefix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="text-center cursor-default"
    >
      {stat.icon && (
        <motion.div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
            variant === "light" ? "bg-blue-100 text-blue-600" : "bg-white/10 text-lime-400"
          }`}
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {stat.icon}
        </motion.div>
      )}
      <div className={`text-4xl md:text-5xl font-bold mb-2 tabular-nums ${
        variant === "light" ? "text-blue-600" : "text-lime-400"
      }`}>
        {displayValue}
      </div>
      <div className={`font-medium ${
        variant === "light" ? "text-slate-600" : "text-blue-200"
      }`}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export function StatsSection({
  stats = defaultStats,
  variant = "dark",
  className = ""
}: StatsSectionProps) {
  const variantClasses = {
    dark: "bg-blue-900 text-white",
    light: "bg-slate-50 text-slate-900",
    gradient: "bg-gradient-to-r from-blue-900 to-blue-800 text-white"
  };

  return (
    <section className={`py-16 relative overflow-hidden ${variantClasses[variant]} ${className}`}>
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} variant={variant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact inline stats
export function InlineStats() {
  const compactStats = [
    { value: "250+", label: "Projects" },
    { value: "97%", label: "Satisfaction" },
    { value: "24hr", label: "Response" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {compactStats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
          <div className="text-sm text-slate-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
