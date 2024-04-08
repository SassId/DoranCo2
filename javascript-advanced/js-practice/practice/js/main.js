// TODO EXERCICE :

// ? Manipulation de chaines de caractères trouvez sur google les fonctions vous permettant d'obtenir le resultat demandé
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: "Je suis une chaine de caractères "
const text = "Je suis une chaîne de caractères "

const message = new String("Je suis une chaîne de caractère") //! creates a new objetc that is a string

// Afficher la longueur de la chaine de caractères en console
console.log(text.length);

// Afficher le premier caractère de la chaine de caractères en console
// ? 2 methods
console.log(text.charAt(0));
console.log(text.at(0));


// Afficher le dernier caractère de la chaine de caractères en console
console.log(text.charAt(text.length - 1));
console.log(text.at(-1));

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console
console.log(text.trim());

// Afficher les 10 premiers caractères de la chaine de caractères en console
// ? Substring Method:
console.log(text.substring(0,10));

// ? Sclice Method:
console.log(text.slice(0,10));
// Mettre la chaine de caractères en majuscules et l'afficher en console
console.log(text.toUpperCase());

// Mettre la chaine de caractères en minuscules et l'afficher en console
console.log(text.toLowerCase());

// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console
// ? Part-text method:
console.log(text.replace("Je suis une chaîne de caractères", " I am a string"));
// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore
console.log(text.replace(/ /g, "_"));

// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console
// ? Split Method:
console.log(text.split(' ')); 

// ? Array.from method:
console.log(Array.from(text));



const pokemons = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Pikachu',
    'Jigglypuff',
    'Meowth',
    'Psyduck',
    'Snorlax',
    'Magikarp',
    'Eevee',
];

// Afficher en console le dernier élément du tableau pokemons
const lastElement = pokemons[pokemons.length - 1]
console.log(lastElement);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console
// ? The toString() method is not configurable with parameters
console.log(pokemons.toString());

// ? The .join() method is configurable:
console.log(pokemons.join(', '));

// Inverser l'ordre du tableau:
console.log(pokemons.reverse());