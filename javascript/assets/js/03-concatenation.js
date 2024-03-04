/* ----------------------- CONCATENATION -----------------------*/

// Displays variables and strings = concatenates

const age = 221; 
const firstName = 'Roo'; 
const lastName = 'Rogers'; 
const address = '777 Lucky Street, NYC';
const formation = 'Cyber-Sorcery';
const organisation =  "InterGalactic Radiant School";

// Concatenation:
console.log('Hi, my name is ' + firstName + ' ' + lastName + ', I am ' + age + ' years old and I live at ' + address)

console.log("Hi, my name is " + firstName + " " + lastName + ", I am " + age + " years old and I live at " + address )

//* Interpolation: The use of backtilts, aka template litterals (fr: littéraux de gabarit) allows to interprete JavaScript inside a string thus placing variables and constant names inside ${}
const info = (`Hi, my name is ${firstName} ${lastName}, I am ${age} years old and I live at ${address}. 
I am currently studying ${formation} at ${organisation}.`)
console.log(info)



