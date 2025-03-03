# E-Commerce Data Seeding Scripts

Scripts to populate the e-commerce database with test data.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure your environment:
   - Update `.env` file if your MongoDB connection details differ
   - Default configuration connects to `mongodb://localhost:27017/ecommerce`

## Usage

### With Docker

If your Docker Compose environment is running, you need to update the MongoDB connection string to point to your local machine:

1. Ensure Docker Compose is up and running:
   ```
   docker-compose up -d
   ```

2. Seed products:
   ```
   npm run seed
   ```

### Alternative: Run inside Docker network

You can also run the script from inside the Docker network:

```bash
# Copy scripts folder into the product-service container
docker cp ./scripts/. e-commerce-vue-main-product-service-1:/src/scripts

# Access the container
docker exec -it e-commerce-vue-main-product-service-1 /bin/bash

# Inside the container
cd /app/scripts
npm install
MONGODB_URI=mongodb://mongodb:27017/ecommerce node seed-products.js
```

## Available Scripts

- `npm run seed`: Populate the database with sample products
