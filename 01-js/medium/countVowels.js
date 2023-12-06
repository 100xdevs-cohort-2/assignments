/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  str=str.toLowerCase();
  let ans=0;
  let vowels=['a','e','i','o','u'];
  for(let char of str) {
    // console.log(char)
    if( vowels.reduce((old,ele)=>old || ele==char,false)) ans++;
  }
  return ans;
}

// console.log(countVowels("otha"))
module.exports = countVowels;