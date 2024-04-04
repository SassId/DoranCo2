/* --------------------------- DOM --------------------------- */

/*  -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

//  ? La methode `getElementById()`
const elementById = document.getElementById('element-by-id');
elementById.style.color = 'red';

/*
    ? La methode `getElementsByTagName()`
    getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const elementByTagName = document.getElementsByTagName('p');
for (let i = 0; i < elementByTagName.length; i++) {
    elementByTagName[i].style.color = 'blue';
}

/*
    ? La methode `getElementsByClassName()`
    getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const elementByClassName = document.getElementsByClassName('element-by-class');

for (let i = 0; i < elementByClassName.length; i++) {
    elementByClassName[i].style.color = 'orange';
}

//  ? La methode `querySelector`
const element = document.querySelector('.section p');
element.style.color = 'green';

/*
    ? La methode `querySelectorAll`
    querySelectorAll renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle `for()` ou la méthode `forEach()`
*/
const elementWithQuerySelectorAll =
    document.querySelectorAll('.element-by-class');

// Boucle `for()`
for (let i = 0; i < elementWithQuerySelectorAll.length; i++) {
    elementWithQuerySelectorAll[i].style.color = 'khaki';
}

// Boucle `forEach()`
elementWithQuerySelectorAll.forEach((toto) => (toto.style.fontWeight = 'bold'));

/*  ---------------------------------------------
    Quelques proprietes liées aux éléments du DOM
    ---------------------------------------------
    En JavaScript, il existe plusieurs propriétés
    pour accéder et modifier les éléments HTML sélectionnés dans le DOM.
    Voici quelques-unes des propriétés les plus couramment utilisées :

*/

const subTitle = document.querySelector('#subtitle');

// La propriété `style` permet de modifier le style
subTitle.style.color = 'pink';

// La propriété `textContent`  permet de récupérer ou de définir le contenu textuel d'un élément HTML.
subTitle.textContent = 'Je suis un titre modifié en javascript';

// La propriété `innerText` permet de récupérer ou de définir le contenu textuel d'un élément HTML.
subTitle.innerText = 'Je suis un titre modifié en javascript';

// La propriété `innerHTML` permet de récupérer ou de définir le contenu HTML d'un élément HTML.
subTitle.innerHTML = 'Je suis un <em>titre</strong> modifié en javascript';

// La propriété `classList` permet de récupérer la liste des classes d'un élément HTML.
console.log(subTitle.classList);

// La méthode `contains()` permet de vérifier si un élément HTML possède une classe donnée.
console.log(subTitle.classList.contains('active'));

// La méthode `remove()` permet de supprimer une classe d'un élément HTML.
subTitle.classList.remove('active');

// La méthode `add()` permet d'ajouter une classe à un élément HTML.
subTitle.classList.add('active');

// La méthode `toggle()` permet d'ajouter une classe à un élément HTML si elle n'existe pas, sinon elle la supprime.
subTitle.classList.toggle('active');

// La méthode `setAttribute()` permet de définir la valeur d'un attribut HTML.
subTitle.setAttribute('title', 'Je suis un titre');

// La méthode `getAttribute()` permet de récupérer la valeur d'un attribut HTML.
console.log(subTitle.getAttribute('title'));

// La méthode `removeAttribute()` permet de supprimer un attribut HTML.
subTitle.removeAttribute('title');

// La propriété `src` permet de récupérer ou de définir la valeur de l'attribut `src` d'une balise `img`.
const image = document.querySelector('img');
image.src = 'https://picsum.photos/200/300';

// La propriété `href` permet de récupérer ou de définir la valeur de l'attribut `href` d'une balise `a`.
const link = document.querySelector('a');
link.href = 'https://www.google.com';

// La propriété `value` permet de récupérer ou de définir la valeur d'un élément HTML.
const input = document.querySelector('input');
input.value = 'Je suis un input modifié en javascript';
