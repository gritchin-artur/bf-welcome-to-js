'use strict';

/* Be Excited


  Data In: enter something, it will become excited

  Data Out: add '!' to the entered text

  Test Cases: input[input.length - 1] !== '!'

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become excited')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF

/* ---  ?  --- */

// alert(output)

let input = null;

while (input === null) {
  input = prompt('enter something, it will become excited');
}

let output = input;

if (input[input.length - 1] !== '!') {
  output = output + '!';
}

alert(output);
