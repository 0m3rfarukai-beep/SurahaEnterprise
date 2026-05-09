import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, BookOpen, Clock, Search, Tag } from 'lucide-react';
import { fetchPublishedPosts } from '@/lib/sanityQueries';
import fallbackPosts, { categories as fallbackCategories } from '@/data/blogPosts';
import PageHeader from '@/components/PageHeader';

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

const strategicCategories = [
  'Website Growth',
  'Local SEO',
  'Google Business Profile',
  'Domain & Hosting',
  'Digital Marketing',
  'AI Tools for Small Business',
  'Agency Buying Guides',
];

const buyerConcernArticles = [
  'How Much Should a Small Business Website Cost in the UK?',
  '7 Things to Check Before Paying an SEO Agency',
  'Why Your Website Gets Visitors But No Enquiries',
  'Google Business Profile Checklist for Local Businesses',
  'What to Ask Before Hiring a Web Designer',
];

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
      <PageHeader
        eyebrow="Blog & Resources"
        icon={BookOpen}
        title="Practical growth advice for UK businesses"
        description="Guides, comparisons, and operational advice from Suraha Enterprise."
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-10 md:py-16">
        <div className="mb-10 grid lg:grid-cols-[1fr_1.2fr] gap-5">
          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Blog strategy</p>
            <h2 className="text-2xl font-extrabold text-slate-950 mb-3">Content built around buyer doubts, not generic marketing tips.</h2>
            <p className="text-slate-600 leading-relaxed">The strongest articles answer what careful owners ask before spending: cost, trust, process, SEO risk, website quality, and how to judge an agency.</p>
          </div>
          <div className="rounded-2xl bg-slate-950 text-white border border-slate-800 p-6 shadow-xl shadow-blue-900/10">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300 mb-4">Priority categories</p>
            <div className="flex flex-wrap gap-2">
              {strategicCategories.map((cat) => (
                <span key={cat} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">{cat}</span>
              ))}
            </div>
          </div>
        </div>

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

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-7">
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg shadow-slate-200/50 placeholder:text-slate-400 text-slate-900"
            />
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
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
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group h-full">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400" />
                    )}

                    <div className="p-6 flex flex-col flex-1">
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

        <div className="mt-12 rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Buyer-concern articles</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 leading-tight">Sample titles to publish in Sanity next</h2>
            </div>
            <Link to="/contact" className="text-blue-600 font-bold inline-flex items-center gap-2">Request content plan <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {buyerConcernArticles.map((title) => (
              <div key={title} className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm font-bold text-slate-800 leading-snug">
                {title}
              </div>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-14 md:mt-20 text-center">
          <div className="bg-slate-950 p-7 md:p-10 rounded-2xl border border-slate-800 shadow-xl shadow-blue-900/10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Want these strategies done for you?
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-7 leading-relaxed">
              We write the content, manage the SEO, and build the systems. You focus on running your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-base font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-xl shadow-blue-600/20">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-700 text-slate-100 rounded-full text-base font-bold hover:border-blue-300 hover:bg-white/5 transition-all">
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
