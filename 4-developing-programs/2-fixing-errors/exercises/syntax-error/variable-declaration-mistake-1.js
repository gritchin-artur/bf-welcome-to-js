// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  callstack: 
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: variable declaration, assignment and reassignment

  the mistake: incorrect variable reassignment 

  the fix(es): remove "let" on line 26
*/

// let tree = 'oak';

// let tree = 'birch';

let tree = 'oak';

tree = 'birch';
