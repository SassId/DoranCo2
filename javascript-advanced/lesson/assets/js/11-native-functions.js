/* --------------------------- NATIVE FUNCTIONS --------------------------- */

const message = 'je suis un bout de texte';

console.log(message.length);

// Transformer du texte en majuscule
console.log(message.toUpperCase());

// Attention la variable d'origine n'est pas modifié
const messageUppercase = message.toUpperCase();

// Transformer du texte en minuscule
console.log(messageUppercase.toLowerCase());

// Convertir une chaîne de caractères en un nombre entier.
const entier = parseInt('42', 10);
console.log(entier); // affiche 42 dans la console

// Convertir une chaîne de caractères en un nombre décimal.
const prix = parseFloat('3.99');
console.log(prix); // affiche 3.99 dans la console

// Convertir un nombre en chaîne de caractères
const number = 42;
console.log(number.toString()); // affiche '42' dans la console

// Exercice
// Demander à l'utilisateur de saisir son prénom
// Afficher le prénom en majuscule
// Afficher le prénom en minuscule
// Afficher la longueur du prénom
const userName = prompt('Quel est votre prénom ?');

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.length);
