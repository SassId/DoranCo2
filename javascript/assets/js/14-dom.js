/* ----------------------- WINDOW -----------------------*/

//* The DOM (Document Objet Model) in JS is a memory (ram) based represention of a HTML document loaded by the browser.
//* It represents each object of the document as a modifiable JS object that can be manipulated and modified trough the JS code.

// -----------------------------------------------------------
//                    JS SELECTORS METHODS
// -----------------------------------------------------------


const mainTitle=  document.getElementById('main-title')
mainTitle.style.color = "red"
mainTitle.style.fontFamily = "Arial"
console.log(mainTitle);

const paragraphs = document.getElementsByTagName('p')
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue"
}

console.log(paragraphs);