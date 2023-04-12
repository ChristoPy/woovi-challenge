import fp from 'fastify-plugin'
import redis from '../cache'

/**
 * This plugin gracefully closes the redis connection
 * when the server gets closed.
 * 
 */
export default fp(async (fastify) => {
  fastify.addHook('onClose', async (_, done) => {
    await redis.quit()
    done()
  })
})
