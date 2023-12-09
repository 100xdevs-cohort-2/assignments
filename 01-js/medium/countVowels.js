/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowarr = ['a','e','i','o','u'];
  let vowcount = 0;
  str = str.toLowerCase();
  for(let i of str)
  {
      if(vowarr.includes(i))
      {
        vowcount++;
      }
  }
  return vowcount;
}

module.exports = countVowels;