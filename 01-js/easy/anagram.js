/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// const for total unicode value
const NO_OF_CHARS = 256;
function isAnagram(str1, str2) {
  // Create two count arrays and initialize all values as 0
  const count = Array(NO_OF_CHARS).fill(0);

  // Remove space and convert the strings in to lowercase
  let removeSpaceFromStr1 = str1.replace(/\s/g, "").toLowerCase();
  let removeSpaceFromStr2 = str2.replace(/\s/g, "").toLowerCase();

  // For each character in input strings, increment count in the corresponding count array
  for (
    let i = 0;
    i < removeSpaceFromStr1.length && i < removeSpaceFromStr2.length;
    i++
  ) {
    count[removeSpaceFromStr1.charCodeAt(i)]++;
    count[removeSpaceFromStr2.charCodeAt(i)]--;
  }

  // If both strings are of different length. Removing this condition
  // will make the program fail for strings like "aaca" and "aca"
  if (removeSpaceFromStr1.length != removeSpaceFromStr2.length) return false;

  // See if there is any non-zero value in count array
  for (let i = 0; i < NO_OF_CHARS; i++) if (count[i]) return false;

  return true;
}

module.exports = isAnagram;
