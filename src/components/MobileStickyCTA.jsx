import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MobileStickyCTA = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 z-50 flex items-center justify-between gap-4 shadow-[0_-20px_40px_rgba(37,99,235,0.2)]"
    >
      <div className="flex-1">
        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-0.5">Ready to scale?</p>
        <p className="text-sm font-extrabold text-white">Let's build together.</p>
      </div>
      <Link to="/contact">
        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 shadow-xl shadow-blue-600/40 rounded-xl">
          Get a Quote
        </Button>
      </Link>
    </motion.div>
  );
};

export default MobileStickyCTA;
