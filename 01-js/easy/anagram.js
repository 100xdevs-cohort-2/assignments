/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  let fc1 = {};
  let fc2 = {};  
  for(let i of str1){
    fc1[i] = ++fc1[i] || 1; 
  }
  for(let i of str2){
    fc2[i] = ++fc2[i] || 1; 
  }
  for(let i in fc1){
    if(!i in fc2){
      return false;
    }
    if(fc1[i]!=fc2[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
