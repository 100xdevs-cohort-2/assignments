/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length){
    return false;
  }
  
  const charFrequency = (str) => {
    const frequency = {};
    for (const char of str){
      frequency[char] = (frequency[char] || 0) + 1;    
    }
    return frequency;
  };
  
  // Compare the frequency of characters in both strings
  const frequency1 = charFrequency(str1);
  const frequency2 = charFrequency(str2);

  // Check if both frequency objects are equal
  for (const char in frequency1){
    if (frequency1[char] !== frequency2[char]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
