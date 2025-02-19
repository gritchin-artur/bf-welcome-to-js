'use strict';

let allowed = 'arvjstcpi';

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

for (let letter of jumble) {
  if (allowed.includes(letter)) {
    console.log(letter);
  }
}
