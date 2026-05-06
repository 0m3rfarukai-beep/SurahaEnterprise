import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Tag, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { getPostBySlug, getRelatedPosts } from '@/lib/cms';

// ── CMS NOTE ─────────────────────────────────────────────────────────────────
// This component is CMS-ready. All data comes from src/lib/cms.js.
// When Sanity is connected, no changes are needed here.
// ─────────────────────────────────────────────────────────────────────────────

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const categoryColors = {
  'Domain & Hosting': 'bg-purple-50 text-purple-700 border-purple-200',
  'Website Design':   'bg-blue-50 text-blue-700 border-blue-200',
  'SEO':              'bg-green-50 text-green-700 border-green-200',
  'Digital Marketing':'bg-orange-50 text-orange-700 border-orange-200',
  'WordPress Tools':  'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Business Growth':  'bg-emerald-50 text-emerald-700 border-emerald-200',
  'AI Tools':         'bg-violet-50 text-violet-700 border-violet-200',
  'Case Studies':     'bg-amber-50 text-amber-700 border-amber-200'
};

/** Renders a single content block from the content[] array.
 *  Supported types: 'heading' | 'text' | 'image' | 'callout' | 'list'
 *  CMS NOTE: Add new block types here as you create them in Sanity.
 */
const ContentBlock = ({ block, idx }) => {
  switch (block.type) {
    case 'heading':
      return (
        <h2 key={idx} className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight pt-6 first:pt-0">
          {block.body}
        </h2>
      );
    case 'text':
      return (
        <p key={idx} className="text-base md:text-lg text-slate-700 leading-relaxed">
          {block.body}
        </p>
      );
    case 'callout':
      // CMS: { type: 'callout', body: '...', variant: 'info' | 'warning' | 'tip' }
      return (
        <div key={idx} className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
          <p className="text-blue-900 font-medium">{block.body}</p>
        </div>
      );
    case 'image':
      // CMS: { type: 'image', image: 'url', alt: '...', caption: '...' }
      return (
        <figure key={idx} className="my-4">
          {block.image
            ? <img src={block.image} alt={block.alt || ''} className="w-full rounded-2xl border border-slate-100 shadow-sm" />
            : <div className="w-full h-48 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400"><ImageIcon size={32} /></div>
          }
          {block.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.caption}</figcaption>}
        </figure>
      );
    case 'list':
      // CMS: { type: 'list', items: ['...', '...'] }
      return (
        <ul key={idx} className="space-y-2 pl-2">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-base md:text-lg">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

/** Default CTA shown when post.cta is null. */
const DEFAULT_CTA = {
  heading: 'Need help with this?',
  description: 'Let Suraha Enterprise handle it professionally. Free consultation, no obligation.',
  primaryLabel: 'Request Free Consultation',
  primaryLink: '/contact',
  secondaryLabel: 'Try Free Tools',
  secondaryLink: '/tools',
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    // CMS NOTE: getPostBySlug is async — works with both local data and Sanity
    getPostBySlug(slug).then(async (found) => {
      setPost(found);
      if (found) {
        const rel = await getRelatedPosts(found);
        setRelated(rel);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  // ── 404 ──────────────────────────────────────────────────────────────────────
  if (!post) {
    return (
      <div className="overflow-x-hidden bg-slate-50 min-h-screen">
        <section className="relative bg-slate-950 pt-32 pb-24 overflow-hidden text-center">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 max-w-2xl">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Article Not Found</h1>
            <p className="text-slate-300 text-lg mb-10">This article doesn't exist or may have been moved.</p>
            <Link to="/blog">
              <Button className="h-14 px-8 text-base font-bold bg-blue-600 hover:bg-blue-500 rounded-full">
                <ArrowLeft className="mr-2" size={18} /> Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Resolved CTA (post override or default)
  const cta = post.cta || DEFAULT_CTA;

  // SEO meta (CMS NOTE: in production inject via react-helmet or Next.js Head)
  const metaTitle = post.metaTitle || `${post.title} | Suraha Enterprise`;
  const metaDesc  = post.metaDescription || post.excerpt;

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category] || 'bg-slate-700 text-slate-200 border-slate-600'}`}>
                {post.category}
              </span>
            </div>

            {/* CMS NOTE: title comes from post.title (Sanity field: title) */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><User size={15} /> {post.author}</span>
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2"><Clock size={15} /> {post.readTime}</span>
              {post.hasAffiliate && (
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Tag size={13} /> Affiliate content
                </span>
              )}
              {post.status && post.status !== 'published' && (
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {post.status}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Image (CMS: featuredImage.asset->url) ──────────────────── */}
      {post.featuredImage && (
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-8 relative z-10">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-[2rem] shadow-2xl shadow-slate-900/30 border border-slate-100"
          />
        </div>
      )}

      {/* ── Article Body ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-12 md:py-16">
        <motion.article
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-white rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-xl shadow-slate-200/40 border border-slate-100"
        >
          {/* CMS NOTE: hasAffiliate is a boolean field in Sanity */}
          {post.hasAffiliate && <AffiliateDisclosure />}

          {/* CMS NOTE: content[] is a Portable Text / block array in Sanity.
              Each item: { type, body } for simple text/headings,
              or richer types: callout, image, list. */}
          <div className="space-y-5">
            {(post.content || []).map((block, idx) => (
              <ContentBlock key={idx} block={block} idx={idx} />
            ))}
          </div>
        </motion.article>

        {/* ── CTA Block (CMS: cta { heading, description, primaryLabel, primaryLink }) ── */}
        <div className="mt-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{cta.heading}</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">{cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={cta.primaryLink}>
                <Button size="lg" className="h-14 px-8 text-base font-bold bg-white text-blue-900 hover:bg-slate-50 rounded-full shadow-xl hover:-translate-y-1 transition-transform">
                  {cta.primaryLabel}
                </Button>
              </Link>
              {cta.secondaryLink && (
                <Link to={cta.secondaryLink}>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-full hover:-translate-y-1 transition-transform">
                    {cta.secondaryLabel}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ── Related Posts (CMS NOTE: populated via relatedPosts[] references) ── */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.id}`} className="group">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                    <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border mb-4 ${categoryColors[rel.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors flex-1">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-3">
                      <Clock size={12} /> {rel.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
