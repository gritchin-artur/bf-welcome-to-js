// #todo

'use strict';

/*
  modify the program so that short strings are not accepted
  if the user inputs a short string, they are prompted again
*/

// alert(
//   'enter many strings, they will be sorted by length.\n\n' +
//     'when you are done entering strings you can "cancel" or "escape"',
// );

// let shortStrings = 'short:';
// let mediumStrings = 'medium:';
// let longStrings = 'long:';

// while (true) {
//   const input = prompt('enter something');

//   if (input === null) {
//     break;
//   }

//   if (input.length < 5) {
//     shortStrings = shortStrings + '\n- "' + input + '"';
//   } else if (input.length < 10) {
//     mediumStrings = mediumStrings + '\n- "' + input + '"';
//   } else {
//     longStrings = longStrings + '\n- "' + input + '"';
//   }
// }

// alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let mediumStrings = 'medium:';
let longStrings = 'long:';

while (true) {
  const input = prompt('enter something');

  if (input === null) {
    break;
  }

  if (input.length < 5) {
    continue; // replaced to continue
  } else if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(mediumStrings + '\n\n' + longStrings); //removed shortStrings
