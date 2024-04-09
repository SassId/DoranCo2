import {add as MyAddFunction, tax, default as multiply} from './math.js' // we can rename a function with as ... to avoid conflicts in case several functions are named the same

// the default function does not need curly brackets and can't be (re)named anything as we import it.
// import multiply from './math.js';  

console.log(add(2,8));
console.log(tax);