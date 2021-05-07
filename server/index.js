import express, { urlencoded, json } from "express";
import cors from "cors";
require("dotenv").config();

import db from "./db";

import itemRouter from "./routes/item-router";
import wishlistRouter from "./routes/wishlist-router";

const app = express();
const apiPort = 5000;

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(json());

on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.use("/api", itemRouter);
app.use("/api", wishlistRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
