/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   const sorted1=str1.toLowerCase().replace(/\s/g,'').split('').sort().join('');
   const sorted2=str2.toLowerCase().replace(/\s/g,'').split('').sort().join('');
   return sorted1==sorted2 ? true : false;
   
}
// console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
