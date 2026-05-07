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
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.15)_0%,transparent_50%)] z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Book a free, practical website review
            </h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Tell us what you want to improve. We will reply with a clear next step, not a pressured sales pitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 md:py-16 relative -mt-12 md:-mt-14 z-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
            
            {/* Contact Details (col span 2) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 h-full"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">What happens next</motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-slate-700 leading-relaxed mb-8">
                We review your message, ask any useful follow-up questions, and explain the clearest next step. <strong className="text-slate-900">We aim to respond within 24 hours.</strong>
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                {[
                  { icon: Phone, title: 'Direct Phone', value: '0800 123 4567', link: 'tel:08001234567' },
                  { icon: Mail, title: 'General Inquiries', value: 'hello@surahaenterprise.com', link: 'mailto:hello@surahaenterprise.com' },
                  { icon: MapPin, title: 'Headquarters', value: 'London, United Kingdom', link: null },
                  { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 5:30 PM', link: null }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                      <item.icon size={22} strokeWidth={1.7} />
                    </div>
                    <div className="mt-1">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{item.title}</h4>
                      {item.link ? (
                         <a href={item.link} className="text-base md:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-words">{item.value}</a>
                      ) : (
                         <p className="text-base md:text-lg font-bold text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Indicator */}
              <motion.div variants={fadeInUp} className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4">
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
              className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 relative"
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
