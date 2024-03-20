/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running

  Initial Solution:
  function countVowels(str) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    str = str.toLowerCase().split('').sort();
    for(i=0;i<str.length;i++){
      if(vowels.includes(str[i])){
        count = count + 1;
      }
    }
    return count;
}

Optimised one:

*/

function countVowels(str) {
  const vowelsRegex = /[aeiou]/gi;
  const matches = str.match(vowelsRegex);
  return matches ? matches.length : 0;
}

count = countVowels('addseffiddo');

module.exports = countVowels;