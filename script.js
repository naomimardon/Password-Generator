// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


let criteriaArray = [];
console.log("criteriaArray: " + criteriaArray);


// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt("Type a number between 10 and 64 to choose the length of your password.\n\nThen click OK.");
  console.log("passwordLength: " + Number(passwordLength));
  if (!(passwordLength > 9) || !(passwordLength < 65) || !Number.isInteger(Number(passwordLength))) {
    alert("That is an invalid choice. Please try again.");
  } else {
    let specialConfirm = confirm("Would you like to include special characters (e.g. $@%&*)?\n\nClick OK for Yes and Cancel for No.")
    console.log("specialConfirm: " + specialConfirm);
      if (specialConfirm) {
        criteriaArray = criteriaArray.concat(specialCharacters);
      }

    let numberConfirm = confirm("Would you like to include numbers (e.g. 01234)?\n\nClick OK for Yes and Cancel for No.");
    console.log("numberConfirm: " + numberConfirm);
      if (numberConfirm) {
        criteriaArray = criteriaArray.concat(numericCharacters);
      }

    let lowerConfirm = confirm("Would you like to include lower case letters (e.g abcde)?\n\nClick OK for Yes and Cancel for No.");
    console.log("lowerConfirm: " + lowerConfirm);
      if (lowerConfirm) {
        criteriaArray = criteriaArray.concat(lowerCasedCharacters);
      }

    let upperConfirm = confirm("Would you like to include upper case letters (e.g. ABCDE)?\n\nClick OK for Yes and Cancel for No.");
    console.log("upperConfirm: " + upperConfirm);
      if (upperConfirm) {
        criteriaArray = criteriaArray.concat(upperCasedCharacters);
      }
  }

  console.log(criteriaArray);
}


  // Function for getting a random element from an array
  function getRandom(arr) {
 
  }

  // Function to generate password with user input
  function generatePassword() {
    getPasswordOptions();
  
  

  }

  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);

