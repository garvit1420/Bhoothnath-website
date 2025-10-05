import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
    {/* Elegant Background Pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}></div>
    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-800/15"></div>
    
    {/* Main Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Premium Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-200 text-sm font-medium mb-6">
        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
        PREMIUM VEGETARIAN CUISINE
      </div>
      
      {/* Main Heading */}
      <h1 className="text-6xl md:text-7xl font-serif font-bold text-amber-100 mb-6 leading-tight">
        <span className="block text-amber-400">Bhoothnath</span>
        <span className="text-4xl md:text-5xl font-light text-amber-200">Restaurant</span>
      </h1>
      
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
        <div className="mx-4 text-amber-400">✦</div>
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
      </div>
      
      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-amber-200 mb-4 font-light">
        Authentic Rajasthani Flavors from the Heart of Jodhpur
      </p>
      <p className="text-lg text-amber-200/80 mb-12 max-w-2xl mx-auto">
        Experience the royal taste of traditional vegetarian cuisine crafted with love, tradition, and the finest ingredients
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="#menu" 
          className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10">Explore Our Menu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        
        <Link 
          to="/reservation" 
          className="group px-8 py-4 border-2 border-amber-400/50 text-amber-200 font-semibold rounded-full hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300"
        >
          Make Reservation
        </Link>
      </div>
      
      {/* Features */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 text-amber-200">
        <div className="flex items-center space-x-2">
          <span className="text-amber-400">🏆</span>
          <span className="text-sm">Award Winning</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-amber-400">🌱</span>
          <span className="text-sm">100% Vegetarian</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-amber-400">👑</span>
          <span className="text-sm">Royal Heritage</span>
        </div>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 text-amber-400/20 text-6xl animate-pulse">✦</div>
    <div className="absolute bottom-20 right-10 text-amber-400/20 text-4xl animate-pulse delay-1000">❋</div>
    <div className="absolute top-1/2 left-20 text-amber-400/10 text-8xl animate-pulse delay-500">◆</div>
  </section>
);

export default Hero;
