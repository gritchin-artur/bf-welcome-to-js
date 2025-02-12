'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line: 25
    why: with a new iteration the "exited" variable is overwrritten
    trying: shoud add "excited" to the beginning of the value

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  // excited = character + '!';
  excited = excited + character + '!';
}

alert(excited);
