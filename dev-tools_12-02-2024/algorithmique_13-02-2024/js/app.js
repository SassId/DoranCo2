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

// Créer une boucle qui affiche 5 fois "coucou"
let i = 0;
while (i < 5) {
    console.log("coucou")
    i++
}

// Créer une boucle qui affiche les nombres de 0 à 10
let j  = 0;
for (j=0; j <= 10; j+1) {
    console.log(j)
    j+= 1
}

// Déclarer un tableau de 6 fruits
// Afficher le premier et le dernier fruit
// Avec une boucle, afficher tous les fruits
let fruits = ["kiwi", "banana", "strawberry", "apple", "pear", "mango"]
console.log(fruits[0], fruits[5])

let h = 0; 
for (h = 0; h < fruits.length; h+1) {
    console.log(fruits[h])
    h++
}
