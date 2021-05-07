import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const Item = new Schema(
  {
    type: { type: String, required: true },
    brand: { type: String, required: true },
    season: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Item", Item, "items");
