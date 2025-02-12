'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Identifier 'tree' has already been declared

  location: line 22

  life cycle: execution

  the mistake: reassigning a variable, re-declaring it again

  the fix(es): delete let on line 22
*/

// let tree = 'oak';

// let tree = 'birch';

let tree = 'oak';

tree = 'birch';
