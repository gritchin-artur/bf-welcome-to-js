'use strict';

// let input = prompt('enter your name:');

// let greeting = '';
// if (input === null) {
//   greeting = 'hello anonymous.';
// } else {
//   greeting = 'hello ' + input + '!';
// }

// alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let name = prompt('enter your name:');
let lastName = prompt('enter your lastName:');

let greeting = '';
if (name === '' || lastName === '') {
  greeting = 'hello anonymous.';
} else {
  greeting = `hello ${name} ${lastName}!`;
}

alert(greeting);
