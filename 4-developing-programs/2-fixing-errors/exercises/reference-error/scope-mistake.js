// #todo

'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: isValidUserName is not defined

  callstack:
    at <anonymous>:29:57
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading variable

  the mistake: the variable "isValidUserName" was used incorrectly

  the fix(es): declare variable "isValidUserName" at the line 27 and delete const at the lines 29 and 31
*/

// const userName = 'chiobin';
// console.log('userName:', typeof userName, userName);

// if (userName.length > 4) {
//   const isValidUserName = true;
// } else {
//   const isValidUserName = false;
// }

// console.log('isValidUserName:', typeof isValidUserName, isValidUserName);

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 4) {
  isValidUserName = true;
} else {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
