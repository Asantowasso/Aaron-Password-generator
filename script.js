// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordlength = prompt("Enter 8-128");
  if (passwordlength < 8 || passwordlength > 128) {
    alert("The password is not acceptable");
    return null;
  }



  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var lowercase = confirm ("lowercase?");
var uppercase = confirm ("uppercase?");
var numeric = confirm ("numeric");
var special = confirm ("specialcharacters");

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if (lowercase === false && uppercase === false && numeric === false && special === false ){
  alert("The password is not acceptable");
    return null;
}



  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  // Present the user with criteria
  // Password length
  // What type of characters uppercase, lower, numbers, symbols
  // The created password follows the criteria

  return "A password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
