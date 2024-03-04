/* ----------------------- DIGITAL OPERATORS -----------------------*/

// +, - , * , / , % , **

const sum = 2873544 + 87754;
console.log(`The result of this addition is ${sum}`);

const difference = 6873434 - 87357767;
console.log(`The result of this substraction is ${difference}`);

const product = 687341 * 5773;
console.log(`The result of this multiplication is ${product}`);

const quotient = 876434 / 45;
console.log(`The result of this division is ${quotient}`);

const rest = 10 % 3;
console.log(`The modulo of this division is ${rest}`);

const number1 = prompt("pick a number");
const number2 = prompt("pick a second number");
if (number1 % number2 == 0) {
  console.log(`the number ${number2} is a multiple of number ${number1}`);
} else {
  console.log("your numbers are not multiples of each other");
}

const power = 10 ** 5;
console.log(power);
