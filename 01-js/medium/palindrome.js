/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //const reverse = [...str].reverse().join("").toLowerCase();

  let newStr = "";
  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      newStr += char;
    }
  }
  let reverse = [...newStr].reverse().join("");

  return newStr === reverse;
}

module.exports = isPalindrome;
