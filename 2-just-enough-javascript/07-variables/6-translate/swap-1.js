// #todo

'use strict';

let a = 'y'; // a <- 'y'

let b = 'x'; // b <- 'x'

let temp = a; // temp <- a

a = b; // a <- b

b = temp; // b <- temp

console.log(a); // 'x'
console.log(b); // 'y'
console.log(temp); // 'y'