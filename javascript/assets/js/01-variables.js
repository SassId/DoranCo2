/* ----------------------- VARIABLES -----------------------*/


// * Variables names are case sensitive

// Declares 2 variables:
let uneVariable; 
let UNEVARIABLE;

// Assigns a value to the declared variable:
uneVariable = 'I am a variable'

// We usually declare and affect a variable at the same time:
let greet = 'Hello, world!'
greet =  uneVariable

console.log(greet)

// The const variable is called "constant" as it cannot be reassigned.
//  It is qualified as immutable and its value its garanteed to stay the same all along the script execution
const constant = 'I am a constant'
constant = 'someting else'

//! Variables and Constants cannot be named the same

// The "var" variable was the old way to declare a variable and is outdated since 2015. Moreover, "var" has a global scope which is problematic whearas "let" has a block scope.
var obsolet = 'I am obsolete'


