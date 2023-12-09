/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
function isAnagram(str1, str2) {
    // Helper function to normalize and sort the characters in a string
    const normalize = str => str
        .replace(/[\W_]+/g, '') // Remove non-alphabetic characters and underscores
        .toLowerCase()         // Convert to lowercase
        .split('')             // Split into characters
        .sort()                // Sort characters
        .join('');             // Join characters back into a string

    // Compare the normalized strings
    return normalize(str1) === normalize(str2);
}

module.exports = isAnagram;


  
