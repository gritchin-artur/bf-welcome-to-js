'use strict';

/* generic

  _a -> first secret phrase

  _b -> second secret phrase

  _c -> third secret phrase

_o -> array  of variables

_r -> random choice

_v -> value

_l -> back to variable

*/

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let _a = prompt('enter your first secret phrase:');

let _b = prompt('enter your second secret phrase:');

let _c = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let _o = [_a, _b, _c];

let _r = _o[Math.floor(Math.random() * _o.length)];

let _v = _r === 'a' ? 1 : _r === 'b' ? 2 : _r === 'c' ? 3 : 'unknown';

let _d = prompt(`enter phrase number ${_v}`);

let _l = _v === 1 ? _a : _v === 2 ? _b : _v === 3 ? _c : 'unknown';

if (_d === _l) {
  alert(`correct! phrase 2 was "${_l}"`);
} else {
  alert('nope :(');
}
