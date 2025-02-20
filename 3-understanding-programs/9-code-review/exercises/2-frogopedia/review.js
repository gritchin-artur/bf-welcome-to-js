'use strict';

/* ===== CODE REVIEW =====

  BEHAVIOR:
    TITLE:
      Frog Information Collector

    DESCRIPTION:
      The program continuously prompts the user to enter a fact about frogs.
      - If the user provides an empty input or cancels, they are prompted again.
      - If the input does not contain the word "frog" (case insensitive), the user is informed and prompted again.
      - If the input contains the word "frog", the user is thanked for the information, and the loop ends.

    USER STORY:
      - The user is asked to provide information about frogs.
      - The program checks whether the input contains the word "frog".
      - If the input is valid (contains "frog"), the user is thanked.
      - If the input is invalid (empty or does not contain "frog"), the user is prompted again.

    TEST CASES:
      ✅ Valid inputs (contain 'frog'):
        - 'aFrogJumpsFast' → "thank you ..."
        - 'ASDFROGHJKL' → "thank you ..."
        - 'frogs frog froggily' → "thank you ..."

      ❌ Invalid inputs (do not contain 'frog'):
        - '' → "that is not something"
        - 'frrog' → "nope, not about frogs. try again."
        - 'toad' → "nope, not about frogs. try again."

  GOALS:
    NAMES:
      - `animalName`: Stores the keyword to search for in user input.
      - `userInput`: Holds the text entered by the user.
      - `isValid`: Flag to determine if the input meets the criteria.

    PROGRESSION:
      1. Prompt the user for input.
      2. Check if input is empty or null.
      3. Convert input to lowercase for case-insensitive comparison.
      4. Verify if the input contains "frog".
      5. If valid, thank the user and exit.
      6. If invalid, prompt the user again.

    DATA:
      - Input: A string (user-provided).
      - Output: A message displayed via `alert()`.

  COMMENTS:
    "WHY" not "WHAT":
      - Explains why validation is performed instead of just describing what it does.

    QUANTITY/QUALITY:
      - Comments are clear, relevant, and avoid redundancy.

  LINTING:
    - The code follows strict mode (`'use strict';`).
    - Proper variable naming conventions are used.
    - Correct indentation and spacing.

  VARIABLES:
    LOCATION:
      - `animalName`: Declared at the beginning and remains constant.
      - `userInput`: Declared at the beginning and modified in the loop.
      - `isValid`: Declared before the loop and updated based on conditions.

    INITIAL VALUES:
      - `animalName = 'frog'` (constant).
      - `userInput = ''` (waiting for user input).
      - `isValid = false` (ensures loop execution).

    ROLES:
      - `animalName`: Stores the search keyword.
      - `userInput`: Holds user input and updates dynamically.
      - `isValid`: Controls the loop execution.

    DOMAIN:
      - `userInput`: Can be any string or `null`.
      - `isValid`: Boolean flag (`true` or `false`).

    QUANTITY/QUALITY:
      - Minimal necessary variables, each with a clear purpose.

  LOGS:
    TRACE:
      - The program executes sequentially with validation at each step.

    QUANTITY/QUALITY:
      - No explicit logging (`console.log()`), only user-facing alerts.

  LOGIC:
    OPERATIONS:
      - `.toLowerCase()` ensures case-insensitive comparison.
      - `.includes(animalName)` checks if "frog" exists in the input.

    CONTROL FLOW:
      - A `while` loop ensures user provides valid input.
      - `if` statements handle input validation and error handling.
      - `continue` is used to retry input collection if necessary.
*/
