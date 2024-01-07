/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(sort(str1.toLowerCase()) === sort(str2.toLowerCase())){
    return true
  }
  else{
    return false
  }
}

function sort(str1){
  var arr = str1.split("")
  arr = arr.sort();
  var splited = arr.join("")
  return splited
}


module.exports = isAnagram;
