/* --------------------------- LOOPS --------------------------- */

// ? Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/*
    la principale difference entre `for` et `while` :
    `for` est généralement utilisé lorsque le nombre d'itérations est connu à l'avance
    `while` est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/

/*
    Une boucle est composée de 3 parties :
    - Initialisation
    - Condition
    - Incrementation
*/

// Boucle : for(){...}
for (let i = 10; i <= 20; i = i + 2) {
    console.log(i);
}

// Boucle : while(){...}
let i = 10;

while (i <= 20) {
    console.log(i);
    i = i + 2;
}

// demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit
let userGuess = prompt('Donnez moi un nombre');
const magicNumber = 99;

while (userGuess != magicNumber) {
    if (userGuess < magicNumber) {
        userGuess = prompt('donne moi un autre nombre plus grand');
    } else {
        userGuess = prompt('donne moi un autre nombre plus petit');
    }
}

console.log('Bravo, le nombre était bien : ' + magicNumber);

// Boucle : do...while(){...}
let response;

do {
    response = prompt('Donne moi un nombre');
    if (response > magicNumber) {
        console.log('Votre nombre est trop grand');
    } else {
        console.log('Votre est trop petit');
    }
} while (response != magicNumber);

console.log('Bravo');

// Écrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la réponse n'est pas entre 1 et 10, afficher que le message devait être compris entre 1 et 10
// Le programme doit ensuite dessiner un sapin de Noël composé d'étoiles (*)
// *
// **
// ***
// ****
// *****
