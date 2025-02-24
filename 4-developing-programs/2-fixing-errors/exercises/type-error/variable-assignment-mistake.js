// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack:
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: variable declaration and assignment, reassignment

  the mistake: incorrect reassignment

  the fix(es): swap the place variable name and value on line 26
*/

// let isHappy = false;

// true = isHappy;

let isHappy = false;

isHappy = true;
