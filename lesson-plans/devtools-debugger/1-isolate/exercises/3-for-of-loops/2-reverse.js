'use strict';

// let toReverse = null;
// while (toReverse === null) {
//   toReverse = prompt('enter something to reverse:');
// }

// let backwards = '';
// for (let nextChar of toReverse) {
//   backwards = nextChar + backwards;
// }

// let transformation = toReverse + ' -> ' + backwards;

// alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

let backwards2 = '';
for (let nextChar of backwards) {
  backwards2 = nextChar + backwards2;
}

let transformationBack = toReverse + ' -> ' + backwards + ' -> ' + backwards2;

alert(transformationBack);
