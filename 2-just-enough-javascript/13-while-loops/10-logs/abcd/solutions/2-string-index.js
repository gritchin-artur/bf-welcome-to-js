'use strict';

let letters = 'abcd';

let characters = '';

let index = 0;

while (index <= letters.length - 1) {
  let el = letters.split('')[index];
  characters = characters + el;
  console.log(characters);
  index++;
}
