/* --------------------------- Exercices d'Algorithmique --------------------------- */

// Algorithme de bienvenue qui affiche le nom et l'âge de l'utilisateur
// let urName = prompt("what's your name?");
// let age = prompt("how old are you?");
// console.log(urName, age)

// Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et qui affiche ensuite la phrase
// "Bonjour prénom votre nom est nom"
// let firstName = prompt("what's your first name?");
// let lastName = prompt("what's your last name?");
// console.log(`Hello ${firstName}, is your last name really ${lastName}?`)

// Quelle sera la valeur de i à la fin de cet algorithme ?
// let g = 12;
// let h = 2;
// let i = g * h;
// i = 12 * 2
// i = 24

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
// let a = "socks";
// let b = "shoes";
// console.log(a, b)
// let c = a;
// a = b;
// b = a;
// console.log(a, b)
// a = b;
// b = c;
// console.log(a, b)

// Ecrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).
// let prixHt = prompt("Quel est le prix hors taxe?");
// let prixTtc = prixHt * 1.196;
// console.log(`Le prix TTC est ${prixTtc}`)

// Écrire un algorithme qui calcule la moyenne de trois nombres a, b et c. Le résultat sera stocké dans une variable m. Puis l'afficher
// let a2 = 34;
// let b2 = 456;
// let c2 = 80;
// let m = (a2 + b2 + c2) / 3;
// console.log(m)

// Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18 ans
// let yourAge = prompt("how old are you?");
// if (yourAge < 13) {
//   console.log("you can watch Action Man");
// } else if (yourAge >= 13 && yourAge < 18) {
//   console.log("you can watch Matrix");
// } else {
//   console.log("you can watch Evil Dead");
// }

// Écrire un algorithme qui renvoie le max de deux nombres x et y. Le résultat sera stocké dans une variable max.
// let x = 34;
// let y = 23;
// if (x < y) {
//     console.log("le max est " + x)
// } else {
//     console.log("le max est " + y)
// }

// Écrire un algorithme qui stocke dans une variable max le maximum de trois variables a, b et c données.
// let a = 45;
// let b = 777;
// let c = 2;
// let max;
// if (a>b && a>c) {
//     max = a
// } else if (b>a && b>c) {
//     max = b
// } else {
//     max = c
// }
// console.log(max)

// Écrire la table de multiplication de 9
// for (let i = 0; i < 10; i++) {
//     let result = 9 * i
//     console.log(result)
// }

// Écrire un algorithme qui demande un nombre entier non nul de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15.
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
//   console.log(sum);
// }

// Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.
// let myNumber = 42;
// let number = prompt("find my number");
// while (number != 42) {
//     number = prompt("guess again")
// }
// console.log("found it!")

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur
// let magicNumber = 15;
// let yourguess = prompt("guess the magic number")
// while (magicNumber != yourguess) {
//     if (yourguess < magicNumber) {
//         yourguess = prompt("you're too low")
//     } else {
//         yourguess = prompt("you're too high")
//     }
// }
// console.log("found it!")

// Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur
// let rightNumber = 9;
// let yourAnswer = prompt("guess the right number between 0 and 10");
// while (rightNumber != yourAnswer) {
//     if (yourAnswer < 0) {
//         yourAnswer = prompt("i said between 0 and 10!")
//     } else if (yourAnswer >= 0 && yourAnswer < rightNumber) {
//         yourAnswer = prompt("it's higher")
//     } else if (yourAnswer > rightNumber && yourAnswer <= 10) {
//         yourAnswer = prompt("it's lower")
//     } else {
//         yourAnswer = prompt("i said between 0 and 10!")
//     }
// }
// console.log("found it!")

// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher
// function perimeter(x) {
//     return x * 4
// }
// let resPerimeter = perimeter(3)
// console.log(resPerimeter)

// Algorithme qui calcule et affiche le carre d'un nombre
// function square(x) {
//     return x * x
// }
// let resSquare = square(10)
// console.log(resSquare)

// Ecrivez un algorithme qui génère un chiffre aléatoire entre 0 et 5. Demandez ensuite à l'utilisateur de deviner ce chiffre avec des indices ("plus grand", "plus petit"). La fonction a utiliser est ALEATOIRE(nbre)
// function random(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// }
// console.log(random(10, 30))

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/
// let marrakech = 1000000;
// let agadir = 500000;
// let i = 0
// while (agadir<marrakech) {
//     marrakech += 50000;
//     agadir = agadir + (agadir * 0.08)
//     i++
// }
// console.log(marrakech, agadir, i)
// console.log(`Dans ${i} ans, la population de Marrakech sera de ${marrakech}
// habitants et celle d'Agadir de ${agadir} habitants`)

// Ecrire un algorithme qui calcule la somme des valeurs d'un tableau.
// chiffres = [10, 15, 20, 15, 14, 8]

// let tab = [10, 15, 20, 15, 14, 8]
// let sum = 0
// for (let i = 0; i < tab.length; i++) {
//     sum = sum + tab[i]
// }
// console.log(sum)

// Algorithme Somme et Moyenne des Notes
// let tab = [10, 15, 20, 15, 14, 8]
// let sum = 0
// for (let i = 0; i < tab.length; i++) {
//     sum = sum + tab[i]
// }
// console.log(sum)
// let moyenne = sum / tab.length
// console.log(moyenne)

/* ---------------------------  Nouveaux Exercices d'Algorithmique --------------------------- */

// Écrire un programme qui affiche les nombres de 1 à 10 avec la boucle for.
// for (i = 1; i <= 10; i++) {
//     console.log(i+'')
// }

// Écrire un programme qui utilise une boucle while pour afficher les nombres de 1 à 5.
// let i = 0
// while (i <= 5) {
//     i ++
//     console.log(i+'')
// }

// Écrire un programme qui affiche tous les nombres pairs entre 0 et 100 inclus en utilisant une boucle for.
// for (let i = 0; i <= 100; i+=2) {
//     console.log(i)
// }

// Écrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la réponse n'est pas entre 1 et 10, afficher que le message devait être compris entre 1 et 10
// Le programme doit ensuite dessiner un sapin de Noël composé d'étoiles (*)
// *
// **
// ***
// ****
// *****
// let numberr = prompt('pick a number between 1 and 10')
// let star = '*'
// while (numberr >= 1 || numberr <=10) {
//     numberr = prompt('i said between 1 and 10!')
// }
// for (let i = 0; i <= numberr; i++) {
//     console.log(star)
//     star = star + '*'
// }

// Ecrire le code permettant de récuperer le sexe de l'utilisateur puis afficher avec switch:
/*
    'homme' => Afficher dans un alert 'Vous êtes un homme'
    'femme' => Afficher dans un alert 'Vous êtes une femme'
    Autre chose => Afficher dans un alert 'Vous n'êtes ni un homme ni une femme'
*/
// let gender = prompt("what's your gender?")
// switch(gender) {
//     case 'male' :
//         alert("you're a man");
//         break;
//     case 'female' :
//         alert("you're a woman")
//         break;
//     default:
//         alert("you're non binary")
// }

// Ecrire le code permettant de recuperer l'animal preferé de  l'utilisateur (if, else if, else)
/*
    Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
    Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
    Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
    Sinon => je ne connais pas cet animal
*/
// let animal = prompt("what's your favorite animal?");
// if (animal == "dog" || animal == "cat") {
//   console.log("you like pet animal");
// } else if (animal == "lion" || animal == "tiger") {
//   console.log("you like wild animals");
// } else if (animal == "dolphin" || animal == "sea lion") {
//   console.log("you like aquatic animals");
// } else {   
//     console.log("i don't know that animal");
//     animal = prompt("what's your favorite animal?")
//   }

// Écrire une fonction appelée "calculerMoyenne" qui prend trois nombres en entrée et retourne la moyenne de ces nombres.
// function calculateAverage(x, y, z) {
//     return (x+y+z) / 3
// }
// let average = calculateAverage(10, 10, 10)
// console.log(average)

// Ecrire une fonction prenant un parametre et qui verifie si 'utilisateur est majeur
/*
    si majeur retourner true
    sinon retourne false
*/
// function legal(x) {
//     if (x < 18) {
//         return false
//     } else {
//         return true
//     }
// }
// let res= legal(23)
// console.log(res)

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui :
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Afficher le tableau
*/

let cityLab = ["Paris", "Berlin", "Rome", "Moscou", "London", "Madrid"]
console.log(cityLab)
let last = cityLab.pop()
console.log(cityLab)
let newLength = cityLab.unshift ("Vienna")
console.log(cityLab)
cityLab[3] = "Algiers"
console.log(cityLab)

/*
    Créer une fonction permettant de :
        Recuperer le nom, le prenom et l'age de l'utilisateur
        Stocker ces informations dans un tableau -> Le nom doit être en MAJUSCULES -> Le prenom doit etre en MINUSCULES
        Afficher le tableau dans la console
        Retourner le tableau
*/

/*
    Créer une fonction meteo qui prend en parametre la saison et la temperature
        degré s'accorde avec temperature ("s" au pluriel / sans au singulier)
        l'article s'accorde avec la saison ("au" printemps)
        Affiche Nous sommes en hiver et il fait -1 degré
*/

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
