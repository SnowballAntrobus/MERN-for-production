const express = require("express");

const checkIfAuthenticated = require("../middlewares/auth-middleware")

const ItemCtrl = require("../controllers/item-ctrl");

const router = express.Router();

router.post("/item", checkIfAuthenticated, async (_, res) => {ItemCtrl.createItem});
router.put("/item/:id", checkIfAuthenticated, async (_, res) => {ItemCtrl.updateItem});
router.delete("/item/:id", checkIfAuthenticated, async (_, res) => {ItemCtrl.deleteItem});
router.get("/item/:id", ItemCtrl.getItemById);
router.get("/items", ItemCtrl.getItems);

module.exports = router;
