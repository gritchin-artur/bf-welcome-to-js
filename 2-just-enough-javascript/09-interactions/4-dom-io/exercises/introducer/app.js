// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let first = readString('fn');

  let last = readString('ln');

  // --- create a message ---

  let greeting = `Hello, ${first} ${last} .`;

  // --- display the message ---

  displayString('secret-solution', greeting);
});
