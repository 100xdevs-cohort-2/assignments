/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[\?\.,! ]/g,"").toLowerCase();
  let start = 0
  // console.log(str);
  let end = str.length-1;
  while(start < end) {
    // if(!str[start].match(/[a-zA-Z]/)) {
      //   start++;
    // }
    // if(!str[end].match(/[a-zA-Z]/)) {
    //   end--;
    // }
    
    if(str[start] != str[end]) {
      // console.log(start +","+ end +","+ str[start] +","+ str[end])
      return false;
    }

    start++;
    end--;
  }
  return true;
}
module.exports = isPalindrome;

// console.log(isPalindrome("race car")); // Remove Punctuation marks
// console.log(isPalindrome("Eva, can I see bees in a cave?")); // 