# Lojja

## Overview
Lojja is a code challenge project that implements an e-commerce store.  

The purpose of this project is to demonstrate an (almost) real-world implementation of an e-commerce store that allows users to purchase items without needing to register beforehand. The store uses billing, shipping, and contact information to send updates to the user's email. The payment method is limited to PIX, Brazil's instant payment system released in 2020, and users can choose to pay in full or in installments.  

## Back-End API
The back-end API is located in the [/apps/api](/apps/api/) directory and provides the core functionality for the e-commerce store. It is built using [Node.js](https://nodejs.org), [TypeScript](https://www.typescriptlang.org/), [Fastify](https://www.fastify.io/), and [GraphQL](https://graphql.org/) (via the [Mercurius](https://mercurius.dev/) plugin). The API uses [MongoDB](https://www.mongodb.com/) as the primary data store, with [Mongoose](https://mongoosejs.com/) as the ODM. [Tap](https://www.node-tap.org/) is used for testing the API.

## Front-End Store
The front-end store is located in the [/apps/store](/apps/store/) directory and provides the user interface for the e-commerce store. It is built using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/), with [Relay](https://relay.dev/) for handling data queries and mutations. The store is styled using [Tailwind CSS](https://tailwindcss.com/).

Users can browse products and add them to their cart, and can choose to pay in full or in installments using the PIX payment method. Additionally, users can log in to the `/admin` section of the store as an admin user to manage products and orders.  

In the `/admin` section, admins can add, edit, and delete products, as well as view and update order statuses. This section of the store is only accessible to users with admin privileges.

## Schema
The current GraphQL schema looks like this:
  
```graphql
directive @auth(
  requires: Role = BUSINESS,
) on OBJECT | FIELD_DEFINITION

enum Role {
  BUSINESS
  VISITOR
}

scalar BigInt

enum Category {
  ELECTRONICS
  FASHION
  HOME
  GROCERY
  SPORTS
  TOYS
  BOOKS
  OTHER
}

type Product {
  _id: ID!
  name: String!
  price: Int!
  description: String!
  category: Category!
  images: [String!]!
  createdAt: BigInt!
  updatedAt: BigInt
  quantity: Int!
}

type Query {
  products: [Product!]!
  product(_id: String!): Product
  productsByCategory(category: Category!): [Product]!
}

type Mutation {
  createProduct(name: String!, price: Int!, description: String!, category: Category!, images: [String!]!, quantity: Int!): Product! @auth(requires: USER)
  updateProduct(_id: String!, name: String!, price: Int!, description: String!, category: Category!, images: [String!]!, quantity: Int!): Product! @auth(requires: USER)
  deleteProduct(_id: String!): Product @auth(requires: USER)
}
```

This schema can be found at [/apps/api/src/data/schema/index.ts](/apps/api/src/data/schema/index.ts).
While epresenting all current possibilities with the Front-End only being allowed to read data from the API. The Admin interface is able to create, update and delete products.

## Installation
To run the Lojja project, clone this repository to your local machine and follow the instructions for each project.

* [Back-End API](/apps/api/README.md)
* [Front-End Store](/apps/store/README.md)

## Contributing
This project is a code challenge and is not currently accepting contributions. However, if you find a bug or have a suggestion for improvement, please feel free to open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
