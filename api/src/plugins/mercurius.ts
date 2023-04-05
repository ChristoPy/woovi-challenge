import fp from 'fastify-plugin'
import mercurius, { MercuriusOptions } from 'mercurius'
import { ProductModel } from '../data/product'

const schema = `
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
  images: [Image!]!
  createdAt: BigInt!
  updatedAt: BigInt!
  quantity: Int!
}

type Image {
  _id: ID!
  url: String!
}

type Query {
  products: [Product!]!
  product(_id: String!): Product!
}
`

const resolvers = {
  Query: {
    products: async () => {
      return ProductModel.find()
    },
    product: async (_: any, { _id }: { _id: string }) => {
      return ProductModel.findById(_id)
    }
  }
}

/**
 * This plugin add graphQL support
 *
 * @see https://github.com/mercurius-js/mercurius
 */
export default fp<MercuriusOptions>(async (fastify) => {
  fastify.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })
})
