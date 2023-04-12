import { OrderParams } from "data/model/order";
import { OrderModel } from "../model";
import { createPaymentIntent } from "../../../core/paymentIntent";

export const createOrder = async (_: any, data: OrderParams) => {
  const order = new OrderModel({
    ...data,
    status: "CREATED",
    shopper: {
      ...data.shopper,
      correlationID: data.shopper.taxID,
      address: {
        ...data.shopper.address,
        country: "BR"
      }
    },
    total: data.products.reduce((acc, product) => acc + product.price, 0),
    createdAt: Date.now()
  });
  await order.save();

  return createPaymentIntent(order.total, order._id.toString());
};
