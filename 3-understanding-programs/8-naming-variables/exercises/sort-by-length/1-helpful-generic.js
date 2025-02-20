'use strict';

/* generic

  _a -> entered text

  _short -> array width short words

  _medium -> array width medium words

  _long -> array width long words

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let _a = null;

let short = [];
let medium = [];
let long = [];

while (true) {
  _a = prompt('enter something');

  if (_a === null) {
    alert(`
short: 
${short.map((word) => '- ' + word).join('\n')}
medium:
${medium.map((word) => '- ' + word).join('\n')}
long:
${long.map((word) => '- ' + word).join('\n')}`);
    break;
  }

  if (_a.length < 5) {
    short.push(_a);
    console.log(short);
  } else if (_a.length === 5) {
    medium.push(_a);
  } else if (_a.length > 5) {
    long.push(_a);
  }
}
