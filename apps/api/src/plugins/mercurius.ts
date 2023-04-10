import fp from 'fastify-plugin'
import mercurius, { MercuriusOptions } from 'mercurius'
import mercuriusAuth from 'mercurius-auth'

import schema from '../data/schema'
import * as productQueries from '../data/product/queries'
import * as productMutations from '../data/product/mutations'
import { FastifyReply, FastifyRequest } from 'fastify'

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
  const applyCORSHeaders = (request: FastifyRequest, reply: FastifyReply) => {
    reply.header('Access-Control-Allow-Origin', '*')
    reply.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }
  fastify.addHook('onRequest', (request, reply, done) => {
    applyCORSHeaders(request, reply)
    done()
  })
  fastify.options('/graphql', (request, reply) => {
    applyCORSHeaders(request, reply)
    reply.send()
  })

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
