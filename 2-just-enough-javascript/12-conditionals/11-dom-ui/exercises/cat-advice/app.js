import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let cats = readBoolean('likes-cats');
  let allergic = readBoolean('is-allergic');
  let owns = readBoolean('owns-one');

  // --- generate good advice ---

  let advice = '';

  if (cats && allergic && owns) {
    advice = 'make a friend who has a cat';
  } else if (cats && allergic) {
    advice = 'make a friend who has a cat';
  } else if (allergic && owns) {
    advice = 'rethink your life choices';
  } else if (cats) {
    advice = 'get a cat';
  } else if (allergic) {
    advice = 'you are doing great';
  } else {
    advice = 'you could be doing worse';
  }

  // --- display advice for the user ---

  displayString('secret-solution', advice);
});
