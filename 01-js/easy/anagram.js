/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  let a=str1.split('').sort().join('');
  let b=str2.split('').sort().join('');
  if(a===b){
    console.log("true");
    return true;
  }
  else{

    console.log("false");

    return false;
  }
}
isAnagram("ndiann","indian")
module.exports = isAnagram;