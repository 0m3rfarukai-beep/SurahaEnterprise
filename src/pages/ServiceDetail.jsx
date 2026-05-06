import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, PoundSterling, Users, AlertTriangle, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQAccordion from '@/components/FAQAccordion';
import servicesData from '@/data/servicesData';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.id === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const process = ['Discover', 'Plan', 'Build', 'Launch', 'Improve'];

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
            <Icon size={16} /> Service
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {service.heroSubtitle}
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1">
              Request a Free Consultation <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl py-16 md:py-24 space-y-16 md:space-y-24">

        {/* What's Included */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={22} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Who It's For */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-8">
            <Users size={28} className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Who This Is For</h2>
          </div>
          <div className="space-y-4">
            {service.whoFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                <ArrowRight size={18} className="text-blue-600 shrink-0 mt-1" />
                <span className="text-slate-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Problems Solved */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle size={28} className="text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Problems We Solve</h2>
          </div>
          <div className="space-y-4">
            {service.problemsSolved.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span className="text-amber-600 font-bold shrink-0">✗</span>
                <span className="text-slate-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Our Process</h2>
          <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap items-center">
            {process.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-600/20">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-slate-700 mt-3">{step}</span>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block w-12 lg:w-20 h-0.5 bg-blue-200 mx-2" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Deliverables */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-8">
            <Layers size={28} className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">What You Get</h2>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-blue-900/5">
            <ul className="space-y-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Timeline & Pricing */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-blue-900/5">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={24} className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Estimated Timeline</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">{service.timeline}</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-blue-900/5">
            <div className="flex items-center gap-3 mb-4">
              <PoundSterling size={24} className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Pricing Guide</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">{service.pricingGuide}</p>
          </div>
        </motion.section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Common Questions</h2>
            <FAQAccordion faqs={service.faqs} />
          </motion.section>
        )}
      </div>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-blue-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Ready to get started with {service.title}?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto mb-10">
            Book a free, no-obligation consultation. We'll discuss your needs and give you a clear plan.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white text-blue-900 hover:bg-slate-50 rounded-full shadow-2xl shadow-black/20 transition-transform hover:-translate-y-1">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
