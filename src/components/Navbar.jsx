import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, PhoneCall, X } from 'lucide-react';
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
    { name: 'Services', path: '/services' },
    { name: 'Tools', path: '/tools' },
    { name: 'Trust Centre', path: '/trust-centre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-slate-950/20 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            aria-label="Suraha Enterprise home"
            className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            <img 
              src="/logo.png" 
              alt="Suraha Enterprise" 
              className="w-9 h-9 rounded-xl object-contain transition-transform group-hover:-translate-y-0.5 md:w-10 md:h-10"
            />
            <span className={`text-lg md:text-xl font-extrabold tracking-tight ${scrolled || isOpen ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Suraha<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/"
              className={`rounded-full px-3.5 py-2 text-[13px] font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 ${
                isActivePath('/')
                  ? scrolled ? 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-200' : 'bg-white/14 text-white ring-1 ring-white/15'
                  : scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white/82 hover:text-white'
              }`}
            >
              Home
            </Link>
            <div className={`flex items-center rounded-full p-1 ${scrolled ? 'bg-slate-100/80' : 'bg-white/10 ring-1 ring-white/10'}`}>
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 ${
                      scrolled 
                        ? isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700' 
                        : isActive ? 'text-white' : 'text-white/82 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className={`absolute inset-0 rounded-full ${scrolled ? 'bg-white shadow-sm ring-1 ring-slate-200' : 'bg-white/14 ring-1 ring-white/15'}`}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                )
              })}
            </div>
            <Link
              to="/contact"
              className={`hidden xl:inline-flex items-center gap-2 text-sm font-extrabold transition-colors ${scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white/85 hover:text-white'}`}
            >
              <PhoneCall size={16} aria-hidden="true" />
              Contact
            </Link>
            <Link to="/tools">
              <Button className="h-11 rounded-full bg-blue-600 px-5 text-sm font-extrabold text-white shadow-sm shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/25">
                Free Growth Check
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className={`lg:hidden rounded-xl p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 ${
              scrolled || isOpen ? 'text-slate-900 hover:bg-slate-100 focus-visible:ring-offset-white' : 'text-white hover:bg-white/10 focus-visible:ring-offset-slate-950'
            }`}
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
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full max-h-[calc(100vh-72px)] w-full overflow-y-auto border-b border-slate-200 bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6 sm:py-6">
              <Link
                to="/"
                className={`rounded-xl px-4 py-3 text-base font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${isActivePath('/') ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                Home
              </Link>
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`rounded-xl px-4 py-3 text-base font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link to="/tools" className="mt-3">
                <Button className="h-12 w-full rounded-xl bg-blue-600 text-base font-extrabold text-white shadow-lg shadow-blue-600/15 hover:bg-blue-700">
                  Free Growth Check
                </Button>
              </Link>
              <Link to="/contact" className="rounded-xl px-4 py-3 text-center text-sm font-extrabold text-slate-700 hover:bg-slate-50">
                Contact Suraha
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
