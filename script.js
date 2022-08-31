// Assignment Code
pswrdLength = 8;
var userArr = [];


var lowerArr = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=","?",];

var generateBtn = document.querySelector("#generate");




function generatePassword() {
 var password = "";
for (var i = 0; i < pswrdLength; i++){
 var randomChar = Math.floor(Math.random() * userArr.length);
 password = password + userArr[randomChar];
  }
  return password;
}

function getChoices(){
  userArr = [];
  pswrdLength = parseInt(prompt("Your password can be between 8-128 characters"));

  if(isNaN(pswrdLength) || pswrdLength < 8 || pswrdLength > 128) {
    alert ("entry must be a number between 8-128");
    return null;
  }
  if (confirm ("lowercase letters?")) {
    userArr = userArr.concat(lowerArr);
  }
  if (confirm ("uppercase letters?")) {
    userArr = userArr.concat(upperArr);
  }
  if (confirm ("Numbers in your password?")) {
    userArr = userArr.concat(numArr);
  }
  if (confirm ("Special characters in your password?")) {
    userArr = userArr.concat(specArr);
  }
  return true;
}
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  



  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected





  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  // Present the user with criteria
  // Password length
  // What type of characters uppercase, lower, numbers, symbols
  // The created password follows the criteria

 




// Write password to the #password input
function writePassword() {
  var acceptChoice = getChoices(); //This lets the generator know where to pull choices from
  var passwordText = document.querySelector("#password");
if(acceptChoice) {
  var yourpassword = generatePassword();
  passwordText.value = yourpassword;
} else {
  passwordText.value = "";
}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 