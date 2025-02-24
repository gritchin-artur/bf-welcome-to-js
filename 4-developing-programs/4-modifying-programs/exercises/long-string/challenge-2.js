// #todo

'use strict';

/*
  modify this program so it checks that user input is SHORTER than a specific limit.

  you can do this with 1 change in the logic, and some changes in the prompt/alert text
*/

const limit = 5;

let phrase = '';

let longEnough = false;
while (!longEnough) {
  phrase = prompt('enter anything longer than ' + limit + ' characters');

  if (phrase === null) {
    alert('there is no escape');
  } else if (phrase.length <= limit) {
    longEnough = true; // swap "alert('too short');" to "longEnough = true;"
  } else {
    alert('too long'); // swap "longEnough = true;" to "alert('too long');"
  }
}

alert('"' + phrase + '" is ' + phrase.length + ' characters shorter'); //replaced shorter to longer
