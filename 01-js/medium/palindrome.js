/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let strLow = str.toLowerCase();
  if (strLow == strLow.split("").reverse().join("")) {
    return true;
  } else if (
    strLow.split(" ").join("") ==
    strLow.split(" ").join("").split("").reverse().join("")
  ) {
    return true;
  } else if (strLow.match(regex)) {
    let punch = strLow
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("");
    if (
      punch ==
      strLow
        .replace(/[^a-zA-Z ]/g, "")
        .split(" ")
        .join("")
        .split("")
        .reverse()
        .join("")
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

module.exports = isPalindrome;
