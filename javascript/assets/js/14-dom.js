/* ----------------------- WINDOW -----------------------*/

//* The DOM (Document Objet Model) in JS is a memory (ram) based represention of a HTML document loaded by the browser.
//* It represents each object of the document as a modifiable JS object that can be manipulated and modified trough the JS code.

// -----------------------------------------------------------
//                    JS SELECTORS METHODS
// -----------------------------------------------------------

//? The getElementById() Method:
const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "red";
mainTitle.style.fontFamily = "Arial";
console.log(mainTitle);

// ? The getElementsByTagName() Method:
// This methods returns a HTMLCollection on which we can iterate (like an array) with the for statement
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

//? The getElementsByClassName() Method:
// This methods returns a HTMLCollection on which we can iterate (like an array) with the for statement

const borderElements = document.getElementsByClassName("border");
borderElements[0].style.color = "green";
console.log(borderElements);

const purpleBack = document.getElementsByClassName("title");
for (let i = 0; i < purpleBack.length; i++) {
  purpleBack[i].style.backgroundColor = "purple";
  purpleBack[i].style.color = "orange";
  purpleBack[i].style.width = "180px";
  purpleBack[i].style.textAlign = "center";
}

//! These Selectors are the newest ones:

//? The querySelector() Method:
const parag = document.querySelector("#first-p");
console.log(parag);
parag.style.fontSize = "large";

//? The querySelectorAll() Method:

const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach(function(paragraph){
    paragraph.style.textDecoration = 'underline'
})

// const allParagraphs = document.querySelectorAll('p')
// for (const paragraph of allParagraphs) {
//   paragraph.style.textDecoration = "underline";
// }

//todo Select all class txt-upper elements and make them all uppercase

const uppercase = document.querySelectorAll('.txt-uppercase')
console.log(uppercase);
uppercase.forEach(function(text){
    text.style.textTransform = 'uppercase'
})