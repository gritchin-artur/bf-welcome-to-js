// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Identifier 'undefined' has already been declared

  callstack: 
   at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: variable declare and assignment

  the mistake: 'undefined' cannot be a variable name

  the fix(es): replace 'undefined' with example 'text'
*/

// const undefined = 'three';

const text = 'three';
