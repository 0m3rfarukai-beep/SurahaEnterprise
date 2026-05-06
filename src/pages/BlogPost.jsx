import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogPosts from '@/data/blogPosts';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const categoryColors = {
  'Domain & Hosting': 'bg-purple-50 text-purple-700 border-purple-200',
  'Website Design': 'bg-blue-50 text-blue-700 border-blue-200',
  'SEO': 'bg-green-50 text-green-700 border-green-200',
  'Digital Marketing': 'bg-orange-50 text-orange-700 border-orange-200',
  'WordPress Tools': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Business Growth': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'AI Tools': 'bg-violet-50 text-violet-700 border-violet-200',
  'Case Studies': 'bg-amber-50 text-amber-700 border-amber-200'
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // 404 — Article Not Found
  if (!post) {
    return (
      <div className="overflow-x-hidden bg-slate-50 min-h-screen">
        <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)] z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Article Not Found</h1>
            <p className="text-lg text-slate-300 mb-10">Sorry, we couldn't find the article you're looking for. It may have been moved or removed.</p>
            <Link to="/blog">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30">
                <ArrowLeft className="mr-2" size={20} /> Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Related posts: same category, excluding current
  const related = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            {/* Back link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category] || 'bg-slate-700 text-slate-200 border-slate-600'}`}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <User size={16} /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {post.readTime}
              </span>
              {post.hasAffiliate && (
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Tag size={14} /> Affiliate content
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-12 md:py-16">
        <motion.article initial="hidden" animate="visible" variants={fadeIn} className="bg-white rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {/* Affiliate disclosure */}
          {post.hasAffiliate && <AffiliateDisclosure />}

          {/* Render content blocks */}
          <div className="prose-custom space-y-6">
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight pt-4 first:pt-0">
                    {block.body}
                  </h2>
                );
              }
              return (
                <p key={idx} className="text-base md:text-lg text-slate-700 leading-relaxed">
                  {block.body}
                </p>
              );
            })}
          </div>
        </motion.article>

        {/* Post CTA */}
        <div className="mt-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Need help with this?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
              Let Suraha Enterprise handle it professionally. Book a free, no-obligation consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-blue-900 hover:bg-slate-50 rounded-full shadow-xl shadow-black/20 transition-transform hover:-translate-y-1">
                  Request a Free Consultation
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-transform hover:-translate-y-1">
                  Try Free Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.id}`} className="group">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border mb-4 ${categoryColors[rel.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors flex-1">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-2">
                      <Clock size={12} /> {rel.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold text-base hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
