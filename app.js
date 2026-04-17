const express = require('express');
const app = express();
const sequelize = require('./config/database');

// import models (WAJIB untuk relasi)
require('./models');

app.use(express.json());

// route utama (test)
app.get('/', (req, res) => {
  res.send('API berjalan 🚀');
});

// route product
app.use('/products', require('./routes/productRoutes'));

// route order
app.use('/orders', require('./routes/orderRoutes'));

// koneksi database
sequelize.sync().then(() => {
  console.log('Database connected');
});

// jalankan server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});