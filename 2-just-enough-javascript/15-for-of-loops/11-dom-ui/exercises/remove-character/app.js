import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('phrase');

  let character = readString('character');

  let output = '';

  // --- remove the character if there is only one ---

  if (character === '' || character.length > 1) {
    output = 'you can only skip one character at a time';
  } else {
    for (let char of text) {
      if (char !== character) {
        output += char;
      }
    }
  }
  // --- display the result ---

  displayString('filtered', output);
});
