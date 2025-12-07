import { motion } from "framer-motion";
import { User, MapPin, Briefcase, Award, TrendingUp, Calendar, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function FounderBio() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Founder
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The visionary behind Web Nova Crew's success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Knowledge Panel Style Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
                  SR
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Sateesh Kumar Rawat</h3>
                <p className="text-slate-400 text-sm mb-4">Founder & CEO</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Born</p>
                    <p className="text-white font-medium">2005 (Age 20)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Hometown</p>
                    <p className="text-white font-medium">Lucknow, UP</p>
                    <p className="text-slate-500 text-xs mt-1">Roots: Musalmanabad, Sapahaiyya, Gauganj Market, Mallawan, Sandila & Ludhiana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Companies</p>
                    <ul className="text-white font-medium space-y-1 mt-1">
                      <li>• Web Nova Crew</li>
                      <li>• Estato (Co-Founder)</li>
                      <li>• Ubiduby Fashion (Partner)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Known For</p>
                    <p className="text-white font-medium">Young Indian tech entrepreneur building AI-driven real estate & fashion brands</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Notable Achievement</p>
                    <p className="text-white font-medium">Built digital apps earning ₹20,000/month at age 15-16 during lockdown</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <Link href="/founder">
                  <a className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="font-medium">Read Full Story</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">The Journey</h4>
              
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  At just <span className="text-blue-400 font-semibold">20 years of age</span>, Sateesh Kumar Rawat stands among India's most inspiring next-gen tech entrepreneurs. Born in 2005 and raised in modest circumstances, his journey from a school student with no shoes to a self-made developer earning international income is a story of discipline, resilience, and unstoppable passion.
                </p>

                <div>
                  <h5 className="text-xl font-semibold text-white mb-3">From Struggle to Success</h5>
                  <p>
                    Raised in a financially challenging environment, Sateesh's father was a street vendor, and buying school uniforms, notebooks, and shoes was often impossible. He borrowed his brother's old shoes, wore matching clothes instead of proper uniforms, and could rarely print notes. Most classmates refused to share notes with him—except one girl, <span className="text-blue-400">Simran Sahni</span>, who supported him quietly and respectfully.
                  </p>
                </div>

                <div>
                  <h5 className="text-xl font-semibold text-white mb-3">The Lockdown Breakthrough</h5>
                  <p>
                    During the COVID-19 lockdown, when the world was closing down, Sateesh was opening his future. He learned coding, app development, and built international friendships with people from France, Cameroon, Nigeria, Canada, and USA. Within months, he began <span className="text-blue-400 font-semibold">earning ₹20,000 per month at age 15-16</span>.
                  </p>
                </div>

                <div>
                  <h5 className="text-xl font-semibold text-white mb-3">Building Companies</h5>
                  <p>
                    With his earnings and support from his brother Vipin, he bought his first PC—which became the birthstone of all future companies. In 2023, he founded <span className="text-blue-400 font-semibold">Web Nova Crew</span>, now one of Lucknow's rapidly growing digital agencies.
                  </p>
                  <p className="mt-3">
                    Seeing his brother Bipin struggling to find a room for rent in Lucknow, he built <span className="text-blue-400 font-semibold">Estato</span>, an AI-driven property renting & selling platform. His middle brother <span className="text-blue-400">Raj Kumar Rawat</span> played an important role in supporting Estato's growth.
                  </p>
                  <p className="mt-3">
                    In 2025, he partnered with <span className="text-blue-400">Radhika Gupta</span> to launch <span className="text-blue-400 font-semibold">Ubiduby</span> – The Unwritten Rules of Style, a premium fashion brand.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-6 mt-6">
                  <p className="text-lg italic text-blue-300">
                    "You never lose until you stop trying. Every failure is a version update."
                  </p>
                  <p className="text-sm text-slate-400 mt-2">— Sateesh Kumar Rawat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
