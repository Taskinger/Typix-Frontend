import React, { useEffect, useRef } from 'react';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const ToggleMenu = ({ isOpen, setIsOpen, navLinks }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div ref={wrapperRef} className="md:hidden relative">
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 backdrop-blur-md bg-white/10 border border-white/30 font-jockey text-white shadow-md rounded-lg p-4 z-40">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 font-medium transition"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
