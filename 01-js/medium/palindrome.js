/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();        // The regular expression /[^a-zA-Z0-9]/g is used to match any character that is not a letter (either uppercase or lowercase) or a digit (0-9)
  let newStr='';
  for(let i=cleanStr.length-1; i>=0; i--) {
    // newStr.charAt(n-i) = str.charAt(i);    // can't do this because charAt method is used for retrieving characters, not for assignment.
    newStr += cleanStr.charAt(i);
  }
  return newStr===cleanStr;
}

module.exports = isPalindrome;
