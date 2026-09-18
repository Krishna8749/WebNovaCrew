import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe, Clock, Star } from "lucide-react";

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
  { value: "50", suffix: "+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
  { value: "98", suffix: "%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
  { value: "25", suffix: "+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
  { value: "10", suffix: "+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
];

export function StatsSection({ 
  stats = defaultStats, 
  variant = "dark",
  className = ""
}: StatsSectionProps) {
  const variants = {
    dark: "bg-blue-900 text-white",
    light: "bg-slate-50 text-slate-900",
    gradient: "bg-gradient-to-r from-blue-900 to-blue-800 text-white"
  };

  return (
    <section className={`py-16 ${variants[variant]} ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {stat.icon && (
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                  variant === "light" ? "bg-blue-100 text-blue-600" : "bg-white/10 text-lime-400"
                }`}>
                  {stat.icon}
                </div>
              )}
              <div className={`text-4xl md:text-5xl font-bold mb-2 font-poppins ${
                variant === "light" ? "text-blue-600" : "text-lime-400"
              }`}>
                {stat.value}{stat.suffix}
              </div>
              <div className={`font-medium ${
                variant === "light" ? "text-slate-600" : "text-blue-200"
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact inline stats
export function InlineStats() {
  const compactStats = [
    { value: "50+", label: "Projects" },
    { value: "98%", label: "Satisfaction" },
    { value: "24hr", label: "Response" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {compactStats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
          <div className="text-sm text-slate-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
