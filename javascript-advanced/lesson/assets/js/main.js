/*
    --00-- COMMENTS
    --00-- CONSOLE
    --00-- USE STRICT
    --01-- DISPLAY
    --02-- VARIABLES
    --03-- CONCATENATION
    --04-- PRIMITIVE DATA TYPES
    --05-- ARITHMETIC OPERATORS
    --06-- CONDITIONAL STATEMENTS
    --07-- COMPARISON OPERATORS
    --08-- SWITCH
    --09-- LOOPS
    --10-- FUNCTIONS
    --11-- SCOPE
    --12-- ARRAYS
    --13-- ARRAY FUNCTIONS
    --14-- BUIT-IN FUNCTIONS
    --15-- OBJECTS
    --16-- CALLBACK
    --17-- ADVANCED FUNCTIONS
    --18-- DOM MANIPULATION
    --19-- EVENTS
    --20-- WINDOW
    --21-- DESTRUCTURING
    --22-- SPREAD OPERATOR
    --23-- ARRAY ES6
    --24-- AJAX
*/

// INSTALLER L'EXTENSION BETTER COMMENTS (VSCode)
// Cela permet de colorer les commentaires en fonction de leur type
// Commentaires normal
// ? Commentaire interrogation
// * Commentaire important
// ! Commentaire alerte
// TODO: A faire plus tard

/* --------------------------- 00 - COMMENTS --------------------------- */

// ? Un commentaire sur une ligne en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/* --------------------------- 00 - CONSOLE --------------------------- */

/*
    ? La console est un outil de débogage qui permet d'afficher des messages, des erreurs, des avertissements, des objets, des tableaux, etc.
*/

// Afficher un message
console.log("Hello World !");

// Afficher un message d'erreur
console.error("Une erreur est survenue !");

// Afficher un message d'avertissement
console.warn("Attention !");

// Afficher un message d'information
console.info("Information !");

// Afficher un objet sous forme de tableau
console.table({ name: "John", age: 30 });

// Afficher un tableau
console.table(["Apple", "Banana", "Cherry"]);

// Effacer la console
// console.clear();

/* --------------------------- 00 - USE STRICT --------------------------- */

/*
    Le mode strict de JavaScript est une version limitée et plus sécurisée de JavaScript.
    Il empêche également l'utilisation de certaines fonctionnalités dangereuses de JavaScript.
    Par exemple, le mode strict élimine les erreurs silencieuses souvent ignorées par les navigateurs.
    Exemple : l'utilisation de variables non déclarées, l'utilisation de mots réservés, etc.
*/

// Pour activer le mode strict, il suffit d'ajouter la ligne suivante au début de votre fichier JavaScript.
("use strict");

// Exemple d'erreur silencieuse, oubli de déclarer la variable
message = "Hello World !";
console.log(message);

// Exemple d'erreur silencieuse, utilisation de mots réservés
var let = "Hello World !";
console.log(let);

// Liste de mots réservés en JavaScript

// break       case        catch       class       const
// continue    debugger    default     delete      do
// else        enum        export      extends     false
// finally     for         function    if          implements
// import      in          instanceof  interface   let
// new         null        package     private     protected
// public      return      static      super       switch
// this        throw       true        try         typeof
// var         void        while       with        yield

/* --------------------------- 01 - DISPLAY --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
console.log("Hello World!");

// Afficher une boite de dialogue avec un champs à remplir
// prompt('Quel age avez-vous ?');

// On peut récupérer ce qui est tapé en affectant prompt() à une variable.
// let message = prompt('Que voulez-vous me dire ?')

// Afficher des informations dans un pop-up
// alert('Hello, World!')

// Inserer du code HTML dans ma page
document.write("<h1>Un h1 en JS</h1>");

/* --------------------------- 02 - VARIABLES --------------------------- */

/*
    ? Une variable est un espace mémoire nommé qui permet de stocker une valeur
    Une variable est un conteneur pour stocker des données
    Une variable est un nom qui fait référence à une valeur
*/

/*
    Convention de nommage des variables en JavaScript
    1. Les noms de variables doivent être descriptifs
    2. Les noms de variables doivent être en anglais
    3. Les noms de variables doivent être en camelCase
    4. Les noms de variables ne doivent pas commencer par un chiffre
    5. Les noms de variables ne doivent pas contenir d'espaces
    6. Les noms de variables ne doivent pas contenir de caractères spéciaux (sauf _ et $)
*/

/*
    * camelCase (JAVASCRIPT)
    kebab-case
    PascalCase
    snake_case
*/

// ? NB : les noms des variables sont sensibles à la casse
// On fait la différence entre les majuscules et les minuscules

// Déclaration d'une variable (création d'une variable)
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable (donne une valeur à une variable)
uneVariable = "Je suis une variable!";
console.log(uneVariable);

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules/minuscules)
let helloWorld = "Hello world!";

// Déclaration et affectation en même temps
let greetingMessage = "Hello, world";
console.log(greetingMessage);

// Réaffectation d'une valeur à une variable
greetingMessage = "Je suis un nouveau message";
console.log(greetingMessage);

// `const` (constante) est un mot clé pour déclarer une constante
// Une constante est une variable qui ne peut pas être modifiée (réaffectée), on dit qu'elle est immuable
// `const` va garantir que la valeur ne soit pas modifié tout au long de l'execution du script
const constante = "Je suis une constante, je ne peux pas être modifié!";

// Le mot clé var permet de déclarer des variables
// C'est une pratique désuète (c'était la seule façon avant 2015)
var past = "je suis dépassé";

/* --------------------------- 03 - CONCATENATION --------------------------- */

// ? Concaténation de chaine de caractère (assemblage de chaine de caractère)

const firstName = "Rachid";
const lastName = "EDJEKOUANE";
const job = `formateur Web`;

console.log(
  "Bonjour " + firstName + " " + lastName + ", je suis formateur" + job
);

console.log("bonjour, je m'appelle rachid et je suis " + job);

// * Les template literals sont des chaines de caractères délimitées par des backticks (accent grave)
// * Les template literals permettent d'insérer des expressions Javascript dans une chaine de caractères en utilisant ${}
console.log(`bonjour, je m'appelle rachid ${lastName} et je suis ${job}`);

/* --------------------------- 04 - PRIMITIVE DATA TYPES --------------------------- */

// String (Chaine de cactères)
let string2 = "Je suis du texte";

// Number (Tous les types d'ecritures numériques sont possibles : positif, negatif, decimal)
let nombre = 18; //number
let decimal = 20.3; //number
let negatif = -10; //number

// Boolean (Booléens)
// Variable de type booleen n'a que 2 valeurs possibles : TRUE ou FALSE
let booleen = true; //boolean
let booleen2 = false; //boolean

let nul = null; //null

let test; //undefined

// La methode `typeof()` renvoie le type de donnée de la variable
console.log(typeof string2);
console.log(typeof nombre);
console.log(typeof decimal);
console.log(typeof booleen);
console.log(typeof booleen2);
console.log(typeof nul);
console.log(typeof test);

/* --------------------------- 05 - ARITHMETIC OPERATORS --------------------------- */

// +, -, *, /, %, **

let operation = 10 + 5; //Addition
console.log(`le resultat est ${operation}`); //15

operation = 10 - 5; //Soustraction
console.log(`le resultat est ${operation}`); //5

operation = 10 * 5; //Multiplication
console.log(`le resultat est ${operation}`); //50

operation = 10 / 5; //Division
console.log(`le resultat est ${operation}`); //2

operation = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log(`le resultat est ${operation}`); //1

operation = 10 ** 3; //Puissance
console.log(`le resultat est ${operation}`); //100

let number = prompt("Donnez-moi un nombre ?");
let number2 = prompt("Donnez-moi un deuxieme nombre ?");
let result = number * number2;
console.log(`le resultat de la multiplication est ${result}`);

/* --------------------------- 06 - CONDITIONNAL STATEMENTS --------------------------- */
// Les opérateurs de comparaison (==, ===, !==, !=, >, >=, <, <=)

let condition = 17;

// Si la condition est vraie, le bloc d'instructions est exécuté
// Sinon il est ignoré
// Si (if)
if (condition == 18) {
  console.log("tout est ok");
}

// Si la condition est vraie, le premier bloc d'instructions est exécuté
// Sinon c'est le 2ième bloc qui est exécuté
// Si, Sinon (if, else)
if (condition == 17) {
  console.log("tout est ok");
} else {
  console.log("Houston, nous avons un problème");
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition == 17) {
  console.log("tout est ok");
} else if (condition == 19) {
  console.log("là ça va");
} else if (condition == 20) {
  console.log("là ça va encore");
} else {
  console.log("Houston, nous avons un problème");
}

/* --------------------------- 07 - COMPARISON OPERATORS --------------------------- */

// Les opérateurs de comparaison (==, ===, !=, !==, >, >=, <, <=)
// === verifie à la fois la valeur et le type des valeurs comparées (opérandes)

/*
    let variable = 3

    Egal(==) renvoie TRUE si les opérandes (les variables que l'on comparent) sont EGALES
        variable == 3 // true
        variable == '3' // true

    Strictement égal (===) renvoie TRUE si les opérandes sont EGALES et de MEME TYPE
        variable == 3 //true
        variable == '3' //false

    Le type booléen correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
*/

if (condition >= 18) {
  console.log("Tu es majeur, bravo");
} else {
  console.log("Houston, nous avons un problème");
}

// Les opérateurs logique OU (||) et ET (&&)
let permis = true;
if (condition >= 18 || (permis == true && test === "toto")) {
  console.log("Tu es majeur et tu as le permis");
} else {
  console.log("Houston, nous avons 2 problèmes");
}

/* --------------------------- 08 - SWITCH --------------------------- */

/*
    L'instruction switch évalue une expression et
    selon le résultat obtenu et le cas associé,
    exécute les instructions correspondantes.
 */

let expr = "banane";

switch (expr) {
  case "orange":
    console.log("c'est plein de vitamines C");
    break;
  case "pomme":
    console.log("c'est plein de peptides");
    break;
  case "banane":
    console.log("c'est plein de potassium");
    break;
  case "kiwi":
  case "papaye":
    console.log("c'est un fruit exotique");
    break;
  default:
    console.log("je ne connais pas ce fruit");
    break;
}
// Si je ne mets pas de break, le code continue à s'exécuter

/* --------------------------- 09 - LOOPS --------------------------- */

//Les boucles sont des structures permettant d'executer plusieurs fois  des instructions.

/*
    la principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance,
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique.
*/

// BOUCLE while(){...} (tant que)
let boucle = 5;

while (boucle <= 10) {
  console.log(boucle);
  boucle = boucle + 1;

  // SUCRE SYNTAXIQUE (version raccourci de boucle = boucle + 1)
  // boucle++;
  // boucle += 2;
}

// BOUCLE do{...}while() execute toujours une fois l'instruction avant de vérifier la condition
do {
  boucle++;
  console.log(boucle);
} while (boucle <= 10);

// Boucle for(){...} (pour
let combien = 9;

for (let i = 0; i < 10; i++) {
  let res = i * combien;
  console.log(
    `${res} la table de multiplication de ${combien} : ${combien} * ${i} = ${res}`
  );
}

/* --------------------------- 10 - FONCTIONS --------------------------- */

/*
    Une fonction en JavaScript est un bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus faciles à gérer,
    et elles vous permettent également de réutiliser le même code plusieurs fois sans avoir à le copier et le coller.
*/

// Déclaration de fonction
function afficherMessage() {
  console.log("Bonjour, tout le monde !");
}

// Une fonction n'est executée que lorsqu'elle est appelée
afficherMessage();

// Déclaration de fonction avec 2 parametres
function add(x, y) {
  return x + y;
}

let resultat = add(7, 3);
console.log(resultat);

// Il est également possible de stocker une fonction dans une variable et de l'appeler en utilisant cette variable
let multiplier = function (a, b) {
  return a * b;
};

let res = multiplier(2, 3);
console.log(res);

/* --------------------------- 11 - PORTEE DES VARIABLES --------------------------- */

// La portée (scope) d'un objet est la portion de code dans laquelle une variable est accessible.

/*
    PORTEE GLOBAL
    Une variable déclarée en dehors de toute fonction ou bloc de code a une portée globale.
    Cela signifie qu'elle peut être utilisée et modifiée dans n'importe quelle partie de votre code,
    y compris à l'intérieur de fonctions ou de blocs de code.
*/
const globale = "je suis une variable globale";

/*
    PORTEE LOCALE
    La portée d'une variable déclarée à l'intérieur d'une fonction est limitée à cette fonction.
    Cela signifie que la variable ne sera pas accessible en dehors de cette fonction.
*/
function scope() {
  let x = 10;
  console.log(x); // affiche 10
}
// console.log(x);
// génère une erreur : x n'est pas défini dans le scope global

/*
    PORTEE DE BLOCK
    La portée d'une variable déclarée à l'intérieur d'un bloc est limitée à ce bloc.
    Cela signifie que la variable ne sera pas accessible en dehors de ce bloc.
*/
if (true) {
  let x = 10;
  console.log(x); // affiche 10
}
// console.log(x);
// génère une erreur : x n'est pas défini dans le scope global

/* --------------------------- 12 - TABLEAUX --------------------------- */

/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets [] et en y insérant les éléments séparés par des virgules.
*/

let week = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

console.log(week);

// On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(week[0]);

// De même pour modifier la valeur d'un tableau, je précise l'indice
week[1] = "on m'a modifie";
console.log(week);

// Pour connaitre la longueur d'un tableau nous pouvons utiliser la propriété .length
console.log(week.length);

// declarer un tableau de mangue, fruit de la passion, kiwi, litchi
let fruitsExotiques = ["mangue", "fruit de la passion", "kiwi", "litchi"];

// Pour itérer sur les valeurs d'un tableau nous pouvons utiliser la boucle for
for (let i = 0; i < fruitsExotiques.length; i++) {
  console.log(fruitsExotiques[i]);
}

// Rendre parametrable une fonction acceptant un tableau en parametre et affichant chaque case du tableau
function displayArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
displayArray(fruitsExotiques);

// Les tableaux peuvent contenir des tableaux
// Ils peuvent être multidimensionnels
let notes = [
  [12, 19, 10],
  [9, 6, 5],
  [19, 100, 19],
];
// Pour acceder à un valeur bien penser à cibler l'index dans l'index
console.log(notes[0][1]);

/* --------------------------- 13 - ARRAY FUNCTIONS --------------------------- */

// ? Attention la plupart des methodes modifient le tableau de départ

let fruits = ["banane", "fraise", "pomme", "kiwi"];

// Ajouter un ou plusieurs éléments à la fin du tableau
// Renvoie la nouvelle longueur du tableau
fruits.push("orange", "cerise");
// Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé.
fruits.pop();

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
fruits.unshift("abricot");
// Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
fruits.shift();

// Renvoie une copie d'une partie du tableau
let newFruits = fruits.slice(1, 3);
console.log(newFruits);

// Modifier ou Ajouter  ou Supprimer un element dans le tableau
// Renvoie les éléments supprimés
// Ajouter
fruits.splice(1, 0, "Mangue");
//Modifier
fruits.splice(2, 1, "Melon");
// Supprimer
fruits.splice(2, 1);

// Réorganise le tableau de la fin vers le début
fruits.reverse();
console.log(fruits);

// Renvoie une copie du tableau sous forme string chainé par le caractère choisi
console.log(fruits.join(""));

// divise une chaîne de caractères dans un tableau et retourne le tableau.
let id = "rachid-edjekouane";
let array = id.split("-");
console.log(array);

// On peut concaténer deux tableaux (retourne un nouveau tableaux)
let vegetables = ["patate douce", "carotte", "celeri"];
const food = fruits.concat(vegetables);
console.log(`2 tableaux concaténés : ${food}`);

/* --------------------------- 14 - BUIT-IN FUNCTIONS --------------------------- */

const message = "je suis un bout de texte";

console.log(message.length);

// Transformer du texte en majuscule
console.log(message.toUpperCase());

// Attention la variable d'origine n'est pas modifié
const messageUppercase = message.toUpperCase();

// Transformer du texte en minuscule
console.log(messageUppercase.toLowerCase());

// Convertir une chaîne de caractères en un nombre entier.
const entier = parseInt("42", 10);
console.log(entier); // affiche 42 dans la console

// Convertir une chaîne de caractères en un nombre décimal.
const prix = parseFloat("3.99");
console.log(prix); // affiche 3.99 dans la console

/* --------------------------- 15 - OBJECTS --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
  firstName: "rachid",
  lastName: "edjekouane",
  notes: [10, 12, 19, 20],
  getFirstName: function () {
    return this.firstName;
  },
  job: {
    name: "Informaticien",
    hour: 35,
  },
  brother: {
    firstName: "malik",
    lastName: "edjekouane",
  },
};

// Pour acceder à la une propriété d'un objet
person.job.name = "developpeur";

let hello = `Bonjour je m'appelle ${person.firstName} j'ai eu ${person.notes[2]} à mon dernier devoir,
mon plus jeune frère s'appelle ${person.brother.firstName}`;
console.log(hello);

// Ajoute la propriete adress à l'objet OU modifie sa valeur si elle existe déjà
person.adress = "2 rue guy de maupassant";
person.sport = "climbing";

person.notes.push(123);
console.log(person.notes);

// Autre façon d'afficher la propriété d'un objet
let key = "firstName";
console.log(person[key]);

const sangoku = {
  firstName: "san",
  lastName: "goku",
  children: ["gohan", "goten"],
  age: 39,
  presentation: function () {
    return `Bonjour je m'appelle ${this.firstName} ${this.lastName} et jai ${this.children.length} enfants `;
  },
};

hello = `${sangoku.presentation()} Ils s'appellent ${sangoku.children[0].toUpperCase()} et ${sangoku.children[1].toUpperCase()}`;
console.log(message);

for (let key in sangoku) {
  console.log(`${key} : ${sangoku[key]}`);
}

/* --------------------------- 16 - CALLBACK --------------------------- */

/*
    Un callback (fonction de rappel) est une fonction qui est passée en tant qu'argument à une autre fonction.
*/

function mathematique(x, y, callback) {
  return callback(x, y);
}

function add(x, y) {
  return x + y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

console.log(mathematique(12, 13, add));
console.log(mathematique(12, 13, multiply));

// Nous pouvons donc passer en argument une fonction anonyme
const calcul = mathematique(12, 13, function (a, b) {
  return a * b * (a + b);
});

console.log(calcul);

mathematique(12, 13, multiply);

/* --------------------------- 17 - ADVANCED FUNCTIONS --------------------------- */

/*
    Array
*/
const animals = ["tigre", "loup", "chouette", "ours"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[1]);
}

// `forEach()` est une méthode JavaScript qui permet d'itérer sur les éléments d'un tableau
// et d'exécuter une fonction donnée pour chaque élément.
animals.forEach((animal) => console.log(animal));

//  `for(...of...)` permet de parcourir les éléments d'un objet itérable (ex: tableau, string)
for (let animal of animals) {
  console.log(animal);
}

/*
    Object
*/
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// `for(...in...)` permet de parcourir les propriétés énumérables d'un objet
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}

// Recreer la fonction forEach() avec une boucle for
let pets = ["chien", "chat", "poisson", "oiseau"];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

forEach(pets, function (animal) {
  console.log(animal);
});

/* --------------------------- 18 - DOM MANIPULATION --------------------------- */

/*  -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

//  ? La methode getElementById()
const elementById = document.getElementById("element-by-id");
elementById.style.color = "red";

/*
    ? La methode getElementsByTagName()
    getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const elementByTagName = document.getElementsByTagName("p");
for (let i = 0; i < elementByTagName.length; i++) {
  elementByTagName[i].style.color = "blue";
}

/*
    ? La methode getElementsByClassName()
    getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const elementByClassName = document.getElementsByClassName("element-by-class");

for (let i = 0; i < elementByClassName.length; i++) {
  elementByClassName[i].style.color = "orange";
}

//  ? La methode querySelector
const element = document.querySelector("p");
element.style.color = "green";

/*
    ? La methode querySelectorAll
    querySelectorAll renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle for() ou la méthode forEach()
*/
const elementWithQuerySelectorAll =
  document.querySelectorAll(".element-by-class");

// Boucle for()
for (let i = 0; i < elementWithQuerySelectorAll.length; i++) {
  elementWithQuerySelectorAll[i].style.color = "khaki";
}

// Boucle forEach()
elementWithQuerySelectorAll.forEach((toto) => (toto.style.fontWeight = "bold"));

/*  ---------------------------------------------
    Quelques proprietes liées aux éléments du DOM
    ---------------------------------------------
*/

const subTitle = document.querySelector("#subtitle");

// La propriété `style` permet de modifier le style
subTitle.style.color = "pink";

// La propriété `textContent`  permet de récupérer ou de définir le contenu textuel d'un élément HTML.
subTitle.textContent = "Je suis un titre modifié en javascript";

// La propriété `innerText` permet de récupérer ou de définir le contenu textuel d'un élément HTML.
subTitle.innerText = "Je suis un titre modifié en javascript";

// La propriété `innerHTML` permet de récupérer ou de définir le contenu HTML d'un élément HTML.
subTitle.innerHTML = "Je suis un <em>titre</strong> modifié en javascript";

// La propriété `classList` permet de récupérer la liste des classes d'un élément HTML.
console.log(subTitle.classList);

// La méthode `contains()` permet de vérifier si un élément HTML possède une classe donnée.
console.log(subTitle.classList.contains("active"));

// La méthode `remove()` permet de supprimer une classe d'un élément HTML.
subTitle.classList.remove("active");

// La méthode `add()` permet d'ajouter une classe à un élément HTML.
subTitle.classList.add("active");

// La méthode `toggle()` permet d'ajouter une classe à un élément HTML si elle n'existe pas, sinon elle la supprime.
subTitle.classList.toggle("active");

// La méthode `setAttribute()` permet de définir la valeur d'un attribut HTML.
subTitle.setAttribute("title", "Je suis un titre");

// La méthode `getAttribute()` permet de récupérer la valeur d'un attribut HTML.
console.log(subTitle.getAttribute("title"));

// La méthode `removeAttribute()` permet de supprimer un attribut HTML.
subTitle.removeAttribute("title");

// La propriété `src` permet de récupérer ou de définir la valeur de l'attribut `src` d'une balise `img`.
const image = document.querySelector("img");
image.src = "https://picsum.photos/200/300";

// La propriété `href` permet de récupérer ou de définir la valeur de l'attribut `href` d'une balise `a`.
const link = document.querySelector("a");
link.href = "https://www.google.com";

// La propriété `value` permet de récupérer ou de définir la valeur d'un élément HTML.
const input = document.querySelector("input");
input.value = "Je suis un input modifié en javascript";

/* --------------------------- 19 - EVENTS --------------------------- */

/*  ---------------------------------------------
    Evénements en JavaScript
    ---------------------------------------------
    La méthode addEventListener() permet de définir un écouteur d'événement sur un élément HTML.
    Cet écouteur est appelé chaque fois que l'événement spécifié se produit sur l'élément.
    ---------------------------------------------
    La methode addEventListener() prend 2 paramètres:
    1. Le nom de l'événement (click, mouseover, mouseout, keyup, keydown, keypress, submit, change, ...)
    2. Une fonction callback qui sera appelée à chaque fois que l'événement se produit
*/

subTitle.addEventListener("click", function () {
  if (subTitle.style.color == "pink") {
    subTitle.style.color = "red";
  } else {
    subTitle.style.color = "pink";
  }
});

subTitle.addEventListener("click", function () {
  subTitle.classList.toggle("active");
});

/* --------------------------- 20 - WINDOW --------------------------- */

/*
    Le DOM (Document Object Model) en JavaScript
    est une représentation en mémoire d'un document HTML chargé dans un navigateur.
    Le DOM représente chaque élément du document comme un objet JavaScript
    qui peut être manipulé et modifié à travers le code JavaScript.
*/

/*
    L'objet window en JavaScript est un objet global qui représente la fenêtre du navigateur.
    Cet objet est créé automatiquement lorsque la page Web est chargée
*/

console.log(window);

/*
    L'objet window possède plus de 150 propriétés et méthodes
    L'objet window est un objet important en JavaScript
    car il fournit une interface entre le code JavaScript et la fenêtre du navigateur.
*/

// La propriété `window.document` permet d'accéder à l'objet document
console.log(window.document);

// La propriété `window.location` permet d'accéder à l'objet location
console.log(window.location);

// La propriété `window.navigator` permet d'accéder à l'objet navigator
console.log(window.navigator);

// La propriété `window.history` permet d'accéder à l'objet history
console.log(window.history);

// La propriété `window.screen` permet d'accéder à l'objet screen
console.log(window.screen);

// La propriété `window.localStorage` permet d'accéder à l'objet localStorage
console.log(window.localStorage);

// La propriété `window.sessionStorage` permet d'accéder à l'objet sessionStorage
console.log(window.sessionStorage);

// La propriété `window.console` permet d'accéder à l'objet console
console.log(window.console);

// La propriété `window.alert()` permet d'afficher une boite de dialogue
window.alert("Hello World !");

// La propriété `window.confirm()` permet d'afficher une boite de dialogue
// avec deux boutons : OK et Annuler
// const confirm = window.confirm('Voulez-vous vraiment supprimer cet élément ?');
// console.log(confirm);

// La propriété `window.prompt()` permet d'afficher une boite de dialogue
// avec un champ de saisie
// const prompt = window.prompt('Quel est votre nom ?');
// console.log(prompt);

// La propriété `window.open()` permet d'ouvrir une nouvelle fenêtre
// const newWindow = window.open('https://www.google.com', '_blank');
// console.log(newWindow);

// La propriété `window.close()` permet de fermer une fenêtre
// newWindow.close();

// La propriété `window.print()` permet d'imprimer la page courante
// window.print();

// La propriété `window.scrollTo()` permet de faire défiler la page jusqu'à un élément
// window.scrollTo(0, 1000);

// La propriété `window.scrollBy()` permet de faire défiler la page
// window.scrollBy(0, 100);

// La propriété `window.scroll()` permet de faire défiler la page
// window.scroll(0, 100);

// La propriété `window.scrollX` permet de récupérer la position horizontale du scroll
console.log(window.scrollX);

// La propriété `window.scrollY` permet de récupérer la position verticale du scroll
console.log(window.scrollY);

// La propriété `window.innerHeight` permet de récupérer la hauteur de la fenêtre
console.log(window.innerHeight);

// La propriété `window.innerWidth` permet de récupérer la largeur de la fenêtre
console.log(window.innerWidth);

// La propriété `window.outerHeight` permet de récupérer la hauteur de la fenêtre
console.log(window.outerHeight);

// La propriété `window.outerWidth` permet de récupérer la largeur de la fenêtre
console.log(window.outerWidth);

// La propriété `window.screenX` permet de récupérer la position horizontale de la fenêtre
console.log(window.screenX);

// La propriété `window.screenY` permet de récupérer la position verticale de la fenêtre
console.log(window.screenY);

// La propriété `window.screenLeft` permet de récupérer la position horizontale de la fenêtre
console.log(window.screenLeft);

// La propriété `window.screenTop` permet de récupérer la position verticale de la fenêtre
console.log(window.screenTop);

// La propriété `window.screen.availHeight` permet de récupérer la hauteur de l'écran
console.log(window.screen.availHeight);

// La propriété `window.screen.availWidth` permet de récupérer la largeur de l'écran
console.log(window.screen.availWidth);

// La propriété `window.screen.height` permet de récupérer la hauteur de l'écran
console.log(window.screen.height);

// La propriété `window.screen.width` permet de récupérer la largeur de l'écran
console.log(window.screen.width);

// La propriété `window.screen.pixelDepth` permet de récupérer la profondeur de couleur de l'écran

// La propriété `window.screen.colorDepth` permet de récupérer la profondeur de couleur de l'écran
console.log(window.screen.colorDepth);

/* --------------------------- 21 - DESTRUCTURING --------------------------- */

/*
    La destructuration est une fonctionnalité ES6 qui permet de décomposer des objets ou des tableaux en des variables distinctes.
    La destructuration est utile pour extraire des valeurs d'objets ou de tableaux et les stocker dans des variables distinctes.
*/

const pokemons = ["pikachu", "bulbizarre", "salamèche", "carapuce"];

// Destructuration d'un tableau
const [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5] = pokemons;
console.log(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5);

const pokemon = {
  name: "pikachu",
  type: "electric",
  level: 25,
  trainer: {
    name: "Sacha",
    city: "paris",
  },
};

// Destructuration d'un objet
const {
  name,
  type,
  level,
  trainer: { name: trainerName },
} = pokemon;

console.log(name, type, level, trainerName);

// Destructuration d'un tableau dans une fonction
function displayFruits([fruit1, fruit2, fruit3, fruit4, fruit5]) {
  console.log(fruit1, fruit2, fruit3, fruit4, fruit5);
}

displayFruits(fruits);

// Destructuration d'un objet dans une fonction
function displayPokemon({ name, type, level, trainer }) {
  console.log(name, type, level, trainer);
}

displayPokemon(pokemon);

/* --------------------------- 22 - SPREAD OPERATOR --------------------------- */

/*
    Le spread operator est un opérateur de décomposition qui permet de décomposer un objet ou un tableau en plusieurs éléments
    Il est utilisé pour étendre un objet ou un tableau en plusieurs éléments
*/
// Array
const streetFighters = ["ryu", "ken", "chun-li", "guile", "blanka"];

console.log(streetFighters);
console.log(...streetFighters);

// Object
const ryu = {
  name: "ryu",
  type: "fighter",
  level: 25,
};

console.log(ryu);
console.log({ ...ryu });

// * Exemple d'utilisation du spread operator
const mortalKombat = ["scorpion", "sub-zero", "liu-kang", "kitana", "jax"];

const fighters = [...streetFighters, ...mortalKombat];

console.log(allFruits);

/* --------------------------- 23 - ARRAY ES6 --------------------------- */

// ?Les fonctions sur les tableaux modernes sont des fonctions qui prennent en paramètre une fonction de rappel (callback).
// La plupart retournent un nouveau tableau sans modifier l'original.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// * forEach() est une méthode JavaScript qui permet d'itérer sur les éléments d'un tableau
// Ne retourne pas de nouveau tableau et permet d'exécuter une fonction donnée pour chaque élément.
numbers.forEach((number) => number * 2);
console.log(numbers);

// * map() est une méthode JavaScript qui permet de créer un nouveau tableau à partir d'un tableau existant.
const newArray = numbers.map((number) => number * 2);
console.log(newArray);

// * filter() est une méthode JavaScript qui permet de créer un nouveau tableau à partir d'un tableau existant
// en ne gardant que les éléments qui satisfont une condition donnée.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// * find() est une méthode JavaScript qui permet de renvoyer la première valeur d'un tableau qui satisfait une condition donnée.
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber);

// * reduce() est une méthode JavaScript qui permet de réduire un tableau à une seule valeur.
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// * some() est une méthode JavaScript qui permet de tester si au moins un élément d'un tableau satisfait une condition donnée.
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);

// * every() est une méthode JavaScript qui permet de tester si tous les éléments d'un tableau satisfont une condition donnée.
const allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers);

// * sort() est une méthode JavaScript qui permet de trier les éléments d'un tableau.
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

/* --------------------------- 24 - AJAX --------------------------- */

/*
    AJAX (Asynchronous Javascript and XML) est une technique de développement web qui permet de récupérer des données depuis un serveur sans avoir à recharger la page.
*/

/*
    JSON (Javascript Objet Notation) est un format de données textuelles qui est facile à lire et à écrire pour les humains.
*/

// setTimeout est une focntion asynchrone, elle ne bloque pas le déroulement du scripte en attendant de se déclencher.
setTimeout(function () {
  console.log("coucou");
}, 3000);

console.log("salut");

// 1. Créer une AJAX avec XMLHttpRequest (seule cette methode fonctionne sur IE)
// On créer objet de type XMLHttpRequest()
const xhr = new XMLHttpRequest();

xhr.open("get", "./js/data.json");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);
  } else if (xhr.status >= 400 && xhr.status < 600) {
    console.log("Vous avez une erreur");
  }
};

xhr.send();

// 2. Créer une requête AJAX avec fetch
fetch("/js/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`une erreur s'est produite: ${error}`);
  });

// Creer une requete fetch avec le lien fourni

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    for (let user of users) {
      const {
        username,
        address: { street, city, zipcode },
      } = user;

      console.log(`${username}  habite au ${street} ${city} ${zipcode}`);
    }
  })
  .catch((error) => {
    console.log(`une erreur s'est produite: ${error}`);
  });

/* --------------------------- AJAX POST --------------------------- */

// 1. Créer une requête AJAX POST avec XMLHttpRequest
const newPost = {
  title: "Mon nouvel article",
  body: "Un article qui parle de blablabla",
  userId: 2,
};

const xhrPost = new XMLHttpRequest();

xhrPost.open("post", "https://jsonplaceholder.typicode.com/posts");

// On doit lorsque l'on envoie des donnéees sur le serveur préciser le type de données dans l'entête de la requête.
xhrPost.setRequestHeader("Content-Type", "application/json");

xhrPost.onload = function () {
  if (xhrPost.status >= 200 && xhrPost.status < 300) {
    const data = JSON.parse(xhrPost.response);
    console.log(data);
  } else if (xhrPost.status >= 400 && xhrPost.status < 600) {
    console.log("Vous avez une erreur");
  }
};

// On doit transformer notre objet en JSON avant de l'envoyer au serveur
xhrPost.send(JSON.stringify(newPost));

// 2. Créer une requête AJAX POST avec fetch()
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
