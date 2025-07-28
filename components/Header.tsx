
import React from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm shadow-md shadow-secondary/20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-xl md:text-2xl font-bold text-light hover:text-accent transition-colors duration-300">
          Sahil Gupta
        </a>
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-medium hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-light focus:outline-none">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
