// #todo

'use strict';

/*


  Data In: enter something longer than 4 characters

  Data Out: returned your text in alert

  Test Cases: input !== null && input.length <= 4

*/

// input <- ''

// WHILE: input !== null && input.length <= 4
//   input <- prompt('enter something longer than 4 characters')
// :END WHILE

// alert(input)

let input = '';

while (input !== null && input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}

alert(input);
