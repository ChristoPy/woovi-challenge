# Lojja

## Overview
Lojja is a code challenge project that implements an e-commerce store.  

The purpose of this project is to demonstrate an (almost) real-world implementation of an e-commerce store that allows users to purchase items without needing to register beforehand. The store uses billing, shipping, and contact information to send updates to the user's email. The payment method is limited to PIX, Brazil's instant payment system released in 2020, and users can choose to pay in full or in installments.  

## Back-End API
The back-end API is located in the [/api](/api/) directory and provides the core functionality for the e-commerce store. It is built using NodeJS and Fastify, a fast and low-overhead web framework. The API uses TypeScript for type safety and GraphQL (via the Mercurius plugin) for handling requests and responses.  

The back-end API also uses MongoDB as the primary data store, with Mongoose as the ODM. Tap is used for testing the API.  

## Front-End Store
Front-End Store
The front-end store is located in the [/store](/store/) directory and provides the user interface for the e-commerce store. It is built using React and TypeScript, with Relay for handling data queries and mutations. The store is styled using Tailwind.

Users can browse products and add them to their cart, and can choose to pay in full or in installments using the PIX payment method. Additionally, users can log in to the `/admin` section of the store as an admin user to manage products and orders.

In the `/admin` section, admins can add, edit, and delete products, as well as view and update order statuses. This section of the store is only accessible to users with admin privileges.

## Installation
To run the Lojja project, clone this repository to your local machine and run the following commands in separate terminals:   
```bash
cd api
npm install
npm start
```
```bash
cd store
npm install
npm start
```

## Contributing
This project is a code challenge and is not currently accepting contributions. However, if you find a bug or have a suggestion for improvement, please feel free to open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
