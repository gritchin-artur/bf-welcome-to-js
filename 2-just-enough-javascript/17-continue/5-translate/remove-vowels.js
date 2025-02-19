// #todo

'use strict';

/*


  Data In: enter some letters

  Data Out: removed all vowels

  Test Cases: 'qwerty -> qwrty'

*/

/* ---   ?   --- */

// letters <- null

// WHILE: letters === null
//   letters <- prompt('enter some letters')
// :END WHILE

/* ---   ?   --- */

// noVowels <- ''

// FOR: character OF letters
//   IF: 'aeiouAEIOU'.includes(character)
//     CONTINUE
//   :END IF
//   noVowels <- noVowels + character
// :END FOR-OF

/* ---   ?   --- */

// alert(letters + ' -> ' + noVowels)

let letters = null;

while (letters === null) {
  {
    letters = prompt('enter some letters');
  }
}

let noVowels = '';

for (let character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

alert(letters + ' -> ' + noVowels);
