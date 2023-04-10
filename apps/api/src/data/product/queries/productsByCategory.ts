import { ProductModel } from "../model";

export const productsByCategory = async (_: any, { category }: { category: string }) => {
  return ProductModel.find({ category })
};
