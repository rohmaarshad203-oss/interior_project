import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center px-10 py-16 lg:py-24 bg-[#fdfdfd] gap-12">
      <div className="flex-1 space-y-8">
        <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-gray-900">
          Make Your Home <br />
          <span className="text-orange-500 italic">More Aesthetic</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
          Explore our new collection of premium furniture designed to bring comfort and elegance to your living space.
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition shadow-lg">
            Shop Now
          </button>
          <button className="border border-gray-300 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
          alt="Modern Interior" 
          className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
          <p className="text-2xl font-bold text-gray-900">200+</p>
          <p className="text-sm text-gray-500">Unique Products</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;