import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { BreadcrumbSchema, PersonSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { 
  User, MapPin, Briefcase, Award, TrendingUp, Calendar, 
  Heart, Lightbulb, Target, Rocket, Users, Code, 
  Building2, ShoppingBag, Home, BookOpen, Quote
} from "lucide-react";

export default function Founder() {
  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Started Coding at 11",
      description: "Began blogging on Blogspot in Class 6, learning through trial and error"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "₹20K/Month at 15-16",
      description: "Built international client base during COVID lockdown"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Founded Web Nova Crew",
      description: "Launched one of Lucknow's fastest-growing digital agencies in 2023"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Co-Founded Estato",
      description: "AI-powered property marketplace transforming Lucknow's real estate"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Partner at Ubiduby",
      description: "Premium fashion brand - The Unwritten Rules of Style"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Self-Made Entrepreneur",
      description: "Built multiple businesses with zero funding, pure determination"
    }
  ];

  const timeline = [
    {
      year: "2005",
      title: "Born in Uttar Pradesh",
      description: "Born into a modest family, father worked as a street vendor. Grew up between Lucknow and Ludhiana."
    },
    {
      year: "2016",
      title: "Digital Journey Begins (Age 11)",
      description: "Started blogging on Blogspot in Class 6. First attempt failed after a full year, but the learning never stopped."
    },
    {
      year: "2020",
      title: "Lockdown Breakthrough (Age 15)",
      description: "During COVID-19, learned coding and app development. Built international friendships and started earning ₹20,000/month."
    },
    {
      year: "2021",
      title: "First PC Investment",
      description: "Bought HP CPU and Acer 21-inch monitor with earnings. Brother Vipin supported with ₹4,000. This PC became the birthstone of all future companies."
    },
    {
      year: "2022",
      title: "Balancing School & Business",
      description: "Managed Class 10 board exams while freelancing, coding, and building startup prototypes. Failed many times but never gave up."
    },
    {
      year: "2023",
      title: "Web Nova Crew Founded",
      description: "Launched Web Nova Crew with no mentor, no investor, just determination. Started building digital solutions for businesses."
    },
    {
      year: "2023",
      title: "Estato Launched",
      description: "Seeing brother Bipin struggle to find rental rooms, built Estato - an AI-driven property platform for Lucknow. Brother Raj Kumar Rawat supported its growth."
    },
    {
      year: "2025",
      title: "Ubiduby Fashion (Age 20)",
      description: "Partnered with Radhika Gupta to launch Ubiduby - a premium fashion brand redefining modern style."
    }
  ];

  const keyPeople = [
    {
      name: "Vipin Kumar Rawat",
      role: "Elder Brother",
      contribution: "Supported with ₹4,000 to complete first PC purchase - the foundation of all ventures"
    },
    {
      name: "Raj Kumar Rawat",
      role: "Middle Brother",
      contribution: "Key contributor to Estato's development and early success"
    },
    {
      name: "Bipin Kumar Rawat",
      role: "Brother",
      contribution: "His struggle to find rental rooms inspired the creation of Estato"
    },
    {
      name: "Radhika Gupta",
      role: "Business Partner",
      contribution: "Co-founder of Ubiduby Fashion, supporter in early stages"
    },
    {
      name: "Simran Sahni",
      role: "School Friend",
      contribution: "First academic supporter who shared notes when others refused"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="Sateesh Kumar Rawat - Founder & CEO of Web Nova Crew | Young Indian Entrepreneur"
        description="Meet Sateesh Kumar Rawat, 20-year-old founder of Web Nova Crew, Estato, and Ubiduby. From earning ₹20K/month at 15 to building multiple tech companies. Self-made Indian entrepreneur story."
        keywords="Sateesh Kumar Rawat, Founder of Web Nova Crew, CEO Web Nova Crew, Founder of Estato, Ubiduby Founder, Young Indian Entrepreneur Lucknow, Self-made tech founder India, Estato app Lucknow"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Founder", url: "https://webnovacrew.com/founder" }
      ]} />
      <PersonSchema 
        name="Sateesh Kumar Rawat"
        jobTitle="Founder & CEO"
        description="Young Indian tech entrepreneur, founder of Web Nova Crew, Estato, and partner at Ubiduby Fashion"
        url="https://webnovacrew.com/founder"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              SR
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Sateesh Kumar Rawat
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-400 mb-6 font-semibold">
              Founder & CEO - Web Nova Crew
            </p>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              At just 20 years of age, Sateesh Kumar Rawat stands among India's most inspiring next-gen tech entrepreneurs. From poverty and repeated failures to building multiple successful companies—this is a story of unstoppable determination.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Born 2005 • Age 20</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Lucknow, UP, India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">3 Companies</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
              <Quote className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <p className="text-xl italic text-slate-200 mb-4">
                "You never lose until you stop trying. Every failure is a version update."
              </p>
              <p className="text-sm text-slate-400">— Sateesh Kumar Rawat</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-slate-400">
              Milestones of a self-made entrepreneur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-slate-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Complete Story
            </h2>
            <p className="text-xl text-slate-400">
              From struggle to success - an inspiring journey
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Early Life */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="text-blue-400" />
                Early Life & Struggles
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Sateesh Kumar Rawat was born in 2005 in Uttar Pradesh and spent his childhood between Lucknow and Ludhiana (New Sunder Nagar, MBD Mall area). Coming from a financially modest family, his father worked as a street vendor, and even basic educational needs were difficult to afford.
                </p>
                <p>
                  School uniforms, shoes, notebooks—everything was a challenge. He borrowed his brother's old shoes, wore matching clothes instead of proper uniforms, and could rarely print notes. Many students avoided sharing notes with him because he couldn't afford printed copies.
                </p>
                <p>
                  Only one classmate, <span className="text-blue-400 font-semibold">Simran Sahni</span>, helped him academically—an act that deeply impacted his life and kept him motivated during the toughest times.
                </p>
              </div>
            </motion.div>

            {/* Digital Beginnings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lightbulb className="text-blue-400" />
                Digital Beginnings
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  At age 11, while in Class 6, Sateesh began blogging on Blogspot. Despite one full year of hard work, he failed—mainly due to zero technical knowledge. He next tried to grow on YouTube but again failed due to lack of equipment and resources.
                </p>
                <p>
                  But failure became fuel. Each setback taught him something new, and he never stopped learning.
                </p>
              </div>
            </motion.div>

            {/* Lockdown Breakthrough */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Rocket className="text-blue-400" />
                The Lockdown Breakthrough
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The COVID-19 lockdown was the turning point. While the world struggled, Sateesh used his time to learn programming and app development. He started earning through international clients, making <span className="text-blue-400 font-semibold">₹20,000/month as a teenager</span> using only a smartphone.
                </p>
                <p>
                  He built international friendships with people from France, Cameroon, Nigeria, Canada, and USA—expanding his worldview and business opportunities.
                </p>
                <p>
                  With his first savings and support from his brother <span className="text-blue-400">Vipin</span> (who contributed ₹4,000), he bought a computer setup: HP CPU and Acer 21-inch Monitor. This PC became the birthstone of all future companies.
                </p>
              </div>
            </motion.div>

            {/* School & Entrepreneurship */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <BookOpen className="text-blue-400" />
                Balancing School & Entrepreneurship
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  During Class 10, Sateesh handled board exams, freelance coding, app development, and early startup experiments simultaneously. He tried Google News, Discover, Web Stories—and failed many times.
                </p>
                <p>
                  But he always stood up again. Each failure was a lesson, each setback a stepping stone.
                </p>
              </div>
            </motion.div>

            {/* Building Companies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Building2 className="text-blue-400" />
                Building Companies
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Web Nova Crew (2023):</strong> With no mentor, no investor, no big support system—only determination—Sateesh launched Web Nova Crew. It's now one of Lucknow's rapidly growing digital agencies, serving clients across India and internationally.
                </p>
                <p>
                  <strong className="text-white">Estato (2023):</strong> Seeing his brother <span className="text-blue-400">Bipin Kumar Rawat</span> struggling to find a room for rent in Lucknow, Sateesh realized the market was unorganized. People were still using paper posters on walls. He built Estato, an AI-driven property renting & selling platform dedicated to Lucknow. His middle brother <span className="text-blue-400">Raj Kumar Rawat</span> played an important role in supporting Estato's growth. It now helps thousands of local residents across Musalmanabad, Sapahaiyya, Gauganj Market, Mallawan, Sandila, and nearby areas.
                </p>
                <p>
                  <strong className="text-white">Ubiduby (2025):</strong> In 2025, Sateesh partnered with <span className="text-blue-400">Radhika Gupta</span>, a passionate entrepreneur with work ethic similar to his own. Together they launched Ubiduby – The Unwritten Rules of Style, a premium fashion brand redefining modern style.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Journey Timeline
            </h2>
            <p className="text-xl text-slate-400">
              Key moments that shaped the entrepreneur
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xl">
                  {item.year}
                </div>
                <div className="pt-2 flex-1">
                  <h3 className="font-bold text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key People */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Known Associates
            </h2>
            <p className="text-xl text-slate-400">
              People who supported and inspired the journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyPeople.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{person.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{person.role}</p>
                    <p className="text-slate-400 text-sm">{person.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Overview */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Companies Founded
            </h2>
            <p className="text-xl text-slate-400">
              Building the future, one venture at a time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border border-blue-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                WNC
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Web Nova Crew</h3>
              <p className="text-blue-300 text-sm mb-4">Founder & CEO</p>
              <p className="text-slate-300 text-sm">
                Web & App Development Company serving clients across India and internationally
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border border-cyan-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                E
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Estato</h3>
              <p className="text-cyan-300 text-sm mb-4">Co-Founder</p>
              <p className="text-slate-300 text-sm">
                AI-powered property buying/selling & room-rent marketplace for Lucknow
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border border-purple-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                U
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ubiduby</h3>
              <p className="text-purple-300 text-sm mb-4">Partner</p>
              <p className="text-slate-300 text-sm">
                Premium fashion brand - The Unwritten Rules of Style (2025)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Legacy in the Making
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              At just 20, Sateesh represents the new generation of Indian entrepreneurs—self-taught, hardworking, and visionary. His journey from poverty, lack of resources, and repeated failures to building multiple startups inspires millions.
            </p>
            <p className="text-lg text-slate-400 italic">
              "Every failure is a version update. The only way to truly lose is to stop trying."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Want to Work With a Visionary Team?"
        subtitle="Let's discuss your project and see how Web Nova Crew can transform your digital presence."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />

      <Footer />
    </div>
  );
}
