import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let input = readString('pyramid-bricks');

  let temp = '';

  let output = '\n';

  // --- build a pyramid ---

  for (let char of input) {
    temp += char;
    output += temp + '\n';
  }

  // --- display the pyramid ---

  displayString('out', output);
});
