'use strict';

let letters = ' a b c d';

let characters = '';

let index = 0;
while (index < letters.length) {
  let el = letters.split('')[index];
  characters = characters + '(' + el + ')';
  console.log(characters);
  index++;
}
