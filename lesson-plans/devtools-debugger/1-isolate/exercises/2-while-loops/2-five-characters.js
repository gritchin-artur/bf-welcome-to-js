'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let input1 = null;

let input2 = null;

while (input1 === null || input1 !== 'every') {
  input1 = prompt('enter "every":');

  if (input1 !== 'every') {
    alert("you need to enter 'every'!!!");
  }
}

while (input2 === null || input2 !== 'thing') {
  input2 = prompt('enter "thing":');

  if (input2 !== 'thing') {
    alert("you need to enter 'thing'!!!");
  }
}

let everything = input1 + input2;

let message = 'thank you for "' + everything + '"!';

alert(message);
