import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';

const plans = [
  {
    title: 'Starter Fix',
    bestFor: 'A careful first step before a larger project',
    price: 'From £350',
    timeline: '2-5 working days',
    deliverables: ['Homepage clarity review', 'Lead leak fixes', 'CTA and trust-section recommendations', 'Tracking-ready action list'],
    next: 'We send a short fix plan and agree the first quick wins.',
  },
  {
    title: 'Growth Website',
    bestFor: 'Replacing an old website with a lead-generating asset',
    price: 'From £1,200',
    timeline: '3-8 weeks',
    deliverables: ['Mobile-first website', 'Service page structure', 'Lead capture flow', 'CMS where useful', 'Launch checklist'],
    next: 'We confirm scope, milestones, content needs, and launch date.',
    featured: true,
  },
  {
    title: 'Local Growth Plan',
    bestFor: 'Getting found by local customers month by month',
    price: 'From £400/mo',
    timeline: 'Monthly',
    deliverables: ['Local SEO action plan', 'Google Business Profile support', 'Content recommendations', 'Monthly reporting'],
    next: 'We review search opportunities and agree the first month of actions.',
  },
  {
    title: 'Care & Support',
    bestFor: 'Keeping the website secure, updated, and improving',
    price: 'From £150/mo',
    timeline: 'Monthly',
    deliverables: ['Updates and checks', 'Small fixes', 'Backup checks', 'Monthly improvement notes'],
    next: 'We check the site, set the support rhythm, and confirm priorities.',
  },
];

const faqs = [
  { question: 'Can I request an exact quote?', answer: 'Yes. Starting prices help you understand the likely level of investment, but exact quotes are provided after a quick review of your goals, current site, and scope.' },
  { question: 'What happens after payment?', answer: 'You receive a confirmation, the agreed milestone plan, what we need from you, and the first delivery date. For suitable projects, payment can be split by milestone.' },
  { question: 'Are there hidden fees?', answer: 'No. Any third-party costs such as hosting, domains, plugins, ad spend, or stock assets are explained before purchase.' },
  { question: 'Do I have to sign a long contract?', answer: 'No. Project work is milestone-based. Monthly plans are designed to stay clear and low-pressure.' },
];

const Pricing = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8">
            Pricing Guidance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Start small, know the cost, and only pay for what makes sense.
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transparent starting prices for careful UK business owners. Request an exact quote when the scope is clear.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className={`rounded-2xl p-6 border flex flex-col h-full ${plan.featured ? 'bg-slate-950 text-white border-slate-900 shadow-xl shadow-blue-900/15' : 'bg-white text-slate-950 border-slate-100 shadow-sm'}`}
              >
                {plan.featured && <span className="self-start px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-5">Most common</span>}
                <h2 className="text-xl font-extrabold mb-2">{plan.title}</h2>
                <p className="text-3xl font-extrabold text-blue-500 mb-5">{plan.price}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className={plan.featured ? 'rounded-xl bg-white/5 p-3' : 'rounded-xl bg-slate-50 p-3'}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Best for</p>
                    <p className={plan.featured ? 'text-sm text-slate-200 mt-1' : 'text-sm text-slate-700 mt-1'}>{plan.bestFor}</p>
                  </div>
                  <div className={plan.featured ? 'rounded-xl bg-white/5 p-3' : 'rounded-xl bg-slate-50 p-3'}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Timeline</p>
                    <p className={plan.featured ? 'text-sm text-slate-200 mt-1' : 'text-sm text-slate-700 mt-1'}>{plan.timeline}</p>
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  {plan.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={plan.featured ? 'text-cyan-300 shrink-0 mt-0.5' : 'text-blue-600 shrink-0 mt-0.5'} />
                      <span className={plan.featured ? 'text-slate-200 text-sm' : 'text-slate-700 text-sm'}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className={plan.featured ? 'mt-5 rounded-xl bg-white/5 p-3' : 'mt-5 rounded-xl bg-blue-50 p-3'}>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500">What happens next</p>
                  <p className={plan.featured ? 'text-sm text-slate-200 mt-1' : 'text-sm text-slate-700 mt-1'}>{plan.next}</p>
                </div>
                <Link to="/contact" className={`mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-xl font-bold ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                  Request exact quote <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {['Review the scope together', 'Agree milestones and payment points', 'Start with clear next actions'].map((item, index) => (
              <div key={item} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">{index + 1}</div>
                <div>
                  <h3 className="font-extrabold text-slate-950">{item}</h3>
                  <p className="text-sm text-slate-600 mt-1">You know what happens before money is committed to the next stage.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-8 mb-8 flex gap-4">
            <Info size={28} className="text-blue-600 shrink-0" />
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 mb-2">Pricing should reduce uncertainty, not create pressure.</h2>
              <p className="text-slate-700 leading-relaxed">Use these starting prices to decide whether a conversation is worthwhile. We will not push a bigger package if a smaller fix is the honest next step.</p>
            </div>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-600 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <ClipboardCheck size={34} className="text-white mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-5">Need the right option, not the biggest option?</h2>
          <p className="text-blue-100 text-base md:text-lg mb-8">Book a free review and we will explain what should be fixed first.</p>
          <Link to="/tools" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold">
            Not sure? Start with a free Growth Check <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
