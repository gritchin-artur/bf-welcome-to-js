'use strict';

let text = prompt('enter text up to 10 characters!:');
let characters = '';
let result = '';
let index = 0;

while (index < text.length) {
  let el = text.split('')[index];
  characters = index === 0 ? el : '-'.repeat(index + 1) + el;
  result += characters + '\n';
  index++;
}

alert(result);
