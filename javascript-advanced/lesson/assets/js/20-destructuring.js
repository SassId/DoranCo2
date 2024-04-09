/* --------------------------- DESTRUCTURING --------------------------- */

/*
    ? Destructuring an objet (or an array) means that we can extract values in separate variables.
*/

const pokemon = {
  name: "Pikachu",
  type: "electric",
  level: 25,
  trainer: {
    name: "Sacha",
    city: "bourbapalet",
  },
  description: function () {
    return `Boku wa ${this.name}, pika pika!`;
  },
};

console.log(pokemon.name, pokemon.level, pokemon.trainer.name);
console.log(pokemon.description());

// const trainerName = pokemon.trainer.name;
// const trainerCity = pokemon.trainer.city;

// * Destructured variable assignment:
// the name: trainerName is used to rename the variable called name
const {
  name,
  level,
  trainer: { name: trainerName, city: trainerCity },
  description,
} = pokemon;

// ! The function will now not display this. because it not the current object anymore, it is desctructured and put into a variable
console.log(description);
// ! Instead you have to use the regular
console.log(pokemon.description());
ServiceWorkerRegistration;

const fruits = ["banana", "strawberry", "kiwi", "pineapple", "mango"];

console.log(fruits[0], fruits[fruits.length - 1]);

const [x, , , , y] = fruits; //! you have to know and count the number of items inside the array
console.log(x, y);

//*  Create an array with countries names and extract the last element in a variable:

const countries = ["france", "united kingdom", "kenya", "spain", "japan"];
const [france, , , , japan] = countries;
console.log(france, japan);

const avenger = {
  name: "Tony Stark",
  alias: "Iron Man",
  age: 40,
  isAlive: true,
  powers: ["Powered Armor", "Wealth", "Genius Level Intellect"],
};

const avenger2 = {
    name: "Peter Parker",
    alias: "Spider Man",
    age: 24,
    isAlive: true,
    powers: ["Spider Web", "Super Agility", "Spider Sense"]
}

// * Créer displayAvenger qui prend en parametre un objet
// *si l'avenger est vivant, retourne: je suis -alias- expert en -liste des pouvoir-
// * appeler la fonction en lui passant notre objet avenger

function displayAvenger(objet) {
  const {
    name: avengerName,
    alias,
    age,
    isAlive,
    powers: [power1, power2, power3],
  } = objet;
  if (isAlive) {
    console.log(
      `I am ${avengerName}, expert in ${power1}, ${power2} and ${power3}`
    );
    // console.log(`I am ${avengerName}, expert in ${powers.join(', ')}`); another method
  }
}

//? This is another syntax form:
function displayAvenger({
  name: avengerName,
  alias,
  age,
  isAlive,
  powers: [power1, power2, power3],
}) {
  if (isAlive) {
   return   `I am ${alias}, expert in ${power1}, ${power2} and ${power3}`
    // console.log(`I am ${avengerName}, expert in ${powers.join(', ')}`); another method
  }
}

console.log(displayAvenger(avenger));
console.log(displayAvenger(avenger2));

