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
  const process = service.process || ['Discover', 'Plan', 'Build', 'Launch', 'Improve'];

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Hero */}
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)] z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Icon size={16} /> Service
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {service.heroSubtitle}
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1">
              Request a Free Consultation <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 md:py-16 space-y-12 md:space-y-16">

        {/* Problem */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">The problem</p>
            <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">{service.problem}</h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">{service.costOfInaction}</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-4">Symptoms</p>
            <div className="space-y-3">
              {(service.symptoms || service.problemsSolved).map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-800">
                  <AlertTriangle size={17} className="text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What's Included */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">What We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={19} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Who It's For */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <Users size={28} className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Who This Is For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {service.whoFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                <ArrowRight size={18} className="text-blue-600 shrink-0 mt-1" />
                <span className="text-sm text-slate-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-100 p-5 text-center shadow-sm">
                  <div className="w-11 h-11 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-bold shadow-lg shadow-blue-600/20">
                    {i + 1}
                  </div>
                  <span className="block text-sm font-bold text-slate-700 mt-3">{step}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Deliverables */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <Layers size={28} className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">What You Get</h2>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Timeline & Pricing */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={24} className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Estimated Timeline</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">{service.timeline}</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
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
      <section className="py-16 md:py-20 bg-blue-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
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
