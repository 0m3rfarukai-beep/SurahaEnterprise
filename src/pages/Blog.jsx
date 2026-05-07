import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, BookOpen, Clock, Search, Tag } from 'lucide-react';
import { fetchPublishedPosts } from '@/lib/sanityQueries';
import fallbackPosts, { categories as fallbackCategories } from '@/data/blogPosts';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categoryColors = {
  'Domain & Hosting': 'bg-purple-50 text-purple-700 border-purple-200',
  'Website Design': 'bg-blue-50 text-blue-700 border-blue-200',
  SEO: 'bg-green-50 text-green-700 border-green-200',
  'Digital Marketing': 'bg-orange-50 text-orange-700 border-orange-200',
  'WordPress Tools': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Business Growth': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'AI Tools': 'bg-violet-50 text-violet-700 border-violet-200',
  'Case Studies': 'bg-amber-50 text-amber-700 border-amber-200',
};

const publishedFallbackPosts = fallbackPosts.filter((post) => !post.status || post.status === 'published');

function formatDate(date) {
  if (!date) return 'Recently published';

  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function buildCategories(posts) {
  const categories = posts.map((post) => post.category).filter(Boolean);
  return ['All', ...Array.from(new Set(categories))];
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;

    window.scrollTo(0, 0);
    setLoading(true);

    fetchPublishedPosts()
      .then((posts) => {
        if (!active) return;

        if (posts.length > 0) {
          setAllPosts(posts);
          setCategories(buildCategories(posts));
          setUsingFallback(false);
          return;
        }

        setAllPosts(publishedFallbackPosts);
        setCategories(fallbackCategories);
        setUsingFallback(true);
      })
      .catch((err) => {
        if (!active) return;
        setError(err);
        setAllPosts(publishedFallbackPosts);
        setCategories(fallbackCategories);
        setUsingFallback(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const searchable = `${post.title || ''} ${post.excerpt || ''}`.toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [activeCategory, allPosts, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
            <BookOpen size={14} className="mr-2" /> Blog & Resources
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Practical Growth Advice for UK Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Guides, comparisons, and operational advice from Suraha Enterprise, now powered by Sanity CMS.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-12 md:py-20">
        {(error || usingFallback) && (
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900 flex gap-3">
            <AlertCircle size={20} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-bold">
                {error ? 'Sanity posts could not be loaded.' : 'No Sanity posts are published yet.'}
              </p>
              <p className="text-sm leading-relaxed">
                Showing the existing static blog content as a fallback.
              </p>
            </div>
          </div>
        )}

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-200 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg shadow-slate-200/50 placeholder:text-slate-400 text-slate-900"
            />
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                  activeCategory === cat
                    ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No articles found</h3>
            <p className="text-lg text-slate-600 mb-6">Try a different search or category.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="px-6 py-3 bg-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-300 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.04 }}
                className="h-full"
              >
                <Link to={`/blog/${post.slug || post.id}`} className="block h-full">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group h-full">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400" />
                    )}

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {post.hasAffiliate && (
                        <p className="text-xs text-slate-400 mb-4 flex items-center gap-1">
                          <Tag size={12} /> Contains affiliate recommendations
                        </p>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-400 font-semibold">{formatDate(post.date)}</span>
                        <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-3 transition-all">
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-16 md:mt-24 text-center">
          <div className="bg-slate-950 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl shadow-blue-900/10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Want these strategies done for you?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We write the content, manage the SEO, and build the systems. You focus on running your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full text-base font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-xl shadow-blue-600/20">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/tools" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-slate-100 rounded-full text-base font-bold hover:border-blue-300 hover:bg-white/5 transition-all">
                Try Free Tools
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
