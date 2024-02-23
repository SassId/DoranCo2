// // Déclarer 3 variables avec votre nom, prénom, age
// // Afficher en console, le message "Bonjour je m'appelle Nom Prenom et j'ai Age ans"


// let firstName = "Red"; 
// let lastName = "Renard";
// let age = 121;

// let message = `Hi, my name is ${firstName} ${lastName} and I'm ${age} years old`;

// // console.log("Hi, my name is " + firstName + " " + lastName + " " + "and I'm " + age + " years old.")
// // console.log(`Hi, my name is ${firstName} ${lastName} and I'm ${age} years old`)

// console.log(message)

// // Ecrire une fonction qui retourne la chaîne de caractères "Hello, world!" et l'afficher en console.
// function helloWorld() {
//     return "Hello, world!"
// }
// let greetings = helloWorld();
// console.log(greetings)

// // Ecrire une fonction add qui prend 2 nombres en paramètres et qui retourne l'addition des deux
// // Appeler cette fonction avec des nombres au choix et afficher le résultat en console
// function add(x,y) {
//     return x + y
// }
// let sum = add(5,10);
// console.log(sum)

// // Créer une boucle qui affiche 5 fois "coucou"
// let i = 0;
// while (i < 5) {
//     console.log("coucou")
//     i++
// }

// // Créer une boucle qui affiche les nombres de 0 à 10
// for (let i = 0; i <= 10; i++)
// console.log(i)

// // Déclarer un tableau de 6 fruits
// // Afficher le premier et le dernier fruit
// // Avec une boucle, afficher tous les fruits
let fruits = ["kiwi", "banana", "strawberry", "apple", "pear", "mango"]
// console.log(fruits[0], fruits[5])

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])

// }

// 
// for(let fruit of fruits) {
//     console.log(fruit);
// }

// Vérifier si ce tableau contient "cherry"
// Si oui, on récupère true sinon false

let isCherry = false
for(let fruit of fruits) {
    if (fruit == "banana") {
        isCherry = true
        }      
    }

console.log(isCherry)