import express from "express";
import { todolistModel } from "../database/todolist.js";

export const todosRoute = express.Router();

// TODO:
// But Général: faire un CRUD sur les todo list

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

// TODO:
// Exercice 2:
// 1. Ajouter un route "GET" sur l'url "/"
// 2. Lire la doc de mongoose pour apprendre a récuperer tous les document du collection.
// 3. Utiliser le model pour récuperer toutes les todos de la DB
// 4. Retourner la liste de toutes les todos.

todosRoute.get("/", async (req, res) => {
  const allTodos = await todolistModel.find();
  res.json({ documents: allTodos });
});

// TODO:
// Exercice 3:
// 1. Ajouter un route sur '/api/todos/id',
// 2. Récuperer l'id depuis les paramètre d'url
// 3. Utiliser le model pour récuperer la todo avec son id
// 4. Si la todo n'existe pas retourner 404
// 5. Si la todo exist retourner la todo

todosRoute.get("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await todolistModel.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "could not find list" });
  }
  return res.json(todo);
});

// TODO:
// Exercice 4:
// 1. Créer la route '/api/todos/id'
// 2. Récuperer l'id dans les paramètre d'url
// 3. Récuperer le titre dans les body de la requete
// 4. Récuperer la todo avec son id
// 4.1 Si elle existe pas, retourner 404
// 4.2 Si elle existe;
// 4.2.1: Mettre a jour le titre de la todolist
// 4.2.1: Retourner la todolist

todosRoute.put("/:id", async (req, res) => {
  const todoId = req.params.id;
  const title = req.body.title;
  const todo = await todolistModel.findById(todoId).exec();
  if (!todo) {
    return res.status(404).json({ error: "could not find list" });
  }
  todo.title = req.body.title;
  await todo.save();

  return res.json(todo);
});

// ? Method with .updateOne():
// todosRoute.put("/:id", async (req, res) => {
//   const todoId = req.params.id;
//   const title = req.body.title;
//   const todo = await todolistModel.findById(todoId).exec();
//   if (!todo) {
//     return res.status(404).json({ error: "could not find list" });
//   }
//   const updatedTodo = todolistModel.updateOne({_id: todoId}, {$set: {title: title}});
//   console.log(updatedTodo)

//   return res.json(updatedTodo);
// });

// ? Method with .findByIdAndUpdate
// todosRoute.put("/:id", async (req, res) => {
//   const todoId = req.params.id;
//   const title = req.body.title;
//   const todo = await todolistModel.findById(todoId).exec();
//   if (!todo) {
//     return res.status(404).json({ error: "could not find list" });
//   }
//   const updatedTodo = todolistModel.findByIdAndUpdate(todoId, {title: title})
//   console.log(updatedTodo)

//   return res.json(updatedTodo);
// });

// TODO:
// Exercice 5:
// 1. Ajouter un route Delete avec id dans les paramètre
// 2. Récuperer la tache avec ID
// 3. 404 si ell n'existe pas
// 4. La supprimer si elle existe
// 5. Retourner un message.

todosRoute.delete("/:id", async (req, res) => {
  const todoId = req.params.id;
  const todo = await todolistModel.findByIdAndDelete(todoId);

  if (!todo) {
    return res.status(404).json("could not find list");
  }
});
//   // const deletedTodo = await todolistModel.deleteOne({ _id: todoId });

//   // or you can also do:
//   // await todo.deleteOne;

//   return res.json({ message: "todo deleted" });
// });

// * Adding a todo inside the todolist:
todosRoute.post("/:id/todo", async (req, res) => {
  const todolistId = req.params.id;
  const todoTitle = req.body.title;

  const todolist = await todolistModel.findById(todolistId);
  if (!todolist) {
    return res.status(404).json({ error: "couldn not find todo list" });
  }

  todolist.todos.push({ title: todoTitle });
  await todolist.save();

  return res.json(todolist);
});

// * cRud Read a task in the todo list (search by todolist id and then task id):
todosRoute.get("/:listId/todo/:todoId", async (req, res) => {
  //the route has 2 parameters
  // const listId = req.params.listId;
  // const todoId = req.params.todoId
  // destructured into:
  const { listId, todoId } = req.params;

  const todolist = await todolistModel.findById(listId).exec();
  if (!todolist) {
    return res.status(404).json({ error: "couldn not find todo list" });
  }

  const todo = todolist.todos.id(todoId); //the .id() methods finds the task by its id

  return res.json(todo);
});

todosRoute.put("/:listId/todo/:todoId", async (req, res) => {
  const { listId, todoId } = req.params;
  const { title, isDone } = req.body;

  const todolist = await todolistModel.findById(listId);

  if (!todolist) {
    return res.status(404).json({ error: "couldn not find todo list" });
  }

  const todo = todolist.todos.id(todoId);

  todo.set({
    title: title ? title : todo.title,
    isDone: isDone != undefined ? isDone : todo.isDone,
  });

  await todolist.save();
  return res.json({ message: "task updated" });
});

// TODO:
// cruD : supprimer une todo de la liste

todosRoute.delete("/:listId/todo/:todoId", async (req, res) => {
  const { listId, todoId } = req.params;

  const todolist = await todolistModel.findById(listId);

  if (!todolist) {
    return res.status(404).json({ error: "couldn not find todo list" });
  }

  const todo = todolist.todos.id(todoId);

  todolist.todos.pull(todo);

  await todolist.save();

  return res.json({ message: "task deleted" });
});
