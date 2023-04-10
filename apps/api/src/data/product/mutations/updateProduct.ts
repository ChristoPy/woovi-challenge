import { Product } from "data/model/product";
import { ProductModel } from "../model";

export const updateProduct = async (_: any, data: Product) => {
  const product = await ProductModel.findById(data._id)
  if (!product) return null

  Object.assign(product, { ...data, updatedAt: Date.now() })
  await product.save()

  return product
};
