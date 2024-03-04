/* ----------------------- LOOPS -----------------------*/

//* Loops are code structures allowing us to execute instructions multiples times

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
let number;
let star = '*'

do {
    number = prompt('pick a number between 1 and 10')
} while (number < 1 || number > 10);
for (let i = 0; i < number; i++) {
    console.log(star)
    star = star + '*'
}