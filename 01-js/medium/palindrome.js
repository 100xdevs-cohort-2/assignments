/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

/**
 *  /[a-zA-z]/ig
 * Could have used above regex but avoided
 */

function parseStr(str) {
  let result = '';
  for (let index in str) {
    const char = str[index];
    const charCode = str.charCodeAt(index);

    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    }

    if (charCode >= 97 && charCode <= 122) {
      result += char;
    }
  }
  return result;
}

function isPalindrome(str) {
  const parsedStr = parseStr(str);

  let leftIndex = 0;
  let rightIndex = parsedStr.length - 1;

  for (
    ;
    leftIndex < parsedStr.length && leftIndex !== rightIndex;
    ++leftIndex, --rightIndex
  ) {
    const leftCharacter = parsedStr[leftIndex];
    const rightCharacter = parsedStr[rightIndex];
    if (leftCharacter !== rightCharacter) return false;
  }

  return true;
}

module.exports = isPalindrome;
