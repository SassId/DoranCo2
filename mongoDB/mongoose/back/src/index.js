import express from "express";
import mongoose from "mongoose";
import { todosRoute } from "./routes/todos-route.js";

const MONGODB_URL = "mongodb://127.0.0.1:27017/todos";

const PORT = 3005;

const server = express();

// native middleware to string and parse
server.use(express.json());

// we now indicate that we want to use the router we created to
server.use("/api/todos", todosRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database not connected");
    console.log(err);
  });

server.listen(PORT, function () {
  console.log("server listening on port 3005");
  console.log(`http://localhost:${PORT}`);
});
