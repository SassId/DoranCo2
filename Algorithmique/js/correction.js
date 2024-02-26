/*
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2023-04-01
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I javascript  I |
        | I    Algo     I |
        | I             I |
        | I_____________I |
        |_________________|
            ._[_______]_.
        .___|___________|___.
        |::: ____           |
        |    ~~~~ [CD-ROM]  |
        |___________________|

*/

// ---------------------------------- Partie 1 ----------------------------------

// Afficher un message de bienvenue dans la console
// 'Bonjour, je suis un message affiché dans la console'
console.log('Bonjour, je suis un message affiché dans la console');

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher le message de bienvenue dans la console
const message =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
console.log(message);

// Quelle sera la valeur de i à la fin de cet algorithme ?
let i = 24;

// Creer une variable qui contient un message
// 'Je decouvre le javascript'
// Concatener la variable avec le message 'et je suis très heureux de tout ce que j'apprend
// Et afficher le resultat dans la console
const discover = 'Je decouvre le javascript';
console.log(`${message}, ${discover}`);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
const userName = 'Rachid';

// Afficher le message avec les 3 facons de faire une concaténation
console.log("Bonjour, je m'appelle " + userName);
console.log("Bonjour, je m'appelle " + userName);
console.log(`Bonjour, je m'appelle ${userName}`);

// Algorithme de calcul de moyenne
// Déclarer 3 variables qui contiennent les notes de l'utilisateur
// Calculer la moyenne de l'utilisateur
const a = 18;
const b = 12;
const c = 2;
console.log(parseInt((a + b + c) / 3));

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function showMessage() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
}
showMessage();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
const showMessageWithParameter = function (name) {
    console.log(
        `Bonjour ${name}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`
    );
};
showMessageWithParameter('rachid');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
const showMessageWithTwoParameter = (name, age) => {
    console.log(
        `Bonjour ${name}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres, à plus tard ${name}`
    );
};
showMessageWithTwoParameter('Rachid', '38');

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
const age = 39;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// Déclarer une fonction qui prend en parametre un age
// Et qui affiche dans la console si l'utilisateur est majeur ou mineur
function checkAge(age) {
    if (age >= 18) {
        console.log('Vous êtes majeur');
    } else {
        console.log('Vous êtes mineur');
    }
}
checkAge(12);

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
function isLegal(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isLegal(38));

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
const animal = 'chien';

if (animal == 'chat' || animal == 'chien') {
    console.log('Vous aimez les animaux domestiques !');
} else if (animal == 'lion' || animal == 'tigre') {
    console.log('Vous aimez les animaux sauvages !');
} else if (animal == 'dauphin' || animal == 'otarie') {
    console.log('"Vous aimez les animaux marins !');
} else {
    console.log('je ne connais pas cet animal');
}

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
function checkAnimal(animal) {
    if (animal == 'chat' || animal == 'chien') {
        console.log('Vous aimez les animaux domestiques !');
    } else if (animal == 'lion' || animal == 'tigre') {
        console.log('Vous aimez les animaux sauvages !');
    } else if (animal == 'dauphin' || animal == 'otarie') {
        console.log('"Vous aimez les animaux marins !');
    } else {
        console.log('je ne connais pas cet animal');
    }
}
checkAnimal('dauphin');

// ---------------------------------- Partie 4 ----------------------------------

// Faite une boucle qui affiche dans la console 5 fois le message suivant
// 'Je suis une boucle'
for (let i = 0; i < 5; i++) {
    console.log('Je suis une boucle');
}

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
const number = 34;

for (let i = 1; i <= number; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console la table de multiplication de ce nombre
// Exemple: Si l'utilisateur rentre 5, afficher dans la console
// '5 x 1 = 5'
// '5 x 2 = 10'
// '5 x 3 = 15'
const number2 = 45;

for (let i = 0; i <= 10; i++) {
    const res = number2 * i;
    console.log(`${number2} x ${i} = ${res}`);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
const multiplication = (number) => {
    for (let i = 0; i <= 10; i++) {
        const res = number * i;
        console.log(`${number} x ${i} = ${res}`);
    }
};
multiplication(100);

// Appeler la fonction en lui passant le nombre 5 en parametre
multiplication(5);
// Appeler la fonction en lui passant le nombre 7 en parametre
multiplication(7);
// Appeler la fonction en lui passant le nombre 9 en parametre
multiplication(9);

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre
const userNumber = 45;

const isEven = (number) => {
    if (number === 10) {
        console.log('le nombre est pair');
    } else {
        console.log('le nombre est impair');
    }
};
isEven(5);
isEven(256);

// ---------------------------------- Partie 5 ----------------------------------

// Déclarer un tableau contenant le nom des mois
// Afficher dans la console le mois de janvier
const months = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];

// Afficher dans la console le mois de mars
// Afficher dans la console le mois de avril
// Afficher dans la console le mois de aout
// Afficher dans la console le mois de octobre
console.log(months[2]);
console.log(months[3]);
console.log(months[7]);
console.log(months[9]);

// Faire une boucle qui affiche dans la console les mois de l'année
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

// Creer une fonction qui affiche dans la console les mois de l'année
// Appeler la fonction 2 fois
function displayMonth() {
    for (let i = 0; i < months.length; i++) {
        console.log(months[i]);
    }
}
displayMonth();
displayMonth();

// Creer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Afficher dans la console la note de l'utilisateur à l'indice 1
const userNotes = [10, 15, 20];
console.log(userNotes[1]);
