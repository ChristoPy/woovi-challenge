import { ProductModel, Product } from "../model";

export const productsByCategory = async (_: any, { category }: Product) => {
  return ProductModel.find({ category })
};
