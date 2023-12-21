/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerCasedStr = str.toLowerCase().split(" ");

  const finalProcessedString = lowerCasedStr
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < finalProcessedString.length / 2; i++) {
    if (["!", "?", " ", ","].includes(finalProcessedString[i])) {
      continue;
    } else {
      if (
        finalProcessedString[i] !==
        finalProcessedString[finalProcessedString.length - 1 - i]
      )
        return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
