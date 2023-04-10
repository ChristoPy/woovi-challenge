import { test } from 'tap'
import db from "../../../../src/database"
import { product } from "../../../../src/data/product/queries/product"
import { createProduct } from '../../../../src/data/product/mutations'
import { ProductParams } from '../../../../src/data/product/model'

test('does not get a product', async (t) => {
  const result = await product({}, {_id: "642ed7dbb0cbc04a02baee63"})

  t.same(result, null)
  t.pass()
})

test('gets a product', async (t) => {
  const param = {
    name: 'Test Product to get One',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const productResult = await createProduct({}, param)
  const result = await product({}, {_id: productResult._id.toString()})

  t.same(result?.name, 'Test Product to get One')
  t.pass()

  await productResult.deleteOne()
  db.close()
});
