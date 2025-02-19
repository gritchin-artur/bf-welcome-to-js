'use strict';

let letters = 'a b c d ';

let revers = '';

let index = 0;
while (index < letters.length) {
  let el = letters.split('')[index];
  revers = el + revers;
  console.log(revers);
  index++;
}
