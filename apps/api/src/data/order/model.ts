import { Schema } from "mongoose";
import db from "../../database";
import { ProductSchema } from "../product/model";
import { ShopperSchema } from "../shopper";

export const OrderSchema = new Schema({
  status: { type: String, enum: ['CREATED', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELED'], required: true },
  shopper: { type: ShopperSchema, required: true },
  products: { type: [ProductSchema], required: true },
  total: { type: Number, required: true },
  createdAt: { type: Number, required: false },
  updatedAt: { type: Number, required: true },
});

export const OrderModel = db.model("Order", OrderSchema);
