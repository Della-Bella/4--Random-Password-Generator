# Simple Password Generator - Learning Project

This project is a basic password generator built while learning fundamental JavaScript concepts. It creates random passwords and includes a copy-to-clipboard feature.

## Key Things Learned:

1.  **Connecting JavaScript to HTML:**
    *   Learned to use `document.getElementById("some-id")` to get access to specific HTML elements (like the input box where the password appears). This lets our JavaScript code interact with the webpage.

2.  **Setting Up Character Choices:**
    *   Defined different sets of characters (uppercase letters, lowercase letters, numbers, symbols) as simple strings.
    *   Combined these into one big string (`allChars`) to easily pick any random character later.

3.  **Generating Randomness:**
    *   Used `Math.random()` to get a random decimal number between 0 and 1.
    *   Used `Math.floor()` to round that number *down* to get a whole number.
    *   Used this random whole number as an *index* (position number) to pick a random character from our strings (e.g., `upperCase[randomIndex]`).

4.  **Building the Password:**
    *   Started with an empty `password` string.
    *   **Ensured Variety:** Added *one* random character from each required set (uppercase, lowercase, number, symbol) first.
    *   **Reached Desired Length:** Used a `while` loop (`while (length > password.length)`) to keep adding more random characters (picked from the `allChars` string) until the password was long enough (based on the `length` variable).

5.  **Displaying the Result:**
    *   Updated the `value` of the HTML input box (`passwordBox.value = password;`) to show the generated password on the screen.

6.  **Copying to Clipboard:**
    *   Created a `copyPassword` function.
    *   Inside the function, used `passwordBox.select()` to highlight the text in the input box.
    *   Used `document.execCommand("copy")` (a simple browser command) to copy the selected text so the user can paste it elsewhere.

This project was a great way to practice working with HTML elements, strings, loops, and random number generation in JavaScript!
