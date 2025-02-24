// #todo

'use strict';

/*
  modify this program so it only checks for consonants

  you can do this by changing one string, renaming a variable and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = false;
for (const char of characters) {
  if (!vowels.includes(char)) {
    // aded "!"
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one consonants'); // replased vowles to consonants
} else {
  alert('"' + characters + '" has no consonants'); // replased vowles to consonants
}
