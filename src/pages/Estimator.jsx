import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Pricing logic
    let base = 0;
    if (config.type === 'brochure') base = 500;
    if (config.type === 'business') base = 1200;
    if (config.type === 'ecommerce') base = 2500;
    if (config.type === 'booking') base = 1800;
    if (config.type === 'custom') base = 4000;

    let pageCost = (config.pages - 1) * 100; // First page included
    if (pageCost < 0) pageCost = 0;

    let extras = 0;
    if (config.seo) extras += 400;
    if (config.branding) extras += 600;
    if (config.support) extras += 150; // Monthly, but factored as setup for estimate visually or noted
    if (config.marketing) extras += 500; // Monthly

    const totalMin = base + pageCost + extras;
    const totalMax = totalMin * 1.3; // 30% variance

    setEstimate({ min: totalMin, max: totalMax });
  }, [config]);

  const toggleBoolean = (field) => {
    setConfig(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleTypeSelect = (type) => {
    setConfig(prev => ({ ...prev, type }));
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
            Cost Estimator
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Get an <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Instant Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Configure your project below and see a live estimated price range. No email required.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl py-16 md:py-24 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Controls */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">1. Core Platform</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 block">Website Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { id: 'brochure', label: 'Simple Brochure' },
                      { id: 'business', label: 'Standard Business' },
                      { id: 'ecommerce', label: 'E-Commerce' },
                      { id: 'booking', label: 'Booking System' },
                      { id: 'custom', label: 'Custom Web App' }
                    ].map(type => (
                      <button
                        key={type.id}
                        onClick={() => handleTypeSelect(type.id)}
                        className={`p-4 rounded-xl text-sm font-bold transition-all border-2 text-center ${
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
                    type="range" 
                    min="1" 
                    max="50" 
                    value={config.pages} 
                    onChange={(e) => setConfig({...config, pages: parseInt(e.target.value)})}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                    <span>1 page</span>
                    <span>50+ pages</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">2. Premium Add-ons</h3>
              <div className="grid sm:grid-cols-2 gap-4">
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
                    className={`p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden ${
                      config[addon.id] 
                        ? 'border-blue-600 bg-blue-50/80 shadow-md shadow-blue-600/10' 
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    {config[addon.id] && <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" />}
                    <div className="flex items-center justify-between mb-2 relative z-10">
                      <span className={`font-bold text-lg ${config[addon.id] ? 'text-blue-700' : 'text-slate-900'}`}>{addon.label}</span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors shadow-sm ${config[addon.id] ? 'bg-blue-600 border-blue-600 text-white' : 'border border-slate-300 bg-slate-100 text-transparent'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    </div>
                    <p className={`text-sm relative z-10 font-medium ${config[addon.id] ? 'text-blue-600/80' : 'text-slate-500'}`}>{addon.desc}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Estimate Sidebar */}
          <div className="relative">
            <div className="sticky top-32 bg-slate-950 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Estimated Investment</h3>
              
              <div className="mb-8">
                <motion.div 
                  key={`${estimate.min}-${estimate.max}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-baseline"
                >
                  <span className="text-3xl text-blue-400 mr-1">£</span>
                  {estimate.min.toLocaleString()} 
                  <span className="text-2xl text-slate-500 mx-2">-</span>
                  {Math.round(estimate.max).toLocaleString()}
                </motion.div>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                  *This is a live algorithm-based estimate. Complex custom features or integrations may adjust the final quote.
                </p>
              </div>

              <div className="space-y-4">
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-xl shadow-blue-600/30 border border-blue-400/20 text-white">
                      Request Exact Quote <ArrowRight className="ml-2" size={20} />
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
