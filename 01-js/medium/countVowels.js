/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let newStr = str.toLowerCase();
  let ans = 0;
  for (let i = 0; i < newStr.length; i++){
    if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u'){
      ans++;
    }
  }
  return ans;
}

module.exports = countVowels;