/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count =0;
    let str_array = str.split("").join("");
    let vowel=['a','e','i','o','u']
    let Vowel=['A','E','I','O','U']
    for(let i=0;i<str_array.length;i++)
    {
      for(let j=0;j<5;j++)
      {
        if(str_array[i] == vowel[j] || str_array[i] == Vowel[j])
          count=count+1;
      }
    }
    return count;
}

module.exports = countVowels;