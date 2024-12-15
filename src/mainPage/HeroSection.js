import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const HeroSection = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Background Image */}
      <img 
        src="/images/10.jpg" 
        alt="Rental Property"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Navigation */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
        Discover Your Dream <br></br>Rental Home
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
        Explore verified rentals across Sri Lanka. Whether it’s cozy rooms or elegant apartments, we make finding your ideal home simple and stress-free.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;