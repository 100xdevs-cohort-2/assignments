/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var arr = [...str];
  arr = arr.reverse();
  var reversedString = arr.join("");
  var reversedString = reversedString
    .replace(/[.,\/#!$%\^&\*'";:{}=\-_`~()?]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "");
  var str = str
    .replace(/[.,\/#!$%\^&\*'";:{}=\-_`~()?]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "");

  if (str == reversedString) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
