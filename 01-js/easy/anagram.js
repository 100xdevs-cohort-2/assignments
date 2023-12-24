/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   let len1 = str1.length;
   let len2 = str2.length;
   
   if (len1 !== len2) {
      console.log('Invalid Input');
      return;
   }
   
   let sortedStr1 = str1.split('').sort().join('');
   let sortedStr2 = str2.split('').sort().join('');
   
   if (sortedStr1 === sortedStr2) {
      console.log("True");
   } else { 
      console.log("False");
   }
}

module.exports = isAnagram;

