import { test } from 'tap'
import db from "../../../../src/database"
import { productsByCategory } from "../../../../src/data/product/queries/productsByCategory"
import { createProduct } from '../../../../src/data/product/mutations'
import { ProductParams } from '../../../../src/data/product/model'

test('does not get products by category', async (t) => {
  const result = await productsByCategory({}, {category: 'OTHER'})

  t.same(result, [])
  t.pass()
})

test('get products by category', async (t) => {
  const param = {
    name: 'Test Product to get Many by Category',
    price: 100,
    description: 'Test Description',
    category: 'FASHION',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const createdResult = await createProduct({}, param)
  const result = await productsByCategory({}, {category: 'FASHION'})

  t.same(result.length == 1, true)
  t.pass()

  await createdResult.deleteOne()
  db.close()
});
