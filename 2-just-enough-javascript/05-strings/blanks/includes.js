// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('hack')); // false
console.log('HackYourFuture'.includes('your')); // false
console.log('HackYourFuture'.includes('future')); // false

console.log('Good Bye'.includes(' Bye')); // true
console.log('1. Car'.includes('. Car')); // true
console.log('1 + 2'.includes('+')); // true

console.log(' hI'.includes('hi')); // false
console.log('r0ad'.includes('road')); // false
console.log('ima'.includes('Ima')); // false
