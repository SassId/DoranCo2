/* ----------------------- ARRAYS -----------------------*/

//* An Array (sorts of table) is a type of data that can contain several elements of several types.

//! Syntax:

const array = [];

//todo Creates an array with all calendar months
//todo Displays January and December in the console
//todo Displays all the months with a loop
//todo Transform that loop into a function with no parameter

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];


// To access a value of the array we use its digital index (starting with 0)
console.log(months[0], months[11]); 

// To use or access the whole array, we use the .length propriety
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

function year() {
    for (let i = 0; i < months.length; i++) {
        console.log(months[i]);
    }
}
year()