/* --------------------------- CONDITIONAL STATEMENTS --------------------------- */

//  ? Les opérateurs de comparaison (==, === ,!=, !==, >, >=, <, <=)

/*
    * Le type booléen (true ou false) correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
    Si la condition est vraie (truthy), le bloc d'instruction est executé
    Si la condition est fausse (falsy), le bloc d'instruction est ignoré (0 et '' sont considérés comme falsy)
*/

const condition = 18;

if (condition >= 18) {
    console.log('Vous êtes majeur');
}

// Si, Sinon (if, else)
if (condition < 18) {
    console.log('Vous êtes mineur');
} else {
    console.log('Vous êtes majeur');
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition < 18) {
    console.log('Tu es un ado');
} else if (condition < 5) {
    console.log('Tu es un enfant');
} else if (condition < 40) {
    console.log('Tu es un quadra');
} else {
    console.log('Tu es trop vieux pour moi');
}

// * Les opérateurs logiques OU (||) et ET (&&)

const animal = prompt('Quel est votre animal préféré?');

if (animal === 'chien' && condition >= 18) {
    console.log("Vous êtes quelqu'un de bien");
} else if (animal === 'chat' || animal === 'félin') {
    console.log("Quelle drole d'idée");
} else if (animal === 'poisson rouge') {
    console.log('Je ne veux plus parler avec toi');
} else {
    console.log("Je n'ai pas compris la reponse");
}

// * L’instruction switch est souvent utilisée pour remplacer plusieurs instructions if…else if…else
// Elle permet de tester une variable et de lui faire exécuter différentes actions selon les valeurs qu’elle peut prendre
switch (animal) {
    case 'chien':
        console.log("vous etes quelqu'un de bien");
        break;
    case 'chat':
        console.log("Quelle drole d'idée");
        break;
    case 'poisson rouge':
        console.log('Je ne veux plus parler avec toi');
        break;
    default:
        console.log("je n'ai pas compris la reponse");
}

// FizzBuzz Game
let userInput = prompt('Donnez moi un nombre');

if (userInput % 5 === 0 && userInput % 3 === 0) {
    console.log('Fizzbuzz');
} else if (userInput % 3 === 0) {
    console.log('Buzz');
} else if (userInput % 5 === 0) {
    console.log('Fizz');
} else {
    console.log("ce nombre ne m'interesse pas");
}
