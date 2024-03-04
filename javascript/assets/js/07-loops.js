/* ----------------------- LOOPS -----------------------*/

//* Loops are code structures allowing us to execute instructions multiples times

const wholeNumber = prompt("pick a number between 1 and 10");
let star = "*";
// if (wholeNumber > 0 && wholeNumber <= 10) {
//   for (let i = 0; i < wholeNumber; i++) {
//     console.log(star);
//     star = star + "*";
//   }
// } else {
//   console.log("i said between 1 and 10");
//   wholeNumber = prompt("pick a number between 1 and 10");
// }

while (wholeNumber > 0 && wholeNumber <= 10 ) {
    let i = 0; 
    console.log(star)
    i++;
    star = star + "*"
}