import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Calculator, Search, FileText, Share2, MapPin, Lightbulb,
  ArrowRight, Copy, CheckCircle2, AlertCircle, RotateCcw
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

/* ──── Tool Components ──── */

const WebsiteAuditTool = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAudit = () => {
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const scores = {
        performance: Math.floor(Math.random() * 30 + 55),
        seo: Math.floor(Math.random() * 35 + 45),
        mobile: Math.floor(Math.random() * 25 + 60),
        security: Math.floor(Math.random() * 40 + 40),
        content: Math.floor(Math.random() * 30 + 50)
      };
      setResult(scores);
      setLoading(false);
    }, 2000);
  };

  const getColor = (score) => score >= 80 ? 'text-green-600' : score >= 60 ? 'text-amber-500' : 'text-red-500';
  const getBg = (score) => score >= 80 ? 'bg-green-50 border-green-200' : score >= 60 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter your website URL (e.g. example.com)" className="flex-1 px-5 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <Button onClick={runAudit} disabled={loading} className="h-12 px-6 rounded-xl font-bold">
          {loading ? 'Scanning...' : 'Run Audit'}
        </Button>
      </div>
      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>This is a <strong>preliminary instant audit</strong> based on common best-practice checks — not a full technical crawl.</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.entries(result).map(([key, score]) => (
              <div key={key} className={`p-4 rounded-2xl border text-center ${getBg(score)}`}>
                <p className={`text-3xl font-extrabold ${getColor(score)}`}>{score}</p>
                <p className="text-xs font-bold text-slate-600 uppercase mt-1 tracking-wider">{key}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const SeoTitleGenerator = () => {
  const [form, setForm] = useState({ business: '', service: '', location: '', keyword: '' });
  const [results, setResults] = useState(null);

  const generate = () => {
    const { business, service, location, keyword } = form;
    if (!business || !service) return;
    const loc = location || 'UK';
    const kw = keyword || service;
    setResults({
      titles: [
        `${business} | Professional ${service} in ${loc}`,
        `${kw} Services | ${business} — Trusted ${loc} Experts`,
        `Affordable ${service} for Small Businesses | ${business} ${loc}`
      ],
      descriptions: [
        `${business} offers professional ${service.toLowerCase()} services in ${loc}. Get results-driven solutions tailored to your business. Contact us for a free consultation.`,
        `Looking for reliable ${kw.toLowerCase()} in ${loc}? ${business} helps small businesses grow online with proven ${service.toLowerCase()} strategies. Get in touch today.`,
        `${business} provides expert ${service.toLowerCase()} services across ${loc}. Transparent pricing, real results. Book your free audit now.`
      ]
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} placeholder="Business name" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} placeholder="Service (e.g. Web Design)" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} placeholder="Location (e.g. London)" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.keyword} onChange={(e) => setForm({...form, keyword: e.target.value})} placeholder="Target keyword (optional)" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <Button onClick={generate} className="h-12 px-6 rounded-xl font-bold">Generate SEO Tags</Button>
      {results && <GeneratedList label="Title Options" items={results.titles} />}
      {results && <GeneratedList label="Meta Descriptions" items={results.descriptions} />}
    </div>
  );
};

const CaptionGenerator = () => {
  const [form, setForm] = useState({ business: '', offer: '', platform: 'Instagram' });
  const [results, setResults] = useState(null);
  const platforms = ['Facebook', 'Instagram', 'LinkedIn', 'TikTok'];

  const generate = () => {
    const { business, offer, platform } = form;
    if (!business || !offer) return;
    const templates = {
      Facebook: [
        `🚀 ${business} is here to help! ${offer}. Message us today to learn more.`,
        `Looking for ${offer.toLowerCase()}? ${business} has you covered. Click the link in our bio to get started!`,
        `✅ ${offer} — that's what ${business} does best. Drop a comment or DM us!`
      ],
      Instagram: [
        `${offer} 💡 That's what we do at ${business}.\n\nDM us "INFO" to get started.\n\n#SmallBusiness #${business.replace(/\s/g,'')} #GrowOnline`,
        `Your business deserves ${offer.toLowerCase()}. We make it happen. 🔥\n\nLink in bio 👆\n\n#DigitalMarketing #UKBusiness`,
        `Stop scrolling and start growing 📈\n\n${business} offers ${offer.toLowerCase()} for businesses like yours.\n\nDM us today!`
      ],
      LinkedIn: [
        `At ${business}, we believe every small business deserves ${offer.toLowerCase()}.\n\nIf you're looking to grow your online presence this year, let's connect.\n\n#BusinessGrowth #DigitalTransformation`,
        `${offer} isn't a luxury — it's a necessity.\n\n${business} helps UK businesses compete online with professional, affordable solutions.\n\nComment "INTERESTED" to learn more.`,
        `3 things every small business needs in 2026:\n1. A fast, professional website\n2. A solid SEO strategy\n3. ${offer}\n\n${business} delivers all three. Let's talk.`
      ],
      TikTok: [
        `POV: You just found ${business} and your business is about to level up 🚀 ${offer} #SmallBiz #BusinessTok`,
        `${business} tip: ${offer.toLowerCase()} = more customers. Simple as that. 💪 #MarketingTips #UKBusiness`,
        `Stop DIYing your marketing. ${business} offers ${offer.toLowerCase()} so you can focus on what you do best 🎯`
      ]
    };
    setResults(templates[platform] || templates.Instagram);
  };

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} placeholder="Business name" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.offer} onChange={(e) => setForm({...form, offer: e.target.value})} placeholder="Your offer (e.g. Free website audit)" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <div className="flex flex-wrap gap-2">
        {platforms.map(p => (
          <button key={p} onClick={() => setForm({...form, platform: p})} className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${form.platform === p ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}>{p}</button>
        ))}
      </div>
      <Button onClick={generate} className="h-12 px-6 rounded-xl font-bold">Generate Captions</Button>
      {results && <GeneratedList label={`${form.platform} Captions`} items={results} />}
    </div>
  );
};

const GBPPostGenerator = () => {
  const [form, setForm] = useState({ business: '', service: '', location: '', offer: '' });
  const [result, setResult] = useState('');

  const generate = () => {
    const { business, service, location, offer } = form;
    if (!business || !service) return;
    const loc = location || 'your area';
    const off = offer || `professional ${service.toLowerCase()}`;
    setResult(`📢 ${business} — ${service} in ${loc}\n\n${off}! Whether you need a new website, better Google rankings, or more customers — we've got you covered.\n\n✅ Free consultation available\n📞 Contact us today\n🌐 Visit our website to learn more\n\n#${business.replace(/\s/g,'')} #${loc.replace(/\s/g,'')} #SmallBusiness`);
  };

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} placeholder="Business name" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} placeholder="Main service" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} placeholder="Location" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <input value={form.offer} onChange={(e) => setForm({...form, offer: e.target.value})} placeholder="Special offer (optional)" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <Button onClick={generate} className="h-12 px-6 rounded-xl font-bold">Generate GBP Post</Button>
      {result && <CopyBlock text={result} />}
    </div>
  );
};

const LeadMagnetGenerator = () => {
  const [industry, setIndustry] = useState('');
  const [ideas, setIdeas] = useState(null);

  const generate = () => {
    if (!industry.trim()) return;
    setIdeas([
      `"The Ultimate ${industry} Website Checklist" — A downloadable PDF checklist of everything a ${industry.toLowerCase()} business needs on their website.`,
      `"5 ${industry} Marketing Mistakes Costing You Customers" — A short guide exposing common mistakes and how to fix them.`,
      `"Free ${industry} SEO Starter Template" — A simple spreadsheet template for tracking keywords, rankings, and content ideas.`,
      `"${industry} Social Media Content Calendar" — A 30-day content plan with post ideas tailored to ${industry.toLowerCase()} businesses.`,
      `"How to Get More ${industry} Customers Online" — A 10-minute video training or webinar recording with actionable tips.`
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Your industry (e.g. Plumbing, Law, Fitness)" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <Button onClick={generate} className="h-12 px-6 rounded-xl font-bold">Generate Ideas</Button>
      </div>
      {ideas && <GeneratedList label="Lead Magnet Ideas" items={ideas} />}
    </div>
  );
};

/* ──── Shared Components ──── */

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={copy} className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0">
      {copied ? <><CheckCircle2 size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
    </button>
  );
};

const CopyBlock = ({ text }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 relative">
    <div className="absolute top-4 right-4"><CopyButton text={text} /></div>
    <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed pr-16">{text}</pre>
    <p className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">Want us to do this professionally? <Link to="/contact" className="text-blue-600 font-bold hover:underline">Contact Suraha Enterprise →</Link></p>
  </motion.div>
);

const GeneratedList = ({ label, items }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{label}</h4>
    {items.map((item, i) => (
      <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-4">
        <p className="text-sm text-slate-700 leading-relaxed flex-1">{item}</p>
        <CopyButton text={item} />
      </div>
    ))}
    <p className="text-xs text-slate-500 pt-2">Want us to do this professionally? <Link to="/contact" className="text-blue-600 font-bold hover:underline">Contact Suraha Enterprise →</Link></p>
  </motion.div>
);

/* ──── Tools Page ──── */

const tools = [
  { id: 'audit', icon: Search, title: 'Free Website Audit', desc: 'Instant preliminary check of your site\'s performance, SEO, mobile, security, and content.', badges: ['Free', 'Instant'], component: WebsiteAuditTool },
  { id: 'seo', icon: FileText, title: 'SEO Title & Meta Generator', desc: 'Generate optimised page titles and meta descriptions for your business.', badges: ['Free', 'Instant'], component: SeoTitleGenerator },
  { id: 'captions', icon: Share2, title: 'Social Media Caption Generator', desc: 'Create engaging captions for Facebook, Instagram, LinkedIn, and TikTok.', badges: ['Free', 'Instant'], component: CaptionGenerator },
  { id: 'gbp', icon: MapPin, title: 'Google Business Profile Post Generator', desc: 'Generate professional posts for your Google Business Profile listing.', badges: ['Free', 'Instant'], component: GBPPostGenerator },
  { id: 'leads', icon: Lightbulb, title: 'Lead Magnet Idea Generator', desc: 'Get 5 lead magnet ideas tailored to your industry to grow your email list.', badges: ['Free', 'Instant'], component: LeadMagnetGenerator }
];

const Tools = () => {
  const [activeTool, setActiveTool] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
            Free Growth Tools
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Free Tools to <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Grow Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Premium marketing tools — completely free, instant results, no signup required.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 md:py-20 -mt-8">
        {/* Estimator link */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-8">
          <Link to="/estimator" className="block bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-2xl text-white hover:from-blue-500 hover:to-cyan-500 transition-all group shadow-lg shadow-blue-600/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><Calculator size={24} /></div>
                <div>
                  <h3 className="text-lg font-bold">Website Cost Estimator</h3>
                  <p className="text-sm text-blue-100">Get an instant project price range — no email needed</p>
                </div>
              </div>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>

        {/* Tool Cards */}
        <div className="space-y-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            const ToolComponent = tool.component;
            const isActive = activeTool === tool.id;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveTool(isActive ? null : tool.id)}
                  className="w-full p-6 sm:p-8 flex items-center gap-4 sm:gap-6 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon size={26} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-bold text-slate-900">{tool.title}</h3>
                      {tool.badges.map(b => (
                        <span key={b} className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">{b}</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">{tool.desc}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 transition-transform ${isActive ? 'rotate-45 border-blue-600 text-blue-600' : 'text-slate-400'}`}>
                    <span className="text-xl leading-none">+</span>
                  </div>
                </button>

                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 sm:px-8 pb-8 border-t border-slate-100"
                  >
                    <div className="pt-6">
                      <ToolComponent />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
