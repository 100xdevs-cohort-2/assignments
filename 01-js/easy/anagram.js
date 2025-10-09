/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


 // ALGO: If string1 and string2 are anagrams then they both should equal in the length and have same set of letters and SPACE as well
// step1: iterate through each character of string1 and check if they are present in the string 2 
// if the letter is found in the string 2, then we move on to the next letter
//
// r a s p     s p a r
// 0 1 2 3     0 1 2 3
  // Normalize: lowercase and remove spaces and special characters

  // REGEX: Regular Expressions uses a sequence of charcaters to define a search pattern. But don't use here, just split the strings, sort and join them and compare both of the strings


function isAnagram(str1, str2) {


   const normalize =(str) =>{
    
   return str.toLowerCase().split("").sort().join("")
 
   }

  if (normalize(str1)== normalize(str2)) return true
  else return false

  }

module.exports = isAnagram;
