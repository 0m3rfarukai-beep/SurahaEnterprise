import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Copy,
  FileText,
  Globe,
  HelpCircle,
  MapPin,
  MessageSquareReply,
  PoundSterling,
  Search,
  Send,
  Sparkles,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import GrowthCheckTool from '@/components/GrowthCheckTool';
import { buildLeadPayload, saveToolLead } from '@/lib/leadCapture';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button onClick={copy} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
      {copied ? <><CheckCircle2 size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
    </button>
  );
};

const ResultPanel = ({ title, children, summary = '', recommendedService = 'Website Design & Development', form = {}, toolUsed = 'Growth tool' }) => {
  useEffect(() => {
    if (!summary) return;
    saveToolLead(buildLeadPayload({
      toolUsed,
      form,
      result: { summary },
      recommendedService,
      leadScore: 65,
    }));
  }, [form, recommendedService, summary, toolUsed]);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-extrabold text-slate-950">{title}</h4>
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1.5 mt-2 inline-flex">Preliminary result. No live crawler or external API is connected yet.</p>
        </div>
        {summary && <CopyButton text={summary} />}
      </div>
      {children}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-700">Want this fixed professionally? Book a free review.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
          Book a free review <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

const BasicGenerator = ({ type }) => {
  const [form, setForm] = useState({ businessName: '', websiteUrl: '', businessType: '', location: '', topic: '' });
  const [result, setResult] = useState(null);

  const generate = () => {
    const business = form.businessName || 'Your business';
    const location = form.location || 'your area';
    const industry = form.businessType || 'service business';

    const outputs = {
      leadLeak: [
        'Make the primary call-to-action visible above the fold.',
        'Add proof near the contact button, not only at the bottom of the page.',
        'Replace vague copy with a direct offer, audience, location, and outcome.',
        'Add a quote follow-up message for people who enquire but do not book.',
        'Track form submissions and phone-clicks before spending more on ads.',
      ],
      localSeo: [
        `Create or improve a ${location} service page for ${industry} searches.`,
        'Add service areas, FAQs, reviews, and internal links to key pages.',
        'Post weekly on Google Business Profile with one offer or helpful tip.',
        'Make name, address, phone, and opening details consistent across listings.',
        'Ask recent customers for reviews using a short direct link.',
      ],
      reviewReply: [
        `Thank you for taking the time to leave this review. We are glad ${business} could help and we really appreciate your support.`,
        `Thanks for the feedback. We are sorry the experience did not meet expectations. Please contact us directly so we can understand what happened and put it right.`,
      ],
      followUp: [
        `Hi, just following up on your enquiry with ${business}. Would you like us to send a clear quote and next steps for this?`,
        `Hi, I wanted to check whether you still need help. We can explain the options, timeline, and likely cost before you decide anything.`,
      ],
      headline: [
        `${business} helps ${location} customers get reliable ${industry} without the confusion.`,
        `Professional ${industry} in ${location}, with clear pricing and practical advice before you book.`,
        `Turn your website visitors into real enquiries with ${business}.`,
      ],
      checklist: [
        'Is their homepage message clearer than yours?',
        'Do they show pricing guidance or make visitors guess?',
        'Do they have stronger reviews, examples, or trust signals?',
        'Do they answer buyer questions before the contact form?',
        'Is their mobile enquiry path easier than yours?',
      ],
      planner: [
        'Week 1: publish one buyer-question blog post and update your top service page.',
        'Week 2: request 3 reviews and publish one Google Business Profile post.',
        'Week 3: improve one landing page CTA and add one trust section.',
        'Week 4: review enquiries, rankings, calls, and form submissions.',
      ],
      gbp: [
        `${business} in ${location}: Need help with ${industry}? We offer clear advice, practical support, and transparent next steps. Contact us today for a free review.`,
      ],
    };

    const items = outputs[type] || outputs.leadLeak;
    setResult(items);
  };

  const summary = result ? result.join('\n') : '';

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.businessName} onChange={(event) => setForm({ ...form, businessName: event.target.value })} placeholder="Business name" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900" />
        <input value={form.websiteUrl} onChange={(event) => setForm({ ...form, websiteUrl: event.target.value })} placeholder="Website URL" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900" />
        <input value={form.businessType} onChange={(event) => setForm({ ...form, businessType: event.target.value })} placeholder="Business type" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900" />
        <input value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} placeholder="Location" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900" />
      </div>
      <Button onClick={generate} className="h-12 px-6 rounded-xl font-bold">Generate result</Button>
      {result && (
        <ResultPanel title="Your useful first-pass output" summary={summary} form={form} toolUsed={type}>
          <div className="space-y-3">
            {result.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-3.5 text-sm text-slate-700">
                <CheckCircle2 size={17} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ResultPanel>
      )}
    </div>
  );
};

const CostEstimator = () => {
  const [form, setForm] = useState({ pages: '5', content: 'Basic', booking: false, seo: false });
  const [range, setRange] = useState(null);

  const estimate = () => {
    const pages = Number(form.pages) || 1;
    let low = 350 + pages * 120;
    let high = 700 + pages * 220;
    if (form.content === 'Copywriting') { low += 300; high += 900; }
    if (form.booking) { low += 450; high += 1200; }
    if (form.seo) { low += 300; high += 800; }
    setRange({ low, high });
  };

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.pages} onChange={(event) => setForm({ ...form, pages: event.target.value })} placeholder="Pages needed" className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900" />
        <select value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900">
          <option>Basic</option>
          <option>Copywriting</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700"><input type="checkbox" checked={form.booking} onChange={(event) => setForm({ ...form, booking: event.target.checked })} /> Booking or lead form</label>
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700"><input type="checkbox" checked={form.seo} onChange={(event) => setForm({ ...form, seo: event.target.checked })} /> SEO setup</label>
      </div>
      <Button onClick={estimate} className="h-12 px-6 rounded-xl font-bold">Estimate cost</Button>
      {range && (
        <ResultPanel title="Estimated website range" summary={`Estimated range: £${range.low.toLocaleString()}-£${range.high.toLocaleString()}`} toolUsed="Website Cost Estimator" recommendedService="Website Design & Development">
          <p className="text-4xl font-extrabold text-blue-600">£{range.low.toLocaleString()} - £{range.high.toLocaleString()}</p>
          <p className="text-sm text-slate-600">Exact pricing depends on content, integrations, design complexity, and launch support.</p>
        </ResultPanel>
      )}
    </div>
  );
};

const HostingQuiz = () => {
  const [priority, setPriority] = useState('');
  const [result, setResult] = useState(null);
  const choose = () => {
    const recommendation = priority === 'Budget' ? 'Start with a reputable low-cost shared host, then upgrade when traffic grows.' : priority === 'WordPress' ? 'Use managed WordPress hosting with backups, staging, and UK support.' : 'Choose hosting with UK/EU data centres, SSL, backups, and clear support response times.';
    setResult(recommendation);
  };

  return (
    <div className="space-y-5">
      <select value={priority} onChange={(event) => setPriority(event.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900">
        <option value="">What matters most?</option>
        <option>Budget</option>
        <option>WordPress</option>
        <option>Speed and support</option>
      </select>
      <Button onClick={choose} disabled={!priority} className="h-12 px-6 rounded-xl font-bold">Get recommendation</Button>
      {result && (
        <ResultPanel title="Hosting recommendation" summary={result} toolUsed="Domain & Hosting Recommendation Quiz" recommendedService="Website Maintenance & Support">
          <p className="text-slate-700">{result}</p>
        </ResultPanel>
      )}
    </div>
  );
};

const tools = [
  { id: 'growth-check', icon: Search, title: 'Free Website Growth Check', desc: 'Score clarity, SEO, mobile, trust, and lead capture.', component: GrowthCheckTool },
  { id: 'lead-leak', icon: Target, title: 'Website Lead Leak Checker', desc: 'Find common reasons visitors do not become enquiries.', component: () => <BasicGenerator type="leadLeak" /> },
  { id: 'local-seo', icon: MapPin, title: 'Local SEO Visibility Checker', desc: 'Get first-pass local visibility fixes.', component: () => <BasicGenerator type="localSeo" /> },
  { id: 'cost', icon: PoundSterling, title: 'Website Cost Estimator', desc: 'Estimate a realistic starting range.', component: CostEstimator },
  { id: 'gbp', icon: Globe, title: 'Google Business Profile Post Generator', desc: 'Write useful local posts quickly.', component: () => <BasicGenerator type="gbp" /> },
  { id: 'reviews', icon: MessageSquareReply, title: 'Review Reply Generator', desc: 'Reply professionally to positive or negative reviews.', component: () => <BasicGenerator type="reviewReply" /> },
  { id: 'follow-up', icon: Send, title: 'Quote Follow-Up Message Generator', desc: 'Follow up without sounding pushy.', component: () => <BasicGenerator type="followUp" /> },
  { id: 'headline', icon: Sparkles, title: 'Landing Page Headline Generator', desc: 'Create clearer conversion-focused headlines.', component: () => <BasicGenerator type="headline" /> },
  { id: 'competitor', icon: ClipboardList, title: 'Competitor Website Comparison Checklist', desc: 'Compare trust, clarity, proof, and enquiry paths.', component: () => <BasicGenerator type="checklist" /> },
  { id: 'planner', icon: CalendarDays, title: 'Monthly Marketing Planner', desc: 'Get a simple monthly action plan.', component: () => <BasicGenerator type="planner" /> },
  { id: 'hosting', icon: HelpCircle, title: 'Domain & Hosting Recommendation Quiz', desc: 'Choose a sensible hosting direction.', component: HostingQuiz },
];

const Tools = () => {
  const [activeTool, setActiveTool] = useState('growth-check');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8">
            Free Growth Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Useful tools before you spend money.
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Check lead leaks, local SEO, follow-up, pricing, and content ideas. No signup required.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-10 md:py-16">
        <div className="mb-6 rounded-2xl bg-white border border-slate-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-950">Start with the Growth Check, then use the smaller tools for specific fixes.</p>
          <p className="text-sm text-slate-600 mt-1">All outputs are free and preliminary. They are designed to help you understand what to review before paying for professional work.</p>
        </div>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 items-start">
          <motion.aside initial="hidden" animate="visible" variants={fadeIn} className="space-y-2 lg:sticky lg:top-24">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const active = activeTool === tool.id;
              return (
                <button key={tool.id} onClick={() => setActiveTool(tool.id)} className={`w-full text-left rounded-xl border p-3.5 transition-all ${active ? 'bg-slate-950 text-white border-slate-950 shadow-lg shadow-blue-900/10' : 'bg-white text-slate-800 border-slate-100 hover:border-blue-200'}`}>
                  <div className="flex items-start gap-3">
                    <Icon size={19} className={active ? 'text-cyan-300 shrink-0 mt-0.5' : 'text-blue-600 shrink-0 mt-0.5'} />
                    <div>
                      <h3 className="font-extrabold leading-tight text-sm">{tool.title}</h3>
                      <p className={`text-xs mt-1 leading-relaxed ${active ? 'text-slate-300' : 'text-slate-600'}`}>{tool.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.aside>

          <motion.main initial="hidden" animate="visible" variants={fadeIn}>
            {tools.map((tool) => {
              const Component = tool.component;
              if (tool.id !== activeTool) return null;
              return (
                <div key={tool.id}>
                  <Component />
                </div>
              );
            })}
            <div className="mt-6 rounded-2xl bg-blue-600 text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold">Want a human review of the result?</h3>
                <p className="text-blue-100">Book a free consultation and we will explain the most useful next step.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-5 py-3 rounded-xl font-bold">
                Book a free review <ArrowRight size={16} />
              </Link>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default Tools;
