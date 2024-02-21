/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sort(str){ 
  str = str.toLowerCase();
  array = str.split('');
 array=array.sort();
  var SortedString = array.join('');
  return SortedString;
}
function isAnagram(str1, str2) {
if(sort(str1) === sort(str2)){
  return true;
}else {
  return false;
}
}

module.exports = isAnagram;