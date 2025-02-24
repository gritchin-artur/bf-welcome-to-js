// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected end of input

  callstack:
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: readi loop element

  the mistake: miss right curly brace

  the fix(es): add rightcurly brace on line 29
*/

// for (let i = 0; i < 5; i++) {
//   console.log(i);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
