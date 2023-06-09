import { test } from 'tap'
import { ProductParams } from 'data/model'
import db from "../../../../src/database"
import { createProduct } from "../../../../src/data/product/mutations/createProduct"
import { updateProduct } from "../../../../src/data/product/mutations/updateProduct"

test('does not update a product', async (t) => {
  const result = await updateProduct({}, {
    _id: "642ed7dbb0cbc04a02baee63",
    name: 'Test Product Update',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  })

  t.same(result, null)
})

test('deletes a product', async (t) => {
  const param = {
    name: 'Test Product to Update',
    price: 100,
    description: 'Test Description',
    category: 'ELECTRONICS',
    images: ['https://example.com/image.jpg'],
    quantity: 10,
  } as ProductParams
  const product = await createProduct({}, param)
  const result = await updateProduct({}, {...product.toObject(), name: 'New Name'})

  t.same(result?.name, 'New Name')
  t.pass()

  await product.deleteOne()
  db.close()
})
