'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: line 24

  life cycle: execution

  the mistake: The 'isValidUserName' variable is located after you have declared it.

  the fix(es): 'let isValidUserName' moove above the assign line
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
