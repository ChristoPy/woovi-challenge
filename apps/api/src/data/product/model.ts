import { Schema } from "mongoose";
import db from "../../database";

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['ELECTRONICS', 'FASHION', 'HOME', 'GROCERY', 'SPORTS', 'TOYS', 'BOOKS', 'OTHER'], required: true },
  images: { type: [String], required: true },
  createdAt: { type: Number, required: false },
  updatedAt: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const ProductModel = db.model("Product", ProductSchema);
