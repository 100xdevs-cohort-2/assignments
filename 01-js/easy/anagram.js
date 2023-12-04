/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  arr1 = str1.toLowerCase().split('');
  arr2 = str2.toLowerCase().split('');
  arr1.sort().toString();
  arr2.sort().toString();
  if(arr1.toString() === arr2.toString()){
    return true;
  }
  else{
    return false;
  }
}
//console.log(isAnagram('listen', 'silent'));

module.exports = isAnagram;
