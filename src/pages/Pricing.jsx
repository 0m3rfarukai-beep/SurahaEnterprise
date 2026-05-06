import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const faqs = [
    { question: 'What is the typical timeline for a new website?', answer: 'Most custom websites take between 4 to 8 weeks from initial discovery to launch, depending on the complexity and features required.' },
    { question: 'Do you provide ongoing support after launch?', answer: 'Yes, all our Growth and Premium packages include ongoing technical support, security updates, and performance monitoring.' },
    { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. We utilize a mobile-first design approach ensuring your site looks and performs flawlessly across all devices.' },
    { question: 'Are there any hidden fees?', answer: 'No. Our pricing is completely transparent. You will know exactly what you are paying for with our fixed monthly retainers or project fees.' }
  ];

  const getPrice = (monthlyPrice) => {
    if (billingCycle === 'yearly') {
      // 20% discount for yearly — show discounted monthly price
      return Math.floor(monthlyPrice * 0.8);
    }
    return monthlyPrice;
  };

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              Pricing & Plans
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Simple, <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Transparent</span> Pricing
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-12">
              Choose the right tier to help your small business scale online. No hidden fees, no complex contracts.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10 shadow-2xl">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-300 hover:text-white'}`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-3 ${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-300 hover:text-white'}`}
              >
                Yearly Billing 
                <span className={`px-2.5 py-1 rounded-full text-xs uppercase tracking-wider ${billingCycle === 'yearly' ? 'bg-white/20 text-white' : 'bg-lime-400/20 text-lime-400'}`}>
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-32 -mt-16 md:-mt-24 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <PricingCard 
                title="Starter"
                desc="Essential web presence and basic support."
                price={getPrice(599)}
                period={billingCycle === 'yearly' ? 'mo (billed yearly)' : 'mo'}
                features={['Custom 5-Page Website', 'Basic Local SEO Setup', 'Mobile Responsive Design', 'Standard Email Support']}
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <PricingCard 
                isPopular={true}
                title="Growth"
                desc="Advanced digital marketing and active SEO."
                price={getPrice(799)}
                period={billingCycle === 'yearly' ? 'mo (billed yearly)' : 'mo'}
                features={['Everything in Starter', 'Active Monthly SEO Optimization', 'Social Media Management (2 platforms)', 'Google Business Profile Management', 'Monthly Performance Reporting', 'Priority Support (24hr response)']}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <PricingCard 
                title="Premium"
                desc="Comprehensive digital management for established teams."
                price={getPrice(999)}
                period={billingCycle === 'yearly' ? 'mo (billed yearly)' : 'mo'}
                features={['Everything in Growth', 'Full E-commerce capabilities', 'Dedicated Technical Account Manager', 'Advanced Cyber Security & Backups', 'Custom Workflow Integrations', '24/7 Priority IT Support']}
              />
            </motion.div>
          </div>
          
          {/* Custom Quote Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white p-8 md:px-12 md:py-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="bg-cyan-50 p-4 rounded-full text-cyan-600 shrink-0">
                <Info size={32} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl text-slate-700 mb-2">
                  Need a bespoke enterprise solution?
                </p>
                <Link to="/contact" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  Contact us for a custom quote <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
               <FAQAccordion faqs={faqs} />
            </div>
         </div>
      </section>
    </div>
  );
};

export default Pricing;
