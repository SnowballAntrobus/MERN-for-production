const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const itemRouter = require("./routes/item-router");
const wishlistRouter = require("./routes/wishlist-router");

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.use("/api", itemRouter);
app.use("/api", wishlistRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
