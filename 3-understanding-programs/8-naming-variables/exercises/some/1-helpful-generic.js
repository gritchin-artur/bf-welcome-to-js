'use strict';

/* generic

  _a -> __:

*/

let _p = /[aeiouAEIOU]/;

let _a = null;

while (!_a) {
  _a = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

if (_p.test(_a)) {
  alert('true');
} else {
  alert('false');
}
