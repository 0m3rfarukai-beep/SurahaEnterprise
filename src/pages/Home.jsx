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

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 font-bold text-xs uppercase tracking-widest mb-6">
              <Eye size={14} /> Growth platform for UK small businesses
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-2xl">
              Is your website helping you win customers, or quietly losing them?
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              Suraha Enterprise helps UK small businesses turn websites, SEO, content, and digital tools into real enquiries with clear advice, transparent pricing, and practical systems built for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/tools">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-600/25">
                  Get a free website growth check
                </Button>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 md:h-14 px-6 rounded-full border border-white/15 text-white font-bold hover:bg-white/10 transition-colors">
                Book a free consultation <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 max-w-xl">
              {['No jargon', 'No fake traffic', 'Clear milestones', 'Client-owned assets'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-bold text-slate-200 text-center">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            <GrowthCheckTool compact />
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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

      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-start">
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

      <section className="py-14 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
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
              <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 h-full">
                <span className="inline-flex mb-4 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">{card.label}</span>
                <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6">Where real client projects are unavailable, examples are clearly labelled as sample scenarios.</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
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

      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <AlertTriangle size={32} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Questions careful business owners ask first</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-600 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
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
      </section>
    </div>
  );
};

export default Home;
