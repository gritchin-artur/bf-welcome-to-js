// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal break statement

  callstack:
     at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: reading a variable

  the mistake: extra "break;" on line 28

  the fix(es): delete line 28
*/

// const userName = 'wingdoz';

// if (userName.length > 3) {
//   console.log(userName);
//   break;
// }

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
}
