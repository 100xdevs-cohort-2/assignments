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


console.log(isPalindrome("Nan"));  

