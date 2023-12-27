/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let sc = str.charAt(start); //sc = startChar ec = endChar
    let ec = str.charAt(end);
    if (!isLetterOrDigit(sc)) {
      start++;
    }
    else if (!isLetterOrDigit(ec)) {
      end--;
    }
    else {
      if (sc == ec) {
        start++;
        end--;
      } else {
        return false;
      }
    }

  }
  return true;
}
function isLetterOrDigit(char) {
  return /[a-zA-Z0-9]/.test(char);
}


module.exports = isPalindrome;
let n = "naya";
console.log(isPalindrome(n));
