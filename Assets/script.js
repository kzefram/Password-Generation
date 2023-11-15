// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&";

  var password ="";

  for (var i = 0; i > 9; i++); {
    const randomNum = Math.floor(Math.random() * charset.length);
    password += charset[randomNum];
    document.write(passwordText)
  }
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
