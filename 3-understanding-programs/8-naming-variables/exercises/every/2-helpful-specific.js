'use strict';

/* specific

  _a -> entered text;

  _b -> boolean loop;

  _p -> pattern;

*/
let _a = '';

let _b = true;

let _p = /^[aeiouAEIOU]+$/;

while (_b) {
  _a = prompt('enter some text, the program will check if it is only vowels');

  if (!_a) {
    continue;
  }
  if (_p.test(_a)) {
    alert('true');
    break;
  } else {
    alert('false');
    break;
  }
}
