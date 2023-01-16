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


// Function to prompt user for password options
function generatePassword() {
  let lengthPrompt = prompt("Type a number between 10 and 64 to choose the length of your password.\n\nThen click OK.");
  let passwordLength = parseFloat(lengthPrompt);
  console.log("passwordLength: " + passwordLength);
  
  if (!(passwordLength > 9) || !(passwordLength < 65) || !Number.isInteger(passwordLength)) {
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

    console.log("Password Length: " + passwordLength);
    console.log("Criteria Array: " + criteriaArray);

    let passcode = [];
    for (let i = 0; i < passwordLength; i++) {
      let passwordCharacter  = criteriaArray[Math.floor(Math.random()*criteriaArray.length)];
      passcode.push(passwordCharacter)
  }
    console.log("passcode.join: " + passcode.join(""));
    var final = passcode.join("")
    console.log("Final: " + final);
    return final;
}


  // Get references to the #generate element
  let generateBtn = document.querySelector('#generate');

  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);

 