//* Créer une fonction qui retourne la somme de deux nombres
const add = (x, y) => {return x+y }
// console.log(add(10,20));

//* Créer une fonction sumTo qui permet de calculer la somme des entiers de 1 à n.
// (1 + 2 + 3 + ... + n)
const sumTo = function (x) {
    let result = 0
     for (let i = 1; i <= x; i++) {
      result = result + i
}
}
  

// }

    let result = 0; 
for (let i = 1; i <= 100; i++) {
    result = result + i
   
}
 console.log(result);
// console.log(sumTo(100)); Résultat attendu: 5050

//* Utiliser une boucle pour afficher les nombres de 1 à 10

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Tableau de noms d'acteurs
const acteurs = [
    'Tom Hanks',
    'Meryl Streep',
    'Leonardo DiCaprio',
    'Scarlett Johansson',
    'Brad Pitt',
    'Jennifer Lawrence',
    'Robert De Niro',
    'Angelina Jolie',
    'Johnny Depp',
    'Charlize Theron',
];

//* Affichage des noms d'acteurs à l'aide de la boucle for, for...of, forEach

//? Method forEach:

// acteurs.forEach((element) => {
//     console.log(element);
    
// });

//? Method for:

// for (i = 0; i < acteurs.length; i++) {
//     console.log(acteurs[i]);
// }

//? Method for of:

// for (let element of acteurs) {
//     console.log(element);
// }

//* Créer un objet person avec un nom, un age et une ville de naissance, afficher chaque clé et valeur dans la console

const person = {
    name: 'roo',
    age: 32,
    city: "NYC"
}

for (let key in person) {
    console.log(person[key])
}

// Tableau d'objets d'acteurs avec leurs informations
const actors = [
    {
        lastName: 'Hanks',
        firstName: 'Tom',
        age: 65,
        nationality: 'Américaine',
        description:
            'Tom Hanks est un acteur américain de renom connu pour ses rôles dans des films tels que Forrest Gump, Seul au monde et Il faut sauver le soldat Ryan.',
    },
    {
        lastName: 'Streep',
        firstName: 'Meryl',
        age: 73,
        nationality: 'Américaine',
        description:
            "Meryl Streep est une actrice américaine légendaire connue pour sa polyvalence et ses performances dans des films comme Le Diable s'habille en Prada, Le Choix de Sophie et Kramer contre Kramer.",
    },
    {
        lastName: 'DiCaprio',
        firstName: 'Leonardo',
        age: 48,
        nationality: 'Américaine',
        description:
            'Leonardo DiCaprio est un acteur américain récompensé, célèbre pour ses rôles dans des films tels que Titanic, Inception et The Revenant.',
    },
    {
        lastName: 'Johansson',
        firstName: 'Scarlett',
        age: 38,
        nationality: 'Américaine',
        description:
            'Scarlett Johansson est une actrice américaine polyvalente connue pour ses rôles dans des films comme Lost in Translation, Avengers et Marriage Story.',
    },
    {
        lastName: 'Pitt',
        firstName: 'Brad',
        age: 59,
        nationality: 'Américaine',
        description:
            'Brad Pitt est un acteur américain très acclamé, connu pour ses performances dans des films comme Fight Club, Inglourious Basterds et Once Upon a Time in Hollywood.',
    },
    {
        lastName: 'Lawrence',
        firstName: 'Jennifer',
        age: 32,
        nationality: 'Américaine',
        description:
            'Jennifer Lawrence est une actrice américaine connue pour ses rôles dans des films comme la série Hunger Games, Happiness Therapy et Joy.',
    },
    {
        lastName: 'De Niro',
        firstName: 'Robert',
        age: 79,
        nationality: 'Américaine',
        description:
            'Robert De Niro est un acteur américain légendaire connu pour ses rôles dans des films emblématiques tels que Taxi Driver, Raging Bull et Les Affranchis.',
    },
    {
        lastName: 'Jolie',
        firstName: 'Angelina',
        age: 47,
        nationality: 'Américaine',
        description:
            'Angelina Jolie est une actrice américaine connue pour ses performances dans des films comme Lara Croft : Tomb Raider, Mr. & Mrs. Smith et Maléfique.',
    },
    {
        lastName: 'Depp',
        firstName: 'Johnny',
        age: 59,
        nationality: 'Américaine',
        description:
            "Johnny Depp est un acteur américain de renom pour ses rôles variés dans des films comme Pirates des Caraïbes, Edward aux mains d'argent et Sweeney Todd.",
    },
    {
        lastName: 'Theron',
        firstName: 'Charlize',
        age: 47,
        nationality: 'Sud-africaine',
        description:
            'Charlize Theron est une actrice sud-africaine, naturalisée américaine, connue pour ses performances dans des films comme Monster, Mad Max: Fury Road et Atomic Blonde.',
    },
];

//* Affichage des nom et prénom des acteurs

// for (let element of actors) {
// console.log(element.firstName, element.lastName);
// }

//* Affichage des noms et prénoms des acteurs qui ont moins de 40 ans
for (let element of actors) {
    if (element.age < 40) {
        console.log(element.firstName, element.lastName);
    }
}

//*  Cibler le bouton dans la page HTML et ajouter un écouteur d'événement pour afficher un message dans la console
const button = document.querySelector('#action');
button.addEventListener("click", function(){
    displayInfo(actors)
})


//*  Modifier le code pour afficher un message dans une balise <p> en bas de la balise qui a l'id user-container au lieu de la console
const newContent = document.getElementById('user-container');
// newContent.textContent = "i'm a paragraph created in javascript"


//*  Modifier le code pour creer une div avec la classe actors et ajouter un titre h3 qui contient `PRENOM NOM : AGE` et un paragraphe contenant la description à partir du tableau d'objets actors et les afficher dans le DOM dans la div qui a l'id actors-container

function displayInfo(array) {
    
    const newDiv = document.createElement('div');
    newDiv.classList.add("actors");

    for(let element of array) {
        const newH3 = document.createElement('h3');
        newH3.textContent = `${element.firstName} ${element.lastName} : ${element.age}`;

        const otherParagraph = document.createElement('p');
        otherParagraph.textContent = element.description;

        newDiv.append(newH3,otherParagraph);

        const divActorsContainer = document.querySelector('#actors-container');
        divActorsContainer.append(newDiv)
    }

    console.log(newDiv);
}




//* Créer une fonction qui prend un tableau de noms et crée une liste déroulante (select, option) dans le DOM dans la div qui a l'id user-container

function makeDropDownList(array) {
    const dropDownMenu = document.createElement('select');
    for (element of array){
        const dropDownItem = document.createElement('option');
        dropDownItem.textContent = element;
        
        dropDownMenu.append(dropDownItem)
    }

    newContent.append(dropDownMenu);

}

makeDropDownList(acteurs)
