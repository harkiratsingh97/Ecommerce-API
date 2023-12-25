# Ecommerce-API

This Node.js and MongoDB-based E-commerce API allows you to manage products through various endpoints, including retrieving, adding, deleting, and updating product quantities in the database.

Endpoints

1. Retrieve Products
Endpoint: /products
Method: GET
Description: Retrieve a list of all products from the database.

2. Add Product
Endpoint: /products/create
Method: POST
Description: Add a new product to the database.
Request Payload: JSON object containing product details (name, quantity).

3. Delete Product
Endpoint: /products/:productId
Method: DELETE
Description: Delete a product from the database based on the provided product ID.

4. Update Product Quantity
Endpoint: /products/:productId/update_quantity
Method: POST
Description: Update the quantity of a specific product in the database and the quantity is passed as querystring.

Getting Started
Clone the Repository:

git clone https://github.com/your-username/ecom-api.git
cd ecom-api
Install Dependencies:

npm install

Configure MongoDB:

Create a MongoDB database and update the connection string in .env as (db="sbstring")

Run the Server:
npm start
