// #todo

'use strict';

/*


  Data In: enter something

  Data Out: message 'thank you for something!'

  Test Cases: input === ''

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

/* ---   ?   --- */

// output <- ''

// IF: input === ''
//   output <- 'you entered nothing :('
// ELSE:
//   output <- 'thank you for something!'
// :END IF

/* ---   ?   --- */

// alert(output)

let input = null;

while (input === null) {
  input = prompt('enter something');
}

let output = '';

if (input === '') {
  output = 'you entered nothing :(';
} else {
  output = 'thank you for something!';
}

alert(output);
