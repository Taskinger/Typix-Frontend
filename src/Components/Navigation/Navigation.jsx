import React from 'react';
import { navLinks } from '../../assets/assets';
import ToggleMenu from '../ToggleMenu/ToggleMenu';

const Navigation = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center relative z-50">

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={nav.link}
              className="text-white hover:text-gray-400 duration-300 font-jockey"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle (Hamburger + Menu) */}
      <div className="md:hidden">
        <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navigation;
