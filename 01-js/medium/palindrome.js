/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(char) {
  // Check if the character is an uppercase or lowercase alphabet
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}
function isPalindrome(str) {
  // Convert the string to lowercase
  const lowerCaseStr = str.toLowerCase();

  // Create a cleaned string with only alphabets
  let cleanStr = '';
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (isAlphabet(lowerCaseStr[i])) {
      cleanStr += lowerCaseStr[i];
    }
  }

  // Use two pointers to check for palindrome
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}



module.exports = isPalindrome;
