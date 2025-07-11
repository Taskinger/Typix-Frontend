import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="navbar fixed flex justify-between items-center w-full bg-[#1A1A2E] h-[85px] p-4 z-50">
      <Icon
        h1ClassName="text-2xl md:text-4xl font-medium font-jockey text-white"
        imgClassName="w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg"
      />
      <Navigation isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </div>
  );
};

export default Navbar;
