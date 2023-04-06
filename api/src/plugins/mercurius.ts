import fp from 'fastify-plugin'
import mercurius, { MercuriusOptions } from 'mercurius'
import { Product, ProductModel, ProductParams } from '../data/product'

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

const resolvers = {
  Query: {
    products: async () => {
      return ProductModel.find()
    },
    product: async (_: any, { _id }: { _id: string }) => {
      return ProductModel.findById(_id)
    },
    productsByCategory: async (_: any, { category }: { category: string }) => {
      return ProductModel.find({ category })
    }
  },
  Mutation: {
    createProduct: async (_: any, data: ProductParams) => {
      const product = new ProductModel({ ...data, createdAt: Date.now(), updatedAt: Date.now() })
      await product.save()
      return product
    },
    updateProduct: async (_: any, data: Product) => {
      const product = await ProductModel.findById(data._id)
      if (!product) return null

      Object.assign(product, { ...data, updatedAt: Date.now() })
      await product.save()

      return product
    },
    deleteProduct: async (_: any, { _id }: { _id: string }) => {
      const product = await ProductModel.findById(_id)
      if (!product) return null

      await product.deleteOne()
      return product
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
