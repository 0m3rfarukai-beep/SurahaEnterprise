import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, Calendar, Clock, ImageIcon, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { fetchPostBySlug, fetchPublishedPosts } from '@/lib/sanityQueries';
import fallbackPosts from '@/data/blogPosts';

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

const DEFAULT_CTA = {
  heading: 'Need help with this? Contact Suraha Enterprise.',
  description: 'Get practical help with your website, SEO, content, and digital systems.',
  primaryLabel: 'Contact Suraha Enterprise',
  primaryLink: '/contact',
};

function formatDate(date) {
  if (!date) return 'Recently published';

  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.imageUrl) {
        return (
          <div className="w-full h-48 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
            <ImageIcon size={32} />
          </div>
        );
      }

      return (
        <figure className="my-8">
          <img
            src={value.imageUrl}
            alt={value.alt || ''}
            className="w-full rounded-2xl border border-slate-100 shadow-sm"
          />
          {value.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight pt-6">{children}</h2>,
    h2: ({ children }) => <h2 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight pt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg md:text-xl font-bold text-slate-950 tracking-tight pt-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base md:text-lg font-bold text-slate-950 tracking-tight pt-3">{children}</h4>,
    normal: ({ children }) => <p className="text-base md:text-lg text-slate-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 bg-blue-50 px-5 py-4 rounded-r-2xl text-blue-950 font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2 pl-5 list-disc text-slate-700 text-base md:text-lg leading-relaxed">{children}</ul>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = href.startsWith('http');

      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
};

const StaticContentBlock = ({ block }) => {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight pt-6 first:pt-0">{block.body}</h2>;
    case 'text':
      return <p className="text-base md:text-lg text-slate-700 leading-relaxed">{block.body}</p>;
    case 'callout':
      return (
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-2xl">
          <p className="text-blue-950 font-medium">{block.body}</p>
        </div>
      );
    case 'image':
      return (
        <figure className="my-4">
          {block.image ? (
            <img src={block.image} alt={block.alt || ''} className="w-full rounded-2xl border border-slate-100 shadow-sm" />
          ) : (
            <div className="w-full h-48 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
              <ImageIcon size={32} />
            </div>
          )}
          {block.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.caption}</figcaption>}
        </figure>
      );
    case 'list':
      return (
        <ul className="space-y-2 pl-5 list-disc text-slate-700 text-base md:text-lg leading-relaxed">
          {(block.items || []).map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;

    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);
    setUsingFallback(false);

    async function loadPost() {
      try {
        const sanityPost = await fetchPostBySlug(slug);

        if (!active) return;

        if (sanityPost) {
          setPost(sanityPost);
          const sanityPosts = await fetchPublishedPosts();
          if (!active) return;
          setRelated(
            sanityPosts
              .filter((item) => item.id !== sanityPost.id && item.category === sanityPost.category)
              .slice(0, 3)
          );
          return;
        }

        const fallbackPost = fallbackPosts.find((item) => item.id === slug);
        setPost(fallbackPost || null);
        setUsingFallback(Boolean(fallbackPost));
        setRelated(
          fallbackPosts
            .filter((item) => item.id !== slug && item.category === fallbackPost?.category)
            .slice(0, 3)
        );
      } catch (err) {
        if (!active) return;
        const fallbackPost = fallbackPosts.find((item) => item.id === slug);
        setError(err);
        setPost(fallbackPost || null);
        setUsingFallback(Boolean(fallbackPost));
        setRelated(
          fallbackPosts
            .filter((item) => item.id !== slug && item.category === fallbackPost?.category)
            .slice(0, 3)
        );
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPost();

    return () => {
      active = false;
    };
  }, [slug]);

  const cta = useMemo(() => ({ ...DEFAULT_CTA, ...(post?.cta || {}) }), [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="overflow-x-hidden bg-slate-50 min-h-screen">
        <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10 max-w-2xl">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Article Not Found</h1>
            <p className="text-slate-300 text-lg mb-10">This article does not exist or may have been moved.</p>
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

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><User size={15} /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={15} /> {formatDate(post.date)}</span>
              {post.readTime && <span className="flex items-center gap-2"><Clock size={15} /> {post.readTime}</span>}
              {post.hasAffiliate && (
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Tag size={13} /> Affiliate content
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {post.featuredImage && (
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-8 relative z-10">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl shadow-slate-900/30 border border-slate-100"
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-12 md:py-16">
        {(error || usingFallback) && (
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900 flex gap-3">
            <AlertCircle size={20} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-bold">
                {error ? 'Sanity article could not be loaded.' : 'This article is using the static fallback.'}
              </p>
              <p className="text-sm leading-relaxed">The page remains available while CMS content is configured.</p>
            </div>
          </div>
        )}

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-2xl p-6 sm:p-10 md:p-14 shadow-xl shadow-slate-200/40 border border-slate-100"
        >
          {post.hasAffiliate && <AffiliateDisclosure />}

          {post.body?.length > 0 ? (
            <div className="space-y-5">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
            <div className="space-y-5">
              {(post.content || []).map((block, idx) => <StaticContentBlock key={`${block.type}-${idx}`} block={block} />)}
            </div>
          )}
        </motion.article>

        <div className="mt-10 bg-slate-950 rounded-2xl p-8 md:p-12 text-center text-white border border-slate-800 shadow-xl shadow-blue-900/10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{cta.heading}</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto">{cta.description}</p>
          <Link to={cta.primaryLink}>
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-blue-600 text-white hover:bg-blue-500 rounded-full shadow-xl hover:-translate-y-1 transition-transform">
              {cta.primaryLabel}
            </Button>
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link key={rel.id} to={`/blog/${rel.slug || rel.id}`} className="group">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                    <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border mb-4 ${categoryColors[rel.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors flex-1">
                      {rel.title}
                    </h4>
                    {rel.readTime && (
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-3">
                        <Clock size={12} /> {rel.readTime}
                      </span>
                    )}
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
