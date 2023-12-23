/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var lowerCaseStr1 = str1.toLowerCase();
  var lowerCaseStr2 = str2.toLowerCase();
  if(sort(lowerCaseStr1) == sort(lowerCaseStr2)){
    return true
  }else{
    return false
  }

}

function sort(str){
  return str.split("")
            .sort()
            .join("")
}


module.exports = isAnagram;
