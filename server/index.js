const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const userRouter = require("./routes/user-router");
const itemRouter = require("./routes/item-router");

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.use("/api", userRouter);
app.use("/api", itemRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
