// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal continue statement: no surrounding iteration statement

  callstack: 
     at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: read a variable

  the mistake: incorrect use of the operator "continue;" on line 28

  the fix(es): delete line 28
*/

// const userName = 'wingdoz';

// if (userName.length > 3) {
//   console.log(userName);
//   continue;
// }

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
}
