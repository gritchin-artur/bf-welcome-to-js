'use strict';

/* Mirror

  Data In: enter some text to mirror


  Data Out: mirrored text


  Test Cases:
  
  'Artur' -> 'rutrA | Artur'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
