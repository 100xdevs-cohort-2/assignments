/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (!str) return true;

  // Regex removes Non Alphabetic char and converts to lower case
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanStr.length === 2 && cleanStr[0] === cleanStr[1]) return true;
  else if (cleanStr.length === 2 && cleanStr[0] !== cleanStr[1]) return false;

  let midIndex = Math.floor(cleanStr.length / 2);
  for (let i = 0; i < midIndex; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
