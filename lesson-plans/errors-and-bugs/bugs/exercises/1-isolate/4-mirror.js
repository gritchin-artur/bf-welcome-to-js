'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line: 25
    why: the entered text located between two vertical bars
    trying: shoud replaces the value with a vertical bar between two texts

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  // mirrored = mirrored + character + mirrored;
  mirrored = character + mirrored + character;
}

alert(mirrored);
