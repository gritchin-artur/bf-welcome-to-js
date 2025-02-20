'use strict';

/* generic

  _a -> __:

*/

let _a = '';

let _b = '';

let _p = /[aeiouAEIOU]/;

while (true) {
  _a = prompt('enter some text, can you guess what the program does?');

  if (!_a) {
    continue;
  }

  for (let char of _a) {
    if (_p.test(char)) {
      _b += char.toUpperCase();
    } else {
      _b += char.toLowerCase();
    }
  }

  alert(_b);

  break;
}
