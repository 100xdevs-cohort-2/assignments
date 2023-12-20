/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^0-9A-Z]+/gi, "");
  front = 0;
  end = str.length - 1;

  while (front < end) {
    if (str[front] != str[end]) {
      return false;
    }
    front++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
