// #todo

'use strict';

let a = 'y'; // a <- 'y'

let b = 'x'; // b <- 'x'

let temp = b; // temp <- b

b = a; // b <- a

a = temp; // a <- temp

console.log(a); // 'x'
console.log(b); // 'y'
console.log(temp); // 'x'