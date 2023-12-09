/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

// make sure the length are equal 
  if (str1.length !== str2.length) {
    return false
}
// case check 
let s1 = str1.toLowerCase()
let s2 = str2.toLowerCase()

// naive approach 
// Time complexity - O(nlogn)
// Space complexity - O(n)
// // sort and compare 
// const sSort = s1.split("").sort().join("")
// const tSort = s2.split("").sort().join("")

// return sSort === tSort

// optimize approach - 
// Time Complexity is O(n)
// Space Complexity is O(n)


let charFreq = new Map() 
// loop and store the char freq 
for (let i = 0; i < s1.length; i++){
  if(!str1[i]){
    charFreq[s1[i]] = 1
  } else {
    charFreq[s1[i]]++ 
  }
}


// check freq of char are same 
for(let i = 0; i < s2.length; i++){
  // if char is undefined
  if(charFreq[s2[i]] === undefined) {
    return false
  }
  // if char freq is less than 1
  if(charFreq[s2[i]] < 1){
    return false
  }
  charFreq[s2[i]]--
}
return true
}

module.exports = isAnagram;
