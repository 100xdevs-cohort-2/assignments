/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

let sortString = (stringg) => {
  return stringg.split("").sort().join("");
};

function isAnagram(str1, str2) {
  //  in this question we have can think of sorting the array and then comparing both of them
  // converted it to lowercase to solve the case sensiteive issue
  
  let cleanStr1 = str1.toLowerCase();
  let cleanStr2 = str2.toLowerCase();
  // this split method will seprate the each element as return an array
  // and then sort() is the method to sort the array and then we join all the element in the array
  let sortedStr1 = cleanStr1.split("").sort().join("");
  let sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;