'use strict';

let language = 'j a v a s c r i p t ';

let logIt = '';

let spases = 0;

// do it

for (let letter of language) {
  if (letter === ' ') {
    spases++;
  } else {
    logIt += letter;
  }
}

let description = `${language} have ${spases} spases!`;

console.log(description);
