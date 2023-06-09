import { ProductParams } from "data/model/product";
import { ProductModel } from "../model";

export const createProduct = async (_: any, data: ProductParams) => {
  const product = new ProductModel({ ...data, createdAt: Date.now(), updatedAt: Date.now() });
  await product.save();

  return product;
};
