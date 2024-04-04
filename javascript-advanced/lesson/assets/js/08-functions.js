/* --------------------------- FUNCTIONS --------------------------- */

/*
    ? Une fonction est bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus facile à gérer,
    elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier coller
*/

/*
    Les fonctions representent des actions que l'on souhaite effectuer
    Il faut les nommer de manière explicite pour savoir ce qu'elles font en commençant par un verbe
*/

// * Déclaration de fonction
function greeting() {
    console.log('Hello, ');
}

// * Appelle de la fonction (une fonction n'est executé que lorsqu'elle est appelé)
greeting();

// Déclaration de fonction avec paramètres
function greetingWithParameters(firstName, lastName) {
    console.log('Bonjour ' + firstName + ' ' + lastName);
}

// Appelle de la fonction avec paramètres (arguments)
greetingWithParameters('rachid', 'edjekouane');

/*
    ? Le scope d'une variable déclarée à l'intérieur d'une fonction est limité à cette fonction
    Cela signifie que la variable n'est pas accessible en dehors de la fonction d'où la nécessité de retourner une valeur
*/

// * Fonction anonyme (fonction sans nom) ou fonction expression
const multiplyNumbers = function (x, y) {
    return x * y;
};

const res = multiplyNumbers(12, 89);
console.log(res);

// * Fonction fléchée (arrow function)
// Les fonctions fléchées sont une syntaxe plus concise pour écrire des expressions de fonctions (ES6)
const divideNumbers = (x, y) => {
    return x / y;
};

const result = divideNumbers(23, 90);
console.log(result);

// Si la fonction ne contient qu'une seule instruction, on peut omettre les accolades et le mot clé return
const doubleValue = (x) => x * 2;
result = doubleValue(45);
console.log(result);

// Exercices

// Fonction qui vérifie si un nombre est pair ou impair
const userInput = prompt('Quel est votre nombre ?');

const checkEvenOdd = (x) => {
    if (x % 2 == 0) {
        console.log('le nombre est pair');
    } else {
        console.log('le nombre est impair');
    }
};

checkEvenOdd(userInput);

// FizzBuzz Challenge
let userNumber = prompt('Donnez-moi un nombre !');

const fizzBuzzCheck = (x) => {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log('FizzBuzz');
    } else if (x % 5 == 0) {
        console.log('Buzz');
    } else if (x % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
};

fizzBuzzCheck(userNumber);
