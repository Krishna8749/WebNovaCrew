import { useParams, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter, Facebook, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-white font-sans pt-20">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Blog", url: "https://webnovacrew.com/blog" },
        { name: post.title, url: `https://webnovacrew.com/blog/${post.slug}` }
      ]} />
      
      <Navbar />
      
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-slate-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{post.author.name}</div>
                  <div className="text-sm">{post.author.role}</div>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg prose-slate max-w-none">
              <div 
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-4
                           [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-6 [&>h3]:mb-3
                           [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-4
                           [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-slate-600 [&>ul>li]:mb-2
                           [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:text-slate-600 [&>ol>li]:mb-2
                           [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-600
                           [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
                           [&>code]:bg-slate-100 [&>code]:px-1 [&>code]:rounded"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/<br\/><h/g, '</p><h').replace(/<br\/><br\/>/g, '</p><p>') }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Share */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6 sticky top-28">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Article
                </h3>
                <div className="flex gap-3">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://webnovacrew.com/blog/${post.slug}`)}`} target="_blank" className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://webnovacrew.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://webnovacrew.com/blog/${post.slug}`)}`} target="_blank" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-white text-slate-600 text-sm px-3 py-1 rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2">{relatedPost.readTime}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection 
        title="Need Help With Your Project?"
        subtitle="Our team of experts is ready to help you build something amazing."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
}
