import { Link } from 'react-router-dom';
import { Target, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.15)_0%,transparent_50%)] z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Empowering Small Businesses <br className="hidden md:block" /> to <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">Succeed Online</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We believe that every small business deserves the tools and expertise to compete effectively in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Story</motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Suraha Enterprise was founded to bridge the gap between complex digital technologies and practical, affordable solutions. We don't just build websites; we engineer growth engines for your business.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-700 leading-relaxed mb-10">
                Many small businesses struggle to find reliable digital partners. Agencies can be prohibitively expensive or use confusing jargon. We do things differently. We speak your language and focus ruthlessly on delivering measurable results that impact your bottom line.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                {[
                  'Practical, enterprise-grade solutions scaled for small business',
                  'Transparent processes with zero confusing jargon',
                  'Dedicated focus on measurable business growth & ROI'
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-start gap-4 font-medium">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                    <span className="text-slate-900 text-base md:text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="absolute -inset-4 md:-inset-8 bg-blue-600/5 rounded-[3rem] -z-10" />
               <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 md:p-16 min-h-[500px] flex items-center justify-center shadow-2xl shadow-blue-900/5 text-center">
                  <div>
                     <div className="w-24 h-24 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-900/20">
                       <Users className="text-white" size={40} />
                     </div>
                     <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">The Suraha Team</h3>
                     <p className="text-xl text-slate-700 max-w-sm mx-auto">Dedicated experts in design, marketing, and IT support.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">The foundational principles that guide every strategy we build and every line of code we write.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Results-Oriented', desc: 'We don\'t measure success by vanity metrics, but by the tangible growth and operational success of your business.' },
              { icon: Users, title: 'True Partnership', desc: 'We don\'t just execute tasks; we act as a seamless extension of your team, providing proactive guidance.' },
              { icon: Zap, title: 'Simplicity', desc: 'We take complex technological challenges and distill them into accessible, manageable, and highly effective solutions.' }
            ].map((value, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 border-t-4 border-t-blue-600 flex flex-col h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-8 shrink-0">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed text-lg flex-1">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-blue-600 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">Ready to transform your business?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed">
            Let's have a straightforward conversation about your goals and how our premium digital solutions can help you achieve them.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-full text-lg font-bold hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-2xl shadow-black/20">
            Get in Touch <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
