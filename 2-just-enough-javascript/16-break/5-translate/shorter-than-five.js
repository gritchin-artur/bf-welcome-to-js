// #todo

'use strict';

/*


  Data In: enter something shorter than 5 characters

  Data Out: tell you if the shorter then 5 characters or not

  Test Cases:
'1234' -> '1234',
'123456' -> 'your input is too long'

*/

/* ---   ?   --- */

// input <- ''

// WHILE: true
//   input <- prompt('enter something shorter than 5 characters')
//   IF: input === null
//     alert('there is no escape')
//   ELSE: IF: input.length > 4
//     alert('your input is too long')
//   ELSE:
//     BREAK
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)

let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length > 4) {
    alert('your input is too long');
  } else {
    break;
  }
}

alert(input);
