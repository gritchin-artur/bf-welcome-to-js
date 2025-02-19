'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 29, 31, 34
    why: invalid condition
    trying: in line 29 replace condition width "!input", in lines 31 and 34 remove equals

*/

let input = prompt('enter something 5 characters long');

// if (input === null) {
//   alert(':(');
// } else if (input.length <= 5) {
//   alert('too short');
// } else if (input.length >= 5) {
//   alert('too long');
// } else {
//   alert('perfect');
// }

if (!input) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
