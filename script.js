// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  //prompt boxes to get password criteria. Placed within the generatePassword() function to be called first
  var lengthInput = prompt("How many characters long do you want the password to be? Choose between 8 and 128 charcters");
  var includeLowerCase = confirm("Include Lowercase letters? Click ok to include, click cancel to not include");
  var includeUpperCase = confirm("Include Uppercase letters? Click ok to include, click cancel to not include");
  var includeNumber = confirm("Include numbers? Click ok to include, click cancel to not include");
  var includeSpecialChar = confirm("Include Special Characters? Click ok to include, click cancel to not include");



//declare variables with all possible options for lowercase letters, uppercase letters, numbers and special characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "!@#$%^&*(){}[]=<>/,.|~?";
var passwordLength = parseInt(lengthInput); //transform password lenght input into integar value


//Declare variable for all possible charactersa to draw from for password generation
//for each password criteria response, if user response = true, add to characters array, if false don't include
var characters = 
(includeLowerCase === true) ? characters += lowerCase : '';
(includeUpperCase === true) ? characters += upperCase : '';
(includeNumber === true) ? characters += num : '';
(includeSpecialChar === true) ? characters += specialChar : '';

//initialze variable to hold generated password
  var pwd = "";

  //for loop to add random character from characters array to pwd varible till choosen password lenght is reached
  for(var i = 0; i<passwordLength; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

