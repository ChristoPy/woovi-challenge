import { ProductModel } from "../model";

export const products = () => {
  return ProductModel.find();
}
