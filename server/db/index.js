import { connect, connection } from "mongoose";

const connectionString = process.env.MONGO_URI;

connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = connection;

export default db;
