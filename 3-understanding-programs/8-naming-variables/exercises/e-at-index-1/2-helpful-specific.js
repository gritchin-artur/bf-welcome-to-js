'use strict';

/* generic

  _a -> entered word;

  _b -> show your result

  _c -> ask you if you want to exit

  _l -> loop

*/

alert('you will need to enter strings with "e" in the right place');

let _a = '';

let _b = '';

let _c;

let _i = 0;

let _l = true;

while (_l) {
  _a = prompt(`_d a string with "e" at index ${_i}`);

  if (_a === null) {
    _c = confirm('are you sure you want to exit?');
  }

  if (_c) {
    alert(`your score: ${_i} \n
  entries: \n
  ${_i}. ${_b}`);
    break;
  }

  if (_c === false) {
    _c = '';
    continue;
  }

  if (_a === '' || _a[_i] !== 'e') {
    _b += 'x. ' + `${_a}` + '\n';
    alert(`your score ${_i} \n
entries:
${_b}`);
  }

  if (_a[_i] === 'e') {
    _b += _i + '. ' + _a + '\n';
    _i++;
    continue;
  }

  _l = false;
}
