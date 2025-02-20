// #todo

'use strict';

/* generic

  _a:
    declaration:
      init:
      types:
      scopes:
    reads:
      scopes:
      checks:
    assignments:
      types:
      scopes:


*/

alert(
  'This is a two-player game:\n\n' +
    '- Player 1: enters a animal\n' +
    '- Player 2: says something cool about it',
);

let animal = null;
while (!animal) {
  animal = prompt('Player 1, enter a animal name:');
}

let description = '';
while (!description) {
  description = prompt(`Player 2, describe the ${animal}:`);
  if (!description) {
    alert('You must enter a description!');
  }
}

let guess = prompt(
  `Player 1, what do you think Player 2 said about the ${animal}?`,
);

if (guess && guess.toLowerCase() === description.toLowerCase()) {
  alert('Correct! You win!');
} else {
  alert('Wrong answer! Better luck next time.');
}

alert(`I just learned something cool about ${animal}!\n\n- "${description}"`);
