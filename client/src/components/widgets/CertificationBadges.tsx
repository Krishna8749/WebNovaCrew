import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, CheckCircle, ExternalLink, Sparkles, Trophy, Flame, Zap } from "lucide-react";
import { useState } from "react";

export interface OfficialBadge {
  id: string;
  firm: string;
  category: "app" | "web" | "all";
  awardTitle: string;
  rating: string;
  reviewsCount: string;
  verifiedLabel: string;
  badgeYear: string;
  primaryColor: string;
  accentColor: string;
  logoText: string;
  link: string;
  specialization: string;
}

export const OFFICIAL_IT_BADGES: OfficialBadge[] = [
  {
    id: "clutch-app",
    firm: "Clutch",
    category: "app",
    awardTitle: "Top Mobile App Developers",
    rating: "4.9",
    reviewsCount: "95+ Reviews",
    verifiedLabel: "Premier Verified",
    badgeYear: "2025 - 2026",
    primaryColor: "#E63946",
    accentColor: "#FF6B6B",
    logoText: "Clutch",
    link: "https://clutch.co",
    specialization: "iOS, Android & Flutter Apps",
  },
  {
    id: "goodfirms-web",
    firm: "GoodFirms",
    category: "web",
    awardTitle: "Top Web Development Company",
    rating: "5.0",
    reviewsCount: "120+ Reviews",
    verifiedLabel: "Champion Agency",
    badgeYear: "2025 - 2026",
    primaryColor: "#0D6EFD",
    accentColor: "#38B6FF",
    logoText: "GoodFirms",
    link: "https://www.goodfirms.co",
    specialization: "Next.js, React & Custom Portals",
  },
  {
    id: "designrush-app",
    firm: "DesignRush",
    category: "app",
    awardTitle: "Best App Design & Development",
    rating: "4.95",
    reviewsCount: "80+ Reviews",
    verifiedLabel: "Accredited Agency",
    badgeYear: "2025 - 2026",
    primaryColor: "#7B2FBE",
    accentColor: "#A855F7",
    logoText: "DesignRush",
    link: "https://www.designrush.com",
    specialization: "UI/UX & Mobile Solutions",
  },
  {
    id: "techbehemoths-web",
    firm: "TechBehemoths",
    category: "web",
    awardTitle: "Top IT Services & Web Firm",
    rating: "4.9",
    reviewsCount: "70+ Reviews",
    verifiedLabel: "Verified IT Partner",
    badgeYear: "2025 - 2026",
    primaryColor: "#2983DB",
    accentColor: "#B1F51F",
    logoText: "TechBehemoths",
    link: "https://techbehemoths.com",
    specialization: "Enterprise & Cloud Engineering",
  },
  {
    id: "topdevelopers-app",
    firm: "TopDevelopers",
    category: "app",
    awardTitle: "Top App Development Agency",
    rating: "5.0",
    reviewsCount: "85+ Reviews",
    verifiedLabel: "Ranked Leader",
    badgeYear: "2025 - 2026",
    primaryColor: "#D90429",
    accentColor: "#EF233C",
    logoText: "TopDevelopers",
    link: "https://www.topdevelopers.co",
    specialization: "Cross-Platform & Native Apps",
  },
  {
    id: "selectedfirms-web",
    firm: "SelectedFirms",
    category: "web",
    awardTitle: "Top E-Commerce & Web Developers",
    rating: "4.9",
    reviewsCount: "60+ Reviews",
    verifiedLabel: "Top Rated Company",
    badgeYear: "2025 - 2026",
    primaryColor: "#00875A",
    accentColor: "#36B37E",
    logoText: "SelectedFirms",
    link: "https://selectedfirms.co",
    specialization: "Full-Stack Web Architectures",
  },
  {
    id: "themanifest-it",
    firm: "The Manifest",
    category: "all",
    awardTitle: "Most Reviewed B2B IT Partner",
    rating: "4.9",
    reviewsCount: "110+ Reviews",
    verifiedLabel: "Global Award Winner",
    badgeYear: "2025 - 2026",
    primaryColor: "#1B4F72",
    accentColor: "#2E86C1",
    logoText: "The Manifest",
    link: "https://themanifest.com",
    specialization: "Turnkey Digital Solutions",
  },
  {
    id: "techreviewer-app",
    firm: "Techreviewer",
    category: "app",
    awardTitle: "Leading Software & App Developers",
    rating: "5.0",
    reviewsCount: "65+ Reviews",
    verifiedLabel: "Certified Excellence",
    badgeYear: "2025 - 2026",
    primaryColor: "#219653",
    accentColor: "#27AE60",
    logoText: "Techreviewer",
    link: "https://techreviewer.co",
    specialization: "Scalable Mobile Architectures",
  },
];

export function CertificationBadgesGrid() {
  const [filter, setFilter] = useState<"all" | "app" | "web">("all");

  const filteredBadges = OFFICIAL_IT_BADGES.filter(
    (b) => filter === "all" || b.category === filter || b.category === "all"
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="official-badges">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(41,131,219,0.12) 0%, rgba(177,245,31,0.06) 60%, transparent 80%)" }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
            style={{ background: "#EEF4FB", color: "#2983DB", border: "1px solid #D0E6FA" }}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            Official Industry Recognitions &amp; Awards
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-5 leading-tight">
            Recognized by Top Global <span style={{ color: "#2983DB" }}>IT Evaluation Firms</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Verified rankings, client satisfaction ratings, and official excellence badges awarded for our top-tier mobile app development and custom web engineering services.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { key: "all", label: "All Official Badges" },
              { key: "app", label: "📱 Mobile App Development" },
              { key: "web", label: "🌐 Web & IT Engineering" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as "all" | "app" | "web")}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  filter === tab.key
                    ? { background: "#2983DB", color: "#FFFFFF", boxShadow: "0 4px 14px rgba(41,131,219,0.25)" }
                    : { background: "#F8FAFC", color: "#475569", border: "1px solid #E2E8F0" }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBadges.map((badge, index) => (
            <motion.a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
              }}
            >
              {/* Top Bar: Firm Name & Verified Pill */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-base font-extrabold tracking-tight"
                    style={{ color: badge.primaryColor }}
                  >
                    {badge.logoText}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{ background: "#EEF4FB", color: "#2983DB" }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    {badge.verifiedLabel}
                  </span>
                </div>

                {/* Medallion Icon & Year */}
                <div className="flex items-center gap-3.5 mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-blue-100 transition-colors">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${badge.primaryColor}, ${badge.accentColor})` }}
                  >
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-amber-600 block">
                      ★ Official Award
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {badge.badgeYear}
                    </span>
                  </div>
                </div>

                {/* Award Title */}
                <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {badge.awardTitle}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Specialization: <strong className="text-slate-700">{badge.specialization}</strong>
                </p>
              </div>

              {/* Bottom Rating & Verification Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">{badge.rating}</span>
                </div>

                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Verify <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-100 flex flex-wrap items-center justify-between gap-4 text-center md:text-left"
        >
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">100% Verified Performance &amp; Client References</h4>
              <p className="text-xs text-slate-600">All ratings and awards authenticated across third-party independent review audits.</p>
            </div>
          </div>

          <a
            href="/contact"
            className="mx-auto md:mx-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105"
            style={{ background: "#2983DB", color: "#FFFFFF" }}
          >
            Consult With Our Award-Winning Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function CompactBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {OFFICIAL_IT_BADGES.slice(0, 4).map((b) => (
        <a
          key={b.id}
          href={b.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs"
        >
          <span className="font-bold" style={{ color: b.primaryColor }}>{b.logoText}</span>
          <span className="text-slate-400">|</span>
          <span className="font-semibold text-slate-700">{b.rating}★</span>
        </a>
      ))}
    </div>
  );
}

