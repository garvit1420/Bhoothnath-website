import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Header background change
      setIsScrolled(currentScrollY > 50);
      
      // Header visibility logic
      if (currentScrollY < 100) {
        // Always show header at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-amber-400/30' 
        : 'bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-lg shadow-black/30 border-b border-amber-400/10'
    }`}>
      <nav className={`container mx-auto px-4 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      } flex justify-between items-center`}>
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg">B</div>
          <div className="hidden sm:block">
            <div className="text-lg font-serif text-amber-100 leading-tight">Bhoothnath</div>
            <div className="text-xs text-amber-300">Premium Vegetarian Cuisine</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-amber-100">
          <a href="#hero" className="hover:text-amber-300 transition cursor-pointer">Home</a>
          <a href="#menu" className="hover:text-amber-300 transition cursor-pointer">Menu</a>
          <a href="#gallery" className="hover:text-amber-300 transition cursor-pointer">Gallery</a>
          <a href="#location" className="hover:text-amber-300 transition cursor-pointer">Location</a>
          <a href="#reviews" className="hover:text-amber-300 transition cursor-pointer">Reviews</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/reservation" className="hidden md:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 font-semibold hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 transition shadow-lg">Reserve</Link>
          <a href="#menu" className="hidden md:inline-block px-4 py-2 rounded-full border border-amber-400/50 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/70 transition cursor-pointer">View Menu</a>

          <button aria-label="Open menu" className="md:hidden p-2 rounded-md bg-amber-500/20 text-amber-100 hover:bg-amber-500/30 border border-amber-400/30 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;