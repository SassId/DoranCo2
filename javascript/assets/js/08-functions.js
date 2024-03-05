/* ----------------------- FUNCTIONS -----------------------*/

//* A Function is a reusable code block.
//* It can be "called" from other parts of your code to execute its task.
//* Functions are a effective way of snipping your code into smaller parts that are easier to manage.
//* They're used to avoid having to copy and paste the same part of code.

//! Syntax:

//? Function no parameter:
// function hello() {
//     let firstName = 'Roo';
//     let lastName = 'Rogers'
//     console.log('Hello, ' + firstName + ' ' + lastName);
// }
// hello()

//? Function with parameters:
// function hello(firstName, lastName) {
//   console.log("Hello, " + firstName + " " + lastName);
// }

// hello("Roo", "Rogers");

//todo Declare a function with 3 parameters
//todo Declare a variable tax = 20%
//todo Function multiplies the 3 numbers with tax
//todo Store the result in a variable
//todo Call the function

// function priceWithTax(x, y, z) {
//     const tax = 0.2
//     return x*y*z*tax;
// }

// const result = priceWithTax(2,2,2)
// console.log(result);

//? Another way to declare a function is to store the function in a variable
//? Anonymous Function:
// const math = function (x, y) {
//   return x * y;
// };
// const result = math(15, 45);
// console.log(result);

// const addition = function (a, b) {
//     return a+b;
// }
// const sum = addition(100,900)
// console.log(sum)

//? Yet another way to declare a function,
//? Arrow Function (fr: fonction fléchée)
// const divide = (x, y) => {
//   return x / y;
// };
// const quotient = divide(100, 20);
// console.log(quotient);

//todo Creates an arrow function helloYou that display the message "Hello, your name"
// const helloYou = (firstName) => {
//     const display = `Hello, ${firstName}`;
//     return display;
// }
// const display = helloYou("Jana")
// console.log(display);

//todo Creates an arrow function helloYou that display the message "Hello, your name"
// const helloYou = firstName => {return `Hello, ${firstName}`}
// const display = helloYou('Jack')
// console.log(display);

//* simplified in:
// const divide = (x, y) => {return x/y}
// const quotien = divide(100,20)
// console.log(quotien);

//todo Creates an arrow function helloYou that display the message "Hello, your name"
// const helloYou = firstName => `Hello, ${firstName}`
// const display = helloYou("Bob")
// console.log(display);

//* also simplified as below when there's only 1 parameter and 1 operation:
// const arrow = x => x*2;  // it returns the same things it calculates
// const result = arrow(45)
// console.log(result);

//todo Ask user to input a number
//todo Create an arrow function with a number as a parameter that displays in the console if the number is even or odd
//todo Call that function with the number 5 as parameter
//todo Call that function with the number 256 as parameter

// const evenOrOdd = (x) => {
//   x = prompt("enter a number");
//   const result = x % 2;
//   if (result == 0) {
//     return console.log("it's an even number");
//   } else {
//     return console.log("it's an odd number");
//   }
// };
// const display = evenOrOdd();

// const userInput = prompt("enter a number")
// const evenOdd = (x) => {
    
//     const result = x % 2 
//     if (result == 0) {
//         return console.log("even");
//             } else {
//                 return console.log("odd");
//             }
// }
// evenOdd(45)

//todo fizzbuzz exercice within a function
// let userNumber = prompt("enter a number");
// const fizzBuzz = (x) => {
//     if (x % 3 == 0 && x % 5 == 0) {
//         return console.log("FizzBuzz");
//     } else if (x % 3 == 0) {
//         return console.log("Fizz");
//     } else if (x % 5 == 0) {
//         return console.log("Buzz");     
//     } else {
//         console.log(x);

//     }
// }
// fizzBuzz(userNumber)