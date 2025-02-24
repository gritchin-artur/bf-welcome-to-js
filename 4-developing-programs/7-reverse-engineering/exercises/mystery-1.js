'use strict';

/* Has a cat

  A user can input some text and learn if it has "cat" in it (upper or lower case).
    - given the user cancels:
        they are prompted again
    - given their input does not have "cat" (in any case):
        they are told there is no dog
    - given their input does have a "cat" (in any case):
        they are told their input has at least one dog

  test cases:
    contains no dogs:
      ' '           ->   'no cats'
      'abc'         ->   'no cats'
      'market'      ->   'no cats'
    contains at one or more cats:
      'cat'         ->  'at least one cat'
      'CAT'         ->  'at least one cat'
      'cAt'         ->  'at least one cat'
      'gocato'      ->  'at least one cat'
      'GOCaTO'      ->  'at least one cat'
      'A fast cat.' ->  'at least one cat'

*/
