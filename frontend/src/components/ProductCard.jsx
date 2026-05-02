import React from 'react';

const ProductCard = ({ name, price, image, onAdd }) => {
  return (
    <div className="group bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
      <div className="relative overflow-hidden rounded-2xl h-64 bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {}
        <button 
          onClick={onAdd}
          className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm py-3 rounded-xl font-bold text-sm translate-y-12 group-hover:translate-y-0 transition-all duration-300 shadow-md active:scale-95"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4 flex justify-between items-center px-1">
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm italic">Premium Wood</p>
        </div>
        <span className="text-lg font-bold text-orange-600">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;