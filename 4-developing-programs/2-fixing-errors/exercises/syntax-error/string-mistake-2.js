// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected identifier 

  callstack:
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: element creation

  the mistake: incorrect use of quotes

  the fix(es): wrap 'anchorName' in single quote
*/

// const anchorName = '#Home';

// const innerHtml = "<p>Click here to <a href="anchorName">go home</a></p>";

const anchorName = '#Home';

const innerHtml = "<p>Click here to <a href='anchorName'>go home</a></p>";
