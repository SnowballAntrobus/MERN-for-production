const express = require("express");

const WishlistCtrl = require("../controllers/wishlist-ctrl");

const router = express.Router();

router.post("/wishlist", WishlistCtrl.createWishlist);
router.get("/wishlist/:id", WishlistCtrl.getWishlistById);
router.put("/wishlist/:id", WishlistCtrl.updateWishlist);

module.exports = router;
