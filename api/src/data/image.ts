import { Schema } from "mongoose";

export const ImageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});
