import { Router } from "express";

import { checkIfAuthenticatedId } from "../middlewares/auth-middleware";

import { createWishlist, getWishlistById, updateWishlist } from "../controllers/wishlist-ctrl";

const router = Router();

router.post("/wishlist", createWishlist);
router.get("/wishlist/:id", getWishlistById);
router.put(
  "/wishlist/:id",
  checkIfAuthenticatedId,
  updateWishlist
);

export default router;
