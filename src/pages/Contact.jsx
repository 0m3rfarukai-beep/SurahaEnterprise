import { Mail, Phone, MapPin, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Contact = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.15)_0%,transparent_50%)] z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Let's Start Building Your <br className="hidden md:block" /> <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              No jargon, no hidden fees—just a straightforward conversation about how we can accelerate your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-32 relative -mt-20 md:-mt-24 z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-16 items-start">
            
            {/* Contact Details (col span 2) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Get in Touch</motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-700 leading-relaxed mb-12">
                Whether you need a bespoke website, a targeted digital marketing strategy, or enterprise-grade IT support, our expert team is ready to assist. <strong className="text-slate-900">We guarantee a response within 24 hours.</strong>
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-10">
                {[
                  { icon: Phone, title: 'Direct Phone', value: '0800 123 4567', link: 'tel:08001234567' },
                  { icon: Mail, title: 'General Inquiries', value: 'hello@surahaenterprise.com', link: 'mailto:hello@surahaenterprise.com' },
                  { icon: MapPin, title: 'Headquarters', value: 'London, United Kingdom', link: null },
                  { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 5:30 PM', link: null }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex gap-6 items-start">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="mt-1">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{item.title}</h4>
                      {item.link ? (
                         <a href={item.link} className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">{item.value}</a>
                      ) : (
                         <p className="text-xl font-bold text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Indicator */}
              <motion.div variants={fadeInUp} className="mt-16 p-8 bg-slate-50 border border-slate-100 rounded-3xl flex items-start gap-4">
                <ShieldAlert className="text-blue-600 shrink-0 mt-1" size={24} />
                <p className="text-slate-700 text-sm leading-relaxed">
                  Your information is securely encrypted and will never be shared with third parties. Read our Privacy Policy.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form (col span 3) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-blue-900/5 border border-slate-100 relative"
            >
               <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
