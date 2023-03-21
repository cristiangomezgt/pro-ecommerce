const express = require('express');
const products = require('./data/products');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(4000, console.log('Server running on port 5000'));
