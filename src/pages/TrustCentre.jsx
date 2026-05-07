import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const promises = [
  'Transparent pricing guidance before you commit',
  'Clear project milestones and review points',
  'Simple language instead of confusing jargon',
  'No fake traffic, fake urgency, or ranking guarantees',
  'No long contract pressure',
  'Client owns website, domain, hosting, analytics, and accounts',
  'Monthly reporting for ongoing work',
  'Pay-by-milestone option for suitable projects',
  'Realistic expectations before work starts',
];

const noPromises = [
  'We do not promise overnight SEO results.',
  'We do not guarantee exact Google rankings.',
  'We do not hide your website or accounts behind agency ownership.',
  'We do not recommend paid work before explaining the problem.',
];

const milestones = [
  { title: 'Discovery', text: 'We understand the business, customers, current website, goals, and budget comfort.' },
  { title: 'Audit', text: 'We identify lead leaks, trust gaps, SEO gaps, mobile issues, and quick wins.' },
  { title: 'Plan', text: 'You receive the recommended scope, timeline, pricing guidance, and expected tradeoffs.' },
  { title: 'Build', text: 'We work through agreed milestones with review points before launch.' },
  { title: 'Report', text: 'Ongoing work includes clear reporting on actions, results, and next priorities.' },
];

const comparison = [
  ['Pricing', 'Vague packages or a quote only after a sales call', 'Starting prices, scope notes, and exact quote before work starts'],
  ['Ownership', 'Agency controls key accounts or makes handover difficult', 'You keep ownership of website, domain, hosting, analytics, and profiles'],
  ['Reporting', 'Busy dashboards with little business meaning', 'Plain-English actions, results, and next priorities'],
  ['Promises', 'Big claims about rankings, traffic, or instant growth', 'Realistic expectations and no fake guarantees'],
];

const contactSteps = [
  'We review your website, goal, and message.',
  'We identify the highest-impact issue first.',
  'You get a clear next step, likely timeline, and pricing guidance.',
];

const TrustCentre = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8">
            <ShieldCheck size={15} /> Trust Centre
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Clear rules for working with careful business owners.
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            We know small businesses do not trust agencies easily. This is how we keep the process clear, realistic, and low-pressure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">How we compare</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Typical Agency vs Suraha Enterprise</h2>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
            <div className="hidden md:grid grid-cols-[0.8fr_1fr_1fr] bg-slate-950 text-white text-sm font-bold">
              <div className="p-4">Area</div>
              <div className="p-4 border-l border-white/10">Typical Agency</div>
              <div className="p-4 border-l border-white/10">Suraha Enterprise</div>
            </div>
            {comparison.map(([area, agency, suraha]) => (
              <div key={area} className="grid md:grid-cols-[0.8fr_1fr_1fr] border-t border-slate-100">
                <div className="p-4 font-extrabold text-slate-950 bg-slate-50">{area}</div>
                <div className="p-4 text-sm text-slate-600 md:border-l border-slate-100">{agency}</div>
                <div className="p-4 text-sm text-slate-800 font-medium md:border-l border-slate-100">{suraha}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-950 mb-5">What you can expect</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {promises.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 text-white rounded-[1.5rem] border border-slate-800 p-6 md:p-8 shadow-xl shadow-blue-900/10">
            <h2 className="text-2xl font-extrabold mb-5">What we do not promise</h2>
            <div className="space-y-4">
              {noPromises.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={21} className="text-cyan-300 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Project milestones</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              You should know what happens before each payment and decision.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold mb-4">{index + 1}</div>
                <h3 className="font-extrabold text-slate-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">After you contact us</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">A simple next-step process, not a sales maze.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {contactSteps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold mb-4">{index + 1}</div>
                <p className="text-slate-700 font-semibold leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-600 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-5">Start with the free tools or ask for a review.</h2>
          <p className="text-blue-100 text-base md:text-lg mb-8">No pressure, no jargon, no commitment before you understand the problem.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tools">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-blue-900 hover:bg-slate-50 font-bold">
                Use free tools
              </Button>
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/10">
              Book a free review <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustCentre;
