// #todo

'use strict';

/*
  environment: Chrome

  name: TypeError
  message: Cannot read properties of null (reading 'length')

  callstack:
      at <anonymous>:22:23
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading variable length

  the mistake: variable value 'null'

  the fix(es): replace the value of variable for example "string"
*/

// const userInput = null;

// console.log(userInput.length);

const userInput = 'string';

console.log(userInput.length);
