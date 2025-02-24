// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxErro
  message: Unexpected token 'for'

  callstack: 
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading loop elements

  the mistake: incorrect using loop for

  the fix(es): shoud remove "const" and "=" after "for"
*/

// const for = (let i = 0; i < 5; i++) {
//   console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
