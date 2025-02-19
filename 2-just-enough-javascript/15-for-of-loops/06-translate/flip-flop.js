// #todo

'use strict';

/*


  Data In: prompt('enter something to flipflop')

  Data Out: flip text

  Test Cases: 'Name' -> 'aNem'

*/

/* ---   ?   --- */

// normalPhrase <- null

// WHILE: normalPhrase === null
//   normalPhrase <- prompt('enter something to flipflop')
// :END WHILE

/* ---   ?   --- */

// previous <- ''

// flipFlopped <- ''

// FOR: current OF normalPhrase
//   IF: previous !== ''
//     flipFlopped <- flipFlopped + current + previous
//     previous <- ''
//   ELSE:
//     previous <- current
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// IF: flipFlopped.length < normalPhrase.length
//   flipFlopped <- flipFlopped + normalPhrase[normalPhrase.length - 1]
// :END IF

/* ---   ?   --- */

// alert(flipFlopped)

/* --- declare initial output --- */

let normalPhrase = null;

/* --- create final output --- */

while (normalPhrase === null) {
  normalPhrase = prompt('enter something to flipflop');
}

let previous = '';

let flipFlopped = '';

for (let current of normalPhrase) {
  if (previous !== '') {
    flipFlopped = flipFlopped + current + previous;
    previous = '';
  } else {
    previous = current;
  }
}

if (flipFlopped.length < normalPhrase.length) {
  flipFlopped = flipFlopped + normalPhrase[normalPhrase.length - 1];
}

/* --- alert the result --- */

alert(flipFlopped);
