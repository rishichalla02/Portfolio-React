import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
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
    visible && (
      <button
        onClick={scrollToTop}
        title="Go to top"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-800 text-white text-2xl flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors duration-300 z-50"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
