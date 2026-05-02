import React from 'react';

const Navbar = ({ cartCount }) => { 
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-wider text-gray-800">
        INTERIOR<span className="text-orange-500">.</span>
      </div>
      <ul className="hidden md:flex gap-8 font-medium text-gray-600">
        <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Shop</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Gallery</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
      </ul>
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <div className="relative cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 118 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {}
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;