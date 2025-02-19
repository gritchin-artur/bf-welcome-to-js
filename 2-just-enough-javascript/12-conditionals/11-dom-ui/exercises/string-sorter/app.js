import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let a = readString('string-a');
  let b = readString('string-b');

  // --- sort them input by length ---

  let sort = '';

  if (a.length === b.length) {
    sort = `${a} \n ${b}`;
  } else if (a.length < b.length) {
    sort = `${a}, ${b}`;
  } else {
    sort = `${b}, ${a}`;
  }

  // --- display the sorted strings ---
  console.log(sort);
  displayString('secret-solution', sort);
});
