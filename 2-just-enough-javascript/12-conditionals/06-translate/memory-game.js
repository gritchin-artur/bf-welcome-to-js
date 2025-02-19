// #todo

'use strict';

/*


  Data In: enter some text, then remember it.\n\n' + 'if you remember it correctly you win

  Data Out: popup window alert

  Test Cases:
  if thingToRemember !== null => prompt('now try to remember what it was:') =>
  if guess !== null && guess === thingToRemember => alert('you win!'),
if any else cases =>  alert('try again.'),
if click cancel => alert('good bye')
*/

/* ---   ?   --- */

// thingToRemember <- prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win')

// IF: thingToRemember !== null
/* ---   ?   --- */
//   guess <- prompt('now try to remember what it was:')
//   IF: guess !== null
//     IF: guess === thingToRemember
/* ---   ?   --- */
//       alert('you win!')
//     ELSE:
/* ---   ?   --- */
//       alert('try again.')
//     :END IF
//   :END IF
// :END IF

/* ---   ?   --- */

// alert('good bye')

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

let guess = '';

if (thingToRemember !== null) {
  guess = prompt('now try to remember what it was:');

  if (guess === thingToRemember) {
    alert('you win!');
  } else {
    alert('try again.');
  }
} else alert('good bye');
