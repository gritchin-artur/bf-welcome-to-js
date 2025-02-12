import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side expression in prefix operation

  location: line 23

  life cycle: execution

  the mistake: the text inside the log should be a string

  the fix(es): put the text inside in a single quote
*/

whenFormDataChanges('input', () => {
  // console.log(--- form data changed ---);
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
