const products = [
    { _id: "1", name: "Luxury Velvet Sofa", price: 45000, category: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", description: "Premium velvet finish." },
    { _id: "2", name: "Modern Oak Table", price: 12000, category: "Table", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88", description: "Solid oak wood." },
    { _id: "3", name: "Designer Floor Lamp", price: 8500, category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c", description: "Minimalist lighting." },
    { _id: "4", name: "Ergonomic Chair", price: 15500, category: "Chair", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c", description: "Comfortable office chair." },
    { _id: "5", name: "Abstract Wall Art", price: 5000, category: "Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38", description: "Modern wall painting." },
    { _id: "6", name: "Ceramic Vase Set", price: 3200, category: "Decor", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427", description: "Handcrafted ceramics." },
    { _id: "7", "name": "Queen Size Bed", "price": 85000, "category": "Bedroom", "image": "https://images.unsplash.com/photo-1505693419173-42b925685a91", "description": "Comfortable king size bed." },
    { _id: "8", "name": "Bookshelf Unit", "price": 18000, "category": "Storage", "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156", "description": "Wooden bookshelf." },
    { _id: "9", "name": "Minimalist Clock", "price": 2500, "category": "Decor", "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c", "description": "Elegant wall clock." }
];

exports.getProducts = async (req, res) => {
    try {
        
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    res.status(201).json({ message: "Feature coming soon!" });
};