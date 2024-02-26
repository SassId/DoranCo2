// Déclarer 3 variable avec votre nom, prénom, age
// Affichez en console le message "Bonjour je m'appelle NOM PRENOM et j'ai AGE ans"
// '', "", `` => string
let firstName = 'rachid';
let lastName = 'EDJEKOUANE'
let age = 40

let message = "Bonjour, je m'appelle " + lastName + " " + firstName + " et j'ai " + age + " ans"
message = 'Bonjour, je m\'appelle' + lastName + " " + firstName + " et j'ai " + age + " ans"
message = `Bonjour, je m'appelle ${firstName} ${lastName} et j'ai ${age} ans`
console.log(message);

// Ecrire une fonction qui retourne la chaine de caractère 'Hello, world!'
function hello() {
    return 'Hello, world!'
}

let messages = hello()
console.log(messages);

// Ecrire une fonction add() qui prend 2 nombre en parametre et qui retourne l'addition de ces 2 nombres
// Appeler la fonction avec les nombre 3456 et 8978789 en parametre et affichez en console le resultat
function add(x, y) {
    return x + y
}

let resultat = add(3456, 8798798787)
// console.log(resultat);

// Boucle qui affiche 5 fois 'coucou'
for (let i = 0; i < 5; i++) {
    // console.log('coucou');
}
// Boucle qui affiche les nombre de 0 à 10
for (let i = 0; i <= 10; i++) {
    // console.log(i);
}
// Déclarer un tableau de 6 fruits
let fruits = ['kiwi', 'banane', 'fraise', 'poire', 'cerise', 'pomme', 'peche']

// Afficher le premier et le dernier fruit
// console.log(fruits[0]);
// console.log(fruits[5]);

// Boucle qui affiche tous les fruits
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

let isBanane = false

for (let fruit of fruits) {
    if (fruit === 'banane') {
        isBanane = true
    }
}
console.log(isBanane);

/* ****************************************** */
/*           LES OBJETS EN JAVASCRIPT         */
/* ****************************************** */

// Tout est objet en javascript
// window est un objet global qui contient toute les variables globales de javascript (document, console, fetch, alert, prompt, confirm)

/* 
    Les objets sont des variables qui peuvent contenir plusieurs valeurs sous forme de paires clé/valeur
    Les objets sont déclarés avec des accolades {}
    Les paires clé/valeur sont séparées par une virgule
    Les valeurs peuvent être de n'importe quel type de données (string, number, tableau, fonction, objet)
    Les objets peuvent contenir des fonctions qui sont appelées méthodes
*/

let clio = {
    model: 'clio 5',
    option: ['siège chauffant', 'airbag'],
    description: function () {
        console.log(`Je suis une clio 5 et j'ai des ${this.option[0]}`);
    },
    moteur: {
        cylindre: [56, 89],
        chevaux: 78
    }
}

clio.description()
console.log(clio.moteur.chevaux);

let sanGoku = {
    nom: 'San',
    prenom: 'Goku',
    age: 45,
    identity: function () {
        console.log(`Je suis ${this.nom} ${this.prenom}`);
    },
    enfant: ['gohan', 'goten']
}

sanGoku.identity()
console.log(sanGoku.enfant[0]);