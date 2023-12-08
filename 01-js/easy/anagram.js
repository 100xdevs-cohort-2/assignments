/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the lengths are the same
  if (str1.length !== str2.length) {
    return false;
  }

  // Use an object to store the frequency of each character in str1
  const charFrequency = {};

  // Iterate through str1 to populate charFrequency
  for (const char of str1) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through str2 to decrement the frequency of each character
  for (const char of str2) {
    // If the character is not in charFrequency or its frequency becomes 0, they are not anagrams
    if (!charFrequency[char]) {
      return false;
    }

    charFrequency[char]--;
  }

  // If we have iterated through both strings without returning false, they are anagrams
  return true;
}
console.log(isAnagram("spar", "rasp"));
module.exports = isAnagram;
