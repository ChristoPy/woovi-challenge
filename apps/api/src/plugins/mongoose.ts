import fp from 'fastify-plugin'
import db from '../database'

/**
 * This plugin gracefully closes the database connection
 * when the server gets closed.
 * 
 */
export default fp(async (fastify) => {
  fastify.addHook('onClose', async (_, done) => {
    await db.close()
    done()
  })
})
