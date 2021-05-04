const mongoose = require("mongoose");
const Schema = mongoose.Schema;

import Item from "./item-model";

const Wishlist = new Schema(
  {
    uid: {type: String, required: true},
    items: {type: [Item], required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("wishlists", Wishlist);