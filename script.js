

// 1- Get references to the HTML elements we need to interact with.
//Why: We can't manipulate elements (change input value, 
// listen for button clicks) if we don't have a way to refer to them in our code. 

const passwordBox= document.getElementById("password");



//const imgCopy = document.getElementById("imgcopy");
//const generateBtn = document.getElementById("generatebtn");

// 2-  Defining the characters
// Goal: Specify all the possible characters that can be in the password.
//Action: Create variables(strings are fine) holding different character sets.

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number= "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";
const length = 12; // Or whatever length you want

//3- Create the core logic that actually builds a random password.

const allChars= upperCase+ lowerCase+ number +symbol;
function createPassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
     //password + .... It means "append the value on the right to the end of the current password string".
    //Math.random(): This generates a random decimal number between 0 (inclusive) and 1 (exclusive). Example: 0.74829...
    //Math.floor(...): This rounds the result down to the nearest whole number(integer).Example: Math.floor(19.455...) becomes 19. This gives us a valid random index(from 0 to 25)
    password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length> password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    } 
    passwordBox.value= password; createPassword()
}
//while: This keyword starts a loop. The code inside the curly braces {...} will repeat as long as the condition in the parentheses (...) is true.

//length > password.length: This is the condition.It checks if the value of the length variable(which needs to be defined outside this function, e.g., const length = 12;) is greater than the current number of characters in our password string.



// 5-  The Copy Feature (Function)
//Goal: Create the logic to copy the text currently in the password display field.
//Action: Define a function, let's call it copyPassword.


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}







