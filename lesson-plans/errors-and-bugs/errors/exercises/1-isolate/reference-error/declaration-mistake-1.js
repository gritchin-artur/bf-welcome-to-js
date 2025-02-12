'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: welf is not defined

  location: line 20

  life cycle: execution

  the mistake: variable is not declare

  the fix(es): declare a variable
*/

// welf = 'ingrad';

// console.log(welf);

let welf = 'ingrad';

console.log(welf);
