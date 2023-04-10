import { test } from 'tap'
import Fastify from 'fastify'
import Mercurius from '../../src/plugins/mercurius'

test('support works standalone', async (t) => {
  const fastify = Fastify()
  void fastify.register(Mercurius)
  await fastify.ready()

  t.ok(fastify.hasPlugin('mercurius'))
  t.ok(fastify.hasPlugin('mercurius-auth'))
})
