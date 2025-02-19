// #todo

'use strict';

/*


  Data In: enter something longer than 4 characters, or "cancel" to leave

  Data Out: returned your your to alert

  Test Cases:
  input === null,
  input.length > 4

*/

/* ---   ?   --- */

// input <- ''

// prompting <- true

// WHILE: prompting
//   input <- prompt('enter something longer than 4 characters, or "cancel" to leave')
//   IF: input === null
//     prompting <- false
//     input <- 'you canceled'
//   ELSE: IF: input.length > 4
//     prompting <- false
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)

let input = '';

let prompting = true;

while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );

  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}

alert(input);
