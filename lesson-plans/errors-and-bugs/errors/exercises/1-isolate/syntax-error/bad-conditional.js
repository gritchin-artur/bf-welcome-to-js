'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected token

  location: 27

  life cycle: execution

  the mistake: skipped 'if' after 'else' on line 27

  the fix(es): add 'if' after 'else' on line 27
*/

// let userName = 'indrogo';

// if (userName.length < 3) {
//   console.log('too short');
// } else (userName.length < 5) {
//   console.log('just right');
// } else {
//   console.log('too long');
// }

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
