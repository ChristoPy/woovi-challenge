import { Product } from "data/model/product";
import { ProductModel } from "../model";

export const productsByCategory = async (_: any, { category }: Product) => {
  return ProductModel.find({ category })
};
