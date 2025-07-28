
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-center py-6 border-t border-gray-800">
      <p className="text-medium">
        &copy; {currentYear} Sahil Gupta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
