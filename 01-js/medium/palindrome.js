/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str === "") {
    return true;
  }

  let ConvertLowerCase = str.toLowerCase().split(" ").join("");

  let MirrorStr = ConvertLowerCase.split("").reverse().join("");
  if (
    MirrorStr.replace(/[".,/,,/?,/#,/@,/!"]/g, "") ===
    ConvertLowerCase.replace(/[".,/,,/?,/#,/@,/!"]/g, "")
  ) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
