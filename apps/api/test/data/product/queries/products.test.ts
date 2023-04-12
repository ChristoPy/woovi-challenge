import { test } from 'tap'
import { ProductParams } from 'data/model'
import db from "../../../../src/database"
import { products } from "../../../../src/data/product/queries/products"
import { createProduct } from '../../../../src/data/product/mutations'

test('does not get products', async (t) => {
  const result = await products()

  t.same(result, [])
  t.pass()
})

test('gets a product', async (t) => {
  const param = {
    name: 'Test Product to get Many',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const createdResult = await createProduct({}, param)
  const result = await products()

  t.same(result.length == 1, true)
  t.pass()

  await createdResult.deleteOne()
  db.close()
});
