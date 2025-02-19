// #todo

'use strict';

/*


  Data In: enter some text, the program will check if it has any spaces

  Data Out: check spases

  Test Cases:  
  'Name' -> "Name" does not have any spaces,
  "firsName lastName" -> "firsName lastName" has at least one space

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// hasASpace <- false

// FOR: char OF input
//   IF: char === ' '
//     hasASpace <- true
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: hasASpace
//   message <- '"' + input + '" has at least one space'
// ELSE:
//   message <- '"' + input + '" does not have any spaces'
// :END IF

/* ---   ?   --- */

// alert(message)

/* --- declare initial output --- */

let input = null;

/* --- create final output --- */

while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let hasASpace = false;

for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
  }
}

let message = '';

if (hasASpace) {
  message = '"' + input + '" has at least one space';
} else {
  message = '"' + input + '" does not have any spaces';
}

/* --- alert the result --- */

alert(message);
