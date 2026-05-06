import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, BarChart, Search, ShieldCheck, 
  Cpu, Layers, TrendingUp, MessageCircle, Package, Star, 
  CheckCircle2, Users, Zap, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import HeroDashboard from '@/components/HeroDashboard';
import Counter from '@/components/AnimatedCounter';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const faqs = [
  { question: 'What is the typical timeline for a new website?', answer: 'Most custom websites take between 4 to 8 weeks from initial discovery to launch, depending on the complexity and features required.' },
  { question: 'Do you provide ongoing support after launch?', answer: 'Yes, all our Growth and Premium packages include ongoing technical support, security updates, and performance monitoring.' },
  { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. We utilize a mobile-first design approach ensuring your site looks and performs flawlessly across all devices.' },
  { question: 'Are there any hidden fees?', answer: 'No. Our pricing is completely transparent. You will know exactly what you are paying for with our fixed monthly retainers or project fees.' },
  { question: 'How much does a custom website cost?', answer: 'We offer an interactive estimator tool to get an immediate price range. Typically, standard business sites start at £1,200, while custom web apps or e-commerce can start around £2,500+.' },
  { question: 'How do I get a free consultation?', answer: 'Simply click "Request a Consultation" or "Get a Quote" anywhere on the site. We provide a zero-commitment discovery call to understand your needs.' }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      
      {/* 1. Premium Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-950 flex items-center pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        {/* Cinematic Lighting */}
        <div className="absolute top-[-20%] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,transparent_60%)] blur-[60px] z-0 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_60%)] blur-[50px] z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid xl:grid-cols-12 items-center gap-16 md:gap-12">
          <motion.div className="xl:col-span-6" initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-white/90 uppercase">Premium Digital Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              We Build Websites <br className="hidden sm:block" />That Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Business</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
              Affordable websites, SEO, and digital marketing for UK small businesses. Real results, no jargon.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1">
                  Start a Project
                </Button>
              </Link>
              <Link to="/services" className="text-lg font-semibold text-white flex items-center gap-2 hover:text-cyan-400 hover:gap-4 transition-all">
                View Services <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <HeroDashboard />
        </div>
      </section>

      {/* 4. Trust Badges */}
      <section className="py-12 md:py-20 bg-slate-900 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-10">Trusted by growing businesses across the UK</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text logos for demonstration */}
            <span className="text-2xl font-bold text-white flex items-center gap-2"><Globe size={28} /> Vertex</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2"><TrendingUp size={28} /> Synthetix</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2"><Cpu size={28} /> Quantis</span>
            <span className="text-2xl font-bold text-white flex items-center gap-2"><Layers size={28} /> Omnia</span>
          </div>
        </div>
      </section>

      {/* 5. Stats Section (NEW) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {[
              { icon: CheckCircle2, stat: 150, suffix: "+", label: "Projects Delivered" },
              { icon: Users, stat: 98, suffix: "%", label: "Client Retention" },
              { icon: Zap, stat: 1, prefix: "< ", suffix: "s", label: "Avg. Load Time" },
              { icon: Award, stat: 12, suffix: "", label: "Industry Awards" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center p-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                  <Counter end={item.stat} prefix={item.prefix} suffix={item.suffix} />
                </h3>
                <p className="text-base md:text-lg font-bold text-slate-700">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Services Preview Cards */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">Precision Engineering</h2>
            <p className="text-lg md:text-xl text-slate-700">We don't do generic templates. We build bespoke digital infrastructure designed exclusively to dominate your sector.</p>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Globe} title="Website Design" desc="Bespoke, high-performance websites engineered for maximum conversion and speed." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={BarChart} title="Digital Marketing" desc="Targeted data-driven campaigns to radically expand your reach and drive quality leads." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Search} title="SEO & Analytics" desc="Advanced search optimization to dominate local and industry-specific search results." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Cpu} title="IT Support & Maintenance" desc="Reliable, proactive IT infrastructure management and rapid technical support." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={ShieldCheck} title="Cyber Security" desc="Essential threat protection and data security protocols for complete peace of mind." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Layers} title="Infrastructure Scaling" desc="Strategic tech guidance and architecture to empower your internal team's workflow." /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6.5 Case Studies / Results */}
      <section className="py-24 md:py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Proven Results</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">We don't just build websites; we engineer business growth. See how we've transformed our clients' digital presence.</p>
            </div>
            <Link to="/about" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-bold transition-all hover:gap-4 shrink-0">
              View All Case Studies <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { challenge: "Outdated brand & zero inbound leads.", solution: "Complete UX/UI redesign & automated booking system.", result: "215% increase in monthly qualified leads.", label: "Website Redesign" },
              { challenge: "Invisible on Google for key services.", solution: "Technical SEO overhaul & content strategy.", result: "Page 1 rankings for 15 high-intent keywords.", label: "SEO Campaign" },
              { challenge: "Frequent downtime & slow load speeds.", solution: "Migration to scalable cloud architecture.", result: "<0.5s load time & 99.99% uptime guaranteed.", label: "IT Infrastructure" }
            ].map((study, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 p-8 rounded-[2rem] flex flex-col justify-between group transition-colors shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-md mb-6">{study.label}</span>
                  <div className="mb-6">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Challenge</p>
                    <p className="text-slate-200 text-base md:text-lg font-medium">{study.challenge}</p>
                  </div>
                  <div className="mb-8">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Solution</p>
                    <p className="text-slate-200 text-base md:text-lg font-medium">{study.solution}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="p-4 bg-blue-600/10 border border-blue-600/20 rounded-xl mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <p className="text-xs text-blue-400 uppercase font-bold tracking-wider mb-1">Result</p>
                    <p className="text-white font-extrabold text-xl">{study.result}</p>
                  </div>
                  <button className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-cyan-400">Read Full Story <ArrowRight size={16} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6 Before/After Slider */}
      <BeforeAfterSlider />

      {/* 7. Why Choose Us (Bento Grid) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Suraha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Difference</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 h-auto items-stretch">
            {/* Large Feature Card (Col span 2) */}
            <div className="md:col-span-2 rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-10 md:p-14 relative overflow-hidden group flex flex-col justify-center min-h-[350px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-all duration-700 pointer-events-none" />
              <div className="inline-flex p-4 rounded-2xl bg-blue-900/40 text-cyan-400 mb-6 sm:mb-8 backdrop-blur-md border border-blue-500/20 w-fit">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Ruthless Focus on ROI</h3>
              <p className="text-base md:text-lg text-slate-200 max-w-lg leading-relaxed">
                We ignore vanity metrics. Every design choice, marketing campaign, and line of code is measured against actual revenue impact and operational efficiency.
              </p>
            </div>

            {/* Square Feature Card 1 */}
            <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-10 md:p-12 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col min-h-[350px]">
               <div className="text-blue-600 mb-6 sm:mb-8 w-fit"><MessageCircle size={36} strokeWidth={1.5} /></div>
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">Direct Communication</h3>
               <p className="text-slate-700 leading-relaxed text-base md:text-lg">No layers of account managers. Speak directly with the engineers executing your project.</p>
            </div>

            {/* Square Feature Card 2 */}
            <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-10 md:p-12 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col min-h-[350px]">
               <div className="text-blue-600 mb-6 sm:mb-8 w-fit"><Package size={36} strokeWidth={1.5} /></div>
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">Zero Hidden Fees</h3>
               <p className="text-slate-700 leading-relaxed text-base md:text-lg">Absolute pricing transparency. Our retainers are comprehensive, eliminating unexpected invoices.</p>
            </div>

            {/* Wide Feature Card (Col span 2) */}
            <div className="md:col-span-2 rounded-[2.5rem] bg-blue-600 p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden min-h-[200px] gap-8 md:gap-0">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Ready to scale?</h3>
                 <p className="text-blue-100 text-lg md:text-xl font-medium">Join 50+ businesses thriving with our infrastructure.</p>
               </div>
               <Link to="/about" className="relative z-10">
                 <Button className="bg-white text-blue-900 hover:bg-slate-50 h-14 px-8 text-base md:text-lg font-bold rounded-xl shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
                   Read Our Story
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Timeline (NEW) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Our Proven Process</h2>
            <p className="text-lg md:text-xl text-slate-200">A systematic, transparent approach to delivering world-class digital solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 md:-translate-x-1/2 rounded-full" />
            
            {[
              { phase: "01", title: "Discovery & Strategy", desc: "We deep-dive into your business model, competitors, and goals to forge a bulletproof digital strategy." },
              { phase: "02", title: "UX/UI Design", desc: "We craft high-fidelity, premium prototypes focusing on user psychology and maximum conversion rates." },
              { phase: "03", title: "Engineering", desc: "Our developers build scalable, blazing-fast infrastructure using modern enterprise-grade tech stacks." },
              { phase: "04", title: "Launch & Scale", desc: "Rigorous QA testing, deployment, and ongoing SEO/marketing campaigns to guarantee ROI." }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center justify-between mb-16 md:mb-24 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-[45%]" />
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-blue-600 border-4 border-slate-950 rounded-full -translate-x-1/2 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10">
                  {step.phase}
                </div>
                
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-colors duration-300">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing Preview */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Transparent Retainers</h2>
            <p className="text-lg md:text-xl text-slate-700 mt-6 max-w-2xl mx-auto">Predictable pricing for enterprise-level quality.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            <PricingCard 
               title="Starter" desc="Essential web presence and basic support." price="599" 
               features={['Custom 5-Page Website', 'Basic Local SEO Setup', 'Mobile Responsive Design', 'Standard Email Support']} 
            />
            <PricingCard 
               title="Growth" isPopular={true} desc="Advanced digital marketing and active SEO." price="799" 
               features={['Everything in Starter', 'Active Monthly SEO', 'Social Media Management', 'Google Business Profile', 'Priority 24hr Support']} 
            />
            <PricingCard 
               title="Premium" desc="Comprehensive digital management & IT." price="999" 
               features={['Everything in Growth', 'Full E-commerce Support', 'Dedicated Account Manager', 'Advanced Cyber Security', '24/7 Priority IT Support']} 
            />
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-20 md:py-40 bg-blue-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
         
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-8 drop-shadow-xl">
            Build something <br className="hidden md:block" /> exceptional.
          </h2>
          <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto mb-12">
            Stop settling for basic templates. Partner with engineers who understand enterprise scale.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl font-bold bg-white text-blue-900 hover:bg-slate-50 rounded-full shadow-2xl shadow-black/20 transition-transform hover:-translate-y-1">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
