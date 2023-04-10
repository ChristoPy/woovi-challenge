import { test } from 'tap'
import Fastify from 'fastify'
import Mongoose from '../../src/plugins/mongoose'
import db from '../../src/database'

test('closing the server closes the database connection', async (t) => {
  const fastify = Fastify()
  void fastify.register(Mongoose)
  await fastify.ready()

  await fastify.close()
  t.ok(db.readyState === 0)
})
