// * ESM Modules

import fs from "fs";
import readline from "readline";

console.log("hello world");

// * imports the function created in the math file as an objet
// const {add} = require('./math')

// ? or when you add the "type":"module" in the json (using npm init command)
import { add } from "./math.js";
import { displayPerson, affichePersonne } from "./person.js";

console.log(add(5, 3));

// const {displayPerson} = require('./person')

console.log(displayPerson("john", "doe"));

// const {affiche} = require('./person')

affichePersonne({ prenom: "roo", nom: "rogers" });

// * Read the content of a file:

fs.readFile("./user.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});

// * Create a CLI Script

const inter = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// inter.question("what's your name?", (name) => {
//   console.log(name);
 
// });

// Exercice
// Utiliser readline pour demander a l'utilisateur d'entrer un nom.
// Créer un fichier avec le nom donné

// ! The writeFile method requires at least 2 parameters:
    // ! - the relative path of the file as a string
    // ! - the content of the file as a string

inter.question("what is the name of the file?", (name)=> {
    fs.writeFile("./" + name, 'yo',(err)=> { //concatenate to have the path and the user's input
        if (err) {
            console.log('failed to create file')
        } else {
            console.log('file succesfully created')
        }
    })
    inter.close()
})
