// #todo

'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';
let i = 0; // added "i" variable

while (i < toBeFrogged.length) {
  if (toBeFrogged[i] === 'f') {
    frogged = frogged + 'frog';
  }

  if (toBeFrogged[i] === 'F') {
    frogged = frogged + 'FROG';
  }
  frogged = frogged + toBeFrogged[i];
  i++; // added "i++"
}

alert(frogged);
