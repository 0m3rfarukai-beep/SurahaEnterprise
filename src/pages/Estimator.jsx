import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const Estimator = () => {
  const [config, setConfig] = useState({
    type: 'business',
    pages: 5,
    seo: false,
    branding: false,
    support: false,
    marketing: false
  });

  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    let base = 0;
    if (config.type === 'brochure') base = 500;
    if (config.type === 'business') base = 1200;
    if (config.type === 'ecommerce') base = 2500;
    if (config.type === 'booking') base = 1800;
    if (config.type === 'custom') base = 4000;

    let pageCost = (config.pages - 1) * 100;
    if (pageCost < 0) pageCost = 0;

    let extras = 0;
    if (config.seo) extras += 400;
    if (config.branding) extras += 600;
    if (config.support) extras += 150;
    if (config.marketing) extras += 500;

    const totalMin = base + pageCost + extras;
    const totalMax = totalMin * 1.3;
    setEstimate({ min: totalMin, max: totalMax });
  }, [config]);

  const toggleBoolean = (field) => {
    setConfig(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <PageHeader
        eyebrow="Cost Estimator"
        title="Estimate a realistic website budget"
        description="Configure your project below and see a live starting range. No email required."
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-12 md:py-20 -mt-8">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Controls — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">1. Core Platform</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 block">Website Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'brochure', label: 'Simple Brochure' },
                      { id: 'business', label: 'Standard Business' },
                      { id: 'ecommerce', label: 'E-Commerce' },
                      { id: 'booking', label: 'Booking System' },
                      { id: 'custom', label: 'Custom Web App' }
                    ].map(type => (
                      <button
                        key={type.id}
                        onClick={() => setConfig(prev => ({ ...prev, type: type.id }))}
                        className={`p-3 sm:p-4 rounded-xl text-sm font-bold transition-all border-2 text-center ${
                          config.type === type.id 
                            ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                            : 'border-slate-100 text-slate-600 hover:border-blue-200'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Number of Pages: {config.pages}</label>
                  </div>
                  <input 
                    type="range" min="1" max="50" value={config.pages} 
                    onChange={(e) => setConfig({...config, pages: parseInt(e.target.value)})}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                    <span>1 page</span><span>50+ pages</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">2. Premium Add-ons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'seo', label: 'Advanced SEO Setup', desc: 'On-page optimization & schema' },
                  { id: 'branding', label: 'Logo & Branding', desc: 'Custom logo design & brand guide' },
                  { id: 'support', label: 'Monthly IT Support', desc: 'Managed hosting & maintenance' },
                  { id: 'marketing', label: 'Digital Marketing', desc: 'PPC or Social Media campaigns' }
                ].map(addon => (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={addon.id}
                    onClick={() => toggleBoolean(addon.id)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden ${
                      config[addon.id] 
                        ? 'border-blue-600 bg-blue-50/80 shadow-md shadow-blue-600/10' 
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2 relative z-10">
                      <span className={`font-bold text-base sm:text-lg ${config[addon.id] ? 'text-blue-700' : 'text-slate-900'}`}>{addon.label}</span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors shadow-sm shrink-0 ml-2 ${config[addon.id] ? 'bg-blue-600 border-blue-600 text-white' : 'border border-slate-300 bg-slate-100 text-transparent'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    </div>
                    <p className={`text-sm relative z-10 font-medium ${config[addon.id] ? 'text-blue-600/80' : 'text-slate-500'}`}>{addon.desc}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Sidebar — 2 cols */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-blue-900/30 border border-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
              
              <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 relative z-10">Estimated Investment</h3>
              
              {/* Price — stacked on mobile, inline on larger */}
              <motion.div 
                key={`${estimate.min}-${estimate.max}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 relative z-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:flex-wrap gap-1 sm:gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <span className="text-blue-400">£</span>{estimate.min.toLocaleString()}
                  </span>
                  <span className="text-xl sm:text-2xl text-slate-500 font-bold">—</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    £{Math.round(estimate.max).toLocaleString()}
                  </span>
                </div>
              </motion.div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 relative z-10">
                *Live estimate based on your selections. Final quote may vary for complex custom features.
              </p>

              <div className="space-y-4 relative z-10">
                <Link to="/contact" className="block">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-14 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-xl shadow-blue-600/30 border border-blue-400/20 text-white">
                      Request Exact Quote <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                    </Button>
                  </motion.div>
                </Link>
                <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest flex justify-center items-center gap-2">
                  <ShieldCheck size={14} className="text-slate-400" /> Zero Commitment
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Estimator;
