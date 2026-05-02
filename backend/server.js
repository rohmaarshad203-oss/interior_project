const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.error("❌ Connection Error:", err.message));
// Root Route
app.get('/', (req, res) => {
  res.send("Interior Store API is running...");
});

const PORT = process.env.PORT || 4500; 

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});