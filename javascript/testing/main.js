let add = (x, y) => x + y;

let display = add(4, 12);
console.log(display);

let addition = function(x, y) {
    return x + y
}
let res = addition(40, 60)
console.log(res);
console.log(addition(50, 25));

// function hello() {
//     console.log('hello world');
// }

// hello()

// let greeting = function () { console.log('hello you');}
// console.log(greeting);

let greeting = (message) => {return message}

const sayIt = greeting('yo bro')
console.log(sayIt);
