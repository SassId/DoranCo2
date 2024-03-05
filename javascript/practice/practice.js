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
const unshifted = animals.unshift()
console.log(unshifted);

//! Returns the length of the modified array plus the () values.
//! Why?
const stillUnshifted = animals.unshift("pigeon", "cheetah")
console.log(stillUnshifted);

//? Removes the first element of the array:
animals.shift()
console.log(animals);

// Returns the first element of the modified array
const shifted = animals.shift()
console.log(shifted);

//? Inverts the order of the array:
animals.reverse()
console.log(animals);

// Returns the orginal array
const reversed = animals.reverse()
console.log(reversed);

//? Modifies, Adds or Deletes an element of the array

// Add an element in a specific position
animals.splice(5,0,"raccoon")
console.log(animals);

// Replaces an element in a specific position
animals.splice(3, 1, "platypus")
console.log(animals);

// Deletes an element in a specific position
animals.splice(6, 1)
console.log(animals);

test