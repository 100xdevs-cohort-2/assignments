/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels=0;
    let s = str.toLowerCase();
    // let s = s1.split("").join("");
    for(let i=0;i<s.length;i++)
    {
      if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
      {
          vowels++;
      }
    }
    return vowels;
}

module.exports = countVowels;