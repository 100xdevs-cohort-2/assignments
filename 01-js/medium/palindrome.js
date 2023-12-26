/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1 || str === "") {
    return true;
  }

  let tempStr = str.replace(/[^a-zA-Z]/g, "");

  if (tempStr.length > 1) {
    let i = 0,
      j = tempStr.length - 1;
    while (i <= j) {
      if (tempStr.charAt(i).toLowerCase() === tempStr.charAt(j).toLowerCase()) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = isPalindrome;
