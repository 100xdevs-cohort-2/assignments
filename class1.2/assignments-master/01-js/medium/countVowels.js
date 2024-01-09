/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I' ,'O', 'U'];
  let count = 0;
  for (var i = 0; i < str.length; i++)
  {
    if (vow.includes (str[i]))
    {
      count += 1;
    }
  }
  return count;
}

module.exports = countVowels;