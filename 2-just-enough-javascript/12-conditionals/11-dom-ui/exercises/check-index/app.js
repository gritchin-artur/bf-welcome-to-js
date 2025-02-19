import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('text');
  let character = readString('character');
  let i = readNumber('i');

  // --- check the index ---

  let check = '';

  if ((text && !character) || (text && !character)) {
    check = 'oops!  you entered fewer than one character';
  } else {
    check = 'no';
  }

  // --- display the search results ---

  displayString('secret-solution', check);
});
