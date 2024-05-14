import express from "express";
import fs from "fs";
import { postsRouter } from "./routes/posts-route.js";
const server = express();
server.use(express.json());

// *Middleware used in all the requests:
function displayInfo(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

// * To use a middleware on all the request
server.use(displayInfo);

// * Use other middlewares:
server.use("/api/posts", postsRouter);

server.get("/api/posts", (req, res) => {
  console.log(req);
  res.end("Hello");
});

server.post("/api/posts", postsRouter);

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

// // TODO:
// // Exercice:
// // Ajouter un handler pour l'url "/api/todo":
// // /api/todo?id=2
// // /api/todo?id=4
// // Récuperer la liste des todos
// // Si la todo n'existe pas , retourner un 404
// // Sinon Retourner en JSON la todo avec l'id fournit

// server.get("/api/todo", (req, res) => {
//   const todoData = req.query;
//   console.log(todoData);

//   // check if the id in the url doesn't exist (if the todoData object is empty)
//   if (!todoData) {
//     // or if (todoData.id === undefined)
//     return res.status(400).json({ error: "ID required" });
//   }
//   // read the json file used as database
//   fs.readFile("./src/data/todos.json", (err, data) => {
//     if (err) {
//       res.status(500).json({ error: "something wrong has occured" });
//       res.end("cannot read file");
//       return;
//     }
//     // Changes the buffer obtained after reading the file into a string and then a js object
//     const todoItem = JSON.parse(data.toString());
//     console.log(todoItem);

//     // we now have an object (todoItem) containing a key (todos) that is an array containing an object
//     // Filter the array to match the condition

//     // here, item is an object
//     const filterData = todoItem.todos.filter((item) => item.id == todoData.id);
//     console.log(filterData);

//     // we can also use the find() method:
//     // const findData = todoItem.todos.find((item)=> {
//     //   return item.id == todoData.id
//     // })

//     // Check if the array is empty
//     if (filterData.length === 0) {
//       res.status(404).json({ error: "page not found" });
//       return;
//     }
//     console.log(filterData[0]);
//     // after the filter, we get a single value that is still an array
//     return res.json(filterData[0]);
//   });
// });

// TODO:
// Exercice:
// Ajouter un handler pour l'url "/api/todo" avec la method DELETE:
// /api/todo?id=2
// /api/todo?id=4
// Récuperer la liste des todos
// Si la todo n'existe pas , retourner un 404
// Sinon supprimer la todo du tableau
// Ecrire dans le ficher la nouvelle liste
// Retourner un message: Tache supprimée

server.delete("/api/todo", (req, res) => {
  const urlData = req.query;
  console.log(urlData);
  if (!urlData.id) {
    return res.status(400).json({ error: "ID required" });
  }

  fs.readFile("./src/data/todos.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "something wrong has occured" });
    }
    const todoList = JSON.parse(data.toString());
    console.log("todoList", todoList);

    const findIndexToDelete = todoList.todos.findIndex((item) => {
      return item.id == urlData.id;
    });
    console.log(findIndexToDelete);

    if (findIndexToDelete == -1) {
      // if there's no index found, the findIndex method return -1
      return res.status(404).json({ error: "page not found" });
    }

    todoList.todos.splice(findIndexToDelete, 1);
    console.log(todoList.todos);
    fs.writeFileSync("./src/data/todos.json", JSON.stringify(todoList));

    return res.json("task deleted");
  });
});

server.listen(3005, function () {
  console.log("Server on port 3005");
});

//? Method Filter:

// server.delete("/api/todo", (req, rep) => {
//   const dataURL = req.query;

//   if (!dataURL.id) {
//     return rep.status(400).json({ error: "ID obligatoire" });
//   }

//   const contenu = fs.readFileSync("./src/data/todos.json");
//   const contenuString = contenu.toString();
//   const data = JSON.parse(contenuString);
//   data.todos = data.todos.filter((todo) => todo.id != dataURL.id);
//   fs.writeFileSync("./src/data/todos.json", JSON.stringify(data));

//   return rep.json({ message: "Tache suprimmée" });
// });

// server.listen(3005, function () {
//   console.log("Server on port 3005");
// });

// * Create a middleware to have it automatically check the url data (request) and have it change the buffer into a string then a js object:

function verifyId(req, res, next) {
  const dataUrl = req.query;
  if (!data) {
    return res.status(400).json({ error: "ID mandatory" });
  }
  next();
}

//* Then use it in the http method:
server.get("/api/todos", verifyId, (req, res) => {
  // content of the http method
});

// TODO:
// Exercice:
// Ajouter une todo a la liste
// Ajouter un handler POST qui recoit dans corps de la requete: title et date
// 1. Verifier si title et date est envoyé sinon retourner un erreur
// 2. Generer un id aleatoire
// 3. Ajouter la nouvelle tache dans le fichier todos.json
// 4. Retourner la nouvelle tache ajoutée dans la réponse

server.post("/api/todos", (req, rep) => {
  const data = req.body;

  if (!data.title || !data.date) {
    return rep.status(400).json({ error: "Titre et date obligatoire" });
  }

  const dataTodos = fs.readFileSync("./src/data/todos.json");
  const todosObject = JSON.parse(dataTodos.toString());
  todosObject.todos.push({
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    date: req.body.date,
  });

  fs.writeFileSync("./src/data/todos.json", JSON.stringify(todosObject));

  return rep.json({
    message: "task added",
  });
});

// TODO: add a body json in postman to finish the exercice
