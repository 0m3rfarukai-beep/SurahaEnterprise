import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.08)] hover:-translate-y-2 hover:border-blue-500/15 transition-all duration-500 relative group z-10">
      
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
      
      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h3>
      
      <p className="text-slate-700 leading-relaxed text-lg flex-1">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
