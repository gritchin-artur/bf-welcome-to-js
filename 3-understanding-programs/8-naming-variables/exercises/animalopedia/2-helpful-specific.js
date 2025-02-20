// #todo

'use strict';

/* specific

  _a: animal name

  _d: animal description 

  -e: answer player 2

*/

alert(
  'This is a two-player game:\n\n' +
    '- Player 1: enters a animal\n' +
    '- Player 2: says something cool about it',
);

let _a = '';

while (!_a) {
  _a = prompt('Player 1, enter home animal name:');
}

let _d = '';

while (!_d) {
  _d = prompt(`Player 1, describe "${_a}" in one word`);
}

let _e = '';
let i = 0;

while (!_e) {
  alert(`Player 2, you have ${3 - i} attempts!`);
  _e = prompt(`Player 2, what you think about ${_d}:`);

  if (i === 3) {
    alert('Sorry you are losse!');
    break;
  }

  if (_a !== _e) {
    alert("Sorry it's wrong answer try again");
    _e = '';
    i++;
    continue;
  }

  if (_a === _e) {
    alert('You are win!');
    break;
  }
}
