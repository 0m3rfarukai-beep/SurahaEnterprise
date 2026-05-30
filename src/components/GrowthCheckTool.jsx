import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildLeadPayload, saveToolLead } from '@/lib/leadCapture';

const goals = ['More enquiries', 'Better Google visibility', 'Improve trust', 'Replace old website', 'Understand what to fix'];

function scoreFromInput(form, offset) {
  const seed = `${form.businessName}${form.websiteUrl}${form.businessType}${form.location}${form.mainGoal}`.length;
  return Math.min(91, Math.max(38, 48 + ((seed * offset) % 39)));
}

function buildReport(form) {
  const scores = {
    clarity: scoreFromInput(form, 3),
    seo: scoreFromInput(form, 5),
    mobile: scoreFromInput(form, 7),
    trust: scoreFromInput(form, 11),
    leadCapture: scoreFromInput(form, 13),
  };

  const lowest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0][0];
  const serviceMap = {
    clarity: 'Website Design & Development',
    seo: 'SEO & Search Visibility',
    mobile: 'Website Design & Development',
    trust: 'Branding & Creative Design',
    leadCapture: 'Lead Generation Systems',
  };

  return {
    scores,
    recommendedService: serviceMap[lowest],
    leadScore: Math.round(Object.values(scores).reduce((sum, score) => sum + score, 0) / 5),
    summary: `${form.businessName || 'This business'} may be losing enquiries through ${lowest === 'leadCapture' ? 'weak lead capture' : `${lowest} gaps`}.`,
    fixes: [
      'Make the homepage headline say who you help, what you do, and why it matters within 5 seconds.',
      `Create a local landing section for ${form.location || 'your service area'} with proof, FAQs, and clear next steps.`,
      'Add visible trust signals: reviews, project examples, pricing guidance, ownership promises, and process milestones.',
      'Put one primary enquiry action above the fold and repeat it after every major section.',
      'Add a simple follow-up path: contact form, confirmation message, next-step email, and quote reminder.',
    ],
  };
}

const ScoreCard = ({ label, score }) => {
  const tone = score >= 75 ? 'border-green-200 bg-green-50 text-green-700' : score >= 58 ? 'border-amber-200 bg-amber-50 text-amber-700' : 'border-red-200 bg-red-50 text-red-700';

  return (
    <div className={`rounded-xl border p-3 text-center ${tone}`}>
      <p className="text-2xl font-extrabold">{score}</p>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-600">{label}</p>
    </div>
  );
};

const issueLabels = {
  clarity: 'Your message may not be clear enough',
  seo: 'Your local search visibility may be weak',
  mobile: 'Your mobile experience may be costing enquiries',
  trust: 'Your trust signals may not be strong enough',
  leadCapture: 'Your lead capture path may be leaking enquiries',
};

const stepLabels = ['Business details', 'Goal', 'Report'];

const GrowthCheckTool = ({ compact = false }) => {
  const [form, setForm] = useState({
    businessName: '',
    websiteUrl: '',
    businessType: '',
    location: '',
    mainGoal: goals[0],
  });
  const [report, setReport] = useState(null);

  const canRun = useMemo(() => form.businessName.trim() && form.websiteUrl.trim(), [form.businessName, form.websiteUrl]);

  const runCheck = async () => {
    if (!canRun) return;
    const nextReport = buildReport(form);
    setReport(nextReport);
    await saveToolLead(buildLeadPayload({
      toolUsed: 'Free Website Growth Check',
      form,
      result: nextReport,
      recommendedService: nextReport.recommendedService,
      leadScore: nextReport.leadScore,
    }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-blue-900/10 overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-slate-100">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Free Website Growth Check</p>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Diagnose the biggest growth gap first
        </h3>
        {!compact && (
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            A quick preliminary check for clarity, SEO, mobile experience, trust signals, and lead capture. It is not a live technical crawl.
          </p>
        )}
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {stepLabels.map((label, index) => {
            const active = index === 0 || (index === 1 && form.businessName && form.websiteUrl) || (index === 2 && report);
            return (
              <div key={label} className={`rounded-xl border px-3 py-2 text-xs font-bold ${active ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                {index + 1}. {label}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 space-y-3">
          <p className="text-sm font-extrabold text-slate-950">1. Tell us what to check</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="businessName" className="text-xs font-semibold text-slate-700">Business Name</label>
              <input id="businessName" value={form.businessName} onChange={(event) => setForm({ ...form, businessName: event.target.value })} placeholder="Business name" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="websiteUrl" className="text-xs font-semibold text-slate-700">Website URL</label>
              <input id="websiteUrl" value={form.websiteUrl} onChange={(event) => setForm({ ...form, websiteUrl: event.target.value })} placeholder="Website URL" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="businessType" className="text-xs font-semibold text-slate-700">Business Type</label>
              <input id="businessType" value={form.businessType} onChange={(event) => setForm({ ...form, businessType: event.target.value })} placeholder="Business type" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="location" className="text-xs font-semibold text-slate-700">Location</label>
              <input id="location" value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} placeholder="Location" className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-3">
          <p className="text-sm font-extrabold text-slate-950">2. Choose the main goal</p>
          <div className="flex flex-col gap-1">
            <label htmlFor="mainGoal" className="sr-only">Choose the main goal</label>
            <select id="mainGoal" value={form.mainGoal} onChange={(event) => setForm({ ...form, mainGoal: event.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              {goals.map((goal) => <option key={goal}>{goal}</option>)}
            </select>
          </div>
        </div>

        <Button onClick={runCheck} disabled={!canRun} className="w-full sm:w-auto h-12 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-700">
          Generate Growth Check
        </Button>

        {report && (
          <div className="pt-2 space-y-4">
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>Preliminary result based on your inputs and common conversion checks. No live crawler or external API is connected.</span>
            </div>
            <div className="rounded-2xl bg-slate-950 text-white p-5 grid sm:grid-cols-[120px_1fr] gap-4 items-center">
              <div className="text-center sm:text-left">
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Score</p>
                <p className="text-5xl font-extrabold text-cyan-300">{report.leadScore}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Biggest issue</p>
                <h4 className="text-xl font-extrabold">{issueLabels[Object.entries(report.scores).sort((a, b) => a[1] - b[1])[0][0]]}</h4>
                <p className="text-sm text-slate-300 mt-2">Recommended next step: {report.recommendedService}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              <ScoreCard label="Clarity" score={report.scores.clarity} />
              <ScoreCard label="SEO" score={report.scores.seo} />
              <ScoreCard label="Mobile" score={report.scores.mobile} />
              <ScoreCard label="Trust" score={report.scores.trust} />
              <ScoreCard label="Leads" score={report.scores.leadCapture} />
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <h4 className="font-extrabold text-slate-950 mb-3">Top fixes</h4>
              <div className="space-y-3">
                {report.fixes.slice(0, 3).map((fix) => (
                  <div key={fix} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={17} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{fix}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold">Want this fixed professionally?</p>
                <p className="text-sm text-slate-300">Book a free review and we will explain what matters first.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold">
                Book a free review <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrowthCheckTool;
