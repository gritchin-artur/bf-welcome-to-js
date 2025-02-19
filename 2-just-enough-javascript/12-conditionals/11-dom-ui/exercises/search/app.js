import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let does = readString('text');
  let include = readString('query');
  let sensitive = readBoolean('sensitive');

  // --- do the search ---

  let result = '';

  if (!sensitive && does.toLowerCase().includes(include.toLowerCase())) {
    result = 'yes';
  } else if (sensitive && does.includes(include)) {
    result = 'yes';
  } else {
    result = 'no';
  }
  // --- display the search results ---
  console.log(result);
  displayString('secret-solution', result);
});
