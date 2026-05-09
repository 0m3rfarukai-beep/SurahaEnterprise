import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileSearch,
  MessageCircle,
  PoundSterling,
  ShieldCheck,
  Smartphone,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQAccordion from '@/components/FAQAccordion';
import GrowthCheckTool from '@/components/GrowthCheckTool';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const problems = [
  { icon: MessageCircle, title: 'Unclear message', text: 'Visitors cannot quickly tell what you do, who you help, or why they should choose you.' },
  { icon: FileSearch, title: 'Weak local SEO', text: 'Your ideal customers are searching, but competitors appear first on Google and maps.' },
  { icon: Smartphone, title: 'Poor mobile layout', text: 'People on phones struggle to read, trust, or contact you quickly.' },
  { icon: ShieldCheck, title: 'No trust signals', text: 'Pricing, proof, ownership, reviews, and process are not visible enough.' },
  { icon: Target, title: 'No follow-up system', text: 'Enquiries are not captured, qualified, followed up, or turned into booked work.' },
];

const proofCards = [
  { label: 'Sample audit report', title: 'Lead leak report preview', text: 'A clear example of how we flag message, SEO, mobile, trust, and lead-capture gaps before recommending paid work.' },
  { label: 'Example scenario', title: 'Service business redesign', text: 'Before: vague homepage and hidden contact form. After: local proof, stronger offer, clear enquiry path, and quote follow-up.' },
  { label: 'Process preview', title: 'Milestone-based delivery', text: 'Discovery, audit, wireframe, build, launch, reporting. You know what is happening before each payment stage.' },
];

const faqs = [
  { question: 'Is the free growth check a full audit?', answer: 'No. It is a preliminary instant audit based on your inputs and common conversion checks. A full technical crawl or SEO audit requires live tools and manual review.' },
  { question: 'Do you guarantee rankings or enquiries?', answer: 'No. We do not promise fake traffic, fixed rankings, or instant results. We focus on practical improvements that make your website clearer, easier to trust, and easier to enquire through.' },
  { question: 'Will I own my website and accounts?', answer: 'Yes. Client ownership is a core principle. You should own your website, domain, hosting, analytics, Google Business Profile, and key logins.' },
  { question: 'Can I start small?', answer: 'Yes. Many businesses begin with a Starter Fix, then move into a website, SEO, or care plan once the priorities are clear.' },
];

const AuditPreview = () => (
  <div className="relative">
    <div className="absolute -top-6 -right-5 w-20 h-20 rounded-full bg-cyan-300/20 border border-cyan-200/20" />
    <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-500/15 rotate-6" />
  <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-blue-950/20 p-5 md:p-6">
    <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Sample Growth Report</p>
        <h3 className="text-xl font-extrabold text-slate-950 mt-1">Website lead health</h3>
      </div>
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
        <span className="text-2xl font-extrabold">68</span>
      </div>
    </div>
    <div className="py-5 space-y-3">
      {[
        ['Clarity', 'Good', 'w-[78%]'],
        ['Local SEO', 'Needs work', 'w-[52%]'],
        ['Trust signals', 'Needs work', 'w-[46%]'],
        ['Lead capture', 'At risk', 'w-[39%]'],
      ].map(([label, status, width]) => (
        <div key={label}>
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="font-bold text-slate-800">{label}</span>
            <span className="text-slate-500">{status}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full rounded-full bg-blue-600 ${width}`} />
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-2xl bg-slate-950 text-white p-4">
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2">Recommended next step</p>
      <p className="font-bold leading-snug">Fix trust signals and enquiry flow before spending more on traffic.</p>
    </div>
  </div>
  </div>
);

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      <section className="relative bg-slate-950 pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute top-24 left-[6%] w-24 h-24 rounded-full border border-white/10" />
        <div className="absolute bottom-16 right-[46%] w-16 h-16 bg-blue-500/10 rotate-12" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.88fr)] gap-10 lg:gap-14 items-center max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 font-bold text-xs uppercase tracking-widest mb-6">
              <Eye size={14} /> Growth platform for UK small businesses
            </div>
            <h1 className="text-[2.35rem] sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.03] tracking-tight mb-5 max-w-3xl">
              Get a clearer website that earns trust and brings in better enquiries.
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Suraha helps UK small businesses fix unclear messaging, weak local visibility, missing proof, and enquiry leaks before spending more on ads or rebuilds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/tools">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-xl shadow-blue-600/25 transition-transform hover:-translate-y-0.5">
                  Run the Free Growth Check
                </Button>
              </Link>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 h-12 md:h-14 px-6 rounded-full border border-white/15 text-white font-extrabold hover:bg-white/10 transition-colors">
                View transparent pricing <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 max-w-2xl">
              {['No jargon', 'Transparent pricing', 'UK small business focused', 'You keep ownership'].map((item) => (
                <div key={item} className="min-h-14 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-bold text-slate-200 text-center flex items-center justify-center">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="w-full max-w-[520px] justify-self-center lg:justify-self-end">
            <AuditPreview />
          </motion.div>
        </div>
      </section>

      <div className="bg-white border-y border-slate-200 overflow-hidden" aria-hidden="true">
        <div className="whitespace-nowrap py-3 text-xs md:text-sm font-bold tracking-[0.22em] text-slate-400 uppercase">
          <div className="inline-block animate-[marquee_24s_linear_infinite]">
            Website clarity &bull; Local SEO &bull; Lead capture &bull; Trust signals &bull; Conversion &bull; Growth &bull;&nbsp;
            Website clarity &bull; Local SEO &bull; Lead capture &bull; Trust signals &bull; Conversion &bull; Growth &bull;&nbsp;
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 md:p-6 shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-start">
              <div className="p-2 md:p-4">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Free diagnostic module</p>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">Get your free Website Growth Check.</h2>
                <p className="text-slate-700 leading-relaxed max-w-xl">A report-style check for clarity, SEO visibility, trust signals, and lead capture. Built to show the most useful next step before you spend money.</p>
                <div className="mt-6 space-y-3">
                  {['Add your business details', 'Choose the main growth goal', 'Review the score, issue, and fixes'].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 border-t border-slate-200 pt-3">
                      <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-extrabold text-blue-600">{index + 1}</span>
                      <span className="text-sm font-bold text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <GrowthCheckTool />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="max-w-3xl mb-9">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Common lead leaks</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Most websites do not fail loudly. They quietly lose trust before the first call.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div key={problem.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 h-full">
                  <Icon size={24} className="text-blue-600 mb-3" />
                  <h3 className="font-extrabold text-slate-950 mb-2">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-start max-w-[1200px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">What we build</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 leading-tight">
              Practical systems that make your business easier to find, trust, and contact.
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-7 max-w-xl">
              We start with the business problem, then recommend the smallest useful fix: a clearer homepage, local SEO foundation, trust content, a lead capture system, or a full growth website.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700">
                View problem-led services <ArrowRight size={18} />
              </Link>
              <Link to="/trust-centre" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-800 font-bold hover:bg-white">
                Read our trust promise
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: ClipboardCheck, title: 'Website growth audit', text: 'Find the highest-impact fixes before spending.' },
              { icon: BarChart3, title: 'Local SEO foundations', text: 'Pages, Google Business Profile, and content built around buyer searches.' },
              { icon: PoundSterling, title: 'Transparent pricing', text: 'Starting prices, milestones, and exact quotes before work begins.' },
              { icon: CheckCircle2, title: 'Lead follow-up', text: 'Forms, confirmation messages, and follow-up prompts that reduce missed enquiries.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm h-full">
                  <Icon size={25} className="text-blue-600 mb-3" />
                  <h3 className="text-lg font-extrabold text-slate-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-[1120px]">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">No jargon</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Plain English beats agency theatre.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              ['Full funnel optimisation', 'We make each page clearer so more visitors know what to do next.'],
              ['Technical SEO architecture', 'We fix the page structure Google and customers need to understand your services.'],
              ['Conversion enablement assets', 'We add proof, pricing guidance, FAQs, and better enquiry prompts.'],
            ].map(([jargon, plain]) => (
              <div key={jargon} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-400 mb-2">Agency jargon</p>
                <p className="font-extrabold text-slate-950 mb-4">{jargon}</p>
                <p className="text-sm font-bold text-blue-600 mb-2">What we actually do</p>
                <p className="text-slate-700 leading-relaxed">{plain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300 mb-3">Proof without pretending</p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">See how the work is judged before you pay.</h2>
            </div>
            <Link to="/tools" className="text-cyan-300 font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
              Try the tools first <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {proofCards.map((card) => (
              <div key={card.title} className={`rounded-2xl border border-slate-800 bg-slate-900 p-6 h-full ${card.label === 'Example scenario' ? 'md:translate-y-6' : ''}`}>
                <span className="inline-flex mb-4 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">{card.label}</span>
                <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6">Where real client projects are unavailable, examples are clearly labelled as sample scenarios.</p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: 'Starter Fix', price: 'From £350', text: 'Best for fixing urgent trust, clarity, tracking, or conversion gaps.' },
              { title: 'Growth Website', price: 'From £1,200', text: 'Best for replacing an old site with a lead-generating business asset.' },
              { title: 'Local Growth Plan', price: 'From £400/mo', text: 'Best for improving local visibility, content, and reporting month by month.' },
            ].map((plan) => (
              <div key={plan.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 h-full">
                <h3 className="text-xl font-extrabold text-slate-950 mb-2">{plan.title}</h3>
                <p className="text-3xl font-extrabold text-blue-600 mb-3">{plan.price}</p>
                <p className="text-slate-600 leading-relaxed mb-5">{plan.text}</p>
                <Link to="/pricing" className="font-bold text-blue-600 inline-flex items-center gap-2">See pricing <ArrowRight size={16} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <AlertTriangle size={32} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Questions careful business owners ask first</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-950">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
            Start with value before you spend.
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Use the free tools, get a clearer view of what is holding your website back, then book a free review when you are ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tools">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-blue-900 hover:bg-slate-50 font-bold">
                Use free growth tools
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-white/40 text-white hover:bg-white/10 font-bold">
                Book a free consultation
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
