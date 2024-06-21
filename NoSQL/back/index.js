import express from "express";
import mongoose from "mongoose";
import { createUser, getAllUsers } from "./database/users.js";

const app = express();
const port = 3000;

const MONGODB_URI = "mongodb://127.0.0.1:27017/russian-roulette";

// gets the body.req and turns it into JS
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Exercice
// Créer une route GET sur "/api/ping" qui retourne du JSON
// La route doit retourner {message:"pong"}

app.get("/api/ping", (req, res) => {
  return res.json({ message: "pong" });
});

app.post("/api/users", async (req, res) => {
  // get firstname and lastname in the req.body
  const { firstname, lastname } = req.body;
  // check they're not empty
  if (firstname === "" || lastname === "") {
    res.status(400).json({ message: "firstname and lastname are mandotory" });
  }
  // rec the new user in mongodb
  const newUser = await createUser(firstname, lastname);
  // return a response of success
  return res.json({ message: "pending" });
});

app.get("/api/users", async (req, res) => {
  const users = await getAllUsers();
  return rep.json(users);
});

app.listen(port, () => {
  console.log(`Backend on http://localhost:${port}`);

  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      // Afficher dans la console que la BDD est connecté
      console.log("Connecté à la BDD");
    })
    .catch((err) => {
      // Erreur dans le then
      console.log("Pas connecté à la BDD");
      console.log(err);
    });
});
