/* ------------------------------------------------------------
                        LES COMMENTAIRES
    ------------------------------------------------------------ */

/*
    Un commentaire est un texte qui ne sera pas exécuté par le navigateur
    Il permet de documenter le code, de le rendre plus lisible
    Il permet de désactiver une partie du code pour faire des tests
*/

// Un commentaire sur une ligne en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/*  ------------------------------------------------------------
                            L'AFFICHAGE
    ------------------------------------------------------------ */

// Afficher un message dans la console de debbugage du navigateur
// On utilise la fonction console.log()
console.log('Hello, world!');

// Afficher une boite de dialogue avec champs à remplir
// On utilise la fonction prompt()
// prompt('Quel est votre age?');

// On doit récupérer dans une variable la valeur du prompt

// let response = prompt('Quel est votre age???');
// console.log(response);

/*  ------------------------------------------------------------
                            LES VARIABLES
    ------------------------------------------------------------ */

/*
    Les variables ne peuvent pas commencer par un chiffre
    Les variables ne peuvent pas contenir de caractères spéciaux (-, +, *, /, %, $, @, &, ...)
    Les variables ne peuvent pas contenir d'espaces
*/

// Déclaration d'une variable
let uneVariable;

// Affectation d'une valeur à une variable
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules =/= minuscules )
let messageBonjour = 'Hello, World!';
let MESSAGEBONJOUR;

// On peut affecter le contenu d'une variable à une autre variable
messageBonjour = uneVariable;

// Affichage d'une variable dans la console
console.log(messageBonjour);

// On peut changer la valeur d'une variable
uneVariable = 'Je suis une nouvelle variable!';

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
let a = 10;
let b = 99;

let temp = a;
a = b;
b = temp;
console.log(a, b);

/*  ------------------------------------------------------------
                        LES TYPES DE VARIABLE
    ------------------------------------------------------------ */

// Les types les plus courants sont :

// string (chaine de caractère)
let messages = 'une chaine de caractère';

// number (nombre)
let nombre = 20;
let nombreDecimal = 20.5;

// boolean (booléen)
let isTrue = true;
let isFalse = false;

// Déclarer une chaine de caractère, un nombre, booléen, null, undefined
let varchar = 'salut tout le monde';
let number = 2;
let decimal = 20.3;
let booleen = true;
let nul = null;
let indefini;

console.log(typeof varchar);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof booleen);
console.log(typeof nul);
console.log(typeof indefini);

// Les opérations arithmétiques (+, -, *, /)
let sum;
let number1 = 10;
let number2 = 20;
sum = number1 * number2;
console.log(sum);

/*  ------------------------------------------------------------
                        LA CONCATENATION
    ------------------------------------------------------------ */

/*
    Pour déclarer une chaine de caractère on peux utiliser ('', "", ``)
    Cela a un impact sur la façon de concatener les variables et les chaines de caractères
*/

let lastName = 'EDJEKOUANE';
let firstName = 'Rachid';
let city = 'PARIS';

// Déclarer une variable city, afficher le message "j'adore vivre à <city>"
console.log("j'adore vivre à " + city);
console.log("j'adore vivre à " + city);

// Concatenation avec l'opérateur +
console.log(
    "j'adore vivre à " + city + " et je m'appelle " + firstName + ' ' + lastName
);

// Concatenation avec l'opérateur ${}
console.log(`j'adore vivre à ${city}`);

// Modifier le message pour afficher j'adore vivre à <city> et je m'appelle <firstName> <lastName>
console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`);

/*  ------------------------------------------------------------
                    LES INSTRUCTIONS CONDITIONNELLES
    ------------------------------------------------------------ */

// Les instructions conditionnelles permettent d'exécuter des blocs de code en fonction de conditions

// if (condition) { ... } : si la condition est vraie le bloc d'instruction est exécuté
// else if (condition) { ... } : sinon si la condition est vraie le bloc d'instruction est exécuté
// else { ... } : sinon le bloc d'instruction est exécuté

// Demander à l'utilisateur s'il accepte les CGV
// let acceptCgv = prompt('Acceptez-vous les CGV?');
let acceptCgv = 'oui';

// Si, Sinon (if, else)
if (acceptCgv == 'ok') {
    console.log('Vous avez acceptez les conditions!');
} else {
    console.log("Vous n'avez pas acceptez les conditions!");
}

/*
    Si la condition est vraie le premier bloc d'instruction est exécuté
    Sinon il test la deuxième condition
    Sinon aucune condition n'est vraie il exécute le bloc final (else)
*/
if (acceptCgv == 'yes') {
    console.log('Vous etes redirigé vers le site en anglais');
} else if (acceptCgv == 'oui') {
    console.log('Vous etes redirigé vers le site en français');
} else if (acceptCgv == 'da') {
    console.log('Vous etes redirigé vers le site en russe');
} else {
    console.log('Vous ne pouvez acceder au site');
}

console.log('la suite...');

/*  ------------------------------------------------------------
                    LES OPERATEURS DE COMPARAISON
    ------------------------------------------------------------ */

/*
    Les opérateurs de comparaison permettent de comparer deux valeurs
    Ils renvoient un résultat booléen (true, false)
*/

let x = 10;
let y = 10;
console.log(x == y);

/*
    (> ou >=) supérieur ou supérieur ou égal à
    (< ou <=) inférieur ou inférieur ou égal à
    (!=) différent de
    (===) strictement égal à
    (!==) strictement différent de
*/

/*  ------------------------------------------------------------
                        LES OPERATEURS LOGIQUES
    ------------------------------------------------------------ */

// Les opérateurs logiques permettent de combiner plusieurs conditions

// ET (&&) : les deux conditions doivent être vraies
// OU (||) : au moins une des conditions doit être vraie

let condition = true;

if (condition == true) {
    console.log('droit de conduire');
}

// let age = prompt('Quel est ton age?');
let userAge = 19;

if (userAge < '13') {
    console.log('Action Man');
} else if (userAge >= '13' || userAge <= 18) {
    console.log('Matrix');
} else if (userAge > 18) {
    console.log('Evil Dead');
}

// let age = prompt('Quel est ton age?');
// let nationalite = prompt('Quelle est votre nationalité');

let userAge2 = 19;
let nationality = 'français';

if (
    (nationality == 'français' && userAge2 >= 18) ||
    (nationality != 'français' && userAge2 < 18)
) {
    console.log('Vous avez le droit à une assistance juridique');
}

// let nationality2 = prompt('Quelle est votre nationalité?');
let nationality2 = 'anglais';
console.log(nationality2);

if (nationality2 == 'français') {
    let age = prompt('Quel est votre age?');
    if (age >= 18) {
        console.log('Vous avez droit aux APL');
    } else {
        console.log("Vous n'avez aucun droit!");
    }
} else {
    console.log("Vous n'avez aucun droit");
}

/*  ------------------------------------------------------------
                        LES BOUCLES (LOOPS)
    ------------------------------------------------------------ */

/*
    Les boucles sont des structures permettant d'executer plusieurs fois des instructions

    La principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/

// Boucle à itération non definies while(){...} : tant que la condition est vraie
let i = 0;
while (i < 10) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`);
    i = i + 1; // Incrementer i pour éviter une boucle infinie
}

/*
    Déclarer vos revenus (20 000 euros)
    Tant que vos revenus ne sont pas supérieur à 30 000 euros
    Chaque année mes revenus augmente de 10% grace à mes placement
    Au bout de combien d'années mes revenus dépasseront 30 000 euros ?
*/
let revenu = 20000;
let year = 0;

while (revenu < 30000) {
    revenu = revenu + revenu * 0.1;
    year = year + 1;
}
console.log(`il faudra ${year} années, mon revenu sera de ${revenu} `);

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/
let marrakech = 1000000;
let agadir = 500000;
let year1 = 0;

while (agadir < marrakech) {
    agadir *= 1.08;
    marrakech += 50000;
    year = year + 1;

    // Sucre syntaxique pour incrementer une variable
    /*
    Le sucre syntaxique est un concept en programmation informatique
    qui fait référence à des fonctionnalités ou des constructions de langage
    qui permettent d'écrire du code de manière plus concise ou plus expressive,
    sans ajouter de nouvelles fonctionnalités à proprement parler.
    */
    // year1 += 1
    // year++;
}
console.log(`il faudra ${year1} années avant que...`);

// Boucle à itération definies (for)
for (let i = 0; i < 10; i++) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`);
}

/*
    Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur
*/
let magic = 135;
let res = prompt('Donne moi ta réponse');

while (res != magic) {
    if (res < magic) {
        res = prompt('trop petit');
    } else {
        res = prompt('trop grand');
    }
}
console.log('bravo');

/*  ------------------------------------------------------------
                            LES FONCTIONS
    ------------------------------------------------------------ */

/*
    Une fonction est un bloc d'instructions réutilisable
    Elle peut prendre des paramètres et renvoyer un résultat
    Elle est déclarée avec le mot clé function
*/

// Déclaration d'une fonction
function helloWorld() {
    console.log('Hello, world!');
}

// Appel de la fonction
helloWorld();

/*
    Une fonction renvoie un résultat avec le mot clé return
    Les autres variables déclarées dans la fonction sont locales à la fonction
    Les instructions après le return ne sont pas exécutées
*/
function calculNasa() {
    let res = 65765765;
    let essence = 8977897;
    let anneeLumiere = 798786786;
    let solution = ((res * essence) / anneeLumiere) * 675765675;

    return solution;
}
let resultat = calculNasa();
console.log(resultat);

/*
    Une fonction peut prendre des paramètres
    Les paramètres sont des variables locales à la fonction
    Ils permettent de passer des valeurs à la fonction
*/
function tableMultiplication(x, y) {
    for (let i = 0; i < y; i++) {
        let res = i * x;
        console.log(`${i} x ${x} = ${res}`);
    }
}

tableMultiplication(12, 8);
tableMultiplication(2, 20);

// Ecrire une fonction qui affiche Bonjour
function hello() {
    console.log('Bonjour');
}

hello();

// Ecrire une fonction qui retourne Bonjour + le nom de la personne
function helloYou(name) {
    return 'Bonjour ' + name;
}
let hello3 = helloYou('Rachid');
console.log(hello3);

// Ecrire une fonction qui retourne l'aire d'un carré
function perimeter(x) {
    let resultat = x * 4;
    return resultat;
}

let squarePerimeter = perimeter(67);
console.log(squarePerimeter);

let squarePerimeter2 = perimeter(6786787);
console.log(squarePerimeter2);

// Ecrire une fonction qui retourne la puissance de 2 d'un nombre
function powerTwo(x) {
    return x ** 2;
}
res = powerTwo(23);
console.log(res);

// Ecrire une boucle qui affiche les nombres pairs de 0 à 100
for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}

// Transformer la boucle en fonction
function loop() {
    for (let i = 0; i <= 100; i = i + 2) {
        console.log(i);
    }
}
loop();

// Transformer la boucle en fonction avec un paramètre
function loop(count) {
    for (let i = 0; i <= count; i = i + 2) {
        console.log(i);
    }
}
loop(120);

// Transformer la boucle en fonction avec 3 paramètres
function loop(count, step, pas) {
    for (let i = pas; i <= count; i = i + step) {
        console.log(i);
    }
    return true;
}

// Une fonction peut retourner un résultat avec le mot clé return
let isOkay = loop(10, 3, 6);
console.log(res);

/*  ------------------------------------------------------------
                            LES TABLEAUX
    ------------------------------------------------------------ */

/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets [] et en y insérant les éléments séparés par des virgules
*/

let week = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche',
];

// Un tableau peut contenir des éléments de types différents
let tableau = [
    'rachid',
    'edjekouane',
    '16 avril',
    1983,
    [('php', 'algo', 'js', 'seo')],
];

// Pour accéder à un élément d'un tableau, je précise l'indice
console.log(week[0]);

// Pour modifier un élément d'un tableau, je précise l'indice
week[6] = 'test';
console.log(week);

// Pour connaitre la taille d'un tableau, on utilise la propriété length
console.log(week.length);

let animals = ['tigre', 'lion', 'panthere', 'aigle', 'chat', 'chien'];
console.log(animals[0], animals[5]);

// Pour itérer sur un tableau, on utilise une boucle for
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

function displayArrayAnimals() {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
}
displayArray();

function displayArrayWithParameter(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
displayArrayWithParameter(week);
displayArrayWithParameter(animals);

// Les tableaux peuvent contenir des tableaux (tableaux multidimensionnels)
let notes = [
    [12, 16, 19],
    [9, 5, 4],
    [12, 24, 7],
];

// Pour accéder à une note du tableau
console.log(notes[1][2]);
