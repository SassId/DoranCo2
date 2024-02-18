/* --------------------------- Correction d'Algorithmique --------------------------- */

// Algorithme de bienvenue qui affiche le nom et l'âge de l'utilisateur
let firstname = 'Rachid';
let ages = 39;
console.log('Bonjour ' + firstname + ', vous avez ' + ages + ' ans');

// Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et qui affiche ensuite la phrase
// "Bonjour prénom votre nom est nom"
let rename = prompt('Quel est votre nom?');
console.log('Bonjour votre nom est ' + rename);

// Quelle sera la valeur de i à la fin de cet algorithme ?
// i = 24;

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
let j = 18;
let k = 15;

let temp = j;
j = k;
k = temp;

// Ecrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).
let ht = prompt('Quel est le prix Hors taxe ?');
let ttc = ht * 1.196;
console.log(ttc);

// Écrire un algorithme qui calcule la moyenne de trois nombres a, b et c. Le résultat sera stocké dans une variable m. Puis l'afficher
let a = 19;
let b = 12;
let c = 2;
let m = (a + b + c) / 3;
console.log('la moyenne est de ' + m);

// Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18ans
let agree = prompt('Quel est votre age ?');
if (agree < 13) {
    console.log('Action Man');
} else if (agree >= 13 && agree <= 18) {
    console.log('Matrix');
} else if (agree > 18) {
    console.log('Evil Dead');
}

// Écrire un algorithme qui renvoie le max de deux nombres x et y. Le résultat sera stocké dans une variable max.
let x = 23;
let y = 56;
let max;
if (x > y) {
    max = x;
} else {
    max = y;
}

console.log('le nombre le plus grand est ' + max);

// Écrire un algorithme qui stocke dans une variable max le maximum de trois variables a, b et c données.
let d = 23;
let e = 86;
let f = 56;
let maximum;

if (d > e && d > f) {
    maximum = d;
} else if (e > d && e > f) {
    maximum = e;
} else {
    maximum = f;
}
console.log('le nombre le plus grand est ' + maximum);

// Écrire la table de multiplication de 9
let val = 9;
for (let i = 0; i <= val; i++) {
    console.log(i + ' x ' + val + ' = ' + val * i);
}

// Écrire un algorithme qui demande un nombre entier non nul de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15.
let resultat = 0;
for (let i = 0; i <= 5; i++) {
    resultat += i;
}
console.log(resultat);

// Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse 7 soit donnée.
let number;

do {
    number = prompt('Donnez-moi un nombre compris entre 0 et 10?');
} while (number != 7);

console.log('Bien joué le chiffre était 7!');

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de 5
let goodNumber = prompt('Donnez-moi un nombre compris entre 0 et 10?');
while (goodNumber != 5) {
    if (goodNumber < 5) {
        goodNumber = prompt('Presque, un peu plus !');
    } else if (goodNumber > 5) {
        goodNumber = prompt('Presque un peu moins !');
    }
}
console.log('Bien joué le chiffre était 5!');

// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher
function surface(x) {
    return x * 4;
}

let air = surface(3);
console.log("L'air du rectangle est de " + air + ' m2');

// Algorithme qui calcule et affiche le carre d'un nombre
function cube(x) {
    return x * x;
}

let carre = cube(3);
console.log("L'air du rectangle est de " + carre + ' m2');

/* 
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an. 
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech. 
*/
let popMarrakech = 1000000;
let popAgadir = 500000;
let years = 0;
while (popMarrakech > popAgadir) {
    years++;
    popMarrakech += 50000;
    popAgadir += (popAgadir * 8) / 100;
}

console.log(
    'Dans ' +
    years +
    ' ans la population de Agadir dépassera celle de Marrakech'
);

// Ecrire un algorithme qui calcule la somme des valeurs d'un tableau (boucle for()).
let notes = [10, 15, 20, 15, 14, 8];
let response = 0;
for (let i = 0; i < notes.length; i++) {
    response = response + notes[i];
}
console.log(response);

/* --------------------------- Correction Nouveau Exercice d'Algorithmique --------------------------- */

// Écrire un programme qui affiche les nombres de 1 à 10 avec la boucle for.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Écrire un programme qui utilise une boucle while pour afficher les nombres de 1 à 5.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Écrire un programme qui affiche tous les nombres pairs entre 0 et 100 inclus en utilisant une boucle for.
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

let hauteur = prompt('Entrez un nombre entre 1 et 10 : ');

if (hauteur >= 1 && hauteur <= 10) {
    let star = '*';
    for (let i = 0; i < hauteur; i++) {
        console.log(star);
        star = star + '*';
    }
} else {
    console.log('Le nombre doit être compris entre 1 et 10 !');
}

// Ecrire le code permettant de recuperer l'animal preferé de  l'utilisateur (if, else if, else)
let animal = prompt('Quel est votre animal préféré ?');
if (animal == 'chien' || animal == 'chat') {
    console.log('Vous aimez les animaux domestiques !');
} else if (animal == 'lion' || animal == 'tigre') {
    console.log('Vous aimez les animaux sauvages !');
} else if (animal == 'otarie' || animal == 'dauphin') {
    console.log('Vous aimez les animaux marins !');
} else {
    console.log('Je ne connais pas cet animal !');
}

// Écrire une fonction appelée "calculerMoyenne" qui prend trois nombres en entrée et retourne la moyenne de ces nombres.
function calculerMoyenne(nombre1, nombre2, nombre3) {
    let somme = nombre1 + nombre2 + nombre3;
    let moyenne = somme / 3;
    return moyenne;
}

// exemple d'utilisation de la fonction
let moyenne = calculerMoyenne(5, 10, 15);
console.log(moyenne); // devrait afficher 10

// Ecrire une fonction prenant en parametre l'age de l'utilisateur et qui verifie s'il est majeur
/*
    si majeur retourner true
    sinon retourne false
*/
let age = prompt('Quel est ton age ?');

function isLegal(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let legal = isLegal(age);
console.log(legal);

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui :
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Afficher le tableau
*/
const cities = ['Paris', 'Berlin', 'Rome', 'Moscou', 'Londres', 'Madrid'];

function modifyCities() {
    cities.pop();
    cities.unshift('Vienne');
    cities[3] = 'Alger';
    console.log(cities);
}
modifyCities();

/*
    Créer une fonction permettant de :
        Recuperer le nom, le prenom et l'age de l'utilisateur
        Stocker ces informations dans un tableau -> Le nom doit être en MAJUSCULES -> Le prenom doit etre en MINUSCULES
        Afficher le tableau dans la console
        Retourner le tableau
*/
let firstName = prompt('Quel est votre prénom ?');
let lastName = prompt('Quel est votre nom ?');
let ageUser = prompt('Quel est votre age ?');

function getUser(firstName, lastName, age) {
    let infos = [];

    firstName = firstName.toLowerCase();

    infos.push(firstName, lastName.toUpperCase(), age);

    return infos;
}

const user = getUser(firstName, lastName, ageUser);
console.log(user[0]);

/*
    Créer une fonction meteo qui prend en parametre la saison et la temperature
        degré s'accorde avec temperature ("s" au pluriel / sans au singulier)
        l'article s'accorde avec la saison ("au" printemps)
        Affiche Nous sommes en hiver et il fait -1 degré
*/
function meteo(saison, temperature) {
    let degre = 'degres',
        article = 'en';

    if (temperature >= -1 && temperature <= 1) {
        degre = 'degre';
    }
    if (saison === 'printemps') {
        article = 'au';
    } else {
        article = 'en';
    }

    return document.write(
        'Nous sommes ${article} ${saison} et il fait ${temperature} ${degre} <br>'
    );
}

meteo('hiver', 5); //Nous sommes en hiver et il fait 5 degrés
meteo('printemps', 0); //Nous sommes au printemps et il fait 0 degrés

/* 
    Créer un objet sangoku
        firstName => san
        lastName => goku
        children => array (gohan et goten)
        age => 
        presention =>() (
            retourne ' bonjour je m'appelle San Goku et jai x enfant
        )
        clg 'bonjour je m'appelle San Goku et jai x enfant'+ 'ils s'appellent ...
*/
const sangoku = {
    firstName: 'san',
    lastName: 'goku',
    children: [
        'gohan',
        'goten'
    ],
    presentation: function () {
        return `bonjour je m'appelle ${sangoku.firstName} ${sangoku.lastName} et j'ai ${sangoku.children.length} enfants`
    }
}

console.log(sangoku.presentation() + `, ils s'appellent ${sangoku.children[0]} et ${sangoku.children[1]}`);