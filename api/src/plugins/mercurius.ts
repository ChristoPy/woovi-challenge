import fp from 'fastify-plugin'
import mercurius, { MercuriusOptions } from 'mercurius'
import schema from '../data/schema'
import * as productQueries from '../data/product/queries'
import * as productMutations from '../data/product/mutations'

const resolvers = {
  Query: {
    ...productQueries
  },
  Mutation: {
    ...productMutations
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
