/* --------------------------- DATA TYPES --------------------------- */
// ? le Javascript type dynamiquement les variables

// * STRING (chaine de caractère)
const textMessage = 'Je suis une chaine de caractère';

// * NUMBER (Tous les types numériques)
const positiveInteger = 89; // Positive Integer
const negativeInteger = -10; // Negative Integer
const decimalNumber = 56.9; // Decimal Number
const infini = 1 / 0; // Infinity
const notANumber = 'message' / 4; // NaN

// * BOOLEAN (booléens)
// Variable de type booleen, n'accepte que 2 valeurs TRUE ou FALSE
const isTrue = true;
const isFalse = false;

// * NULL
const nullValue = null;

// * UNDEFINED
let undefinedValue; // undefined

// Afficher le type pour toutes les variables
console.log(typeof textMessage);
console.log(typeof positiveInteger);
console.log(typeof negativeInteger);
console.log(typeof decimalNumber);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(infini);
console.log(notANumber);
