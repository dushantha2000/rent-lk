import React from 'react';
import { Key, Menu, X } from 'lucide-react';

const NavBarBlack = ({ isMenuOpenBlack, setIsMenuOpenBlack }) => {
  return (
    <nav className="relative z-10 px-6 py-4 bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Key className="text-white h-8 w-8" />
          <span className="text-white text-2xl font-bold">RentEasy</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Rentals</a>
          <a href="#" className="hover:text-gray-300 transition-colors">List Property</a>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Post a Rental
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpenBlack(!isMenuOpenBlack)}
          aria-label={isMenuOpenBlack ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpenBlack ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpenBlack && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Rentals</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">List Property</a>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors w-full">
              Post a Rental
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarBlack;