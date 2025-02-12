'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected string

  location: line 23

  life cycle: execution

  the mistake: using three separate parts of text in with one value

  the fix(es): use " " to separate "i can do this!"
*/

// const quotesInQuotes = 'remind yourself ''i can do this!'' at least once a day';

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
