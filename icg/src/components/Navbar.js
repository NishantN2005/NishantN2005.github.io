import React from 'react';

function Navbar() {
  return (
    <nav className="font-marcellus flex items-center justify-between bg-black px-4 py-5 text-white">
      {/* Brand/Logo */}
      <div className="text-2xl font-bold">
        ICG
      </div>

      {/* Nav Links */}
      <div className="space-x-6">
        <a href="/team" className="hover:text-gray-300">
          Our Team
        </a>
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
      </div>
    </nav>
  );
}

export default Navbar;