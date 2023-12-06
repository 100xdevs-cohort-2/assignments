/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercasedStr = str.toLowerCase();

  let left = 0;
  let right = lowercasedStr.length - 1;

  while (left < right) {
    if (lowercasedStr[left] !== lowercasedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

<<<<<<< HEAD
console.log(isPalindrome("Nan"));

module.exports = isPalindrome;
=======

console.log(isPalindrome("Nan"));  

>>>>>>> bdfca9a4ea3724d3dcf3155ab1bf5b46deaea406
