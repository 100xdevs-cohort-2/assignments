/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {

  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  map=new Map();
  for(let char of str1){
      map.set(char,(map.get(char)??0)+1);
  }
  for(let char of str2){
    map.set(char,(map.get(char)??0)-1);
  }
  for(let [key,val] of map){
    if(val!=0) return false;
  }

  return true;
}
module.exports = isAnagram;
