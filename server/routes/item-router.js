import { Router } from "express";

import { checkIfAuthenticated, checkIfAdmin } from "../middlewares/auth-middleware";

import { createItem, updateItem, deleteItem, getItemById, getItems } from "../controllers/item-ctrl";

const router = Router();

router.post("/item", checkIfAuthenticated, createItem);
router.put("/item/:id", checkIfAuthenticated, updateItem);
router.delete("/item/:id", checkIfAdmin, deleteItem);
router.get("/item/:id", getItemById);
router.get("/items", getItems);

export default router;
