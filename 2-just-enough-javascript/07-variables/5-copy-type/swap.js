// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b; // 'x'
b = a; // 'y'
a = temp; // 'x'

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'x'); // true
