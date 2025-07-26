/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // if(str.length==0)

  let arrayOfStr = str.trim().toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  let lengthOfArray = arrayOfStr.length;
  for(let i=0;i<arrayOfStr.length/2;i++)
  {
      if(arrayOfStr[i]!==arrayOfStr[lengthOfArray-1-i])
      {
          return false;
      }
  }

    return true;
}

module.exports = isPalindrome;
