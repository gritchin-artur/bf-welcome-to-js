// #todo

'use strict';

/* Cat Detector


  Data In: please enter "cat"

  Data Out: message 'thank you for the cat'

  Test Cases: input !== 'cat'


*/

/* --- ? --- */

// input <- null

// WHILE: input === null
//   input <- prompt('please enter "cat"')
// :END WHILE

/* --- ? --- */

// message <- ''

// IF: input !== 'cat'
//   message <- '"' + input + '" is not a cat'
// ELSE:
//   message <- 'thank you for the cat'
// :END IF

/* --- ? --- */

// alert(message)

let input = null;

while (input === null) {
  input = prompt('please enter "cat"');
}

let message = '';

if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

alert(message);
