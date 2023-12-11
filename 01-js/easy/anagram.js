/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let charFreq = {}
    let ans = true

    if(str1.length != str2.length)
        ans = false;
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for(let i = 0; i < str1.length && ans; i++) {
        let ch = str1[i];
        if(charFreq[ch] == undefined)
            charFreq[ch] = 0
        charFreq[ch] += 1
    }

    for(let i = 0; i < str2.length && ans; i++) {
        let ch = str2[i];
        if(charFreq[ch] == undefined ||charFreq[ch] == 0)
            ans = false;
        else {
          charFreq[ch] -= 1;
        }
    }

    return ans;
}

module.exports = isAnagram;
