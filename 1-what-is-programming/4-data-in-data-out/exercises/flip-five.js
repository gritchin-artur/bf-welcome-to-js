'use strict';

/* Flip Five

  Data In: enter text long 5 characters 


  Data Out: if write the less then 5 characters, you will receive 'nope, try again.' message, if everything ok you will receive mirror text


  Test Cases: 
  '12345' -> '54321'
  '123' -> 'nope, try again.'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
