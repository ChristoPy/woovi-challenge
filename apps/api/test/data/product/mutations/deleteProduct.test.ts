import { test } from 'tap'
import { ProductParams } from 'data/model'
import db from "../../../../src/database"
import { createProduct } from "../../../../src/data/product/mutations/createProduct"
import { deleteProduct } from "../../../../src/data/product/mutations/deleteProduct"

test('does not delete a product', async (t) => {
  const result = await deleteProduct({}, {_id: "642ed7dbb0cbc04a02baee63"})

  t.same(result, null)
})

test('deletes a product', async (t) => {
  const param = {
    name: 'Test Product Creation for Deletion',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const product = await createProduct({}, param)
  const result = await deleteProduct({}, {_id: product._id.toString()})

  t.same(result?._id.toString(), product._id.toString())
  t.pass()

  db.close()
})
