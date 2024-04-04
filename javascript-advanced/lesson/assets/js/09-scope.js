/* --------------------------- SCOPE --------------------------- */

// ? La portée des variables (scope) correspond à la portion de code dans laquelle une variables est accessible

/*
    * PORTEE GLOBAL
    Une variable déclarée en dehors de toute fonction ou bloc a une portée globale.
    Cela signifie qu'elle peut être utilsée et modifiée dans n'importe que'elle partie du code, y compris à l'intérieur de fonction ou de bloc
*/

const globale = 'Je suis une variable globale';

/*
    * PORTEE LOCALE
    La portée d'une variable déclarée à l'intérieur d'une fonction ou d'un bloc est limitée à cette fonction ou ce bloc.
    Cela signifie que la variable ne sera pas accessible en dehors de cette fonction.
*/

function scope() {
    let x = 10;
}
console.log(x); // Génère une erreur : x n'est pas défini dans le scope global

// Pour que le resultat d'une fonction soit accessible à l'exterieur, il faut qu'elle retourne une valeur avec le mot clé `return`
// Et il faudra donc récupérer le retour de la fonction dans une variable
function scopeWithReturn() {
    let x = 10;
    return x;
}
const result = scopeWithReturn();
