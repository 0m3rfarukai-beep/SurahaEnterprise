import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.4)] z-40 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
        >
          <ArrowUp size={24} aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
