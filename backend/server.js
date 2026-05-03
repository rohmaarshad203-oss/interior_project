const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// MongoDB Connection with Extra Options
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10 seconds tak wait karega
      family: 4 // IPv4 ko force karega (ECONNREFUSED ke liye aksar ye kaam kar jata hai)
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error Details:");
    console.error(err.message);
    console.log("Tip: Check if your IP 0.0.0.0/0 is added in Atlas and your Password is correct.");
  }
};

connectDB();

// Root Route
app.get('/', (req, res) => {
  res.send("Interior Store API is running...");
});

const PORT = process.env.PORT || 4500; 

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});