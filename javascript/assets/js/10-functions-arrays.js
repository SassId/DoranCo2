/* ----------------------- FUNCTIONS - ARRAYS -----------------------*/

const animals = ["cat", "dog", "tiger", "lion", "shark", "panda"];
console.log(animals);

//? Adds one or several elements at the end of the array:
animals.push('dolphin', 'wolf')
console.log(animals);

//Returns the length of the array
const what = animals.push()
console.log(what);

//Returns the new length of the array
const so = animals.push('dolphin', 'wolf')
console.log(so);

//? Deletes the last element of the array
animals.pop()
console.log(animals);
// Returns the deleted element
let popped = animals.pop()
console.log(popped);

//? Adds one or several elements at the begining of the array:
animals.unshift('baboon', "redfox");
console.log(animals);

// Returns the new lenght of the array
const added = animals.unshift('baboon', "redfox");
console.log(added);

//? Removes the first element of the array:
animals.shift()
console.log(animals);

//  Returns the added element
const now = animals.shift()
console.log(now);

//? Reorganises the array from end to begining:
animals.reverse()
console.log(animals);

// Returns the array
const invert = animals.reverse()
console.log(invert);

//? Modifies, Adds or Deletes an element of the array

// Add an element in a specific position
animals.splice(1, 0, 'raccoon')
console.log(animals);

// Replaces an element in a specific position
animals.splice(4, 1, 'eagle')
console.log(animals);

// Deletes an element in a specific position
animals.splice(0, 1)
console.log(animals);

//todo Declares an array (Paris, Berlin, Rome, Moscow, London, Madrid)
//todo Creates a function that takes an array as a parameter
//todo Deletes Madrid
//todo Adds Vienna at the begining
//todo Replaces Rome with Algiers
//todo Returns the length of the array

const cities = ['Paris', 'Berlin', 'Rome', 'Moscow', 'London', 'Madrid']
// console.log(cities);
cities.splice(5, 1)
// console.log(cities);
cities.unshift('Vienna')
// console.log(cities);
cities.splice(3, 1, 'Algiers')
// console.log(cities);
console.log(cities.length)

function organizer(x) {


}

//! All theses methods actually modify the source array