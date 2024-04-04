/* --------------------------- ARRAYS --------------------------- */

/*
    ? Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utlisant des crochets [] et en y insérants les éléments séparés par des virgules
*/

// * Déclaration d'un tableau vide
const emptyArray = [];

const fruits = ['pomme', 'banane', 'orange'];
// * On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(fruits[0]);

// Les tableaux peuvent contenir des tableaux
// Ils peuvent être multidimensionnels
const multiArray = ['texte', 12, true, ['lion', 'tigre', 'aigle']];
// Pour acceder à un valeur bien penser à cibler l'index dans l'index
console.log(multiArray[3][1]);

// Réaffecter la valeur d'une case d'un tableau
multiArray[3][1] = 'tortue';

// * Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
console.log(fruits.length);

function displayFruitsArray() {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

displayFruitsArray();
