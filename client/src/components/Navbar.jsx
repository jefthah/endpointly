import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsSticky(true);
      } else if (scrollY < 10) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        isSticky 
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl animate-navReveal' 
          : 'border-transparent'
      }`}
      style={{
        transition: 'background-color 0.8s ease, border-color 0.8s ease, backdrop-filter 0.8s ease, box-shadow 0.8s ease'
      }}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          isSticky ? 'h-16' : 'h-20'
        }`}
        id="navbar-container"
        style={{ transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-white group">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center border border-brand-500/30 group-hover:bg-brand-500/30 transition-colors">
            <img src="/logo.png" alt="Endpointly Logo" className="w-full h-full object-contain scale-110" />
          </div>
          Endpointly
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#collaboration" className="hover:text-white transition-colors">Collaboration</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:flex px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-lg shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-0.5"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes navReveal {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-navReveal {
          animation: navReveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}} />
    </nav>
  );
};

export default Navbar;
