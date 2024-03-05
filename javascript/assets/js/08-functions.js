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
//? Anonymous function:
const math = function (x, y) {
  return x * y;
};
const result = math(15, 45);
console.log(result);
