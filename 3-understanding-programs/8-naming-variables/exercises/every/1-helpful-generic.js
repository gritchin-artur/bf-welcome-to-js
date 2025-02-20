// #todo

'use strict';

/* generic

  _a -> entered text;

  _p -> pattern;

*/

let _a = null;

let _p = /^[aeiouAEIOU]+$/;

while (!_a) {
  _a = prompt('enter some text, the program will check if it is only vowels');

  if (!_a) {
    continue;
  }

  if (_p.test(_a)) {
    alert('true');
  } else {
    alert('false');
  }

  break;
}
