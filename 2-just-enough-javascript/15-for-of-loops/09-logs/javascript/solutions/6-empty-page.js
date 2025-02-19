'use strict';

let language = 'JavaScript';

let logIt = '';

for (let letter of language) {
  if (letter === letter.toUpperCase()) {
    logIt += letter.toLocaleLowerCase();
  } else if (letter === letter.toLowerCase()) {
    logIt += letter.toUpperCase();
  }
}

console.log(logIt);
