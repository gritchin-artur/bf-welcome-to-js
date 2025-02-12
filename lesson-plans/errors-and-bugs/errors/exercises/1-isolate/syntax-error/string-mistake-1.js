'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token

  location: 23

  life cycle: execution

  the mistake: one value located on separate lines

  the fix(es): moove part of the text localized on line 24 to line 23
*/

// const a = 'this is
// two lines';

const a = 'this is two lines';
