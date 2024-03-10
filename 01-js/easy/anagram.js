/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
var arr1=str1.split('');
arr1.sort();
var arr2=str2.split('');
arr2.sort();
return(arr1.join('')==arr2.join(''));
}

module.exports = isAnagram;
