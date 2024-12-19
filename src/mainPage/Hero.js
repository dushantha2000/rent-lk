import React, { useState } from 'react';
import HeroSection from './HeroSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  return (
    <div>
      <HeroSection 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        isLoggedIn={isLoggedIn} 
      />
      {/* Simulated Login/Logout for Testing */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State 
      </button>
    </div>
  );
};

export default App;
