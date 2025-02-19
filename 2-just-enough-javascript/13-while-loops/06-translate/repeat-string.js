// #todo

'use strict';

/*


  Data In: enter some text

  Data Out: repeated = repeated + '\n' + input;

  Test Cases: 
  input === null,
  i < input.length


*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text')
// :END WHILE

/* ---   ?   --- */

// repeated <- ''

// i <- 0

// WHILE: i < input.length
//   repeated <- repeated + '\n' + input
//   i <- i + 1
// :END WHILE

/* ---   ?   --- */

// alert(repeated)

let input = null;

while (input === null) {
  input = prompt('enter some text');
}

let repeated = '';

let i = 0;

while (i < input.length) {
  repeated = repeated + '\n' + input;
  i = i + 1;
}

alert(repeated);
