import { ProductModel, Product } from "../model";

export const product = async (_: any, { _id }: Product) => {
  return ProductModel.findById(_id)
};

