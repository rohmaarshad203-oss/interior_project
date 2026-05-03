import React, { useState } from 'react';
import AuthModal from './AuthModal';

function Navbar({ cartItems = [] }) { 
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tighter text-gray-900">
        INTERIOR<span className="text-orange-500">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-orange-500 transition">Home</a>
        <a href="#shop" className="hover:text-orange-500 transition">Shop</a>
        <a href="#shop" className="hover:text-orange-500 transition">Gallery</a>
        <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="hidden md:block text-gray-600 font-medium hover:text-orange-500 transition mr-2"
        >
          Login
        </button>

        <button 
          onClick={() => setIsAuthOpen(true)}
          className="text-gray-700 hover:text-orange-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

        <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}

          {isOpen && (
            <div className="absolute right-0 mt-6 w-72 md:w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-50">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-gray-900">Your Cart ({cartItems.length})</h3>
                <button className="text-gray-400 text-xs" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>Close</button>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-gray-400 text-sm">Cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="max-h-64 overflow-y-auto pr-2">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 mb-4">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800 truncate w-32">{item.name}</p>
                          <p className="text-xs text-orange-600 font-bold">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full bg-black text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg flex flex-col p-6 gap-4 md:hidden z-40">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Home</a>
          <a href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Shop</a>
          <a href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Gallery</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Contact</a>
          <button 
            onClick={() => { setIsAuthOpen(true); setIsMobileMenuOpen(false); }}
            className="text-orange-500 font-bold text-left"
          >
            Login / Sign Up
          </button>
        </div>
      )}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}

export default Navbar;