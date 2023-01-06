// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// Variable to store the user inputted password length
let passwordLength = prompt("Enter a number, between 10 and 64, that you would like your password length to be?");

// Checks to ensure password length is in valid range, and if not, re-prompts user
while (passwordLength < 10 || passwordLength > 64) {
  passwordLength = prompt("Enter a number, between 10 and 64, that you would like your password length to be?");
}

// Empty array to store the user selected array options
let potentialCharacters = [];

// Variables for storing boolean responses to password options
let includeLowerCase;
let includeUpperCase;
let includeNumbers;
let includeSpecialChars;

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompts user for boolean response for each option and stores input
  includeLowerCase = confirm("Would you like lowercase letters in your password?");
  includeUpperCase = confirm("Would you like uppercase letters in your password?");
  includeNumbers = confirm("Would you like numbers in your password?");
  includeSpecialChars = confirm("Would you like special characters (e.g, @, %, $) in your password?");

  // The following if statements check to see if each option is true, and when it is, concatenates the corresponding array to the potentialCharacters array
  if (includeLowerCase) {
    potentialCharacters = potentialCharacters.concat(lowerCasedCharacters);
  }
  if (includeUpperCase) {
    potentialCharacters = potentialCharacters.concat(upperCasedCharacters);
  }

  if (includeNumbers) {
    potentialCharacters = potentialCharacters.concat(numericCharacters);
  }

  if (includeSpecialChars) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }

  // Checks to ensure at least one 'include' option was selected, and if not, alerts the user and calls the function to run again
  if (potentialCharacters.length === 0) {
    alert("You must select at least ONE of the options to continue!")
    getPasswordOptions();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length) ;
}

// Function to generate password with user input
function generatePassword() {

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