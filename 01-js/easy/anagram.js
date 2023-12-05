/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//Function to remove space and convert to lowercase
function isAnagram(str1, str2) {
  const properStr1 = str1.replace(/\s/g, '').toLowerCase();
  const properStr2 = str2.replace(/\s/g,'').toLowerCase();

//Check if the length is equal
  if (properStr1.length !== properStr2.length) {
    return false;
  }
//sorting the characters
  const sortedStr1 = properStr1.split('').sort().join('');
  const sortedStr2 = properStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const result = isAnagram('love','ovel');

console.log(result);

module.exports = isAnagram;
