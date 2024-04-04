/* --------------------------- CONCATENATION --------------------------- */

// CONCATENATION : afficher du texte et des variables
// declarer des variables
// age, prenom, nom de famille, adresse, formation, organisme

// recuperer dans une variable le message
// Je m'appelle NOM PRENOM, j'ai AGE ans et j'habite ADRESSE, je suis en formation FORMATION à ORGANISME

// 3 façons '', "", ``
const age = 40;
const firstName = 'rachid';
const lastName = 'EDJEKOUANE';
const address = '105 quai de Jemmapes 75010 PARIS';
const formation = 'Dev WEB';
const organisation = 'DORANCO';

let information =
    "Je m'appelle " +
    firstName +
    ' ' +
    lastName +
    ", j'ai " +
    age +
    " ans et j'habite " +
    address +
    ', je suis en formation ' +
    formation +
    ' à ' +
    organisation;

// template literals (ou litteraux de gabarits) permet l'interpolation (interpretation de javascript au sein d'une chaine de caractère)
information = `Je m'appelle ${firstName} ${lastName}, j'ai ${age} ans et j'habite ${address}, je suis en formation ${formation} à ${organisation}`;

console.log(information);
