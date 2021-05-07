import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const Wishlist = new Schema(
  {
    _id: { type: String, required: true },
    items: [
      { type: _Schema.Types.ObjectId, ref: "Item", required: true },
    ],
  },
  { timestamps: true }
);

export default model("Wishlist", Wishlist, "wishlists");
