import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 text-[#001F54] shadow-md">
      {/* Brand/Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
          <img
            src="/Square Logo_1_11zon.jpg"
            alt="ICG Logo"
            className="w-20 h-20 rounded-full inline-block mr-2"
          />
        </Link>
      </div>
  
      {/* Nav Links */}
      <div className="space-x-10 text-xl font-bold mx-20">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="#/students" className="hover:text-gray-300">
          Join Us
        </a>
        <a href="#/team" className="hover:text-gray-300">
          Meet Our Team
        </a>
        <a href="#/contact" className="hover:text-gray-300">
          Work With Us
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar;