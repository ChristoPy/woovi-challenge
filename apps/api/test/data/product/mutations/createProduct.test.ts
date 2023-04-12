import { test } from 'tap'
import { ProductParams } from 'data/model'
import db from "../../../../src/database"
import { createProduct } from "../../../../src/data/product/mutations/createProduct"

test('creates a product', async (t) => {
  const param = {
    name: 'Test Product Creation',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const result = await createProduct({}, param)

  t.same(result.name, param.name)
  t.pass()

  await result.deleteOne()
  db.close()
})
