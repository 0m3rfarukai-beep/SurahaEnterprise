import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Free Tools', path: '/tools' },
    { name: 'Trust Centre', path: '/trust-centre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/50 py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Suraha Enterprise" 
              className="w-10 h-10 rounded-xl object-contain group-hover:-translate-y-0.5 transition-transform"
            />
            <span className={`text-xl md:text-2xl font-extrabold tracking-tight ${scrolled || isOpen ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Suraha<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`text-[15px] font-bold transition-all hover:text-blue-600 relative ${
                      scrolled 
                        ? isActive ? 'text-blue-600' : 'text-slate-700' 
                        : isActive ? 'text-white drop-shadow-md' : 'text-white/80'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      />
                    )}
                  </Link>
                )
              })}
            </div>
            <Link to="/contact">
              <Button className="rounded-full px-7 py-5 h-11 text-sm font-bold bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all">
                Free Review
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled || isOpen ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 absolute w-full top-full left-0 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`text-base font-bold p-4 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link to="/contact" className="mt-4">
                <Button className="w-full h-12 rounded-xl text-base font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20">
                  Free Review
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
