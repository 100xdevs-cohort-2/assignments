/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
const checkVowel = str.toLowerCase().split('');
  let vowel=0;
  for(let i=0;i<=checkVowel.length;i++)
    {
      if(checkVowel[i]=== 'a' || checkVowel[i]==='e'||checkVowel[i]==='i'||checkVowel[i]==='o'||checkVowel[i]==='u')
      {
        vowel++;
        }
  }
  return vowel;
}

module.exports = countVowels;
