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

//! These Selectors are the newest ones and allow to use the "for of" and forEach functions.

//? The querySelector() Method:
const parag = document.querySelector("#first-p");
console.log(parag);
parag.style.fontSize = "large";
parag.style.color = "rgb(20, 214, 20)";

//? The querySelectorAll() Method:

const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(function (paragraph) {
  paragraph.style.textDecoration = "underline";
});

// const allParagraphs = document.querySelectorAll('p')
// for (const paragraph of allParagraphs) {
//   paragraph.style.textDecoration = "underline";
// }

//todo Select all class txt-upper elements and make them all uppercase:
// With forEach method:
const uppercase = document.querySelectorAll(".txt-uppercase");
console.log(uppercase);
uppercase.forEach(function (text) {
  text.style.textTransform = "uppercase";
});

// With for of method:
// for (const element of uppercase) {
//   element.style.textTransform = "uppercase"
  
// }



// Changes the content of class border h2:
// const newContent = document.querySelector('.border')
// newContent.textContent = 'Something'

//* A few properties about the DOM elements:
// The style property allows to change the style
//

// The classList property allow to act on the class of the element:
// The add() method is used to add a class
parag.classList.add("inGreen");

// The remove() method is used to remove a class
// parag.classList.remove("inGreen")

const secondParagh = document.querySelector("#second-paragraph");
console.log(secondParagh);
secondParagh.classList.remove("txt-uppercase");

// Checks if an element contains a class:
// The contains() method returns a boolean thus you need to store it in a variable to display its value
const notSoEasyH2 = document.querySelector("#not-so-easy-h2");
console.log(notSoEasyH2);
const isTitle = notSoEasyH2.classList.contains("title");
console.log(isTitle);

// Changes content of an element:
notSoEasyH2.textContent = "Not so hard..."

// Another method:
notSoEasyH2.innerHTML = "check <em>this</em>" //* this one also interprets html

// Yet another method:
notSoEasyH2.innerText = "aaaaa" //! too old to be reliable with present applications
