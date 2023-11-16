// Karen Bourgeois
// Module 3 Challenge


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*abcdefghijklmnopqrstuvwxyz";
  
  let lengthAnswer = prompt("How many characters would you like? 8 - 128 ")
  let password = "";

  for (var i = 0; i < lengthAnswer; i++) {
    var randomnum = Math.floor(Math.random() * charset.length);
    var generate = charset.substring(randomnum, randomnum +1);
    password += generate;
  }

return password;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  

  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
