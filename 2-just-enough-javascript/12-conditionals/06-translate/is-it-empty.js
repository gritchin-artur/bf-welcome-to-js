// #todo

'use strict';

/*


  Data In: enter something

  Data Out: message

  Test Cases: if enter nothing, you will recive the message 'your input is ',
  if enter something, you will recive the message 'your input is not empty'

*/

/* ---   ?   --- */

// input <- prompt('do whatever you want')

/* ---   ?   --- */

// message <- 'your input is '

// IF: input === null
/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)

let input = prompt('do whatever you want');

let message = 'your input is ';

if (input === null) {
  message = message + 'null';
}

let maybeNot = ' ';

if (input.length !== 0) {
  maybeNot = 'not ';
  message = message + maybeNot + 'empty';
}

alert(message);
