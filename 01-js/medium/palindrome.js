/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let n = str.length;
  let i = 0,
    j = n - 1,
    half = n / 2;
  while (i < j) {
    if (!isLetter(str.charAt(i))) {
      i++;
    } else if (!isLetter(str.charAt(j))) {
      j--;
    } else {
      if (str.charAt(i++) !== str.charAt(j--)) return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
