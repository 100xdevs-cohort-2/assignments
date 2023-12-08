/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) 
{
    str = str.toLowerCase();
    let chars = str.split("");
    let count = 0;

    for(let i=0; i<chars.length; i++)
    {
      let char = chars[i];
      if(char=="a" || char=='e' || char=='i' || char=='o' || char=='u')
      {
        count = count + 1;
      }

    }

    return count;

}

module.exports = countVowels;