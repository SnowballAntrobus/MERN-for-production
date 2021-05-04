const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wishlist = new Schema(
  {
    uid: {type: String, required: true},
    items: {type: [String], required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("wishlists", Wishlist);