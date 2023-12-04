/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(str, ind) {
  const asciVal = str.charCodeAt(ind);
  return (asciVal >= 65 && asciVal < 91) || (asciVal >= 97 && asciVal < 123);
}

function isPalindrome(str) {
  let firstIndex = 0,
    lastIndex = str.length - 1;

  while (firstIndex < lastIndex) {
    if (!isAlphabet(str, firstIndex)) {
      firstIndex += 1;
    } else if (!isAlphabet(str, lastIndex)) {
      lastIndex -= 1;
    } else if (
      str.charAt(firstIndex).toLowerCase() ===
      str.charAt(lastIndex).toLowerCase()
    ) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
