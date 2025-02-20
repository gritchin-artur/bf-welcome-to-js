// #todo

'use strict';

/* generic

  _a -> entered text

  _b -> output message

  _p -> pattern

*/

let _a = '';

let _b = '';

let _p = /[aeiouAEIOU]/;

while (true) {
  _a = prompt('enter some text, the program will remove all vowels');

  if (!_a) {
    continue;
  }

  for (let char of _a) {
    if (_p.test(char)) {
      continue;
    } else {
      _b += char;
    }
  }

  alert(_b);
  break;
}
