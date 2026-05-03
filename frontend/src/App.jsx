import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Contact from './components/Contact';

function App() {
  const [products] = useState([
    { _id: "1", name: "Luxury Velvet Sofa", price: 450, category: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
    { _id: "2", name: "Modern Oak Table", price: 120, category: "Table", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88" },
    { _id: "3", name: "Designer Floor Lamp", price: 85, category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" },
    { _id: "4", name: "Ergonomic Chair", price: 155, category: "Chair", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c" },
    { _id: "5", name: "Abstract Wall Art", price: 50, category: "Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38" },
    { _id: "6", name: "Ceramic Vase Set", price: 32, category: "Decor", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427" },
    { _id: "7", name: "Bookshelf Unit", price: 180, category: "Storage", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156" },
    { _id: "8", name: "Minimalist Clock", price: 25, category: "Decor", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c" }
  ]);

  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans scroll-smooth">
      <Navbar cartItems={cartItems} />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Shop Section with ID for navigation */}
        <div id="shop" className="px-10 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-gray-900">Featured Products</h2>
              <p className="text-gray-500 mt-2">Carefully curated pieces for your home.</p>
            </div>
            <button className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1">See All</button>
          </div>
          
          {/* Responsive Grid: Mobile (1), Tablet (2), Laptop (4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(item => (
              <ProductCard 
                key={item._id || item.id} 
                name={item.name} 
                price={item.price} 
                image={item.image} 
                onAdd={() => addToCart(item)} 
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="py-10 text-center text-gray-400 text-sm border-t">
        © 2026 INTERIOR. All rights reserved.
      </footer>
    </div>
  );
}

export default App;