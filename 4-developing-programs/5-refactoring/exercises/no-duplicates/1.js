// #todo

'use strict';

/*
  refactor this program so the final message is stored in a separate variable
  alert the final message after the conditional statement
*/

let mayHaveDuplicates = null;
while (mayHaveDuplicates === null) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
}

let hasNoDuplicates = '';
for (let char of mayHaveDuplicates) {
  let isDuplicate = hasNoDuplicates.includes(char);
  if (isDuplicate) {
    break;
  }
  hasNoDuplicates = hasNoDuplicates + char;
}

let message = ''; // created variable "message"

if (hasNoDuplicates.length === mayHaveDuplicates.length) {
  message = 'well done!'; // replace "alert" to reassign "message"
} else {
  message = 'too bad, try again'; // replace "alert" to reassign "message"
}

alert(message); // created "alert"
