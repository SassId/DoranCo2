/* --------------------------- EVENT --------------------------- */

/*  ---------------------------------------------
    Evénements en JavaScript
    ---------------------------------------------
    La méthode addEventListener() permet de définir un écouteur d'événement sur un élément HTML.
    Cet écouteur est appelé chaque fois que l'événement spécifié se produit sur l'élément.
    ---------------------------------------------
    La methode addEventListener() prend 2 paramètres:
    1. Le nom de l'événement (click, dblclick, submit, input, mouseenter, mouseover, mouseout, keydown, keyup, change, ...)
    2. Une fonction callback qui sera appelée à chaque fois que l'événement se produit
*/

subTitle.addEventListener('click', function () {
    if (subTitle.style.color == 'pink') {
        subTitle.style.color = 'red';
    } else {
        subTitle.style.color = 'pink';
    }
});

// subTitle.addEventListener('click', function () {
//     if(!subTitle.classList.contains('active')){
//         subTitle.classList.add('active')
//     } else {
//         subTitle.classList.remove('active')
//     }
// });

subTitle.addEventListener('click', function () {
    subTitle.classList.toggle('active');
});
