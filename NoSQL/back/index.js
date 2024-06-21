import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Backend on http://localhost:${port}`);
});

// Exercice
// Créer une route GET sur "/api/ping" qui retourne du JSON
// La route doit retourner {message:"pong"}

app.get("/api/ping", (req, res) => {
  return res.json({ message: "pong" });
});
