/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  hash1 = []
  tempStr1 = str1.toLowerCase();
  for(let i=0;i<256;i++){hash1[i] = 0;}
  for(let j=0;j<tempStr1.length;j++){
    hash1[tempStr1[j].charCodeAt(0)] += 1
  }
  
  hash2 = []
  tempStr2 = str2.toLowerCase();
  for(let i=0;i<256;i++){hash2[i] = 0;}
  for(let j=0;j<tempStr2.length;j++){
    hash2[tempStr2[j].charCodeAt(0)] += 1
  }
  
  for(let i=0;i<256;i++){
    if(hash1[i]!==hash2[i]){
      return false
    }
  }
  return true
}

module.exports = isAnagram;
