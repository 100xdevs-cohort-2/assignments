/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const removeSplchar = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverse = removeSplchar.split('').reverse().join('');
  if(removeSplchar == reverse)
  {
    return true;
  }
  else{
    return false;
  }
}

console.log(isPalindrome('Mr. Owl ate my metal worm.'))
