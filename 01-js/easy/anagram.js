/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){
  if(str1.length==0 && str2.length==0) return true ; 
  str1 = str1.toLowerCase() ; 
  str2= str2.toLowerCase() ; 
  let chararry1 = str1.split("") 
  let chararry2 = str2.split("") 

  chararry1.sort() 
  chararry2.sort() 
  if(chararry1.join("")==chararry2.join("")){
    return true ; 
  }
  return false ; 
}

module.exports = isAnagram;
