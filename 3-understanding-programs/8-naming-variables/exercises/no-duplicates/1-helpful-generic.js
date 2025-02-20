'use strict';

/* generic

  _a -> entered text

  _b -> output text
  
*/

let _a = null;

let _b = '';

while (true) {
  _a = prompt('enter something with no duplicate characters');

  if (!_a) {
    continue;
  }

  for (let char of _a) {
    if (!_b.includes(char)) {
      _b += char;
    } else {
      alert('too bad, try again');
      break;
    }
  }

  if (_a.length === _b.length) {
    alert('well done!');
  }

  break;
}
