import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, desc, price, features, isPopular, period = 'mo' }) => {
  return (
    <div className={`relative flex flex-col h-full rounded-[2.5rem] p-8 sm:p-10 md:p-12 transition-all duration-500 ${isPopular ? 'bg-slate-950 text-white shadow-2xl shadow-blue-900/20 md:-translate-y-4' : 'bg-white text-slate-900 border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.08)]'}`}>
      
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg shadow-blue-600/30">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-sm ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>{desc}</p>
      </div>

      <div className="mb-8 flex items-end gap-1">
        <span className="text-5xl font-extrabold tracking-tight">£{price}</span>
        <span className={`text-lg mb-1 font-medium ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>/{period}</span>
      </div>

      <Link to="/contact">
        <Button 
          className={`w-full h-14 rounded-xl text-lg font-bold mb-10 transition-all ${isPopular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}`}
        >
          Choose {title}
        </Button>
      </Link>

      <div className="space-y-4 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 size={24} className={`shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-blue-600'}`} />
            <span className={`text-lg leading-relaxed ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
