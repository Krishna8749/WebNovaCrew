import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag, BookOpen, TrendingUp, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, blogCategories, getFeaturedPosts } from "@/data/blogPosts";

const RECOGNITION_PLATFORMS = [
  { name: "Clutch", emoji: "🏆", color: "#E63946", href: "https://clutch.co" },
  { name: "GoodFirms", emoji: "⭐", color: "#F28C38", href: "https://www.goodfirms.co" },
  { name: "DesignRush", emoji: "🏅", color: "#7B2FBE", href: "https://www.designrush.com" },
  { name: "TechBehemoths", emoji: "✅", color: "#2983DB", href: "https://techbehemoths.com" },
  { name: "The Manifest", emoji: "📋", color: "#1B4F72", href: "https://themanifest.com" },
  { name: "Techreviewer", emoji: "🔍", color: "#219653", href: "https://techreviewer.co" },
  { name: "TopDevelopers", emoji: "💎", color: "#C0392B", href: "https://www.topdevelopers.co" },
  { name: "SuperbCompanies", emoji: "🌟", color: "#E67E22", href: "https://superbcompanies.com" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" ||
      post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === activeCategory;
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO
        title="Blog - Web Development, SEO & Tech Insights"
        description="Read the latest articles on web development, mobile app development, SEO strategies, UI/UX design, and technology trends. Expert insights from Web Nova Crew."
        keywords="web development blog, mobile app development articles, SEO tips, UI/UX design trends, tech blog india, programming tutorials, react tutorials, flutter guides"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Blog", url: "https://webnovacrew.com/blog" }
      ]} />

      <Navbar />

      {/* Hero */}
      <section className="py-16 overflow-hidden" style={{ background: "linear-gradient(160deg, #F0F7FF 0%, #ffffff 60%)" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "#EEF4FB", color: "#2983DB", border: "1px solid #D0E6FA" }}
            >
              <BookOpen className="w-3.5 h-3.5" /> Knowledge Hub
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-5" style={{ color: "#0D1B2E" }}>
              Insights on <span style={{ color: "#2983DB" }}>Web Development</span> &amp; Technology
            </h1>
            <p className="text-lg mb-8" style={{ color: "#4A6080" }}>
              Expert articles, tutorials, and guides from India's top development team. Stay ahead with insights on web, mobile, SEO &amp; AI.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#8CA0B5" }} />
              <Input
                placeholder="Search articles..."
                className="pl-12 py-6 rounded-full"
                style={{ border: "1px solid #D0E6FA", background: "#fff" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: <BookOpen className="w-4 h-4" />, label: `${blogPosts.length}+ Articles` },
                { icon: <TrendingUp className="w-4 h-4" />, label: "Weekly Updates" },
                { icon: <Award className="w-4 h-4" />, label: "Expert Authors" },
              ].map((s, i) => (
                <span key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#4A6080" }}>
                  <span style={{ color: "#2983DB" }}>{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories — sticky */}
      <section className="py-4 sticky top-20 z-30 bg-white" style={{ borderBottom: "1px solid #EEF4FB", boxShadow: "0 2px 12px rgba(41,131,219,0.06)" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                style={
                  activeCategory === cat.slug
                    ? { background: "#2983DB", color: "#ffffff", border: "1px solid #2983DB" }
                    : { background: "#ffffff", color: "#4A6080", border: "1px solid #E0ECF8" }
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchQuery === "" && activeCategory === "all" && (
        <section className="py-14" style={{ background: "#F8FBFF" }}>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl">🔥</span>
              <h2 className="text-2xl font-bold" style={{ color: "#0D1B2E" }}>Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl overflow-hidden bg-white transition-all"
                  style={{ border: "1px solid #E0ECF8", boxShadow: "0 4px 20px rgba(41,131,219,0.07)" }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#2983DB" }}>
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#8CA0B5" }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:transition-colors" style={{ color: "#0D1B2E" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm line-clamp-2 mb-4" style={{ color: "#4A6080" }}>{post.excerpt}</p>
                      <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#2983DB" }}>
                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content + Sidebar */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" style={{ color: "#0D1B2E" }}>
                  {activeCategory === "all" ? "All Articles" : blogCategories.find(c => c.slug === activeCategory)?.name}
                </h2>
                <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ background: "#EEF4FB", color: "#2983DB" }}>
                  {filteredPosts.length} articles
                </span>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="group rounded-2xl overflow-hidden bg-white transition-all"
                      style={{ border: "1px solid #E0ECF8", boxShadow: "0 2px 12px rgba(41,131,219,0.05)" }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.92)", color: "#2983DB" }}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#8CA0B5" }}>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-base font-bold mb-2 line-clamp-2" style={{ color: "#0D1B2E" }}>
                            {post.title}
                          </h3>
                          <p className="text-sm line-clamp-2 mb-4" style={{ color: "#4A6080" }}>{post.excerpt}</p>
                          <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#2983DB" }}>
                            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 rounded-2xl" style={{ background: "#F8FBFF", border: "1px solid #E0ECF8" }}>
                  <Search className="w-12 h-12 mx-auto mb-3" style={{ color: "#B0C0D0" }} />
                  <p className="font-semibold" style={{ color: "#4A6080" }}>No articles found</p>
                  <p className="text-sm mt-1" style={{ color: "#8CA0B5" }}>Try a different keyword or category</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Recognition Platforms */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{ border: "1px solid #E0ECF8", background: "#FAFCFF" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5" style={{ color: "#2983DB" }} />
                  <h3 className="font-bold text-sm" style={{ color: "#0D1B2E" }}>We're Listed On</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {RECOGNITION_PLATFORMS.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm"
                      style={{ background: "#ffffff", border: "1px solid #E0ECF8", color: p.color }}
                    >
                      <span className="text-base">{p.emoji}</span>
                      <span className="truncate">{p.name}</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-50 shrink-0" />
                    </a>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "#B0C0D0" }}>
                  Building our verified presence across all major platforms.
                </p>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #2983DB, #1A6BB5)" }}
              >
                <h3 className="font-bold text-lg mb-2">📧 Stay Updated</h3>
                <p className="text-sm mb-4 opacity-85">Get weekly insights on web development &amp; tech delivered to your inbox.</p>
                <div className="space-y-2">
                  <Input
                    placeholder="your@email.com"
                    className="bg-white/15 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full font-bold rounded-full" style={{ background: "#B1F51F", color: "#0D1B2E" }}>
                    Subscribe Free
                  </Button>
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl p-6"
                style={{ border: "1px solid #E0ECF8", background: "#ffffff" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5" style={{ color: "#2983DB" }} />
                  <h3 className="font-bold text-sm" style={{ color: "#0D1B2E" }}>Popular Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Flutter", "SEO", "Node.js", "Laravel", "AI Apps", "UI/UX", "Mobile", "Web Development", "APIs"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:-translate-y-0.5"
                      style={{ background: "#EEF4FB", color: "#2983DB", border: "1px solid #D0E6FA" }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl p-6 text-center"
                style={{ background: "#0D1B2E" }}
              >
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white text-lg mb-2">Start Your Project</h3>
                <p className="text-sm mb-4" style={{ color: "#8CA0B5" }}>Ready to build something amazing? Get a free consultation today.</p>
                <Link href="/contact">
                  <Button className="w-full font-bold rounded-full" style={{ background: "#B1F51F", color: "#0D1B2E" }}>
                    Get Free Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

