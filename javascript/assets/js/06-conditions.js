/* ----------------------- CONDITIONAL INSTRUCTIONS -----------------------*/

// The Comparison Operators (==, ===, !=, !==, >, >=, <, <=)

// const age = prompt('how old are you?'); 
// if (age >= 18) {
//     console.log('you are legal')
// } else {
//     console.log('you\'re not legal')
// }


// If the condition is truthy (true) then the instruction block is executed. 
// If not, it's ignored.
const age = 19;
if (age >= 18) {
    console.log('you are legal')
}

console.log(1 == 1)

// Ask a user for a number
// If the number is divisible by 3, display an alert "Fizz"
// If the number is divisible by 5, display an alert "Buzz"
// If the number is divisible by 3 and by 5, display an alert "FizzBuzz"

const number = prompt('choose a number');
// if (number % 3 == 0) {
//     alert('Fizz')
// } else if (number % 5 == 0) {
//     alert('Buzz')
// } else if (number % 3 == 0 && number % 5 == 0) {
//     alert('FizzBuzz')
// } else {
//     alert('well...')
// }
if (number % 3 == 0 && number % 5 == 0) {
        alert('FizzBuzz')
} else if (number % 3 == 0) {
    alert('Fizz')
} else if (number % 5 == 0) {
        alert('Buzz')
} else {
    alert('well...')
}
