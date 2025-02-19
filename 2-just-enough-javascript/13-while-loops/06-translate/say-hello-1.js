// #todo

'use strict';

/*


  Data In: say hello

  Data Out: input !== 'hello'

  Test Cases: alert('hello to you too!');

*/

// input <- ''

// WHILE: input !== 'hello'
//   input <- prompt('say hello')
// :END WHILE

// alert('hello to you too!')

let input = '';

while (input !== 'hello') {
  input = prompt('say hello');
}

alert('hello to you too!');
