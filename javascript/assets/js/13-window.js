/* ----------------------- WINDOW -----------------------*/

//* The object Window in JavaScript is a global object representing the browser's window.
//* It is automatically created when the web page is loaded.
//* It is the super parent of all the other objects.
//* Remember everything is an object in JS.

//? The object Window is important in Js because it provides us with an interface between the JS code and the browser's window
console.log(window);

//? The window property called "window.console" allows us to to access the console object:
console.log(window.console);

//? The window property called "window.alert()" allows us to display a dialog box:
// window.alert('Hello, world')

//? The window property called "window.document" allows to access the document object:
console.log(window.document);

//Display the array in its array form inside the console:
const array = ['cat', 'dog'];
console.table(array);