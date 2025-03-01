// #todo

'use strict';

/* Different Environments

  when all goes well, the main JS environments will interpret your code (mostly) the same
  but when something goes wrong, they may report the error differently

  the examples in this chapter were all written using Chrome
  if you are using a different environment and get a slightly different message or line number
    it can still be correct!

  when describing your errors (for yourself, a classmate, a coach, on stackoverflow, ... )
    you should mention which environment you were using.
    - Chrome
    - Firefox
    - Node.js
    - ...

  This becomes even more important as you move through HYF and encounter more advanced JS

  you can now fill out this field of the error description:

*/

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token

  callstack:

  life cycle: 

  the mistake: missing left curly brace

  the fix(es): add left curly brace to the line 44
*/

// for (let i = 0; i < 5; i++)
//   console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
