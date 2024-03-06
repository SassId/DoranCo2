/* ----------------------- FUNCTIONS - ARRAYS -----------------------*/

//* A Callback (fr: fonction de rappel) is a function made into a parameter of another function

function display(callback) {
    callback() //This function is called by the display function
}

const greet = function(){
    console.log("hello, world");
}

display(greet)

display(function(){
    console.log(25+75);
})





const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const displayArray = function(string) {
    console.log(string);
  }

  function forEachPerso(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
  }

  forEachPerso(months, displayArray(" is cool"))


//todo Creates Function Add
const add = function (x,y) {return x+y}

//todo Creates Function Divide
const divide = function (x,y) {return x/y}

//todo Creates Function Multiply
const multiply = function (x,y) {return x*y}



