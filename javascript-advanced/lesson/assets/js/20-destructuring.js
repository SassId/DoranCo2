/* --------------------------- DESTRUCTURING --------------------------- */

/*
    ? Destructuring an objet (or an array) means that we can extract values in separate variables.
*/ 

const pokemon = {
    name: 'Pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'bourbapalet',
    },
    description: function () {
        return `Boku wa ${this.name}, pika pika!`
    }
}

console.log(pokemon.name, pokemon.level, pokemon.trainer.name);
console.log(pokemon.description());

// const trainerName = pokemon.trainer.name;
// const trainerCity = pokemon.trainer.city;

// * Destructured variable assignment:
// the name: trainerName is used to rename the variable called name
const { name, level, trainer: { name: trainerName, city: trainerCity}, description } = pokemon

// ! The function will now not display this. because it not the current object anymore, it is desctructured and put into a variable
console.log(description);
// ! Instead you have to use the regular
console.log(pokemon.description());
ServiceWorkerRegistration

const fruits = [
    'banana', 'strawberry', 'kiwi', 'pineapple', 'mango'
]

console.log(fruits[0], fruits[fruits.length - 1]);