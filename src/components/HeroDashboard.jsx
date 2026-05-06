import { motion } from 'framer-motion';
import { LineChart, BarChart2, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const floatingVariants = {
  float1: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  },
  float2: {
    y: [0, 15, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
  },
  float3: {
    y: [0, -10, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }
  }
};

const HeroDashboard = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto xl:col-span-6 mt-12 xl:mt-0 z-20">
      
      {/* Main Glassmorphism Dashboard Base */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full bg-slate-900/80 backdrop-blur-2xl border border-blue-500/30 rounded-[2rem] p-6 shadow-[0_0_80px_rgba(37,99,235,0.3)] relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 group-hover:h-1.5 transition-all" />
        
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-slate-400 text-sm font-medium ml-2">suraha.app/dashboard</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-xs font-bold text-white">SE</span>
          </div>
        </div>

        {/* Grid Layout inside Dashboard */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Main Growth Chart */}
          <div className="col-span-2 bg-white/5 border border-white/5 rounded-2xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Total Revenue Growth</p>
                <h4 className="text-3xl font-bold text-white tracking-tight">+284%</h4>
              </div>
              <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold flex items-center gap-1">
                <TrendingUp size={12} /> YTD
              </span>
            </div>
            {/* Mock Chart Area */}
            <div className="h-24 w-full flex items-end gap-2 px-2 mt-6">
               {[40, 30, 50, 45, 70, 60, 90, 85, 100].map((h, i) => (
                 <motion.div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.5, type: "spring" }}
                 />
               ))}
            </div>
          </div>

          {/* Mini Widgets */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
            <Users className="text-cyan-400 mb-3" size={20} />
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Traffic</p>
            <h4 className="text-xl font-bold text-white">45.2K <span className="text-xs text-green-400 font-normal ml-1">+12%</span></h4>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
             <ShieldCheck className="text-blue-500 mb-3" size={20} />
            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Status</p>
            <h4 className="text-xl font-bold text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Protected
            </h4>
          </div>

        </div>
      </motion.div>

      {/* Floating Elements (Absolute relative to the dashboard) */}
      <motion.div 
        variants={floatingVariants}
        animate="float1"
        className="absolute -top-8 -right-8 bg-slate-900 border border-slate-700/50 rounded-xl p-4 shadow-xl z-30 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
           <LineChart size={20} />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-semibold">SEO Score</p>
          <p className="text-lg font-bold text-white">98/100</p>
        </div>
      </motion.div>

      <motion.div 
        variants={floatingVariants}
        animate="float2"
        className="absolute -bottom-6 -left-6 bg-blue-600 border border-blue-500 rounded-xl p-4 shadow-xl shadow-blue-900/50 z-30 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
           <BarChart2 size={20} />
        </div>
        <div>
          <p className="text-xs text-blue-200 font-semibold">New Leads</p>
          <p className="text-lg font-bold text-white">+124 This Week</p>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroDashboard;
