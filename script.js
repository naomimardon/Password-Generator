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

// Function to select password options based on user choices
function getPasswordOptions(arr) {
  let criteriaArray = [];
  criteriaArray = criteriaArray.concat(arr);
  console.log(criteriaArray);
  return criteriaArray;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let characterIndex = Math.floor(Math.random() * arr.length);
  return arr[characterIndex];
  
}

// Function to generate password with user input
function generatePassword() {

  //Resets passcode and criteriaArray each time a new password is generated
  let passcode = [];
  let criteriaArray = [];

  //Prompt to determine length of password
  let lengthPrompt = prompt("Type a number between 10 and 64 to choose the length of your password.\n\nThen click OK.");
  let passwordLength = parseFloat(lengthPrompt);
  console.log("passwordLength: " + passwordLength);

  //Returns an error message if the entry is invalid
  if (!(passwordLength > 9) || !(passwordLength < 65) || !Number.isInteger(passwordLength)) {
      alert("That is an invalid choice. Please try again.");
  } else {
      //confirm whether or not to include special characters 
      let specialConfirm = confirm("Would you like to include special characters (e.g. $@%&*)?\n\nClick OK for Yes and Cancel for No.")
      console.log("specialConfirm: " + specialConfirm);
      if (specialConfirm) {
          criteriaArray = criteriaArray.concat(getPasswordOptions(specialCharacters));
          //selects one character from the specialCharacters array at random, ensuring it is included in the final password if the user has chosen this option
          passcode.push(getRandom(specialCharacters));
      }
      //confirm whether or not to include numerical characters
      let numberConfirm = confirm("Would you like to include numbers (e.g. 01234)?\n\nClick OK for Yes and Cancel for No.");
      console.log("numberConfirm: " + numberConfirm);
      if (numberConfirm) {
          criteriaArray = criteriaArray.concat(getPasswordOptions(numericCharacters));
          //selects one character from the numericalCharacters array at random, ensuring it is included in the final password if the user has chosen this option
          passcode.push(getRandom(numericCharacters));
      }
      //confirm whether or not to include lower cased characters
      let lowerConfirm = confirm("Would you like to include lower case letters (e.g abcde)?\n\nClick OK for Yes and Cancel for No.");
      console.log("lowerConfirm: " + lowerConfirm);
      if (lowerConfirm) {
          criteriaArray = criteriaArray.concat(getPasswordOptions(lowerCasedCharacters));
          //selects one character from the lowerCasedCharacters array at random, ensuring it is included in the final password if the user has chosen this option
          passcode.push(getRandom(lowerCasedCharacters));
      }
      //confirm whether or not to include upper cased characters
      let upperConfirm = confirm("Would you like to include upper case letters (e.g. ABCDE)?\n\nClick OK for Yes and Cancel for No.");
      console.log("upperConfirm: " + upperConfirm);
      if (upperConfirm) {
          criteriaArray = criteriaArray.concat(getPasswordOptions(upperCasedCharacters));
          //selects one character from the upperCasedCharacters array at random, ensuring it is included in the final password if the user has chosen this option
          passcode.push(getRandom(upperCasedCharacters));
      }
  }
  console.log("Passcode containing single chosen characters:" + passcode);

  let passcodeLength = passcode.length;

  console.log("Criteria Array: " + criteriaArray);
 
  console.log("Passcode Length containing single chosen characters: " + passcodeLength);

  //selects the remaining characters at random from an array of all characters chosen by the user and adds them to the single characters randomly selected above
  for (let i = 0; i < passwordLength-passcodeLength; i++) {
      passcode.push(getRandom(criteriaArray));
}
  console.log("passcode: " + passcode);
  let final = passcode.join("")
  console.log("Final: " + final);
  console.log(final.length);
  return final;
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