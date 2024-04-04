/* --------------------------- ARRAY FUNCTIONS --------------------------- */

// ? Attention la plupart des méthodes modifient le tableau d'origine

// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')
const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// Afficher la longueur du tableau
animals.length;

// * Ajouter un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let returnArray = animals.push('dauphin', 'loup');
// console.log(returnArray);

// * Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé
returnArray = animals.pop();
// console.log(returnArray);

// * Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
returnArray = animals.unshift('hiboux');
// console.log(returnArray);

// * Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
returnArray = animals.shift();
// console.log(returnArray);

// * Réorganiser le tableau de la fin vers le début
animals.reverse();
// console.log(animals);

// * Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter
animals.splice(1, 0, 'raton laveur');
// console.log(animals);

// Modifier
animals.splice(6, 1, 'aigle');
console.log(animals);

// Supprimer
animals.splice(2, 1);
// console.log(animals);

// * Renvoie une copie d'une partie du tableau
let newAnimals = animals.slice(1, 3);
console.log(newAnimals);

// * IndexOf() permet de chercher un élément dans un tableau
// Renvoie l'index de l'élément dans le tableau
let index = animals.indexOf('aigle');

// * Renvoie une copie du tableau sous forme string chainé par le caractère choisi
console.log(fruits.join(''));

// * divise une chaîne de caractères dans un tableau et retourne le tableau.
let id = 'rachid-edjekouane';
let array = id.split('-');
console.log(array);

// * Concaténer deux tableaux (retourne un nouveau tableaux)
let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];
let vegetables = ['patate douce', 'carotte', 'celeri', 'tomate'];
const food = fruits.concat(vegetables);
console.log(`2 tableaux concaténés : ${food}`);

/* --------------------------- ARRAY ITERATION --------------------------- */

// ? `for(){}` permet de parcourir les éléments d'un tableau (itérable)
for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
}

// ? `for(.. of ..){}` permet de parcourir les elements d'un tableau (itérable)
for (let animal of animals) {
    // console.log(animal);
}

// ? `foreach(){}` est une méthode Javascript qui permet d'itérer sur les éléments d'un tableau
animals.forEach(function (animal) {
    console.log(animal);
});

/* --------------------------- EXERCICES --------------------------- */

const europeanCapitalCities = [
    'Paris',
    'Berlin',
    'Rome',
    'Moscou',
    'Londres',
    'Madrid',
];

const modifyArray = (array) => {
    array.pop();
    array.unshift('Vienne');
    array.splice(3, 1, 'Alger');
    return array.length;
};

const europeanCapitalCitiesLength = modifyArray(europeanCapitalCities);

/*
    Créer une fonction fléché meteo qui prend en parametre la saison et la temperature
        Retourne Nous sommes en hiver et il fait -1 degré
        degré s'accorde avec temperature ("s" au pluriel / sans au singulier)
        l'article s'accorde avec la saison ("au" printemps)

        Afficher le resultat
*/
const meteo = (saison, temperature) => {
    let article = 'en';
    let degre = 'degrés';

    if (saison === 'printemps') {
        article = 'au';
    }

    if (temperature >= -1 && temperature <= 1) {
        degre = 'degré';
    }

    return `Nous sommes ${article} ${saison} et il fait ${temperature} ${degre}`;
};

const response = meteo('été', 56);
console.log(response);
