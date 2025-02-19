// #todo

'use strict';

/*
  input the correct values to log the expected values
*/

let input1 = prompt('1. cancel this prompt'); // popup call
console.log(input1 === null); // true

let input2 = prompt('2. click "ok" without typing anything'); // popup call
console.log(input2 === ''); // true

let input3 = prompt('3. enter "hello"'); // popup call
console.log(input3 === 'hello'); // true

let input4 = prompt('4. enter your name'); // popup call
console.log(input4); // ?
