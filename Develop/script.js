// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "password";
}

function indexRandomizer() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (passwordLength < 8) {
  alert("Please enter a password that's at least 8 chracters.")
}

// 1) create variables to save user input from prompts
//    -passwordLength (string into integer?)
//    -specialCharacters (boolean)
//    -numericCharacters (boolean)
//    -uppercaseCharacters (boolean)
//    -lowercaseCharacters (boolean)
//    -alert, confirm, prompt
//    --use conditionals to validate inputs (min characters, max characters, no inputs)
//    --"if array is true, push at least one character, if false, don't push character"
//    --start with one variable, copy paste format for rest

// 2) create an arrays for each type of password character
//    -specialCharacters, uppercase, lowercase, numeric

// 3) use randomizer function to select characters from each array

// 4) generatePassword function - takes user input, grab characters from array, generate password

// 5) create an empty array that represents the final password

// 6) join the character arrays together based on user input

// 7) randomize characters from the joined arrays
//    -generate password function pushes at LEAST one character from each array

// 8) transform newly generated array into a string
//    -join them
