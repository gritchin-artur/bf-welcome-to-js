// #todo

'use strict';

/*
  modify this program so it uses .toLowerCase to check for consonants

  you can do this by changing the name of one variable, one string, and a conditional check
    and of course the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'; // replaced vowles to consonants

let hasAVowel = false;
for (const char of characters) {
  if (consonants.toLowerCase().includes(char)) {
    // replaced vowles to consonants
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one consonants'); // replaced vowles to consonants
} else {
  alert('"' + characters + '" has no consonants'); // replaced vowles to consonants
}
