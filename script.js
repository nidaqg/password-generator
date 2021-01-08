// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//function called to actually determine the password based on user chosen criteria
function generatePassword() {

  //prompt and confirm boxes to get password criteria. Placed within the generatePassword() function to be called first
  var lengthInput = prompt("How many characters long do you want the password to be? Choose between 8 and 128 characters");
  var passwordLength = parseInt(lengthInput); //transform password lenght input into integar value
//if statement to check validity of password length input
if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)  {
  alert("invalid password input or length, try again!");
} else {
  var includeLowerCase = confirm("Include Lowercase letters? Click ok to include, click cancel to not include");
  var includeUpperCase = confirm("Include Uppercase letters? Click ok to include, click cancel to not include");
  var includeNumber = confirm("Include numbers? Click ok to include, click cancel to not include");
  var includeSpecialChar = confirm("Include Special Characters? Click ok to include, click cancel to not include");



  //declare variables with all possible options for lowercase letters, uppercase letters, numbers and special characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var specialChar = "!@#$%^&*(){}[]=<>/,.|~?";




  //use if statement to return alert box in case no criteria is choosen
  if (includeLowerCase === false && includeUpperCase === false && includeNumber === false && includeSpecialChar === false) {
    return alert("no criteria choosen!");
  } else {
    //Declare variable for all possible characters to draw from for password generation
    //for each password criteria response, if user response = true, add to charOptions variable, if false don't include
    var charOptions = '';
    if (includeLowerCase === true) {
      charOptions += lowerCase
    }
    if (includeUpperCase === true) {
      charOptions += upperCase
    }
    if (includeNumber === true) {
      charOptions += num
    }
    if (includeSpecialChar === true) {
      charOptions += specialChar
    }
  }

  //initialze variable to hold generated password
  var finalPassword = "";

  //for loop to add random character from charOptions variable to pwd variable till choosen password lenght is reached
  for (var i = 0; i < passwordLength; i++) {
    finalPassword += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }
  return finalPassword;
}
}



