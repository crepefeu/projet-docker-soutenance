import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file if present
dotenv.config();

// Define product schema (matching the one in the product service)
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Sample product data
const sampleProducts = [
  {
    name: 'Smartphone X',
    price: 899.99,
    description: 'Latest smartphone with high-end features and 5G connectivity.',
    stock: 50
  },
  {
    name: 'Laptop Pro',
    price: 1299.99,
    description: '15-inch laptop with powerful processor and dedicated graphics.',
    stock: 25
  },
  {
    name: 'Wireless Headphones',
    price: 149.99,
    description: 'Noise-cancelling wireless headphones with 20-hour battery life.',
    stock: 100
  },
  {
    name: 'Smart Watch',
    price: 299.99,
    description: 'Fitness tracker with heart rate monitor and sleep analysis.',
    stock: 75
  },
  {
    name: 'Tablet Ultra',
    price: 499.99,
    description: '10-inch tablet with high-resolution display and fast processor.',
    stock: 40
  }
];

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`Successfully inserted ${insertedProducts.length} products`);
    
    // Log inserted products
    console.log('Inserted products:');
    insertedProducts.forEach(product => {
      console.log(`- ${product.name} ($${product.price}) - ${product.stock} in stock`);
    });
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

// Run the seeding function
seedProducts();
