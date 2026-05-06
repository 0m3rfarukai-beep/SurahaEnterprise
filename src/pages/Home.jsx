import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, BarChart, Search, ShieldCheck, 
  Cpu, Layers, TrendingUp, MessageCircle, Package, 
  CheckCircle2, Zap, Clock, Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import HeroDashboard from '@/components/HeroDashboard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const faqs = [
  { question: 'What is the typical timeline for a new website?', answer: 'Most custom websites take between 4 to 8 weeks from initial discovery to launch, depending on the complexity and features required.' },
  { question: 'Do you provide ongoing support after launch?', answer: 'Yes, all our Growth and Premium packages include ongoing technical support, security updates, and performance monitoring.' },
  { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. We use a mobile-first design approach ensuring your site looks and performs flawlessly across all devices.' },
  { question: 'Are there any hidden fees?', answer: 'No. Our pricing is completely transparent. You will know exactly what you are paying for with our fixed monthly retainers or project fees.' },
  { question: 'How much does a custom website cost?', answer: 'We offer an interactive estimator tool to get an immediate price range. Typically, standard business sites start at £1,200, while custom web apps or e-commerce can start around £2,500+.' },
  { question: 'How do I get a free consultation?', answer: 'Simply click "Get a Free Website Audit" or "Get a Quote" anywhere on the site. We provide a zero-commitment discovery call to understand your needs.' }
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
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-950 flex items-center pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-[-20%] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,transparent_60%)] blur-[60px] z-0 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_60%)] blur-[50px] z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid xl:grid-cols-12 items-center gap-12 lg:gap-16">
          <motion.div className="xl:col-span-6" initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-white/90 uppercase">UK Digital Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Websites That <br className="hidden sm:block" />Actually Get You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">More Customers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
              We design fast, modern websites and run SEO campaigns that help UK small businesses get found online and turn visitors into paying customers.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-base sm:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1">
                  Get a Free Website Audit
                </Button>
              </Link>
              <Link to="/services" className="text-base sm:text-lg font-semibold text-white flex items-center gap-2 hover:text-cyan-400 hover:gap-4 transition-all">
                View Services <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <HeroDashboard />
        </div>
      </section>

      {/* 2. Trust Points — Real, Believable */}
      <section className="py-12 md:py-16 bg-slate-900 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-center">
            {[
              { icon: Zap, text: "Fast-Loading Sites" },
              { icon: CheckCircle2, text: "Transparent Pricing" },
              { icon: Globe, text: "UK-Focused Support" },
              { icon: MessageCircle, text: "No Jargon, Ever" },
              { icon: Headphones, text: "Free Consultation" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col items-center gap-3 py-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <item.icon size={22} />
                </div>
                <span className="text-sm font-bold text-slate-300 tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do — Services Preview */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">Everything Your Business Needs Online</h2>
            <p className="text-lg md:text-xl text-slate-700">From a brand new website to ongoing SEO and marketing — we handle it all so you can focus on running your business.</p>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Globe} title="Website Design" desc="Custom, mobile-friendly websites built to convert visitors into customers." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={BarChart} title="Digital Marketing" desc="Google Ads, social media, and email campaigns that bring real leads to your door." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Search} title="SEO & Analytics" desc="Get found on Google for the searches your customers are already making." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Cpu} title="IT Support" desc="Reliable tech support and maintenance so your systems never let you down." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={ShieldCheck} title="Cyber Security" desc="Keep your business and customer data safe with essential security measures." /></motion.div>
            <motion.div className="flex" variants={fadeIn}><ServiceCard icon={Layers} title="Training & Strategy" desc="Digital strategy sessions and training to empower your team's skills." /></motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all">
              See All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Results We've Delivered (Sample Projects) */}
      <section className="py-20 md:py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Sample Project Results</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">Here's the kind of impact we deliver for our clients. These are example scenarios based on typical outcomes.</p>
            </div>
            <Link to="/estimator" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-bold transition-all hover:gap-4 shrink-0">
              Try the Cost Estimator <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { challenge: "Outdated website with no online bookings.", solution: "Modern redesign with integrated booking system.", result: "3x more enquiries within 8 weeks.", label: "Website Redesign" },
              { challenge: "Not appearing on Google for key services.", solution: "Technical SEO audit and content strategy.", result: "Page 1 for 12 local search terms.", label: "SEO Campaign" },
              { challenge: "Slow website causing visitors to leave.", solution: "Performance optimisation and hosting upgrade.", result: "Under 1 second load time achieved.", label: "Speed Optimisation" }
            ].map((study, idx) => (
              <motion.div key={idx} whileHover={{ y: -8 }} className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 p-8 rounded-[2rem] flex flex-col justify-between group transition-colors shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-md mb-6">{study.label}</span>
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Challenge</p>
                    <p className="text-slate-200 text-base md:text-lg font-medium">{study.challenge}</p>
                  </div>
                  <div className="mb-8">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Our Approach</p>
                    <p className="text-slate-200 text-base md:text-lg font-medium">{study.solution}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="p-4 bg-blue-600/10 border border-blue-600/20 rounded-xl group-hover:bg-blue-600/20 transition-colors">
                    <p className="text-xs text-blue-400 uppercase font-bold tracking-wider mb-1">Outcome</p>
                    <p className="text-white font-extrabold text-xl">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8 italic">*These are representative examples based on typical project outcomes.</p>
        </div>
      </section>

      {/* 5. Before/After Slider */}
      <BeforeAfterSlider />

      {/* 6. Why Choose Suraha */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Small Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 h-auto items-stretch">
            <div className="md:col-span-2 rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-10 md:p-14 relative overflow-hidden group flex flex-col justify-center min-h-[320px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-all duration-700 pointer-events-none" />
              <div className="inline-flex p-4 rounded-2xl bg-blue-900/40 text-cyan-400 mb-6 sm:mb-8 backdrop-blur-md border border-blue-500/20 w-fit">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Results You Can Measure</h3>
              <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed">
                We focus on what actually matters: more website visitors, more enquiries, and more customers. Every project comes with clear reporting so you can see exactly what's working.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-10 md:p-12 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col min-h-[320px]">
               <div className="text-blue-600 mb-6 sm:mb-8 w-fit"><MessageCircle size={36} strokeWidth={1.5} /></div>
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">Speak to Real People</h3>
               <p className="text-slate-700 leading-relaxed text-base md:text-lg">No account managers or bots. You talk directly to the people building your website.</p>
            </div>

            <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-10 md:p-12 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col min-h-[320px]">
               <div className="text-blue-600 mb-6 sm:mb-8 w-fit"><Package size={36} strokeWidth={1.5} /></div>
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">No Surprises on Price</h3>
               <p className="text-slate-700 leading-relaxed text-base md:text-lg">We quote clearly upfront. No hidden fees, no unexpected invoices. What we quote is what you pay.</p>
            </div>

            <div className="md:col-span-2 rounded-[2.5rem] bg-blue-600 p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden min-h-[200px] gap-8 md:gap-0">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Not sure what you need?</h3>
                 <p className="text-blue-100 text-lg md:text-xl font-medium">Take our 60-second quiz and get a personalised recommendation.</p>
               </div>
               <Link to="/quiz" className="relative z-10">
                 <Button className="bg-white text-blue-900 hover:bg-slate-50 h-14 px-8 text-base md:text-lg font-bold rounded-xl shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
                   Take the Quiz
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How We Work */}
      <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">How We Work</h2>
            <p className="text-lg md:text-xl text-slate-300">A clear, step-by-step process so you always know what's happening.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 md:-translate-x-1/2 rounded-full" />
            
            {[
              { phase: "01", title: "Free Discovery Call", desc: "We learn about your business, goals, and challenges. No pressure, no jargon — just an honest conversation." },
              { phase: "02", title: "Strategy & Design", desc: "We create a clear plan and design mockups for you to review and approve before any code is written." },
              { phase: "03", title: "Build & Test", desc: "Our developers build your site with modern technology, then test it across every device and browser." },
              { phase: "04", title: "Launch & Grow", desc: "We launch your site, set up analytics, and start SEO and marketing to bring in real results." }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center justify-between mb-16 md:mb-20 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-[45%]" />
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-blue-600 border-4 border-slate-950 rounded-full -translate-x-1/2 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10">
                  {step.phase}
                </div>
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-colors duration-300">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Preview */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Simple, Honest Pricing</h2>
            <p className="text-lg md:text-xl text-slate-700 mt-6 max-w-2xl mx-auto">Fixed monthly plans with everything included. No setup fees, no surprises.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            <PricingCard 
               title="Starter" desc="A professional website to get your business online." price="599" 
               features={['Custom 5-Page Website', 'Basic Local SEO Setup', 'Mobile Responsive Design', 'Standard Email Support']} 
            />
            <PricingCard 
               title="Growth" isPopular={true} desc="Website plus ongoing SEO and marketing." price="799" 
               features={['Everything in Starter', 'Active Monthly SEO', 'Social Media Management', 'Google Business Profile', 'Priority 24hr Support']} 
            />
            <PricingCard 
               title="Premium" desc="Full digital management for growing businesses." price="999" 
               features={['Everything in Growth', 'E-commerce Support', 'Dedicated Account Manager', 'Cyber Security & Backups', '24/7 Priority IT Support']} 
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all">
              Compare All Plans <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 md:py-32 bg-blue-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
         
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8">
            Ready to get more <br className="hidden md:block" /> customers online?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto mb-12">
            Book a free, no-pressure call. We'll look at your website, find what's holding you back, and give you an honest plan to fix it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-lg font-bold bg-white text-blue-900 hover:bg-slate-50 rounded-full shadow-2xl shadow-black/20 transition-transform hover:-translate-y-1">
                Get a Free Website Audit
              </Button>
            </Link>
            <Link to="/estimator">
              <Button size="lg" variant="outline" className="h-14 md:h-16 px-8 md:px-10 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-transform hover:-translate-y-1">
                Try the Cost Estimator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
