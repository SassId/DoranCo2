import express from "express";

export const todosRoute = express.Router();

// TODO:
// Exercice 1:
// Créer une route sur la mathode post avec l'url'/'
// Récuperer les données du body: title;
// Tester si dans le body y'a title:
// Si pa title retourne 400 avec erreur
// Sinon: retour message "ok"

todosRoute.post("/", (req, res) => {
  const data = req.body; // at that point, data is a buffer (so we need to parse it but we do it with the native middleware we import in the index.js)
  console.log(data);

  if (!data.title) {
    return res.status(400).json({ error: "title is mandatory" });
  }

  res.end("ok");
});
