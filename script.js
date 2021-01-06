// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//Add event listener to execute writePassword function when button is clicked

//When writePassword executes, first execute nested function generatePassword()
//generatePassword will start series of prompt/confirm boxes
// first prompt: Required lenght of password (minimum 8 and max 128 characters)
// second confirm box: Do you want to use upperCase letters? yes or no
//third confirm box: Do you want to use lowerCase letters? yes or no
//fourth confirm box: Do you want to use numbers? yes or no
//fifth confirm box: Do you want to use special characters? yes or no

//validate input from prompt/confirm boxes

//start function that will take selected input types to generate a password

//When password has been generated, display it in the textbox (id = "password")


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



