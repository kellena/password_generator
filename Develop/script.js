// Assignment Code
var generateBtn = document.querySelector("#generate");

// added variable arrays for user prompts
var password = []
// declared charChoices in global scope to be concated upon
var charChoices 
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"]
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// created function to generate a random password
function generatePassword() {
  var passwordLength
  passwordLength = prompt("Please enter a password length.")
  var lengthNumber = parseInt(passwordLength)
  var includeNumber = confirm("Would you like numbers to be included?"); 
  var includeSpecial = confirm("Would you like special characters to be included?");
  var includeUppercase = confirm("Would you like uppercase characters to be included?");
  var includeLowercase = confirm("Would you like lowercase characters to be included?");

   if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.")
    return null
  }

  // if all are not included
  if(!includeLowercase && !includeUppercase && !includeSpecial && !includeNumber) {
    alert("Password must have at least one set of characters!")
    return null
  }

  // if all are included
  else if (includeNumber && includeSpecial && includeUppercase && includeLowercase) {
    charChoices = numeric.concat(specialCharacters, uppercaseCharacters, lowercaseCharacters)
  }

  // if three are included
  else if (includeNumber && includeSpecial && includeUppercase && !includeLowercase) {
    charChoices = numeric.concat(specialCharacters, uppercaseCharacters);
  } else if (includeNumber && includeSpecial && !includeUppercase && includeLowercase) {
    charChoices = numeric.concat(specialCharacters, lowercaseCharacters);
  } else if (includeNumber && !includeSpecial && includeUppercase && includeLowercase) {
    charChoices = numeric.concat(uppercaseCharacters, lowercaseCharacters);
  } else if (!includeNumber && includeSpecial && includeUppercase && includeLowercase) {
    charChoices = specialCharacters.concat(uppercaseCharacters, lowercaseCharacters);
  }

  // if two are included
  else if (includeNumber && includeSpecial && !includeUppercase && !includeLowercase) {
    charChoices = numeric.concat(specialCharacters);
  } else if (includeNumber && !includeSpecial && !includeUppercase && includeLowercase) {
    charChoices = numeric.concat(lowercaseCharacters);
  } else if (includeNumber && !includeSpecial && includeUppercase && !includeLowercase) {
    charChoices = numeric.concat(uppercaseCharacters);
  } else if (!includeNumber && includeSpecial && !includeUppercase && includeLowercase) {
    charChoices = specialCharacters.concat(lowercaseCharacters);
  } else if (!includeNumber && includeSpecial && includeUppercase && !includeLowercase) {
    charChoices = specialCharacters.concat(uppercaseCharacters);
  } else if (!includeNumber && !includeSpecial && includeUppercase && includeLowercase) {
    charChoices = uppercaseCharacters.concat(lowercaseCharacters);
  }

  // if one is included
  else if (includeNumber) {
    charChoices = numeric;
  } else if (includeSpecial) {
    charChoices = specialCharacters
  } else if (includeUppercase) {
    charChoices = uppercaseCharacters
  } else if (includeLowercase) {
    charChoices = lowercaseCharacters
  }

  console.log(charChoices)

  // for loop executing random number (changed to full array from empty "password" array)
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = charChoices[Math.floor(Math.random() * charChoices.length)];
    password.push(randomNumber);
   }
  
  var pw = password.join("")
  console.log(pw)
  return pw
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 1) create variables to save user input from prompts
//    -passwordLength (string into integer?)
//    -specialCharacters (boolean)
//    -numericCharacters (boolean)
//    -uppercaseCharacters (boolean)
//    -lowercaseCharacters (boolean)
//    -alert, confirm, prompt
//    --use conditionals to validate inputs (min characters 8, max characters 128)
//    --"if array is true, push at least one character, if false, don't push character"
//    --start with one variable, copy paste format for rest

// 2) create arrays for each type of password character
//    -specialCharacters, uppercase, lowercase, numeric

// 3) use randomizer function to select characters from each array 

// 4) generatePassword function - takes user input, grab characters from array, generate password

// 5) create an empty array that represents the final password

// 6) join the character arrays together based on user input

// 7) randomize characters from the joined arrays
//    -generate password function pushes at LEAST one character from each array

// 8) transform newly generated array into a string
//    -join them
