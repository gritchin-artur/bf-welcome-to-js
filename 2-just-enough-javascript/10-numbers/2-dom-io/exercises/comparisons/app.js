// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let left = readNumber('left-num');

  let right = readNumber('right-num');

  // --- compare the numbers ---

  let compare = '';
  compare += `${left} > ${right} ----> ${left > right}\n`;
  compare += `${left} >= ${right} ---> ${left >= right}\n`;
  compare += `${left} === ${right} --> ${left === right}\n`;
  compare += `${left} <= ${right} ---> ${left <= right}\n`;
  compare += `${left} < ${right} ----> ${left < right}\n`;

  // --- create a message

  // --- display the message ---

  displayString('secret-solution', compare);
});
