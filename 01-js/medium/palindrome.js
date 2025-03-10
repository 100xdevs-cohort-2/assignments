/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split(''); // first removed the all of commas and special character 
  // then converted to lowecase then split into char array here 
  let i = 0;
  let j = str.length-1;
  let ans = true;
  while(i <= j){
    if(str[i] == str[j]){
      i++;
      j--;
    }else{
      ans = false
      break;
    }
  }
  return ans;
}

module.exports = isPalindrome;
