import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md ">
      <div className="w-full px-4 md:px-8 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/ICG C-design darkblue .png"
              alt="ICG Logo"
              className="w-40 h-auto"
            />
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-10 text-xl font-bold text-[#001F54]">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#/students" className="hover:text-gray-300">Join Us</a>
          <a href="#/team" className="hover:text-gray-300">Meet Our Team</a>
          <a href="#/contact" className="hover:text-gray-300">Work With Us</a>
          <a href="#/events" className="hover:text-gray-300">Events</a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-[#001F54] hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29a1 1 0 10-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 14.83l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.89-4.88z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block text-[#001F54] hover:text-gray-300 text-base font-bold">Home</a>
          <a href="#/students" className="block text-[#001F54] hover:text-gray-300 text-base font-bold">Join Us</a>
          <a href="#/team" className="block text-[#001F54] hover:text-gray-300 text-base font-bold">Meet Our Team</a>
          <a href="#/contact" className="block text-[#001F54] hover:text-gray-300 text-base font-bold">Work With Us</a>
          <a href="#/events" className="block text-[#001F54] hover:text-gray-300 text-base font-bold">Events</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
