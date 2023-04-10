import { ProductModel } from "../model";

export const deleteProduct = async (_: any, { _id }: { _id: string }) => {
  const product = await ProductModel.findById(_id)
  if (!product) return null

  await product.deleteOne()
  return product
};
