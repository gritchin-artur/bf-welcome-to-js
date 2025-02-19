// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let first = readString('first');

  let last = readString('last');

  // --- create a greeting ---

  let greeting = `Hello, ${first} ${last} .`;

  // --- display the greeting ---

  displayString('secret-solution', greeting);
});
