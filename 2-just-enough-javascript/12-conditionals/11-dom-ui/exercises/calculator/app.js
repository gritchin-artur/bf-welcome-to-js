import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('inputs', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('left');
  let right = readNumber('rigth');

  let operator = readString('operator');

  // --- calculate the result ---

  let calculate = `${left} ${operator} ${right}`;

  let result = `\$ ${eval(calculate)}`;

  // --- display the result ---

  displayString('secret-solution', result);
});
