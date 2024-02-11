/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isNotAlpha(ch) {
  return !/[a-zA-Z]/.test(ch);
}

function isPalindrome(str) {
  let low = 0,
    high = str.length - 1;
  const strLow = str.toLowerCase();

  while (low < high) {
    if (isNotAlpha(strLow[low])) low++;
    else if (isNotAlpha(strLow[high])) high--;
    else if (strLow[low] !== strLow[high]) return false;
    else {
      low++;
      high--;
    }
  }

  return true;
}

module.exports = isPalindrome;
