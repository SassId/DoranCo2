/* --------------------------- FONCTIONS AVANCEES --------------------------- */

/*
    Arrays
*/
const animals = ['tigre', 'loup', 'chouette', 'ours'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[1]);
}

// forEach() est une méthode JavaScript qui permet d'itérer sur les éléments d'un tableau
// et d'exécuter une fonction donnée pour chaque élément.
animals.forEach((animal) => console.log(animal));

// for(...of...)  permet de parcourir les éléments d'un objet itérable (ex: tableau, string)
for (let animal of animals) {
    console.log(animal);
}

/*
    Objects
*/
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

// for(...in...) permet de parcourir les propriétés énumérables d'un objet
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

// Recreer la fonction forEach() avec une boucle for
let pets = ['chien', 'chat', 'poisson', 'oiseau'];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

forEach(pets, function (animal) {
    console.log(animal);
});
