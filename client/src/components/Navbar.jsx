import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ isDark, setIsDark }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const animating = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 200) {
        if (!isSticky && !animating.current) {
          // Trigger the 'Hide Up -> Show Down' sequence
          animating.current = true;
          setIsVisible(false); // 1. Slide Up
          
          setTimeout(() => {
            setIsSticky(true); // Change to solid style while hidden
            setIsVisible(true); // 2. Slide Down
            animating.current = false;
          }, 400); 
        }
      } else if (currentScrollY < 100) {
        if (isSticky && !animating.current) {
          // Reset when back at the top
          setIsSticky(false);
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  return (
    <motion.nav
      initial={false}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isSticky 
          ? (isDark ? "rgba(9, 9, 11, 0.9)" : "rgba(255, 255, 255, 0.95)") 
          : "rgba(0, 0, 0, 0)",
        backdropFilter: isSticky ? "blur(20px)" : "blur(0px)",
        borderBottom: isSticky 
          ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(15, 23, 42, 0.15)") 
          : "1px solid rgba(0, 0, 0, 0)",
        paddingTop: isSticky ? "12px" : "20px",
        paddingBottom: isSticky ? "12px" : "20px",
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-on-surface tracking-tighter group">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
            <img src="/logo1.png" alt="Endpointly Logo" className="w-full h-full object-contain" />
          </div>
          Endpointly
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-on-surface/60">
          <a href="#features" className="hover:text-primary-new transition-colors">Features</a>
          <a href="#docs" className="hover:text-primary-new transition-colors">Documentation</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-new transition-colors">GitHub</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-on-surface/5 transition-colors border border-on-surface/5 overflow-hidden"
          >
            <span 
              key={isDark ? "dark" : "light"}
              className="material-symbols-outlined text-on-surface-variant text-[20px] animate-bounce-down"
            >
              {isDark ? "dark_mode" : "light_mode"}
            </span>
          </button>
          
          <Link
            to="/login"
            className="px-6 py-2.5 text-sm font-bold text-white bg-primary-new rounded-xl hover:shadow-lg hover:shadow-primary-new/20 transition-all active:scale-95"
          >
            Sign In
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
