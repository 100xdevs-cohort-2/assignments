/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

console.log(isAnagram('H','Hello'));

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  } else {
    let sortedstr1 = str1.toLowerCase().split('').sort().join(''); 
    let sortedstr2 = str2.toLowerCase().split('').sort().join(''); 

    if(sortedstr1 === sortedstr2) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = isAnagram;
