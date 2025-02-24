// #todo

'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack:
    at <anonymous>:20:13
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading a variable

  the mistake: reading a variable befor it is declaration

  the fix(es): move line 25 to line 28
*/

// console.log(tomatoes);

// let tomatoes = 'fresh';

let tomatoes = 'fresh';

console.log(tomatoes);
