/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let oldStr = str.toLowerCase();
  let reverseStr = str.toLowerCase().split("").reverse().join("");

  if(oldStr === reverseStr)
  {
      return true;
  }
  else
  {
    return false;
  }
}

  let input = "civic";
  let result = isPalindrome(input);
  console.log(result);

  let input2 = "sad";
  let result2 = isPalindrome(input2);
  console.log(result2);

module.exports = isPalindrome;
