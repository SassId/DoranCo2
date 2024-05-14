import express from "express";
import fs from "fs";

const server = express();

server.get("/api/posts", (req, res) => {
  console.log(req);
  res.end("Hello");
});

// TODO:
// Exercice:
// Ajouter un handler pour l'url "/api/users" avec la methode POST
//et retourne "bonjour utilisateur"
// Tester si elle fonctionne avec Postman

server.post("/api/users", (req, res) => {
  console.log(req.method);
  res.end("hello user :)");
});

// TODO:
// Exercice:
// Ajouter un handler pour l'url /api/todos avec method GET.
// 1. Lire le conténu du fichier todos.json
// 2. Retourner le contenu Json dans réponse
// 3. Tester la route avec Postman

server.get("/api/todos", (req, res) => {
  console.log(req.method);
  fs.readFile("./src/data/todos.json", (err, data) => {
    // ! the relative path is from where the nodemon is executed (in the package file)
    if (err) {
      console.log("cannot read file");
      console.log(err);
      res.json({ error: "something wrong has occured" });
      res.end("cannot read file");
      return;
    }
    // ! the data.toString() will change the buffer into a string and then we parse it to make it a js object
    // const dataString = data.toString();
    // const dataObject = JSON.parse(dataString);
    // res.json(dataObject)
    // equals to
    res.json(JSON.parse(data.toString()));
  });
});

// * To collect info from the url:
// * ex: /api/user?firstname=Doe&lastname=John
server.get("/api/user", (req, res) => {
  const data = req.query;
  console.log(data); // data is then an object containing firstname and lastname as keys and value

  if (!data.firstname || !data.lastname) {
    return res.status(400).json({ error: "mandatory information" });
  }

  res.json(data);
});

// TODO:
// Exercice:
// Ajouter un handler pour l'url "/api/todo":
// /api/todo?id=2
// /api/todo?id=4
// Récuperer la liste des todos
// Si la todo n'existe pas , retourner un 404
// Sinon Retourner en JSON la todo avec l'id fournit

server.get("/api/todo", (req, res) => {
  const todoData = req.query;
  console.log(todoData);

  // check if the id in the url doesn't exist
  if (todoData.id === undefined) {
    return res.status(404).json({ error: "page not found, sorry!" });
  }
  // read the json file used as database
  fs.readFile("./src/data/todos.json", (err, data) => {
    if (err) {
      res.json({ error: "something wrong has occured" });
      res.end("cannot read file");
      return;
    }
    // Changes the buffer obtained after reading the file into a string and then a js object
    const todoItem = JSON.parse(data.toString());
    console.log(todoItem);

    // we now have an object (todoItem) containing a key (todos) that is an array containing an object
    // Filter the array to match the condition

    // here, item is an object
    const filterData = todoItem.todos.filter((item) => item.id == todoData.id);
    console.log(filterData);
    // Check if the array is empty
    if (filterData.length === 0) {
      res.status(404).json({ error: "page not found" });
      return;
    }
    console.log(filterData[0]);
    // after the filter, we get a single value that is still an array
    return res.json(filterData[0]);
  });
});

server.listen(3005, function () {
  console.log("Server on port 3005");
});
