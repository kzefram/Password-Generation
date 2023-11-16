// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var symbols = "!@#$%&*";
  var length = 12;
  
  let lowerAnswer = prompt("Would you like lowercase letters?");
  let upperAnswer = prompt("Would you like uppercase letters? ");
  let numAnswer = prompt("Would you like numbers? ");
  let symbolsAnswer = prompt("Would you like symbols? ");



};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var password ="";
  
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
