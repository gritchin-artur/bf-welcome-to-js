'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let input = '';

while (input === '') {
  input = prompt('Enter some text:');

  if (input === '') {
    alert('no empty input, try again.');
  }
}

let output = '';
let i = 0;

for (let char of input) {
  if (/[^\p{L}]/u.test(char)) {
    output += char;
    continue;
  } else if (i % 2) {
    output += char.toLowerCase();
  } else {
    output += char.toUpperCase();
  }
  i++;
}

alert(output);
