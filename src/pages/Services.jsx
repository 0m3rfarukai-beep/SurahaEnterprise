import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BarChart, ShieldCheck, ArrowRight, Server, Cpu, LineChart, Search as SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const services = [
    {
      id: 'web',
      title: "Website Design & Development",
      icon: Monitor,
      desc: "Bespoke, high-performance web applications designed to convert visitors into loyal customers while representing your premium brand.",
      details: ["Mobile-first responsive design", "Lightning-fast loading speeds", "UX/UI planning", "Scalable CMS integration"]
    },
    {
      id: 'marketing',
      title: "Digital Marketing",
      icon: LineChart,
      desc: "Data-driven marketing campaigns and strategies to ensure your business is found by the right audience at the right time.",
      details: ["PPC campaign management", "Social media marketing", "Content strategy", "Performance analytics"]
    },
    {
      id: 'seo',
      title: "SEO & Analytics",
      icon: BarChart,
      desc: "Advanced search optimization to dominate local and industry-specific search results.",
      details: ["On-page optimization", "Technical SEO audits", "Local search ranking", "Keyword research"]
    },
    {
      id: 'it',
      title: "IT Support & Maintenance",
      icon: Cpu,
      desc: "Reliable, proactive IT infrastructure management and rapid technical support for your team.",
      details: ["24/7 technical support", "Cloud infrastructure", "Hardware procurement", "Network setup"]
    },
    {
      id: 'security',
      title: "Cyber Security Basics",
      icon: ShieldCheck,
      desc: "Essential threat protection and data security protocols for complete peace of mind.",
      details: ["Proactive monitoring", "Automated backups", "Firewall configuration", "Employee security training"]
    },
    {
      id: 'consultation',
      title: "Training & Consultation",
      icon: Server,
      desc: "Strategic tech guidance and training to empower your internal team.",
      details: ["Digital transformation roadmaps", "Software training", "Workflow automation", "Technical audits"]
    }
  ];

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_60%)] z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              End-to-end technological capabilities engineered to streamline your operations, amplify your reach, and scale your business securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Filter & Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Search/Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-20 relative"
          >
            <div className="absolute top-1/2 left-6 -translate-y-1/2 text-slate-400">
              <SearchIcon size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Search services (e.g. SEO, Web Design)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 rounded-[2rem] border border-slate-200 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xl shadow-slate-200/50 transition-all placeholder:text-slate-400 text-slate-900"
            />
          </motion.div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No services found matching "{searchTerm}"</h3>
              <p className="text-lg text-slate-700 mb-8">Try adjusting your search terms or contact us for a custom solution.</p>
              <button 
                className="px-8 py-3 bg-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-300 transition-colors"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredServices.map((service, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={service.id} 
                  className="flex flex-col"
                >
                  <ServiceCard 
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />
                  {/* Additional details specifically for the services page */}
                  <div className="bg-slate-100/50 p-8 md:p-10 rounded-b-[2.5rem] -mt-8 pt-12 border border-slate-200 border-t-0 z-0 flex-1 flex flex-col justify-end">
                    <ul className="space-y-4">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2.5" />
                          <span className="text-[0.95rem] leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white text-center border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Unsure what you need?</h2>
          <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed">
            Schedule a free, no-obligation consultation with our technical experts to audit your current digital footprint.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-xl shadow-blue-600/20">
            Book a Free Audit <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
