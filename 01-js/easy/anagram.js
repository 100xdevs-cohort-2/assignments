/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  // steps
  // check if the length of the strings are same
  // store the counts of the chars of the respective strings in respective objects
  // iterate through the object's keys and check if all chars have same count

  // time complexity - O(n)
  // space complexity - O(n)

  if(str1.length !== str2.length)
    return false;

  let str1Count = {};
  let str2Count = {}; 

  for(let char of str1.toLowerCase())
  {
    str1Count[char] = (str1Count[char] || 0) + 1;
  }

  for(let char of str2.toLowerCase())
  {
    str2Count[char] = (str2Count[char] || 0) + 1;
  }

  console.log(str1Count)
  console.log(str2Count)

  for(let char of Object.keys(str1Count))
  {
    if (str1Count[char] !== str2Count[char])
      return false;
  }

  return true;

}

console.log(isAnagram('Debit Card', 'Bad Credit'));



module.exports = isAnagram;
