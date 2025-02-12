'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: 25

  life cycle: execution

  the mistake: variable шы reassignув in еру wrong order

  the fix(es): swap "true" and "isHappy"
*/

// let isHappy = false;

// true = isHappy;

let isHappy = false;

isHappy = true;
