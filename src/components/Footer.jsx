import { Link } from 'react-router-dom';
import { Globe, Users, Code, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Suraha<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-200 text-sm leading-relaxed max-w-xs">
              Engineered for unfair advantage. We build premium digital infrastructure and marketing engines for small businesses ready to scale.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="text-slate-200 hover:text-blue-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-slate-200 hover:text-blue-400 transition-colors"><Users size={20} /></a>
              <a href="#" className="text-slate-200 hover:text-blue-400 transition-colors"><Code size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Website Design</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">SEO & Analytics</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">IT Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>124 City Road, London<br />EC1V 2NX, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>hello@surahaenterprise.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Suraha Enterprise Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">Designed with <span className="text-red-500">♥</span> in London</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
