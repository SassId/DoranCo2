// Exercice:
// Creer un fichier person.js avec une fonction displayPerson qui prend en paramètre un objet avec un nom et un prenom
// Afficher les noms et prénoms dans la console
// Utiliser la fonction dans node.js

export function displayPerson(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// module.exports = {
//     displayPerson: displayPerson,
// };

// or
// the function takes an object as a parameter
export function affichePersonne(personne) {
  console.log(personne.prenom + " " + personne.nom);
}

// module.exports = {
//     affiche: affichePersonne,
// };

// ! When you use the "type":"module" in the json file, you cannot use the module.export method anymore
// ! You now need to use the regular "import... from" as in regular js and react
