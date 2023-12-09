/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length && str2.length){
    const string1 = str1.replace(/\s|\p{P}/gu,"").toLowerCase();
    const string2 = str2.replace(/\s|\p{P}/gu,"").toLowerCase();

    if(string1 === string2) return false;

    const alphabetSize = 26; //alphabets of english
    const frequency1 = new Array(alphabetSize).fill(0);//array with 26 element with value 0
    const frequency2 = new Array(alphabetSize).fill(0);//array with 26 element with value 0

    for (const char of string1) {
      frequency1[char.charCodeAt(0) - 97] += 1;
    };//looping over string and subtracting character's unicode with 97 (unicode code of "a")
  
    for (const char of string2) {
      frequency2[char.charCodeAt(0) - 97] += 1;
    };//and updating the element value (0) at the received index  
  
    for (let i = 0; i < alphabetSize; i++) {
      if (frequency1[i] !== frequency2[i]) {
        return false;
      };
    };

    return true;
  };
  return true;
};

// time complexity - O(n);
// space complexity - O(1);

module.exports = isAnagram;
