// #todo

'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack:
     at <anonymous>:24:19
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: creation phase
  
  the mistake: variable "isValidUserName" used before declaration

  the fix(es): move line 32 to line 27
*/

// const userName = 'chiobin';
// console.log('userName:', typeof userName, userName);

// if (userName.length > 3) {
//   isValidUserName = true;
// }

// let isValidUserName;

// if (userName.length <= 3) {
//   isValidUserName = false;
// }

// console.log('isValidUserName:', typeof isValidUserName, isValidUserName);

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
