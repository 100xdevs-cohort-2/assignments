/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function removeSpecialCharactersFromArray(str) {
  const regex = /[!@#$%^&*(),+-=.? ":{}|<>]/g;
  const sanitizedArray = str.replace(regex, '');

  return sanitizedArray;
}

function isPalindrome(str) {
  
  const sanitizedArray = removeSpecialCharactersFromArray(str);
 // console.log(sanitizedArray);
  const wordstring = sanitizedArray.toString().toLowerCase();
  const wordArray = wordstring.toLowerCase().split('');
  const reversedStr = wordArray.reverse().join('');

  return wordstring===reversedStr;

}
module.exports = isPalindrome;
