/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lhs = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //removes special characters and anything that is not (a-z) OR (A-Z) OR (0-9)

  let rhs = lhs.split("").reverse().join("");

  console.log("string: ", lhs);
  console.log("newStr: ", rhs);

  if (lhs === rhs) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
