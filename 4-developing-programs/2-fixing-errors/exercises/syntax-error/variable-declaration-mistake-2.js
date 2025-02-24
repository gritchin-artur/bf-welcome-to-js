// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Missing initializer in const declaration

  callstack:     
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading by condition

  the mistake: incorrect variable declaration

  the fix(es): replace "const" to "let"
*/

// const userName = 'qopiznu';

// const path;

// if (userName.length > 4) {
//   path = 'if';
// } else {
//   path = 'else';
// }

// console.log(path);

const userName = 'qopiznu';

let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);
