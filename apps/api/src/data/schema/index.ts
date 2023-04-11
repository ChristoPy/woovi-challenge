export default `
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

input ProductInput {
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

type Address {
  zipcode: String!
  street: String!
  number: String!
  neighborhood: String!
  city: String!
  state: String!
  complement: String
  country: String!
}

input AddressInput {
  zipcode: String!
  street: String!
  number: String!
  neighborhood: String!
  city: String!
  state: String!
  complement: String
}

type Shopper {
  name: String!
  email: String!
  phone: String!
  taxID: String!
  correlationID: String!
  address: Address!
}

input ShopperInput {
  name: String!
  email: String!
  phone: String!
  taxID: String!
  address: AddressInput!
}

enum Status {
  CREATED
  PAID
  SHIPPED
  DELIVERED
  CANCELED
}

type Order {
  _id: ID!
  status: Status!
  shopper: String!
  products: [Product!]!
  total: Int!
  createdAt: BigInt!
  updatedAt: BigInt
  processedAt: BigInt
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
  createOrder(shopper: ShopperInput!, products: [ProductInput!]!): Order!
}
`
