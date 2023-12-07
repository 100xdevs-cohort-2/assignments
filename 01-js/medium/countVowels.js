/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(ch)
{
  if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
  {
    return true;
  }
  return false;
}
function countVowels(str) {
  let count = 0;
    str = str.toLowerCase();
    console.log(str)
    for(let ch of str)
    {
      if(isVowel(ch))
      {
        count++;
      }
    }

    return count;
}

module.exports = countVowels;