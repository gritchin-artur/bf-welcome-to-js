// #todo

'use strict';

/*


  Data In: enter some text

  Data Out: find vowels or not

  Test Cases: 
  "qwert" => has at least one vowel,
  "wrt" => does not have any vowels


*/

/* ---   ?   --- */

// text <- null

// WHILE: text === null
//   text <- prompt('enter some text')
// :END WHILE

/* ---   ?   --- */

// hasAVowel <- false

// FOR: letter OF text
//   IF: 'aeiouAEIOU'.includes(letter)
//     hasAVowel <- true
//     BREAK
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: hasAVowel
//   message <- '"' + text + '" has at least one vowel'
// ELSE:
//   message <- '"' + text + '" does not have any vowels'
// :END IF

/* ---   ?   --- */

// alert(message)

let text = null;

while (text === null) {
  text = prompt('enter some text');
}

let hasAVowel = false;

for (let letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

let message = '';

if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

alert(message);
