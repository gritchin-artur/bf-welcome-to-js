// #todo

'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: welf is not defined


  callstack:
    at <anonymous>:20:6
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: creation phase

  the mistake: variable "welf" is not declared

  the fix(es): declare variable at the line 26
*/

// welf = 'ingrad';

// console.log(welf);

let welf = 'ingrad';

console.log(welf);
