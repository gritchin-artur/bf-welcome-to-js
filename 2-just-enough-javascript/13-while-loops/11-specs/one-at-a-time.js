// #todo

'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = prompt('Please enter some text:');

/* --- create final output --- */

while (output === null || output === '' || output.length > 1) {
  if (output === null) {
    alert('You must enter something!');
    output = prompt('Please enter some text:');
  } else if (output === '') {
    alert("You can't enter empty string!");
    output = prompt('Please enter some text:');
  } else if (output.length > 1) {
    alert('Your text is longer than 1 character!');
    output = prompt('Please enter some text:');
  }
}

output = prompt(`Great you enter "${output}"!`);

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
