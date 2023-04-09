import { test } from 'tap'
import db from "../../../../src/database"
import { createProduct } from "../../../../src/data/product/mutations/createProduct"
import { ProductParams } from '../../../../src/data/product/model'

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

  db.close()
  t.same(result.name, param.name)
  t.pass()
})
