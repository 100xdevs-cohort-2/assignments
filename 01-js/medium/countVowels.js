/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const pattern = 'a|e|i|o|u'
  const re = new RegExp(pattern);
  const tempStr = str.toLowerCase();
  let countVowels = 0;
  for(let i=0;i<str.length;i++){
    if(tempStr[i].match(re)){
      countVowels+=1
    }
  }
  return countVowels
    // Your code here
}


module.exports = countVowels;