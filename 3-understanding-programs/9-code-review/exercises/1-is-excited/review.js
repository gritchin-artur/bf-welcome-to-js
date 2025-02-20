'use strict';

/* ===== CODE REVIEW =====

  BEHAVIOR:
    TITLE:
      Checking if a string ends with an exclamation mark.
    
    DESCRIPTION:
      The program asks the user for a string, removes any trailing whitespace, and checks if it ends with '!'.
      It then displays a message indicating whether the string is "excited" or not.

    USER STORY:
      - The user enters a string.
      - The program removes any trailing spaces from the input.
      - The program checks if the last character is '!'.
      - The program outputs a message stating if the input is excited.

    TEST CASES:
      ✅ Excited strings:
        - 'hello!' → "hello!" is excited
        - 'hi! ' → "hi! " is excited
        - '!!!     ' → "!!!     " is excited
        - '!' → "!" is excited
        - '"!"' → "\"!\"" is excited
      
      ❌ Bored strings:
        - 'hello' → "hello" is not excited
        - 'hey? ' → "hey? " is not excited
        - '!!!  ? ' → "!!!  ? " is not excited
        - '' → "" is not excited

  GOALS:
    NAMES:
      - `input`: Stores the user's input.
      - `trimmedInput`: Stores the input with trailing spaces removed.
      - `isExcited`: Boolean flag indicating if the string is excited.
      - `message`: The final message displayed to the user.

    PROGRESSION:
      1. Get input from the user.
      2. Remove trailing whitespace.
      3. Check if the last character is '!'.
      4. Construct the output message.
      5. Display the result.

    DATA:
      - Input: A string (user-provided).
      - Output: A message displayed via `alert()`.

  COMMENTS:
    "WHY" not "WHAT":
      - Comments explain the reason behind each step rather than just describing what it does.

    QUANTITY/QUALITY:
      - Comments are concise, explaining each major step without unnecessary details.

  LINTING:
    - The code follows strict mode (`'use strict';`).
    - All variables are declared properly using `let` and `const`.
    - Proper indentation and spacing are maintained.
    - No unnecessary operations or variables are present.

  VARIABLES:
    LOCATION:
      - `input`: Declared at the beginning, modified in the loop.
      - `trimmedInput`, `isExcited`, `message`: Declared where they are needed.

    INITIAL VALUES:
      - `input = null` (waiting for user input).
      - Other variables are assigned values dynamically based on user input.

    ROLES:
      - `input`: Stores the user's original text.
      - `trimmedInput`: Holds the modified version with trailing spaces removed.
      - `isExcited`: A boolean that determines if the string is "excited".
      - `message`: The final output message.

    DOMAIN:
      - `input`: Can be any string or `null` (if the user cancels the prompt).
      - `trimmedInput`: Always a string (even if empty).
      - `isExcited`: Either `true` or `false`.
      - `message`: A string containing the final result.

    QUANTITY/QUALITY:
      - The number of variables is minimal and necessary.
      - Variables have clear and specific names.

  LOGS:
    TRACE:
      - The program runs in a straightforward sequence, with no complex branching.

    QUANTITY/QUALITY:
      - No explicit logging (`console.log()`), as output is handled via `alert()`.

  LOGIC:
    OPERATIONS:
      - `.trimEnd()` removes trailing spaces.
      - Checking the last character of the string determines excitement.
      - String concatenation is used for the final message.

    CONTROL FLOW:
      - A `while` loop ensures the user provides valid input.
      - An `if` statement determines excitement.
      - An `alert()` displays the result.
*/
