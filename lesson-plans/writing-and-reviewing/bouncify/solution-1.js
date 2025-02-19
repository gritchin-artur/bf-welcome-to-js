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

let input = null;

while (!input) {
  input = prompt('enter some text, the letters will be bouncified');

  if (input === '') {
    alert('no empty input, try again.');
  } else if (input === null) {
    alert('there is no escape!');
  }
}

let bouncy = true;
let output = '';
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let char of input) {
  if (alphabet.indexOf(char) === -1) {
    output += char;
    continue;
  }
  if (bouncy) {
    output += char.toUpperCase();
  } else if (!bouncy) {
    output += char.toLowerCase();
  }

  bouncy = !bouncy;
}

alert(output);
