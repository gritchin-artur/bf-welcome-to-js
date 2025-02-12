'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected number

  location: line 25

  life cycle: execution

  the mistake: variable name cannot be a number

  the fix(es): change number to string
*/

// const 3 = 'three';
const three = 'three';
