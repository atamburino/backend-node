const express = require("express");
require("dotenv").config();
const { faker } = require('@faker-js/faker');

const app = express(); 

// Middleware
app.use(express.json())

const PORT = process.env.PORT || 3000; // Add a fallback port

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.URL || 'http://localhost'}:${PORT}`)
});

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
  });
  

  app.get('/products', (req, res) => {
    try {
      const product = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        companyName: faker.company.name()
      };
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error generating product', error: error.message });
    }
  });
  