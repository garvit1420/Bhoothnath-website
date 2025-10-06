import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    // Handle smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          const headerHeight = 90; // Adjusted for fixed header height
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup function
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero">
                <Hero />
              </div>
              <div id="menu">
                <Menu />
              </div>
              <div id="gallery">
                <Gallery />
              </div>
              <div id="location">
                <Location />
              </div>
              <div id="reviews">
                <Reviews />
              </div>
              <Footer />
            </>
          } />
          {/* Add routes for /menu, /gallery, etc., if multi-page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;