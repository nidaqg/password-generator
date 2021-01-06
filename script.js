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



//prompt boxes to get password criteria

var passwordLenght = parseInt(lenghtInput);
     var lenghtInput = prompt("How many characters long do you want the password to be? Choose between 8 and 128 charcters");
var includeLowerCase = confirm("Include Lowercase letters? Click ok to include, click cancel to not include");
var includeUpperCase = confirm("Include Uppercase letters? Click ok to include, click cancel to not include");
var includeNumber = confirm("Include numbers? Click ok to include, click cancel to not include");
var includeSpecialChar = confirm("Include Special Characters? Click ok to include, click cancel to not include");







//Create an object with each property value being a function, each generating a random character 
//from lowercase, uppercase, numbers and special characters
var randomCharacter = {
  lower: yesLowerCase,
  upper: yesUpperCase,
  num: yesNumber,
  specialChar: yesSpecialCharacters
};


//this function will return a random lowercase letter using the HTML character set
 function yesLowerCase () {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 //this function will return a random uppercase letter using the HTML character set
 function yesUpperCase () {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }


  //this function will return a random numeric character between 0 and 9 using the HTML character set
 function yesNumber () {
   return String.fromCharCode(Math.floor(Math.random() * 10) +48);
 }

 //this function will loop through string of special characters to return random character
 function yesSpecialCharacters () {
   var specialCharacters = '!@#$%^&*(){}[]=<>/,.|~?';
   return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
 }
