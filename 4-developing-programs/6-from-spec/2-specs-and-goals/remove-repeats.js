// #todo

'use strict';

/* Remove Repeats

  A user can input some text and have all repeated characters removed.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        the repeats are removed and a before/after is displayed
    - given their input has at no repeated characters:
        nothing is changed and he initial input is displayed

    test cases:
    contains no repeated characters:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
      'toad'        ->   'toad'
    contains 1 repeated character:
      '  '          ->  '"  " -> " "'
      'aa'          ->  '"aa" -> "a"'
      'aba'         ->  '"aba" -> "ab"'
      'abac'        ->  '"abac" -> "abc"'
      'JavaScript'  ->  '"JavaScript" -> "JavScript"'
    contains more than 1 repeated characters:
      '   '         ->  '"   " -> " "'
      'abacada'     ->  '"abacada" -> "abcd"'
      'abcdefggg'   ->  '"abcdefggg" -> "abcdefg"'
      '.@@..@@.'    ->  '".@@..@@." -> ".@"'

*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('Enter some text:');
}

/* --- check if the input has any repeated characters --- */

//  store the string with no repeats for later

let checked = '';
for (let char of input) {
  if (checked.includes(char)) {
    continue;
  } else {
    checked += char;
  }
}

/* --- create a message for the user --- */

let message = `${input} -> ${checked}`;

//  you can compare the input to the string without repeats

/* --- display the message to the user --- */
alert(message);
