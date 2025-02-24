// #todo

'use strict';

/*
  modify the program so it searches for "A" or "a"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction

  looking for a challenge?
    tell the user whether their input has "a" or "A"
*/

// const userInput = prompt('please enter something with an "a" in it');

// let reaction;
// if (userInput === null || userInput === '') {
//   reaction = 'nothing!  why !!! ??? !!!';
// } else if (userInput.includes('a')) {
//   reaction = '"' + userInput + '" is perfect!';
// } else {
//   reaction = '"' + userInput + '" has no "a" in it';
// }

// alert(reaction);

const userInput = prompt('please enter something with an "A" or "a" in it'); //added "A"

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('a' || 'A')) {
  // added condition and "A"
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "A" or "a" in it'; //added "A"
}

alert(reaction);
