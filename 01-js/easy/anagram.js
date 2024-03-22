/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

 const sortedStr1 = str1.split("").sort().join("").toLocaleLowerCase(); 
 const sortedStr2 = str2.split("").sort().join("").toLocaleLowerCase();

 const n1 = sortedStr1.length;
 const n2 = sortedStr2.length;
 if(n1!=n2){
  return false;
 }

 for(let i=0;i<n1;i++){
  if(sortedStr1[i]!=sortedStr2[i]){
    return false;
  }
 }
 return true;
}

module.exports = isAnagram;
