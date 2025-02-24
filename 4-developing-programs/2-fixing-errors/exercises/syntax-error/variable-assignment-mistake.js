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

  life cycle: incorrect variable reassignment 

  the mistake: line 25

  the fix(es): swap the value and variable name on line 25
*/

// let favoriteNumber = 4;
// 3 = favoriteNumber;

let favoriteNumber = 4;
favoriteNumber = 3;
