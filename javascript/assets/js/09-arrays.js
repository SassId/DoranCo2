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

console.log(months[0], months[11]); 

for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

function year() {
    for (let i = 0; i < months.length; i++) {
        console.log(months[i]);
    }
}
year()