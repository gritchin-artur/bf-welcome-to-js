// #todo

'use strict';

/*


  Data In: enter some letters

  Data Out: check for consonant

  Test Cases:
  "Artur" => has at least one consonant,
  "ae" => has no consonants

*/

/* ---   ?   --- */

// letters <- null

// WHILE: letters === null
//   letters <- prompt('enter some letters')
// :END WHILE

/* ---   ?   --- */

// noConsonants <- true

// FOR: letter OF letters
//   lowerCaseLetter <- letter.toLowerCase()
//   IF: 'bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)
//     noConsonants <- false
//     BREAK
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noConsonants
//   message <- '"' + letters + '" has no consonants'
// ELSE:
//   message <- '"' + letters + '" has at least one consonant'
// :END IF

/* ---   ?   --- */

// alert(message)

let letters = null;

while (letters === null) {
  letters = prompt('enter some letters');
}

let noConsonants = true;

for (let letter of letters) {
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
  }
}

let message = '';

if (noConsonants) {
  message = '"' + letters + '" has no consonants';
} else {
  message = '"' + letters + '" has at least one consonant';
}

alert(message);
