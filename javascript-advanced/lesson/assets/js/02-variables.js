/* --------------------------- VARIABLES --------------------------- */

// ? NB : les noms de variables sont sensibles à la casse
// On fait la différence entre les majuscules et les minuscules

// DECLARATION de variable
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable (donne une valeur à la variable)
uneVariable = 'je suis une variable';

// Les deux peuvent se faire en même temps
let greetingMessage = 'Hello, world!';

// On peut changer la valeur d'une variable
uneVariable = greetingMessage;
console.log(uneVariable);

// Le mot clé const permet de déclarer une constante
// Vous ne pouvez pas modifier une constante (on dit qu'elle est immuable)
// `const` va garantir que la valeur ne soit pas modifié tout au long de l'execution du script
const constante = 'je suis une constante';
// constante = 'autre chose';

// Le mot clé var permet aussi de déclarer des variables
//  C'est une pratiqué désuète (c'était la seule façon avant 2015)
var past = 'je suis dépassé';
