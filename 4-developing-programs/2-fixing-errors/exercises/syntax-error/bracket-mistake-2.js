// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxErro
  message: Unexpected token '}'

  callstack:
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: read loop elements

  the mistake: extra right curly brace on line 27

  the fix(es): delete right curly brace on line 27
*/

// for (let i = 0; i < 5; i++) { }
// console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
