// #todo

'use strict';
/*


  Data In: enter anything longer than 5 characters

  Data Out: popup window

  Test Cases:  
  if input.length < 5 => message 'too short',
if input.length > 5 => message 'long enough',
if input !== null || click cansel => message  'you canceled :(',
if input.length === 5 => message  'exactly 5!',

*/

/* ---   ?   --- */

// input <- prompt('enter anything longer than 5 characters')

// IF: input !== null
//   IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)

let input = prompt('enter anything longer than 5 characters');

let message = '';

if (input === null) {
  message = 'you canceled :(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length > 5) {
  message = 'long enough';
} else if (input.length === 5) {
  message = 'exactly 5!';
} else {
  message = 'you canceled :(';
}

alert(message);
