import express from "express";
import fs from "fs";

const server = express();

server.get("/api/posts", (req, res) => {
  console.log(req);
  res.end("Hello");
});

server.listen(3005, function () {
  console.log("Server on port 3005");
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
