import { Product } from "data/model/product";
import { ProductModel } from "../model";

export const product = async (_: any, { _id }: Product) => {
  return ProductModel.findById(_id)
};
