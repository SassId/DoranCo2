//*  ----------------------- CONDITIONAL INSTRUCTIONS -----------------------

//? The Comparison Operators (==, ===, !=, !==, >, >=, <, <=)

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

// console.log(1 == 1)

// Ask a user for a number
// If the number is divisible by 3, display an alert "Fizz"
// If the number is divisible by 5, display an alert "Buzz"
// If the number is divisible by 3 and by 5, display an alert "FizzBuzz"

// const number = prompt('choose a number');
// if (number % 3 == 0 && number % 5 == 0) {
//         alert('FizzBuzz')
// } else if (number % 3 == 0) {
//     alert('Fizz')
// } else if (number % 5 == 0) {
//         alert('Buzz')
// } else {
//     alert('well...')
// }



// Ask the user for a number
// Verify if that number equals 12
//! === verifies both the value and the type of the operands (values we want to compare)
// const number2 = prompt('pick a number'); 
// console.log(typeof number2)
// if (number2 === 12) {
//     console.log('bravo')
// } else if (number2 === '12') {
//     console.log('yep')
// } else {
//     console.log('buzzzz')
// }

// Ask the user for his favorite animal
// If dog, "you're a good person"
// If cat, "how bizarre"
// If goldfish, "I don't wanna talk to you anymore"
// Else, "I didn't get your answer"


// const pet = prompt('what\s your pet animal ?')
// switch (pet) {
//     case "dog":
//         console.log("you're a good person")
//         break; 
//     case "cat":
//         console.log("how bizarre")
//         break; 
//     case "goldfish":
//         console.log("i'm not talking to you anymore")
//         break;
//     default:
//         console.log("i didn't get your answer")
// }


//? Ternary Operator :
let number = 5;
const result = number > 10 ? "yes" : "no" // <condition> ? <true case> : <false case>
console.log(result);