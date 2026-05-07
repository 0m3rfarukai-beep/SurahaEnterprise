import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import servicesData from '@/data/servicesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredServices = servicesData.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_60%)] z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Problem-led digital services for small business growth
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Clear fixes for websites, SEO, content, lead capture, branding, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          
          {/* Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto mb-10 relative"
          >
            <div className="absolute top-1/2 left-6 -translate-y-1/2 text-slate-400">
              <SearchIcon size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg shadow-slate-200/50 transition-all placeholder:text-slate-400 text-slate-900"
            />
          </motion.div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No services found for "{searchTerm}"</h3>
              <p className="text-lg text-slate-700 mb-8">Try a different search or contact us for a custom solution.</p>
              <button 
                className="px-8 py-3 bg-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-300 transition-colors"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    key={service.id}
                  >
                    <Link to={`/services/${service.id}`} className="block h-full">
                      <div className="bg-white rounded-[1.5rem] p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <Icon size={23} />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight leading-snug">{service.title}</h3>
                        
                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.shortDesc}</p>

                        <div className="space-y-2 mb-5 flex-1">
                          {service.benefits.slice(0, 2).map((b, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                              {b}
                            </div>
                          ))}
                        </div>

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between gap-3 pt-5 border-t border-slate-100">
                          <span className="text-sm font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                            View Details <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-white text-center border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Not sure what you need?</h2>
          <p className="text-base md:text-lg text-slate-700 mb-7 leading-relaxed">
            Take our 60-second quiz or try the cost estimator to get a personalised recommendation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quiz" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-base font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-xl shadow-blue-600/20">
              Take the Quiz <ArrowRight size={20} />
            </Link>
            <Link to="/estimator" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-full text-base font-bold hover:border-blue-300 hover:bg-blue-50 transition-all">
              Cost Estimator <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
