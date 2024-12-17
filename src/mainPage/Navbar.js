import React from 'react';
import { Key, Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Key className="text-white h-8 w-8" />
          <span className="text-white text-2xl font-bold">RentEasy</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Rentals</a>
          <a href="/AboutUs" className="hover:text-blue-300 transition-colors">About Us</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Pricing</a>

          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
          <a href='/Register'>Register</a>
          </button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
           <a href='/Login'>Login</a> 
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (can be expanded based on requirements) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">Rentals</a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">List Property</a>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors w-full">
              Post a Rental
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;