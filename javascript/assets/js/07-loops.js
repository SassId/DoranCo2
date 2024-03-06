/* ----------------------- LOOPS -----------------------*/

//* Loops are code structures allowing us to execute instructions multiples times

// The main difference between "for" and "while" is :
// The "for" statement is used when the number of iteration is already known
// The "while" statement is used when the number of iteration is yet unknow and depends on a specific condition

//! "For" statement:
// Creates a loop that displays all numbers from 10 to 20 by 2:

//? Method #1
// for (let i = 10; i<=20; i= i+2) {
//     console.log(i)
// }

//? Method #2
// for (let i = 10; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//! "While" statement:
// Creates a loop that displays all numbers from 10 to 20 by 2:

//? Method #1:
// let i = 0;
// while (i <=20) {
//     console.log(i)
//     i = i + 2;
// }

//? Method #2:
// let i = 10;
// while (i <= 20) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

// Ask a user for a number.
// While their number is not the one you want, make them find it by telling them if higher or lower:

//? Method #1: While
// const secretNumber = 55;
// let yourNumber = prompt("guess my secret number");
// while (yourNumber != secretNumber) {
//   if (yourNumber < secretNumber) {
//     console.log("try higher");
//   } else {
//     console.log("try lower");
//   }
//   yourNumber = prompt("guess my secret number");
// }
// console.log("bingo!");

//? Method #2: Do While
// const secretNumber = 55;
// let yourNumber;

// do {
//     yourNumber = prompt("guess my secret number")
//     if (yourNumber < secretNumber) {
//         console.log("try higher");
//     } else {
//         console.log("try lower");
//     }
// } while (yourNumber != secretNumber)
// console.log("bingo");

//? Method with if statement
// const wholeNumber = prompt("pick a number between 1 and 10");
// let star = "*";
// if (wholeNumber > 0 && wholeNumber <= 10) {
//   for (let i = 0; i < wholeNumber; i++) {
//     console.log(star);
//     star = star + "*";
//   }
// } else {
//   console.log("i said between 1 and 10");
//   wholeNumber = prompt("pick a number between 1 and 10");
// }

//? Method with while statement:
// let number = prompt('pick a number between 1 and 10');
// let star = '*';

// while (number < 1 || number > 10) {
//     number = prompt('pick a number between 1 and 10')
// }
// for (let i = 0; i < number; i++) {
//     console.log(star)
//     star = star + '*'
// }

//? Method with do while statement:
// let number;
// let star = '*'

// do {
//     number = prompt('pick a number between 1 and 10')
// } while (number < 1 || number > 10);
// for (let i = 0; i < number; i++) {
//     console.log(star)
//     star = star + '*'
// }
