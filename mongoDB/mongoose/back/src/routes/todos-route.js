import express from "express";
import { todolistModel } from "../database/todolist.js";

export const todosRoute = express.Router();

// TODO:
// Exercice 1:
// Créer une route sur la mathode post avec l'url'/'
// Récuperer les données du body: title;
// Tester si dans le body y'a title:
// Si pa title retourne 400 avec erreur
// Sinon: retour message "ok"

todosRoute.post("/", async (req, res) => {
  const data = req.body; // at that point, data is a buffer (so we need to parse it but we do it with the native middleware we import in the index.js)
  console.log(data);

  if (!data.title) {
    return res.status(400).json({ error: "title is mandatory" });
  }

  // create a new todo list based on the model we created in todolist.js
  const newTodolist = new todolistModel({
    title: data.title,
    createdAt: new Date(),
  });

  // save the newTodolist in the DB:
  const addedTodolist = await newTodolist.save();

  // return the new todolist in json
  res.json({ todo: addedTodolist });
});
