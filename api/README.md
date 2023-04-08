# Lojja API
Lojja API is the back-end component of the Lojja e-commerce project. It provides a GraphQL API that allows users to browse products, add them to their cart, and purchase them using the PIX payment method. It also provides an admin interface for managing products and orders.

## Getting Started
### Prerequisites
To run the Lojja API, you will need the following software installed on your machine:

* Node.js (version 14 or later)
* MongoDB
* Docker (optional)

### Running the Database
1. Setup MongoDB
```bash
docker run --name lojja-mongo -d -p 27017:27017 mongo
```

### Running the API
1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a .env file in the root of the project directory and add the following environment variables:
```bash
MONGO_URL=<your MongoDB connection string>
MONGO_DB=<your MongoDB database name>
JWT_SECRET_KEY=<your JWT secret>
```

3. Start the API:
```bash
npm run dev
```

4. Open the GraphQL Playground at http://localhost:3000/graphiql

## Testing
To run the test suite, run the following command:
```bash
npm run test
```
