/* --------------------------- Exercices d'Algorithmique --------------------------- */

// Algorithme de bienvenue qui affiche le nom et l'âge de l'utilisateur
// const name = prompt('enter your name');
// const age = prompt('enter your age');
// console.log(`Hello, ${name}, so you're ${age} years old, right?`)

// Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et qui affiche ensuite la phrase
// "Bonjour prénom votre nom est nom"

// Quelle sera la valeur de i à la fin de cet algorithme ?
// let g = 12;
// let h = 2;
// let i = g * h;
// console.log(i)

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
// let a = 23;
// let b = 5;
// let c = a;
// a = b;
// b = c;
// console.log(a,b)

// Ecrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).
// let price = prompt('enter the naked price here');
// const tax = 1.196;
// const priceWithTax = price * tax;
// console.log(`the full price is ${priceWithTax}`)

// Écrire un algorithme qui calcule la moyenne de trois nombres a, b et c. Le résultat sera stocké dans une variable m. Puis l'afficher
// const a = 15;
// const b = 19;
// const c = 17.5;
// const m = (a+b+c)/3
// console.log(m)

// Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18 ans
// const age = prompt('how old are you?');
// if (age < 13) {
//     console.log('you can watch Action Man')
// } else if (age >= 13 && age <= 18) {
//     console.log('you can watch Matrix')
// } else {
//     console.log('you can watch Evil Dead')
// }

// Écrire un algorithme qui renvoie le max de deux nombres x et y. Le résultat sera stocké dans une variable max.
// const x = 100;
// const y = 999;
// if (x > y) {
//     const max = x
// } else {
//     max = y
// }
// console.log(max)

// Écrire un algorithme qui stocke dans une variable max le maximum de trois variables a, b et c données.
// const x = 444;
// const y = 555;
// const z = 999;
// if (x > y && x > z) {
//     const max = x
// } else if (y > x && y > z) {
//     max = y
// } else {
//     max = z
// }
// console.log(max)

// Écrire la table de multiplication de 9
// for (let i = 0; i < 10; i++) {
//     let multiplication = 9*i
//     console.log(`9 x ${i} = ${multiplication}`)
// }

//! Écrire un algorithme qui demande un nombre entier non nul de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15.
// let number = prompt('enter a whole positive number');
// let add = 0
// for (let i = 0; i < number; i++) {
//      add = add + i
//     console.log(add)

// }

// Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.
// const magicNumber = 545;
// let yourguess;

// do {
//     yourguess = prompt('guess my number');

// } while (yourguess != 545);
// console.log('bingo!');

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur
// const magicNumber = 35;
// let yourguess;
// do {
//     yourguess = prompt('guess my number');
//     if (yourguess < 35) {
//         console.log('try higher');
//     } else {
//         console.log('try lower');
//     }
// } while (yourguess != 35);
// console.log('bravo!');

// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher

// const square = function (x) {
//     return x * 4
// }
// carre = square(5)
// console.log(carre);

// const square = (x) => {return x * 4}
// carre = square(5)
// console.log(carre);

// const square = x => x * 4
// carre = square(4);
// console.log(carre);

// Algorithme qui calcule et affiche le carre d'un nombre
// const power = x => x * x
// powerNumber = power(5)
// console.log(powerNumber);

//! Ecrivez un algorithme qui génère un chiffre aléatoire entre 0 et 5. Demandez ensuite à l'utilisateur de deviner ce chiffre avec des indices ("plus grand", "plus petit"). La fonction a utiliser est ALEATOIRE(nbre)

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/

// let marrakech = 1000000;
// let agadir = 500000;
// let i = 0
// while (agadir < marrakech) {
//     marrakech = marrakech + 50000;
//     agadir = agadir + (agadir * 0.08)
//     i++
//     console.log(i);
//     console.log(marrakech, agadir);

// }

// Ecrire un algorithme qui calcule la somme des valeurs d'un tableau.
// chiffres = [10, 15, 20, 15, 14, 8]

// const chiffres = [10, 15, 20, 15, 14, 8];
// let somme = 0
// for (let i = 0; i < chiffres.length; i++) {
//     somme = somme + chiffres[i]
// }
// console.log(somme);



// Algorithme Somme et Moyenne des Notes

// const chiffres = [10, 15, 20, 15, 14, 8];
// let somme = 0
// for (const index of chiffres) {
//     somme = somme + index
// }
// console.log(somme);
// const moyenne = somme / chiffres.length
// console.log(moyenne);

/* ---------------------------  Nouveaux Exercices d'Algorithmique --------------------------- */

// Écrire un programme qui affiche les nombres de 1 à 10 avec la boucle for.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Écrire un programme qui utilise une boucle while pour afficher les nombres de 1 à 5.
// let i = 1
// while (i <= 5) {
//     // i = 1;
//     console.log(i);
//     i++
// }

// Écrire un programme qui affiche tous les nombres pairs entre 0 et 100 inclus en utilisant une boucle for.
// for (i = 0; i <= 100; i = i + 2) {
//     console.log(i)
// }

// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Écrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la réponse n'est pas entre 1 et 10, afficher que le message devait être compris entre 1 et 10
// Le programme doit ensuite dessiner un sapin de Noël composé d'étoiles (*)
// *
// **
// ***
// ****
// *****

// let number;
// let star = '*';
// do {
//     number = prompt('pick a number')
// } while (number < 1 || number > 10);

// for (i = 0; i <= number; i++) {
//     console.log(star);
//     star = star + '*'
// }

// Ecrire le code permettant de récuperer le sexe de l'utilisateur puis afficher avec switch:
/*
    'homme' => Afficher dans un alert 'Vous êtes un homme'
    'femme' => Afficher dans un alert 'Vous êtes une femme'
    Autre chose => Afficher dans un alert 'Vous n'êtes ni un homme ni une femme'
*/

// let gender = prompt("enter your gender: M , F or NB")
// switch (gender) {
//     case "M":
//         console.log("you are a man");
//         break;
//     case "F":
//         console.log("you're a woman");
//         break
//     case "NB":
//         console.log("you're non binary");
//         break
//     default:
//         console.log("you're something else");
//         break;
// }

// Ecrire le code permettant de recuperer l'animal preferé de  l'utilisateur (if, else if, else)
/*
    Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
    Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
    Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
    Sinon => je ne connais pas cet animal
*/

// let favAnimal = prompt("what's your favorite animal")
// if (favAnimal == "cat" || favAnimal == "dog") {
//     console.log("you like pet animals");
// } else if (favAnimal == "lion" || favAnimal == "tiger") {
//     console.log("you like wild animals"); 
// } else if (favAnimal == "dolphin" || favAnimal == "shark") {
//     console.log("you like aquatic animals");
// } else {
//     console.log("you like fantasy animals");
// }


// let favAnimal = prompt("what's your favorite animal")
// switch (favAnimal) {
//     case "cat":
//     case "dog":
//         console.log("you like pet animals");    
//         break;
//     case "lion":
//     case "tiger":
//         console.log("you like wild animals");
//         break;
//     case "dolphin":
//     case "shark":
//         console.log("you like aquatic animals");
//         break;
//     default:
//         console.log("you like fantasy animals");
//         break;
// }

// Écrire une fonction appelée "calculerMoyenne" qui prend trois nombres en entrée et retourne la moyenne de ces nombres.
// function calculerMoyenne(x,y,z){
//     return (x+y+z) / 3
// }

// const moyenne = function (x,y,z) {return (x+y+z) / 3}

// const moyenne = (x,y,z) => {return (x+y+z) / 3}

// Ecrire une fonction prenant un parametre et qui verifie si 'utilisateur est majeur
/*
    si majeur retourner true
    sinon retourne false
*/

// const isLegal = function(age) {
//     if (age < 18) {
//         return false
//     } else {
//         return true
//     };
// }

// const LegalOrNot = isLegal(34)
// console.log(LegalOrNot);

// const age = prompt("how old are you?")
// const LegalOrNot = isLegal(age)
// console.log(LegalOrNot);


// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui :
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Afficher le tableau
*/

// const cities = ['Paris', 'Berlin', 'Rome', 'Moscow', 'London', 'Madrid'];
// const organize = function(array) {
//     array.pop();
//     array.unshift('Vienna');
//     array.splice(3,1,'Algiers')
//     console.log(array);
// }
// organize(cities)

/*
    Créer une fonction permettant de :
        Recuperer le nom, le prenom et l'age de l'utilisateur
        Stocker ces informations dans un tableau -> Le nom doit être en MAJUSCULES -> Le prenom doit etre en MINUSCULES
        Afficher le tableau dans la console
        Retourner le tableau
*/

const firstName = prompt('enter your first name'); 
const lastName = prompt('enter your last name');
const age = prompt('enter your age')
const makeArray = (firstName, lastName, age) => {
    const array = [firstName, lastName, age];
    array[1].toUpperCase();
    array[0].toLowerCase();
    console.log(array);
    return array 
}
makeArray(firstName, lastName, age);
console.log(array); //! won't display even though array is returned, why?!

/*
    Créer une fonction meteo qui prend en parametre la saison et la temperature
        degré s'accorde avec temperature ("s" au pluriel / sans au singulier)
        l'article s'accorde avec la saison ("au" printemps)
        Affiche Nous sommes en hiver et il fait -1 degré
*/

// let article = "en"
// let finMot
// const meteo = (season, temperature) => {
//     if (season == 'printemps') {
//         let art
//     }
// }

/* 
    Créer un objet sangoku
        nom => san
        prenom => goku
        enfant => array (gohan et goten)
        age => 
        presention =>() (
            retourne ' bonjour je m'appelle San Goku et jai x enfant
        )
        clg 'bonjour je m'appelle San Goku et jai x enfant'+ 'ils s'appellent ...
*/
