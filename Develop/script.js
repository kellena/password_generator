// Assignment Code
var generateBtn = document.querySelector("#generate");

// added variable arrays for user prompts

var passwordLength = parseInt()
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = []
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function generatePassword() {
  // return generated password
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
}else if (passwordLength > 128) {
  alert("Please enter a password that's fewer than 128 characters.")
}

// 1) create variables to save user input from prompts
//    -passwordLength (string into integer?)
//    -specialCharacters (boolean)
//    -numericCharacters (boolean)
//    -uppercaseCharacters (boolean)
//    -lowercaseCharacters (boolean)
//    -alert, confirm, prompt
//    --use conditionals to validate inputs (min characters 8, max characters 128, no inputs)
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
