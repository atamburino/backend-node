const express = require("express");
require("dotenv").config();
const { faker } = require('@faker-js/faker');

const app = express(); 

// Middleware
app.use(express.json())

const cors = require('cors');
app.use(cors()); // Allow all origins (you can limit to specific origins in production)


const PORT = process.env.PORT || 3000; // Add a fallback port

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.URL || 'http://localhost'}:${PORT}`)
});

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
  });
  


  app.get('/products', (req, res) => {
    try {
      // Generate a random number between 20 and 50 for the number of products
      const numberOfProducts = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  
      const products = [];
  
      for (let i = 0; i < numberOfProducts; i++) {
        const product = {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price(),
          companyName: faker.company.name(),
        };
        products.push(product);
      }
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error generating products', error: error.message });
    }
  });
  