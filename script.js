// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var concatArray = [];

  var passwordLength = window.prompt ("How long would you like the password to be? (8 to 128 characters)")
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Please retry a number from 8 to 128");
    return
  } 

  var lowercase = window.confirm ("Would you like to include lowercase letters in your password?") 
  console.log(lowercase); 
  if (lowercase) {
    concatArray = concatArray.concat(lowercaseLetters)
  }

  var uppercase = window.confirm ("Would you like to include uppercase letters in your password?")
  console.log(uppercase);
  if (uppercase) {
    concatArray = concatArray.concat(uppercaseLetters)
  }

  var numeric = window.confirm ("Would you like to include numbers in your password?")
  console.log(numeric);
  if (numeric) {
    concatArray = concatArray.concat(numerical)
  }

  var specialCharacters = window.confirm ("Would you like to include special characters in your password?")
  console.log(specialCharacters); 
  if (specialCharacters) {
    concatArray = concatArray.concat(specialsC)
  }

  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    window.alert ("Please select to use at least one of the previous character types to use before continuing");
    return
  }

  var passWordRandom = ""
for (var i = 0; i < passwordLength; i++) {
  var randomArrayCharacter = Math.floor(Math.random() * concatArray.length)
  passWordRandom = concatArray[randomArrayCharacter] + passWordRandom
} return passWordRandom; 

};

// Write password to the #password input
var uppercaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var numerical = ['0','1','2','3','4','5','6','7','8','9']
var specialsC = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','"',"'",',','<','.','>','/','?','|']



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
