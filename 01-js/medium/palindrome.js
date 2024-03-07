function reverseString(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr.split("").reverse().join("");
}

function isPalindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedStr = reverseString(str);

  return cleanedStr === reversedStr;
}

module.exports = isPalindrome;
