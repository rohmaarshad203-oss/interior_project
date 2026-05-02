import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: "Velvet Sofa", price: "450", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" },
  { id: 2, name: "Modern Chair", price: "120", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500" },
  { id: 3, name: "Oak Table", price: "300", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500" }, 
  { id: 4, name: "Floor Lamp", price: "80", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <div className="px-10 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-gray-900">Featured Products</h2>
              <p className="text-gray-500 mt-2">Carefully curated pieces for your home.</p>
            </div>
            <button className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1">See All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(item => (
              <ProductCard 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                image={item.image} 
                onAdd={addToCart} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;