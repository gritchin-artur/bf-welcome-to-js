'use strict';

/* ===== CODE REVIEW =====

  BEHAVIOR:
    TITLE:
      Has a Vowel

    DESCRIPTION:
      The program checks whether the user-provided input contains at least one vowel.
      - If the user cancels the prompt, they are asked again.
      - The program scans the input for any vowel (case insensitive).
      - If a vowel is found, a success message is displayed.
      - If no vowels are found, a failure message is displayed.

    USER STORY:
      - The user is prompted to enter a text.
      - The program verifies if the text contains at least one vowel.
      - If a vowel is found, a confirmation message appears.
      - If no vowels are found, an alert notifies the user.

    TEST CASES:
      ✅ Valid inputs (contain vowels):
        - 'hello' → "hello has at least one vowel"
        - 'skyline' → "skyline has at least one vowel"
        - 'AEIOU' → "AEIOU has at least one vowel"

      ❌ Invalid inputs (do not contain vowels):
        - 'rhythm' → "rhythm has no vowels"
        - 'bcdfg' → "bcdfg has no vowels"
        - '' → " has no vowels"

  GOALS:
    NAMES:
      - `characters`: Stores the user-provided text.
      - `vowels`: Holds the list of vowels to check against.
      - `hasAVowel`: Flag indicating if a vowel was found.

    PROGRESSION:
      1. Prompt the user for input.
      2. Validate if input is not null.
      3. Iterate through input characters and check for vowels.
      4. If a vowel is found, stop searching.
      5. Display the appropriate message based on the result.

    DATA:
      - Input: A string (user-provided).
      - Output: A message displayed via `alert()`.

  COMMENTS:
    "WHY" not "WHAT":
      - Explains why the loop breaks upon finding a vowel.
      - Clarifies why `continue` is used to skip non-vowel characters.

    QUANTITY/QUALITY:
      - Clear and minimal comments, avoiding redundancy.

  LINTING:
    - Uses `'use strict';` to enforce best practices.
    - Replaces `var` with `let` and `const` for proper scoping.
    - Uses strict equality (`===` instead of `==`).

  VARIABLES:
    LOCATION:
      - `characters`: Declared at the beginning, assigned user input.
      - `vowels`: Defined once as a constant.
      - `hasAVowel`: Declared before iteration, modified within the loop.

    INITIAL VALUES:
      - `characters = null` (ensures prompt runs).
      - `vowels = 'aeiouAEIOU'` (constant reference).
      - `hasAVowel = false` (assumes no vowels until proven otherwise).

    ROLES:
      - `characters`: Holds the user-provided text.
      - `vowels`: Defines the set of characters to check against.
      - `hasAVowel`: Tracks if at least one vowel exists.

    DOMAIN:
      - `characters`: Any string input from the user.
      - `hasAVowel`: Boolean (`true` if a vowel is found, `false` otherwise).

    QUANTITY/QUALITY:
      - Uses only necessary variables, each serving a clear purpose.

  LOGS:
    TRACE:
      - The program follows a linear flow: prompt → check → alert.

    QUANTITY/QUALITY:
      - No console logging (`console.log()`), only user-facing alerts.

  LOGIC:
    OPERATIONS:
      - `.includes(char)` checks if a character is a vowel.
      - Loop iterates over each character in the string.

    CONTROL FLOW:
      - `while` ensures a valid input is received.
      - `for` loop scans the input for vowels.
      - `if` statement determines when to exit the loop.
*/
