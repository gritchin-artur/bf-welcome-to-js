import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('to-mirror');

  let mirrored = '';

  let output = '';

  // --- mirror the text ---

  for (let char of text) {
    mirrored = char + mirrored;
  }

  output = `${input} | ${mirrored}`;

  // --- display the result ---

  displayString('secret-solution', output);
});
