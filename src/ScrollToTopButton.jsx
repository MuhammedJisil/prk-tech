import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
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
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-blue-900 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 animate-bounce border-2 border-blue-900"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="font-bold" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;