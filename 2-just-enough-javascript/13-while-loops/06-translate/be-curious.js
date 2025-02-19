// #todo

'use strict';

/* Be Curious


  Data In: enter something, it will become curious

  Data Out: need to find a question

  Test Cases: input[input.length - 1] !== '?'

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)

let input = null;

while (input === null) {
  input = prompt('enter something, it will become curious');
}

let output = '';

if (input[input.length - 1] !== '?') {
  output = "it isn't a question!";
} else {
  output = "it's a question!";
}

alert(output);
