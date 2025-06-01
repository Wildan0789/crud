require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Static file (untuk akses gambar/file upload)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', userRoutes);
app.use('/api/products', productRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
