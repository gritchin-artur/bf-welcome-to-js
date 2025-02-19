// #todo

'use strict';

/*


  Data In: enter some text, the program will check if it has any spaces

  Data Out: check spaces

  Test Cases: 
  "java" -> "java" has no spaces,
  "my name" -> "my name" has at least one space

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// noSpaces <- true

// FOR: letter OF input
//   IF: letter === ' '
//     noSpaces <- false
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noSpaces
//   message <- '"' + input + '" has no spaces'
// ELSE:
//   message <- '"' + input + '" has at least one space'
// :END IF

/* ---   ?   --- */

// alert(message)

/* --- declare initial output --- */

let input = null;

while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

/* --- create final output --- */

let noSpaces = true;

for (let letter of input) {
  if (letter === ' ') {
    noSpaces = false;
  }
}

let message = '';

if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}

alert(message);

/* --- alert the result --- */
