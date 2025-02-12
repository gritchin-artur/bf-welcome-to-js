'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 20
    why: Cannot read properties of null (reading 'length')
    trying: replace the condition "(input = null)" to "!input"

*/

let input = prompt('enter something 5 characters long');
console.log(input);

// if ((input = null)) {
if (!input) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
