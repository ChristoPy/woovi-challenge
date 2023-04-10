import { ProductModel } from "../model";

export const product = async (_: any, { _id }: { _id: string }) => {
  return ProductModel.findById(_id)
};
