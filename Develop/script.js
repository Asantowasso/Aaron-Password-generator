
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var chars= "0123456789abcdefghifklmonpqrstuvwxyz!@#$%^&*()ABCDEFHGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 12
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
}


  writePassword.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


