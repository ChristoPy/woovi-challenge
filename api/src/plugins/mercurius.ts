import fp from 'fastify-plugin'
import mercurius, { MercuriusOptions } from 'mercurius'
import mercuriusAuth from 'mercurius-auth'

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
 * This plugin add graphQL support and auth to the application
 *
 * @see https://github.com/mercurius-js/mercurius
 */
export default fp<MercuriusOptions>(async (fastify) => {
  
  fastify.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  fastify.register(mercuriusAuth, {
    authContext(context) {
      return {
        identity: context.reply.request.headers['x-user']
      }
    },
    async applyPolicy(authDirectiveAST, parent, args, context, info) {
      return context?.auth?.identity === 'admin'
    },
    authDirective: 'auth'
  })
})
