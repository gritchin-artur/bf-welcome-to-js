// #todo

'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected string

  callstack:
      at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: variable declarationans assignment

  the mistake: misuse quotation marks

  the fix(es): wrap the value in double quotes
*/

// const quotesInQuotes = 'remind yourself ''i can do this!'' at least once a day';

const quotesInQuotes = "remind yourself ''i can do this!'' at least once a day";
