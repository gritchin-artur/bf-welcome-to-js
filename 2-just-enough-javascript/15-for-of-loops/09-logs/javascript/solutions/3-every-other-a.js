'use strict';

let language = ' j a v a s c r i p t';

let logIt = '';

for (let letter of language) {
  if (letter !== ' ') {
    logIt += letter;
  }
  console.log(logIt);
}
