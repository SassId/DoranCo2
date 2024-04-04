/* --------------------------- WINDOW --------------------------- */

/*
    Le DOM (Document Object Model) en JavaScript
    est une représentation en mémoire d'un document HTML chargé dans un navigateur.
    Le DOM représente chaque élément du document comme un objet JavaScript
    qui peut être manipulé et modifié à travers le code JavaScript.
*/

/*
    L'objet window en Javascript est un objet global qui represente la fenêtre du navigateur
    Cet objet est créé automatiquement lorsque la page Web est chargée
*/

/*
    L'objet window est objet important en Javascript car il fournit une interface entre le code Javascript et la fenetre du navigateur
*/

console.log(window);

/*
    L'objet window possède plus de 150 propriétés et méthodes
    L'objet window est un objet important en JavaScript
    car il fournit une interface entre le code JavaScript et la fenêtre du navigateur.
*/

// La propriété `window.document` permet d'accéder à l'objet document
console.log(window.document);

// La propriété `window.console` permet d'accéder à l'objet console
console.log(window.console);

// La propriété `window.alert()` permet d'afficher une boite de dialogue
window.alert('Hello World !');

// La propriété `window.confirm()` permet d'afficher une boite de dialogue
// avec deux boutons : OK et Annuler
// retourne true si l'utilisateur clique sur OK, sinon false
const confirm = window.confirm('Voulez-vous vraiment supprimer cet élément ?');
console.log(confirm);

// La propriété `window.prompt()` permet d'afficher une boite de dialogue
// avec un champ de saisie
// const prompt = window.prompt('Quel est votre nom ?');
// console.log(prompt);

// La propriété `window.open()` permet d'ouvrir une nouvelle fenêtre
// const newWindow = window.open('https://www.google.com', '_blank');
// console.log(newWindow);

// La propriété `window.location` permet d'accéder à l'objet location
// location.href = 'https://www.google.com';
console.log(window.location);

// La propriété `window.scrollTo()` permet de faire défiler la page jusqu'à un élément
window.scrollTo(0, 300);

// La propriété `window.scrollBy()` permet de faire défiler la page
// window.scrollBy(0, 100);

// La propriété `window.scroll()` permet de faire défiler la page
// window.scroll(0, 100);

// La propriété `window.scrollX` permet de récupérer la position horizontale du scroll
console.log(window.scrollX);

// La propriété `window.scrollY` permet de récupérer la position verticale du scroll
console.log(window.scrollY);

// La propriété `window.navigator` permet d'accéder à l'objet navigator
console.log(window.navigator);

// La propriété `window.history` permet d'accéder à l'objet history
console.log(window.history);

// La propriété `window.screen` permet d'accéder à l'objet screen
console.log(window.screen);

// La propriété `window.localStorage` permet d'accéder à l'objet localStorage
console.log(window.localStorage);

// La propriété `window.sessionStorage` permet d'accéder à l'objet sessionStorage
console.log(window.sessionStorage);

// La propriété `window.close()` permet de fermer une fenêtre
// newWindow.close();

// La propriété `window.print()` permet d'imprimer la page courante
// window.print();

// La propriété `window.innerHeight` permet de récupérer la hauteur de la fenêtre
console.log(window.innerHeight);

// La propriété `window.innerWidth` permet de récupérer la largeur de la fenêtre
console.log(window.innerWidth);

// La propriété `window.outerHeight` permet de récupérer la hauteur de la fenêtre
console.log(window.outerHeight);

// La propriété `window.outerWidth` permet de récupérer la largeur de la fenêtre
console.log(window.outerWidth);

// La propriété `window.screenX` permet de récupérer la position horizontale de la fenêtre
console.log(window.screenX);

// La propriété `window.screenY` permet de récupérer la position verticale de la fenêtre
console.log(window.screenY);

// La propriété `window.screenLeft` permet de récupérer la position horizontale de la fenêtre
console.log(window.screenLeft);

// La propriété `window.screenTop` permet de récupérer la position verticale de la fenêtre
console.log(window.screenTop);

// La propriété `window.screen.availHeight` permet de récupérer la hauteur de l'écran
console.log(window.screen.availHeight);

// La propriété `window.screen.availWidth` permet de récupérer la largeur de l'écran
console.log(window.screen.availWidth);

// La propriété `window.screen.height` permet de récupérer la hauteur de l'écran
console.log(window.screen.height);

// La propriété `window.screen.width` permet de récupérer la largeur de l'écran
console.log(window.screen.width);

// La propriété `window.screen.pixelDepth` permet de récupérer la profondeur de couleur de l'écran
console.log(window.screen.pixelDepth);

// La propriété `window.screen.colorDepth` permet de récupérer la profondeur de couleur de l'écran
console.log(window.screen.colorDepth);

// La propriété `window.screen.orientation` permet de récupérer l'orientation de l'écran
console.log(window.screen.orientation);

// La propriété `window.screen.orientation.angle` permet de récupérer l'angle de l'orientation de l'écran
console.log(window.screen.orientation.angle);

// La propriété `window.screen.orientation.type` permet de récupérer le type de l'orientation de l'écran
console.log(window.screen.orientation.type);

// La propriété `window.screen.orientation.lock()` permet de verrouiller l'orientation de l'écran
window.screen.orientation.lock('landscape');

// La propriété `window.screen.orientation.unlock()` permet de déverrouiller l'orientation de l'écran
window.screen.orientation.unlock();

// La propriété `window.toolbar` permet de récupérer la barre d'outils
console.log(window.toolbar);
