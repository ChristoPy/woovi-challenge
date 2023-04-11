import { Schema } from "mongoose";

export const AddressSchema = new Schema({
  zipcode: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  complement: { type: String, required: false },
  country: { type: String, required: true },
});

export const ShopperSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  taxID: { type: String, required: true },
  correlationID: { type: String, required: true },
  address: { type: AddressSchema, required: true },
});
