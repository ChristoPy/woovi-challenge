# Lojja Store
Lojja Store is the front-end component of the Lojja e-commerce project. It provides a user interface that allows users to browse products, add them to their cart, and purchase them using the PIX payment method. It also provides an admin interface for managing products and orders at `/admin`.

## Getting Started
### Prerequisites
To run the Lojja Store, you will need the following software installed on your machine:

* Node.js (version 14 or later)

### Running the Store
1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a .env file in the root of the project directory and add the following environment variables:
```bash
VITE_GRAPHQL_URL=http://localhost:3000/graphql
```

3. Start the Store:
```bash
npm run dev
```

4. Open development server at http://localhost:5173.

## Building for Production
To build the Lojja Store for production, use the following command:
```bash
npm run build
```

This will create a `dist` directory containing the production-ready files for the application.
