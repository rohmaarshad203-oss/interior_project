import React, { useState } from 'react';

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl p-8 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black text-xl">✕</button>
        
        <h2 className="text-3xl font-serif mb-2 text-center">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          {isLogin ? 'Enter your details to access your account' : 'Join us to get the best interior deals'}
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500" />
          )}
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500" />
          
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition mt-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-orange-500 font-bold hover:underline">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;