export default `
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
  createProduct(name: String!, price: Int!, description: String!, category: Category!, images: [String!]!, quantity: Int!): Product!
  updateProduct(_id: String!, name: String!, price: Int!, description: String!, category: Category!, images: [String!]!, quantity: Int!): Product!
  deleteProduct(_id: String!): Product
}
`
