// #todo

'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING: 'JavaScript'
      EXPECT: 'you entered "JavaScript"'
      ACTUAL: nothing

    TRY: 
    - Check if the input is being correctly assigned to the variable
    - Verify the condition in the loop
    - Print debugging messages to track execution

    PREDICT:
     - The input should be stored in `message` and displayed in the alert

    IT DID:
     - The loop continued indefinitely without exiting, so the message was never shown

    EXPLAIN:
      - The condition checking for empty input was incorrect
      - The `break` statement was missing for valid input, causing an infinite loop

  --- lessons learned ---


*/

// let message = 'you entered "';

// while (true) {
//   const input = prompt('enter something');

//   if (input === null && input.length === 0) {
//     message = input + '"';
//     break;
//   }
// }

// alert(message);

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null || input.length === 0) {
    continue;
  }

  message += input + '"';
  break;
}

alert(message);
