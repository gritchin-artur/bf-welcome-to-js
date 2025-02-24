// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected strict mode reserved word

  callstack:
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading loop elements

  the mistake: instead "for" using "if"

  the fix(es): replace "if" with "for"
*/

// if (let i = 0; i < 5; i++) {
//   console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
