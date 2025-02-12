'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: 20

  life cycle: execution

  the mistake: reading a variable before it is declared

  the fix(es): move variable before line 21
*/

// console.log(tomatoes);

// let tomatoes = 'fresh';

let tomatoes = 'fresh';

console.log(tomatoes);
