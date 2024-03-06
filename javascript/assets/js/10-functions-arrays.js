/* ----------------------- FUNCTIONS - ARRAYS -----------------------*/

const animals = ["turtle", "gorilla", "fox", "shark", "lion", "tiger"];
console.log(animals);

//? Adds one or several elements at the end of the array:
animals.push("dolphin", "wolf");
console.log(animals);

// Returns the length of the new array
const what = animals.push();
console.log(what);

//! Returns the length of the new array plus the 2 () values
//! Why?
const so = animals.push("dolphin", "wolf");
console.log(so);

//? Deletes the last element of the array
animals.pop();
console.log(animals);

// Returns the deleted element
let popped = animals.pop();
console.log(popped);

//? Adds one or several elements at the begining of the array:
animals.unshift("pigeon", "cheetah");
console.log(animals);

// Returns the length of the modified array
const unshifted = animals.unshift();
console.log(unshifted);

//! Returns the length of the modified array plus the () values.
//! Why?
const stillUnshifted = animals.unshift("pigeon", "cheetah");
console.log(stillUnshifted);

//? Removes the first element of the array:
animals.shift();
console.log(animals);

// Returns the first element of the modified array
const shifted = animals.shift();
console.log(shifted);

//? Inverts the order of the array:
animals.reverse();
console.log(animals);

// Returns the orginal array
const reversed = animals.reverse();
console.log(reversed);

//? Modifies, Adds or Deletes an element of the array

// Add an element in a specific position
animals.splice(5, 0, "raccoon");
console.log(animals);

// Replaces an element in a specific position
animals.splice(3, 1, "platypus");
console.log(animals);

// Deletes an element in a specific position
animals.splice(6, 1);
console.log(animals);

//* For  (... of...) {} allows us to go through all the elements of an iterable object (i.e an array)

//todo Creates a for loop to display all the element of the animals array
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//todo Creates a for of loop to display all the element of the animals array
for (const animal of animals) {
  console.log(animal);
}

//* ForEach(){} is a Js method allowing us to iterate the elements of an array
// const test = function(){
//     console.log("yo!");

// }
// animals.forEach()

animals.forEach(function(animal){
    console.log(animal);
})

//todo Declares an array (Paris, Berlin, Rome, Moscow, London, Madrid)
//todo Creates a function that takes an array as a parameter
//todo Deletes Madrid
//todo Adds Vienna at the begining
//todo Replaces Rome with Algiers
//todo Returns the length of the array

// const cities = ['Paris', 'Berlin', 'Rome', 'Moscow', 'London', 'Madrid']
// // console.log(cities);
// cities.splice(5, 1)
// // console.log(cities);
// cities.unshift('Vienna')
// // console.log(cities);
// cities.splice(3, 1, 'Algiers')
// // console.log(cities);
// console.log(cities.length)

// //? Method #1
// function organizer(array) {
//     array.splice(5,1)
//     array.unshift('Vienna')
//     array.splice(3,1,'Algiers')
//     return array.length
// }
// const display = organizer(cities)
// console.log(display);

// //? Method #2:
// const organizer = (array) => {
//     console.log(cities);
//     array.pop()
//     array.unshift('Vienna')
//     array.splice(3,1,'Algiers')
//     console.log(array);
//     return array.length
// }
// organizer(cities)
// const display = organizer(cities)
// console.log(display);

//! All theses methods actually modify the source array
