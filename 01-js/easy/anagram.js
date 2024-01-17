/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length) {
    return false;
  }

  //Declaration of map
  let cm1={};
  let cm2={};

  for(let c of str1){
    cm1[c.toLowerCase()]= (cm1 || 0) + 1;
  }
  for(let c of str2){
    cm2[c.toLowerCase()]= (cm2 || 0) + 1;
  }

  for(let c of str1){
    if(cm1[c.toLowerCase()] != cm2[c.toLowerCase()]){
      return false;
    }
  }

  return true;
  
}

module.exports = isAnagram;
