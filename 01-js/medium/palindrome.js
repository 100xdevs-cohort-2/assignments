/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const santizedStr = str.toLowerCase().replace(/[.,!?\s]/g, "");

  let left = 0;
  let right = santizedStr.length - 1;

  while (left <= right) {
    if (santizedStr[left] != santizedStr[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}

module.exports = isPalindrome;
