/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase(); 
  
  if(lowerStr1.length !== lowerStr2.length){
    return false;
  }
  
  const charFreq = new Map();
  for(let char of lowerStr1){
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  }

  for(let char of lowerStr2){
    if(!charFreq.has(char) || charFreq.get(char) === 0){
      return false;
    }
    charFreq.set(char, charFreq.get(char) - 1);
  }

  return true;

}

module.exports = isAnagram;
